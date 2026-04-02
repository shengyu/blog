# Comments / Reactions Wireframe (Low-Fidelity)

Viewport target: post detail pages, but marked here as a future-state slot.

## Scope Note

- Current project scope marks comments and community features as out of scope for version 1.
- This sketch reserves a post-footer slot so the layout has a defined place for the feature later.
- In the current release, the slot should be hidden rather than rendered as an interactive control.

## State: Default

```text
+--------------------------------------------------------------------------------------------------+
| [COMMENTS / REACTIONS SLOT]                                                                      |
| Comments are not enabled in this version.                                                        |
| [Leave feedback via email]  [Copy page link]                                                     |
+--------------------------------------------------------------------------------------------------+
```

- Default is a placeholder panel, not an interactive thread.
- If a future implementation adds comments, the slot can expand below the article body or after share actions.

## State: Hover / Focus

```text
+--------------------------------------------------------------------------------------------------+
| [COMMENTS / REACTIONS SLOT]                                                                      |
| Disabled in v1                                                                                   |
+--------------------------------------------------------------------------------------------------+
```

- Hover/focus does not activate a thread in the current scope.
- If the feature is introduced later, the focus ring should land on the composer first.

## State: Empty / No Result

```text
+--------------------------------------------------------------------------------------------------+
| [NO COMMUNITY CONTENT]                                                                           |
| There are no reactions or comments on this page.                                                 |
+--------------------------------------------------------------------------------------------------+
```

- Empty/no-result is effectively the only supported state for version 1.
- If a future comments service is added, replace this text with the normal empty thread message.

## State: Error

```text
+--------------------------------------------------------------------------------------------------+
| [COMMENTS ERROR] Discussion loading failed                                                        |
| [Retry]  [Hide comments]                                                                          |
+--------------------------------------------------------------------------------------------------+
```

- Error is only relevant for a future implementation that loads comment data from a service.
- A failure should not block reading the article or sharing the page.
