# Governance, Review & Versioning

Extends [Governance & versioning](../../design-system/rules/governance-and-versioning.md) to brand-expression assets specifically — same process, same principles, applied one level up from components/tokens to photography/illustration/marketing/print.

## Governance

Ownership follows [Brand governance](../../brand/governance.md): consistency over novelty, nothing ships without a documented reason. Any new asset *type* (a marketing format not covered in [Marketing Assets](../manual/09-marketing-assets.md), a physical item not covered in [Brand in Practice](../manual/11-brand-in-practice.md)) is proposed and added to this system before being produced — not designed ad hoc and reconciled afterward.

## Review process

1. Draft against the relevant manual section and specification checklist.
2. Run the [QA checklist](./qa-checklist.md).
3. Review against the [three design-review questions](../../design-system/rules/design-review-principles.md): existing tokens/components used, required variants present, holds up against Creative Direction's constraints.
4. Aesthetic preference is discussed last, same as any other review in this system.

## Versioning

This system is versioned alongside the rest of `unda-design-os` — via git history and `../../../DECISIONS.md`, not a separate changelog (see [Design OS versioning](../../README.md#versioning)). A **major** change would be a shift to any locked foundation (color, type, logo) — extremely rare, requires an ADR. A **minor** change adds a new asset type or recipe (a new marketing format, a new motion recipe). A **patch** fixes an inconsistency or error in the spec itself.

## Recommendation for asset-level versioning (once real files exist)

Once binary assets exist in the structure proposed in [File structure](./file-structure.md), track them with straightforward date-based or incrementing revisions in the asset-management tool itself (not the filename — see [Asset naming conventions](./asset-naming-conventions.md)), with the previous approved version retained until the new one is confirmed live everywhere it's used.

## Related

[Governance & versioning (design system)](../../design-system/rules/governance-and-versioning.md) · [Brand governance](../../brand/governance.md) · [QA checklist](./qa-checklist.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
