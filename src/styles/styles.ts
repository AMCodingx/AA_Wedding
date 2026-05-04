/**
 * Typed mirror of CSS custom properties from tokens.css.
 * Use only where TypeScript needs token values directly (e.g. inline SVG fills,
 * generated metadata). Component styles should reference the CSS vars.
 */

export const colors = {
  sea: '#79C2B9',
  seaSoft: '#A9D4C7',
  mist: '#D8DDCD',
  sand: '#EED7BC',
  shell: '#F6EBDF',
  text: '#1F3A38',
  textMuted: '#5A6E6B',
} as const;

export type ColorToken = keyof typeof colors;

export const space = (n: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24): string => `var(--space-${n})`;

export const radius = (s: 'sm' | 'md' | 'lg' | 'pill'): string => `var(--radius-${s})`;

export const fontSize = (s: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'): string =>
  `var(--fs-${s})`;
