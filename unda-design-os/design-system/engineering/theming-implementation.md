# Theming Implementation

Source: *Design System v1.0*, §VII.

## Dark mode

Implemented via a `data-theme` attribute swapping the *semantic* token layer only (`bg.default`, `text.primary`, etc. — see [Dark mode foundations](../foundations/dark-mode.md)). Component code never branches on theme directly — a component that checks `theme === 'dark'` in its own logic is a bug; it should only ever reference semantic tokens that already resolve correctly per theme.

## Division theming

Implemented via a `data-division` attribute remapping `--color-brand-accent` only — nothing else. This is the same enforcement point described in [Cross-brand rules](../rules/cross-brand-rules.md): the attribute has no mechanism to touch typography, spacing, radius, or motion, so a division override cannot accidentally drift from the shared system.

## Related

[Dark mode foundations](../foundations/dark-mode.md) · [Cross-brand rules](../rules/cross-brand-rules.md) · [Color tokens](../tokens/color-tokens.md)

---

[Back to Engineering index](./index.md) · [Back to Design OS root](../../README.md)
