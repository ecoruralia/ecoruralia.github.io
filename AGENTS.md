# AGENTS.md — Ecorural IA Blog

## What this is
A Jekyll-based GitHub Pages blog (Spanish, `minima` theme with heavy customization). No package managers, no CI, no tests, no JS build step.

## Key commands
- **Serve locally:** `jekyll serve` (runs at `http://localhost:4000`) — requires Ruby + Jekyll installed globally (no Gemfile, so `bundle exec` is NOT used).
- **Build:** `jekyll build` (output to `_site/`, gitignored)

## Setup quirks
- No Gemfile — uses GitHub Pages' bundled Jekyll. To add deps, create a Gemfile and uncomment `theme: "minima"` in `_config.yml`.
- `kramdown.syntax_highlighter_opts.disable: true` in `_config.yml` — Jekyll's built-in highlighter is off because highlight.js is used instead.
- Deploy: push to `main`; GitHub Pages auto-builds (no `.github/workflows/`).

## Layout & conventions
- Posts go in `_posts/YYYY/MM/YYYY-MM-DD-title.md`.
- Front matter **must** have `title`, `date`, `author`, `tags` (YAML list: `[tag1, tag2]`). If omitted, `tags` defaults to `Other` (see `_config.yml` `defaults`). The homepage filters out `Other` tags — they still appear on the archive page.
- Dates in front matter are `YYYY-MM-DD`; displayed as `%d/%m/%Y`.
- `index.md` auto-generates from `site.posts` via Liquid — no manual updating.
- `archive.md` groups posts by `site.tags` — tags must appear in front matter (inline `#tags` in body are display-only).
- highlight.js vendored under `js/highlightjs/` — only 3 languages ship by default (`plaintext`, `powershell`, `tsql`). Add new language bundles to `js/highlightjs/languages/` if needed.
- Custom CSS in `css/override.css` — dark neon theme (#39FF14 green + #00FFFF cyan). Google Fonts (Fira Code) loaded via `<link>` in `head.html`.
- Custom `_layouts/post.html` extends `default` layout; includes share buttons and prev/next nav.
- Images go in `img/`, referenced as `![alt](/img/file.png)`.
- `Docs/` contains reference HTML files, not managed by Jekyll.

## If stuck
- `_config.yml` is the single source of truth for site settings.
- `_includes/head.html` wires up highlight.js, SEO, feed, GA — check there if assets don't load.
- Posts are in Spanish, author = `Ing. Ronny Díaz López`, brand = `Ecorural IA`.
