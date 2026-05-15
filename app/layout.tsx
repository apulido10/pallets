import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://palletsextrasolutionsllc.com";
const SITE_TITLE =
  "Pallets Extra Solutions LLC — Custom Pallet Manufacturing, Repair & Recycling in Dallas, TX";
const SITE_DESCRIPTION =
  "Custom pallet design, recycling, repair, and full-service pallet solutions for businesses across Texas. Call (214) 462-0861 for a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Pallets Extra Solutions LLC",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Pallets Extra Solutions LLC",
  authors: [{ name: "Pallets Extra Solutions LLC" }],
  keywords: [
    "custom pallets",
    "pallet manufacturing",
    "pallet recycling",
    "pallet repair",
    "wooden pallets Dallas",
    "shipping pallets Texas",
    "pallet management",
    "Dallas pallet company",
    "pallet supplier Texas",
    "wood pallets",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Pallets Extra Solutions LLC",
    images: [
      {
        url: "/IMG_20260514_175729.jpg",
        alt: "Stacks of wooden pallets at Pallets Extra Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/IMG_20260514_175729.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
