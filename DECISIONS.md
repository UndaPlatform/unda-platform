# Architectural Decision Log

Format: each entry records context, the decision, and consequences. Entries are never edited after the fact — superseded decisions get a new entry that references the old one.

---

## ADR-001: pnpm + Turborepo for monorepo tooling

**Date:** 2026-07-31

**Context:** The platform needs to host multiple future applications (corporate, studio, technologies, travel, docs) sharing common tooling and, eventually, common packages.

**Decision:** Use pnpm workspaces for package management and Turborepo for task orchestration/caching, per the stack defined in CLAUDE.md.

**Consequences:** All apps and packages live under `apps/*` and `packages/*`. All scripts run through `turbo run <task>`. npm and yarn are disallowed to avoid lockfile drift.

---

## ADR-002: Build first, abstract second — no premature `packages/ui` or `packages/design-system`

**Date:** 2026-07-31

**Context:** The monorepo structure anticipates shared packages (`packages/ui`, `packages/design-system`), but no UI exists yet. Creating these packages before any real component exists would mean guessing at abstractions instead of discovering them from actual usage.

**Decision:** Defer creating `packages/ui` and `packages/design-system` until the corporate app is built out and reusable patterns have proven themselves through real duplication. Build the corporate website directly first; extract shared code only when a second consumer needs it.

**Consequences:** `packages/` remains empty through the corporate app build phase. When extraction happens, it should be recorded as a new ADR describing what was extracted and why.

---

## ADR-003: Root documentation set

**Date:** 2026-07-31

**Context:** CLAUDE.md defines engineering standards but not company-facing docs, contribution workflow, roadmap, or brand rules.

**Decision:** Add README.md, ARCHITECTURE.md, CONTRIBUTING.md, ROADMAP.md, BRAND.md, and this file (DECISIONS.md) at the repo root, to be kept up to date as the project evolves.

**Consequences:** Every phase of work should end with an update to the relevant doc(s) — architecture changes go in ARCHITECTURE.md, scope changes in ROADMAP.md, and any non-obvious structural choice gets a new ADR here.

---

## ADR-004: App directory named `web`, not `corporate`

**Date:** 2026-07-31

**Context:** CLAUDE.md originally specified `apps/corporate` for the corporate website. The user opted for `apps/web` instead.

**Decision:** The application directory is `apps/web`. "Corporate website" remains the name of the *product/business concept* (what the site is for), but the codebase directory is `web` — a more generic, durable name that doesn't need to change if the site's purpose is later described differently.

**Consequences:** All references to `apps/corporate` across CLAUDE.md, README.md, ARCHITECTURE.md, and ROADMAP.md were updated to `apps/web`. Any future doc or code referencing the app directory should use `web`, not `corporate`.

---

## ADR-005: Next.js 16 instead of Next.js 15

**Date:** 2026-07-31

**Context:** CLAUDE.md originally specified Next.js 15. Running `create-next-app@latest` when scaffolding `apps/web` installed Next.js 16.2.12 (the current latest major) with React 19.2.4, since Next.js 15 is no longer what `@latest` resolves to.

**Decision:** Use Next.js 16 rather than force-pinning to 15. CLAUDE.md's Technology Stack section and other docs referencing "Next.js 15" were updated to "Next.js 16."

**Consequences:** The app is built against the current framework major rather than a version that's already behind. Any Next.js 15-specific guidance or assumptions elsewhere should be re-checked against Next.js 16 behavior before being relied on.

---

## ADR-006: TypeScript pinned to 6.0.3, not 7.x

**Date:** 2026-07-31

**Context:** `pnpm add typescript` resolved to 7.0.2 (the new native/Go-based compiler). `next build` failed against it: "TypeScript 7.0.2 does not provide the compiler API required by Next.js." Next.js offered two fixes — enable `experimental.useTypeScriptCli` in `next.config.ts` to shell out to the `tsc` CLI instead of using the API, or use TypeScript 6.

**Decision:** Pin `typescript` to `^6.0.3` across the whole workspace (root and `apps/web`). Do not enable `experimental.useTypeScriptCli`. Stability and long-term maintainability of the foundation take priority over adopting the newest TypeScript major before the ecosystem (Next.js included) has caught up to its new compiler API.

**Consequences:** The workspace type-checks and builds cleanly on the standard, fully-supported TypeScript 6 compiler API. Revisit this once Next.js officially supports TypeScript 7's compiler API without an experimental flag.

