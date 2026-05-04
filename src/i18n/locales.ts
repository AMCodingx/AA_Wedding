export const LOCALES = ['nl', 'es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'nl';

export const LOCALE_LABELS: Record<Locale, string> = {
  nl: 'Nederlands',
  es: 'Español',
  en: 'English',
};

export const LOCALE_BCP47: Record<Locale, string> = {
  nl: 'nl-NL',
  es: 'es-ES',
  en: 'en-GB',
};

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);
