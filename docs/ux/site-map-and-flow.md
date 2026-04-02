# Site Map and Page Flow

This document defines the blog information architecture for version 1, including top-level pages, navigation hierarchy, and primary user journeys.

## Site Map

### Top-Level Page Inventory

| URL | Page | Purpose | Primary Actions |
| --- | --- | --- | --- |
| `/` | Home | Entry page with project value proposition and a latest-post jump-off. | Go to blog archive, open latest post. |
| `/blog/` | Blog Archive | Reverse-chronological listing of all published posts. | Scan posts, open a specific post. |
| `/blog/{slug}/` | Post Detail (template) | Read full article content for one post. | Read content, navigate to Home/Blog, choose next article. |
| `/sitemap.xml` | Sitemap (system page) | Search-engine and crawler discovery of all public URLs. | Discover available pages. |
| `/robots.txt` | Robots (system page) | Crawler policy and sitemap pointer. | Guide crawler behavior. |

### Navigation Hierarchy

- Global navigation (present on all content pages):
  - `Home` -> `/`
  - `Blog` -> `/blog/`
- Home page content navigation:
  - `Browse posts` CTA -> `/blog/`
  - `Read the article` (latest post card) -> `/blog/{slug}/`
- Blog archive content navigation:
  - `Read the article` on each post card -> `/blog/{slug}/`
- Post detail page contextual paths:
  - Return to `Home` via global nav
  - Return to `Blog` archive via global nav
  - Continue reading by selecting another post from archive (via `Blog`)

## Page Flow Diagram

```mermaid
flowchart TD
  A[Visitor Entry] --> B[Home /]
  A --> C[Post Detail /blog/{slug}/\nDirect entry from search/social]

  B --> D[Browse Posts CTA]
  B --> E[Latest Post Link]

  D --> F[Blog Archive /blog/]
  E --> C

  F --> G[Post Card Link]
  G --> C

  C --> H[Global Nav: Blog]
  C --> I[Global Nav: Home]

  H --> F
  I --> B

  F --> J[Select Another Post]
  J --> C

  K[sitemap.xml + robots.txt] --> A
```

## Primary User Flows

### Flow 1: Homepage Entry -> Latest Post -> Continue Browsing

1. User lands on `/`.
2. User clicks `Read the article` in the latest-post section.
3. User reads `/blog/{slug}/`.
4. User uses global `Blog` navigation to open `/blog/`.
5. User selects another post card and opens another `/blog/{slug}/`.

### Flow 2: Homepage Entry -> Blog Archive -> Targeted Post Reading

1. User lands on `/`.
2. User clicks `Browse posts`.
3. User scans `/blog/` cards (title, publish date, description).
4. User opens a chosen `/blog/{slug}/`.
5. User returns to `/blog/` to continue reading additional posts.

### Flow 3: Direct Post Entry -> Interaction Paths

1. User enters directly on `/blog/{slug}/` from search, social, or shared link.
2. User reads the post content.
3. User chooses one of the key interaction paths:
   - `Blog` in global nav -> `/blog/` to discover related posts.
   - `Home` in global nav -> `/` to reorient and use featured/latest entry points.
4. User continues into another post via archive listing.

## IA Notes

- The architecture is intentionally shallow for version 1: only one level below `/blog/`.
- The primary read loop is `Archive -> Post -> Archive -> Post`.
- Global nav persistence (`Home`, `Blog`) guarantees a consistent recovery path from every primary content state.
