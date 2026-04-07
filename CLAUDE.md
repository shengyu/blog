# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:4321)
pnpm dev

# Build for production (runs astro check + astro build)
pnpm build

# Preview production build
pnpm preview

# Run unit tests (Vitest)
pnpm test

# Run unit tests in watch mode
pnpm test:watch

# Build and run E2E tests (Playwright)
pnpm test:e2e

# Run E2E tests against running dev server
E2E_USE_SERVER=1 pnpm test:e2e:server
```

## Architecture Overview

This is a static-first blog built with Astro 4. It generates all pages at build time with no client-side JavaScript by default.

### Content System

Blog posts are Markdown files stored in `src/content/blog/`. Each post has YAML frontmatter validated by a Zod schema:

**Required fields:**
- `title` (string, non-empty)
- `publishDate` (string, `YYYY-MM-DD` format)
- `slug` (string, lowercase alphanumeric and hyphens only)
- `description` (string, non-empty)

**Optional fields:**
- `updatedDate` (string, `YYYY-MM-DD` format)

See `src/content/blog/_template.md` for the starter template.

### Storage Adapter Pattern

All content access goes through `src/lib/blog-post-storage.ts`, not directly via `astro:content`. This provides:

- `listBlogPosts()` - Returns summaries sorted by publish date (newest first)
- `loadBlogPost(slug)` - Returns full post with body and render function
- `updateBlogPost(slug, update)` - Updates post Markdown file in place

### Page Structure

- `src/pages/index.astro` - Homepage with hero and latest post
- `src/pages/blog/index.astro` - Blog archive (reverse chronological)
- `src/pages/blog/[slug].astro` - Dynamic post detail pages (SSG)
- `src/pages/style-guide.astro` - Design system documentation

All pages use `src/layouts/BaseLayout.astro` which provides the shared navigation shell, SEO metadata, and footer.

### Styling Architecture

Styles use plain CSS with a custom property token system defined in `src/styles/global.css`:

**Color tokens:** `--color-canvas`, `--color-surface`, `--color-ink`, `--color-accent`, `--color-warm`
**Semantic tokens:** `--background`, `--surface`, `--text`, `--accent`, `--line`
**Typography:** `--font-display` (serif), `--font-body` (sans-serif), `--text-xs` through `--text-5xl`
**Spacing:** `--space-1` through `--space-10` (geometric scale)

Components use BEM-like class naming (e.g., `.site-header`, `.post-body`, `.card-featured`).

### Testing Strategy

**Unit tests** (`tests/unit/`): Test storage adapter logic with mocked Astro content collections.

**E2E tests** (`tests/e2e/`): Test built static HTML files using Playwright with inlined CSS. Tests validate responsive layout, navigation shell, and accessibility attributes. Uses `loadRoute()` helper from `tests/e2e/helpers.ts` to load static files directly without a server.

### Content Validation

Build will fail if:
- Required frontmatter fields are missing
- Field values fail validation (e.g., invalid date format)
- Duplicate slugs exist

Schema is defined in `src/content.config.ts` and `src/lib/blog-post-schema.ts`.

## Project Constraints

- Node.js >= 20.0.0 required
- pnpm is the package manager (specified in `packageManager` field)
- Static output only (`output: "static"` in astro.config.mjs)
- No client-side JavaScript framework (React, Vue, etc.)
- No CSS preprocessor (plain CSS with custom properties)
