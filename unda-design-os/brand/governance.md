# Brand Governance

## Principle

Every expression of the brand should strengthen the brand. Governance exists so that consistency doesn't depend on any one person remembering the rules — it's the shared responsibility of everyone touching a customer-facing asset.

## Ownership (distributed, not centralized)

| Role | Responsible for |
|---|---|
| Leadership | Strategy, vision, investment, alignment |
| Brand/Design | Identity, guidelines, governance, consistency |
| Engineering | Digital implementation, Design System adoption |
| Marketing | Communication, campaigns, public perception |
| Every employee | Representing the brand professionally |

## What requires approval before publishing

New logos, marketing campaigns, websites, product launches, ads, corporate presentations, printed materials, event branding, merchandise, strategic partnerships. (In practice, for this project specifically: anything customer-facing that deviates from what's documented in this Design OS should get a second look before shipping.)

## Review checklist

Before publishing, an asset should be able to answer **yes** to:

- Does it follow this Design OS?
- Does it use approved tokens/assets (not invented ones)?
- Does it meet accessibility standards?
- Is the messaging clear and consistent?
- Has it actually been reviewed by someone else?

If the answer to more than one of these is "no," it's not ready.

## Audits

A full brand/design audit (visual consistency, product consistency, documentation accuracy, accessibility compliance) should happen periodically once there's enough shipped surface area to audit — not useful yet while `apps/web` is still a single "coming soon" page.

## Asset management

Single source of truth per asset type — this repo, specifically:

| Asset type | Home |
|---|---|
| Brand/design docs | `unda-design-os/` (this project) |
| Design tokens as code | `packages/design-system` (once extracted) |
| Components as code | `packages/ui` (once extracted) |
| Source of app code | `apps/*` |

No duplicate sources of truth should exist — if a value is documented here and also hardcoded differently somewhere in an app, the app is wrong, not this doc (unless this doc hasn't caught up yet, in which case fix the doc).

---

[Back to Brand index](./index.md) · [Back to Design OS root](../README.md)
