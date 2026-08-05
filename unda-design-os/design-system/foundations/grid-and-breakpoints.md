# Grid, Breakpoints & Responsive Layout

## Philosophy

Structure creates clarity. Strong layouts come from disciplined structure, not decorative styling — every element should feel intentionally placed, nothing arbitrary.

## Grid system

A responsive **12-column grid** is the primary layout system across the whole ecosystem — familiar to designers and developers, flexible enough for both marketing pages and dense dashboards.

| Device | Columns |
|---|---|
| Mobile | 4 |
| Tablet | 8 |
| Desktop | 12 |
| Large desktop | 12 |

Visual rhythm should stay consistent across breakpoints — layouts adapt, the underlying experience doesn't change shape conceptually.

## Containers

Content should sit inside responsive containers with sensible max-widths rather than stretching edge-to-edge on large screens:

| Container | Typical use |
|---|---|
| Small | Documentation, articles |
| Medium | Standard pages |
| Large | Marketing pages |
| Full | Dashboards, data tables |

## Alignment

Every element — text, images, buttons, forms, cards, tables, navigation, icons — should align to the grid. Random positioning should never happen; consistent alignment is what makes a page feel professional versus assembled.

## Modular layouts

Compose pages from reusable modules (hero, feature blocks, testimonials, pricing, case studies, CTAs, contact sections — see `../patterns/`) rather than one-off, individually designed sections per page. This is what makes new pages fast to build and visually consistent by construction.

## Marketing vs. product grid usage

- **Marketing** — the grid can be used more expressively (alternating layouts, full-width imagery, layered composition) — but creative freedom happens *within* the grid's structure, not outside it.
- **Product** — the grid supports predictable navigation, consistent forms, balanced dashboards, reusable cards/tables/panels. Efficiency over expression.

## Responsive behavior

As screen size shrinks: columns collapse naturally, content reflows gracefully, components preserve their hierarchy, navigation adapts predictably, spacing stays proportional. A responsive layout should feel intentionally designed for that size, not like a compressed desktop screenshot.

## Related

[Spacing](./spacing.md) · [Typography](./typography.md) · [Layouts (Phase 4)](../layouts/index.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
