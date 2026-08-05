# Button

Source: *Design System v1.0*, §V.

**Purpose** — trigger a single, primary action. Not for navigation (use [Link](./link.md)) or persistent state toggling (use [Switch](./checkbox-radio-switch.md)).

**Anatomy** — container, optional leading icon, label, optional trailing icon, optional loading spinner replacing label.

**Variants** — primary (`brand.primary` fill), secondary (outlined), ghost (no fill/border), destructive (`status.error` fill).

**Sizes** — sm 32px / md 40px / lg 48px height, padding `space.150` `space.300` scaling with size.

**States** — hover (8% darken via `opacity.hover-overlay`), focus (2px ring, offset 2px), active/pressed (12% darken, no scale/translate), disabled (`opacity.disabled`, `pointer-events: none`), loading (label replaced by spinner, width preserved, `aria-busy="true"`, not clickable), error (destructive variant only, shown post-submit with inline message nearby).

**Accessibility** — native `<button>`, Enter/Space activates, loading state exposed via `aria-busy`, disabled uses the native attribute (never a CSS-only fake disable).

**Content** — one verb, sentence case, 1–4 words, no ellipsis except a genuine multi-step continuation ("Continue…").

**Spacing & tokens** — `radius.md`, `type.body` weight 600, gap between icon and label `space.100`.

**Responsive** — width follows content + padding at every breakpoint; never fixed-width; stacks to full-width in single-column mobile forms only.

**Engineering** — `variant`/`size`/`loading`/`disabled` as explicit props; never a raw `className` override; width never set in px.

**Figma spec** — one Component Set `Button` with variant properties `variant`, `size`, `state`, boolean `hasIcon`; auto-layout, gap and padding bound to space tokens.

## Related

[Text button, icon button & button group](./text-button-icon-button-and-button-group.md) · [Link](./link.md)

---

[Back to Components index](./index.md) · [Back to Design OS root](../../README.md)
