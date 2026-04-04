import { defineCollection } from "astro:content";

import { blogPostSchema } from "./lib/blog-post-schema";

/**
 * Blog post content collection schema.
 *
 * Defines the validation rules for blog post frontmatter.
 * See docs/content-format.md for the full authoring specification.
 */
const blog = defineCollection({
  type: "content",
  schema: blogPostSchema,
});

export const collections = { blog };
