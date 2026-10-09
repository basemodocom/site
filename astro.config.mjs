// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Built to static files in dist/. Basemodo serves them; no server runs.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
