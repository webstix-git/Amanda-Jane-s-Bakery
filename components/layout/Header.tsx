"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${stuck ? " is-stuck" : ""}`}>
        <Link href="/" className="brand">
          <Image
            src="/images/logo-alpha.png"
            alt="Amanda Jane's Bakery"
            width={234}
            height={150}
            className="brand-mark"
            priority
          />
          <span className="brand-text">
            <span className="brand-name">Amanda Jane&rsquo;s Bakery</span>
            <span className="brand-place">St. Joseph, Michigan</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${site.phone}`} className="nav-cta nav-cta-fill">
            Call {site.phoneCta}
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
        >
          <span className="menu-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-top">
          <span className="brand-place">Amanda Jane&rsquo;s</span>
          <button
            type="button"
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {nav.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a href={`tel:${site.phone}`}>Call {site.phoneCta}</a>
      </nav>
    </>
  );
}
