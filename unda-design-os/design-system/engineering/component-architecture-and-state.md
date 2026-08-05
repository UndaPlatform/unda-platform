# Component Architecture & State

Source: *Design System v1.0*, §VII.

## Component API

Every component exposes `variant`/`size`/`state` (and `loading`/`disabled` where applicable) as explicit props — never a free-form `className` override to reach a variant that should be a prop. State is driven by real DOM state (`:disabled`, `aria-invalid`) wherever a native equivalent exists, rather than a purely visual/CSS-only imitation.

## State management

Controlled components accept `value` + `onChange`. Uncontrolled variants are the exception, and must be documented per component — not the default assumption.

## Applying this in `apps/web` (React 19 / Next.js 16 / TypeScript)

- Favor Server Components per root `CLAUDE.md`; interactive components documented here (Button, Input, Select, Modal, etc.) are Client Components by necessity — mark them explicitly, don't make a whole tree client-side to reach one.
- Strict TypeScript: `variant`/`size`/`state` are union-type props, not `string`, so an invalid value is a compile error, not a runtime one.
- No `any` — a component consuming a token (e.g. `space.300`) should get that from a typed token map, not a raw string.

## Related

[Figma library architecture](./figma-library-architecture.md) · [CSS variables & Tailwind mapping](./css-variables-and-tailwind-mapping.md)

---

[Back to Engineering index](./index.md) · [Back to Design OS root](../../README.md)
