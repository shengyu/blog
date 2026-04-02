# Wireframes

This document is the implementation handoff index for the final low-fidelity wireframes. It covers the homepage, post detail pages, and the interaction sketches that support navigation, search, filtering, sharing, and future community slots.

## Coverage

- Homepage coverage: desktop and mobile homepage layouts.
- Post page coverage: desktop and mobile article reading layouts.
- User interaction coverage: menu, search, tag filtering, share actions, and comment/reaction placement.
- Shared layout coverage: desktop and mobile global scaffolding used across page types.

## Final Wireframe Index

| File | Scope | Layout note |
| --- | --- | --- |
| [global-layout-desktop.md](./global-layout-desktop.md) | Desktop shared scaffold | Persistent header, primary nav, content column, and right-rail secondary area. |
| [global-layout-mobile.md](./global-layout-mobile.md) | Mobile shared scaffold | Header-first structure with collapsed secondary content and a drawer-based nav state. |
| [homepage-desktop.md](./homepage-desktop.md) | Homepage, desktop | Hero leads into the feed, with discovery and navigation aids kept visible in a right rail. |
| [homepage-mobile.md](./homepage-mobile.md) | Homepage, mobile | Stacked content with discovery chips above the feed and compact pagination or load-more behavior. |
| [post-desktop.md](./post-desktop.md) | Post page, desktop | Reading column plus a right rail for TOC, related posts, and jump links. |
| [post-mobile.md](./post-mobile.md) | Post page, mobile | Single-column reading flow with collapsed TOC, inline media, related posts, and linear navigation. |
| [search-interactions.md](./search-interactions.md) | Interaction sketch | Archive search states for default, focus, empty, and error handling. |
| [tag-filtering-interactions.md](./tag-filtering-interactions.md) | Interaction sketch | Tag filter states for default, focus, empty, and error handling. |
| [share-actions.md](./share-actions.md) | Interaction sketch | Copy-link and share-sheet flows with fallback and error states. |
| [comments-reactions.md](./comments-reactions.md) | Interaction sketch | Reserved future-state slot for comments and reactions, currently hidden in v1. |
| [menu-interactions.md](./menu-interactions.md) | Interaction sketch | Desktop nav and mobile drawer behavior, including fallback when enhancement fails. |

## Layout Decisions

- Desktop pages keep navigation visible and use a right rail for secondary tasks such as TOC, discovery, related links, and quick actions.
- Mobile pages collapse into a single reading column so the title, metadata, and article content remain primary.
- Discovery on the homepage is placed before the feed on mobile and in a right rail on desktop to support browsing without interrupting the main stream.
- Post pages separate linear reading controls from discovery controls so next/previous navigation does not compete with related content.
- Interaction sketches emphasize progressive enhancement: if a script or API fails, the base reading or navigation experience should still work.

## Review Checklist

- Confirm every file above is present and linked from this index.
- Confirm homepage coverage exists for both desktop and mobile.
- Confirm post page coverage exists for both desktop and mobile.
- Confirm user interaction points are documented for menu, search, tags, share, and comments/reactions.
- Confirm the layout notes match the intended implementation patterns for desktop right rails and mobile stacked flows.
