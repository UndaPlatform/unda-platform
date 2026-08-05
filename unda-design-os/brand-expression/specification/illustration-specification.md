# Illustration Specification

Production spec for [Illustration System](../manual/04-illustration-system.md).

## Construction

- **Stroke:** 2px (`illustration.stroke`) at a 200–400px working canvas, scaled proportionally otherwise.
- **Corner radius:** matches [interface radius tokens](../../design-system/tokens/radius-elevation-and-icon-tokens.md) — `radius.sm`/`radius.md` depending on element size.
- **Shadow:** `shadow.sm` only, maximum 2 depth layers (`illustration.max-layers`).
- **Color:** neutral base + brand/division accent for emphasis + `status.*` for state only — no color outside the token set.
- **Gradients/texture:** never.

## Canvas & export

| Use | Canvas | Format |
|---|---|---|
| Product (empty states, onboarding) | 240×240px artboard | SVG |
| Website (system diagrams) | 480×480px artboard | SVG |
| Marketing (composed scenes) | Variable, built from multiple 240–480px component illustrations | SVG, flattened to PNG for raster placements |
| Presentation | 480×480px minimum, simplified detail | SVG |

## Naming

See [Asset naming conventions](./asset-naming-conventions.md) — illustration files use the `illustration_` prefix.

## QA before adding a new illustration

- [ ] 2px stroke, no deviation
- [ ] No gradient, no texture, no more than 2 shadow layers
- [ ] Colors are token values only
- [ ] Reads correctly at both its intended size and 50% scale
- [ ] One idea — a second reviewer can state what it communicates in one sentence

## Related

[Illustration System](../manual/04-illustration-system.md) · [Design tokens](./design-tokens.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
