import { type Locale, type TVars } from '~/i18n';
import { formatDayMonthYear } from '~/lib/date';
import { WEDDING } from '~/lib/wedding';

const DEADLINE_PLACEHOLDER = '{deadline}';

/** Fills `{deadline}` in copy, so the FAQ and the reminder always show the same date. */
export function rsvpDeadlineVars(locale: Locale): TVars {
  return { deadline: formatDayMonthYear(WEDDING.rsvpDeadline, locale) };
}

/** The text before and after `{deadline}`, so the date can be styled on its own. Fails the build if it is missing. */
export function splitAtDeadline(text: string): readonly [string, string] {
  const parts = text.split(DEADLINE_PLACEHOLDER);
  if (parts.length !== 2) {
    throw new Error(`Expected exactly one ${DEADLINE_PLACEHOLDER} in: "${text}"`);
  }
  return [parts[0], parts[1]];
}
