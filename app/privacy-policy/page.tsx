import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Amanda Jane's Bakery collects, uses, and protects information from visitors and custom order inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      crumb="Privacy Policy"
      title="Privacy Policy"
      lede="What information we collect and how we use it."
      compactTitle
    >
      <p className="legal-updated">Last updated: August 14, 2026</p>

      <h2>Who We Are</h2>
      <p>
        Amanda Jane&rsquo;s Bakery operates at {site.address.full}. Questions
        about this policy can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
        <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
      </p>

      <h2>What We Collect</h2>
      <p>
        When you submit a custom order form, contact us by email, or call the
        studio, we may receive your name, email address, phone number, event
        date, order details, and any photos or notes you attach. We do not sell
        this information.
      </p>

      <h2>How We Use It</h2>
      <p>
        We use your information to respond to inquiries, confirm orders, arrange
        pickup or delivery, and follow up about your celebration. We may retain
        order records for bookkeeping and to reference past work if you return.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        This site may use standard browser cookies or analytics tools to
        understand traffic and improve the experience. You can adjust cookie
        settings in your browser at any time.
      </p>

      <h2>Third Parties</h2>
      <p>
        We may use hosting, email, or form-processing services to operate the
        website. Those providers process data only as needed to deliver the
        service. We do not share your information with advertisers.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request access to, correction of, or deletion of personal
        information we hold about you by contacting us directly. We will respond
        as soon as reasonably possible.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as the site or our practices change. The date
        at the top of this page reflects the latest revision.
      </p>

      <p>
        <Link href="/contact-us">Contact the bakery</Link>
      </p>
    </LegalPage>
  );
}
