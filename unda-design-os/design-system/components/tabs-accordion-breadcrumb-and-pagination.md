# Tabs, Accordion, Breadcrumb & Pagination

Source: *Design System v1.0*, §V.

**Purpose** — tabs switch between parallel views of the same object; accordion discloses detail within one view; breadcrumb and pagination orient a user within a hierarchy or a list.

**States** — selected (tabs/pagination), expanded/collapsed (accordion), current (breadcrumb's last, non-clickable, item), keyboard focus with roving tabindex (tabs).

**Accessibility** — tabs follow the ARIA Tabs pattern (arrow-key roving focus, `aria-selected`); accordion header is a real button with `aria-expanded`; breadcrumb uses `nav aria-label="Breadcrumb"` with an ordered list.

**Content** — tab labels are nouns, 1–2 words; pagination always shows current/total, never page numbers alone with no context.

**Figma spec** — four Component Sets; tabs and accordion share a common "disclosure" interaction token set (same duration/easing).

## Related

[Navigation, header, sidebar & footer](./navigation-header-sidebar-and-footer.md) · [Motion tokens](../tokens/motion-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
