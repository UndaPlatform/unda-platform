# Roadmap

## Current objective: corporate website

Building [undasolutions.com](https://undasolutions.com) and the engineering foundation it stands on. Nothing beyond this is in scope until requested.

### Phases

1. ✅ **Initialize the monorepo** — pnpm workspace, Turborepo config, `.gitignore`.
2. ✅ **Root documentation** — README, ARCHITECTURE, CONTRIBUTING, ROADMAP, BRAND, DECISIONS.
3. ⬜ **Configure tooling** — Biome, strict base `tsconfig.json`, Tailwind v4, CI.
4. ⬜ **Scaffold the web app** — Next.js 16 + React 19 under `apps/web`.
5. ⬜ **Build the corporate website** — pages, sections, content.
6. ⬜ **Extract shared packages** — `packages/ui` and `packages/design-system`, only once patterns repeat across real usage.
7. ⬜ **Prepare for Vercel deployment**.

## Explicitly out of scope for now

Per [CLAUDE.md](./CLAUDE.md), do not build until requested:

- Travel platform (`travel.undasolutions.com`)
- AI / Technologies platform (`technologies.undasolutions.com`)
- Studio site (`studio.undasolutions.com`)
- Docs site (`docs.undasolutions.com`)
- Booking engine
- Authentication
- Dashboard

## Future divisions (not yet planned in detail)

- **Unda Studio** — `studio.undasolutions.com`
- **Unda Technologies** — `technologies.undasolutions.com`
- **Unda Travel** — `travel.undasolutions.com`
- **Docs** — `docs.undasolutions.com`

This roadmap should be updated as phases complete or scope changes.
