import nl from './nl.json';
import es from './es.json';
import en from './en.json';
import { DEFAULT_LOCALE, isLocale, type Locale } from './locales';

const dicts = { nl, es, en } as const;

/**
 * Translation key set is derived from the default-locale dictionary,
 * so adding a key without a matching translation in another locale
 * fails the type-check rather than crashing in production.
 */
export type TKey = keyof typeof nl;

/** Values for `{name}` placeholders in a translation, e.g. `{ deadline: '1 februari 2027' }`. */
export type TVars = Readonly<Record<string, string>>;

export function t(locale: Locale, key: TKey, vars?: TVars): string {
  const dict = dicts[locale] as Record<string, string>;
  const text = dict[key] ?? (dicts[DEFAULT_LOCALE] as Record<string, string>)[key] ?? key;
  return vars ? fillPlaceholders(text, vars) : text;
}

function fillPlaceholders(text: string, vars: TVars): string {
  return text.replace(/\{(\w+)\}/g, (placeholder, name: string) => vars[name] ?? placeholder);
}

/** The text before and after `{name}`, for a value that needs its own markup. Fails the build unless it appears exactly once. */
export function splitAtPlaceholder(text: string, name: string): readonly [string, string] {
  const placeholder = `{${name}}`;
  const parts = text.split(placeholder);
  if (parts.length !== 2) {
    throw new Error(`Expected exactly one ${placeholder} in: "${text}"`);
  }
  return [parts[0], parts[1]];
}

/**
 * Bind a locale once and reuse the resulting `t` for an entire page.
 * Astro components grab this in their frontmatter.
 */
export function useTranslations(locale: Locale): (key: TKey, vars?: TVars) => string {
  return (key, vars) => t(locale, key, vars);
}

/** Extract the locale segment from a pathname like `/nl/de-bruiloft/`. */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0] ?? '';
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export type { Locale };
export { DEFAULT_LOCALE, isLocale };
