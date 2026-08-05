# Input, Textarea & Search

Source: *Design System v1.0*, §V.

**Purpose** — collect structured text. Search adds a leading icon and a live results/no-results panel.

**Anatomy** — visible label above field (never placeholder-as-label), input box, optional helper text, optional inline error with icon.

**Variants** — text, textarea (resizable vertical only), search (debounced ~300ms, leading icon).

**States** — default, hover (border darkens to `neutral.400`), focus (ring + `border.focus`), disabled, read-only (`neutral.50` fill, no border), error (`border.error` + message below via `aria-describedby`), success (subtle check icon, validated fields only), loading (search: no spinner under 300ms to avoid flicker).

**Accessibility** — label `for`/`id` association; error and helper text both referenced via `aria-describedby`; search results announced with `aria-live="polite"` including a result count; arrow keys navigate results, Enter selects, Escape clears.

**Content** — label is a noun phrase; helper text explains format, not repeats the label; error text tells the user what to fix, not what went wrong internally.

**Spacing & tokens** — `radius.sm`, padding `space.100` `space.200`, label-to-field gap `space.100`.

**Responsive** — full-width on mobile, intrinsic width above `md`.

**Figma spec** — `TextField` Component Set with `state`, `hasHelper`, `hasError` properties; Search is a variant with a locked leading-icon slot.

## Related

[Select, date picker & file upload](./select-datepicker-and-fileupload.md) · [Checkbox, radio & switch](./checkbox-radio-and-switch.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
