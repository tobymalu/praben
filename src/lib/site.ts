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
    defaultMessageEs:
      "Hola, me gustaría una proyección gratuita de ingresos por renta para mi propiedad en Puerto Vallarta.",
  },
  social: {
    instagram: "", // TODO
    linkedin: "", // TODO
    facebook: "", // TODO
  },
} as const;

export function whatsappUrl(message?: string, lang: "en" | "es" = "en"): string {
  const text =
    message ?? (lang === "es" ? SITE.whatsapp.defaultMessageEs : SITE.whatsapp.defaultMessage);
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${SITE.whatsapp.number}?text=${encoded}`;
}

const NAV_ITEMS = [
  { en: "Services", es: "Servicios", path: "/services" },
  { en: "About Us", es: "Nosotros", path: "/about" },
  { en: "Blog", es: "Blog", path: "/blog" },
  { en: "Emergency Contacts", es: "Contactos de Emergencia", path: "/emergency-contacts" },
  { en: "Contact", es: "Contacto", path: "/contact" },
] as const;

export function getNavLinks(lang: "en" | "es") {
  return NAV_ITEMS.map((item) => ({
    label: lang === "es" ? item.es : item.en,
    href: lang === "es" ? `/es${item.path}` : item.path,
  }));
}
