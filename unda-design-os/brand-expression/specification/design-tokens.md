# Design Tokens

This file lists only tokens this system *adds*. Color, typography, spacing, radius, elevation, icon, and core motion tokens are already fully specified in [`../../design-system/tokens/`](../../design-system/tokens/index.md) — reuse those, don't restate or redefine them here.

## Illustration tokens

| Token | Value |
|---|---|
| `illustration.stroke` | 2px |
| `illustration.shadow` | `shadow.sm` (from [Radius, elevation & icon tokens](../../design-system/tokens/radius-elevation-and-icon-tokens.md)) |
| `illustration.max-layers` | 2 |

## Photography tokens

Photography is guided by parameters, not tokens in the strict sense (no code consumes a "grading value") — see [Photography guidelines](./photography-guidelines.md) for the full spec. The one true token dependency: any text overlay on a photograph uses `opacity.scrim` (0.4, from [Color tokens](../../design-system/tokens/color-tokens.md)).

## Graphic language tokens

| Token | Value | Source |
|---|---|---|
| `graphic.module-radius` | 3 units (of an 8×8 grid) | [Logo system](../../brand/logo-system.md) construction grid |
| `graphic.pattern-opacity` | 0.06 (matches `opacity.hover-overlay`) | reused, not new |
| `graphic.frame-radius` | `radius.lg` | [Radius tokens](../../design-system/tokens/radius-elevation-and-icon-tokens.md) |

## Presentation canvas tokens

| Token | Value |
|---|---|
| `canvas.slide` | 1920×1080 (16:9) |
| `canvas.slide-margin` | 8% of canvas width, each side |

## Print tokens

| Token | Value |
|---|---|
| `print.bleed` | 3mm |
| `print.symbol-min` | 6mm (symbol-only, per [Logo system §3](../../brand/logo-system.md#3-clear-space--minimum-size)) |
| `print.symbol-min-lockup` | 8mm (full lockup) |

## Related

[Design System tokens](../../design-system/tokens/index.md) · [Spacing & responsive rules](./spacing-and-responsive-rules.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
