# Blog Style Guide

This document is the source of truth for the blog's visual identity system. The same values are defined in `src/styles/global.css` and applied site-wide.

## Review Artifact

- Published review surface: `/style-guide/`
- Coverage: brand decisions, main page mockups for Home, Blog Archive, and Post Detail, plus the core component inventory.
- Live review path: open the route cards in `/style-guide/` to compare the artifact against `/`, `/blog/`, and a real post page.
- Review goal: confirm the same warm editorial direction, typography, color usage, and surface treatment repeat consistently across the key pages and reusable components.

## Brand Direction

- Tone: warm, editorial, and restrained
- Primary surfaces: parchment and soft cream
- Accent color: deep teal
- Support color: clay
- Typography: serif display with a humanist sans body face

## Color Tokens

### Primary palette

| Token | Value | Use |
| --- | --- | --- |
| `--color-canvas` | `#f4efe6` | Base page background |
| `--color-surface` | `#fffaf2` | Cards and panels |
| `--color-ink` | `#181611` | Primary text |
| `--color-accent` | `#0f766e` | Primary action color |
| `--color-accent-strong` | `#115e59` | Hover and active accent states |

### Secondary palette

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink-muted` | `#5b5648` | Secondary text |
| `--color-line` | `rgba(24, 22, 17, 0.12)` | Borders and dividers |
| `--color-warm` | `#c46b45` | Supporting emphasis color |
| `--color-success` | `#2f7d63` | Success states if needed later |

### Semantic colors

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `var(--color-canvas)` | App background |
| `--surface` | `var(--color-surface-elevated)` | Glass panels and header surfaces |
| `--surface-strong` | `var(--color-surface)` | Solid cards |
| `--text` | `var(--color-ink)` | Default foreground |
| `--text-muted` | `var(--color-ink-muted)` | Supporting text |
| `--accent-soft` | `rgba(15, 118, 110, 0.14)` | Subtle accent fills |
| `--warm-soft` | `rgba(196, 107, 69, 0.14)` | Secondary highlight fills |

## Typography Scale

### Font families

| Token | Value | Use |
| --- | --- | --- |
| `--font-display` | `"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif` | Headings and brand moments |
| `--font-body` | `"Avenir Next", Avenir, "Segoe UI", "Helvetica Neue", Arial, sans-serif` | Body copy and UI text |
| `--font-mono` | `"SFMono-Regular", ui-monospace, Menlo, Consolas, "Liberation Mono", monospace` | Code and technical labels |

### Type scale

| Token | Value | Suggested use |
| --- | --- | --- |
| `--text-xs` | `0.75rem` | Overlines, labels, metadata |
| `--text-sm` | `0.875rem` | Small UI text |
| `--text-base` | `1rem` | Default body text |
| `--text-lg` | `1.125rem` | Lead paragraphs, stronger body copy |
| `--text-xl` | `1.25rem` | Card headings and prominent supporting text |
| `--text-2xl` | `1.5rem` | Section headings |
| `--text-3xl` | `2rem` | Article headings |
| `--text-4xl` | `2.75rem` | Page headers |
| `--text-5xl` | `3.5rem` | Hero display size |

### Line heights and tracking

- `--leading-tight`: `1.12`
- `--leading-snug`: `1.35`
- `--leading-normal`: `1.6`
- `--leading-relaxed`: `1.85`
- `--tracking-tight`: `-0.04em`
- `--tracking-wide`: `0.12em`

## Spacing Rules

Spacing follows a compact geometric scale that grows by roughly 1.5x to 2x at each step.

| Token | Value | Use |
| --- | --- | --- |
| `--space-1` | `0.25rem` | Hairline gaps |
| `--space-2` | `0.5rem` | Tight inline spacing |
| `--space-3` | `0.75rem` | Small component padding |
| `--space-4` | `1rem` | Default spacing unit |
| `--space-5` | `1.5rem` | Section padding |
| `--space-6` | `2rem` | Layout gaps |
| `--space-7` | `3rem` | Large section spacing |
| `--space-8` | `4rem` | Major vertical separation |
| `--space-9` | `6rem` | Hero-level breathing room |
| `--space-10` | `8rem` | Maximum spacing scale |

Rules:

- Use `--space-4` as the base unit for most component spacing.
- Use `--space-5` to `--space-7` for card padding and section separation.
- Use `clamp()` only for layout shells and large panels that need responsive breathing room.

## Radius And Shadows

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | `0.625rem` | Small badges and code pills |
| `--radius-md` | `1rem` | Standard cards and inputs |
| `--radius-lg` | `1.5rem` | Feature cards and elevated surfaces |
| `--radius-xl` | `2rem` | Primary panels |
| `--radius-pill` | `9999px` | Buttons and nav pills |
| `--shadow-sm` | `0 1px 2px rgba(24, 22, 17, 0.06)` | Subtle lift |
| `--shadow-md` | `0 10px 24px rgba(24, 22, 17, 0.08)` | Interactive elevation |
| `--shadow-lg` | `0 22px 60px rgba(24, 22, 17, 0.1)` | Cards and hero surfaces |

## Core UI Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--page-width` | `72rem` | Max width for the site shell |
| `--content-width` | `44rem` | Comfortable reading width |
| `--section-width` | `60rem` | Larger content sections |
| `--page-gutter` | `clamp(1rem, 3vw, 2rem)` | Responsive outer padding |
| `--surface-blur` | `12px` | Frosted card treatment |
| `--focus-ring` | `0 0 0 3px rgba(15, 118, 110, 0.28)` | Keyboard focus treatment |

## Usage Notes

- Apply `--font-display` to all major headings.
- Apply `--font-body` to body text, navigation, labels, and buttons.
- Prefer semantic tokens such as `--surface`, `--text`, and `--accent` over raw palette values in page styles.
- Use `--surface-strong` for solid cards and `--surface` for translucent panels.
- Keep content containers within `--content-width` when readability matters.
