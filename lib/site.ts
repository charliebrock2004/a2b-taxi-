// Every fact in this file comes from the existing a2bcrieff.co.uk site (checked October 2026).
// Do not add prices, hours, vehicle makes or accreditations here without the owner confirming them.

export const site = {
  name: "A2B Private Hire",
  locality: "Crieff",
  region: "Perthshire",
  phoneDisplay: "07708 010432",
  phoneHref: "tel:+447708010432",
  phoneE164: "+447708010432",
  email: "agbrown1@hotmail.co.uk",
  emailHref: "mailto:agbrown1@hotmail.co.uk",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
    "http://localhost:3000"
  ).replace(/\/$/, ""),
  // False until the owner approves the site. While false: noindex, robots disallow, concept notice.
  live: process.env.SITE_LIVE === "true",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our services" },
  { href: "/services/airport-transfers", label: "Airport transfers" },
  { href: "/areas", label: "Areas we cover" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
];

// lon/lat are used only to draw the area map.
export const base = { name: "Crieff", lon: -3.839, lat: 56.3726 };

export const areas = [
  { name: "Perth", lon: -3.4308, lat: 56.395, label: "above" },
  { name: "Stirling", lon: -3.9369, lat: 56.1165, label: "below" },
  { name: "Auchterarder", lon: -3.706, lat: 56.296, label: "right" },
  { name: "Braco", lon: -3.883, lat: 56.262, label: "left" },
  { name: "Comrie", lon: -3.99, lat: 56.374, label: "above" },
  { name: "St Fillans", lon: -4.117, lat: 56.393, label: "above" },
  { name: "Blackford", lon: -3.782, lat: 56.261, label: "below" },
  { name: "Dunblane", lon: -3.964, lat: 56.188, label: "left" },
] as const;

// Verbatim from the existing website. Never edit, shorten or add to these.
export const testimonials = [
  {
    name: "Alan Roger",
    heading: "Professional",
    quote:
      "Our go to taxi service in Crieff, A2B Taxi Crieff, from airport runs to local pick up and drop off. Always punctual, well mannered, reasonably priced and all round professional service. Cars are always immaculate inside and out, can highly recommend.",
  },
  {
    name: "David McNair",
    heading: "Ideal",
    quote:
      "After another local taxi company from Comrie let us down on a Sunday evening we called A2B and it was no bother to Graham to come quite a distance to collect us and take us back a couple of hours later. Graham was full of local knowledge and pointed out things to see and do during our weeks holiday.",
  },
  {
    name: "Steve Spalding",
    heading: "Fantastic",
    quote:
      "Fantastic service, very reliable, great customer service. Seriously recommended A2B Crieff for any airport run, golf trip, hen night or stag do. They will really accommodate your needs. Well done A2B.",
  },
];
