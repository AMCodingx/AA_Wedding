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
    id: 'rsvp-deadline',
    question: 'faq.rsvp-deadline.q',
    answer: ['rsvp.reminder.text'],
  },
  {
    id: 'where-to-stay',
    question: 'faq.where-to-stay.q',
    answer: ['faq.where-to-stay.a1', 'faq.where-to-stay.a2', 'faq.where-to-stay.a3'],
  },
  {
    id: 'kids-welcome',
    question: 'faq.kids-welcome.q',
    answer: ['faq.kids-welcome.a1', 'faq.kids-welcome.a2', 'faq.kids-welcome.a3'],
    contact: 'nanny',
  },
  {
    id: 'what-to-wear',
    question: 'faq.what-to-wear.q',
    answer: ['faq.what-to-wear.a1', 'faq.what-to-wear.a2', 'faq.what-to-wear.a3'],
  },
  {
    id: 'getting-there',
    question: 'faq.getting-there.q',
    answer: ['faq.getting-there.a1', 'faq.getting-there.a2'],
  },
  {
    id: 'car-rental',
    question: 'faq.car-rental.q',
    answer: ['faq.car-rental.a1'],
    contact: 'carRental',
  },
  {
    id: 'wedding-planner',
    question: 'faq.wedding-planner.q',
    answer: ['faq.wedding-planner.a1'],
    contact: 'planner',
  },
  {
    id: 'another-question',
    question: 'faq.another-question.q',
    answer: ['faq.another-question.a1'],
  },
];
