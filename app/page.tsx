import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import ContactForm from "./ContactForm";

const features = [
  {
    title: "Custom Pallet Design",
    description:
      "Custom-built pallets engineered to your warehouse and shipping requirements.",
  },
  {
    title: "Pallet Repair & Refurbishing",
    description:
      "Cost-saving repair that restores pallets to safe, working condition.",
  },
  {
    title: "Pallet Recycling",
    description:
      "Environmentally responsible pallet recycling and material recovery.",
  },
];

const services = [
  {
    title: "Custom Pallet Design",
    description:
      "Custom-built pallets tailored to your warehouse or shipping requirements.",
    image: "/IMG_20260514_175729.jpg",
  },
  {
    title: "Pallet Repair",
    description:
      "Cost-saving repair and refurbishing that restores pallets to working condition.",
    image: "/IMG_20260514_175317.jpg",
  },
  {
    title: "Pallet Recycling",
    description:
      "Environmentally responsible pallet recycling and material recovery.",
    image: "/IMG_20260514_175328.jpg",
  },
];

const additionalServices = [
  "Pallet Management Solutions",
  "Heat Treatment & Compliance",
  "Pallet Leasing Options",
  "On-Site Pallet Services",
  "Consulting & Operational Support",
];

const BRAND = "#F26522";

