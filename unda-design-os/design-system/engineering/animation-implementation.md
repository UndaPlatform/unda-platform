# Animation Implementation

Source: *Design System v1.0*, §VII.

## Rule

Animation implementation uses the motion/easing CSS variables exclusively — see [Motion tokens](../tokens/motion-tokens.md) (`motion.instant/fast/base/slow`, `ease.standard/enter/exit`). No component hardcodes a duration or curve as a magic number.

## Applying this with Framer Motion (per root `CLAUDE.md`'s stack)

Framer Motion `transition` objects should read duration/easing from the same token source (a shared constants module or CSS-variable read), not inline literals — so a future change to `motion.base` updates every animated component at once, matching the "one source of truth" principle in [System thinking & consistency](../rules/system-thinking-and-consistency.md).

## Reduced motion

Every duration collapses to 0–1ms under `prefers-reduced-motion: reduce` — see [Motion tokens](../tokens/motion-tokens.md) and [Accessibility rules](../rules/accessibility-rules.md).

## Related

[Motion tokens](../tokens/motion-tokens.md) · [Motion direction](../../creative-direction/motion-direction.md)

---

[Back to Engineering index](./index.md) · [Back to Design OS root](../../README.md)
