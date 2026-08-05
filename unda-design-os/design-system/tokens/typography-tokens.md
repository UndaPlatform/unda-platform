# Typography Tokens

Source: *Design System v1.0*, §2.1. Implements the system defined in [`../foundations/typography.md`](../foundations/typography.md) and the direction set in [`../../creative-direction/typography-direction.md`](../../creative-direction/typography-direction.md).

## Families

- **General Sans** — marketing/brand
- **Geist** — product UI
- **Geist Mono** — code, data, timestamps

Weights: Regular 400, Medium 500, Semibold 600, Bold 700 only.

Naming convention: `{family}.{weight}` (e.g. `General Sans 700`).

## Scale

| Token | Family / Weight | Size | Line | Track |
|---|---|---|---|---|
| `type.display` | General Sans 700 | 56 | 1.05 | -0.02em |
| `type.h1` | General Sans 700 | 40 | 1.15 | -0.01em |
| `type.h2` | General Sans 600 | 32 | 1.2 | 0 |
| `type.h3` | General Sans 600 | 24 | 1.25 | 0 |
| `type.h4` | Geist 600 | 20 | 1.3 | 0 |
| `type.body-lg` | Geist 400 | 17 | 1.6 | 0 |
| `type.body` | Geist 400 | 15 | 1.7 | 0 |
| `type.body-sm` | Geist 400 | 13 | 1.6 | 0 |
| `type.caption` | Geist 500 | 12 | 1.5 | 0.02em |
| `type.code` | Geist Mono 400 | 13 | 1.6 | 0 |

Sizes are in px; line values are unitless multipliers of the font size.

## Responsive behavior

`display`/`h1`/`h2` scale down one step below the `md` breakpoint: 56→44, 40→32, 32→26. Body sizes are fixed at every breakpoint.

## Line length

Max 75 characters for body copy, enforced via `max-width: 65ch` on text containers.

## Related

[Typography foundations](../foundations/typography.md) · [Spacing, grid & border tokens](./spacing-grid-and-border-tokens.md)

---

[Back to Tokens index](./index.md) · [Back to Design OS root](../../README.md)
