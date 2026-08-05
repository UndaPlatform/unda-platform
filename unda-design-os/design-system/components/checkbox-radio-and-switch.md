# Checkbox, Radio & Switch

Source: *Design System v1.0*, §V.

**Purpose** — checkbox: independent multi-select. Radio: mutually exclusive choice from a visible list. Switch: an immediate on/off setting with no separate submit step.

**States** — unchecked, checked, indeterminate (checkbox only), hover, keyboard focus (ring around the full control, not just the visible box), disabled (any check-state), error (checkbox/radio group with a required-field violation).

**Accessibility** — minimum 44×44px hit area regardless of the ~16–20px visible control; switch toggles on Space; radio group navigates with arrow keys and only one stop in the Tab order; group label uses `<fieldset>`/`<legend>`.

**Content** — label describes the resulting state ("Auto-renew" not "Enable auto-renew toggle").

**Figma spec** — `Checkbox`, `Radio`, `Switch` as three Component Sets, each with a `checked`/`state` property; switch thumb position bound to a Variable for the on/off transform.

## Related

[Input, textarea & search](./input-textarea-and-search.md) · [Select, date picker & file upload](./select-datepicker-and-fileupload.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
