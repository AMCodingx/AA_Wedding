# Notes for AI assistants & new contributors

Read me before touching code. The full design rationale lives in
`architecture.md`; this file is the operational cheat-sheet.

## Conventions

- **Tooling.** Use **Bun**, not npm/pnpm. `bun install`, `bun run dev`.
- **Never hardcode colors, sizes, or spacing.** Reference CSS vars from
  `src/styles/tokens.css`. If you need a new token, add it there first.
- **Never hardcode strings.** Add the key to `src/i18n/es.json` (the
  type-source) and `nl.json`, then use `t('your.key')`.
- **Never hardcode hrefs.** Use `href(locale, 'routeKey')` from
  `src/lib/url.ts`. Adding a new page = one entry in the `ROUTES` map.
- **Components are dumb, features are smart.** `src/components/ui/*`
  must not import anything from `~/i18n`, `~/lib/wedding`, or feature
  folders. They take props.
- **Every page passes a `routeKey`** to `<PageLayout>` so hreflang and
  the `LanguageSwitcher` work.

## Where things live

| You want to…                         | Edit                                      |
|--------------------------------------|-------------------------------------------|
| Add a new FAQ item                   | `src/features/wedding/faq.data.ts`        |
| Add a new place to stay              | `src/features/travel/places.data.ts`      |
| Add a "things to do" highlight       | `src/features/travel/places.data.ts`      |
| Change wedding date / venue          | `src/lib/wedding.ts`                      |
| Change a button label                | `src/i18n/{es,nl}.json`                   |
| Add a new colour                     | `src/styles/tokens.css` (+ `styles.ts`)   |
| Add a new icon                       | `src/components/ui/Icon.astro` paths map  |
| Add a new page                       | `src/pages/<locale>/...` + `ROUTES` entry |

## RSVP

- Endpoint is hardcoded in `RsvpForm.astro` — replace
  `https://formspree.io/f/your-id` with the real one before going live.
- The form is the only JS island on the site; the rest is static HTML.

## Quality gates

```sh
bun run check     # astro check + tsc
bun run lint
bun run build     # fails on bad content frontmatter
```

## Commit messages

Conventional-ish: `feat(faq): add transport question`, `fix(rsvp): clear
form on success`, `chore(deps): bump astro`.

## Do not

- Do not introduce a UI framework (React, Vue, Svelte). The site is
  islands-on-demand only — reach for an island only when interactivity
  cannot be done with native HTML/CSS.
- Do not pull in icon fonts or `lucide-react`. Add SVG paths to
  `Icon.astro` instead.
- Do not add Google Fonts `<link>` tags. Self-host in `public/fonts/`.
- Do not add analytics without checking with the couple — they value
  privacy and a clean network panel.
