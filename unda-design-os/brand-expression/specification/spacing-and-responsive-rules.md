# Spacing & Responsive Rules

Applies the existing [Spacing, grid & border tokens](../../design-system/tokens/spacing-grid-and-border-tokens.md) to brand-expression assets specifically.

## Margin ratios by canvas

Rather than a fixed pixel margin per format (which breaks the moment the canvas size changes), margins are a ratio of the canvas's shortest dimension:

| Format | Margin |
|---|---|
| Web/product (existing) | Per [Grid & breakpoints](../../design-system/foundations/grid-and-breakpoints.md) — unchanged |
| Presentation slide (16:9) | 8% of width, each side (`canvas.slide-margin`) |
| Social square (1:1) | 10% of width, each side |
| Print (business card, letterhead) | Print bleed (`print.bleed`, 3mm) plus a minimum 5mm live-area margin inside that |

## Section rhythm

Marketing-scale vertical spacing (`space.1200`–`space.1600`) applies identically whether the "page" is a website or a slide deck's section spacing — see [Layout language](../manual/02-layout-language.md).

## Responsive behavior for expression assets

- **Photography** — art-directed crops per breakpoint (a wide hero crop at `lg`+, a tighter portrait crop below `md`) rather than one crop scaled/cropped mechanically at every size.
- **Illustration** — vector-based, scales cleanly; no separate asset needed per breakpoint.
- **Social graphics** — platform-native dimensions are fixed exports, not responsive — each platform gets its own export, never one graphic stretched to fit multiple aspect ratios.
- **Presentation** — fixed 16:9 canvas; no responsive behavior applies (a deck is not a responsive medium).

## Related

[Spacing, grid & border tokens](../../design-system/tokens/spacing-grid-and-border-tokens.md) · [Layout language](../manual/02-layout-language.md) · [Design tokens](./design-tokens.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
