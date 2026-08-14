import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Amanda Jane and learn about her St. Joseph, Michigan bakery, known for hand-decorated sugar cookies, custom cakes, and small-batch treats.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Our Story"
        lede="Made by hand in St. Joseph, Michigan."
      />

      <section className="cream-section">
        <div className="split-editorial">
          <div className="split-copy">
            <h2>Good Ingredients. Careful Details. No Need to Choose.</h2>
            <p className="ink-p">
              Amanda started the bakery because she believed custom desserts
              could be beautiful without sacrificing flavor. That idea still
              guides every cookie, cake, and market treat made in the studio.
            </p>
            <p className="ink-p">
              We bake in small batches using recipes we would serve at our own
              table. Then each order is piped, lettered, assembled, and packed
              by hand for yours.
            </p>
            <div className="signoff">
              <span className="eyebrow-line" style={{ background: "var(--gold)" }} />
              <span>Amanda Jane · Owner &amp; Decorator</span>
            </div>
          </div>
          <div className="split-media frame">
            <div className="frame-border left" />
            <Image
              src="/images/wedding-cake.jpg"
              alt="Two-tier buttercream wedding cake with dried florals"
              width={900}
              height={1100}
            />
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="value-cards-wrap">
          <div className="value-cards">
            <article className="value-card">
              <span className="value-card-mark" />
              <h3>Made to Taste Good.</h3>
              <p>
                Looks matter, but flavor comes first. We bake in small batches
                and give the recipe the same attention as the decoration.
              </p>
            </article>
            <article className="value-card">
              <span className="value-card-mark" />
              <h3>Made for Your Event.</h3>
              <p>
                Send us a theme, color palette, photo, or rough idea. We will
                turn it into a practical design and confirm the details with you
                before baking begins.
              </p>
            </article>
            <article className="value-card">
              <span className="value-card-mark" />
              <h3>One Less Thing to Manage.</h3>
              <p>
                Hosting comes with a long list. We can take care of the dessert,
                including delivery, setup, and display stands when your event
                calls for them.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cream-section">
        <div className="split-editorial flip">
          <div className="split-copy">
            <p className="pull">By Appointment in St. Joseph.</p>
            <p className="ink-p">
              We do not have a walk-in counter or regular retail hours. Every
              order is scheduled in advance, which gives us time to discuss your
              date, guest count, design, and pickup or delivery needs.
            </p>
            <p className="ink-p">
              The studio sits at {site.address.street} in {site.address.city}.
              Pickup is available by appointment. We also deliver throughout{" "}
              {site.address.region}, with mileage, setup, and display stands
              quoted as part of your order.
            </p>
            <Link href="/catering#order" className="btn-outline gold-line">
              Book a Consultation
            </Link>
          </div>
          <div className="split-media">
            <Image
              src="/images/birthday-cake.jpg"
              alt="Character-themed birthday cake"
              width={900}
              height={1100}
            />
          </div>
        </div>
      </section>

      <section className="market">
        <div className="market-copy">
          <h2>Come Find Us at a Local Market.</h2>
          <p>
            Local markets are an easy way to try our small-batch sweets before
            placing a custom order. Follow us on Facebook and Instagram for
            upcoming dates and each week&rsquo;s selection.
          </p>
          <div className="btn-row" style={{ paddingTop: 6 }}>
            <a
              href={site.facebook}
              className="btn-ghost btn-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
              Facebook
            </a>
            <a
              href={site.instagram}
              className="btn-ghost btn-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </div>
        <div className="market-photo">
          <Image
            src="/images/market-people.jpg"
            alt="Customers holding decorated bunny cookies at a market"
            fill
            sizes="50vw"
          />
        </div>
      </section>
    </>
  );
}
