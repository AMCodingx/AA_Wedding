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
  home: { nl: '', es: '', en: '' },
  wedding: { nl: 'de-bruiloft', es: 'la-boda', en: 'the-wedding' },
  weddingFaq: {
    nl: 'de-bruiloft/faq',
    es: 'la-boda/faq',
    en: 'the-wedding/faq',
  },
  travel: {
    nl: 'reizen-en-verblijf',
    es: 'viaje-y-alojamiento',
    en: 'travel-and-stay',
  },
  travelPlaces: {
    nl: 'reizen-en-verblijf/accommodatie',
    es: 'viaje-y-alojamiento/donde-alojarse',
    en: 'travel-and-stay/where-to-stay',
  },
  travelThings: {
    nl: 'reizen-en-verblijf/activiteiten',
    es: 'viaje-y-alojamiento/que-hacer',
    en: 'travel-and-stay/things-to-do',
  },
  rsvp: { nl: 'rsvp', es: 'confirmar', en: 'rsvp' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export function href(locale: Locale, key: RouteKey): string {
  return localePath(locale, ROUTES[key][locale]);
}
