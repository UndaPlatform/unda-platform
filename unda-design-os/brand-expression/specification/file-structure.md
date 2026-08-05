# File Structure

Where produced brand-expression assets should live once they exist. `unda-design-os/` itself is markdown-only documentation — it doesn't store binary assets — so this defines the *intended* structure for when real photography, illustration, and marketing files are produced, not a structure that exists in this repo today.

## Proposed structure

```
brand-assets/                      (shared drive / DAM — not this git repo)
├── logo/                          Master logo files (per Logo system) — vector source, all lockups, all color variations
├── photography/
│   ├── solutions/
│   ├── studio/
│   ├── technologies/
│   └── travel/
├── illustration/
│   ├── product/
│   ├── website/
│   ├── marketing/
│   └── presentation/
├── icons/                         Custom icons only (Lucide itself is a dependency, not stored here)
├── marketing/
│   ├── social/
│   ├── decks/
│   └── signage/
└── print/
    ├── stationery/
    └── merchandise/
```

## Why not in this git repo

Binary design assets (photography, high-res exports, presentation files) don't belong in a git repository built for source code and markdown — they bloat history and don't diff meaningfully. When these assets exist, they belong in a dedicated asset-management tool (a shared drive, a DAM, or a future dedicated assets package) — `unda-design-os` documents the *rules* for producing and naming them, not the files themselves.

## What *does* belong in this repo

Vector source files that are small and genuinely versionable (the logo's SVG/vector source, custom icon SVGs) could reasonably live in a future `packages/design-system/assets/` once that package exists (see [ADR-002](../../../DECISIONS.md)) — not before, and not as a speculative empty folder today.

## Related

[Asset naming conventions](./asset-naming-conventions.md) · [Governance, review & versioning](./governance-review-and-versioning.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
