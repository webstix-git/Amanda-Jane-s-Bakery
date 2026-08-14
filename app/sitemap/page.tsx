import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { footerLegal, sitePages } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse all pages on Amanda Jane's Bakery in St. Joseph, Michigan.",
};

export default function SitemapPage() {
  return (
    <LegalPage
      crumb="Sitemap"
      title="Sitemap"
      lede="Every page on the site, in one place."
    >
      <h2>Main Pages</h2>
      <ul className="legal-links">
        {sitePages
          .filter((page) => !footerLegal.some((legal) => legal.href === page.href))
          .map((page) => (
            <li key={page.href}>
              <Link href={page.href}>{page.label}</Link>
            </li>
          ))}
      </ul>

      <h2>Policies &amp; Resources</h2>
      <ul className="legal-links">
        {footerLegal.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.label}</Link>
          </li>
        ))}
      </ul>

      <h2>Files</h2>
      <ul className="legal-links">
        <li>
          <a href={site.menuPdf} download>
            Current menu PDF
          </a>
        </li>
      </ul>
    </LegalPage>
  );
}
