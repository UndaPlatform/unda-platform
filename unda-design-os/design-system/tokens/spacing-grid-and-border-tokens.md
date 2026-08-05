# Spacing, Grid & Border Tokens

Source: *Design System v1.0*, §2.2. Implements the system defined in [`../foundations/spacing.md`](../foundations/spacing.md) and [`../foundations/grid-and-breakpoints.md`](../foundations/grid-and-breakpoints.md).

## Spacing scale

Base unit: 4px.

| Token | Value |
|---|---|
| `space.50` | 4px |
| `space.100` | 8px |
| `space.150` | 12px |
| `space.200` | 16px |
| `space.300` | 24px |
| `space.400` | 32px |
| `space.600` | 48px |
| `space.800` | 64px |
| `space.1200` | 96px |
| `space.1600` | 128px |

**Vertical rhythm** — marketing sections separate by `space.1200`–`space.1600`; component-internal spacing uses `space.100`–`space.300`.

## Grid

12 columns, 24px gutter, max content width 1200px (marketing), full-width with 24px page margin (product).

## Breakpoints

| Token | Value |
|---|---|
| `sm` | 480 |
| `md` | 768 |
| `lg` | 1024 |
| `xl` | 1280 |
| `2xl` | 1536 |

## Border width

| Token | Value | Use |
|---|---|---|
| `border.hairline` | 1px | default dividers/inputs |
| `border.thick` | 2px | selected/focus rings, recommended-plan frames only |

## Z-index

| Layer | Value |
|---|---|
| base | 0 |
| dropdown | 100 |
| sticky | 200 |
| overlay | 300 |
| modal | 400 |
| toast | 500 |
| tooltip | 600 |

## Related

[Spacing foundations](../foundations/spacing.md) · [Grid & breakpoints foundations](../foundations/grid-and-breakpoints.md) · [Radius & border tokens](./radius-elevation-and-icon-tokens.md)

---

[Back to Tokens index](./index.md) · [Back to Design OS root](../../README.md)
