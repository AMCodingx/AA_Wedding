# Wedding Site

Bilingual (ES/NL), beach-inspired wedding site built with Astro 4.

## Quick start

```sh
bun install
bun run dev       # http://localhost:4321
bun run check     # type-check
bun run build     # static build to ./dist
bun run preview   # serve the build
```

## Layout

See [`architecture.md`](./architecture.md) for the full system design and
[`style-guide.md`](./style-guide.md) for the visual reference.

- `src/styles/tokens.css` — colors, spacing, type scale (single source of truth).
- `src/i18n/{es,nl}.json` — UI strings.
- `src/content/` — long-form copy (FAQ, places, activities) per locale.
- `src/features/` — feature-scoped components and data.
- `src/pages/` — file-based routing (`/es/...`, `/nl/...`).

## Editing content

- **UI labels** → `src/i18n/es.json` / `nl.json`.
- **FAQ entries** → `src/content/faq/{es,nl}/*.md`.
- **Places & activities** → `src/content/places/{es,nl}/*.md`, `src/content/activities/{es,nl}/*.md`.

The build fails on schema-invalid content, so a typo can never reach production.

## RSVP

Form posts to a third-party endpoint (Formspree / Netlify Forms). Set the URL in
`src/features/rsvp/RsvpForm.astro` (`action="..."`).
