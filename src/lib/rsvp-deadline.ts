import { type Locale, type TVars } from '~/i18n';
import { formatDayMonthYear } from '~/lib/date';
import { WEDDING } from '~/lib/wedding';

/** Fills `{deadline}` in copy, so the FAQ and the reminder always show the same date. */
export function rsvpDeadlineVars(locale: Locale): TVars {
  return { deadline: formatDayMonthYear(WEDDING.rsvpDeadline, locale) };
}
