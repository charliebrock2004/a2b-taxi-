import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // The current WordPress site has one indexed inner page. If this build ever
  // replaces it on the same domain, this keeps that page's search ranking.
  async redirects() {
    return [
      {
        source: "/taxi-crieff-hydro",
        destination: "/services/airport-transfers#crieff-hydro",
        permanent: true,
      },
    ];
  },
};

export default config;
