import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  // Only needed when the <title> tag should read differently from the
  // on-page H1 (e.g. a punchier SEO title vs. a longer editorial headline).
  seoTitle: z.string().optional(),
  // The public URL slug, when it should differ from the filename (e.g. a
  // localized Spanish slug instead of reusing the English one verbatim, so
  // each language indexes as its own distinct page). Falls back to the
  // filename (the collection entry's id) when omitted.
  // Named urlSlug, not slug — Astro's glob loader treats a frontmatter
  // field literally named `slug` as an id override, which would break the
  // filename-based EN<->ES pairing below.
  urlSlug: z.string().optional(),
  description: z.string(),
  excerpt: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string(),
  heroImageAlt: z.string(),
});

// Paired by identical FILENAME under src/content/blog/en/<id>.md and
// src/content/blog/es/<id>.md — the filename is purely an internal pairing
// key now; the public URL comes from each entry's `urlSlug` field (or the
// filename, if `urlSlug` is omitted).
const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog/en" }),
  schema: blogSchema,
});

const blogEs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog/es" }),
  schema: blogSchema,
});

export const collections = { blogEn, blogEs };
