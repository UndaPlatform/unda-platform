# Select / Dropdown, Date Picker & File Upload

Source: *Design System v1.0*, §V.

**Purpose** — select: one choice from a closed list. Date picker: a single date or range, always typeable as well as calendar-selectable. File upload: drag-and-drop with an equivalent click-to-browse affordance.

**States** — select adds open/closed + option hover; date picker adds range-start/range-end/in-range (10% `brand` fill) and disabled dates (`neutral.300`, not clickable); file upload adds drag-over (`border.focus`, dashed→solid), uploading (determinate progress once size is known, never an indefinite spinner), success, error per-file with retry, invalid-drop (`border.error`).

**Accessibility** — select follows the ARIA listbox pattern (arrow keys, typeahead); date picker grid is fully arrow-key navigable and locale-aware (first-day-of-week, date format); file input stays keyboard/screen-reader operable beneath the styled dropzone overlay.

**Content** — select shows the chosen value, not a generic "Select…" once set; upload zone states the accepted file types and max size up front, not only on error.

**Engineering** — date formatting and week-start are locale-derived, never hardcoded to one region.

**Figma spec** — three separate Component Sets (`Select`, `DatePicker`, `FileUpload`), each with a `state` variant property covering the list above.

## Related

[Input, textarea & search](./input-textarea-and-search.md) · [Checkbox, radio & switch](./checkbox-radio-and-switch.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
