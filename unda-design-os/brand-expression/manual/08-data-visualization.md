# 8. Data Visualization

The visual-design layer on top of [Charts & dashboard widgets](../../design-system/components/charts-and-dashboard-widgets.md) and [Table & list](../../design-system/components/table-and-list.md) — this section covers styling and chart-type-specific guidance; those component docs cover states and engineering.

## Charts & graphs

One key metric per chart, at the largest legible size, with supporting series muted. A supporting series uses neutral gray or a single division accent — never a multi-color rainbow legend ([Charts & dashboard widgets](../../design-system/components/charts-and-dashboard-widgets.md)). Line charts use 2px strokes; bar charts use `radius.sm` on bar tops only, never fully rounded bars (reads as decorative, not data-accurate).

## Tables

Set in [Table & list](../../design-system/components/table-and-list.md) conventions: numeric columns right-aligned in `type.code`, real `<th scope>` headers. No zebra-striping by default — use `bg.subtle` only for row-selected or row-hover states, not as a permanent decorative pattern.

## Maps

Used primarily by Unda Travel. Flat, single-hue map styling (neutral base, `division.travel` accent for markers/routes) — never a busy, multi-color default map style. Markers use the [Avatar](../../design-system/components/avatar-timeline-and-empty-loading-states.md) or a simple pin shape built from the rounded-square + point primitive, not a photographic pin icon.

## Metrics & dashboards

The single most important number on any dashboard is the largest element on the screen ([Component philosophy: dashboards](../../creative-direction/component-philosophy.md)); everything else is deliberately smaller supporting detail — never multiple equally-sized "hero numbers" competing for attention.

## Status indicators

`status.success`/`warning`/`error`/`info` tokens exclusively ([Color tokens](../../design-system/tokens/color-tokens.md)) — status is never color-only; pair with an icon or label ([Accessibility rules](../../design-system/rules/accessibility-rules.md)).

## Empty, loading, error, and success visuals

- **Empty** — an illustrative message stating what will appear and why it's currently empty, never a blank white box or generic "No data" ([Table & list](../../design-system/components/table-and-list.md)).
- **Loading** — structural skeletons mirroring final geometry, never generic spinners ([Motion language](./06-motion-language.md)).
- **Error** — `status.error` token, plain-language explanation of what to fix, never a raw system error message shown to the end user.
- **Success** — `status.success` token, states the outcome plainly ("Report generated") — see [Toast, alert, badge, tag & chip](../../design-system/components/toast-alert-badge-tag-and-chip.md).

## Accessibility

Every chart has a text-equivalent summary — a caption or accessible data table — since canvas/SVG chart data isn't reliably announced to screen readers ([Charts & dashboard widgets](../../design-system/components/charts-and-dashboard-widgets.md)).

## Related

[Charts & dashboard widgets](../../design-system/components/charts-and-dashboard-widgets.md) · [Color tokens](../../design-system/tokens/color-tokens.md) · [Accessibility rules](../../design-system/rules/accessibility-rules.md)

---

[Back to Manual index](./index.md) · [Back to Design OS root](../../README.md)
