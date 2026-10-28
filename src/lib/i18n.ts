// Every page has a 1:1 Spanish sibling under /es/<same-slug>, so the
// English <-> Spanish path for any route can be derived mechanically
// instead of being hand-wired per page.
//
// Site-wide convention: every internal route ends in "/" (trailingSlash:
// "always" in astro.config.mjs). withTrailingSlash() is the one place that
// enforces it — use it for any internal href built outside a static
// string literal (page files still just write the "/" by hand).

export type Lang = "en" | "es";

function stripTrailingSlash(path: string): string {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function toEnglishPath(pathname: string): string {
  const path = stripTrailingSlash(pathname);
  if (path === "/es") return "/";
  if (path.startsWith("/es/")) return withTrailingSlash(path.slice(3));
  return withTrailingSlash(path);
}

export function toSpanishPath(pathname: string): string {
  const enPath = toEnglishPath(pathname);
  return enPath === "/" ? "/es/" : withTrailingSlash(`/es${enPath}`);
}

// Appends "/" before any "?query" or "#hash", leaving those untouched.
// "/free-projection#lead-form" -> "/free-projection/#lead-form"
export function withTrailingSlash(path: string): string {
  const match = path.match(/^([^?#]*)([?#].*)?$/);
  const [, base = path, suffix = ""] = match ?? [];
  if (base === "") return path;
  const slashedBase = base.endsWith("/") ? base : `${base}/`;
  return `${slashedBase}${suffix}`;
}
