# Search Interaction Wireframe (Low-Fidelity)

Viewport target: `>= 1024px` on archive pages, with the same interaction mirrored in a mobile overlay or expanded bar.

## State: Default

```text
+--------------------------------------------------------------------------------------------------+
| [ARCHIVE HEADER] Blog posts                                         [Search posts...] [Search] |
+--------------------------------------------------------------------------------------------------+
| [HINT] Search by title, description, slug, or tag                                                |
|                                                                                                  |
| [RESULTS] All published posts                                                                     |
| [Card] Title | date | excerpt | Read                                                              |
| [Card] Title | date | excerpt | Read                                                              |
| [Card] Title | date | excerpt | Read                                                              |
+--------------------------------------------------------------------------------------------------+
```

- Default keeps the archive visible so the user can browse without searching.
- Submit can happen on button click, Enter, or live filtering, depending on implementation.
- The input should preserve the typed query after navigation or refresh when supported.

## State: Hover / Focus

```text
+--------------------------------------------------------------------------------------------------+
| [ARCHIVE HEADER] Blog posts                                         [Search posts...] [Search] |
|                                                                      ^ focus ring / cursor       |
+--------------------------------------------------------------------------------------------------+
```

- Hover/focus strengthens the input border and makes the action affordance more visible.
- Keyboard focus lands cleanly in the field and the clear control appears once text exists.
- `Esc` should clear the field or close the search overlay on mobile.

## State: Empty / No Result

```text
+--------------------------------------------------------------------------------------------------+
| [SEARCH STATE] No matching posts                                                                  |
| Try a different keyword, remove filters, or [Clear search]                                        |
+--------------------------------------------------------------------------------------------------+
| [RECOVERY PATHS] Browse all posts | Reset filters                                                 |
+--------------------------------------------------------------------------------------------------+
```

- Empty/no-result replaces cards with a clear recovery message.
- Keep the query visible so the user can adjust it without retyping.
- If the search is scoped to a specific archive segment, the recovery action should return to the full list.

## State: Error

```text
+--------------------------------------------------------------------------------------------------+
| [SEARCH ERROR] Search is unavailable right now                                                     |
| The archive still works. [Retry] or [Browse all posts]                                             |
+--------------------------------------------------------------------------------------------------+
```

- Error covers a failed search index load or a runtime search exception.
- The fallback action should never block access to the archive list.
- If the site ships without search, hide the control instead of surfacing this error state.
