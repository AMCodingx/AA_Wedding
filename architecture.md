# Wedding Information Site — Architecture

> A bilingual (ES/NL), beach-inspired wedding website built on Astro.
> Performance-first, content-driven, zero-JS-by-default.

---

## 1. Goals & Non-Goals

**Goals**
- Lightning-fast static pages (LCP < 1.5s on 3G).
- Mobile-first, fully responsive (320px → 1920px+).
- Bilingual content (Spanish / Dutch) with persistent language preference.
- Warm, beachy, colorful aesthetic that feels personal — not corporate.
- Easy for the couple to update content without touching components.
- Accessible (WCAG AA), keyboard-navigable, screen-reader friendly.

**Non-Goals**
- No backend, no database, no CMS (content lives in `.md`/`.json`).
- No SPA routing — Astro's MPA model is faster and simpler.
- RSVP submission goes to a third-party form service (Formspree / Netlify Forms / Google Forms) — not self-hosted.

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 4+** | Islands architecture, ships ~0 JS by default, perfect for content sites |
| Language | **TypeScript** (strict) | Type-safe content, props, i18n keys |
| Styling | **CSS variables + scoped `<style>`** | Native, no runtime cost, theme-able |
| Content | **Astro Content Collections** + Markdown/MDX | Schema-validated, type-safe content |
| i18n | **Astro i18n routing** (`/es/`, `/nl/`) + JSON dictionaries | Built-in, SEO-friendly URLs |
| Icons | **Inline SVG** (flags, UI icons) | No icon-font weight, fully styleable |
| Images | **Astro `<Image />` + Sharp** | AVIF/WebP, lazy, responsive `srcset` |
| Fonts | **Self-hosted WOFF2** + `font-display: swap` | No FOUT flash, no Google Fonts request |
| Forms | **Formspree / Netlify Forms** | Zero backend, spam-protected |
| Hosting | **Netlify** or **Cloudflare Pages** | Free, edge CDN, atomic deploys |
| Tooling | **pnpm**, **Prettier**, **ESLint**, **Astro Check** | Standard, fast, reproducible |

**Why Astro over Next.js / Nuxt:** A wedding site is 95% static content. Astro renders to plain HTML at build time — no hydration tax, no framework JS shipped unless explicitly opted-in via an island. Lighthouse 100 is the default state, not the goal.

---

## 3. Folder Structure (Feature-Based)