const SITE_URL = "https://palletsextrasolutionsllc.com";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Pallets Extra Solutions LLC",
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+1-214-462-0861",
  email: "Extrapallets86@gmail.com",
  description:
    "Custom pallet design, recycling, repair, and full-service pallet solutions for businesses across Texas.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6365 River Wharf Dr",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75212",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Texas" },
    { "@type": "City", name: "Dallas" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pallet Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom Pallet Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Pallet Repair & Refurbishing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Pallet Recycling" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Pallet Management Solutions" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Heat Treatment & Compliance" },
      },
    ],
  },
  sameAs: [],
};

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Mobile header — centered, two-row */}
          <div className="flex flex-col items-center gap-2 py-3 md:hidden">
            <a href="#top" className="flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Pallets Extra Solutions LLC — Supply New, Used and Custom Wood Shipping Pallets"
                width={320}
                height={170}
                priority
                className="h-20 w-auto object-contain"
              />
            </a>
            <div className="flex w-full items-center justify-between gap-3 pt-1">
              <nav className="flex flex-1 justify-around text-[11px] font-semibold tracking-wide text-slate-700 uppercase">
                <a href="#services" className="px-1 py-1">Services</a>
                <a href="#about" className="px-1 py-1">About</a>
                <a href="#contact" className="px-1 py-1">Contact</a>
              </nav>
              <a
                href="tel:+12144620861"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: BRAND }}
                aria-label="Call (214) 462-0861"
              >
                <span aria-hidden>✆</span>
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Desktop header — single row */}
          <div className="hidden items-center justify-between gap-4 py-2 md:flex">
            <a href="#top" className="flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Pallets Extra Solutions LLC — Supply New, Used and Custom Wood Shipping Pallets"
                width={320}
                height={170}
                priority
                className="h-24 w-auto object-contain lg:h-32"
              />
            </a>
            <nav className="flex gap-8 text-sm font-medium text-slate-700">
              <a href="#services" className="hover:text-[color:var(--brand)]" style={{ ["--brand" as string]: BRAND }}>
                Services
              </a>
              <a href="#about" className="hover:text-[color:var(--brand)]" style={{ ["--brand" as string]: BRAND }}>
                About
              </a>
              <a href="#contact" className="hover:text-[color:var(--brand)]" style={{ ["--brand" as string]: BRAND }}>
                Contact
              </a>
              <a href="#location" className="hover:text-[color:var(--brand)]" style={{ ["--brand" as string]: BRAND }}>
                Location
              </a>
            </nav>
            <a
              href="tel:+12144620861"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: BRAND }}
              aria-label="Call (214) 462-0861"
            >
              <span aria-hidden>✆</span>
              <span>(214) 462-0861</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/IMG_20260514_175729.jpg"
              alt="Stacks of wooden pallets"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>
          <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 sm:py-28 lg:py-36">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm sm:tracking-[0.25em]" style={{ color: BRAND }}>
              Pallets Extra Solutions LLC
            </p>
            <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
              Reliable Pallet Manufacturing &amp;
              <br className="hidden sm:block" /> Recycling Services in Dallas, TX
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 sm:mt-6 sm:text-lg">
              Custom pallets, repair, recycling, and full management solutions
              for logistics, warehouse, and industrial operations.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#services"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="rounded-md px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                style={{ backgroundColor: BRAND }}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Feature row */}
        <section className="relative z-10 -mt-10 px-4 sm:-mt-12 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:grid-cols-3 sm:gap-4 sm:p-8">
            {features.map((f) => (
              <div key={f.title} className="px-2 text-center sm:px-4 sm:text-left">
                <h3 className="text-base font-bold" style={{ color: BRAND }}>
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Intro paragraph */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-6 sm:py-20">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Pallets Extra Solutions is a trusted provider of pallet
              manufacturing and recycling services based in Dallas, TX. We
              specialize in custom pallets, efficient recycling programs,
              repair, and full management solutions — backed by a commitment to
              durability, compliance, and reliable customer support.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Pallet Services
              </h2>
              <div
                className="mx-auto mt-3 h-1 w-16 rounded"
                style={{ backgroundColor: BRAND }}
              />
            </div>
            <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="group relative overflow-hidden rounded-xl bg-slate-900 shadow-md transition hover:shadow-xl"
                >
                  <div className="relative h-56 w-full sm:h-64">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span
                      className="inline-block rounded px-3 py-1 text-xs font-bold tracking-wide text-white uppercase"
                      style={{ backgroundColor: BRAND }}
                    >
                      {s.title}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-slate-100">
                      {s.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Additional services */}
            <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:mt-12 sm:p-8">
              <h3 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
                Additional Services
              </h3>
              <div
                className="mx-auto mt-3 h-1 w-12 rounded"
                style={{ backgroundColor: BRAND }}
              />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {additionalServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: BRAND }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Showcase carousel */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14">
            <Carousel />
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About Pallets Extra Solutions
            </h2>
            <div
              className="mt-3 h-1 w-16 rounded"
              style={{ backgroundColor: BRAND }}
            />
            <div className="mt-8 grid items-center gap-8 sm:mt-10 sm:gap-10 md:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg sm:h-80 md:h-96">
                <Image
                  src="/IMG_20260514_175317.jpg"
                  alt="Pallets Extra Solutions team at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-5 text-slate-600">
                <p>
                  Pallets Extra Solutions is a trusted provider of pallet
                  manufacturing and recycling services based in Dallas, TX. We
                  specialize in delivering high-quality custom pallets,
                  efficient recycling programs, repair services, and full
                  management solutions for businesses operating in logistics,
                  warehouse distribution, and industrial sectors.
                </p>
                <p>
                  Our team is dedicated to durability, industry compliance, and
                  reliable customer support — ensuring your pallet operations
                  run smoothly and cost-effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Contact Us
            </h2>
            <div
              className="mt-3 h-1 w-16 rounded"
              style={{ backgroundColor: BRAND }}
            />

            <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2">
              {/* Form */}
              <ContactForm />

              {/* Info card */}
              <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.png"
                    alt="Pallets Extra Solutions logo"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-contain ring-1 ring-slate-200"
                  />
                  <div>
                    <p className="text-base font-bold text-slate-900">
                      Pallets Extra Solutions
                    </p>
                    <p className="text-sm text-slate-500">Dallas, TX</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4 text-sm break-words">
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: BRAND }}
                      aria-hidden
                    >
                      ✆
                    </span>
                    <div>
                      <a
                        href="tel:+12144620861"
                        className="font-semibold text-slate-900 hover:opacity-80"
                      >
                        (214) 462-0861
                      </a>
                      <p className="text-xs text-slate-500">
                        Samuel Guzman · Español
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: BRAND }}
                      aria-hidden
                    >
                      ✆
                    </span>
                    <div>
                      <a
                        href="tel:+14699693399"
                        className="font-semibold text-slate-900 hover:opacity-80"
                      >
                        (469) 969-3399
                      </a>
                      <p className="text-xs text-slate-500">
                        Natalie Guzmán · English
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: BRAND }}
                      aria-hidden
                    >
                      ✉
                    </span>
                    <a
                      href="mailto:Extrapallets86@gmail.com"
                      className="font-semibold break-all text-slate-900 hover:opacity-80"
                    >
                      Extrapallets86@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: BRAND }}
                      aria-hidden
                    >
                      ⌖
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        6365 River Wharf Dr
                      </p>
                      <p className="text-slate-600">Dallas, TX 75212</p>
                    </div>
                  </li>
                </ul>

                <a
                  href="#location"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold hover:opacity-80"
                  style={{ color: BRAND }}
                >
                  View on map →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location / Map */}
        <section id="location">
          <div className="h-1.5 w-full" style={{ backgroundColor: BRAND }} />
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Location
            </h2>
            <div
              className="mt-3 h-1 w-16 rounded"
              style={{ backgroundColor: BRAND }}
            />
            <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 md:grid-cols-[1fr_2fr]">
              <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: BRAND }}>
                  Business Address
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  6365 River Wharf Dr
                </p>
                <p className="text-slate-600">Dallas, TX 75212</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=6365+River+Wharf+Dr+Dallas+TX+75212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  style={{ backgroundColor: BRAND }}
                >
                  Get Directions
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
                <iframe
                  title="Pallets Extra Solutions location"
                  src="https://www.google.com/maps?q=6365+River+Wharf+Dr+Dallas+TX+75212&output=embed"
                  className="h-64 w-full border-0 sm:h-80 md:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="h-1.5 w-full" style={{ backgroundColor: BRAND }} />
        </section>
      </main>

      <footer className="bg-slate-950 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6">
          <Image
            src="/logo.png"
            alt="Pallets Extra Solutions logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <p>
            © {new Date().getFullYear()} Pallets Extra Solutions LLC · Dallas,
            TX
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
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
