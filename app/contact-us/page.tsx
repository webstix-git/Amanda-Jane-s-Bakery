import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Amanda Jane's Bakery in St. Joseph, Michigan. By appointment. Custom order inquiries for cookies, cakes, and catering across Berrien County.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Contact Us"
        lede="Questions, custom orders, and market details."
      />

      <section className="order">
        <div className="order-grid">
          <div className="order-intro contact-intro">
            <h2>Amanda Jane&rsquo;s Bakery</h2>
            <p>
              Have a custom order in mind or a question about an upcoming
              market? Send us a message, call, or email. We will get back to you
              within two business days.
            </p>
            <div className="contact-facts">
              <a className="contact-fact" href={`tel:${site.phone}`}>
                <PhoneIcon />
                <span>{site.phoneDisplay}</span>
              </a>
              <a className="contact-fact" href={`mailto:${site.email}`}>
                <MailIcon />
                <span>{site.email}</span>
              </a>
              <a
                className="contact-fact"
                href={site.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinIcon />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </a>
              <div className="contact-fact">
                <PinIcon />
                <span>By appointment only · Serving {site.address.region}</span>
              </div>
            </div>
            <div className="btn-row" style={{ paddingTop: 8 }}>
              <a
                href={site.facebook}
                className="btn-outline on-cream btn-social"
                style={{ padding: "12px 22px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href={site.instagram}
                className="btn-outline on-cream btn-social"
                style={{ padding: "12px 22px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="market">
        <div className="market-copy">
          <h2>Find Us at Local Markets.</h2>
          <p>
            Local markets are a great way to try our small-batch treats. Check
            Facebook for the latest schedule and details about what we are
            bringing each week.
          </p>
        </div>
        <div className="market-photo">
          <Image
            src="/images/market-people.jpg"
            alt="Customers at a local market holding decorated cookies"
            fill
            sizes="50vw"
          />
        </div>
      </section>
    </>
  );
}
