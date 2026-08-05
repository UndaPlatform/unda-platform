# Motion Tokens

Source: *Design System v1.0*, §III. Implements the principles defined in [`../foundations/motion.md`](../foundations/motion.md) and [`../../creative-direction/motion-direction.md`](../../creative-direction/motion-direction.md).

## Philosophy

Motion clarifies cause and effect; it never performs for its own sake. Every animated property change is driven by a token — no component hardcodes a duration or curve.

## Durations

| Token | Value | Use |
|---|---|---|
| `motion.instant` | 0ms | state flips with no perceivable travel (e.g. checkbox fill) |
| `motion.fast` | 120ms | hover, focus-ring |
| `motion.base` | 180ms | toggles, dropdowns, accordion |
| `motion.slow` | 240ms | modal/drawer enter, page transitions |

## Easing

| Token | Curve | Use |
|---|---|---|
| `ease.standard` | `cubic-bezier(0.2,0,0,1)` | property changes in place (hover, resize) |
| `ease.enter` | `cubic-bezier(0,0,0.2,1)` | elements arriving on screen |
| `ease.exit` | `cubic-bezier(0.4,0,1,1)` | elements leaving |

Exits are always faster than entrances (80% of the enter duration) so the interface never feels like it's waiting on its own animation.

## Choreography rules

- Only one element leads a transition.
- Children stagger by no more than 40ms and never more than 3 deep.
- A moving element changes at most two properties at once (e.g. opacity + translateY, never + scale + color simultaneously).
- Nothing animates on page load except a first, single content reveal.

## Reduced motion

Every duration collapses to 0–1ms under `prefers-reduced-motion: reduce`; loading states fall back to a static skeleton with no shimmer; parallax and auto-playing decorative motion are disabled entirely, never just slowed.

## Related

[Motion foundations](../foundations/motion.md) · [Motion direction](../../creative-direction/motion-direction.md) · [Accessibility foundations](../foundations/accessibility.md)

---

[Back to Tokens index](./index.md) · [Back to Design OS root](../../README.md)
