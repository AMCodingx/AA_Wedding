import { WEDDING } from '~/lib/wedding';

export type ContactKey = keyof typeof WEDDING.contacts;

export function contactPhone(contact: ContactKey): string {
  return WEDDING.contacts[contact].phone;
}

/** "+599 9 671 8401" → "https://wa.me/59996718401" */
export function whatsappUrl(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}
