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
