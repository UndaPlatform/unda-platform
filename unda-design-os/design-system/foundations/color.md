# Color

> Literal hex/RGB/HSL values live in [`../tokens/color-tokens.md`](../tokens/color-tokens.md) (Phase 2) — this file defines the *system*, not the numbers.

## Philosophy

Color communicates meaning before it creates visual interest. Every color used must have a defined purpose (indicate interaction, communicate status, reinforce branding, improve readability, create hierarchy) — never added just because a layout "feels empty." Neutrals do the majority of the work; color is emphasis, not decoration.

## Category structure

Every color in the system belongs to exactly one of six categories. No color should exist outside this structure.

1. **Brand Colors** — the primary identity color (see below).
2. **Neutral Palette** — ~80% of any interface. Backgrounds, cards, typography, borders, inputs, navigation.
3. **Division Accent Colors** — one per division, layered on top of the shared neutral/brand foundation.
4. **Semantic Colors** — Success, Warning, Error, Information. Never used for branding.
5. **Interactive Colors** — hover, active, focus, disabled, selected states for buttons/links/inputs.
6. **Surface Colors** — canvas → page → section → card → popover → modal → tooltip, each with its own elevation-appropriate background.

## Primary brand color

**Royal Blue** — represents trust, intelligence, stability, confidence, innovation. Used for the logo, primary buttons, links, CTAs, highlights, brand graphics. Should remain consistent across every product and division; it's the strongest single visual identifier of the parent brand. Every brand color needs a full **50→950 scale** (not just one value) so it can be used for text, borders, hover states, and backgrounds at appropriate contrast levels.

## Division accent colors

| Division | Accent | Represents |
|---|---|---|
| Unda Solutions (parent) | Royal Blue | Trust, professionalism, leadership |
| Unda Studio | Orange | Creativity, craft, design, innovation |
| Unda Technologies | Cyan | Engineering, technology, precision, AI |
| Unda Travel | Emerald | Growth, journey, reliability, hospitality |

Division colors **complement, never replace** the parent brand color. Parent brand first, division second — a Studio page should still feel unmistakably part of the same company as the corporate site.

## Usage ratio

Approximate target across any interface: **80% neutral, 15% brand, 5% accent.** This ratio is what keeps interfaces calm and premium instead of noisy — if a page feels "loud," it's usually because this ratio has drifted.

## Accessibility

Every color pairing must satisfy WCAG 2.2 AA contrast minimums. Color must never be the *only* way information is communicated (pair with icons/text/patterns for anything status-related). Accessibility takes precedence over aesthetics — full time, no exceptions.

## Light & dark mode

Dark mode is an extension of the same system, not a separate design language. Use softened dark neutrals rather than pure black, preserve the same hierarchy, and keep brand colors recognizable in both themes. See [`dark-mode.md`](./dark-mode.md).

## Related

[Color tokens (Phase 2)](../tokens/color-tokens.md) · [Dark mode](./dark-mode.md) · [Accessibility](./accessibility.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
