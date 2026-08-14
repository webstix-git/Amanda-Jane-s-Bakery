import Image from "next/image";
import Link from "next/link";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { footerLegal } from "@/lib/legal";
import { site } from "@/lib/site";

const exploreLeft = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/menu", label: "Menu" },
];

const exploreRight = [
  { href: "/catering", label: "Catering" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer id="contact-footer" className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src="/images/logo-alpha.png"
            alt="Amanda Jane's Bakery"
            width={234}
            height={150}
          />
          <p>Baking the world a better place, one cookie at a time.</p>
        </div>

        <div className="footer-col">
          <span>Explore</span>
          <div className="footer-explore">
            <div>
              {exploreLeft.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              {exploreRight.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-col">
          <span>Contact</span>
          <span className="footer-meta">
            <PinIcon />
            <span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </span>
          </span>
          <a className="footer-meta" href={`tel:${site.phone}`}>
            <PhoneIcon />
            <span>{site.phoneDisplay}</span>
          </a>
          <a className="footer-meta" href={`mailto:${site.email}`}>
            <MailIcon />
            <span>{site.email}</span>
          </a>
        </div>
      </div>
      <div className="footer-base">
        <p className="footer-legal-line">
          <span>
            &copy; {new Date().getFullYear()} Amanda Jane&rsquo;s Bakery. All
            rights reserved.
          </span>
          {footerLegal.map((link) => (
            <span key={link.href} className="footer-legal-item">
              <span className="footer-legal-sep" aria-hidden="true">
                |
              </span>
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
