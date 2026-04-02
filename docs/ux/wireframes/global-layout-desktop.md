# Desktop Global Layout (Low-Fidelity Wireframe)

Viewport target: `>= 1024px`

## State: Default Navigation

```text
+--------------------------------------------------------------------------------------------------+
| [HEADER] Logo / Site Name                          Search | Account | Utilities                  |
+--------------------------------------------------------------------------------------------------+
| [PRIMARY NAV]                            | [CONTENT CONTAINER]                    | [SECONDARY] |
| - Home                                   |                                        | - Related   |
| - Blog                                   | Page Title                             | - TOC       |
| - Projects                               | Intro / Hero                           | - Filters   |
| - About                                  | Main content stream                    | - Promo     |
| - Contact                                |                                        |             |
+------------------------------------------+----------------------------------------+-------------+
| [FOOTER] Copyright | Secondary links | Legal | Social                                            |
+--------------------------------------------------------------------------------------------------+
```

## State: Active Navigation

```text
+--------------------------------------------------------------------------------------------------+
| [HEADER] Logo / Site Name                          Search | Account | Utilities                  |
+--------------------------------------------------------------------------------------------------+
| [PRIMARY NAV]                            | [CONTENT CONTAINER]                    | [SECONDARY] |
| - Home                                   |                                        | - Related   |
| - Blog  <ACTIVE>                         | Context header: Blog                   | - TOC       |
| - Projects                               | Main content stream                    | - Filters   |
| - About                                  |                                        | - Promo     |
| - Contact                                |                                        |             |
+------------------------------------------+----------------------------------------+-------------+
| [FOOTER] Copyright | Secondary links | Legal | Social                                            |
+--------------------------------------------------------------------------------------------------+
```

## State: Collapsed Navigation

```text
+--------------------------------------------------------------------------------------------------+
| [HEADER] Logo / Site Name                               Search | Account | Utilities | [Expand]  |
+--------------------------------------------------------------------------------------------------+
| [PRIMARY NAV - COLLAPSED RAIL]       | [CONTENT CONTAINER]                       | [SECONDARY]|
| [H] [B] [P] [A] [C]                  | Page Title                                 | (optional) |
| icon-only quick access               | Main content stream                         | widgets    |
+--------------------------------------+---------------------------------------------+------------+
| [FOOTER] Copyright | Secondary links | Legal | Social                                            |
+--------------------------------------------------------------------------------------------------+
```
