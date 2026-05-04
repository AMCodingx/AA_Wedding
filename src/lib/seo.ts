import { LOCALES, type Locale } from '~/i18n/locales';
import { ROUTES, type RouteKey, localePath } from './url';

export interface SeoMeta {
  title: string;
  description: string;
  canonical: URL;
  ogImage?: URL;
  hreflang: Array<{ locale: Locale; href: string }>;
}

export interface BuildSeoArgs {
  site: URL | string;
  pathname: string;
  locale: Locale;
  routeKey?: RouteKey;
  title: string;
  description: string;
  ogImage?: string;
}

export function buildSeo({
  site,
  pathname,
  routeKey,
  title,
  description,
  ogImage,
}: BuildSeoArgs): SeoMeta {
  const origin = typeof site === 'string' ? new URL(site) : site;
  const canonical = new URL(pathname, origin);

  const hreflang = routeKey
    ? LOCALES.map((l) => ({
        locale: l,
        href: new URL(localePath(l, ROUTES[routeKey][l]), origin).toString(),
      }))
    : LOCALES.map((l) => ({ locale: l, href: new URL(`/${l}/`, origin).toString() }));

  return {
    title,
    description,
    canonical,
    ogImage: ogImage ? new URL(ogImage, origin) : undefined,
    hreflang,
  };
}

export const SITE_NAME = 'Alex & Anouk';
