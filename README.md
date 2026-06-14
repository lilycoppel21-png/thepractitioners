# The Practitioners — website

The public home for **The Practitioners**, a weekly publication about how AI is actually
being used in the social impact sector. The newsletter itself lives on Substack; this
site sits alongside it and will grow over time (jobs board, tool directory, research).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

---

## Running the site locally

You need Node.js (already installed at `~/.local/node` and on your PATH).

```bash
npm install     # first time only — installs dependencies
npm run dev     # starts the local dev server
```

Then open **http://localhost:4321** in your browser. The dev server reloads
automatically every time you save a file. Press `Ctrl + C` in the terminal to stop it.

---

## Editing the site

Everything lives in the `src/` folder. You don't need to be a programmer to edit the
words — find the right file and change the text between the tags.

| What you want to change | File to edit |
| --- | --- |
| Site name, tagline, **Substack link**, nav menu | `src/config.ts` |
| Home page (hero, intro, button) | `src/pages/index.astro` |
| About page text | `src/pages/about.astro` |
| Writing page | `src/pages/writing.astro` |
| Colors and fonts | `src/styles/global.css` |
| Header (top bar) | `src/components/Header.astro` |
| Footer (bottom bar) | `src/components/Footer.astro` |
| Shared page shell (fonts, `<head>`) | `src/layouts/BaseLayout.astro` |

**First thing to do:** open `src/config.ts` and paste your real Substack URL into
`substackUrl`. That updates the Subscribe button and every Substack link at once.

### Adding a new page later

Create a new file in `src/pages/` — for example `src/pages/jobs.astro` — and it's
automatically available at `/jobs`. Copy an existing page as a starting point, and add a
matching entry to the `nav` array in `src/config.ts` if you want it in the menu.

---

## Deploying to Cloudflare Pages

Your domain (`thepractitioners.org`) is already on Cloudflare, so Cloudflare Pages is the
natural host. The simplest path is to connect a Git repository:

1. **Put this project in a Git repo** (e.g. push it to GitHub). If you haven't yet:
   ```bash
   git init && git add -A && git commit -m "Initial site"
   ```
   Then create a repo on GitHub and follow its "push an existing repository" steps.

2. In the **Cloudflare dashboard** → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, and select your repository.

3. When asked for build settings, use:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

4. Click **Save and Deploy**. Cloudflare builds the site and gives you a
   `*.pages.dev` preview URL.

5. To use your real domain: in the new Pages project go to **Custom domains** → **Set up
   a custom domain** → enter `thepractitioners.org`. Because the domain is already on
   Cloudflare, the DNS records are added for you.

After this, every time you `git push`, Cloudflare rebuilds and redeploys automatically.

> Prefer not to use Git? You can instead run `npm run build` locally and drag the
> resulting `dist/` folder into a Cloudflare Pages "Direct Upload" project. Git is
> recommended though — it gives you automatic deploys.

---

## Project structure

```
src/
  config.ts            # site name, tagline, Substack URL, nav — edit this first
  styles/global.css    # colors + fonts
  layouts/             # the shared page shell
  components/          # header + footer
  pages/               # one file per page (index, about, writing)
public/                # static files served as-is (e.g. favicon.svg)
astro.config.mjs       # Astro + Tailwind setup
```
