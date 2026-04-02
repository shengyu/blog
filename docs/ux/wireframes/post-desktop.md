# Post Detail Desktop Wireframe (Low-Fidelity)

Viewport target: `>= 1024px`

## State: Standard Post Detail

```text
+--------------------------------------------------------------------------------------------------+
| [HEADER + PRIMARY NAVIGATION]   Blog / Home / Blog / Tags / About            [Search] [Subscribe]|
+--------------------------------------------------------------------------------------------------+
| [BREADCRUMB / READING CONTEXT]  Home / Blog / Post Title                                           |
+--------------------------------------------------------------------------------------------------+
| [READING AREA]                                                                           | [TOC / SECTION JUMP LINKS] |
| [POST TITLE]                                                                             | - Intro                    |
| Long-form article title                                                                  | - Section 1                |
|                                                                                          | - Section 2                |
| [META] Published date | reading time | author | tags                                      | - Section 3                |
|                                                                                          | - Appendix                 |
| [INTRO / DEK]                                                                            |                            |
| Short summary or article lead                                                            | [RELATED POSTS]            |
|                                                                                          | - Related article card     |
| [INLINE MEDIA BLOCK]                                                                     | - Related article card     |
| Image / figure / embed + caption                                                         | - Related article card     |
|                                                                                          |                            |
| [ARTICLE BODY]                                                                           | [NAVIGATION AID]           |
| Section heading + paragraphs                                                             | - Jump to top              |
| Section heading + lists                                                                  | - Jump to comments         |
| Pull quote / code block / callout                                                        | - Share post                |
| More body content                                                                        |                            |
|                                                                                          |                            |
| [INLINE MEDIA BLOCK]                                                                     |                            |
| Wide image / gallery / video embed                                                       |                            |
|                                                                                          |                            |
| [ARTICLE BODY CONTINUED]                                                                 |                            |
| Additional sections                                                                      |                            |
|                                                                                          |                            |
| [POST FOOTER / CONTINUATION NAVIGATION]                                                  |                            |
| [Previous post]    [Back to blog archive]    [Next post]                                 |                            |
+--------------------------------------------------------------------------------------------------+
| [FOOTER] Copyright | Social | RSS | Legal                                                            |
+--------------------------------------------------------------------------------------------------+
```

## Behavior Notes

- The main reading column holds the title, metadata, article body, and inline media blocks.
- The TOC stays visible in a right rail so readers can jump between sections without leaving the page.
- Related-post cards are separated from the previous/next controls to distinguish exploration from linear reading.
- The footer navigation provides a recovery path back to the archive and adjacent posts.
