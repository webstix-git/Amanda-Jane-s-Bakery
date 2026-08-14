export const site = {
  name: "Amanda Jane's Bakery",
  nameHtml: "Amanda Jane\u2019s Bakery",
  tagline: "Baking the World A Better Place, One Cookie at a Time",
  url: "https://amandajanesbakery.com",
  email: "amandajanes2021@gmail.com",
  phone: "+12692817143",
  phoneDisplay: "269-281-7143",
  phoneCta: "269-281-7143",
  menuPdf: "/amanda-janes-bakery-menu.pdf",
  address: {
    street: "5696 Hollywood Road",
    city: "St. Joseph",
    state: "MI",
    zip: "49085",
    region: "Berrien County",
    full: "5696 Hollywood Road, St. Joseph, MI 49085",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=5696+Hollywood+Road,+St.+Joseph,+MI+49085",
  },
  facebook: "https://www.facebook.com/amandajanes2021/",
  instagram: "https://www.instagram.com/amandajanes2021/",
  noticeWeeks: 2,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact Us" },
] as const;