---

## ADR-009: `unda-design-os` — an explicit, requested override of "build first, abstract second"

**Date:** 2026-08-05

**Context:** ADR-002 established that `packages/ui`/`packages/design-system` would be extracted only after real reuse emerged from actual usage in `apps/web`. The user supplied three external documents (Brand Foundation Manual, Creative Direction, Design System v1.0) and requested a full enterprise-grade "Design OS" — foundations, tokens, 50+ documented components with per-state guidance, page patterns, and product-specific documentation for all four Unda divisions (Solutions, Technologies, Studio, Travel) — before any of those products have real UI built. This is the premature abstraction ADR-002 was written to avoid. The user was told this directly and asked to choose between scoping down to `apps/web` only, deferring entirely, or proceeding with the full multi-division scope as an explicit override. They chose to proceed with the full scope.

**Decision:** Build `unda-design-os/` as a standalone top-level documentation project (sibling to `apps/`, `packages/`, `docs/`, `infrastructure/`) containing brand, creative-direction, and design-system knowledge for the entire Unda ecosystem — including divisions with no real product yet (Studio, Technologies, Travel). This is a one-time, explicitly authorized exception to build-first-abstract-second, scoped to this documentation effort only. It does **not** change the underlying rule for `packages/ui`/`packages/design-system` inside the app codebase — those remain extracted from real usage, not authored speculatively. `unda-design-os` is reference material an app *can* draw from; it is not itself application code, and populating it does not obligate any app to consume it before it's actually useful to do so.

**Consequences:** A large volume of documentation will exist for components, patterns, and products that don't exist in code yet. This is a known, accepted trade-off. Built iteratively, phase by phase (Foundations → Tokens → Components → Patterns → Rules → Engineering → CLAUDE.md → README), pausing for review between phases rather than generated in one pass.

---

## ADR-010: Brand Foundation Manual adopted as the final design direction

**Date:** 2026-08-05

**Context:** CLAUDE.md's build-out of `apps/web` had been paused because the user still needed to "come up with the design system and website inspiration" (per the "coming soon" placeholder request). The attached Brand Foundation Manual makes specific, concrete design decisions: Royal Blue as the primary brand color, division accent colors (Purple/Cyan/Emerald for Studio/Technologies/Travel), General Sans for marketing/display typography, Geist for UI/product typography, Geist Mono for technical content, Lucide as the icon library, and an 8-point spacing grid with a matching border-radius scale.

**Decision:** Adopt these choices as final rather than draft/reference-only. This resolves the earlier "design system not yet chosen" blocker. Future design work on `apps/web` (and any other Unda product) should use these tokens rather than re-opening the choice of color/typeface/icon library.

**Consequences:** `unda-design-os/foundations/` becomes the authoritative source for these values. `BRAND.md` at the repo root should be updated to stop saying "not yet finalized" and instead point to `unda-design-os` for the concrete tokens. Once `apps/web`'s real content is built, it should consume these tokens rather than inventing new ones.

---

## ADR-007: Scaffold placeholder apps for all divisions ahead of the normal build order

**Date:** 2026-07-31

**Context:** CLAUDE.md's default rule is "never create future applications until requested," and the roadmap's original order was to fully build `apps/web` before touching Studio/Technologies/Travel/Docs. The user explicitly asked, before starting on website design/content, to configure Vercel for `undasolutions.com` and its four subdomains. Vercel domains attach to a project, and a project needs a deployable app — there was nothing to attach `studio.undasolutions.com` etc. to. The user was asked whether to configure Vercel for `apps/web` only (deferring the rest) or scaffold placeholders for all four subdomains now, and chose the latter.

**Decision:** Scaffold minimal "coming soon" Next.js apps for `studio`, `technologies`, `travel`, and `docs` now — each wired into the shared tooling (root `tsconfig.base.json`, root `biome.json` via `extends` + `root: false`, same Next.js 16 / React 19 / TypeScript 6.0.3 / Tailwind v4 versions as `apps/web`) but with no real content, features, or business logic beyond a single placeholder page. This is an explicit, requested exception to "build first, abstract second" — it does not change the rule for any future 6th app.

**Consequences:** All five apps in `apps/*` build, lint, and type-check clean as of this ADR. `studio`/`technologies`/`travel`/`docs` must not receive real content, sections, or features until separately requested — CLAUDE.md's "Current Project Goal" and "Applications" sections were updated to state this explicitly, so a future session doesn't mistake their existence for a green light to build them out.

