/**
 * Single source of truth for the couple's actual wedding details.
 * Update here, the whole site updates.
 */

export const WEDDING = {
  // Curaçao is AST (UTC-4), no DST.
  ceremonyAt: new Date('2027-03-20T16:00:00-04:00'),
  receptionAt: new Date('2027-03-20T18:30:00-04:00'),

  venue: {
    /** What the hero shows. */
    region: 'Curaçao',
    /** Coordinates power the live-temperature widget — never displayed. */
    coordinates: { lat: 12.2222, lng: -69.0922 },
  },

  couple: {
    partnerOne: 'Alex',
    partnerTwo: 'Anouk',
  },

  rsvpDeadline: new Date('2027-01-15T23:59:00-04:00'),
} as const;
