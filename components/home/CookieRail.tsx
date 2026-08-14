"use client";

import Image from "next/image";
import { useRef } from "react";

type Cookie = {
  src: string;
  alt: string;
  caption: string;
};

export function CookieRail({ cookies }: { cookies: Cookie[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("figure");
    const amount = card ? card.getBoundingClientRect().width + 24 : 320;
    rail.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <>
      <div className="cookie-rail" ref={railRef}>
        {cookies.map((cookie) => (
          <figure key={cookie.src}>
            <Image src={cookie.src} alt={cookie.alt} width={760} height={840} />
            <figcaption>{cookie.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="cookie-arrows">
        <button
          type="button"
          aria-label="Show previous cookies"
          onClick={() => scrollByCard(-1)}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Show next cookies"
          onClick={() => scrollByCard(1)}
        >
          →
        </button>
      </div>
    </>
  );
}
