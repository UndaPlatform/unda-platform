# Accessibility Guidance (Brand Expression)

Extends [Accessibility rules](../../design-system/rules/accessibility-rules.md) to expression assets specifically — photography, illustration, motion, marketing, and presentation content that the interface-focused accessibility rules don't explicitly cover.

## Photography & illustration

- Every meaningful image has descriptive `alt` text stating what the image communicates, not just what it depicts literally ("a designer reviewing a component library on a laptop," not "a person at a desk").
- Purely decorative images are marked so assistive technology skips them.
- Illustrations that convey information (a diagram, a flow) need the same text-equivalent as a chart — see [Data Visualization](../manual/08-data-visualization.md).

## Color & contrast in marketing materials

- Any text-on-image or text-on-color-field treatment must still meet the [contrast conformance](../../design-system/tokens/color-tokens.md) bar (≥4.5:1 body text, ≥3:1 large text) — marketing urgency to use a bold color background is not an exception.
- Never convey a marketing claim (e.g. "recommended plan") through color alone — pair with a label or typographic emphasis, per [Pricing pattern](../../design-system/patterns/pricing.md).

## Motion in video and animated content

- Any animated social content or video with flashing/strobing effects is disallowed outright (seizure risk) — this is a harder rule than the general reduced-motion preference.
- Provide a static fallback frame for any animated graphic used where autoplay may be blocked or reduced-motion is requested.

## Captioning

- All video content (product demos, event recordings, presentation recordings) ships with accurate captions — not auto-generated captions left unreviewed.

## Print & physical materials

- Maintain minimum legible type size for the expected reading distance (business card text readable at arm's length, signage readable at its intended viewing distance) — see [Brand in Practice](../manual/11-brand-in-practice.md).

## Related

[Accessibility rules (design system)](../../design-system/rules/accessibility-rules.md) · [Photography guidelines](./photography-guidelines.md) · [Motion tokens](./motion-tokens.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
