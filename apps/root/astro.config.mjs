// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // @ts-expect-error astro/vite/config type is the same
      tailwindcss()
    ],
  },
  integrations: [react()]
});
