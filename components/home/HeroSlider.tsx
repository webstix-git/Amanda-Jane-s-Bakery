"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/banner-new.jpg",
    alt: "An assortment of hand-decorated desserts",
  },
  {
    src: "/images/cake-pops.jpg",
    alt: "Black, white, and gold cake pops displayed beside an Amanda Jane's Bakery sign",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-photo">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="68vw"
          className={i === index ? "is-active" : undefined}
        />
      ))}
    </div>
  );
}
