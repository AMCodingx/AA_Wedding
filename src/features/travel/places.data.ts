import { type Locale } from '~/i18n/locales';

export type PlaceKind = 'hotel' | 'apartment' | 'guesthouse';

export interface Place {
  id: string;
  kind: PlaceKind;
  name: string;
  priceFromEUR: number;
  walkingMinutes: number;
  url: string;
  blurb: Record<Locale, string>;
}

export const PLACES: Place[] = [
  {
    id: 'baoase',
    kind: 'hotel',
    name: 'Baoase Luxury Resort',
    priceFromEUR: 320,
    walkingMinutes: 30,
    url: 'https://example.com/baoase',
    blurb: {
      nl: 'Privé eilandje aan de zuidkust met villa\'s, eigen lagune en het beste zeeuitzicht van het eiland.',
      es: 'Pequeña isla privada en la costa sur, con villas, laguna propia y las mejores vistas al mar.',
      en: 'A private cay on the south coast with villas, a private lagoon and the best sea views on the island.',
    },
  },
  {
    id: 'pietermaai-boutique',
    kind: 'apartment',
    name: 'Pietermaai Boutique Apartments',
    priceFromEUR: 140,
    walkingMinutes: 12,
    url: 'https://example.com/pietermaai',
    blurb: {
      nl: 'Kleurrijke koloniale appartementen midden in de bruisende Pietermaai-wijk van Willemstad.',
      es: 'Apartamentos coloniales coloridos en el barrio más animado de Willemstad: Pietermaai.',
      en: 'Colourful colonial apartments in Willemstad\'s liveliest neighbourhood, Pietermaai.',
    },
  },
  {
    id: 'sunset-cottage',
    kind: 'guesthouse',
    name: 'Sunset Cottage Sint Willibrordus',
    priceFromEUR: 95,
    walkingMinutes: 8,
    url: 'https://example.com/sunset-cottage',
    blurb: {
      nl: 'Knus huisje vlakbij Porto Marie — perfect om vroeg op te staan voor het strand.',
      es: 'Casita acogedora cerca de Porto Marie — perfecta para madrugar y bajar a la playa.',
      en: 'A cosy cottage minutes from Porto Marie — perfect for early-morning beach walks.',
    },
  },
];

export type ThingsToDoTab = 'activities' | 'culture' | 'food' | 'beaches';

export interface Highlight {
  id: string;
  tab: ThingsToDoTab;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    id: 'snorkel-tugboat',
    tab: 'activities',
    title: {
      nl: 'Snorkelen bij de Tugboat',
      es: 'Snorkel en el Tugboat',
      en: 'Snorkel the Tugboat wreck',
    },
    description: {
      nl: 'Ondiep gezonken sleepboot in glashelder water. Een korte zwemtocht en je bent in een andere wereld.',
      es: 'Remolcador hundido a poca profundidad en agua cristalina. Pocas brazadas y estás en otro mundo.',
      en: 'A shallow shipwreck in glass-clear water. A short swim and you\'re in another world.',
    },
  },
  {
    id: 'willemstad-walk',
    tab: 'culture',
    title: {
      nl: 'Willemstad: Punda & Otrobanda',
      es: 'Willemstad: Punda y Otrobanda',
      en: 'Willemstad: Punda & Otrobanda',
    },
    description: {
      nl: 'UNESCO-werelderfgoed: bonte gevels, de drijvende markt en de Koningin Emma-pontonbrug.',
      es: 'Patrimonio de la UNESCO: fachadas de colores, mercado flotante y el puente Reina Emma.',
      en: 'UNESCO heritage: candy-coloured façades, the floating market and the Queen Emma pontoon bridge.',
    },
  },
  {
    id: 'keshi-yena',
    tab: 'food',
    title: { nl: 'Keshi Yená', es: 'Keshi Yená', en: 'Keshi Yená' },
    description: {
      nl: 'Het nationale gerecht: gevulde kaas met kruidige kip. Probeer Plasa Bieu in Willemstad.',
      es: 'El plato nacional: queso relleno de pollo especiado. Pruébalo en Plasa Bieu, Willemstad.',
      en: 'The national dish: stuffed cheese with spiced chicken. Try it at Plasa Bieu in Willemstad.',
    },
  },
  {
    id: 'porto-mari',
    tab: 'beaches',
    title: { nl: 'Playa Porto Mari', es: 'Playa Porto Mari', en: 'Playa Porto Mari' },
    description: {
      nl: 'Onze trouwlocatie en een van de mooiste stranden — twee koraalriffen vlak voor de kust.',
      es: 'Nuestro lugar de boda y una de las playas más bonitas — dos arrecifes a pocos metros.',
      en: 'Our wedding spot and one of the prettiest beaches — twin coral reefs just offshore.',
    },
  },
  {
    id: 'cas-abou',
    tab: 'beaches',
    title: { nl: 'Cas Abou', es: 'Cas Abou', en: 'Cas Abou' },
    description: {
      nl: 'Poederzacht zand en turkoois water — het soort strand waarvan je foto\'s ongelooflijk mooi worden.',
      es: 'Arena suave y agua turquesa — el tipo de playa donde cualquier foto sale espectacular.',
      en: 'Powder-soft sand and turquoise water — the kind of beach that makes any photo look unreal.',
    },
  },
  {
    id: 'tula-museum',
    tab: 'culture',
    title: { nl: 'Kura Hulanda Museum', es: 'Museo Kura Hulanda', en: 'Kura Hulanda Museum' },
    description: {
      nl: 'Aangrijpend museum over de Atlantische slavenhandel en de Afrikaanse wortels van Curaçao.',
      es: 'Museo conmovedor sobre el comercio atlántico de esclavos y las raíces africanas de Curazao.',
      en: 'A moving museum on the Atlantic slave trade and Curaçao\'s African roots.',
    },
  },
];
