# Design

Why the site looks the way it does. `architecture.md` covers structure and
`style-guide.md` catalogues the primitives — this file is the **design
rationale**: the source of truth, the rules that follow from it, and the
places where the codebase has not caught up yet.

---

## 1. The card is the source of truth

The couple designed their invitation in Canva. That card — not a mood board,
not a component library — is what the site has to look like. It lives at
`design/AA-wedding-card.png`, and the written direction behind it is
`design/watercolor-tradewinds-philosophy.md`.

Everything downstream follows from one rule:

> **When the site and the card disagree, the card wins.**

Two consequences worth knowing before you touch the hero:

- **The names and monogram are outlined vector, not a webfont.** Canva's
  "Feeling Passionate" is licensed and cannot be self-hosted. Both strings are
  fixed forever, so they ship as SVG paths in `src/assets/brand/` — exact, and
  smaller than the script face would have been. Do not try to "fix" this by
  finding a lookalike font.
- **The hero is a card, not a page section.** See §4.

---

## 2. Palette

Two families coexist. This is deliberate but **unfinished** — see §7.

### Card teals (current direction)

Sampled from the Canva card. Cooler than the original palette on purpose.

| Token | Value | Role |
|---|---|---|
| `--c-lagoon` | `#285260` | Names, CURAÇAO, monogram, nav links. The dark voice. |
| `--c-tide` | `#548C92` | Rules, waves, dividers, icons. |
| `--c-tide-deep` | `#477F85` | **Only** where white text sits on tide — see §6. |
| `--c-foam` | `#CBDFE2` | Bottom of the hero ramp, selected states, header-control hover wash. |

### Legacy sea family (pre-card)

| Token | Value | Role |
|---|---|---|
| `--c-sea` | `#79C2B9` | Still aliased to `--accent`. **Fails contrast as text** — §7. |
| `--c-sea-soft` | `#A9D4C7` | Still aliased to `--accent-soft`. |
| `--c-mist` | `#D8DDCD` | Sage neutral, `--surface`. |
| `--c-sand` | `#EED7BC` | Warm sand. |
| `--c-shell` | `#F6EBDF` | Page background, `--bg`. |

`src/styles/styles.ts` is a typed mirror of these for the rare case TS needs a
literal (inline SVG fills, generated metadata). It is a mirror, not a second
source — if you change one, change both. It has drifted before.

---

## 3. Type

| Role | Face | Weight |
|---|---|---|
| Titles | Dancing Script | 500–700 |
| Subtitles | Poppins SemiBold | 600 |
| Body | Poppins ExtraLight | 200 |

Self-hosted in `public/fonts/`, latin + latin-ext split by `unicode-range`.
No Google Fonts `<link>`. The `@font-face` blocks in `typography.css` are a
contract: never point one at a file that isn't in the folder.

Small caps-and-tracking is the site's second voice — `CURAÇAO`, `SEE DETAILS`
and other Poppins-600 labels carry `letter-spacing: 0.18–0.28em` with a
matching `text-indent`. **The `text-indent` is not decoration**: tracking adds
a trailing space after the last letter, which pushes centred text visibly
left. Indenting by the same amount cancels it. Copy both or neither.

---

## 4. The hero scales as one card

On phones the hero is a single card scaled to the largest size that fits the
viewport, then centred. Every measurement inside is a fraction of `--card-w`
/ `--card-h`, which derive from the viewport:

```css
--card-h: max(37rem, min(100dvh, 100vw / 0.4621));
--card-w: calc(var(--card-h) * 0.4621);
```

`0.4621` is the card's own aspect. Because everything is a fraction of these,
the hero fits any phone **without a breakpoint** and never scrolls. The
`37rem` floor is a deliberate trade: below it the card outgrows the viewport
and scrolling returns, which beats type shrinking into illegibility.

Height derives first, then width. Going via the width and back loses a
fraction of a pixel to the aspect round-trip and leaves the page one pixel
scrollable.

At `≥768px` this model is switched off entirely — two columns, normal
container, portrait left and the card stack right.

---

## 5. Optical alignment beats geometric alignment

The rule that produced the most visible bug on this site:

> **Centre what people see, not what the box measures.**

`couple-watercolor.png` is 1344×1008, but its painted area is 1125×984 —
inset **10.94% left vs 5.36% right**, and **2.38% top vs 0% bottom**. The
transparent bleed is asymmetric. So centring the element put the *picture*
17px right of centre and 4px low, and 16% of the width was dead space, which
is why it read as too small.

The fix lives in `Hero.astro` as three custom properties:

```css
--paint-dx: -2.75%;   /* opaque centre sits 2.75% right of box centre */
--paint-dy: -1.14%;   /* …and 1.14% below                             */
--paint-scale: 0.837; /* fraction of the box the paint actually covers */
```