```
wedding-site/
├── public/
│   ├── fonts/                    # self-hosted WOFF2
│   ├── images/                   # static, non-optimized assets (favicon, og-image)
│   └── robots.txt
│
├── src/
│   ├── assets/                   # images processed by Astro <Image />
│   │   ├── hero/
│   │   ├── beaches/
│   │   └── venue/
│   │
│   ├── components/
│   │   ├── ui/                   # primitive, reusable, dumb
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Section.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Accordion.astro      # used by FAQ
│   │   │   └── Icon.astro           # generic SVG sprite loader
│   │   │
│   │   └── layout/
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       ├── Nav.astro
│   │       └── LanguageSwitcher.astro   # dropdown w/ SVG flags
│   │
│   ├── features/                 # feature-scoped, self-contained
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── Countdown.astro
│   │   │   └── QuickLinks.astro
│   │   │
│   │   ├── wedding/
│   │   │   ├── WeddingDate.astro
│   │   │   ├── WeddingLocation.astro
│   │   │   ├── FAQ.astro              # ← maps to "Extra information / FAQ"
│   │   │   ├── faq.data.ts            # FAQ entries (where to stay, kids,
│   │   │   │                          #   what to wear, transport, other)
│   │   │   └── faq.types.ts
│   │   │
│   │   ├── travel/
│   │   │   ├── PlacesToStay.astro
│   │   │   ├── Activities.astro
│   │   │   ├── Culture.astro
│   │   │   ├── Food.astro
│   │   │   ├── Beaches.astro
│   │   │   └── places.data.ts
│   │   │
│   │   └── rsvp/
│   │       ├── RsvpForm.astro         # progressively-enhanced HTML form
│   │       ├── RsvpForm.client.ts     # only island that ships JS
│   │       └── rsvp.schema.ts         # zod schema (name, count, diet, etc.)
│   │
│   ├── content/                  # Astro Content Collections
│   │   ├── config.ts             # collection schemas (zod)
│   │   ├── faq/
│   │   │   ├── es/
│   │   │   └── nl/
│   │   ├── places/
│   │   │   ├── es/
│   │   │   └── nl/
│   │   └── activities/
│   │
│   ├── i18n/
│   │   ├── es.json               # UI strings for Spanish
│   │   ├── nl.json               # UI strings for Dutch
│   │   ├── index.ts              # t() helper, getLocale(), useTranslations()
│   │   └── locales.ts            # supported list, default, flag refs
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro      # <html>, meta, fonts, theme vars
│   │   └── PageLayout.astro      # BaseLayout + Header + Footer
│   │
│   ├── pages/                    # file-based routing (Astro)
│   │   ├── index.astro           # → /  (redirects to user's locale)
│   │   ├── es/
│   │   │   ├── index.astro              # Home
│   │   │   ├── la-boda/
│   │   │   │   ├── index.astro          # The Wedding
│   │   │   │   └── faq.astro
│   │   │   ├── viaje-y-alojamiento/
│   │   │   │   ├── index.astro
│   │   │   │   ├── donde-alojarse.astro
│   │   │   │   └── que-hacer.astro
│   │   │   └── confirmar.astro          # RSVP
│   │   └── nl/
│   │       ├── index.astro
│   │       ├── de-bruiloft/...
│   │       ├── reizen-en-verblijf/...
│   │       └── rsvp.astro
│   │
│   ├── styles/
│   │   ├── tokens.css            # CSS vars: colors, spacing, radius, shadows
│   │   ├── typography.css        # @font-face + type scale
│   │   ├── reset.css             # modern reset
│   │   ├── global.css            # imports all the above
│   │   └── styles.ts             # TS-side mirror of tokens (typed)
│   │
│   └── lib/                      # framework-agnostic utilities
│       ├── date.ts               # countdown, formatting per-locale
│       ├── url.ts                # locale-aware href() builder
│       └── seo.ts                # canonical, hreflang, og tags
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── style-guide.md                # ← visual reference for the couple/devs
├── claude.md                     # ← AI agent working notes
└── README.md
```

**Why feature-based:** Each section of the sitemap (Wedding / Travel / RSVP) owns its components, data, and types. You can delete a feature folder and the rest of the site keeps working. New devs (or future-you) find everything for "FAQ" in `features/wedding/`, not scattered across `components/`, `utils/`, `pages/`.

---

## 4. Color System (`styles/tokens.css` & `styles.ts`)

Single source of truth — defined once in CSS, mirrored as typed constants in TS.

