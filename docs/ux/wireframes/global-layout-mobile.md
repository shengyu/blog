# Mobile Global Layout (Low-Fidelity Wireframe)

Viewport target: `<= 767px`

## State: Collapsed/Mobile Navigation (Default)

```text
+---------------------------------------+
| [HEADER] [Menu] Logo           [Acct] |
+---------------------------------------+
| [CONTENT CONTAINER]                   |
| Page title                            |
| Intro block                           |
| Main content                          |
+---------------------------------------+
| [SECONDARY AREA]                      |
| Collapsed sections (TOC / Related)    |
+---------------------------------------+
| [FOOTER] Links | Legal | Social       |
+---------------------------------------+
```

## State: Active Navigation (Drawer Open)

```text
+---------------------------------------+
| [HEADER] [Close] Logo          [Acct] |
+---------------------------------------+
| [PRIMARY NAV DRAWER - OPEN]           |
| - Home                                |
| - Blog  <ACTIVE>                      |
| - Projects                            |
| - About                               |
| - Contact                             |
+---------------------------------------+
| [CONTENT CONTAINER] (dimmed/behind)   |
+---------------------------------------+
| [FOOTER] Links | Legal | Social       |
+---------------------------------------+
```

## State: Default Navigation (Drawer Closed, In-Page)

```text
+---------------------------------------+
| [HEADER] [Menu] Logo           [Acct] |
+---------------------------------------+
| [PRIMARY NAV] Horizontal chips         |
| Home | Blog | Projects | About         |
+---------------------------------------+
| [CONTENT CONTAINER]                    |
| Main content stream                    |
+---------------------------------------+
| [SECONDARY AREA]                       |
| Related content / quick actions        |
+---------------------------------------+
| [FOOTER] Links | Legal | Social        |
+---------------------------------------+
```
