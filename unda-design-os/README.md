# Unda Design OS

The single source of design truth for the entire Unda ecosystem — Unda Solutions, Unda Studio, Unda Technologies, Unda Travel, and every future product built under the Unda name.

This is not a Figma library. It's an AI-first knowledge base meant to be read by Claude Code, designers, frontend engineers, product managers, and AI agents alike, so that no future project has to invent a color, a spacing value, a component, or a page pattern from scratch.

> **Status:** under active construction. Built in phases — see [Build status](#build-status) below. Treat any phase marked "not started" as not yet authoritative; check `design-system/foundations/` first since it's the most complete.

## Why this exists

Unda Solutions operates four divisions (Solutions, Studio, Technologies, Travel) that will each ship their own websites, products, and dashboards over time. Without a shared reference, every team re-derives the same decisions — what blue, what spacing scale, what a button's hover state should do — slightly differently each time. This repo is that shared reference, built once and reused everywhere.

This is an explicit, requested exception to this monorepo's normal "build first, abstract second" rule (see `../DECISIONS.md`, ADR-009) — most of this content is written ahead of any real product needing it, rather than extracted from working code. Treat it as a considered blueprint, not a guarantee that every documented component already has a matching implementation in `packages/ui`.

## Folder structure

```
unda-design-os/
├── brand/                  Brand strategy, identity, voice, architecture, governance
│                           (sourced from the Brand Foundation Manual)
├── creative-direction/     Creative vision, moodboard direction, "what we are / aren't"
├── design-system/
│   ├── foundations/        Color, typography, spacing, grid, radius, elevation, icons,
│   │                       illustration, photography, motion, accessibility, dark mode
│   ├── tokens/             The actual token values/names — the implementable layer
│   │                       under foundations
│   ├── components/         One file per component: anatomy, states, tokens, engineering
│   ├── patterns/           Reusable page-level patterns (homepage, dashboard, auth, ...)
│   ├── layouts/            Page-level layout templates and grid applications
│   ├── motion/             Motion/animation specifics beyond the foundational principles
│   ├── icons/              Icon library reference and usage rules
│   ├── illustrations/      Illustration library reference and usage rules
│   ├── accessibility/      WCAG standards, testing checklists, accessible patterns
│   ├── engineering/        React/Next.js/Tailwind/TypeScript implementation guidance
│   ├── prompts/            Prompt templates for using this OS with AI agents
│   ├── rules/              Hard rules — layout, spacing, naming, content, motion, etc.
│   ├── templates/          Starter templates (component doc template, ADR template, ...)
│   ├── examples/           Worked examples showing the system applied
│   └── checklists/         Pre-launch / pre-PR checklists
└── products/               Division-specific notes layered on top of the shared system
    ├── solutions/          Unda Solutions (corporate)
    ├── studio/             Unda Studio
    ├── technologies/       Unda Technologies
    └── travel/             Unda Travel
```

Every folder contains an `index.md` — start there.

## How different people use this

**Designers** — start at `design-system/foundations/` for tokens, then the specific `components/` or `patterns/` file for what you're building. Division-specific notes live in `products/<division>/`.

**Engineers** — `design-system/engineering/` for implementation conventions, then the specific component/pattern doc for the exact tokens and states to implement. Don't hardcode a value that already has a token.

**AI agents (including Claude Code)** — read `CLAUDE.md` in this directory first. It's the standing instruction set: never invent a color/font/spacing value, always check for an existing component before proposing a new one, always check accessibility rules.

**Product managers** — `brand/` for positioning and voice, `products/<division>/` for what's already decided about that division's direction.

## Contribution workflow

1. Check whether what you need already exists (search this repo before writing new documentation or new UI).
2. If it doesn't exist, propose an addition — don't invent one silently and drop it into a product.
3. New components/patterns should note whether they're speculative (no real usage yet) or extracted from a shipped product.
4. Significant decisions get logged in `../DECISIONS.md` at the monorepo root (this project doesn't keep its own separate decision log — one log for the whole repo).

## Versioning

This is a living document set, not a versioned package (unlike `packages/design-system`, which will eventually export the actual tokens/components as code). Track meaningful changes via git history and the root `DECISIONS.md` — no separate CHANGELOG here yet.

## Governance

See `brand/governance.md` and `design-system/rules/` for the standards new additions are expected to meet. In short: consistency over novelty, and nothing ships without a documented reason.

## Build status

| Phase | Status |
|---|---|
| 0. Creative Direction | ✅ Complete — sourced from *Creative Direction v1.0* |
| 1. Foundations | ✅ Complete |
| 2. Tokens | ✅ Complete — literal values sourced from *Design System v1.0* |
| 3. Components | ✅ Complete — sourced from *Design System v1.0* §V |
| 4. Patterns | ⬜ Not started |
| 5. Rules | ⬜ Not started |
| 6. Engineering | ⬜ Not started |
| 7. `CLAUDE.md` | ⬜ Not started |
| 8. This README | ✅ (you're reading it — will be revised as later phases land) |

> Foundations and Tokens were originally drafted from a pasted excerpt of the Brand Foundation Manual, which described design choices (Royal Blue, General Sans/Geist/Geist Mono, 8pt grid) without literal values. The full source PDFs — *Creative Direction v1.0* and *Design System v1.0* — were subsequently located and read in full; `creative-direction/` and `design-system/tokens/` are built directly from their literal content (OKLCH color values, exact type/spacing/motion scales, full component/engineering/AI-rules specs), not reconstructed. See `../DECISIONS.md` (ADR-011). Later phases (Components, Patterns, Rules, Engineering, `CLAUDE.md`) will draw directly from *Design System v1.0* §V–IX, which already specifies them in detail.

## Future roadmap

- Fill in Components → Patterns → Rules → Engineering, in that order, per phase, using *Design System v1.0* §V–IX as the primary source.
- Once `apps/web` has real shipped UI, reconcile this OS's speculative components against what was actually built — update or retire anything that turned out wrong.
- Eventually, `packages/design-system` and `packages/ui` in the main monorepo should implement a subset of what's documented here — starting with whatever `apps/web` actually needs first.
