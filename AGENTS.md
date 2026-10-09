# Site on Basemodo

This site runs on [Basemodo](https://basemodo.com) as static files: Astro and Tailwind CSS v4, built with Bun into `dist/`, which Basemodo serves with no server behind it. It fits sites where nothing is saved and nothing depends on the visitor: a landing page, docs, a catalog, a portfolio. The pages hold placeholder copy; replace it with what the Person asked for.

## Layout

- `src/site.ts` holds the site name, the one place to change it.
- `src/layouts/Base.astro` is the page shell (head, header, footer) every page uses. Pass it `title` and `description`; the home page passes no `title` and shows the site name alone.
- `src/components/Header.astro` holds the navigation `links`.
- `src/pages/404.astro` is the page Basemodo shows for any address the site does not have.
- `src/styles/global.css` configures Tailwind and holds the theme colors.

## Add a page

1. Create `src/pages/<name>.astro` inside `Base`:

   ```astro
   ---
   import Base from "../layouts/Base.astro";
   ---

   <Base title="Pricing">
     <h1 class="text-3xl font-semibold tracking-tight">Pricing</h1>
   </Base>
   ```

2. Add it to `links` in `Header.astro` when it belongs in the navigation.

## Style

- Style with Tailwind classes in the markup, and configure Tailwind in `src/styles/global.css` (v4 is configured in CSS).
- Use the theme colors (`bg-surface`, `bg-raised`, `text-ink`, `text-muted`, `border-line`, `text-accent`); they switch to dark when the visitor's system prefers it. Change a color in `global.css`, and every page follows.

## Write

- Write the copy in the Person's language, and set `<html lang>` in `Base.astro` to match.
- Replace the placeholder copy, the site name in `src/site.ts` and the email on the About page.

## Check and deploy

Run `bun run check` and fix what it reports. Then deploy with `basemodo deploy` (or the Basemodo MCP's `deploy` tool) and give the Person the URL it prints. Basemodo runs `bun run build` and serves what it writes to `dist/`.

## Who can see it

- Unless the App is Public, Basemodo puts every visitor through its sign-in, and a new App starts Private. For a site anyone can open without signing in: `basemodo share --visibility public`.
- Search engines are kept out by default, whatever the site says. A Public App can let them in with `basemodo indexing on`.

## When a site is not enough

Keep the site static. When it must save data, keep what a form sends, or know who the visitor is, move to the app Template (`bun create basemodocom/app`).
