# AGENTS.md — Ecorural IA Blog

## What this is
A Jekyll-based GitHub Pages blog (Spanish, `minima` theme with heavy customization). No package managers, no CI, no tests, no JS build step.

## Key commands
- **Serve locally:** `jekyll serve` (runs at `http://localhost:4000`)
- **Build:** `jekyll build` (output to `_site/`, gitignored)

No Gemfile — uses GitHub Pages' bundled Jekyll. To add deps, create a Gemfile and uncomment `theme: "minima"` usage is handled by Pages.

## Layout & conventions
- Posts go in `_posts/YYYY/MM/YYYY-MM-DD-title.md` (standard Jekyll naming)
- Posts **must** have YAML front matter with `title`, `date`, `author`, and `tags` for `site.tags` archive to work. Inline `#tags` in body are display-only.
- `index.md` uses Liquid (`{% for post in site.posts %}`) — auto-generates from posts, no manual updating needed.
- `archive.md` uses `site.tags` — tags must be in YAML front matter.
- Custom `_layouts/post.html` extends theme's `default` layout; includes share buttons and prev/next nav.
- highlight.js is vendored under `js/highlightjs/` for syntax highlighting (custom dark theme in `override.css`).
- Custom CSS overrides in `css/override.css` — dark neon theme (#39FF14 green + #00FFFF cyan). Google Fonts (Fira Code) loaded via `<link>` in `head.html`.
- Images go in `img/`, referenced in Markdown as `![alt](/img/file.png)`.
- `Docs/` contains reference HTML files not managed by Jekyll.

## If stuck
- `_config.yml` is the single source of truth for site settings
- `_includes/head.html` wires up highlight.js, SEO, feed, GA — check there if assets don't load
- Posts are in Spanish, author = `Ing. Ronny Díaz López`, brand = `Ecorural IA`
