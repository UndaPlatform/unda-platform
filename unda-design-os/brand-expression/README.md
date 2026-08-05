# Brand Expression System v1.0

How the Unda Solutions brand *behaves* across every touchpoint — the layer above [`../brand/`](../brand/index.md) (who Unda is), [`../creative-direction/`](../creative-direction/index.md) (how Unda should feel and reason), and [`../design-system/`](../design-system/index.md) (the implementable interface layer). This system answers: given those three, what does a photograph, an illustration, a slide deck, or a business card actually look like?

**Status:** Complete. Built as an explicit scope extension per ADR-013 in `../../DECISIONS.md` — most of this content originates new creative decisions (photography, illustration, motion, graphic language, physical collateral) rather than transcribing a source document, unlike every prior phase of this Design OS.

## Two deliverables

- **[`manual/`](./manual/index.md)** — the Brand Expression Manual. Narrative, explains reasoning, meant for onboarding a new designer.
- **[`specification/`](./specification/index.md)** — the Brand Expression Specification. Terse, production-ready: tokens, naming conventions, file structure, QA checklist, governance.

## Relationship to the rest of this Design OS

This system does not redefine anything already locked — colors, typography, spacing, logo construction, and component behavior remain exactly as specified in `../brand/`, `../creative-direction/`, and `../design-system/`. It only extends into territory those didn't cover: what does a photograph look like, what does an illustration look like, how does the logo animate, what does a slide deck look like. Where this system references a value (a color, a spacing unit, a motion duration), it points back to the existing token rather than restating or reinventing it.

## An honest note on scope

Sections in `manual/09-marketing-assets.md`, `10-presentation-system.md`, and especially `11-brand-in-practice.md` specify production standards for touchpoints — business cards, apparel, office signage, merchandise — that don't exist yet for a company that is currently a single placeholder website. This was an explicit, discussed trade-off (see ADR-013): these are ready-to-produce specs for *when* a real need arises, not a signal that any of it should be commissioned now. Treat this the same way you'd treat an unused component in `../design-system/components/` — documented ahead of use, not a to-do list.

## Related

[Brand](../brand/index.md) · [Creative Direction](../creative-direction/index.md) · [Design System](../design-system/index.md)

---

[Back to Design OS root](../README.md)
