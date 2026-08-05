# Text Button, Icon Button & Button Group

Source: *Design System v1.0*, §V.

**Purpose** — text button: lower-emphasis inline action. Icon button: single-glyph action with no visible label. Button group: 2–4 mutually exclusive or sequential actions as one joined control.

**Anatomy** — text button: label only, underline on hover. Icon button: circular hit area + centered glyph. Button group: N buttons sharing one border, radius only on outer corners.

**Sizes** — match [Button](./button.md)'s sm/md/lg.

**States** — icon button hover uses a `neutral.100` circular fill (never a border); button group's active segment uses `bg.subtle` + `text.primary`, inactive segments use `text.secondary`.

**Accessibility** — icon button requires `aria-label` and shows the same text as a tooltip on hover/focus; button group uses `role="group"` with `aria-pressed` per segment.

**Content** — icon button label is the action ("Delete", not "Icon"); button group segment labels are 1 word.

**Engineering** — button group shares a single 1px `border.default` between adjacent items via negative margin, not doubled borders.

**Figma spec** — `IconButton` and `ButtonGroup` as separate Component Sets; icon button takes a swappable icon instance property.

## Related

[Button](./button.md) · [Icons tokens](../tokens/radius-elevation-and-icon-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
