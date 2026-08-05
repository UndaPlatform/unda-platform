# 11. Brand in Practice

How the brand appears across every touchpoint, digital through physical. Digital surfaces reflect this Design OS as it stands today; physical surfaces are specified but **not yet in production** — see [the scope note](../README.md#an-honest-note-on-scope). Writing the spec now means the first business card or first office sign is a five-minute lookup, not a fresh design exercise, whenever that need actually arrives.

## Digital (real today)

- **Website** — governed by the whole [Design System](../../design-system/index.md); `apps/web` is the reference implementation once built.
- **SaaS product** — same component library, [dashboard layouts](./02-layout-language.md), and [data visualization](./08-data-visualization.md) rules as any other product surface.
- **Mobile app** — same tokens and components; touch targets follow the 44×44px minimum in [Accessibility rules](../../design-system/rules/accessibility-rules.md) throughout.

## Print & stationery (specified, not yet produced)

- **Business cards** — horizontal lockup, single-color ink per [Logo color variations](../../brand/logo-system.md#4-color-variations) (print defaults to single-color, not brand-blue-on-white). Name/title in Geist, sentence case. Minimum symbol size 6mm per the logo's print floor.
- **Letterhead** — horizontal lockup top-left, generous margin, footer carries only legal/contact information in `type.caption`-equivalent print size.
- **Invoices & proposals** — documentation-density rules ([Layout language](./02-layout-language.md)): scannable tables, Geist Mono for line-item numbers, logo symbol-only watermark permitted at low opacity as a document-authenticity cue, never as decoration.

## Digital identity

- **Email signatures** — symbol-only or horizontal lockup at the digital full-lockup minimum (20px symbol height), name/title/division in plain text, no photography, no decorative rule lines beyond a single hairline divider.

## Physical spaces & goods (specified, not yet produced)

- **Office signage** — symbol-only at large scale (app-icon treatment: full-bleed to safe area on an ink field), division name in Geist Mono beneath if the space is division-specific, per [Division lockups](../../brand/logo-system.md#5-division-lockups).
- **Apparel** — symbol-only, single-color, centered small-chest placement or a larger back placement — never a busy multi-color print; apparel is a wearable extension of the app-icon treatment, not a separate design exercise.
- **Stickers** — symbol-only die-cut to the mark's own silhouette (not a rectangular sticker with the mark printed inside it) or a simple rounded-square sticker at the [minimum print size](../../brand/logo-system.md#3-clear-space--minimum-size) floor.
- **Notebooks / merchandise** — symbol-only, debossed or single-color print, positioned per the same clear-space rule as any other lockup use. No division-specific merchandise variants beyond swapping the accent color, per [Cross-brand rules](../../design-system/rules/cross-brand-rules.md).

## Related

[Logo system](../../brand/logo-system.md) · [Marketing assets](./09-marketing-assets.md) · [File structure (spec)](../specification/file-structure.md)

---

[Back to Manual index](./index.md) · [Back to Design OS root](../../README.md)
