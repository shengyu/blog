# Blog

## Technology Stack

The project uses one selected stack for version 1: `Node.js LTS`, `Astro`, `pnpm`, plain scoped CSS, and `Vitest` plus `Playwright`.

See [docs/setup.md](docs/setup.md) for the recorded decision and implementation direction.
See [docs/content-format.md](docs/content-format.md) for the authoring format and
[docs/storage.md](docs/storage.md) for the storage interface.

## Core Blog Functionalities

The initial blog release must support the `Required` items below. `Optional` items may be added later without blocking launch. `Out of scope` items are not part of the current core blog functionality.

| Functionality | Status | Scope notes |
| --- | --- | --- |
| Content publishing / posting | Required | Authors must be able to publish new posts and have them appear on the site. |
| Post detail pages | Required | Each post must have its own URL and render the full article content. |
| Listing pages | Required | The blog must provide a listing page that shows published posts in a browsable list. |
| Navigation | Required | Users must be able to move between the home page, blog listing, and post detail pages. |
| Metadata | Required | Each post must include core metadata such as title, publish date, slug, and description. |
| SEO basics | Required | Pages must include basic SEO support such as unique page titles, meta descriptions, canonical URLs, and crawlable markup. |
| Commenting | Out of scope | Reader comments are not included in the current core blog scope. |
| Search | Optional | Search can be added later if the content volume justifies it. |
| Tags | Optional | Tags may be added later to improve content discovery and filtering. |
| Drafts | Optional | Draft support may be added later for unpublished work-in-progress posts. |
| RSS | Optional | An RSS feed may be added later for subscribers and feed readers. |

## Scope Summary

- Posting status: `Required`
- Commenting status: `Out of scope`

## Project Boundaries and Non-Goals

### Initial release scope

The initial release is limited to a single blog experience with:

- publishing posts
- rendering post detail pages
- showing post listing pages
- basic site navigation
- required post metadata
- basic SEO support

### Explicit exclusions for the initial scope

Unless a hard requirement emerges later, the initial release will not support:

- multi-author workflows, including role-based editorial collaboration or handoff processes
- admin CMS features, including a dedicated admin dashboard, visual content management UI, or back-office tooling
- user accounts, authentication, or personalized reader profiles
- advanced analytics, including custom event pipelines, reporting dashboards, or deep behavioral tracking
- custom moderation tools, including moderation queues, spam review workflows, or comment management interfaces
- commenting or community management features
- any broader platform capabilities that expand the project beyond a straightforward single-blog publishing site
