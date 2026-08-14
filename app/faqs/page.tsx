import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Timelines, delivery, ingredients, and custom-order details at Amanda Jane's Bakery in St. Joseph, Michigan.",
};

const faqs = [
  {
    id: "notice",
    q: "How far in advance should I order?",
    a: "Please order custom work at least two weeks in advance. Wedding weekends, holidays, and large cookie orders often fill sooner, so earlier is always better.",
  },
  {
    id: "hours",
    q: "Do you have a storefront I can walk into?",
    a: "We do not have a walk-in storefront. Pickup is available by appointment at our St. Joseph studio. Call, email, or use the order form to arrange a time.",
  },
  {
    id: "area",
    q: "Where do you deliver?",
    a: "Throughout Berrien County. Delivery is charged per mile and quoted with your order. Pickup at 5696 Hollywood Road is always available by appointment.",
  },
  {
    id: "setup",
    q: "Can you set up the dessert table?",
    a: "Yes. Delivery, table setup, and display stands are available for events. We will include those details in your quote and coordinate timing with you or your planner.",
  },
  {
    id: "photo",
    q: "Can I send a photo of what I want?",
    a: "Absolutely. Screenshots, saved photos, invitations, and even a quick sketch can help us understand your style. Attach your references to the order form and tell us which details matter most.",
  },
  {
    id: "cookies",
    q: "Are sugar cookies your main specialty?",
    a: "Yes. Hand-decorated sugar cookies are our most requested item, followed by custom cakes. If you are unsure what to order, share the occasion and guest count and we will help you choose.",
  },
  {
    id: "ingredients",
    q: "What about ingredients and allergies?",
    a: "Include any allergies or dietary preferences in your inquiry. We will explain what we can accommodate and discuss cross-contact concerns before you book.",
  },
  {
    id: "markets",
    q: "Where will you be this weekend?",
    a: "Our market schedule changes from week to week. Facebook is the best place to find the latest dates, locations, and menu previews, with updates also shared on Instagram.",
  },
  {
    id: "corporate",
    q: "Do you take corporate and gala orders?",
    a: "Yes. We make logo cookies, client gifts, cake pops, and desserts for corporate events and galas. Large orders require advance notice, and all quantities, designs, and timing are confirmed in writing.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumb="FAQs"
        title="FAQs"
        lede="Ordering, pickup, delivery, and other helpful details."
      />

      <section className="cream-section">
        <div className="faq-accordion">
          {faqs.map((item) => (
            <details key={item.id} id={item.id} className="faq-acc" open>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <div className="cta-band">
          <div>
            <h2>Ready to Start a Custom Order?</h2>
          </div>
          <Link href="/catering#order" className="btn-gold">
            Start a custom order
          </Link>
        </div>
      </section>
    </>
  );
}
