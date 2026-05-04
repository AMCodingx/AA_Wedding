# Fonts

Drop the WOFF2 files referenced by `src/styles/typography.css` here:

| File                            | Used for          | Source                                                                     |
|---------------------------------|-------------------|----------------------------------------------------------------------------|
| `reklame-script-regular.woff2`  | All page titles   | Reklame Script Regular (House Industries — supply your licensed copy)      |
| `poppins-variable.woff2`        | Subtitles + body  | Poppins Variable — https://fonts.google.com/specimen/Poppins, OFL          |

Two notes:

- **Reklame Script** is a commercial typeface. The site falls back gracefully to
  `Brush Script MT` / `Segoe Script` until you drop the WOFF2 in.
- **Poppins** is freely licensed under the OFL. The site uses ExtraLight (200) for
  body and SemiBold (600) for subtitles — both weights live inside the variable WOFF2.

Self-hosting avoids Google Fonts requests and keeps the LCP fast.
