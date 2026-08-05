# Modal, Drawer, Popover & Tooltip

Source: *Design System v1.0*, §V.

**Purpose** — ordered by interruption level: tooltip (hover-only hint) < popover (click-triggered, dismissible) < drawer (side panel, partial context loss) < modal (full focus lock, for decisions that block progress).

**Anatomy** — modal/drawer: scrim, panel, title, body, action row. Popover: anchor-relative panel with an optional pointer. Tooltip: single-line label only.

**States** — entering, open, exiting (dismissed via Escape, scrim click, or explicit close).

**Accessibility** — modal/drawer trap focus and set `aria-modal="true"`, restore focus to the trigger on close; popover/tooltip use `aria-describedby`/`role="tooltip"` as appropriate.

**Content** — modal title states the decision ("Archive this project?"), never a generic "Confirm."

**Engineering** — rendered in a top-level portal; scrim uses `neutral.900` at `opacity.scrim`; enters with `ease.enter`/`motion.slow`, exits with `ease.exit`/`motion.fast`.

**Figma spec** — four separate Component Sets; modal/drawer include the scrim as a locked background layer so designers can't accidentally omit it.

## Related

[Motion tokens](../tokens/motion-tokens.md) · [Toast, alert, badge, tag & chip](./toast-alert-badge-tag-and-chip.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
