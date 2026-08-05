# Card

Source: *Design System v1.0*, §V.

**Purpose** — a container for exactly one idea (a stat, a product, a case study). Never a generic wrapper for unrelated content.

**Anatomy** — optional media region, title, optional supporting text, optional footer action.

**Variants** — static (display only), interactive (whole card is one hit target).

**States** — interactive card: hover (raises to `shadow.md` + 2px `translateY`), focus (ring around the whole card), active/pressed (returns toward flat).

**Accessibility** — an interactive card is a real `<button>` or link, never a `div` with an `onClick` and no role.

**Spacing & tokens** — internal padding `space.300`, `radius.md`, 1px `border.default`, no left-border accent.

**Responsive** — cards reflow in a grid that drops from 3→2→1 columns at `lg`/`md`.

**Figma spec** — `Card` Component Set with `variant` and `state` properties; media region is a nested image-fill frame.

## Related

[Component philosophy: cards](../../creative-direction/component-philosophy.md) · [Elevation tokens](../tokens/radius-elevation-and-icon-tokens.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
