# Toast, Alert, Badge, Tag & Chip

Source: *Design System v1.0*, §V.

**Purpose** — toast: transient system feedback, auto-dismiss, never blocks input. Alert: persistent, page-level status. Badge: a count/status dot on another element. Tag/Chip: a removable or selectable label for filtering and categorization.

**States** — success/warning/error/info via `status.*` tokens exclusively; chip adds selected and removable (with an × affordance).

**Accessibility** — toast/alert announced via `aria-live="polite"` (assertive for errors); alert dismiss button has an `aria-label`; badge count is exposed to assistive tech via `aria-label`, not just a visual number.

**Content** — one sentence, states the outcome not the mechanism ("Project archived" not "POST request succeeded").

**Engineering** — toast auto-dismisses after 4–6s but pauses on hover/focus; never more than one toast stacked without a queue.

**Figma spec** — five Component Sets sharing one `status` variant property so a designer can never pick a color outside the semantic set.

## Related

[Modal, drawer, popover & tooltip](./modal-drawer-popover-and-tooltip.md) · [Color tokens](../tokens/color-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