```css
/* src/styles/tokens.css */
:root {
  /* —— Brand palette (from couple's reference) —— */
  --c-sea:        #79C2B9;   /* primary teal — water */
  --c-sea-soft:   #A9D4C7;   /* secondary teal — foam */
  --c-mist:       #D8DDCD;   /* sage neutral — sea glass */
  --c-sand:       #EED7BC;   /* warm sand */
  --c-shell:      #F6EBDF;   /* cream — page background */

  /* —— Functional aliases (use these in components) —— */
  --bg:           var(--c-shell);
  --bg-elevated:  #FFFFFF;
  --surface:      var(--c-mist);
  --accent:       var(--c-sea);
  --accent-soft:  var(--c-sea-soft);
  --warm:         var(--c-sand);

  --text:         #1F3A38;     /* deep teal-black, NOT pure black */
  --text-muted:   #5A6E6B;
  --text-on-accent:#FFFFFF;

  --border:       rgba(31, 58, 56, 0.12);
  --shadow-sm:    0 1px 2px rgba(31, 58, 56, 0.06);
  --shadow-md:    0 8px 24px rgba(31, 58, 56, 0.10);
  --shadow-lg:    0 24px 48px rgba(31, 58, 56, 0.14);

  /* —— Spacing (4px base) —— */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;  --space-8: 2rem;
  --space-12: 3rem;    --space-16: 4rem;   --space-24: 6rem;

  /* —— Radius —— */
  --radius-sm: 6px;  --radius-md: 12px;  --radius-lg: 20px;  --radius-pill: 999px;

  /* —— Type scale (fluid) —— */
  --fs-xs:  clamp(0.75rem, 0.7rem + 0.2vw, 0.85rem);
  --fs-sm:  clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
  --fs-base:clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  --fs-lg:  clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --fs-xl:  clamp(1.75rem, 1.4rem + 1.2vw, 2.5rem);
  --fs-2xl: clamp(2.5rem, 1.8rem + 3vw, 4.5rem);

  /* —— Motion —— */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;  --dur-base: 280ms;  --dur-slow: 600ms;
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-fast: 0ms; --dur-base: 0ms; --dur-slow: 0ms; }
}
```

```ts
// src/styles/styles.ts — typed mirror, for use in TS/JS where needed
export const colors = {
  sea:     '#79C2B9',
  seaSoft: '#A9D4C7',
  mist:    '#D8DDCD',
  sand:    '#EED7BC',
  shell:   '#F6EBDF',
  text:    '#1F3A38',
} as const;

export type ColorToken = keyof typeof colors;

export const space = (n: 1|2|3|4|6|8|12|16|24) => `var(--space-${n})`;
export const radius = (s: 'sm'|'md'|'lg'|'pill') => `var(--radius-${s})`;
```

**Rule:** Components NEVER hardcode hex values. They reference `var(--accent)`, `var(--surface)`, etc. Re-theming = edit `tokens.css` once.

---

## 5. Component Principles (SOLID / DRY / KISS)

1. **Single Responsibility** — `Button.astro` styles a button. It does not know about the FAQ. `FAQ.astro` composes `Accordion` + `Section`; it doesn't redefine them.
2. **Small** — Target < 80 lines per component. If it grows, split it.
3. **Props-driven, not config-driven** — `<Button variant="primary" size="lg">`, not a global theme object passed everywhere.
4. **Composition over inheritance** — `<Section><Card>...</Card></Section>` beats a monolithic `<SectionWithCardsAndTitle>`.
5. **Dumb UI, smart features** — `components/ui/*` know nothing about the wedding. `features/*` import them and add domain meaning.
6. **One way to do each thing** — One Button, one Card, one Section. No `PrimaryButton` AND `BigButton` AND `CTAButton`. Use props.

**Example primitive:**

```astro
---
// src/components/ui/Button.astro
interface Props {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
}
const { variant = 'primary', size = 'md', href, type = 'button' } = Astro.props;
const Tag = href ? 'a' : 'button';
---
<Tag class={`btn btn--${variant} btn--${size}`} href={href} type={!href ? type : undefined}>
  <slot />
</Tag>

<style>
  .btn {
    display: inline-flex; align-items: center; gap: var(--space-2);
    border-radius: var(--radius-pill);
    font-weight: 600;
    transition: transform var(--dur-fast) var(--ease-out),
                background var(--dur-fast) var(--ease-out);
    border: 1px solid transparent;
  }
  .btn--primary { background: var(--accent); color: var(--text-on-accent); }
  .btn--ghost   { background: transparent;   color: var(--text); }
  .btn--outline { background: transparent;   color: var(--text); border-color: var(--border); }
  .btn--sm { padding: var(--space-2) var(--space-4); font-size: var(--fs-sm); }
  .btn--md { padding: var(--space-3) var(--space-6); font-size: var(--fs-base); }
  .btn--lg { padding: var(--space-4) var(--space-8); font-size: var(--fs-lg); }
  .btn:hover { transform: translateY(-1px); }
</style>
```

