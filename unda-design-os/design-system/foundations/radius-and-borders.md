# Border Radius & Shape Language

> Concrete radius values live in [`../tokens/radius-tokens.md`](../tokens/radius-tokens.md) (Phase 2).

## Philosophy

Simple geometry creates timeless systems. The shape language should feel structured, modern, and calm — neither completely sharp nor excessively rounded. Balanced geometry, not a trend.

## Primary shapes

- **Rounded squares** — the default shape across the system: buttons, cards, inputs, images, avatars, icons, navigation elements.
- **Circles** — used selectively: status indicators, profile images, badges, notification dots, loading indicators.
- **Straight lines** — dividers, timelines, charts, tables, grid alignment.

Curves are used intentionally, not decoratively.

## Radius scale (semantic tiers)

A small, named scale rather than arbitrary per-component values — None → XS → S → M → L → XL → Full (pill/circle). Component-to-radius mapping (concrete values in Tokens):

| Component | Radius tier |
|---|---|
| Buttons | Medium |
| Cards | Large |
| Inputs | Small–Medium |
| Modals | Large |
| Tooltips | Small |
| Badges | Full (pill) |

## Borders

Borders should stay subtle — their job is to define boundaries and separate content, not to draw attention. Prefer borders over shadows for **static** separation (cards, tables, inputs, sections, navigation); reserve shadows for **floating** elements (see [elevation](./elevation-and-shadows.md)).

## Consistency rule

The same radius values apply across buttons, cards, inputs, dropdowns, modals, images, icons, navigation, avatars, and charts — and ideally the logo itself echoes the same corner radius as the interface, so the brand mark and the product feel like one system rather than two.

## Related

[Radius tokens (Phase 2)](../tokens/radius-tokens.md) · [Elevation & shadows](./elevation-and-shadows.md) · [Icons](./icons.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
