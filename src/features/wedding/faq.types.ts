import { type Locale } from '~/i18n/locales';

export interface FaqEntry {
  /** Stable identifier — used as the anchor and accordion key. */
  id: string;
  question: Record<Locale, string>;
  /** One string per paragraph. The card sets each as its own <p>. */
  answer: Record<Locale, string[]>;
}
