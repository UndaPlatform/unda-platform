# 4. Illustration System

Extends [Illustration foundations](../../design-system/foundations/illustration.md) with the concrete style specification.

## Style

Minimal geometric illustration — simple shapes, rounded corners matching the interface [radius scale](../../design-system/tokens/radius-elevation-and-icon-tokens.md), flat or lightly-layered (at most 2 depth layers via subtle `shadow.sm`), never fully rendered or photorealistic.

## Line weights

2px stroke at standard illustration scale (roughly 200–400px canvas), scaling proportionally at other sizes — deliberately heavier than the 1.5px interface icon stroke ([Icon tokens](../../design-system/tokens/radius-elevation-and-icon-tokens.md)) since illustrations live at a larger scale and a matched thin stroke would read as fragile.

## Geometry

Built from the same primitive vocabulary as the interface: rounded rectangles, circles, straight lines, consistent corner radii. An illustration should look like it was constructed from the same kit as a button or a card, not drawn freehand.

## Perspective

Flat, orthographic (no vanishing-point perspective). Depth is implied through layering and subtle shadow, not through 3D rendering or isometric projection — isometric in particular is explicitly avoided as a dated trend.

## Shading

Flat fills as the default; a single soft drop shadow (`shadow.sm`) permitted to lift one element above a background layer. No gradients, no cel-shading, no directional light-and-shadow rendering.

## Gradients & texture

**Never.** Matches [Always avoid: layout](../../creative-direction/design-constraints.md) — gradients-as-illustration and applied texture/noise are explicitly excluded system-wide.

## Color

Neutral palette as the base, brand or division accent for emphasis, semantic colors only for status — same rule as [Illustration foundations](../../design-system/foundations/illustration.md). No illustration introduces a color outside the token set.

## Personality

Calm, precise, quietly optimistic — never cute, never cartoonish, never using exaggerated proportions for charm. An illustration should feel like a diagram that happens to be pleasant to look at, not a mascot or character.

## Scalability

Every illustration is built on a vector grid so it scales cleanly from a 24px inline icon-adjacent use up to a full-bleed presentation background without redrawing — geometry and stroke weight defined in relative units, not fixed pixels.

## By surface

- **Product illustrations** — small, functional: empty states, onboarding steps, error states. Single idea, minimal detail, matches [Table & list empty states](../../design-system/components/table-and-list.md).
- **Website illustrations** — used sparingly, only to explain a system or process (a diagram, a flow) — never decorative filler for empty space ([Art direction](../../creative-direction/art-direction.md)).
- **Marketing illustrations** — can compose multiple simple illustrations into a scene, but each component illustration still follows one-idea-per-element.
- **Presentation illustrations** — simplified further than product illustrations; must read correctly at a glance from across a room, so favor larger, fewer shapes.

## Related

[Illustration foundations](../../design-system/foundations/illustration.md) · [Iconography](./05-iconography.md) · [Illustration specification (spec)](../specification/illustration-specification.md)

---

[Back to Manual index](./index.md) · [Back to Design OS root](../../README.md)
