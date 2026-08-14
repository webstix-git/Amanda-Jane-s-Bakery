export const footerLegal = [
  { href: "/sitemap", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/ai-readiness-service-index", label: "AI Readiness Service Index" },
] as const;

export const sitePages = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact Us" },
  ...footerLegal.map((item) => ({ href: item.href, label: item.label })),
] as const;
