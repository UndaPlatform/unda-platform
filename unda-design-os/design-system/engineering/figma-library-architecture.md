# Figma Library Architecture

Source: *Design System v1.0*, §VI. Documented here even though `apps/*` has no Figma consumer yet — this is the design-tool half of the same source of truth engineering implements from.

## Pages

- **Cover & Changelog**
- **Foundations** — one frame per token category, bound to Figma Variables
- **Components** — one Component Set per entry in [`../components/`](../components/index.md), state as a variant property — never duplicated frames per state
- **Patterns** — assembled marketing/product templates, matching [`../patterns/`](../patterns/index.md)
- **Division Overrides** — four small pages, each only remapping the accent color variable (see [Cross-brand rules](../rules/cross-brand-rules.md))

## Naming

`Component/Variant/Size` for layers (e.g. `Button/Primary/md`); variant properties lowercase-hyphenated (`state=hover`). All auto-layout with token-bound gap and padding — no fixed-pixel frames.

## Component properties

Every Component Set exposes `variant`, `size`, and `state` as variant properties (never as free-text layer names); swappable content (icons, avatars) uses instance-swap properties; boolean properties gate optional sub-parts (e.g. `hasIcon`, `hasError`).

## Documentation structure

Each component page carries a description frame (purpose, do/don't examples) above the Component Set itself, generated from [`../components/`](../components/index.md) so the two never drift.

## Versioning

The library publishes with release notes matching this document set's semantic version (see [Governance & versioning](../rules/governance-and-versioning.md)); breaking variant renames ship as a deprecated-but-present old variant for one minor cycle before removal.

## Related

[Components](../components/index.md) · [Governance & versioning](../rules/governance-and-versioning.md)

---

[Back to Engineering index](./index.md) · [Back to Design OS root](../../README.md)
