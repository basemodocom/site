# AGENTS.md

This is a Basemodo **site** Template: Astro and Tailwind CSS v4, built to static files, managed with Bun. Use it for sites where nothing is saved and nothing depends on the visitor: a landing page, docs, a catalog, a portfolio.

## Layout

- `src/pages/`: one file per page. `src/pages/about.astro` is `/about`.
- `src/layouts/Base.astro`: the shared page shell (head, header, footer). Every page uses it.
- `src/components/`: reusable pieces (`Header.astro`, `Footer.astro`).
- `src/styles/global.css`: Tailwind and the theme colors.
- `public/`: files served as they are (`public/favicon.svg` is `/favicon.svg`).

## Add a page

1. Create `src/pages/<name>.astro`:

   ```astro
   ---
   import Base from "../layouts/Base.astro";
   ---

   <Base title="Pricing">
     <h1 class="text-3xl font-semibold tracking-tight">Pricing</h1>
   </Base>
   ```

2. Add it to `links` in `src/components/Header.astro` if it belongs in the navigation.

## Style

- Style with Tailwind classes in the markup. Do not add a `tailwind.config.js`; Tailwind v4 is configured in CSS.
- Use the theme colors from `src/styles/global.css` (`bg-surface`, `bg-raised`, `text-ink`, `text-muted`, `border-line`, `text-accent`). They switch to dark when the visitor's system prefers it. Change a color there, not page by page.

## Write

- Write the copy in the Person's language, and set `<html lang>` in `Base.astro` to match.
- Replace the placeholder copy, the site name in `Base.astro`, and the email on the About page.

## Check and deploy

- Run `bun run check` (Astro's type check, Biome's lint and format check) before deploying, and fix what it reports. `bun run format` fixes formatting.
- Deploy with `basemodo deploy`, or the Basemodo MCP's deploy tool. Basemodo runs `bun run build` and serves the files in `dist/`; no server runs.
- Keep `scripts` as they are (`dev`, `build`, `preview`, `check`, `format`). Do not add a server adapter.

## Who can see it

- Unless the App is Public, Basemodo puts every visitor through its sign-in, and a new App starts Private. For a site anyone can open without signing in: `basemodo share --visibility public`.
- Search engines are kept out by default, whatever the site says. A Public App can let them in with `basemodo indexing on`.

## When a site is not enough

If the site must save data, have forms that persist, or know who the visitor is, move to the app Template (`bun create basemodocom/app`). Do not add Astro SSR, an adapter (such as `@astrojs/node`) or API routes here.
