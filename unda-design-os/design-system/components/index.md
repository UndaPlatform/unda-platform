# Components

One file per component (or tightly related component family) — purpose, anatomy, variants, states, accessibility, content, tokens, responsive behavior, engineering notes, and Figma spec. Source: *Design System v1.0*, §V.

**Status:** Complete for the atomic component library. Marketing/page-level assemblies (hero, pricing, FAQ, testimonials, case study, travel card, documentation components) are **Patterns**, not components — see [`../patterns/`](../patterns/index.md) (Phase 4).

## Default state matrix

Every component ships with this full state matrix unless a state is explicitly not applicable: *default, hover, focus, keyboard focus, active/pressed, selected, disabled, loading, success, warning, error, empty.* A missing required state is a defect, not an acceptable omission — flag it rather than ship it silently incomplete.

## Contents

- [Button](./button.md)
- [Text button, icon button & button group](./text-button-icon-button-and-button-group.md)
- [Link](./link.md)
- [Input, textarea & search](./input-textarea-and-search.md)
- [Select / dropdown, date picker & file upload](./select-datepicker-and-fileupload.md)
- [Checkbox, radio & switch](./checkbox-radio-and-switch.md)
- [Card](./card.md)
- [Modal, drawer, popover & tooltip](./modal-drawer-popover-and-tooltip.md)
- [Toast, alert, badge, tag & chip](./toast-alert-badge-tag-and-chip.md)
- [Table & list](./table-and-list.md)
- [Tabs, accordion, breadcrumb & pagination](./tabs-accordion-breadcrumb-and-pagination.md)
- [Navigation, header, sidebar & footer](./navigation-header-sidebar-and-footer.md)
- [Avatar, timeline & empty/loading states](./avatar-timeline-and-empty-loading-states.md)
- [Charts & dashboard widgets](./charts-and-dashboard-widgets.md)

## Related

[Tokens](../tokens/index.md) (what every component consumes) · [Component philosophy](../../creative-direction/component-philosophy.md) (the intent behind each) · [Patterns](../patterns/index.md) (page-level assemblies built from these)

---

[Back to Design System index](../index.md) · [Back to Design OS root](../../README.md)
