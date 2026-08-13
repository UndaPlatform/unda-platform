# Cross-Brand Rules

Source: *Design System v1.0*, §IX.

## The rule

All four brands consume the same component library and the same base tokens. A division may only override its `color.brand.accent` token — **never** typography, spacing, radius, motion, or component structure. This is enforced by the token architecture, not by guidelines alone: there is no mechanism in the token set for a division to change anything else, so it cannot be done by accident.

## Divisions

| Division | Accent | Register |
|---|---|---|
| Unda Solutions | Royal Blue | Corporate, institutional register |
| Unda Studio | Orange | Most editorial/expressive register |
| Unda Technologies | Cyan | Developer-first, dense-when-useful |
| Unda Travel | Emerald | Most human, image-led register |

## The test

A user moving from undasolutions.com to any division subdomain should feel they've moved to a specialized room in the same building — not a different building. Division subdomains may vary content emphasis and imagery, never the grid, type scale, or component set.

**Rule:** if a proposed division-specific change touches anything other than the accent color token, it is not a division customization — it is a system change, and goes through the process in [Governance & versioning](./governance-and-versioning.md).

## Engineering enforcement

Implemented via a `data-division` attribute remapping `--color-brand-accent` only. See [`../engineering/`](../engineering/index.md) (Phase 6).

## Related

[Cross-brand consistency (creative direction)](../../creative-direction/cross-brand-consistency.md) · [Brand architecture](../../brand/architecture.md) · [Governance & versioning](./governance-and-versioning.md)

---

[Back to Rules index](./index.md) · [Back to Design OS root](../../README.md)
