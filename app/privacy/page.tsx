import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BRAND = "#F26522";
const EFFECTIVE_DATE = "May 15, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pallets Extra Solutions LLC collects, uses, and protects information submitted through our website contact form.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="Pallets Extra Solutions LLC"
              width={160}
              height={80}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold hover:opacity-80"
            style={{ color: BRAND }}
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <div
            className="mt-3 h-1 w-16 rounded"
            style={{ backgroundColor: BRAND }}
          />
          <p className="mt-4 text-sm text-slate-500">
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
            <section>
              <p>
                Pallets Extra Solutions LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                or &ldquo;our&rdquo;) operates this website to provide
                information about our pallet manufacturing, repair, recycling,
                and management services. This Privacy Policy explains what
                information we collect when you use our website and how we use
                it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Information We Collect
              </h2>
              <p className="mt-3">
                We only collect information you voluntarily provide through our
                contact form, including:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Your name</li>
                <li>Your email address</li>
                <li>The contents of any message you send us</li>
              </ul>
              <p className="mt-3">
                We do not require you to create an account, and we do not use
                advertising or analytics cookies on this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information you submit only to respond to your
                inquiry, provide quotes, and follow up about our services. We do
                not sell, rent, or trade your personal information to third
                parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Service Providers
              </h2>
              <p className="mt-3">
                We use a third-party email delivery service (Resend) to transmit
                contact-form submissions to our business email account. Our
                website is hosted on third-party infrastructure that may
                automatically log standard request data (such as IP address and
                browser user-agent) for security and reliability purposes. These
                providers process information on our behalf and are not
                permitted to use it for their own purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Data Retention
              </h2>
              <p className="mt-3">
                We retain contact-form submissions for as long as reasonably
                needed to respond to your inquiry and maintain a record of our
                business communications. You can request that we delete your
                information at any time by emailing us at the address below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Your Choices
              </h2>
              <p className="mt-3">
                You can choose not to submit information through our contact
                form by calling us directly. To request access to, correction
                of, or deletion of information you have submitted, contact us
                using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Children&rsquo;s Privacy
              </h2>
              <p className="mt-3">
                This site is intended for business communications and is not
                directed to children under 13. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. When we do,
                we will update the effective date above. Continued use of the
                site after changes are posted constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Contact Us</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy or wish to
                exercise any of the rights described above, please contact:
              </p>
              <p className="mt-3">
                Pallets Extra Solutions LLC
                <br />
                6365 River Wharf Dr, Dallas, TX 75212
                <br />
                Phone:{" "}
                <a
                  href="tel:+12144620861"
                  className="font-semibold hover:opacity-80"
                  style={{ color: BRAND }}
                >
                  (214) 462-0861
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:Extrapallets86@gmail.com"
                  className="font-semibold hover:opacity-80"
                  style={{ color: BRAND }}
                >
                  Extrapallets86@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="bg-slate-950 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6">
          <p>
            © {new Date().getFullYear()} Pallets Extra Solutions LLC · Dallas,
            TX
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
