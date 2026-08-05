# Motion Tokens (Brand Expression)

Named recipes built entirely on the core [Motion tokens](../../design-system/tokens/motion-tokens.md) — no new duration or easing curve is introduced here. See [Motion Language](../manual/06-motion-language.md) for the reasoning behind each.

| Recipe | Properties | Duration | Easing |
|---|---|---|---|
| `recipe.page-transition` | opacity + translateY(8px) | `motion.slow` (240ms) | `ease.enter` |
| `recipe.hover` | opacity or translate (a few px) | `motion.fast` (120ms) | `ease.standard` |
| `recipe.micro-state-flip` | fill/color | `motion.instant`–`motion.fast` | `ease.standard` |
| `recipe.modal-enter` | opacity + scrim | `motion.slow` (240ms) | `ease.enter` |
| `recipe.modal-exit` | opacity + scrim | `motion.fast` (120ms) | `ease.exit` |
| `recipe.logo-reveal` | arc stroke draw-in | `motion.slow` (240ms) | `ease.enter` |
| `recipe.scroll-reveal` | opacity + translateY(8px), once | `motion.base` (180ms) | `ease.enter` |

## Rules

- Every recipe above is a *combination* of existing tokens, never a bespoke value — if a new moment needs motion, compose it from `motion.*`/`ease.*`, propose a new named recipe here, don't invent a new duration.
- `prefers-reduced-motion: reduce` collapses every recipe's duration to 0–1ms, per [Motion tokens](../../design-system/tokens/motion-tokens.md) and [Accessibility guidance](./accessibility-guidance.md).
- `recipe.logo-reveal` is capped at one play per session/load — never looping (see [Motion Language: logo animation](../manual/06-motion-language.md)).

## Related

[Motion tokens (core)](../../design-system/tokens/motion-tokens.md) · [Motion Language](../manual/06-motion-language.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
