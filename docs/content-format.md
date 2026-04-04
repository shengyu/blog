# Blog Post Content Format

This document defines the canonical authoring format for blog posts. All posts must follow this specification to be recognized and rendered correctly by the application.

## Format Overview

Blog posts are authored as **Markdown files with YAML frontmatter**. Each post is a single file stored in `src/content/blog/`.

```
src/content/blog/
├── post-slug.md
├── another-post.md
└── ...
```

## File Structure

Each post file consists of two sections:

1. **YAML Frontmatter** (required): Metadata enclosed in `---` delimiters at the top of the file
2. **Body Content** (required): Markdown content following the frontmatter

```markdown
---
title: Post Title
publishDate: "2026-04-05"
slug: post-slug
description: A short summary of the post content.
---

# Heading

Post body content in Markdown format...
```

## Required Fields

Every post must define these fields in its frontmatter:

| Field | Type | Validation | Description |
|-------|------|------------|-------------|
| `title` | string | Min 1 character, non-empty | The human-readable post title displayed on listing pages, detail pages, and SEO metadata |
| `publishDate` | string | ISO 8601 date format (`YYYY-MM-DD`) | The publication date used for sorting (newest first) and display |
| `slug` | string | URL-safe: lowercase letters, numbers, hyphens only | The unique URL path segment for the post detail page |
| `description` | string | Min 1 character, non-empty | Plain-text summary used on listing pages and in SEO meta descriptions |

### Validation Rules

- **title**: Must contain at least one non-whitespace character
- **publishDate**: Must match the regex `^\d{4}-\d{2}-\d{2}$` (e.g., `2026-04-05`)
- **slug**: Must match the regex `^[a-z0-9-]+$` (lowercase alphanumeric and hyphens only)
  - Must be unique across all posts
  - Used to construct URLs: `/blog/{slug}/`
- **description**: Must contain at least one non-whitespace character; should be 1-2 sentences

## Optional Fields

These fields may be included but are not required:

| Field | Type | Validation | Description |
|-------|------|------------|-------------|
| `updatedDate` | string | ISO 8601 date format (`YYYY-MM-DD`) | The last update date; displayed if different from publishDate |

## Body Content

The body content follows the frontmatter and supports standard **GitHub Flavored Markdown**:

- Headings (`#` through `######`)
- Paragraphs and line breaks
- Bold (`**text**`) and italic (`*text*`)
- Links (`[text](url)`)
- Images (`![alt](url)`)
- Unordered lists (`- item`)
- Ordered lists (`1. item`)
- Inline code (`` `code` ``) and code blocks (`` ``` ``)
- Blockquotes (`> quote`)
- Horizontal rules (`---`)

### Body Constraints

- At minimum, body content should contain at least one heading or paragraph
- Images should use relative paths for assets stored in the repository
- HTML is supported but should be used sparingly; prefer native Markdown

## Complete Example

```markdown
---
title: "Getting Started with Astro: A Beginner's Guide"
publishDate: "2026-04-05"
slug: getting-started-with-astro
updatedDate: "2026-04-06"
description: Learn the basics of Astro framework and build your first static site with this comprehensive guide for beginners.
---

## Introduction

Astro is a modern web framework designed for building fast, content-focused websites. This guide will walk you through the essentials.

## Prerequisites

Before starting, you should have:

- Node.js 18 or later installed
- Basic knowledge of HTML and Markdown
- A text editor of your choice

## Installation

Create a new Astro project using the CLI:

```bash
npm create astro@latest
```

Follow the prompts to set up your project structure.

## Next Steps

Now that you have Astro installed, you can start building your site by adding pages and components.
```

## Minimal Valid Example

The smallest valid post requires only the required fields:

```markdown
---
title: Hello World
publishDate: "2026-04-05"
slug: hello-world
description: My first blog post.
---

Welcome to my blog!
```

## Authoring Guidelines

1. **File naming**: Use the post slug as the filename (e.g., `my-post-slug.md`)
2. **Date format**: Always wrap dates in quotes to ensure proper YAML parsing
3. **Slug uniqueness**: Verify no other post uses the same slug before publishing
4. **Description length**: Keep descriptions concise (50-160 characters) for optimal SEO
5. **Content location**: Store all post files in `src/content/blog/` only

## Validation

The application validates all posts at build time using the schema defined in `src/content.config.ts`. Build failures will occur if:

- Required fields are missing
- Field values fail validation rules
- Files are placed outside the expected directory

## Schema Reference

The content schema is defined in `src/content.config.ts` using Zod validation:

```typescript
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    publishDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    description: z.string().min(1),
    updatedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  }),
});
```
