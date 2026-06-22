import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.enum(['nl', 'es', 'en']);

const faq = defineCollection({
  loader: glob({ base: './src/content/faq', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    question: z.string().min(2),
    category: z.enum(['stay', 'kids', 'attire', 'transport', 'other']),
    locale: localized,
    order: z.number().int().default(100),
  }),
});

const places = defineCollection({
  loader: glob({ base: './src/content/places', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    locale: localized,
    kind: z.enum(['hotel', 'apartment', 'guesthouse']),
    priceFromEUR: z.number().nonnegative(),
    walkingMinutes: z.number().int().nonnegative(),
    url: z.url(),
  }),
});

const activities = defineCollection({
  loader: glob({ base: './src/content/activities', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    locale: localized,
    tab: z.enum(['activities', 'culture', 'food', 'beaches']),
  }),
});

export const collections = { faq, places, activities };
