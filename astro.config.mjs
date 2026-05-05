// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://cantatronic.github.io',
  base: '/portfolio_page',
});
