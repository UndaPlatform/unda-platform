# System Thinking & Consistency

Source: *Design System v1.0*, §I.

## Purpose

This system exists so that no two designers or engineers ever have to solve the same interface problem twice. It is the single reference for how Unda builds interfaces — the vocabulary of tokens and components that [Brand Foundation v1.0](../../brand/index.md) and [Creative Direction v1.0](../../creative-direction/index.md) predicted but did not specify. Where those documents describe *why* Unda looks and feels the way it does, this one describes exactly *how* to build that feeling, pixel by pixel, state by state, across every division and every surface: marketing site, product dashboard, mobile app, or printed document.

## Relationship to Brand Foundation & Creative Direction

Brand Foundation defines who Unda is. Creative Direction defines how Unda should feel and reason about a design problem. This design system is downstream of both: every token and component decision is a direct, literal implementation of a principle already established — typography leading hierarchy, restraint over decoration, one shared grid across four brands. Nothing here introduces a new value; it only makes existing values buildable and testable.

## System thinking

Every visual decision is a token before it is a value used on a screen. A designer never types a raw hex code, pixel value, or font size into a file — they reference `color.text.primary` or `space.400`. Components are themselves compositions of tokens, never hardcoded values; this is what allows four brands, dozens of products, and both light and dark themes to update from one source of truth rather than a thousand individual edits.

**Rule:** if a value doesn't have a token, it doesn't go on a screen — propose the token first. See [Tokens](../tokens/index.md).

## Consistency & component philosophy

A component is only added to the system when a pattern repeats across products with the same intent. Variants exist to serve genuinely different use cases, not to accommodate one designer's preference. Every component is specified with its full state matrix so an engineer never has to invent a hover, disabled, or error treatment — it already exists, documented in [`../components/`](../components/index.md).

**Rule:** a one-off visual need is a proposal to extend an existing component, never a reason to fork one. See [Governance & versioning](./governance-and-versioning.md).

## Related

[Governance & versioning](./governance-and-versioning.md) · [Design review principles](./design-review-principles.md)

---

[Back to Rules index](./index.md) · [Back to Design OS root](../../README.md)