---

## 6. Sitemap → Routes Mapping

Mirrors the diagram you provided.

| Sitemap Node | Spanish Route | Dutch Route |
|---|---|---|
| Home | `/es/` | `/nl/` |
| The Wedding | `/es/la-boda/` | `/nl/de-bruiloft/` |
| ↳ Date | section on Wedding page | section on Wedding page |
| ↳ Location | section on Wedding page | section on Wedding page |
| ↳ Extra info / FAQ | `/es/la-boda/faq` | `/nl/de-bruiloft/faq` |
|   ↳ Where to stay, Kids, What to wear, Transportation, Other questions | accordion items | accordion items |
| Travel & Stay | `/es/viaje-y-alojamiento/` | `/nl/reizen-en-verblijf/` |
| ↳ Places to stay | `/es/viaje-y-alojamiento/donde-alojarse` | `/nl/reizen-en-verblijf/accommodatie` |
| ↳ Things to do | `/es/viaje-y-alojamiento/que-hacer` | `/nl/reizen-en-verblijf/activiteiten` |
|   ↳ Activities, Culture, Food, Beaches | tabs / sections on page | tabs / sections on page |
| RSVP | `/es/confirmar` | `/nl/rsvp` |

**FAQ items** live in `features/wedding/faq.data.ts` (or as content collection entries) — adding a new question is a one-line change, no component edits.

---

## 7. Internationalization (ES / NL)

- **URL-based**: locale prefix every route (`/es/...`, `/nl/...`). Best for SEO.
- **Default locale**: detect from `Accept-Language`, fall back to `es`. Persist choice in `localStorage` (`wedding.locale`).
- **Language switcher**: dropdown in the header showing flag SVGs (🇪🇸 🇳🇱) — inline SVG components, not emoji, not images.
- **Strings**: `src/i18n/{es,nl}.json` for UI labels. Long-form content lives in Astro Content Collections per locale.
- **Type-safe `t()` helper**: keys are typed off the ES JSON; adding a key without a NL translation fails the build.

```ts
// src/i18n/index.ts
import es from './es.json';
import nl from './nl.json';
const dicts = { es, nl } as const;
export type Locale = keyof typeof dicts;
export type TKey = keyof typeof es;
export const t = (locale: Locale, key: TKey): string => dicts[locale][key] ?? es[key];
```

```astro
---
// src/components/layout/LanguageSwitcher.astro
import FlagES from './flags/FlagES.astro';
import FlagNL from './flags/FlagNL.astro';
const { current } = Astro.props as { current: 'es' | 'nl' };
---
<details class="lang">
  <summary aria-label="Change language">
    {current === 'es' ? <FlagES /> : <FlagNL />}
    <span>{current.toUpperCase()}</span>
  </summary>
  <ul role="menu">
    <li><a href="/es/" hreflang="es"><FlagES /> Español</a></li>
    <li><a href="/nl/" hreflang="nl"><FlagNL /> Nederlands</a></li>
  </ul>
</details>
```

Each flag is its own tiny `.astro` component returning inline `<svg>` — fully styleable, no network request, ~400 bytes each.

---

## 8. Performance Budget

| Metric | Target |
|---|---|
| LCP (mobile, 3G) | < 1.5 s |
| CLS | < 0.05 |
| Total JS shipped (home) | < 5 KB |
| Total JS shipped (RSVP page) | < 20 KB (form island only) |
| Total CSS | < 30 KB gzipped |
| Lighthouse Perf / A11y / Best / SEO | 95+ / 100 / 100 / 100 |

**How we get there:**
- Astro ships zero JS by default — only the RSVP form is a `client:visible` island.
- `<Image />` for everything → AVIF/WebP, intrinsic dimensions (no CLS), lazy by default.
- Self-hosted WOFF2 with `font-display: swap` and `<link rel="preload">` for the display font.
- One CSS file, scoped styles inlined into HTML by Astro's built-in CSS handling.
- No analytics / no third-party JS. (If needed later: Plausible, async, < 1 KB.)

