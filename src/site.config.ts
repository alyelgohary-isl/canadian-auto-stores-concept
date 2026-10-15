/* Everything that changes per client, in one place. Speculative concept for
   Canadian Auto Stores Ltd., Windsor ON. Facts from www.canautostores.com
   (crawled 2026-10-15); anything not on that site is marked CONFIRM. */

const email = "info@canautostores.com";
const phone = "519-977-9000";
const address = { street: "780 Ottawa St", city: "Windsor", region: "ON", postal: "N8X 2C5" };
/* Public catalogue login (the contact page's plain link). The home-page button on the current
   site embeds a buyer id and password in the URL; that one is left out. CONFIRM it is meant to be public. */
const orderUrl = "https://www.epartconnection.com/wpLogin2.aspx?storeid=canadianauto";

export const site = {
  name: "Canadian Auto Stores",
  legalName: "Canadian Auto Stores Ltd.",
  brand: ["Canadian", "Auto Stores"],
  url: "https://www.canautostores.com",
  email,
  phone,
  address,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Canadian+Auto+Stores+780+Ottawa+St+Windsor+ON+N8X+2C5",
  orderUrl,
  /* Hours as written on the current site. CONFIRM, including Sunday. */
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 4:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  delivery: { areas: ["Windsor", "Tecumseh", "LaSalle"], minimum: "$75" }, // CONFIRM: banner says $75, category pages say $50
  tagline: "Parts / Service / Value / Everyday",
  description: "Independent, family-owned auto parts retailer at 780 Ottawa St, Windsor, since 1938. Replacement parts, oils, chemicals, tools and upholstery for garages and do-it-yourselfers.",

  fonts: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
  favicon: { letter: "C", background: "#ed1c24", color: "#fbf7ee" },
  ogImage: "assets/img/og.webp",

  nav: [
    { key: "parts", href: "#find", label: "Parts" },
    { key: "garages", href: "garages/", label: "Garages" },
    { key: "about", href: "about/", label: "About" },
    { key: "contact", href: "contact/", label: "Contact" },
  ],
  cta: { label: "Order parts", href: orderUrl },

  footer: {
    columns: [
      { title: "Find your part", links: [
        { label: "Replacement Parts", href: "parts/replacement-parts/" },
        { label: "Motor Oils & Filtration", href: "parts/motor-oils-filtration/" },
        { label: "Chemicals, Waxes & Lubricants", href: "parts/chemicals-waxes-lubricants/" },
        { label: "Performance & Accessories", href: "parts/performance-accessories/" },
        { label: "Tools & Shop Supplies", href: "parts/tools-shop-supplies/" },
        { label: "Upholstery & Carpet", href: "parts/upholstery-carpet/" },
      ] },
      { title: "Company", links: [
        { label: "About", href: "about/" },
        { label: "Garages & trade", href: "garages/" },
        { label: "Contact", href: "contact/" },
        { label: "Order parts online", href: orderUrl },
        { label: phone, href: `tel:${phone}` },
        { label: email, href: `mailto:${email}` },
        { label: "Legal", href: "legal/" },
      ] },
    ],
    newsletter: "Deals and counter news, once in a while.",
    legal: "Free delivery in Windsor, Tecumseh and LaSalle on qualifying orders.",
    concept: "Concept by Islands. A speculative design, not commissioned by or affiliated with Canadian Auto Stores Ltd.",
  },

  schema: {
    "@type": "AutoPartsStore",
    telephone: `+1-${phone}`,
    foundingDate: "1938",
    address: { "@type": "PostalAddress", streetAddress: address.street, addressLocality: address.city, addressRegion: address.region, postalCode: address.postal, addressCountry: "CA" },
    areaServed: ["Windsor", "Tecumseh", "LaSalle"],
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00", "Su 10:00-14:00"],
    sameAs: ["https://www.facebook.com/canautostores", "https://www.instagram.com/canadianautostores"],
  } as Record<string, unknown>,

  tracking: {
    gtm: env("PUBLIC_GTM_ID"),
    ga4: env("PUBLIC_GA4_ID"),
    gscVerification: env("PUBLIC_GSC_VERIFICATION"),
  },
};

function env(name: string): string {
  return import.meta.env.PROD ? String(import.meta.env[name] ?? "").trim() : "";
}

export type NavKey = (typeof site.nav)[number]["key"];
