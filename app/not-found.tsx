import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        <span>404</span>
      </div>
      <h1>That Page Is Not on the Tray.</h1>
      <p className="lede">
        The link may have moved. The bakery has not.
      </p>
      <div className="btn-row">
        <Link href="/" className="btn-gold">
          Back to the bakery
        </Link>
        <Link href="/contact-us" className="btn-ghost">
          Contact
        </Link>
      </div>
    </section>
  );
}
