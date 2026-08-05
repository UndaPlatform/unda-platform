# 6. Motion Language

Every value here resolves to the existing [Motion tokens](../../design-system/tokens/motion-tokens.md) (`motion.instant/fast/base/slow` = 0/120/180/240ms; `ease.standard/enter/exit`). This section does not introduce new durations or curves — it defines named *recipes*: which token combination to use for which recurring moment, in the spirit of Apple, Linear, Arc, and Vercel's shared restraint around motion (fast, quiet, purposeful, never bouncy).

## Page transitions

Content fades and shifts slightly along the axis of navigation (`opacity` + 8px `translateY`), `ease.enter`, `motion.slow` (240ms) on entry. Never a spin, zoom, or 3D flip ([Motion direction](../../creative-direction/motion-direction.md)).

## Hover animations

Subtle opacity or position shift only (a few pixels), `ease.standard`, `motion.fast` (120ms). Never a scale bounce or color flash.

## Loading states

Structural skeletons matching final content geometry, not spinners — see [Avatar, timeline & empty/loading states](../../design-system/components/avatar-timeline-and-empty-loading-states.md). Under `prefers-reduced-motion`, skeleton shimmer is disabled entirely, not just slowed.

## Component animations

Follow each component's own spec in [`../../design-system/components/`](../../design-system/components/index.md) — e.g. [Modal, drawer, popover & tooltip](../../design-system/components/modal-drawer-popover-and-tooltip.md) enters with `ease.enter`/`motion.slow`, exits with `ease.exit`/`motion.fast` (exits are always faster — 80% of the enter duration).

## Micro-interactions

A checkbox fill, a toggle flip: `motion.instant` (0ms) or `motion.fast` — state flips with no perceivable travel don't need a duration at all.

## Logo animation

The symbol's arc may draw in once on load/reveal — resolving the void into the "U" shape — using `ease.enter`/`motion.slow`. This is the *only* logo animation permitted: no looping idle animation, no rotation, no color cycling (all of which would violate [Logo misuse rules](../../brand/logo-system.md#7-misuse) in spirit even if not letter-for-letter). Used sparingly — a splash/loading moment or a video intro/outro, not a persistent UI element.

## Scroll behaviors

Content may reveal on scroll once, gently (`ease.enter`/`motion.base`) — never scroll-jacking, parallax, or repeated re-triggering ([Motion direction](../../creative-direction/motion-direction.md)).

## Modal transitions

Covered by [Modal, drawer, popover & tooltip](../../design-system/components/modal-drawer-popover-and-tooltip.md) — scrim fades in alongside the panel, both using the same enter/exit token pair so they never feel out of sync.

## Choreography

No more than one element leads a transition; children stagger by ≤40ms and never more than 3 deep; a moving element changes at most two properties at once — all per [Motion tokens](../../design-system/tokens/motion-tokens.md).

## Related

[Motion tokens](../../design-system/tokens/motion-tokens.md) · [Motion direction](../../creative-direction/motion-direction.md) · [Motion tokens (brand-expression spec)](../specification/motion-tokens.md)

---

[Back to Manual index](./index.md) · [Back to Design OS root](../../README.md)
