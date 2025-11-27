# Alpha5Academy – AI Coding Agent Playbook

- **Stack Snapshot**
	- App lives in `alpha-five-academy-app/` and is a Next.js 16 + React 19 App Router project scaffolded with TypeScript.
	- Styling is handled exclusively with Tailwind CSS v4 via the new `@tailwindcss/postcss` plugin and inline theme tokens defined in `app/globals.css`.
	- Fonts are provisioned through `next/font` (Geist family) with CSS variables wired in `app/layout.tsx`.

- **Local Development**
	- Install deps with `npm install` at the app root; run the dev server using `npm run dev` (port 3000).
	- `npm run lint` executes the project-wide ESLint config (`eslint.config.mjs`) that merges `eslint-config-next` core-web-vitals + TypeScript rules; fix warnings before committing.
	- `npm run build` followed by `npm run start` is the production sanity check—Next.js outputs into the `.next/` directory (never edit this folder).

- **Architecture Notes**
	- App Router layout: `app/layout.tsx` defines metadata and global wrappers; route segments are nested under `app/` using the default server component semantics.
	- `app/page.tsx` currently renders the landing experience; create new pages by adding folders with `page.tsx` files under `app/`.
	- Static assets (logos, icons) live in `public/` and are consumed via `/asset.svg` paths with `next/image` when optimization is required.

- **Styling Pattern**
	- Global tokens (`--background`, `--foreground`, font vars) are centralized in `app/globals.css`; extend them via the `@theme inline` block instead of ad‑hoc CSS variables.
	- Favor Tailwind utility classes for component layout; only drop to custom CSS when utilities cannot express the design.

- **TypeScript & Imports**
	- Path alias `@/*` resolves to the app root (configured in `tsconfig.json`); use it for shared modules once created to avoid deep relative imports.
	- Keep components and hooks typed—compiler runs in `strict` mode with `noEmit`, so any type regressions will block builds.

- **Linting & Quality Gates**
	- ESLint ignores `.next/**`, `out/**`, `build/**`, and `next-env.d.ts`; everything else is linted—update `eslint.config.mjs` if new generated folders appear.
	- No unit test harness is present yet; add one explicitly (e.g., Vitest, Jest) before introducing test commands into this guide.

- **Contribution Etiquette**
	- Document architectural decisions and reusable patterns in this file as the platform grows (e.g., data fetching strategy, state management choice).
	- Align naming (files, routes, components) with Next.js conventions—lowercase folders, PascalCase components, and keep server/client markers explicit when introduced.

---
*Last updated: November 27, 2025*
