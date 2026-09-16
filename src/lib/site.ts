// Centralized brand data. Header/Footer/CTAs all read from here so they never drift.
// TODO: replace placeholder contact info once the client provides real details.

export const SITE = {
  name: "Praben Property Management",
  shortName: "Praben",
  url: "https://praben.com",
  email: "contact@praben.com", // TODO: confirm real inbox
  phone: {
    display: "+52 322 000 0000", // TODO: real number
    e164: "+523220000000",
  },
  whatsapp: {
    number: "523220000000", // TODO: real WhatsApp Business number, digits only (no +)
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
