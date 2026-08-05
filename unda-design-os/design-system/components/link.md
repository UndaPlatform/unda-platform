# Link

Source: *Design System v1.0*, §V.

**Purpose** — navigate to another page, section, or resource. Never triggers an action.

**Variants** — inline (underlined in body copy), UI/nav (no underline until hover).

**States** — default (`brand.primary`), hover (10% darken), focus (ring), active, visited (documentation surfaces only, via `neutral.600`).

**Accessibility** — descriptive out of context, never "click here"; native `<a>` with a real `href`.

**Engineering** — external links get `rel="noopener"` and a visual external-link icon.

**Figma spec** — a text style layer with a hyperlink property; no separate component needed beyond a text style token.

## Related

[Button](./button.md) · [Color tokens](../tokens/color-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
