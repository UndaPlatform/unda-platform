# Dark Mode & Light Mode

## Philosophy

Dark mode is an extension of the same design language, not a separate design system. Both themes must communicate the same emotional qualities: calmness, professionalism, clarity, consistency. A user switching themes should never feel like they're using a different product.

## What stays the same across themes

- Layout, grid, spacing, typography scale, component structure, radius, motion.
- Brand recognition — the primary brand color and division accent colors should remain recognizable in both themes (adjusted for contrast, not replaced).

## What changes

- **Neutral palette** — dark mode uses softened dark neutrals, not pure black, for surfaces.
- **Elevation strategy** — dark mode leans on surface brightness increases per layer rather than shadow intensity (shadows barely read on dark backgrounds). See [elevation](./elevation-and-shadows.md).
- **Contrast tuning** — brand/semantic colors typically need a slightly different shade in dark mode to hit the same perceived contrast and WCAG AA minimums.

## Implementation expectation

Every component must support both themes from the start — dark mode should never be an afterthought retrofitted onto light-mode-only components. See [`../engineering/`](../engineering/index.md) (Phase 5) for the CSS-variable/Tailwind implementation approach once written.

## Related

[Color](./color.md) · [Elevation & shadows](./elevation-and-shadows.md) · [Accessibility](./accessibility.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
