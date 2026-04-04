import { z } from "astro/zod";

export const blogPostSchema = z.object({
  title: z.string().min(1, { message: "title is required and must not be empty" }),
  publishDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message:
      "publishDate must be an ISO 8601 date string in YYYY-MM-DD format (e.g., '2026-04-05')",
  }),
  slug: z.string().regex(/^[a-z0-9-]+$/, {
    message:
      "slug must contain only lowercase letters, numbers, and hyphens (e.g., 'my-blog-post')",
  }),
  description: z.string().min(1, {
    message: "description is required and must not be empty",
  }),
  updatedDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message:
        "updatedDate must be an ISO 8601 date string in YYYY-MM-DD format (e.g., '2026-04-05')",
    })
    .optional(),
});

export type BlogPostFrontmatter = z.infer<typeof blogPostSchema>;
