# Iconography

## Philosophy

Icons clarify, they don't decorate. Every icon must have a functional purpose — if removing an icon improves clarity, it shouldn't exist. Icons should always complement text, never replace it as the sole carrier of meaning.

## Official library: Lucide

**Lucide Icons** is the single icon library for the entire ecosystem — modern, minimal, open source, consistent stroke system, strong React support. Custom icons should only be created when genuinely necessary, and must match Lucide's construction rules exactly (stroke width, corner radius, bounding box, optical alignment) so they're indistinguishable from the base set.

## Style

**Rounded outline icons** — clean strokes, rounded line caps and joins, minimal detail, simple geometry. This is the default. Filled icons are reserved for active navigation states, selected states, and special emphasis — never mixed with outline icons in the same context except to signal a state change.

## Size scale

| Token | Usage |
|---|---|
| XS | Inline indicators |
| S | Buttons |
| M | Navigation |
| L | Cards |
| XL | Marketing graphics |

## Color

Icons inherit color from the surrounding interface (primary text, secondary text, brand color, semantic colors) — they never introduce a color outside the approved [color system](./color.md).

## Accessibility

Icons never communicate meaning alone — pair with accessible labels, tooltips, or supporting text, and screen-reader descriptions for anything meaningful. Purely decorative icons should be hidden from assistive technology.

## Related

[Icons library reference (Phase 3)](../icons/index.md) · [Color](./color.md) · [Illustration](./illustration.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
