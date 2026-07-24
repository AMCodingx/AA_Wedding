# Fonts

Self-hosted WOFF2 files referenced by `src/styles/typography.css`. Both
families are OFL-licensed and committed to the repo (latin + latin-ext
subsets, split by `unicode-range`).

| Files                                   | Used for         | Source                                                            |
|-----------------------------------------|------------------|------------------------------------------------------------------|
| `dancing-latin*.woff2`                  | All page titles  | Dancing Script (weight 500–700) — Google Fonts, OFL              |
| `poppins-{300,400,500,600}-latin*.woff2`| Subtitles + body | Poppins — https://fonts.google.com/specimen/Poppins, OFL         |

Notes:

- **Dancing Script** is the display/title face (`--font-display`). Weight range
  500–700 covers the variable headings.
- **Poppins** powers body (ExtraLight/Regular) and subtitles (SemiBold 600).
- Self-hosting avoids Google Fonts requests and keeps the LCP fast. The two
  latin subsets are preloaded in `BaseLayout.astro`; latin-ext loads on demand.
