# Photography drop-in

Drop real image files at the exact paths below. Each page resolves these at request time
(`src/lib/photo.ts#resolvePhoto`) — the moment a file exists here, it replaces the
`GraphicPanel` placeholder automatically. No code change needed.

Formats: `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif` — just match the filename exactly
(including extension) in each page's `resolvePhoto(...)` call, or tell Claude the extension
you're using and it'll adjust the call sites.

| File | Used on | Suggested aspect / size |
|---|---|---|
| `hero.jpg` | Home hero, full-bleed banner below the headline | wide, ~21:8 (e.g. 2400×900) |
| `about.jpg` | About page hero | portrait, 4:5 (e.g. 1600×2000) |
| `careers.jpg` | Careers page hero | portrait, 4:5 (e.g. 1600×2000) |
| `divisions/technologies.jpg` | Home ecosystem hover list + Ecosystem page | 4:3 (e.g. 1600×1200) |
| `divisions/studio.jpg` | Home ecosystem hover list + Ecosystem page | 4:3 (e.g. 1600×1200) |
| `divisions/travel.jpg` | Home ecosystem hover list + Ecosystem page | 4:3 (e.g. 1600×1200) |
| `case-studies/ai-powered-health-platform.jpg` | Work + Home featured work | 4:3 (e.g. 1600×1200) |
| `case-studies/digital-banking-platform.jpg` | Work + Home featured work | 4:3 (e.g. 1600×1200) |
| `case-studies/corporate-travel-platform.jpg` | Work + Home featured work | 4:3 (e.g. 1600×1200) |
| `case-studies/learning-management-system.jpg` | Work + Home featured work | 4:3 (e.g. 1600×1200) |

Note: the case studies above are still placeholder project content (see `DECISIONS.md`) —
their images should be real screenshots/mockups of that kind of work, not literal photos of
fictional clients.
