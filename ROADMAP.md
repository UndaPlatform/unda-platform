# Roadmap

## Current objective: corporate website

Building [undasolutions.com](https://undasolutions.com) and the engineering foundation it stands on. Nothing beyond this is in scope until requested.

### Phases

1. ✅ **Initialize the monorepo** — pnpm workspace, Turborepo config, `.gitignore`.
2. ✅ **Root documentation** — README, ARCHITECTURE, CONTRIBUTING, ROADMAP, BRAND, DECISIONS.
3. ✅ **Configure tooling** — Biome, strict base `tsconfig.json`, CI (GitHub Actions).
4. ✅ **Scaffold the web app** — Next.js 16 + React 19 + Tailwind v4 under `apps/web`.
5. ✅ **Scaffold placeholder apps** — minimal "coming soon" apps for `studio`, `technologies`, `travel`, `docs`, ahead of the normal build-first order, so each subdomain has a Vercel project to attach to (ADR-007).
6. ⬜ **Configure Vercel projects and domains** — `undasolutions.com` plus the four subdomains, on a new Vercel account.
7. ⬜ **Build the corporate website** — pages, sections, content for `apps/web`.
8. ⬜ **Extract shared packages** — `packages/ui` and `packages/design-system`, only once patterns repeat across real usage.
9. ⬜ **Prepare for Vercel deployment** of `apps/web`.

## Explicitly out of scope for now

Per [CLAUDE.md](./CLAUDE.md), do not build **real content or features** for these until requested — placeholder apps exist only to hold a domain:

- Travel platform (`travel.undasolutions.com`)
- AI / Technologies platform (`technologies.undasolutions.com`)
- Studio site (`studio.undasolutions.com`)
- Docs site (`docs.undasolutions.com`)
- Booking engine
- Authentication
- Dashboard

This roadmap should be updated as phases complete or scope changes.
