# Roadmap

## Current objective: corporate website

Building [undasolutions.com](https://undasolutions.com) and the engineering foundation it stands on. Nothing beyond this is in scope until requested.

### Phases

1. ✅ **Initialize the monorepo** — pnpm workspace, Turborepo config, `.gitignore`.
2. ✅ **Root documentation** — README, ARCHITECTURE, CONTRIBUTING, ROADMAP, BRAND, DECISIONS.
3. ✅ **Configure tooling** — Biome, strict base `tsconfig.json`, CI (GitHub Actions).
4. ✅ **Scaffold the web app** — Next.js 16 + React 19 + Tailwind v4 under `apps/web`.
5. ✅ **Scaffold placeholder apps** — minimal "coming soon" apps for `studio`, `technologies`, `travel`, `docs`, ahead of the normal build-first order, so each subdomain has a Vercel project to attach to (ADR-007).
6. ✅ **Configure Vercel projects and domains** — all 5 apps have Vercel projects (`unda-solutions1` team), connected to GitHub for auto-deploy, with `undasolutions.com` + `www` + the four subdomains attached and live (ADR-008).
7. ✅ **Build `unda-design-os`** — cross-brand design knowledge base (creative direction, foundations, tokens, components, patterns, rules, engineering, `CLAUDE.md`), built ahead of real product usage as an explicit, requested exception to build-first-abstract-second (ADR-009). Also finalizes the design direction — Royal Blue, General Sans/Geist/Geist Mono, 8pt grid, OKLCH color tokens, full component/pattern/rules/engineering specs — that was blocking phase 8 (ADR-010, ADR-011). All 8 requested phases complete; a handful of supplementary reference folders remain intentional stubs (see `unda-design-os/design-system/index.md`).
8. ✅ **Build the Brand Expression System** — `unda-design-os/brand-expression/` (manual + specification): expression principles, layout language, photography, illustration, iconography, motion, graphic language, data visualization, marketing assets, presentation system, brand-in-practice, and future-expansion rules. An explicit, requested extension of phase 7's scope, including physical-collateral standards not yet in production (ADR-013).
9. ⬜ **Build the corporate website** — pages, sections, content for `apps/web`, now unblocked and drawing on `unda-design-os`.
10. ⬜ **Extract shared packages** — `packages/ui` and `packages/design-system`, only once patterns repeat across real usage in `apps/web` — `unda-design-os` informs these but doesn't replace the need to extract from real code.
11. ⬜ **Ongoing**: every push to `main` now auto-deploys all 5 apps — no separate "prepare for deployment" step remains.

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