Width is then set from the size the **picture** should be
(`width: calc(min(28.5rem, 36vw) / var(--paint-scale))`), so the number in
the stylesheet is the number you see on screen.

Two traps:

- The compensation goes on the `img`, **not** the `figure`. `.hero__media`
  runs the `hero-rise` entrance animation, which lands on `transform: none`
  and would silently wipe it.
- `sizes` must track the CSS width. If it doesn't, the browser picks a
  candidate too small for the slot and upscales it.

If the artwork is ever re-exported, trim it and delete all three properties.

---

## 6. Contrast is a design constraint, not a review step

Measured, not eyeballed (`--text-on-accent` is `#FFFFFF`):

| Pair | Ratio | |
|---|---|---|
| `lagoon` on `white` | 8.52:1 | ✅ |
| `lagoon` on `shell` | 7.25:1 | ✅ |
| `lagoon` on `foam` | 6.16:1 | ✅ |
| `text` on `shell` | 10.38:1 | ✅ |
| `textMuted` on `shell` | 4.61:1 | ✅ (only just) |
| white on `tide-deep` | 4.52:1 | ✅ |
| white on `tide` | 3.79:1 | ⚠️ large text only |
| `sea` on `shell` | 1.75:1 | ❌ |
| `sea` on `white` | 2.05:1 | ❌ |
| `sea` on `sea-soft` | 1.26:1 | ❌ |

**Why `--c-tide-deep` exists.** The hero CTA is small type (`--fs-xs`), so it
needs 4.5:1, and tide gives 3.79:1. Rather than restyle the card, tide is
darkened by ~4% for that one job. Use `--c-tide-deep` **only** under white
text; `--c-tide` stays the brand value everywhere else.

The bottom three rows are the legacy sea green. It is fine as a wash or a
background and **fails as text at every size**. That is not a theoretical
finding — pa11y reports exactly 1.75 / 2.05 / 1.26 on live pages today.

---

## 7. `--accent` is a wash, `--accent-text` is a voice

The old sea green survives as `--accent`, and it is genuinely fine as a fill,
a border or a wash. It fails as **text** at every size — 1.75:1 on `--bg`,
2.05:1 on white, 1.26:1 on `--accent-soft`. That single alias accounted for
every WCAG AA failure the site had.

Rather than retarget it — `--accent` is also a background in eleven
components, and flipping it from a light wash to a dark fill would restyle
all of them — the roles were split:

```css
--accent: var(--c-sea);         /* fills, borders, washes  */
--accent-text: var(--c-lagoon); /* anything that paints letters */
```

Six rules moved to `--accent-text`: `.faq__cat-num`, `.note__kicker`,
`.directive__name`, `.checklist__num`, `.save-date__weekday`, and the checked
state of `.tips__pill`.

`.tips__pill` is the instructive one. It was not accent-coloured text — it was
**white text on an accent fill**, 2.05:1. It is the only `--accent` background
that carries type, so it is the only background that had to move. That is the
test to apply: *does this surface have words on it?*

> **The rule: `--accent` may not touch text — neither as the letters nor as
> the surface behind them. Use `--accent-text` for both.**

pa11y at WCAG2AA now reports **0 errors on all seven pages** (`/en/`, `/nl/`,
`/es/`, `/en/rsvp/`, `/en/faq/`, `/en/our-tips/`, `/en/the-wedding/`).

---

## 8. Motion

One pass on load, no loops, nothing that runs while the page sits idle.

The hero assembles in the order an invitation is read — names, portrait,
divider, venue, date, wave, CTA — on a 50→550ms stagger. Durations and easings
come from tokens (`--dur-fast|base|slow`, `--ease-out`, `--ease-in-out`), and
`prefers-reduced-motion: reduce` sets all three durations to `0ms` at the
`:root`, so honouring it is automatic rather than per-component.

Exits should be quicker and quieter than entrances.

---

## 9. Rules

- Reference tokens. Never hardcode a colour, size or spacing value.
- `--accent` never touches text — not the letters, not the surface behind
  them. `--accent-text` does both (§7).
- Copy `text-indent` wherever you copy `letter-spacing` (§3).
- Size images by their **paint**, and keep `sizes` in step with the CSS (§5).
- 44px is an absolute floor for touch targets — it does not scale with the card.
- An accessible name must contain the visible label. The language switcher
  reads `"Language: EN"`, not `"Language"`, so voice control can reach it.
- Decorative art gets `fetchpriority="low"`. The palm was winning the LCP race
  against the portrait.
- No UI framework, no icon fonts, no Google Fonts tags, no analytics.