---

## ADR-008: Vercel projects, GitHub integration, and domains for all 5 apps

**Date:** 2026-07-31

**Context:** Following ADR-007, the user wanted `undasolutions.com` and its four subdomains fully wired up on a new Vercel account/team (`unda-solutions1`) before starting on website content, so the deployment path exists ahead of time. This required: creating one Vercel project per app, setting each project's Root Directory (the Vercel CLI has no direct command for this — done via `PATCH /v9/projects/{id}` with `rootDirectory`/`framework`), authorizing the Vercel GitHub App on the `UndaPlatform` org (scoped to `unda-platform` only, not all repos — a manual step only the user could complete, done via GitHub's App-install redirect from a project's Settings → Git → Connect Git Repository, not GitHub Marketplace search), attaching all 6 domains (`undasolutions.com`, `www.undasolutions.com`, plus 4 subdomains) via `vercel domains add`, and setting `www` to 308-redirect to the apex.

**Decision:** DNS stays on Cloudflare (nameservers unchanged) with individual `A` records → `76.76.21.21` for each hostname, all set to **DNS only** (grey cloud) rather than proxied — Vercel needs the direct connection for routing/SSL. The existing `undasolutions.com` A record and the `www` CNAME (previously a Namecheap parking page) were edited in place rather than duplicated. Each Vercel project's Root Directory points at its `apps/<name>` folder so Git-triggered builds get the correct app while still checking out the full repo (needed since each app's `tsconfig.json`/`biome.json` extend root-level config via relative paths).

**Consequences:** All 5 projects are connected to GitHub — pushes to `main` auto-deploy. All 6 domains (apex + www + 4 subdomains) resolve and serve `200` in production. A manual empty commit (`e606a60`) was pushed specifically to trigger the first Git-based deployment and validate the whole pipeline (monorepo install, per-project Root Directory, shared config resolution) before starting on real content — this confirmed the setup works end-to-end. Any future app added to `apps/*` should follow the same pattern: create the Vercel project, set `rootDirectory`/`framework` via the API, connect Git (already authorized for this repo), then `vercel domains add`.

---

## ADR-011: `unda-design-os` built from the actual source PDFs, once located on disk

**Date:** 2026-08-05

**Context:** ADR-009/010 were based on a Brand Foundation Manual excerpt pasted directly into chat, which described design decisions (Royal Blue, General Sans/Geist/Geist Mono, Lucide, 8pt grid) without literal implementable values — the manual itself noted the actual hex/RGB/HSL palette was meant for a section not included in what was pasted. `design-system/foundations/` was therefore deliberately written at the philosophy/structure level only, with literal values explicitly deferred to a later Tokens phase. While starting that Tokens phase, the actual source PDFs referenced by the user's original prompt — `Creative Direction v1.0` (8 pages) and `Design System v1.0` (18 pages, with a companion interactive version) — were found in `~/Downloads` and read in full. These contain the real literal values (OKLCH color tokens, exact type/spacing/motion scales, full ~20-component library with anatomy/states/accessibility/engineering notes per component, Figma library architecture, engineering handoff conventions, and an explicit "AI Design Rules" section) that the earlier phases had to work around.

**Decision:** Treat `Creative Direction v1.0` and `Design System v1.0` as the authoritative source for all subsequent Design OS phases, superseding reconstruction/inference where the two differ. Retroactively populated `creative-direction/` (previously an empty stub — no source text had been pasted for it) directly from `Creative Direction v1.0`. Wrote `design-system/tokens/` directly from `Design System v1.0` §II–III's literal values rather than proposing placeholder numbers. Phase 1 (`foundations/`) required no rework — its philosophy-only scope was already consistent with the literal tokens now in hand, validating that split. `Brand Foundations.pdf` (320 pages) also exists on disk and is substantially larger than what was pasted for Phase 1; it was not re-processed in this pass to avoid unrequested rework of already-committed, thorough Phase 1 content — reconciling it is a candidate for a future, explicitly scoped pass if discrepancies turn up.

**Consequences:** Phases 3–7 (Components, Patterns, Rules, Engineering, `CLAUDE.md`) should be written directly from `Design System v1.0` §V (Component Library), §VI (Figma Library Architecture), §VII (Engineering Handoff), §VIII (AI Design Rules), and §IX (Cross-Brand Usage) rather than re-derived from first principles — that source already specifies most of this content at the needed level of detail.
