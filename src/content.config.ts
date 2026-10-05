import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  excerpt: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string(),
  heroImageAlt: z.string(),
});

// Paired by identical slug under src/content/blog/en/<slug>.md and
// src/content/blog/es/<slug>.md — same pairing convention as the
// /slug <-> /es/slug page routes (see src/lib/i18n.ts).
const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog/en" }),
  schema: blogSchema,
});

const blogEs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog/es" }),
  schema: blogSchema,
});

export const collections = { blogEn, blogEs };
