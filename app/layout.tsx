import type { Metadata } from "next";
import { Jost, Karla } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Amanda Jane's Bakery | Custom Sugar Cookies & Cakes in St. Joseph, MI",
    template: "%s | Amanda Jane's Bakery",
  },
  description:
    "Appointment-only bakery in St. Joseph, Michigan specializing in hand-decorated sugar cookies and custom cakes. Serving Berrien County weddings, celebrations, and corporate orders.",
  keywords: [
    "Amanda Jane's Bakery",
    "sugar cookies St Joseph MI",
    "custom cakes Berrien County",
    "wedding cookies Michigan",
    "custom bakery St Joseph",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Amanda Jane's Bakery | St. Joseph, Michigan",
    description:
      "Hand-decorated sugar cookies and custom cakes made in small batches in St. Joseph, Michigan. By appointment, serving Berrien County.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/logo-alpha.png", type: "image/png" }],
    apple: [{ url: "/images/logo-alpha.png", type: "image/png" }],
  },
};

const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: site.name,
  slogan: site.tagline,
  image: `${site.url}/images/wedding-cake.jpg`,
  telephone: site.phoneDisplay,
  email: site.email,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: site.address.region,
  sameAs: [site.facebook, site.instagram],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${karla.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }}
        />
      </body>
    </html>
  );
}
