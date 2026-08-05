# Typography

> Concrete size/weight/line-height values live in [`../tokens/typography-tokens.md`](../tokens/typography-tokens.md) (Phase 2) — this file defines the *system*.

## Philosophy

Typography communicates before it decorates. It's the primary carrier of the visual identity — hierarchy, rhythm, and personality come from type choices before color or imagery enter the picture. If typography is executed well, less visual decoration is needed elsewhere.

## Typeface system (three, deliberately limited)

| Typeface | Role | Used for |
|---|---|---|
| **General Sans** | Display | Hero headlines, marketing campaigns, landing page titles, section headings, brand statements. Marketing/editorial contexts only. |
| **Geist** | UI | Navigation, paragraphs, forms, buttons, product interfaces, dashboards, documentation, tables, labels. The default for anything that is a *product*, not a marketing page. |
| **Geist Mono** | Technical | Code snippets, API docs, product IDs, version numbers, terminal output. Used sparingly — never as a substitute for body copy. |

**Rule of thumb:** if you're building a marketing page, reach for General Sans headlines over Geist body. If you're building a product screen, everything is Geist unless it's genuinely code/technical output, in which case it's Geist Mono.

## Hierarchy levels

Four tiers, each with its own semantic scale (concrete sizes in Tokens):

1. **Display** — marketing-only, high-impact. Rare — most pages need zero Display-level type.
2. **Heading** — organizes information, establishes structure within a page (H1–H6 equivalents).
3. **Body** — the majority of content. Readability wins over expression here.
4. **Supporting** — captions, labels, metadata, overlines, helper text.

## Marketing vs. product typography

- **Marketing** — larger headlines, more expressive layouts, strong editorial hierarchy, generous whitespace. General Sans leads.
- **Product** — functional hierarchy, consistent rhythm, high readability, predictable interfaces, reduced visual distraction. Geist leads.

## Readability rules

- Comfortable line length: ~60–70 characters for marketing copy, ~65–75 for documentation, fluid for dashboards.
- Sufficient line height and letter spacing for the size in use.
- Typography should scale fluidly across breakpoints (prefer CSS `clamp()` over abrupt breakpoint jumps).
- No heading should dominate the viewport on small screens — hierarchy should compress proportionally, not just shrink the biggest thing.

## Accessibility

Accessible sizing, sufficient contrast, support for browser zoom and assistive tech, responsive scaling. Never sacrifice readability for visual style.

## Related

[Typography tokens (Phase 2)](../tokens/typography-tokens.md) · [Accessibility](./accessibility.md) · [Grid & breakpoints](./grid-and-breakpoints.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
