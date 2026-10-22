# Repository Guidelines

> Whatever action you can do yourself, please do it yourself. This includes starting applications and performing verification.

## Project Structure & Module Organization

Kr4ftLabs is a Next.js 16 App Router landing page. Routes, metadata, and global styles live in `src/app/`; the current entry points are `layout.tsx`, `page.tsx`, and `globals.css`. Put reusable UI in `src/components/`, typed content or helpers in `src/lib/`, and static images or fonts in `public/`. Keep unit tests beside source files as `*.test.ts(x)`; use `e2e/` only when browser tests are introduced.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm run dev` starts the Turbopack development server.
- `npm run build` produces the optimized production build.
- `npm run start` serves that build locally.
- `npm run lint` checks Next.js, React, and TypeScript rules.
- `npm run typecheck` runs strict TypeScript validation without emitting files.
- `npm test` runs Vitest once. No test files exist yet.

## Coding Style & Naming Conventions

Use strict TypeScript, React function components, semantic HTML, and two-space indentation. Name components in PascalCase (`ToolShowcase.tsx`), utilities in camelCase, and hooks with a `use` prefix. Import project modules through `@/*`. Keep Tailwind classes readable; extract repeated patterns and design values instead of duplicating long class lists. ESLint is the source of truth for formatting and correctness.

## Testing Guidelines

Use Vitest and Testing Library for user-visible behavior. Cover navigation, availability labels, keyboard access, and reduced-motion behavior. Before review, run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`; manually inspect mobile and desktop layouts.

## Commit & Pull Request Guidelines

There is no Git history yet. Use concise, imperative subjects, preferably Conventional Commits (for example, `feat: add tool showcase`). Pull requests should summarize user-facing changes, list verification, link relevant issues, and include mobile and desktop screenshots for visual work.

## Content & Security

Never commit secrets; document required variables in `.env.example`. Do not invent products, availability, metrics, testimonials, or performance claims. Keep this repository scoped to the landing page unless the scope is explicitly expanded.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
