# Post Detail Mobile Wireframe (Low-Fidelity)

Viewport target: `<= 767px`

## State: Standard Post Detail

```text
+---------------------------------------+
| [HEADER] [Menu] Blog          [Search]|
+---------------------------------------+
| [BREADCRUMB / CONTEXT]                |
| Home / Blog / Post Title              |
|                                       |
| [READING AREA]                        |
| [POST TITLE]                          |
| Long-form article title               |
|                                       |
| [META] date | read time | tags        |
|                                       |
| [INTRO / DEK]                         |
| Short summary or article lead         |
|                                       |
| [TOC / SECTION JUMP LINKS]            |
| [Expand sections] or jump chips       |
| - Intro                               |
| - Section 1                           |
| - Section 2                           |
| - Section 3                           |
|                                       |
| [INLINE MEDIA BLOCK]                  |
| Image / figure / embed                |
| Caption                               |
|                                       |
| [ARTICLE BODY]                        |
| Paragraphs                            |
| Lists                                 |
| Quotes / code blocks / callouts       |
| More content                          |
|                                       |
| [INLINE MEDIA BLOCK]                  |
| Full-width image / video / gallery    |
| Caption                               |
|                                       |
| [RELATED POSTS]                       |
| Related article card                  |
| Related article card                  |
| Related article card                  |
|                                       |
| [POST NAVIGATION]                     |
| [Previous]   [Back to blog]   [Next]  |
|                                       |
| [NAVIGATION AID]                      |
| Home | Blog | Top                     |
|                                       |
| [FOOTER] Links | RSS | Legal          |
+---------------------------------------+
```

## Behavior Notes

- The post title and metadata stay immediately above the article body for fast scanning.
- The TOC collapses into an expand/collapse control or compact jump chips so it remains usable without dominating the viewport.
- Inline media blocks should span the content width and keep captions directly below the asset.
- Related posts appear before the linear next/previous controls so readers can choose discovery or continuation.
