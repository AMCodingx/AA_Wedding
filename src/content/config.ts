import { defineCollection, z } from 'astro:content';

const localized = z.enum(['nl', 'es', 'en']);

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string().min(2),
    category: z.enum(['stay', 'kids', 'attire', 'transport', 'other']),
    locale: localized,
    order: z.number().int().default(100),
  }),
});

const places = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    locale: localized,
    kind: z.enum(['hotel', 'apartment', 'guesthouse']),
    priceFromEUR: z.number().nonnegative(),
    walkingMinutes: z.number().int().nonnegative(),
    url: z.string().url(),
  }),
});

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    locale: localized,
    tab: z.enum(['activities', 'culture', 'food', 'beaches']),
  }),
});

export const collections = { faq, places, activities };
