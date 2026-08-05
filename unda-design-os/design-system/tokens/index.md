# Tokens

The named, implementable token layer under Foundations — what actually gets consumed in Figma Variables, Tailwind config, and CSS variables. Source: *Design System v1.0*, §II–III.

**Status:** Complete.

## Contents

- [Typography tokens](./typography-tokens.md) — families, scale, responsive behavior, line length
- [Spacing, grid & border tokens](./spacing-grid-and-border-tokens.md) — space scale, grid, breakpoints, border width, z-index
- [Color tokens](./color-tokens.md) — OKLCH brand/division/neutral/semantic values, contrast conformance, dark mode, opacity
- [Radius, elevation & icon tokens](./radius-elevation-and-icon-tokens.md) — shadow, radius, icon size scale
- [Motion tokens](./motion-tokens.md) — durations, easing curves, choreography rules, reduced motion

## Engineering note

CSS variables mirror token names 1:1 (`--color-text-primary`, `--space-300`, `--radius-md`, `--motion-base`). Components must reference tokens, never raw hex/px/duration values. See [`../engineering/`](../engineering/index.md) (Phase 5) once written.

## Related

[Foundations](../foundations/index.md) (the philosophy these tokens implement) · [Components](../components/index.md) (Phase 3 — consumes these tokens)

---

[Back to Design System index](../index.md) · [Back to Design OS root](../../README.md)
