# Accessibility

## Standard

Every product across every Unda division must meet **WCAG 2.2 AA** — non-negotiable, considered during design, not bolted on after development. This matches the standard already stated in the monorepo root `CLAUDE.md`/`BRAND.md`.

## What this requires, concretely

- **Color** — sufficient contrast ratios; color is never the sole carrier of meaning (pair with icon/text/pattern).
- **Keyboard** — full keyboard navigation, visible focus states on every interactive element, logical tab order.
- **Screen readers** — semantic HTML, proper labels, accessible forms (associated labels, error messaging, valid states), alt text on meaningful images, decorative images hidden from assistive tech.
- **Motion** — respect `prefers-reduced-motion`; essential functional motion stays, decorative motion is removable.
- **Touch** — sufficient touch target sizes, especially on mobile.
- **Structure** — logical heading hierarchy, readable paragraph widths, responsive text scaling that supports browser zoom.

## Where this applies

Every component doc (Phase 3) must include an Accessibility section covering keyboard behavior, screen-reader behavior, and focus management for that specific component — not a generic "we support accessibility" statement.

## Testing expectation

Before anything ships: keyboard-only pass, screen-reader spot check, automated contrast check, `prefers-reduced-motion` check. See [`../checklists/`](../checklists/index.md) (Phase 3) for the concrete pre-launch checklist once it exists.

## Relationship to the rest of this system

Accessibility isn't a separate concern bolted onto color/typography/motion — it's a *constraint* on all of them. A color pairing that fails contrast isn't a valid color pairing in this system, full stop, regardless of how it looks.

## Related

[Color](./color.md) · [Typography](./typography.md) · [Motion](./motion.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
