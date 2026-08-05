# Brand Architecture

## Model: Branded House

Unda Solutions follows a **Branded House** architecture — the parent company is the primary brand, and every division operates under the same identity, visual language, and strategic direction rather than as an independently-branded sub-company. Divisions differentiate through an accent color and their own content focus, not through a separate visual identity.

```
Unda Solutions (parent brand)
├── Unda Studio          — Creative & Design Services
├── Unda Technologies    — Software Engineering, AI & Automation
└── Unda Travel          — Travel Management Services
```

## Naming convention

- **Business divisions:** parent brand + division name (`Unda Studio`, `Unda Technologies`, `Unda Travel`) — never the division name alone.
- **Products:** may carry unique names (e.g. a future SaaS product), but marketing materials should note "by Unda Technologies" where appropriate to keep the association visible.
- **Internal tools:** descriptive names, clarity over cleverness — this matches the monorepo's own folder-naming rule (avoid `helpers/`, `misc/`, vague names).

## Domain structure

| Domain | Purpose |
|---|---|
| `undasolutions.com` | Corporate identity, company overview, divisions, careers, insights, contact |
| `studio.undasolutions.com` | Unda Studio — portfolio, design process, client engagement |
| `technologies.undasolutions.com` | Unda Technologies — capabilities, products, case studies, technical content |
| `travel.undasolutions.com` | Unda Travel — bookings, visa assistance, corporate travel |
| `docs.undasolutions.com` | Documentation (future) |

Potential future subdomains noted in the source manual: `careers.`, `status.`, `developers.`, `support.` — none scoped yet.

## Visual inheritance

Every division inherits from the parent: logo system, typography, grid, spacing, component library, motion principles, accessibility standards, and brand voice. The only thing that varies per division is the **accent color** (see `../design-system/foundations/color.md`) and content focus.

## Governance rule

Any change to business divisions, naming conventions, visual identity, domain structure, or brand relationships should be reviewed against this manual before implementation (see `governance.md`).

---

[Back to Brand index](./index.md) · [Back to Design OS root](../README.md)
