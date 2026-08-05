# Avatar, Timeline & Empty/Loading States

Source: *Design System v1.0*, §V.

**Purpose** — avatar: represents a person or org. Timeline: a chronological sequence of discrete events. Empty/loading: what a data-driven surface shows before or absent its data.

**States** — avatar: image, initials fallback (`neutral.100` bg), unknown (generic icon); timeline node: complete/current/upcoming; skeleton mirrors the loaded content's exact geometry (same row/column count) with a slow shimmer, never a generic spinner in place of structured content.

**Accessibility** — avatar image has meaningful `alt` (person's name), decorative fallback marked `aria-hidden`; skeletons are hidden from screen readers until real content replaces them.

**Figma spec** — `Avatar` `radius.full` circle Component Set; `Skeleton` block primitive reused across every loading state in the library rather than redrawn per component.

## Related

[Table & list](./table-and-list.md) · [Radius, elevation & icon tokens](../tokens/radius-elevation-and-icon-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
