# Navigation, Header, Sidebar & Footer

Source: *Design System v1.0*, §V.

**Purpose** — header/nav: primary wayfinding, sticky only in product surfaces (never marketing). Sidebar: persistent product navigation, collapsible below `lg`. Footer: utility and legal, not a second marketing surface.

**States** — current page (`aria-current="page"`, underline not color alone), collapsed/expanded (sidebar), scrolled (header background solidifies from transparent, product surfaces only).

**Accessibility** — landmark roles (`nav`, `header`, `footer`) on every instance; mobile menu button has `aria-expanded` and traps focus while open.

**Responsive** — collapses to a single menu button below `md`; sidebar collapses to an icon-only rail below `lg`, full overlay drawer below `md`.

**Figma spec** — `Header`, `Sidebar`, `Footer` as top-level page templates rather than small components, since each is a full-width composition.

## Related

[Tabs, accordion, breadcrumb & pagination](./tabs-accordion-breadcrumb-and-pagination.md) · [Component philosophy: navigation & footer](../../creative-direction/component-philosophy.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
