# Motion & Animation

> Concrete durations/easings live in [`../motion/`](../motion/index.md) (Phase 3) — this file defines the *principles*.

## Philosophy

Motion should explain, not entertain. Every animation should help a user understand what changed, why, where it came from, and what to do next. If removing an animation improves clarity, remove it.

## Characteristics

Every animation should feel: smooth, calm, purposeful, elegant, predictable, responsive, lightweight, professional. Never exaggerated or distracting.

## Principles

- **Natural** — mimic natural acceleration/deceleration, avoid abrupt starts/stops.
- **Functional** — every animation communicates something (opening, closing, loading, selection, completion).
- **Fast** — interfaces should feel responsive; animation should never slow a user down.
- **Consistent** — the same interaction always animates the same way, everywhere.
- **Accessible** — respect `prefers-reduced-motion`; essential functional motion stays, decorative motion goes.

## Categories

Navigation motion (page transitions, menus, tabs), micro-interactions (hover, press, validation, toggles), feedback motion (success/error/notifications/loading), content motion (cards appearing, accordions), system motion (modals, drawers, dropdowns, popovers), product motion (AI streaming responses, progress indicators, workflow animations).

## Style constraints

Primarily fade, scale, slide, opacity, elevation changes. Avoid excessive rotation, bounce, elastic effects, overshooting, or complex transforms — motion should read as subtle and sophisticated, not playful.

## Page transitions

Should be almost invisible — the goal is continuity, not a "look, an animation!" moment. Preserve orientation, feel immediate, avoid unnecessary delay.

## AI interaction motion

AI products need their own motion vocabulary within this system: streaming text, thinking indicators, progressive result loading, incremental updates. AI should read as responsive and transparent, not instantaneous-and-mysterious — motion should communicate that real work is happening.

## Performance & accessibility

Motion should never cost frame rate — hardware-accelerated properties, no layout shift, minimal repaints. Always provide a reduced-motion path for anything non-essential.

## Related

[Motion specifics (Phase 3)](../motion/index.md) · [Elevation & shadows](./elevation-and-shadows.md) · [Accessibility](./accessibility.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
