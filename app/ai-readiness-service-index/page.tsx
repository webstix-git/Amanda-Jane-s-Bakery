import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Readiness Service Index",
  description:
    "How Amanda Jane's Bakery keeps menu, ordering, and contact information clear for customers and online tools.",
};

const services = [
  {
    title: "Menu and Offerings",
    detail:
      "Customers and event planners can view or download the current menu before contacting the bakery.",
  },
  {
    title: "Easy-to-Find Information",
    detail:
      "About Us, Menu, Catering, FAQs, and Contact Us are clearly labeled so visitors and automated tools can find the right information.",
  },
  {
    title: "Custom Order Forms",
    detail:
      "The catering and contact forms collect the event date, quantity, occasion, and inspiration photos needed to review a request.",
  },
  {
    title: "Orders Confirmed in Writing",
    detail:
      "Design, pricing, and timelines are confirmed in writing before baking begins. AI may help draft a reply, but a person reviews and confirms every order.",
  },
  {
    title: "Replies from the Bakery",
    detail:
      "The bakery answers phone, email, and form inquiries within two business days. Orders are handled by appointment and confirmed by a person.",
  },
  {
    title: "Privacy and AI Policies",
    detail:
      "The privacy and AI policies explain how customer information is handled and where AI may be used.",
  },
];

export default function AiReadinessServiceIndexPage() {
  return (
    <LegalPage
      crumb="AI Readiness Service Index"
      title="AI Readiness Service Index"
      lede="How customers and online tools can find accurate bakery information."
      compactTitle
    >
      <p className="legal-updated">Last updated: August 14, 2026</p>

      <p>
        This page explains where customers, event planners, and online tools
        can find accurate information about {site.name}. For products and
        pricing, view the menu or request a custom quote.
      </p>

      <div className="legal-index">
        {services.map((item) => (
          <article key={item.title} className="legal-index-item">
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <p>
        For a custom quote, start on the{" "}
        <Link href="/catering#order">Catering &amp; Custom Orders</Link> page or{" "}
        contact the studio through the <Link href="/contact-us">Contact Us</Link>{" "}
        page.
      </p>
    </LegalPage>
  );
}
