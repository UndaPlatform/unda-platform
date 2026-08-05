# Color Tokens

Source: *Design System v1.0*, §2.3. Implements the system defined in [`../foundations/color.md`](../foundations/color.md).

All colors are defined in **OKLCH** for perceptual consistency. Brand and division accents share identical lightness (0.58) and chroma (0.15); only hue varies.

## Brand & division accents

| Token | Hue | Division |
|---|---|---|
| `brand.primary` | 258 | Unda Solutions (Royal Blue) |
| `division.studio` | 305 | Unda Studio (Purple) |
| `division.tech` | 200 | Unda Technologies (Cyan) |
| `division.travel` | 155 | Unda Travel (Emerald) |
| `semantic.error` | 25 | — |

All at `oklch(0.58 0.15 <hue>)`.

## Neutral scale

`neutral.0` → `neutral.900`, a low-chroma cool gray scale (10 steps: 0, 50, 100, 200, 300, 400, 600, 700, 800, 900).

## Semantic tokens

| Token | Value |
|---|---|
| `bg.default` | `neutral.0` |
| `bg.subtle` | `neutral.50` |
| `surface.raised` | `neutral.0` + `shadow.sm` |
| `text.primary` | `neutral.900` |
| `text.secondary` | `neutral.600` |
| `text.disabled` | `neutral.400` |
| `border.default` | `neutral.200` |
| `border.focus` | `brand.primary` |
| `status.success` | `oklch(0.58 0.15 145)` |
| `status.warning` | `oklch(0.75 0.15 85)` |
| `status.error` | `oklch(0.58 0.15 25)` |
| `status.info` | `brand.primary` |

## Contrast conformance (WCAG 2.1 AA)

- `text.primary` on `bg.default` = 15.8:1
- `text.secondary` on `bg.default` = 5.9:1
- `brand.primary` on white (button text) = 4.6:1
- `status.error` text on `bg.default` = 5.1:1

Every pairing above is verified ≥4.5:1 for body text and ≥3:1 for large text/UI components before being added to the token set. No new color pairing may enter the token set without this same verification (see [`../rules/`](../rules/index.md), Phase 4).

## Dark mode

Inverts the neutral scale (`bg.default`→`neutral.900`, `text.primary`→`neutral.50`) and reduces brand/division/semantic chroma ~15% to prevent glare on dark surfaces; hue and relative usage rules stay identical.

## Opacity tokens

| Token | Value |
|---|---|
| `opacity.disabled` | 0.4 |
| `opacity.hover-overlay` | 0.06 |
| `opacity.scrim` | 0.4 |

## Related

[Color foundations](../foundations/color.md) · [Dark mode foundations](../foundations/dark-mode.md) · [Elevation, radius & icon tokens](./radius-elevation-and-icon-tokens.md)

---

[Back to Tokens index](./index.md) · [Back to Design OS root](../../README.md)
