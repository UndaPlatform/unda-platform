# 6. Motion Direction

- **Philosophy** — motion clarifies cause and effect; it never performs for its own sake. If a user can't explain why something moved, the motion has failed.
- **Timing** — fast and quiet. Interface motion sits in the 120–220ms range with an ease-out curve; anything a user waits on feels like friction.
- **Page transitions** — content fades and shifts slightly along the axis of navigation (never a spin, bounce, or zoom).
- **Hover & micro-interactions** — subtle opacity and position shifts (a few pixels), never scale bounces or color flashes.
- **Loading states** — structural skeletons that mirror the final layout, not spinners; the interface should never go blank.
- **Scroll behavior** — content may reveal on scroll once, gently; scroll-jacking, parallax, and repeated re-triggering animations are avoided.

This is the *direction*; literal durations, easing curves, and choreography rules live in [`../design-system/tokens/motion-tokens.md`](../design-system/tokens/motion-tokens.md) and match [`../design-system/foundations/motion.md`](../design-system/foundations/motion.md).

## Related

[Interaction philosophy](./interaction-philosophy.md) · [Motion foundations](../design-system/foundations/motion.md)

---

[Back to Creative Direction index](./index.md) · [Back to Design OS root](../README.md)
