# Openable Dev: Project Rules

## What is this?

Marketing/dev site for Openable, built with Next.js 16 + TypeScript + Tailwind 4, statically exported (SSG).

This site shares the same design language as `~/Work/claudebin.com` but with a different color palette. When implementing new sections or components, reference that project for patterns and structure. Ask the user if unsure about how something should look or behave.

## Writing

- Never use em dashes. Use colons for definitions, commas or parentheses for asides.

## Engineering Principles

- DRY: extract shared patterns, no copy-paste
- YAGNI: no speculative features or unused abstractions
- Fail fast: validate inputs early, return/throw before the happy path
- Errors are values: structured error types with context, no bare `catch {}`
- Name by what it does in the domain, not how it's implemented
- Comments explain _why_, never temporal context or what changed
- Components must be arrow functions (`const Foo = () => {}`) not function declarations

## i18n

- All user-facing strings must use `next-intl`: `t()` in server components via `getTranslations()`, `useTranslations()` in client components
- Never hardcode user-facing text in JSX. Always add the string to `src/copy/en-EN.json` and reference it with `t()`
- Translations live in `src/copy/en-EN.json`
- i18n config: `src/i18n/request.ts`

## Tooling

```bash
pnpm dev              # start dev server (turbopack)
pnpm build            # build static export
pnpm lint             # oxlint
pnpm lint:fix         # oxlint --fix
pnpm fmt              # oxfmt format
pnpm fmt:check        # oxfmt check
```

## Styling

- Always use Tailwind utility classes. No arbitrary values, no inline styles, no raw CSS on elements
- If a value does not exist as a Tailwind class, add it as a theme token in `src/static/css/globals.css` and use the resulting class
- Color tokens live in `@theme` in `src/static/css/globals.css`, grouped by color name (grey, orange, amber, etc.)
- Use Tailwind opacity modifiers (`bg-grey-50/20`) instead of rgba values

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **i18n:** next-intl (single locale, no prefix routing)
- **Linting:** oxlint
- **Formatting:** oxfmt
- **Pre-commit:** husky + lint-staged (oxlint + oxfmt)
