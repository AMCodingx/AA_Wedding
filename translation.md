# Translation rules

How copy is written and translated on this site. Every string lives in
`src/i18n/{nl,en,es}.json` (see `claude.md`). This file says what goes in them.

## 1. Dutch leads

The Dutch text on the site is the rule. English and Spanish carry the same
meaning and the same tone. They are not word-for-word translations.

When you add or change copy: write the Dutch first, then translate it.

## 2. Tone

- Warm, informal, short sentences.
- It reads like a message from Alex & Anouk to a friend.
- Plain words. No marketing language.

## 3. A request is a sentence, not a question

When we ask guests to do something, write it as a sentence. No question mark.

| Do                                                         | Don't                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------- |
| Laat ons uiterlijk 1 februari 2027 weten of je erbij bent. | Laat je ons uiterlijk 1 februari 2027 weten of je erbij bent? |

## 4. Spanish is Dominican Spanish

Not Spain Spanish.

- Talk to one guest as **tú** (like the Dutch _je_).
- Talk to a group as **ustedes** (like the Dutch _jullie_). Never _vosotros_.
- No upside-down question mark on a request (see rule 3).

| Use (Dominican)      | Never (Spain)     |
| -------------------- | ----------------- |
| ok, entendido, listo | vale              |
| vale la pena         | merece la pena    |
| guagua               | autobús lanzadera |
| parquear             | aparcar           |
| silla de playa       | tumbona           |
| en vivo              | en directo        |
| económico            | asequible         |
| quedarse             | alojarse          |

## 5. English is British

British spelling and dates: _1 February 2027_, _colour_, _favourite_.

## 6. Dates

- Written out with the month name, in each language's own format:
  _1 februari 2027_ · _1 February 2027_ · _1 de febrero de 2027_.
- A date that comes from `src/lib/wedding.ts` is never typed into the copy.
  Use a placeholder such as `{deadline}` and pass the value from code, so the
  date lives in one place.

## 7. Names stay as they are

- Never translated: Alex & Anouk, venue names, restaurant and beach names.
- Spanish writes _Curazao_. Dutch and English write _Curaçao_.
