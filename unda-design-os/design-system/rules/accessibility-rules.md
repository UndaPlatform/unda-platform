# Accessibility Rules

Source: *Design System v1.0*, §IV. Concrete, testable rules implementing [`../foundations/accessibility.md`](../foundations/accessibility.md).

## Conformance target

WCAG 2.1 Level AA across every product, audited before every major release. Accessibility is a floor, not a feature request.

## Keyboard

Every interactive element is reachable via Tab in visual reading order, operable via Enter/Space, and dismissible via Escape where applicable. Custom widgets (tabs, menus, date pickers) follow the matching WAI-ARIA Authoring Practices pattern exactly — no invented keyboard behavior.

## Focus

A 2px `border.focus` ring with 2px offset is always visible on keyboard focus (`:focus-visible`, never suppressed for mouse users); focus is trapped inside modals/drawers while open and restored to the trigger on close; focus never silently jumps without a user action causing it.

## Screen readers

Every icon-only control has an `aria-label`; form fields associate labels via `for`/`id` and errors via `aria-describedby` + `aria-invalid`; live regions (`aria-live="polite"`, `"assertive"` for errors) announce toasts, search results, and async status changes.

## Color independence

Status is never conveyed by color alone — every semantic color pairs with an icon, label, or underline (links in body copy are always underlined, not just colored).

## Touch targets

Minimum 44×44px hit area on every interactive control regardless of visible size (checkboxes, icon buttons).

## Testing checklist per component, before merge

- [ ] Labeled
- [ ] Keyboard-operable end to end
- [ ] Visible focus
- [ ] Correct role/state exposed to assistive tech
- [ ] Passes automated contrast + axe scan
- [ ] Verified once with a screen reader (VoiceOver or NVDA)
- [ ] Respects reduced motion

This checklist applies to every component in [`../components/`](../components/index.md) and every pattern in [`../patterns/`](../patterns/index.md) before it ships.

## Related

[Accessibility foundations](../foundations/accessibility.md) · [Motion tokens](../tokens/motion-tokens.md) (reduced-motion behavior) · [Color tokens](../tokens/color-tokens.md) (contrast conformance)

---

[Back to Rules index](./index.md) · [Back to Design OS root](../../README.md)
