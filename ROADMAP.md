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
7. 🔶 **Build `unda-design-os`** — cross-brand design knowledge base (foundations, tokens, components, patterns, rules, engineering, `CLAUDE.md`), built ahead of real product usage as an explicit, requested exception to build-first-abstract-second (ADR-009). Also finalizes the design direction — Royal Blue, General Sans/Geist/Geist Mono, Lucide icons, 8pt grid — that was blocking phase 8 (ADR-010). In progress, phase by phase.
8. ⬜ **Build the corporate website** — pages, sections, content for `apps/web`, now unblocked and drawing on `unda-design-os`.
9. ⬜ **Extract shared packages** — `packages/ui` and `packages/design-system`, only once patterns repeat across real usage in `apps/web` — `unda-design-os` informs these but doesn't replace the need to extract from real code.
10. ⬜ **Ongoing**: every push to `main` now auto-deploys all 5 apps — no separate "prepare for deployment" step remains.

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
