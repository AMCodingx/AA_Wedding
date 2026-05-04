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

export function formatLongDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(LOCALE_BCP47[locale], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatTime(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(LOCALE_BCP47[locale], {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
