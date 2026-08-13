# 12. Future Expansion Rules

Extends [Governance & versioning](../../design-system/rules/governance-and-versioning.md) and [Cross-brand rules](../../design-system/rules/cross-brand-rules.md) to the scenarios that will eventually test them: new divisions, products, services, countries, and acquisitions.

## New divisions

A new division gets exactly one new thing: an accent color token, chosen to be perceptually distinct from the four existing hues (258/48/200/155 — see [Color tokens](../../design-system/tokens/color-tokens.md)) at the same lightness/chroma. It inherits everything else — grid, type system, component library, motion, logo construction — unchanged. It does not get its own symbol; see [Division lockups](../../brand/logo-system.md#5-division-lockups).

## New products

A new product within an existing division is a new [pattern](../../design-system/patterns/index.md) composition of existing components, not a new visual identity. If it needs a name (a SaaS product name distinct from the division), it still carries "by Unda [Division]" in its marketing per [Brand architecture's naming convention](../../brand/architecture.md).

## New services

New services within an existing division need no visual system changes at all — they're new content within the existing Layout language and component library, same as any other page.

## New countries

Expanding into a new country/market is a localization exercise, not a rebrand: translate content, adapt date/number formatting ([Engineering: locale-derived formatting](../../design-system/components/select-datepicker-and-fileupload.md)), respect local accessibility/legal requirements — the visual system, logo, and tokens do not change per market.

## Acquisitions

An acquired company is migrated into the Branded House model over a defined transition period, not maintained as a permanently separate brand (that would break [Cross-brand consistency](../../creative-direction/cross-brand-consistency.md)'s "one building, not four buildings" test). During transition, co-branding may temporarily pair the acquired mark with the Unda symbol, but the acquired identity is retired on a committed timeline — it does not become a fifth permanent division-style identity outside this governance process.

## The test for any expansion

Before shipping anything for a new division, product, country, or acquisition, ask the same [three review questions](../../design-system/rules/design-review-principles.md) as any other change: does it use existing tokens and components, does every required state exist, does it hold up against [Creative Direction](../../creative-direction/index.md)'s constraints. Expansion is not an exception to the system — it's the system's most important test of whether it actually scales.

## Related

[Governance & versioning](../../design-system/rules/governance-and-versioning.md) · [Cross-brand rules](../../design-system/rules/cross-brand-rules.md) · [Brand architecture](../../brand/architecture.md)

---

[Back to Manual index](./index.md) · [Back to Design OS root](../../README.md)
