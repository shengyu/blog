# Setup

This repository uses one technology stack for version 1 of the blog. Treat the choices below as the default implementation plan unless this document is updated.

## Selected Technology Stack

| Area | Choice | Decision notes |
| --- | --- | --- |
| Runtime | Node.js LTS | Satisfies the project constraint to run in a standard Node.js LTS build environment. |
| Framework | Astro | Fits a static-first blog, supports Markdown or MDX content, uses framework-native routing, and keeps client-side JavaScript minimal by default. |
| Package manager | pnpm | Keeps dependency management fast and consistent for local development and CI. |
| Styling approach | Plain CSS with Astro component-scoped styles and shared CSS custom properties | Avoids extra styling runtime overhead while still supporting reusable design tokens and responsive layouts. |
| Test tooling | Vitest for unit and content-level checks, plus Playwright for end-to-end smoke tests | Covers frontmatter/content logic and validates the core browsing flow across home, listing, and post pages. |

## Implementation Direction

- Store posts as Markdown or MDX files in the repository.
- Generate the home page, blog listing page, and post detail pages at build time.
- Keep the default rendering server-side or prerendered so pages remain crawlable and fast without heavy hydration.
- Use the framework's metadata and static site features for canonical URLs, `sitemap.xml`, and `robots.txt`.

## Note

This document records the selected stack for the project. Concrete install and run commands should be added after the application scaffold is created.
