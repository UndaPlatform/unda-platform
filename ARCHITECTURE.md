# Architecture

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 |
| Language | TypeScript (strict) |
| UI | React 19, Tailwind CSS v4, shadcn/ui |
| Icons | Lucide |
| Animation | Framer Motion |
| Package manager | pnpm |
| Monorepo orchestration | Turborepo |
| Formatting & linting | Biome |
| Hosting | Vercel |
| DNS | Cloudflare |

## Monorepo layout

```
apps/
  web/              undasolutions.com — corporate site, in active development
  studio/           studio.undasolutions.com — placeholder ("coming soon"), no real content yet
  technologies/     technologies.undasolutions.com — placeholder ("coming soon"), no real content yet
  travel/           travel.undasolutions.com — placeholder ("coming soon"), no real content yet
  docs/             docs.undasolutions.com — placeholder ("coming soon"), no real content yet
packages/            shared code — created only once a pattern proves reusable (see DECISIONS.md)
docs/                supplementary documentation
infrastructure/      deployment and infra config
unda-design-os/      cross-brand design knowledge base — foundations, tokens, components,
                     patterns, rules, and engineering guidance for the whole Unda ecosystem
                     (ADR-009, ADR-010). Reference material, not application code — apps
                     draw from it, they don't have to consume it wholesale.
```

The four placeholder apps were scaffolded ahead of the roadmap's normal build-first order specifically to give Vercel domains something to attach to (ADR-007). Each mirrors `apps/web`'s tooling setup (extends the root `tsconfig.base.json` and `biome.json`, pinned to the same Next.js/React/TypeScript versions) but has no business logic — just a single "coming soon" page.

`pnpm-workspace.yaml` declares `apps/*` and `packages/*` as workspace globs. `turbo.json` defines the task pipeline (`build`, `dev`, `lint`, `check-types`) with dependency-aware caching across the workspace.

## Principles

Every feature in this repo should satisfy:

- **Single Responsibility** — one module, one reason to change.
- **Separation of Concerns** — business logic stays out of UI components.
- **Low Coupling / High Cohesion** — apps and packages depend on clear, narrow interfaces.
- **Reusability** — but only extracted once duplication is real, not anticipated (see [DECISIONS.md](./DECISIONS.md)).
- **Testability** and **Scalability** — code should be easy to verify and to grow without rewrites.

## Current state

- Monorepo tooling: initialized (pnpm + Turborepo).
- `packages/` is intentionally empty. Shared UI/design-system packages are extracted only after real reuse emerges from `apps/web` — this repo follows a "build first, abstract second" approach.
- Only the corporate site (`apps/web`) is in active development. Studio, Technologies, Travel, and Docs are scaffolded placeholders with no real content — ahead of schedule for Vercel domain setup (ADR-007), not a signal to start building them out.
- `unda-design-os/` is a deliberate, explicitly-requested exception to build-first-abstract-second (ADR-009) — a cross-brand design knowledge base authored ahead of real product usage, at the user's request.

This document should be updated whenever the architecture changes.
