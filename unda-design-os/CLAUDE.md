# Unda Design OS — AI Instructions

This is the standing instruction set for any AI agent (including Claude Code) generating or reviewing design/UI work anywhere in the Unda ecosystem. Read this before touching a component, a page, or a token. It governs *design* decisions; for engineering process, tooling, and repo conventions, defer to the root [`CLAUDE.md`](../CLAUDE.md) — the two are complementary, not competing.

Source: *Design System v1.0*, §VIII ("AI Design Rules"). Treat that document, and this Design OS as a whole, as ground truth.

## The rules

1. **Use only the tokens and components defined here — never invent a new color, typeface, spacing value, or shadow.** Check [`design-system/tokens/`](./design-system/tokens/index.md) and [`design-system/components/`](./design-system/components/index.md) before writing a literal value. If what you need isn't there, that's rule 4, not license to improvise.
2. **Never skip a required state.** Every component has a [default state matrix](./design-system/components/index.md#default-state-matrix) (default, hover, focus, keyboard focus, active/pressed, selected, disabled, loading, success, warning, error, empty). If a state isn't visibly implemented, say so explicitly — don't ship it silently incomplete.
3. **Default to the most restrained option whenever a design decision is ambiguous** — fewer colors, fewer type sizes, less motion. See [Design constraints](./creative-direction/design-constraints.md) for the concrete "always avoid" list (gradients, glassmorphism, more than 3–4 type sizes per page, saturated/high-chroma color, bounce/elastic motion).
4. **When a needed pattern doesn't exist in the system, propose extending it rather than improvising a one-off.** State clearly that you're proposing something new, where it should live (`design-system/components/`, `patterns/`, etc.), and why an existing piece doesn't cover the need. See [Governance & versioning](./design-system/rules/governance-and-versioning.md) — no component gets forked for one product.
5. **Never fabricate a division accent color outside the four defined hues** (Royal Blue / Purple / Cyan / Emerald — see [Cross-brand rules](./design-system/rules/cross-brand-rules.md)), and never let a division override anything but its accent token. Typography, spacing, radius, motion, and component structure are shared and non-negotiable across Solutions, Studio, Technologies, and Travel.
6. **Always include the full required-state matrix for any new or modified component**, not just the default state.

## Typeface assignment — do not mix these up

- **General Sans** — marketing/brand surfaces only.
- **Geist** — product interfaces only.
- **Geist Mono** — code, data, timestamps, technical labels only.

See [Typography tokens](./design-system/tokens/typography-tokens.md) and [Typography direction](./creative-direction/typography-direction.md).

## Before proposing or implementing UI, check in this order

1. [`design-system/tokens/`](./design-system/tokens/index.md) — does a token already cover this value?
2. [`design-system/components/`](./design-system/components/index.md) — does a component already cover this need?
3. [`design-system/patterns/`](./design-system/patterns/index.md) — does a page-level assembly already cover this?
4. [`design-system/rules/`](./design-system/rules/index.md) — does a rule constrain how this should be built?
5. Only then: propose a new token, component, or pattern — explicitly, per rule 4 above.

## Cross-division consistency

A user moving from `undasolutions.com` to any division subdomain should feel they've moved to a specialized room in the same building, never a different building. Don't let a "Studio should feel more creative" instinct justify a different grid, type system, or component set — the *register* varies (see [Cross-brand consistency](./creative-direction/cross-brand-consistency.md)), the *system* does not.

## Accessibility is not optional

Every component and pattern must pass the checklist in [Accessibility rules](./design-system/rules/accessibility-rules.md) before it's considered done — WCAG 2.1 AA is a floor, not a stretch goal, and it applies identically across every division.

## Relationship to the rest of this repo

This Design OS (`unda-design-os/`) is reference material for the whole Unda ecosystem, including divisions with no shipped product yet — see [`../DECISIONS.md`](../DECISIONS.md) ADR-009. It does not obligate `apps/web` (or any other app) to consume every documented component before it's actually needed there; `packages/ui`/`packages/design-system` are still extracted from real usage per ADR-002, not authored speculatively. When implementing something in `apps/web`, treat this Design OS as the answer to "what should this look like and behave like," and the root [`CLAUDE.md`](../CLAUDE.md) as the answer to "how do we build and ship it in this monorepo."

If you find a conflict between what's documented here and what an app already does, flag it and propose a reconciliation — don't silently overwrite either side.

---

[Back to Design OS root](./README.md)
