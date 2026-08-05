# 2. Layout Language

Extends [Layout philosophy](../../creative-direction/layout-philosophy.md) and [Grid & breakpoints](../../design-system/foundations/grid-and-breakpoints.md) into concrete guidance for the page types brand expression actually produces.

## Grid system

Every surface — web, product, print, presentation — shares the same underlying logic: 12 columns, 24px gutter (see [Spacing, grid & border tokens](../../design-system/tokens/spacing-grid-and-border-tokens.md)). Print and presentation formats adapt the column count to their own canvas (e.g. a 16:9 slide uses a 12-column grid scaled to that width) but keep the same gutter-to-margin ratio, so a layout "feels" like Unda even off-screen.

## Margins & whitespace

Margins scale with canvas size, never fixed at one pixel value across formats — a business card and a billboard don't share a margin, but they share a margin *ratio* relative to their shortest dimension. Whitespace scales with the importance of what it surrounds ([Layout philosophy](../../creative-direction/layout-philosophy.md)): the most important element on any layout gets the most surrounding air.

## Alignment

Everything sits on the shared grid. Centering is a deliberate choice for symmetric moments (a logo lockup on a cover slide), not a default — most layouts are left-aligned, matching how the type system and component library already behave.

## Modular composition

Complex layouts are built from repeating modules (a stat block, a quote block, an image-with-caption block), not redrawn per page. This mirrors [System thinking](../../design-system/rules/system-thinking-and-consistency.md): a layout is a composition of existing pieces, not a new invention per document.

## Rhythm & hierarchy

Rhythm — consistent vertical spacing between sections (`space.1200`–`space.1600` for marketing-scale sections, per [Spacing tokens](../../design-system/tokens/spacing-grid-and-border-tokens.md)) — so scrolling or paging through any Unda document feels metered. Hierarchy comes from scale, weight, and position, in that order; color is the last resort ([Visual language](../../creative-direction/visual-language.md)).

## Asymmetry rules

Compositions are asymmetric but weighted: a large element on one side is answered by density (a block of smaller supporting content), never by another large element mirrored on the other side. Perfect symmetry is reserved for a small set of intentional moments — cover slides, the logo lockup itself — not a general layout tool.

```
GOOD (asymmetric, weighted)          AVOID (mirrored symmetry as default)
┌────────────────┬─────┐             ┌────────┬────────┐
│                │ ▪ ▪ │             │        │        │
│   HEADLINE     │ ▪ ▪ │             │  BOX A │  BOX B │
│                │ ▪ ▪ │             │        │        │
└────────────────┴─────┘             └────────┴────────┘
```

## Hero composition

The hero states what the visitor gets in one sentence before anything else ([Hero pattern](../../design-system/patterns/hero.md)). Visually: one dominant element (headline or image), one supporting element (subhead, single CTA), generous surrounding space. Never more than one focal point.

## Layouts by page type

- **Landing pages** — hero → proof (logos/stats) → capability sections → social proof → CTA. Repeating section rhythm, one idea per section.
- **Documentation layouts** — dense, scannable, sidebar navigation + content column capped at 75 characters (see [Typography tokens](../../design-system/tokens/typography-tokens.md)); code and data in Geist Mono.
- **Dashboard layouts** — full-width, no fixed max-width; the single most important metric largest on screen, everything else deliberately smaller ([Component philosophy: dashboards](../../creative-direction/component-philosophy.md)).
- **Marketing layouts** — constrained measure (1200px max content width), generous section rhythm, imagery-led where the image is strong enough to hold the frame ([Art direction](../../creative-direction/art-direction.md)).
- **Editorial layouts** (Unda Studio) — the one context permitted more expressive scale contrast between headline and body ([Typography direction](../../creative-direction/typography-direction.md)); still one shared grid underneath.

## Related

[Grid & breakpoints](../../design-system/foundations/grid-and-breakpoints.md) · [Visual language](../../creative-direction/visual-language.md) · [Graphic language](./07-graphic-language.md)

---

[Back to Manual index](./index.md) · [Back to Design OS root](../../README.md)
