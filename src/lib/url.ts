import { type Locale } from '~/i18n/locales';

/** Locale-aware path prefix. Always trailing-slash to match Astro config. */
export function localePath(locale: Locale, path = ''): string {
  const trimmed = path.replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${locale}/${trimmed}/` : `/${locale}/`;
}

/**
 * Page-level route table. Adding a new page = one entry; components
 * always go through this map instead of hard-coding strings.
 */
export const ROUTES = {
  home:    { nl: '', es: '', en: '' },
  wedding: { nl: 'de-bruiloft', es: 'la-boda', en: 'the-wedding' },
  tips:    { nl: 'onze-tips', es: 'nuestros-consejos', en: 'our-tips' },
  faq:     { nl: 'faq', es: 'faq', en: 'faq' },
  rsvp:    { nl: 'rsvp', es: 'confirmar', en: 'rsvp' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export function href(locale: Locale, key: RouteKey): string {
  return localePath(locale, ROUTES[key][locale]);
}
