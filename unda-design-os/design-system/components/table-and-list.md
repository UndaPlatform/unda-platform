# Table & List

Source: *Design System v1.0*, §V.

**Purpose** — table: structured, comparable, multi-row data. List: same-shaped rows (settings, activity, notifications) where columns would be overkill.

**States** — loading (skeleton rows mirroring final geometry), empty (illustrative message, never a blank white box), sorted (arrow indicator on active header), row-selected (`bg.subtle`), row-hover, swipe-to-reveal actions (list, touch only).

**Accessibility** — table uses real `<th scope>`; sortable headers expose `aria-sort`; list rows that navigate are real links, not click-handled divs.

**Content** — empty state names what will appear and why it's empty, not just "No data."

**Spacing & tokens** — numeric columns right-aligned in `type.code`; row padding `space.150` `space.200`.

**Responsive** — table scrolls horizontally below `md`, never stacks columns (breaks row comparison).

**Engineering** — list virtualizes beyond ~100 rows.

**Figma spec** — `Table` and `List` Component Sets with a shared `RowState` sub-component reused by both.

## Related

[Avatar, timeline & empty/loading states](./avatar-timeline-and-empty-loading-states.md) · [Typography tokens](../tokens/typography-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
