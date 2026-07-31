# Contributing

## Tooling

- Package manager: **pnpm** only. Never `npm` or `yarn`.
- Install: `pnpm install`
- Run a specific app: `pnpm --filter <app-name> dev`
- Run everything: `pnpm dev` / `pnpm build` / `pnpm lint` (via Turborepo)

## Code style

- Strict TypeScript. Avoid `any` unless truly unavoidable.
- Prefer Server Components; use Client Components only when interactivity requires it.
- Keep components under ~200 lines where practical.
- Keep business logic separate from UI.
- Formatting and linting are enforced by Biome — run `pnpm check` before committing.

## Git workflow

- Small, logical commits. One concern per commit.
- Meaningful commit messages that explain *why*, not just *what*.
- Never bundle unrelated changes into a single commit.
- Open a PR against `main`; do not push directly to `main` for non-trivial changes.

## Code review checklist

Every PR should be reviewed for:

- Readability
- Scalability
- Security
- Accessibility (WCAG AA)
- Performance
- Maintainability

Not just correctness.

## Adding shared packages

Do not create a new package under `packages/` speculatively. Extract shared code only after a pattern has proven itself by real duplication across at least two consumers. Record the extraction as a decision in [DECISIONS.md](./DECISIONS.md).

## Folder rules

Avoid vague folders like `helpers/`, `misc/`, `common/`, `temp/`. Organize by domain.
