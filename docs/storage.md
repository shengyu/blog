# Blog Post Storage

## Persistence Mechanism

Blog posts are persisted as Markdown files with YAML frontmatter in `src/content/blog/`.

- The frontmatter schema lives in `src/lib/blog-post-schema.ts`.
- The file-backed storage adapter lives in `src/lib/blog-post-storage.ts`.
- Astro pages read post data through the storage adapter instead of importing `astro:content` directly.

## Data Access Interface

The storage adapter exposes three operations:

- `listBlogPosts()`: returns post summaries sorted by publish date descending.
- `loadBlogPost(slug)`: returns one post record, including the Markdown body and Astro render function.
- `updateBlogPost(slug, update)`: validates metadata updates, rewrites the source Markdown file, and returns the updated post record.

## Update Behavior

`updateBlogPost()` persists changes back to the post's Markdown file in the repository. The written document keeps the standard frontmatter-plus-body format so the Astro content pipeline continues to build from the same source of truth.
