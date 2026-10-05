// Every page has a 1:1 Spanish sibling under /es/<same-slug>, so the
// English <-> Spanish path for any route can be derived mechanically
// instead of being hand-wired per page.

export type Lang = "en" | "es";

function stripTrailingSlash(path: string): string {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function toEnglishPath(pathname: string): string {
  const path = stripTrailingSlash(pathname);
  if (path === "/es") return "/";
  if (path.startsWith("/es/")) return path.slice(3);
  return path;
}

export function toSpanishPath(pathname: string): string {
  const enPath = toEnglishPath(pathname);
  return enPath === "/" ? "/es" : `/es${enPath}`;
}
