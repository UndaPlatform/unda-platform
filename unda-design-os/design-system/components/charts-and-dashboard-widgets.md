# Charts & Dashboard Widgets

Source: *Design System v1.0*, §V.

**Purpose** — surface one key metric per widget at the largest legible size; everything else is supporting detail.

**Anatomy** — label (`type.caption`), value (`type.code` or `type.h2`), optional trend indicator, optional sparkline/bar series.

**Content rules** — a supporting series is muted neutral or a single division accent; never a multi-color rainbow legend.

**Accessibility** — every chart has a text-equivalent summary (a caption or accessible table) for screen readers, since canvas/SVG data is not reliably announced.

**Figma spec** — `DashboardWidget` Component Set with a `trend` (up/down/flat) property mapped to `status.success`/`status.error`/`neutral.600`.

## Related

[Component philosophy: dashboards](../../creative-direction/component-philosophy.md) · [Typography tokens](../tokens/typography-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
