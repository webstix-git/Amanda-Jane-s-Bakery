import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MenuPdfButton } from "@/components/shared/MenuPdfButton";
import { PageHero } from "@/components/shared/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "The current menu from Amanda Jane's Bakery in St. Joseph, Michigan. Download or view cookies, cakes, and everyday treats.",
};

const menuPages = [
  {
    src: "/images/amanda-janes-bakery-menu-1.png",
    alt: "Amanda Jane's Bakery menu page 1: cookies, cakes, and cupcakes",
  },
  {
    src: "/images/amanda-janes-bakery-menu-2.png",
    alt: "Amanda Jane's Bakery menu page 2: pies, chocolate mousse cakes, and mini desserts",
  },
  {
    src: "/images/amanda-janes-bakery-menu-3.png",
    alt: "Amanda Jane's Bakery menu page 3: macarons, cheesecake, cookie cakes, and contact",
  },
] as const;

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
            <div className="menu-simple-copy">
              <h2>Download the Current Menu.</h2>
              <p>
                The menu is a good place to start for flavors and available
                treats. Custom cakes and decorated cookie sets are priced based on
                the design, quantity, and event date.
              </p>
            </div>
            <MenuPdfButton href={site.menuPdf} />
          </div>
          <div className="menu-frame">
            <div className="menu-frame-bar">Menu preview</div>
            <div className="menu-frame-pages">
              {menuPages.map((page) => (
                <Image
                  key={page.src}
                  src={page.src}
                  alt={page.alt}
                  width={1530}
                  height={1980}
                  className="menu-frame-page"
                  sizes="(max-width: 1380px) 100vw, 1380px"
                  priority={page.src.endsWith("-1.png")}
                />
              ))}
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
