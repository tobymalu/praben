// Centralized brand data. Header/Footer/CTAs all read from here so they never drift.

export const SITE = {
  name: "Praben Property Management",
  shortName: "Praben",
  url: "https://praben.com",
  email: "info@praben.com",
  phone: {
    display: "+52 322 194 1849",
    e164: "+523221941849",
  },
  whatsapp: {
    number: "523221941849",
    defaultMessage:
      "Hi, I'd like a free rental income projection for my Puerto Vallarta property.",
  },
  social: {
    instagram: "", // TODO
    linkedin: "", // TODO
    facebook: "", // TODO
  },
} as const;

export function whatsappUrl(message: string = SITE.whatsapp.defaultMessage): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp.number}?text=${encoded}`;
}

export const NAV_LINKS = [
  { label: "Our Approach", href: "#pain-and-solution" },
  { label: "Coverage Areas", href: "#social-proof" },
  { label: "Get Your Projection", href: "#lead-form" },
] as const;
