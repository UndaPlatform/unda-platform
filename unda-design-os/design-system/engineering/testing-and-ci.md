# Testing & CI

Source: *Design System v1.0*, §VII.

## Per-component requirements before merge

- A visual regression snapshot per state (see the [default state matrix](../components/index.md#default-state-matrix)).
- An automated accessibility scan (axe) in CI.
- Interaction tests that cover keyboard operation, not only click.

## Accessibility checklist

Duplicated nowhere else — see [Accessibility rules](../rules/accessibility-rules.md) for the full per-component checklist (labeled, keyboard-operable, visible focus, correct role/aria, meets contrast, respects reduced motion) that these CI checks enforce mechanically.

## Related

[Accessibility rules](../rules/accessibility-rules.md) · [Component architecture & state](./component-architecture-and-state.md)

---

[Back to Engineering index](./index.md) · [Back to Design OS root](../../README.md)
