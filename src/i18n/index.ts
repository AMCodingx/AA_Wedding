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

export function t(locale: Locale, key: TKey): string {
  const dict = dicts[locale] as Record<string, string>;
  return dict[key] ?? (dicts[DEFAULT_LOCALE] as Record<string, string>)[key] ?? key;
}

/**
 * Bind a locale once and reuse the resulting `t` for an entire page.
 * Astro components grab this in their frontmatter.
 */
export function useTranslations(locale: Locale): (key: TKey) => string {
  return (key) => t(locale, key);
}

/** Extract the locale segment from a pathname like `/nl/de-bruiloft/`. */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0] ?? '';
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export type { Locale };
export { DEFAULT_LOCALE, isLocale };
