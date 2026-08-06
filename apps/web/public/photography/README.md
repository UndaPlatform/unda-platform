# Photography drop-in

Drop real image files at the exact paths below. Each `ImageSlot` resolves these at request time
(`src/lib/photo.ts#resolvePhoto`) — the moment a file exists here, it replaces the dashed-border
placeholder automatically. No code change needed.

Formats: `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif` — match the filename exactly (including
extension) in the relevant component's `resolvePhoto(...)` call, or tell Claude the extension
you're using and it'll adjust the call sites.

| File | Used on | What it should show |
|---|---|---|
| `who-we-are.jpg` | Home — "Who We Are" | Real photo, dramatic light, a corridor or plaza |
| `work/digital-banking-platform.jpg` | Home — Featured Work | Case study — fintech platform UI |
| `work/ai-powered-health-platform.jpg` | Home — Featured Work | Case study — data / analytics dashboard |
| `work/corporate-travel-platform.jpg` | Home — Featured Work | Case study — travel management app |
| `insights/future-of-ai-in-african-businesses.jpg` | Home — Latest Insights | Article image — AI / Africa map graphic |
| `insights/designing-systems-people-love.jpg` | Home — Latest Insights | Article image — design systems workspace |
| `insights/digital-transformation-leadership-priority.jpg` | Home — Latest Insights | Article image — leadership team meeting |

Suggested size: ~1600px on the long edge is enough for every slot on this page (largest is the
"Who We Are" photo at 237px tall in a two-column layout).
