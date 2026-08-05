# Logo Design System

Source: *Logo Design System v1.0* (foundational identity document, August 2026). Construction, clear space, sizing, color, and lockup rules for the Unda Solutions symbol — built from Concept C8 (Radial Frame): four modules oriented around one shared monogram. Executes Part 10 of *Logo & Identity Strategy v1.0*.

## 1. The symbol

Four equal rounded-square modules, one per corner, oriented around a shared central void. A single arc spans the lower-center of that void, resolving the negative space into a "U" without drawing a letterform. The four modules represent every present and future division; the arc represents the one brand that holds them together.

## Construction logic

- **Base grid** — 8×8 units (64×64 artboard); every module edge and radius snaps to a grid line first.
- **Module size** — 14×14 units, corner radius 3 units — identical on all four, no exceptions.
- **Gap between modules** — 2 units on the inner edge, giving the shared void its proportions.
- **Arc** — radius 8 units, stroke weight 3 units, spans the lower half of the void only — optically corrected to look continuous with the module radii, not mathematically identical to them.

These are the symbol's own construction units — a self-contained geometry, distinct from the interface `radius.*` scale in [`../design-system/tokens/radius-elevation-and-icon-tokens.md`](../design-system/tokens/radius-elevation-and-icon-tokens.md). Don't conflate the two: the logo's 3-unit module radius is not `radius.sm`.

**No fifth element is permitted.** Any application that needs a fifth shape to read correctly (an outline, a background plate, a drop shadow) is a misuse — fix the environment, not the mark.

## 2. Wordmark & lockup

The wordmark is "Unda Solutions" set in General Sans, Semibold, sentence case, always — never all-caps, never abbreviated to "Unda" alone in the primary lockup.

Three lockups cover every use case; no fourth is needed:

| Lockup | Use case |
|---|---|
| Horizontal | Nav bars, letterhead |
| Stacked | Social profiles, covers |
| Symbol-only | Icons, favicons, watermarks |

**Symbol-to-wordmark ratio** is fixed: the symbol's height equals 1.2× the wordmark's cap-height, vertically centered on the wordmark's optical center (very slightly above true center, since the void reads visually heavier at the bottom).

## 3. Clear space & minimum size

**Rule** — minimum clear space around the symbol, in every lockup, equals the width of a single module. Self-referential: the rule scales automatically with the mark, so it never needs restating at a new size.

**Minimum sizes**

| Context | Minimum |
|---|---|
| Digital, symbol-only | 16px (favicon floor) |
| Digital, full lockup | 20px symbol height |
| Print, symbol-only | 6mm |
| Print, full lockup | 8mm symbol height |

## 4. Color variations

| Variation | Treatment |
|---|---|
| Light mode | Ink on white |
| Dark mode | White on ink |
| Brand blue field | White mark |
| Accent | Brand blue mark |

Brand blue (`brand.primary` — see [Color tokens](../design-system/tokens/color-tokens.md)) is reserved for digital surfaces already carrying the color system (product UI, dark decks) — print and signage default to single-color ink, never blue-on-white as the primary treatment. No gradient, outline, or two-tone version of the symbol exists; the void must always stay the background color, never a second ink.

## 5. Division lockups

Every division inherits the identical symbol. Only the name beneath changes — no division receives its own mark (this matches the Branded House model in [Brand architecture](./architecture.md) and [Cross-brand rules](../design-system/rules/cross-brand-rules.md): a division may only vary its accent color, never the symbol itself).

Division name sits in Geist Mono, uppercase-off, small and quiet — it identifies, it doesn't compete with the master brand name above it. Future divisions and products follow the identical pattern.

## 6. App icon & favicon

- **App icon** — symbol full-bleed to safe area, ink field.
- **Favicon** — 16px & 32px, tested against the minimum-size floor in §3.

## 7. Misuse

- Never outline the modules — they are always solid fills.
- Never stretch or distort the module grid.
- Never rotate the symbol off its fixed orientation.
- Never recolor outside the approved palette in §4.

## Related

[Brand architecture](./architecture.md) · [Color tokens](../design-system/tokens/color-tokens.md) · [Icons foundations](../design-system/foundations/icons.md)

---

[Back to Brand index](./index.md) · [Back to Design OS root](../README.md)
