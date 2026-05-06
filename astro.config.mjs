// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://wedding.example.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // The root `/` is a client-side locale redirect — exclude it.
      filter: (page) => new URL(page).pathname !== '/',
      i18n: {
        defaultLocale: 'nl',
        locales: { nl: 'nl-NL', es: 'es-ES', en: 'en-GB' },
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
