import { type TKey } from '~/i18n';
import { type ContactKey } from '~/lib/contact';

export interface FaqEntry {
  /** Stable identifier — used as the anchor and accordion key. */
  id: string;
  /** Translation key for the question. */
  question: TKey;
  /** One translation key per paragraph. The card renders each as its own <p>. */
  answer: readonly TKey[];
  /** Whose number fills `{phone}` in the answer, rendered as a WhatsApp link. */
  contact?: ContactKey;
}
