const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /https?:\/\//gi;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const submissions = new Map<string, number[]>();

const ALLOWED_HOSTS = new Set([
  "palletsextrasolutionsllc.com",
  "www.palletsextrasolutionsllc.com",
  "localhost",
  "localhost:3000",
  "127.0.0.1:3000",
]);

const MIN_FORM_FILL_MS = 2000;

function hostFromHeader(value: string | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).host;
  } catch {
    return null;
  }
}

function isAllowedOrigin(request: Request): boolean {
  const originHost = hostFromHeader(request.headers.get("origin"));
  if (originHost && ALLOWED_HOSTS.has(originHost)) return true;
  const refererHost = hostFromHeader(request.headers.get("referer"));
  if (refererHost && ALLOWED_HOSTS.has(refererHost)) return true;
  return false;
}

function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function withinRateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return false;
  }
  recent.push(now);
  submissions.set(ip, recent);
  return true;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Contact form not configured: missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL"
    );
    return Response.json(
      { ok: false, error: "Email service not configured" },
      { status: 500 }
    );
  }

  // Reject requests not coming from our own site (catches bots that POST
  // directly to /api/contact without going through the page).
  if (!isAllowedOrigin(request)) {
    return Response.json({ ok: true });
  }

  let body: {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    company?: unknown;
    elapsedMs?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Honeypot: real users never see this field, bots fill everything.
  // Pretend success so spammers think it went through.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  // Minimum form-fill time: real users take at least a couple seconds.
  // Field is set by the browser-side form, so requests missing it are
  // either bots that didn't run JS or replayed payloads.
  const elapsed =
    typeof body.elapsedMs === "number" ? body.elapsedMs : Number.NaN;
  if (!Number.isFinite(elapsed) || elapsed < MIN_FORM_FILL_MS) {
    return Response.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (!withinRateLimit(ip)) {
    return Response.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Please fill in all fields." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (name.length > 200 || message.length > 5000) {
    return Response.json(
      { ok: false, error: "Submission too long." },
      { status: 400 }
    );
  }

  // Reject obvious link-spam (legitimate inquiries rarely contain 3+ URLs).
  const linkCount = (message.match(URL_RE) ?? []).length;
  if (linkCount >= 3) {
    return Response.json({ ok: true });
  }

  const subject = `New website message from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const html = `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error:", res.status, detail);
    return Response.json(
      { ok: false, error: "Could not send the message. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
