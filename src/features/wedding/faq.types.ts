import { type Locale } from '~/i18n/locales';

export type FaqCategory = 'stay' | 'kids' | 'attire' | 'transport' | 'other';

export interface FaqEntry {
  /** Stable identifier — used as the anchor and accordion key. */
  id: string;
  category: FaqCategory;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

export const FAQ_CATEGORY_LABELS: Record<FaqCategory, Record<Locale, string>> = {
  stay: { nl: 'Accommodatie', es: 'Dónde alojarse', en: 'Where to stay' },
  kids: { nl: 'Kinderen', es: 'Niños', en: 'Kids' },
  attire: { nl: 'Dresscode', es: 'Qué llevar', en: 'What to wear' },
  transport: { nl: 'Vervoer', es: 'Transporte', en: 'Transport' },
  other: { nl: 'Overige vragen', es: 'Otras preguntas', en: 'Other questions' },
};
