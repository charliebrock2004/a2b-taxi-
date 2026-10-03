import type { Metadata } from "next";
import { areas, site } from "./site";

// One helper so every page gets a unique title, description, canonical URL and Open Graph tags.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, type: "website", locale: "en_GB", siteName: site.name },
  };
}

// Structured data for the business. Deliberately contains no reviews, ratings, prices,
// opening hours or street address: none of those have been confirmed by the owner.
export const businessLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phoneE164,
  address: { "@type": "PostalAddress", addressLocality: "Crieff", addressRegion: "Perth and Kinross", addressCountry: "GB" },
  areaServed: ["Crieff", ...areas.map((a) => a.name)].map((name) => ({ "@type": "City", name })),
  paymentAccepted: "Credit Card, Debit Card, Contactless",
};

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
});
