# Homepage Mobile Wireframe (Low-Fidelity)

Viewport target: `<= 767px`

## State: Default Homepage

```text
+---------------------------------------+
| [HEADER + NAV] [Menu] Blog     [Search]|
+---------------------------------------+
| [CORE CONTENT]                        |
| [HERO / INTRO]                        |
| Page title                            |
| Short intro paragraph                 |
| [CTA] Browse posts                    |
| [CTA] View latest                     |
|                                       |
| [DISCOVERY / TAGS]                   |
| Chip row: All | Design | Writing      |
| More topics...                        |
|                                       |
| [POST FEED]                           |
| Featured/latest post card             |
| [Card] Title                          |
| date                                  |
| excerpt                               |
| Read                                  |
|                                       |
| [Card] Title                          |
| date                                  |
| excerpt                               |
| Read                                  |
|                                       |
| [Card] Title                          |
| date                                  |
| excerpt                               |
| Read                                  |
|                                       |
| [PAGINATION / LOAD MORE]              |
| [Load more posts]                     |
| or Page 1 of N with compact controls  |
|                                       |
| [NAVIGATION AID]                      |
| Home | Blog | Tags                    |
|                                       |
| [FOOTER] Links | RSS | Legal          |
+---------------------------------------+
```

## Behavior Notes

- Navigation collapses into a menu trigger while keeping the site brand visible.
- Discovery chips sit above the feed so category browsing is available before scrolling deep.
- The feed is stacked vertically for easy scanning and tap targets.
- Pagination should degrade to a single load-more button on mobile unless there is a strong reason to show numbered pages.
