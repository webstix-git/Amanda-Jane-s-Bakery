import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OrderForm } from "@/components/forms/OrderForm";
import { PageHero } from "@/components/shared/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catering & Custom Orders",
  description:
    "Custom cakes, sugar cookie sets, and full dessert tables for weddings, galas, and corporate events across Berrien County. Two weeks' notice. Delivery and setup available.",
};

export default function CateringPage() {
  return (
    <>
      <PageHero
        crumb="Catering"
        title="Catering & Custom Orders"
        lede="Custom desserts planned around your event."
      />

      <section className="occasions">
        <div className="occasions-wrap">
          <div className="occasions-head">
            <div className="occasions-head-copy">
              <h2>Catering &amp; Custom Orders</h2>
            </div>
            <p>
              From a birthday cookie set to a full wedding dessert table, every
              order is made for the event. We will help you choose the right
              mix, quantities, and presentation for your guest list.
            </p>
          </div>

          <article className="occasion">
            <div className="frame">
              <div className="frame-border left" />
              <Image
                src="/images/20260411_085510.jpg"
                alt="Two-tier semi-naked wedding cake with fresh berries and a bride and groom topper"
                width={900}
                height={720}
                className="fit-whole"
              />
            </div>
            <div className="occasion-copy">
              <h3>Weddings</h3>
              <p>
                Choose a wedding cake, favor cookies, a full dessert table, or a
                combination of all three. We work with couples and planners
                across Berrien County, with delivery and setup available.
              </p>
              <div className="meta-line">Cakes · Favor cookies · Dessert tables</div>
              <Link href="#order" className="btn-outline on-cream">
                Start an Order
              </Link>
            </div>
          </article>

          <article className="occasion reverse">
            <div className="occasion-copy">
              <h3>Birthdays, Graduations &amp; Retirements</h3>
              <p>
                Bring us your theme, colors, and favorite details. We will
                create coordinated cakes, cookie sets, and favors sized for your
                celebration and ready when you need them.
              </p>
              <div className="meta-line">Themed cakes · Cookie sets · Party favors</div>
              <Link href="#order" className="btn-outline on-cream">
                Start an Order
              </Link>
            </div>
            <div className="frame">
              <div className="frame-border right" />
              <Image
                src="/images/catering-corporate.png"
                alt="Banana cupcakes for a birthday or celebration order"
                width={900}
                height={720}
              />
            </div>
          </article>

          <article className="occasion">
            <div className="frame">
              <div className="frame-border left" />
              <Image
                src="/images/20250919_142649.jpg"
                alt="Hand-piped Curious Kids Museum logo cookies for a corporate order"
                width={900}
                height={1100}
                className="fit-whole"
              />
            </div>
            <div className="occasion-copy">
              <h3>Corporate Orders &amp; Galas</h3>
              <p>
                Order hand-piped logo cookies, cake pops, or gift boxes for
                client gifts, openings, galas, and team events. Large orders are
                counted, packed, and scheduled in advance.
              </p>
              <div className="meta-line">Logo cookies · Cake pops · Client gifting</div>
              <Link href="#order" className="btn-outline on-cream">
                Start an Order
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="dark-section">
        <div className="value-cards-wrap">
          <div className="value-cards">
            <article className="value-card">
              <span className="value-card-mark" />
              <h3>Delivery.</h3>
              <p>
                We deliver throughout {site.address.region}. Delivery mileage is
                included in your quote.
              </p>
            </article>
            <article className="value-card">
              <span className="value-card-mark" />
              <h3>Setup &amp; Stands.</h3>
              <p>
                Ask about display stands and table setup. We will coordinate
                placement with you or your event planner so the table is ready
                before guests arrive.
              </p>
            </article>
            <article className="value-card">
              <span className="value-card-mark" />
              <h3>Pickup.</h3>
              <p>
                Prefer to collect it yourself? Pickup is by appointment at{" "}
                {site.address.full}. We will have everything boxed, labeled, and
                ready.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="order" className="order">
        <div className="order-grid order-grid-center">
          <div className="order-intro">
            <div className="eyebrow-plain dark">Custom Order Request</div>
            <h2>Tell Us What You&rsquo;re Celebrating.</h2>
            <p>
              Send your date, guest count, and inspiration photos. We will
              reply within two business days with next steps.
            </p>
          </div>
          <OrderForm />
        </div>
      </section>
    </>
  );
}
