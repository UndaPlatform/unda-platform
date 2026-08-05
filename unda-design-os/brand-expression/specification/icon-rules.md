# Icon Rules

Production spec for [Iconography](../manual/05-iconography.md).

## Hard rules

| Property | Value |
|---|---|
| Library | Lucide (no other icon set) |
| Stroke | 1.5px, rounded caps/joins |
| Sizes | `icon.sm` 16px / `icon.md` 20px / `icon.lg` 24px only |
| Default style | Outlined |
| Filled | Active/selected/toggled-on state only |
| Icon-to-label gap | `space.100` (8px) |
| Color | Inherits from context (`text.primary`/`text.secondary`/`brand.primary`/`status.*`) — never a hardcoded hex |

## Custom icon checklist

- [ ] Confirmed no Lucide equivalent exists
- [ ] 1.5px stroke, rounded caps/joins, matches Lucide's bounding-box padding
- [ ] Designed at 24px, verified legible down to 16px
- [ ] Proposed through [Governance & versioning](../../design-system/rules/governance-and-versioning.md) before use in a shipped product

## Accessibility

- [ ] Every icon-only control has `aria-label`
- [ ] Decorative icons are `aria-hidden="true"`
- [ ] Icon meaning is never conveyed by color alone

## Related

[Iconography](../manual/05-iconography.md) · [Icon foundations](../../design-system/foundations/icons.md) · [Accessibility guidance](./accessibility-guidance.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
