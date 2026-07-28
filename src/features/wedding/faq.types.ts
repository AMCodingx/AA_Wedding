import { type TKey } from '~/i18n';

export interface FaqEntry {
  /** Stable identifier — used as the anchor and accordion key. */
  id: string;
  /** Translation key for the question. */
  question: TKey;
  /** One translation key per paragraph. The card renders each as its own <p>. */
  answer: readonly TKey[];
}
