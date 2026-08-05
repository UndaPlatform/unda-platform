# Design System

The implementable layer: foundations, tokens, components, patterns, and the rules/engineering guidance that ties them together.

**Status:** All 8 phases the user requested (Foundations → Tokens → Components → Patterns → Rules → Engineering → `CLAUDE.md` → README) are complete — see [Build status](../README.md#build-status). The remaining folders below (`layouts/`, `motion/`, `icons/`, `illustrations/`, `accessibility/`, `prompts/`, `templates/`, `examples/`, `checklists/`) are supplementary reference material the original project structure anticipated but that the two source documents (*Creative Direction v1.0*, *Design System v1.0*) don't specify in enough literal detail to fill without inventing content. They stay as stubs — deferred until a real need (an actual product build, or a new source document) justifies writing them, consistent with this monorepo's build-first-abstract-second default (ADR-002).

## Contents

| Folder | Status | Purpose |
|---|---|---|
| [foundations/](./foundations/index.md) | ✅ Complete | Color, typography, spacing, grid, radius, elevation, icons, illustration, photography, motion, accessibility, dark mode |
| [tokens/](./tokens/index.md) | ✅ Complete | Implementable values under Foundations — literal from *Design System v1.0* |
| [components/](./components/index.md) | ✅ Complete | One file per component — sourced from *Design System v1.0* §V |
| [patterns/](./patterns/index.md) | ✅ Complete | Marketing-page assemblies — sourced from *Design System v1.0* §V |
| [layouts/](./layouts/index.md) | ⬜ Not started | Page-level layout templates |
| [motion/](./motion/index.md) | ⬜ Not started | Concrete durations/easings beyond foundational principles |
| [icons/](./icons/index.md) | ⬜ Not started | Icon library reference |
| [illustrations/](./illustrations/index.md) | ⬜ Not started | Illustration library reference |
| [accessibility/](./accessibility/index.md) | ⬜ Not started | Testing checklists, accessible interaction patterns |
| [engineering/](./engineering/index.md) | ✅ Complete | React/Next.js/Tailwind/TypeScript implementation guidance — from *Design System v1.0* §VI–VII |
| [prompts/](./prompts/index.md) | ⬜ Not started | AI-agent prompt templates for using this OS |
| [rules/](./rules/index.md) | ✅ Complete | System thinking, design review, governance, accessibility, cross-brand — from *Design System v1.0* §I, IV, IX |
| [templates/](./templates/index.md) | ⬜ Not started | Starter templates (component doc, ADR, pattern doc) |
| [examples/](./examples/index.md) | ⬜ Not started | Worked examples |
| [checklists/](./checklists/index.md) | ⬜ Not started | Pre-launch / pre-PR checklists |

---

[Back to Design OS root](../README.md)
