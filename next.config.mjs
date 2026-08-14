import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/our-menu", destination: "/menu", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/faq", destination: "/faqs", permanent: true },
      {
        source: "/catering-custom-orders",
        destination: "/catering",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
