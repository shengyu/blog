# Category / Tag Filtering Wireframe (Low-Fidelity)

Viewport target: `>= 1024px` on archive pages, with stacked chips on mobile.

## State: Default

```text
+--------------------------------------------------------------------------------------------------+
| [FILTER BAR]                                                                                     |
| [All] [Design] [Writing] [Tutorials] [Notes]                                                      |
+--------------------------------------------------------------------------------------------------+
| [RESULTS] All published posts                                                                     |
| [Card] Title | date | excerpt | Tags: Design, Writing                                             |
| [Card] Title | date | excerpt | Tags: Tutorials                                                   |
| [Card] Title | date | excerpt | Tags: Notes                                                        |
+--------------------------------------------------------------------------------------------------+
```

- Default shows the available taxonomy and keeps `All` selected.
- If a post has no tags, it still appears in `All` and simply omits tag labels.
- When tags are not configured for the site, hide the entire filter bar.

## State: Hover / Focus

```text
+--------------------------------------------------------------------------------------------------+
| [FILTER BAR]                                                                                     |
| [All] [Design] [Writing] [Tutorials] [Notes]                                                      |
|  ^ hover lift / focus ring                                                                        |
+--------------------------------------------------------------------------------------------------+
```

- Hover/focus gives each chip a stronger outline and clearer selected state.
- A focused chip should be actionable by keyboard and toggle with Space or Enter.
- Multi-select is optional; if implemented, selected chips must remain visibly active.

## State: Empty / No Result

```text
+--------------------------------------------------------------------------------------------------+
| [FILTER STATE] No posts match these filters                                                       |
| Try another tag or [Clear filters]                                                                |
+--------------------------------------------------------------------------------------------------+
| Active filters: Design + Notes                                                                    |
+--------------------------------------------------------------------------------------------------+
```

- Empty/no-result is the expected outcome when the selected filters are too narrow.
- Keep the active filter chips visible so the user can see what caused the empty set.
- A clear action should restore the full archive in one step.

## State: Error

```text
+--------------------------------------------------------------------------------------------------+
| [FILTER ERROR] Tag data could not be loaded                                                        |
| [Retry]   [Show all posts]                                                                        |
+--------------------------------------------------------------------------------------------------+
```

- Error covers taxonomy loading failure or a broken filter source.
- The archive list should remain reachable even when filtering fails.
- If tags are a future enhancement only, skip rendering the filter bar instead of showing an error.