---

## 9. Accessibility

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, one `<h1>` per page.
- Skip-to-content link.
- Focus rings preserved (never `outline: none` without a replacement).
- All color pairs tested for WCAG AA (4.5:1 body, 3:1 large text). The teal `--accent` on white passes; on `--shell` it does not — use `--text` color on shell backgrounds.
- FAQ accordion uses native `<details>/<summary>` — keyboard + screen reader support is free.
- Form inputs have `<label>`, `aria-describedby` for hints, error messages live in `role="alert"` regions.
- `prefers-reduced-motion` respected (see tokens).

---

## 10. RSVP Form

The only interactive piece. Progressive enhancement:
1. Works as a plain HTML POST to Formspree / Netlify Forms with **JS disabled**.
2. With JS, validation (zod) runs client-side, success state shown inline, no page reload.
3. Captured fields (per the sitemap note): name, attending y/n, party size, dietary restrictions, accommodation status, transport needs, arrival date.

```ts
// src/features/rsvp/rsvp.schema.ts
import { z } from 'zod';
export const rsvpSchema = z.object({
  name: z.string().min(2),
  attending: z.enum(['yes', 'no']),
  guests: z.number().int().min(0).max(10),
  diet: z.string().max(280).optional(),
  staying: z.enum(['hotel', 'airbnb', 'with-family', 'other']).optional(),
  transport: z.boolean().optional(),
  arrival: z.string().optional(), // ISO date
  message: z.string().max(500).optional(),
});
export type RsvpInput = z.infer<typeof rsvpSchema>;
```

---

## 11. Content Workflow (for the couple)

Non-developer edits land in two places, both plain text:

- **`src/i18n/es.json` / `nl.json`** — UI labels (button text, nav items).
- **`src/content/**/*.md`** — long-form: FAQ answers, place descriptions, activity write-ups.

Each content file has frontmatter validated by zod schema (`src/content/config.ts`). Bad content → build fails → never deployed broken.

---

## 12. Quality Gates

Run on every commit (Husky + lint-staged) and in CI:

```
pnpm astro check     # type-check .astro + .ts
pnpm tsc --noEmit    # strict TS
pnpm prettier --check .
pnpm eslint .
pnpm build           # must succeed; broken content fails here
```

---

## 13. Companion Documents

- **`style-guide.md`** — living visual reference: color swatches with hex + token name, type scale specimens, button/card/section examples rendered as screenshots, do/don't pairs. Updated whenever a new primitive lands.
- **`claude.md`** — agent working notes: project conventions, "when adding a new FAQ item, edit X", "never hardcode colors", commit message format, current TODOs. The first file an AI assistant or new dev should read.

---

## 14. Deployment

- **Netlify** (recommended): connect repo → auto-deploy on push to `main`, preview deploys per PR, free Forms tier handles RSVP.
- **Domain**: custom domain via Netlify DNS, automatic Let's Encrypt cert.
- **Env**: no secrets needed for the static site itself; Formspree endpoint is public.

---

## 15. Roadmap (Suggested Build Order)

1. Scaffold Astro + TS, set up `tokens.css` + `styles.ts`, base layout, header/footer.
2. Build the UI primitives: Button, Card, Section, Accordion, Icon, LanguageSwitcher (with flag SVGs).
3. i18n plumbing + ES/NL JSON dictionaries, locale routing.
4. Home page: Hero, Countdown, QuickLinks.
5. Wedding section: Date, Location, FAQ (accordion driven by `faq.data.ts`).
6. Travel & Stay: Places to stay, Things to do (Activities / Culture / Food / Beaches).
7. RSVP form (HTML-first, then enhance with the one client island).
8. SEO polish: hreflang, OG images, sitemap.xml, robots.txt.
9. Performance audit → ship.
