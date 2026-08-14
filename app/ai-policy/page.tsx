import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Policy",
  description:
    "How Amanda Jane's Bakery uses artificial intelligence in website content, communications, and custom order workflows.",
};

export default function AiPolicyPage() {
  return (
    <LegalPage
      crumb="AI Policy"
      title="AI Policy"
      lede="How we use AI tools and where people stay in charge."
      compactTitle
    >
      <p className="legal-updated">Last updated: August 14, 2026</p>

      <h2>Our Approach</h2>
      <p>
        Amanda Jane&rsquo;s Bakery is a hand-decorated, appointment-only studio.
        AI tools may help with website development, early copy drafts, image
        organization, or internal planning. They do not make desserts, approve
        designs, set prices, or confirm customer orders.
      </p>

      <h2>Website &amp; Marketing</h2>
      <p>
        AI tools may be used to draft or refine website text and layouts. A
        person reviews that work before it is published. Photos of cookies,
        cakes, and other finished work show real bakery products unless they are
        clearly labeled otherwise.
      </p>

      <h2>Custom Orders</h2>
      <p>
        Your order is confirmed by a person. Design decisions, pricing,
        timelines, and ingredient questions are handled directly with the studio.
        Do not send sensitive personal information beyond what is needed to
        fulfill a custom dessert order.
      </p>

      <h2>Accuracy</h2>
      <p>
        We review AI-assisted content for accuracy, but errors can occur. Menu
        items, pricing, and availability are always confirmed in writing before
        an order is scheduled. If website information differs from a direct
        reply from the bakery, follow the bakery&rsquo;s direct reply.
      </p>

      <h2>Questions</h2>
      <p>
        If you have concerns about how AI is used in our communications, write
        to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <p>
        <Link href="/ai-readiness-service-index">View the AI Readiness Service Index</Link>
      </p>
    </LegalPage>
  );
}
