import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Search engines are kept out until SITE_LIVE=true (see .env.example).
export default function robots(): MetadataRoute.Robots {
  if (!site.live) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${site.url}/sitemap.xml` };
}
