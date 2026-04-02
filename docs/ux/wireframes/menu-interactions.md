# Menu Interaction Wireframe (Low-Fidelity)

Viewport target: desktop navigation plus a mobile drawer/menu pattern.

## State: Default

```text
+--------------------------------------------------------------------------------------------------+
| [HEADER] Logo                                                Home | Blog | Tags | About       |
+--------------------------------------------------------------------------------------------------+
| [MOBILE HEADER] [Menu] Logo                                              [Search] [Share]       |
+--------------------------------------------------------------------------------------------------+
| [CONTENT]                                                                                ...     |
+--------------------------------------------------------------------------------------------------+
```

- Default keeps the top-level destinations visible on desktop and collapses them behind a menu trigger on mobile.
- The current page should remain marked as active while the user moves through related pages.
- The menu trigger should preserve enough context to orient users before opening the drawer.

## State: Hover / Focus

```text
+--------------------------------------------------------------------------------------------------+
| [HEADER] Logo                                                Home | Blog | Tags | About       |
|                                                               ^ hover / focus state             |
+--------------------------------------------------------------------------------------------------+
| [MOBILE MENU TRIGGER] [Menu]                                                                     |
|                      ^ focus ring / pressed state                                                |
+--------------------------------------------------------------------------------------------------+
```

- Hover/focus makes the active destination and the trigger state obvious.
- Keyboard navigation should move in reading order with a visible focus ring on every item.
- The menu should remain operable without a pointer device.

## State: Open / Drawer

```text
+--------------------------------------------------------------------------------------------------+
| [MOBILE HEADER] [Close] Logo                                                       [Search]     |
+--------------------------------------------------------------------------------------------------+
| [DRAWER]                                                                                         |
| - Home                                                                                           |
| - Blog <ACTIVE>                                                                                  |
| - Tags                                                                                           |
| - About                                                                                          |
|                                                                                                  |
| [BACKDROP] content behind is dimmed                                                              |
+--------------------------------------------------------------------------------------------------+
```

- Open state uses a drawer or slide-out panel on smaller screens.
- Backdrop click, Escape, or the Close control should dismiss the drawer.
- Focus should be trapped inside the drawer while it is open.

## State: Error / Fallback

```text
+--------------------------------------------------------------------------------------------------+
| [FALLBACK NAV] Home | Blog | Tags | About                                                       |
| Menu script failed, so the links stay visible in the page flow.                                  |
+--------------------------------------------------------------------------------------------------+
```

- Error is a progressive-enhancement fallback, not a user-facing failure page.
- If the drawer script fails, the navigation must still be reachable as plain links.
- No empty state is needed here because navigation items are always concrete destinations.
