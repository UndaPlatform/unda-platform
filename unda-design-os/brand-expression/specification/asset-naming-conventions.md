# Asset Naming Conventions

A single naming scheme across every asset type this system produces, so any asset's purpose, division, and variant are readable from the filename alone — no opening the file required.

## Pattern

```
[division]_[assettype]_[description]_[variant]_[size-or-dimension].[ext]
```

- **division** — `solutions` / `studio` / `technologies` / `travel` / `shared` (cross-division assets)
- **assettype** — `photo` / `illustration` / `icon` / `social` / `deck` / `signage` / `print`
- **description** — short, lowercase, hyphenated (`team-review`, `hero-primary`)
- **variant** — `light` / `dark` / `en` (locale) / a division accent if relevant — omit if not applicable
- **size-or-dimension** — `1920x1080`, `16px`, `a4` — omit for vector/scalable assets

## Examples

- `technologies_photo_engineer-pairing_light_2400w.webp`
- `shared_icon_arrow-right_20px.svg`
- `studio_social_launch-announcement_1x1.jpg`
- `solutions_deck_q3-review_1920x1080.pdf`

## Rules

- Lowercase, hyphen-separated within each segment, underscore-separated between segments — never spaces or camelCase.
- No version numbers in the filename (`_v2`, `_final`, `_final-final`) — that's what [Governance, review & versioning](./governance-review-and-versioning.md) and file-storage version history are for.
- `shared` is used only for genuinely cross-division assets (the logo itself, the icon library) — a division-specific asset always names its division.

## Related

[File structure](./file-structure.md) · [Governance, review & versioning](./governance-review-and-versioning.md)

---

[Back to Specification index](./index.md) · [Back to Design OS root](../../README.md)
