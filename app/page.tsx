import Image from "next/image";
import Link from "next/link";
import { OrderForm } from "@/components/forms/OrderForm";
import { CookieRail } from "@/components/home/CookieRail";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CheckIcon, FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

const cookies = [
  {
    src: "/images/wedding-cookies.jpg",
    alt: "Monogrammed white wedding cookies in wooden trays",
    caption: "Wedding favors · Monogram",
  },
  {
    src: "/images/paw-cookies.jpg",
    alt: "Character birthday cookie set with numbers",
    caption: "Third birthday · Character set",
  },
  {
    src: "/images/baby-shower-cookies.png",
    alt: "Oh Boy baby shower cookies with cola bottles and cherry hearts",
    caption: "Baby shower",
  },
  {
    src: "/images/book-cookies.jpg",
    alt: "Storybook cover cookies for a shower",
    caption: "Storybook covers",
  },
  {
    src: "/images/corporate-cookies.jpg",
    alt: "Branded tool-shaped cookies for a home builder",
    caption: "Client gift · Logo set",
  },
  {
    src: "/images/pencil-cookies.jpg",
    alt: "Thank you pencil heart cookies for teachers",
    caption: "Teacher thank-you · Hand lettered",
  },
  {
    src: "/images/gnome-cookies.jpg",
    alt: "Holiday gnome cookies with hand-lettered icing",
    caption: "Holiday · Market favorite",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="top" className="hero">
        <HeroSlider />
        <div className="hero-overlay" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1>
            Custom Desserts.
            <br />
            <em>Made by Hand.</em>
          </h1>
          <p>
            Hand-decorated sugar cookies, custom cakes, and small-batch sweets
            made for celebrations across Berrien County.
          </p>
          <div className="btn-row">
            <Link href="/menu" className="btn-ghost">
              View the Menu
            </Link>
          </div>
        </div>
      </section>

      <div className="notice-bar">
        <div>Hand-Decorated Sugar Cookies</div>
        <div>Custom Event Cakes</div>
        <div>Baked in Small Batches</div>
      </div>

      <section id="story" className="story">
        <div className="story-grid">
          <div className="story-copy">
            <div className="eyebrow-plain dark">Why Amanda Jane&rsquo;s</div>
            <h2>Dessert Should Look Good and Taste Even Better.</h2>
            <p className="ink-p">
              Amanda started this bakery with a simple idea: a beautiful dessert
              should still taste homemade. We use recipes we are proud to serve
              our own family, then decorate each order by hand.
            </p>
            <p className="ink-p">
              Every custom order begins with a conversation about your date,
              guest count, colors, and ideas. From there, we create something
              that fits the occasion and tastes as good as it looks.
            </p>
            <div className="signoff">
              <span className="eyebrow-line" style={{ background: "var(--gold)" }} />
              <span>Amanda Jane · Owner &amp; Decorator</span>
            </div>
          </div>
          <div className="story-photo">
            <Image
              src="/images/chocolate-strawberries.png"
              alt="Chocolate-covered strawberries with a drizzle, lined in paper cups"
              width={720}
              height={900}
            />
            <div className="story-float">
              <p>Small Batches. Decorated by Hand.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cookies" className="cookies">
        <div className="cookies-head">
          <div className="eyebrow-plain">The Specialty</div>
          <h2>Sugar Cookies, Decorated by Hand.</h2>
          <p>
            From wedding monograms and company logos to favorite characters and
            inside jokes, every set is designed for the person or event. Each
            cookie is piped by hand and boxed for easy pickup or delivery.
          </p>
        </div>
        <CookieRail cookies={cookies} />
      </section>

      <section id="occasions" className="occasions">
        <div className="occasions-wrap">
          <div className="occasions-head">
            <span className="occasions-kicker">What We Make</span>
            <h2>Cookies, Cakes &amp; Everyday Treats.</h2>
            <p>
              Choose a custom centerpiece, a coordinated cookie set, or
              small-batch treats for the table.
            </p>
          </div>

          <article className="occasion">
            <div className="frame">
              <div className="frame-border left" />
              <Image
                src="/images/wedding-cookies.jpg"
                alt="Hand-decorated monogram wedding cookies"
                width={900}
                height={720}
              />
            </div>
            <div className="occasion-copy">
              <h3>Hand-Decorated Sugar Cookies</h3>
              <p>
                This is the work we are known for. Every cookie is piped and
                finished by hand, from wedding favors and birthday themes to
                storybook details and company logos.
              </p>
              <div className="meta-line">Wedding favors · Celebration sets · Logo work</div>
            </div>
          </article>

          <article className="occasion reverse">
            <div className="occasion-copy">
              <h3>Everyday Baked Goods</h3>
              <p>
                Find fruit tarts, cake pops, and a rotating selection of sweets
                at markets across Berrien County. Follow us on social media to
                see what we are bringing each week.
              </p>
              <div className="meta-line">Tarts · Cake pops · Market sweets</div>
            </div>
            <div className="frame">
              <div className="frame-border right" />
              <Image
                src="/images/boxed-treats.png"
                alt="Individually boxed everyday baked goods from Amanda Jane's Bakery"
                width={900}
                height={720}
              />
            </div>
          </article>

          <article className="occasion">
            <div className="frame">
              <div className="frame-border left" />
              <Image
                src="/images/ocean-cake.png"
                alt="Ocean-themed custom event cake with a beluga whale topper"
                width={900}
                height={1100}
                className="fit-whole"
              />
            </div>
            <div className="occasion-copy">
              <h3>Custom Event Cakes</h3>
              <p>
                Buttercream cakes designed around your celebration, whether you
                want vintage piping, detailed character work, or an elegant
                two-tier wedding cake. We plan the look, size, and flavors with
                you before your order is confirmed.
              </p>
              <div className="meta-line">Wedding cakes · Celebration cakes · Heart cakes</div>
            </div>
          </article>
        </div>
      </section>

      <section id="catering" className="cater-split">
        <div className="cater-photo">
          <Image
            src="/images/tarts.jpg"
            alt="Trays of fruit tarts prepared for an event"
            fill
            sizes="45vw"
          />
        </div>
        <div className="cater-copy">
          <div className="eyebrow-plain">Catering &amp; Custom Orders</div>
          <h2>Let Us Handle the Dessert Table.</h2>
          <div className="steps">
            <div className="step">
              <CheckIcon />
              <p>
                Send your date, guest count, and inspiration photos. We require
                at least two weeks&rsquo; notice, and popular weekends book earlier.
              </p>
            </div>
            <div className="step">
              <CheckIcon />
              <p>
                We will review the details with you and confirm the design,
                flavors, quantities, and price in writing.
              </p>
            </div>
            <div className="step">
              <CheckIcon />
              <p>
                Pick up by appointment in St. Joseph, or ask about delivery,
                setup, and display stands for your venue.
              </p>
            </div>
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

      <section className="market">
        <div className="market-copy">
          <div className="eyebrow-plain">Around the County</div>
          <h2>Find Us at Local Markets.</h2>
          <p>
            Market dates change from week to week. Check Facebook and Instagram
            for our latest schedule and a preview of what we are bringing.
          </p>
          <div className="btn-row" style={{ paddingTop: 6 }}>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-social"
            >
              <FacebookIcon />
              Facebook
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-social"
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
