"use client";

import { useRef, useState } from "react";

const BRAND = "#F26522";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const mountedAtRef = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
      elapsedMs: Date.now() - mountedAtRef.current,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !body.ok) {
        throw new Error(body.error || "Failed to send");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    }
  }

  const disabled = status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
    >
      <p className="text-sm font-semibold text-slate-900">Send us a message</p>

      {/* Honeypot — hidden from real users; bots tend to fill every field. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-slate-600"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={disabled}
            className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-[color:var(--brand)] focus:bg-white focus:outline-none disabled:opacity-60"
            style={{ ["--brand" as string]: BRAND }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-600"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={disabled}
            className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-[color:var(--brand)] focus:bg-white focus:outline-none disabled:opacity-60"
            style={{ ["--brand" as string]: BRAND }}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-slate-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            disabled={disabled}
            className="mt-1 w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-[color:var(--brand)] focus:bg-white focus:outline-none disabled:opacity-60"
            style={{ ["--brand" as string]: BRAND }}
          />
        </div>
        <button
          type="submit"
          disabled={disabled}
          className="w-full rounded-md py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ backgroundColor: BRAND }}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" && (
          <p
            role="status"
            className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800 ring-1 ring-emerald-200"
          >
            Thanks — your message was sent. We&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800 ring-1 ring-red-200"
          >
            {errorMsg || "Something went wrong. Please try again or call us."}
          </p>
        )}
      </div>
    </form>
  );
}
