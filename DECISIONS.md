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
