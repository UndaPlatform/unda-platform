# Unda Platform

Monorepo for Unda Solutions' digital products.

## About Unda Solutions

Unda Solutions builds digital products across three divisions:

- **Unda Studio** — Brand identity, product design, UI/UX, graphic design, motion design, photography, video editing.
- **Unda Technologies** — Software engineering, AI, automation, SaaS products.
- **Unda Travel** — Flights, hotels, visa assistance, tour packages, corporate travel.

## Repository

This is a [Turborepo](https://turbo.build/)-managed monorepo using [pnpm](https://pnpm.io/) workspaces.

```
apps/            deployable applications
packages/        shared code (added only once patterns are proven — see DECISIONS.md)
docs/            supplementary documentation
infrastructure/  deployment and infra config
```

Only `apps/corporate` is planned right now. Other divisions (`studio`, `technologies`, `travel`, `docs`) are future applications and are not scaffolded until requested — see [ROADMAP.md](./ROADMAP.md).

## Getting started

```bash
pnpm install
pnpm dev      # run all apps in dev mode
pnpm build    # build all apps
pnpm lint     # lint all apps and packages
```

Never use `npm` or `yarn` in this repository — pnpm only.

## Documentation

| File | Purpose |
|---|---|
| [CLAUDE.md](./CLAUDE.md) | AI operating manual — engineering standards and behavior rules |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Technical architecture and stack |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Engineering workflow and conventions |
| [ROADMAP.md](./ROADMAP.md) | Current phase plan and future scope |
| [BRAND.md](./BRAND.md) | Design and branding rules |
| [DECISIONS.md](./DECISIONS.md) | Architectural decision log |
