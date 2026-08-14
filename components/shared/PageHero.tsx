import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: ReactNode;
  lede: string;
  crumb: string;
  image?: string;
  alt?: string;
  compactTitle?: boolean;
};

export function PageHero({
  title,
  lede,
  crumb,
  image = "/images/inner-banner.png",
  alt = "Hand-decorated cookies and cupcakes arranged on a dessert table",
  compactTitle,
}: PageHeroProps) {
  return (
    <>
      <section className={`page-hero${compactTitle ? " compact" : ""}`}>
        <div className="page-hero-photo">
          <Image src={image} alt={alt} fill sizes="58vw" priority />
        </div>
        <div className="hero-overlay" />
        <div className="hero-shade" />
        <div className="page-hero-copy">
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>
      </section>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs-inner">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumbs-sep" aria-hidden="true">
            /
          </li>
          <li aria-current="page">{crumb}</li>
        </ol>
      </nav>
    </>
  );
}
