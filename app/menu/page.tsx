import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "The current menu from Amanda Jane's Bakery in St. Joseph, Michigan. Download or view cookies, cakes, and everyday treats.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        crumb="Menu"
        title="Our Menu"
        lede="Browse our current cookies, cakes, and small-batch treats."
      />

      <section className="cream-section menu-simple">
        <div className="menu-simple-layout">
          <div className="menu-simple-head">
            <h2>Download the Current Menu.</h2>
            <p>
              The menu is a good place to start for flavors and available
              treats. Custom cakes and decorated cookie sets are priced based on
              the design, quantity, and event date.
            </p>
            <a href={site.menuPdf} className="btn-gold" download>
              Download menu PDF
            </a>
          </div>
          <div className="menu-frame">
            <div className="menu-frame-bar">Menu preview</div>
            <div className="menu-frame-scroll">
              <iframe
                src={`${site.menuPdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="Amanda Jane's Bakery current menu"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="cta-band">
          <div>
            <h2>Planning a Custom Order?</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Tell us your date, guest count, and what you have in mind. We will
              confirm availability and provide a quote before you book.
            </p>
          </div>
          <Link href="/catering#order" className="btn-gold">
            Start a custom order
          </Link>
        </div>
      </section>
    </>
  );
}
