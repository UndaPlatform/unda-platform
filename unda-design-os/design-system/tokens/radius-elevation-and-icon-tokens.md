# Radius, Elevation & Icon Tokens

Source: *Design System v1.0*, §2.4. Implements the system defined in [`../foundations/radius-and-borders.md`](../foundations/radius-and-borders.md), [`../foundations/elevation-and-shadows.md`](../foundations/elevation-and-shadows.md), and [`../foundations/icons.md`](../foundations/icons.md).

## Shadow

Neutral, low-opacity only:

| Token | Value |
|---|---|
| `shadow.sm` | `0 1px 2px oklch(0 0 0/0.06)` |
| `shadow.md` | `0 4px 12px oklch(0 0 0/0.08)` |
| `shadow.lg` | `0 12px 32px oklch(0 0 0/0.10)` |

## Radius

| Token | Value | Use |
|---|---|---|
| `radius.sm` | 4px | inputs, chips |
| `radius.md` | 8px | cards, buttons |
| `radius.lg` | 12px | modals |
| `radius.full` | 999px | avatars, pills, switches |

No left-border accent decoration on cards.

## Icons

Single stroke-weight (1.5px).

| Token | Value |
|---|---|
| `icon.sm` | 16px |
| `icon.md` | 20px |
| `icon.lg` | 24px |

Sizes are tied to adjacent type size, optically centered on baseline, never mixed with a second icon style.

## Related

[Elevation & shadows foundations](../foundations/elevation-and-shadows.md) · [Icons foundations](../foundations/icons.md) · [Color tokens](./color-tokens.md)

---

[Back to Tokens index](./index.md) · [Back to Design OS root](../../README.md)
