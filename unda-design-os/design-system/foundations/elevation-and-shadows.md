# Elevation & Shadows

> Concrete shadow values live in [`../tokens/elevation-tokens.md`](../tokens/elevation-tokens.md) (Phase 2).

## Philosophy

Depth should communicate structure, not decoration. Elevation exists so a user immediately understands what's clickable, what's floating, what's active, and what belongs together — never to look impressive on its own.

## Elevation levels (six, standardized)

| Level | Usage |
|---|---|
| 0 | Base surface |
| 1 | Cards |
| 2 | Hover states |
| 3 | Dropdowns, popovers |
| 4 | Modals |
| 5 | Notifications, toasts |

Surface hierarchy from lowest to highest: Background → Page → Section → Card → Dropdown → Popover → Modal → Notification. A user should always be able to tell which layer they're interacting with.

## Borders vs. shadows

- **Borders** for static separation: cards, tables, inputs, sections, navigation.
- **Shadows** for floating elements: popovers, dropdowns, modals, notifications.

This split keeps the interface visually clean — most of it uses borders, and shadows only appear where something is genuinely floating above the page.

## Shadow characteristics

Soft, diffused, neutral, low-opacity, consistent. Avoid harsh shadows, high blur, heavy offsets, colored shadows, or decorative glow — any of those reads as dated within a year.

## Dark mode

Dark interfaces lean on **surface brightness** rather than shadow intensity to communicate elevation — increase surface brightness slightly per layer and reduce shadow reliance, since shadows barely read against a dark background anyway.

## Motion + elevation

Elevation changes should pair with subtle motion (hover → slight elevation increase; modal open → elevation + scale; dropdown → fade with slight vertical movement). See [motion](./motion.md).

## Related

[Elevation tokens (Phase 2)](../tokens/elevation-tokens.md) · [Motion](./motion.md) · [Radius & borders](./radius-and-borders.md)

---

[Back to Foundations index](./index.md) · [Back to Design OS root](../../README.md)
