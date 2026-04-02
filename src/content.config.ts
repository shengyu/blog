import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    publishDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "publishDate must be an ISO 8601 date string in YYYY-MM-DD format.",
    }),
    slug: z.string().regex(/^[a-z0-9-]+$/, {
      message: "slug must contain only lowercase letters, numbers, and hyphens.",
    }),
    description: z.string().min(1),
  }),
});

export const collections = { blog };
