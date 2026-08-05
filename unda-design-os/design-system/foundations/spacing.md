# Spacing

> Concrete pixel values live in [`../tokens/spacing-tokens.md`](../tokens/spacing-tokens.md) (Phase 2) — this file defines the *system*.

## Philosophy

Space is an active design element, not empty space. Whitespace organizes information, guides attention, and improves comprehension — confidence comes from restraint and generous spacing, not from filling every available pixel.

## Base unit

An **8-point grid**: every spacing value is a multiple of 8px, with limited use of 4px increments where finer control is genuinely needed (e.g. icon-to-label gaps). This single rule is what keeps spacing predictable across a team instead of everyone picking their own numbers.

## Scale (semantic, not raw pixels)

Design discussions and code should reference semantic token names (`space.4`, `space.8`, etc.), not raw pixel values — this is what makes a future global spacing adjustment possible without hunting through every file. See Tokens for the actual `space.0` → `space.10` scale.

## Categories

1. **Internal spacing** — padding inside components (buttons, cards, inputs, modals).
2. **External spacing** — margins between components (cards, sections, content blocks).
3. **Component gaps** — spacing between related elements within a component (icon + label, form fields).
4. **Section spacing** — large vertical spacing separating major page sections, used instead of borders to create separation.

## Vertical & horizontal rhythm

Vertical rhythm comes from consistent spacing between text and interface elements (heading → paragraph, section → section). Horizontal rhythm comes from consistent grid gutters, card spacing, and button-group spacing. Both should feel predictable enough that a user could guess the next gap correctly.

## Density

The brand favors **comfortable density** — spacious, calm, easy to scan. Avoid both extremes: overly compact layouts *and* excessive whitespace that disconnects clearly-related content.

## Responsive behavior

Desktop gets the most generous spacing; tablet compresses moderately while preserving rhythm; mobile compresses further but stays touch-friendly for interactive elements. Spacing should compress *proportionally*, never randomly.

## Related

[Spacing tokens (Phase 2)](../tokens/spacing-tokens.md) · [Grid & breakpoints](./grid-and-breakpoints.md) · [Radius & borders](./radius-and-borders.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
