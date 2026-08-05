# Governance & Versioning

Source: *Design System v1.0*, §I.

## Versioning

The system is versioned with semantic versioning (`major.minor.patch`).

- **Major** — a breaking token or API change requiring migration.
- **Minor** — adds new components or tokens without breaking existing ones.
- **Patch** — fixes defects.

## Change process

Changes are proposed against this document, reviewed by design and engineering together, and only merged once every existing consumer's migration path is defined. **No one-off product may fork a component** — a genuinely new need becomes a proposal to extend the system, following the same review process as any other change.

## Future expansion

As Unda adds divisions or products, new work extends this system's tokens and components rather than starting a parallel one. Longevity comes from one system slowly growing, never from parallel systems being reconciled later.

**Rule:** a new division gets a new accent-color token (see [Cross-brand rules](./cross-brand-rules.md)), never a new grid, type system, or component fork.

## Related

[System thinking & consistency](./system-thinking-and-consistency.md) · [Cross-brand rules](./cross-brand-rules.md)

---

[Back to Rules index](./index.md) · [Back to Design OS root](../../README.md)
