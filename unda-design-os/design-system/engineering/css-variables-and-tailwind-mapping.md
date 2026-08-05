# CSS Variables & Tailwind Mapping

Source: *Design System v1.0*, §VII, adapted to this monorepo's actual stack (Next.js 16, Tailwind CSS v4, TypeScript — per root `CLAUDE.md`).

## 1:1 token naming

CSS custom properties mirror token names exactly: `--color-text-primary`, `--space-300`, `--radius-md`, `--motion-base`. See [Tokens](../tokens/index.md) for the full token set these map to.

## Why Tailwind v4 fits this token architecture directly

Tailwind v4's CSS-first `@theme` configuration is itself a CSS-variable layer — this design system's token model (name → CSS variable → consumed value) is the same mechanism Tailwind v4 already uses, not a competing one. In practice: define this system's tokens as `@theme` variables once, and both hand-written CSS and Tailwind utility classes resolve to the same source of truth. No component should hardcode a hex/px/duration value that already has a token — reach for the token/utility class instead.

## Responsive implementation

Implemented via a shared media-query mixin per breakpoint token (`sm`/`md`/`lg`/`xl`/`2xl` from [Spacing, grid & border tokens](../tokens/spacing-grid-and-border-tokens.md)) — never a magic-number breakpoint typed inline in a component.

## Related

[Component architecture & state](./component-architecture-and-state.md) · [Theming implementation](./theming-implementation.md)

---

[Back to Engineering index](./index.md) · [Back to Design OS root](../../README.md)
