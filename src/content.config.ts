import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { blogPostSchema } from "./lib/blog-post-schema";

/**
 * Blog post content collection schema.
 *
 * Defines the validation rules for blog post frontmatter.
 * See docs/content-format.md for the full authoring specification.
 */
const blog = defineCollection({
  loader: glob({
    base: new URL("./content/blog/", import.meta.url),
    pattern: "**/[!_]*.md",
    generateId: ({ entry }) => entry,
  }),
  schema: blogPostSchema,
});

export const collections = { blog };
