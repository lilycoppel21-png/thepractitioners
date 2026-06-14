// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro configuration.
// - `site` is your final public URL. It's used when Astro generates things like
//   sitemaps and absolute links. Keep it pointed at your real domain.
// - Tailwind CSS v4 is wired in as a Vite plugin (the modern way to use Tailwind
//   with Astro). The actual colors/fonts live in src/styles/global.css.
export default defineConfig({
  site: 'https://thepractitioners.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
