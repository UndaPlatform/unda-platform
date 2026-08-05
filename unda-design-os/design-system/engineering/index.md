# Engineering

React, Next.js, Tailwind CSS v4, TypeScript, and design-token implementation guidance. Source: *Design System v1.0*, §VI–VII, adapted to this monorepo's actual stack (root `CLAUDE.md`).

**Status:** Complete.

## Contents

- [Figma library architecture](./figma-library-architecture.md) — pages, naming, component properties, versioning
- [Component architecture & state](./component-architecture-and-state.md) — props over `className`, controlled vs. uncontrolled, React/Next.js/TypeScript application
- [CSS variables & Tailwind mapping](./css-variables-and-tailwind-mapping.md) — 1:1 token-to-variable naming, why Tailwind v4's `@theme` fits directly, responsive implementation
- [Theming implementation](./theming-implementation.md) — `data-theme` for dark mode, `data-division` for brand accent
- [Animation implementation](./animation-implementation.md) — motion tokens only, Framer Motion application, reduced motion
- [Testing & CI](./testing-and-ci.md) — visual regression, axe scans, keyboard interaction tests

## Related

[Tokens](../tokens/index.md) (what all of this consumes) · [Components](../components/index.md) · [Rules](../rules/index.md)

---

[Back to Design System index](../index.md) · [Back to Design OS root](../../README.md)
