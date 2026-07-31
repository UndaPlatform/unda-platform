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
  web/              undasolutions.com — the only app scaffolded today
packages/            shared code — created only once a pattern proves reusable (see DECISIONS.md)
docs/                supplementary documentation
infrastructure/      deployment and infra config
```

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
- Only the corporate site is in active development. Studio, Technologies, Travel, and Docs applications are not started.

This document should be updated whenever the architecture changes.
