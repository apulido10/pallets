import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BRAND = "#F26522";
const EFFECTIVE_DATE = "May 15, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Pallets Extra Solutions LLC website and submission of inquiries through our contact form.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
            Terms of Service
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
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
                the website operated by Pallets Extra Solutions LLC
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
                accessing or using this website, you agree to be bound by these
                Terms. If you do not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Use of the Website
              </h2>
              <p className="mt-3">
                You agree to use this website only for lawful purposes and in a
                way that does not infringe the rights of, restrict, or inhibit
                anyone else&rsquo;s use of the site. Prohibited activities
                include attempting to gain unauthorized access to our systems,
                submitting fraudulent or misleading information, transmitting
                malware, or using automated tools to harvest content or abuse
                the contact form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Contact Form &amp; Quotes
              </h2>
              <p className="mt-3">
                The contact form on this website is provided so you may request
                information, request a quote, or initiate a business
                conversation. Submitting a message does not create a binding
                contract. Any quote, proposal, price, or service we discuss is
                non-binding until a separate written agreement is signed by
                both parties or a confirmed purchase order is issued.
              </p>
              <p className="mt-3">
                You agree that the information you submit through the contact
                form is accurate and that you are authorized to provide it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Intellectual Property
              </h2>
              <p className="mt-3">
                All content on this website &mdash; including text, images,
                logos, and the &ldquo;Pallets Extra Solutions&rdquo; name and
                marks &mdash; is owned by or licensed to Pallets Extra Solutions
                LLC and is protected by applicable intellectual property laws.
                You may view and share the content for personal, non-commercial
                purposes, but you may not copy, reproduce, modify, or
                redistribute it without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Disclaimer of Warranties
              </h2>
              <p className="mt-3">
                This website and its content are provided &ldquo;as is&rdquo;
                and &ldquo;as available&rdquo; without warranties of any kind,
                whether express or implied, including but not limited to
                warranties of merchantability, fitness for a particular purpose,
                accuracy, or non-infringement. We do not guarantee that the
                site will be uninterrupted, error-free, or secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, Pallets Extra Solutions
                LLC and its owners, employees, and affiliates will not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or data, arising out
                of your use of, or inability to use, this website. Our total
                aggregate liability for any claim arising from your use of the
                site is limited to one hundred U.S. dollars (USD $100).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Third-Party Links
              </h2>
              <p className="mt-3">
                This site may contain links to third-party websites or services
                (for example, mapping services). We are not responsible for the
                content, policies, or practices of those third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by the laws of the State of Texas,
                without regard to its conflict-of-law rules. Any dispute
                arising out of or relating to these Terms or your use of the
                site will be brought exclusively in the state or federal courts
                located in Dallas County, Texas, and you consent to the
                jurisdiction of those courts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these Terms from time to time. When we do, we
                will update the effective date above. Your continued use of the
                site after changes are posted constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Contact</h2>
              <p className="mt-3">
                Questions about these Terms can be sent to:
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
