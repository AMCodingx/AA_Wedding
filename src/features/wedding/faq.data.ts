import { type FaqEntry } from './faq.types';

/**
 * The manifest, not the copy — every string lives in `src/i18n/*.json`.
 * To add an FAQ: add `faq.<id>.q` and `faq.<id>.aN` to all three
 * dictionaries, then append the entry here. The accordion picks it up.
 *
 * Keep IDs stable — they become URL anchors people may share.
 */
export const FAQ_ENTRIES: readonly FaqEntry[] = [
  {
    id: 'where-to-stay',
    question: 'faq.where-to-stay.q',
    answer: ['faq.where-to-stay.a1', 'faq.where-to-stay.a2', 'faq.where-to-stay.a3'],
  },
  {
    id: 'kids-welcome',
    question: 'faq.kids-welcome.q',
    answer: ['faq.kids-welcome.a1', 'faq.kids-welcome.a2'],
  },
  {
    id: 'what-to-wear',
    question: 'faq.what-to-wear.q',
    answer: ['faq.what-to-wear.a1', 'faq.what-to-wear.a2'],
  },
  {
    id: 'getting-there',
    question: 'faq.getting-there.q',
    answer: ['faq.getting-there.a1', 'faq.getting-there.a2'],
  },
  {
    id: 'rsvp-deadline',
    question: 'faq.rsvp-deadline.q',
    answer: ['faq.rsvp-deadline.a1', 'faq.rsvp-deadline.a2'],
  },
  {
    id: 'another-question',
    question: 'faq.another-question.q',
    answer: ['faq.another-question.a1'],
  },
];
