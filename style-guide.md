# Visual Style Guide

A single page of truth for the wedding site's visual language.
Update this whenever a new primitive lands.

---

## 1. Color Palette

The site uses one warm, beach-inspired palette. **Components reference CSS
variables** — never raw hex. Re-theming is a one-file edit (`tokens.css`).

| Role         | Token            | Hex       | Notes                                     |
|--------------|------------------|-----------|-------------------------------------------|
| Page bg      | `--c-shell`      | `#F6EBDF` | Cream — the default `--bg`                |
| Surface      | `--c-mist`       | `#D8DDCD` | Sage neutral — sectional contrast         |
| Sand accent  | `--c-sand`       | `#EED7BC` | Warm support — gradients, blocks          |
| Foam         | `--c-sea-soft`   | `#A9D4C7` | Hover halos, soft pills, badges           |
| Sea          | `--c-sea`        | `#79C2B9` | Primary accent — buttons, links, focus    |
| Text         | `--text`         | `#1F3A38` | Deep teal-black, never `#000`             |
| Muted text   | `--text-muted`   | `#5A6E6B` | Secondary copy, captions                  |

**Contrast notes**

- `--accent` on white passes WCAG AA (large text only). For body, use `--text` over `--bg`.
- `--text` on `--c-shell` → ~12:1 — passes AAA. ✅
- `--accent` on `--c-shell` → fails. Use `--text` for body copy on shell.

---

## 2. Typography

| Role     | Stack                       | Token       |
|----------|-----------------------------|-------------|
| Body     | `Inter` → system sans        | `--font-body` |
| Display  | `Fraunces` → system serif    | `--font-display` |

**Type scale (fluid)** — `--fs-xs … --fs-2xl` clamp from mobile to desktop;
never hard-coded sizes.

- `h1` = `--fs-2xl` Fraunces 400 italic accents
- `h2` = `--fs-xl` Fraunces 500
- `h3` = `--fs-lg`
- `h4` = `--fs-base` semibold (Inter)
- Body = `--fs-base` Inter 400

---

## 3. Spacing & Radius

- Spacing follows a 4px base on a `--space-{1,2,3,4,6,8,12,16,24}` scale.
- Radii: `--radius-sm` 6px · `--radius-md` 12px · `--radius-lg` 20px ·
  `--radius-pill` 999px.
- Section vertical rhythm uses `<Section spacing="sm|md|lg">`. Default to `lg`.

---

## 4. Primitives

### Button (`Button.astro`)

- Variants: `primary` (sea on white), `outline`, `ghost`.
- Sizes: `sm | md | lg`. Pill-shaped. Hover lifts -1px.
- Always renders `<a>` if `href` is provided, otherwise `<button>`.

### Card (`Card.astro`)

- White elevated surface, 1px hairline border, `--radius-lg`.
- `elevation: "flat" | "sm" | "md"`. With `href`, becomes a link card and
  lifts on hover.

### Section (`Section.astro`)

- Wraps page content with consistent vertical rhythm and tone.
- Tones: `shell | mist | sand | sea | elevated`.
- `width="narrow"` constrains to ~48rem for prose-heavy pages.

### Accordion (`Accordion.astro`)

- Native `<details>/<summary>` — keyboard and screen-reader support is free.
- Pass `group="faq-stay"` to make siblings auto-collapse.

### Icon (`Icon.astro`)

- Inline SVG, 24×24 viewBox, `currentColor` strokes.
- Add new icons by appending to the `paths` map.

### LanguageSwitcher (`LanguageSwitcher.astro`)

- `<details>` dropdown with inline flag SVGs (`FlagES`, `FlagNL`).
- Switches to the equivalent route in the target locale (via `routeKey`).

---

## 5. Do / Don't

| ✅ Do                                       | ❌ Don't                                |
|--------------------------------------------|----------------------------------------|
| Use `var(--accent)` in CSS                 | Hardcode `#79C2B9`                     |
| Use `<Section>` for vertical rhythm        | Manually pad pages with `padding-block`|
| Add new icons to `Icon.astro`'s map        | Inline a one-off SVG in a feature      |
| Run text through `t()` for both locales    | Hardcode strings in components         |
| Use the `ROUTES` map for hrefs             | Hardcode `/es/la-boda/`                |

---

## 6. Motion

- Easing: `--ease-out` (default), `--ease-in-out` (back-and-forth).
- Durations: `--dur-fast` (150ms hover), `--dur-base` (280ms transitions),
  `--dur-slow` (600ms hero entrances).
- All durations collapse to `0ms` under `prefers-reduced-motion: reduce`.
