# 5. Iconography

Extends [Icon foundations](../../design-system/foundations/icons.md) (Lucide, rounded outline, filled reserved for active states) with the rules needed to create and use icons consistently at scale.

## Stroke

1.5px at the base 16/20/24px sizes ([Icon tokens](../../design-system/tokens/radius-elevation-and-icon-tokens.md)) — matches Lucide's native stroke exactly. A custom icon with any other stroke weight is not a valid Unda icon, regardless of how well it otherwise fits.

## Corner radius & optical alignment

Rounded line caps and joins throughout, matching Lucide's construction. Every icon is optically centered within its bounding box — mathematically centered is not the same thing (an arrow icon, for example, needs a few pixels of optical adjustment to not read as off-center).

## Sizes

| Token | Use |
|---|---|
| `icon.sm` (16px) | Inline with `type.body-sm`/`type.caption` text |
| `icon.md` (20px) | Inline with `type.body`, buttons, navigation |
| `icon.lg` (24px) | Cards, standalone emphasis |

Sizes are tied to adjacent type size ([Icon tokens](../../design-system/tokens/radius-elevation-and-icon-tokens.md)) — never chosen independently of the text or component it sits beside.

## Filled vs. outlined

Outlined is the default and the only style used for static, non-active icons. Filled is reserved exclusively for: active/selected navigation state, and toggled-on states (e.g. a filled bookmark icon once saved). Filled and outlined never appear as two different "styles" in the same view except to signal exactly this kind of state change — never a stylistic mix.

## Animation

Icon animation is a state-change signal, not decoration: a checkmark that draws in on success, a chevron that rotates 180° on expand/collapse. Duration and easing come from [Motion tokens](../../design-system/tokens/motion-tokens.md) — `motion.fast` (120ms) for simple state flips, never a bespoke duration per icon.

## Spacing

Icon-to-label gap is `space.100` (8px) at every size — matches [Button](../../design-system/components/button.md) and other components already specifying this gap.

## Accessibility

Icons never carry meaning alone — every icon-only control has an `aria-label` ([Accessibility rules](../../design-system/rules/accessibility-rules.md)); decorative icons are `aria-hidden`.

## Rules for creating a new icon

1. Check Lucide's library first — a new icon is only justified if Lucide genuinely has no equivalent.
2. Match stroke weight (1.5px), corner treatment, and bounding-box padding exactly.
3. Design at 24px, verify it still reads correctly down to 16px before proposing it.
4. Propose it through the same process as any new component ([Governance & versioning](../../design-system/rules/governance-and-versioning.md)) — a custom icon is a system addition, not a one-off asset.

## Related

[Icon foundations](../../design-system/foundations/icons.md) · [Icon rules (spec)](../specification/icon-rules.md) · [Illustration system](./04-illustration-system.md)

---

[Back to Manual index](./index.md) · [Back to Design OS root](../../README.md)
