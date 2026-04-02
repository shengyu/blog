# Share Actions Wireframe (Low-Fidelity)

Viewport target: post detail pages on desktop and mobile.

## State: Default

```text
+--------------------------------------------------------------------------------------------------+
| [POST TOOLBAR]                                                                                   |
| [Share post] [Copy link] [More]                                                                  |
+--------------------------------------------------------------------------------------------------+
| [POST CONTENT]                                                                                   |
| Article body...                                                                                  |
+--------------------------------------------------------------------------------------------------+
```

- Default keeps sharing close to the article title or the end of the post.
- The primary path is `Copy link`; native share can be a secondary fallback when available.
- The control should be reachable without requiring social login or client state.

## State: Hover / Focus

```text
+--------------------------------------------------------------------------------------------------+
| [POST TOOLBAR]                                                                                   |
| [Share post] <popover open>                                                                       |
| - Copy link                                                                                      |
| - Open share sheet                                                                               |
| - Share to social                                                                                |
+--------------------------------------------------------------------------------------------------+
```

- Hover/focus opens the menu or highlights the trigger with a visible ring.
- The currently focused action should be obvious before activation.
- On mobile, the same actions can appear in a bottom sheet or compact overflow menu.

## State: Empty / No Result

```text
+--------------------------------------------------------------------------------------------------+
| [SHARE STATE] No share targets available                                                         |
| Use the page URL shown below to share manually                                                    |
| /blog/example-post/                                                                              |
+--------------------------------------------------------------------------------------------------+
```

- Empty/no-result is not a normal content state, but it is useful when the browser lacks native share support.
- The page URL should remain visible as a manual fallback.
- If the implementation has no social targets, only keep `Copy link` and remove the rest.

## State: Error

```text
+--------------------------------------------------------------------------------------------------+
| [SHARE ERROR] Could not copy the link                                                             |
| [Try again]  [Select URL manually]                                                               |
+--------------------------------------------------------------------------------------------------+
```

- Error covers clipboard denial, browser restrictions, or a failed share-sheet invocation.
- The fallback should still expose a selectable URL so sharing never fully blocks.
- If the browser provides its own native share UI, show no error unless the invocation fails.
