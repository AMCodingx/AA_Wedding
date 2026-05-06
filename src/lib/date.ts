import { LOCALE_BCP47, type Locale } from '~/i18n/locales';

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function countdownTo(target: Date, now: Date = new Date()): CountdownParts {
  const diffMs = target.getTime() - now.getTime();
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  const totalSeconds = Math.floor(diffMs / 1000);
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
    isPast: false,
  };
}

/** Curaçao is AST (UTC-4), no DST. Wedding-day times are pinned to local. */
const VENUE_TZ = 'America/Curacao';

export function formatLongDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(LOCALE_BCP47[locale], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: VENUE_TZ,
  }).format(date);
}

export function formatTime(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(LOCALE_BCP47[locale], {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: VENUE_TZ,
  }).format(date);
}

export interface DateParts {
  weekday: string;
  day: string;
  month: string;
  year: string;
}

export function getDateParts(date: Date, locale: Locale): DateParts {
  const fmt = new Intl.DateTimeFormat(LOCALE_BCP47[locale], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: VENUE_TZ,
  });
  const parts = fmt.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? '';
  return {
    weekday: get('weekday'),
    day: get('day'),
    month: get('month'),
    year: get('year'),
  };
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
