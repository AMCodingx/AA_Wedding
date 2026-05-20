import { type FaqEntry } from './faq.types';

/**
 * To add an FAQ: append an entry. The accordion picks it up automatically.
 * Keep IDs stable — they become URL anchors people may share.
 */
export const FAQ_ENTRIES: FaqEntry[] = [
  {
    id: 'where-to-stay',
    category: 'stay',
    question: {
      nl: 'Waar raden jullie aan om te overnachten?',
      es: '¿Dónde nos recomendáis alojarnos?',
      en: 'Where do you recommend we stay?',
    },
    answer: {
      nl: 'In de buurt van Willemstad zijn veel goede hotels en boutique villas. Wij raden Pietermaai aan voor sfeer of de westkust voor strand en rust. Bekijk de pagina "Onze tips" voor meer inspiratie.',
      es: 'Cerca de Willemstad hay muchos hoteles y villas con encanto. Recomendamos Pietermaai para ambiente, o la costa oeste para playa y tranquilidad. Echa un vistazo a "Nuestros consejos" para más inspiración.',
      en: 'There are great hotels and boutique villas around Willemstad. We recommend Pietermaai for atmosphere or the west coast for beach calm. Check out "Our tips" for more inspiration.',
    },
  },
  {
    id: 'kids-welcome',
    category: 'kids',
    question: {
      nl: 'Zijn kinderen welkom?',
      es: '¿Pueden venir los niños?',
      en: 'Are kids welcome?',
    },
    answer: {
      nl: 'We zijn dol op jullie kinderen — ze zijn welkom bij de ceremonie en de borrel. Tijdens het diner is er oppas in een aparte ruimte zodat de avond ontspannen blijft voor iedereen.',
      es: 'Adoramos a vuestros peques — son bienvenidos a la ceremonia y al cóctel. Durante la cena tendremos servicio de cuidadoras en una sala anexa para que la noche sea tranquila.',
      en: 'We adore your kids — they\'re welcome at the ceremony and drinks. During dinner we\'ll have a sitter set up in a side room so the evening stays relaxed for everyone.',
    },
  },
  {
    id: 'dress-code',
    category: 'attire',
    question: {
      nl: 'Is er een dresscode?',
      es: '¿Hay un código de vestimenta?',
      en: 'Is there a dress code?',
    },
    answer: {
      nl: 'Tropical chic. Linnen, luchtige jurken, warme kleuren. Lage hakken — we lopen over zand en hout. Een vestje voor na de zonsondergang is fijn.',
      es: 'Tropical chic. Lino, vestidos vaporosos, colores cálidos. Tacones bajos — pisaremos arena y madera. Trae un chal por si refresca tras el atardecer.',
      en: 'Tropical chic. Linen, flowy dresses, warm colours. Low heels — we\'ll be on sand and wood. A light wrap is nice for after sunset.',
    },
  },
  {
    id: 'getting-there',
    category: 'transport',
    question: {
      nl: 'Hoe komen we er?',
      es: '¿Cómo llegamos al lugar?',
      en: 'How do we get there?',
    },
    answer: {
      nl: 'We regelen een bus vanaf een centraal punt in Willemstad. Met een huurauto: er is gratis parkeren bij Playa Porto Mari. Tijden volgen dichter bij de datum.',
      es: 'Habrá un autobús desde un punto central en Willemstad. En coche de alquiler: hay parking gratuito en Playa Porto Mari. Confirmaremos los horarios cerca de la fecha.',
      en: 'We\'ll arrange a shuttle from a central spot in Willemstad. By rental car, there\'s free parking at Playa Porto Mari. Final times closer to the date.',
    },
  },
  {
    id: 'gifts',
    category: 'other',
    question: {
      nl: 'Cadeautip?',
      es: '¿Lista de regalos?',
      en: 'Gift ideas?',
    },
    answer: {
      nl: 'Jullie aanwezigheid is het mooiste cadeau. Wie graag bijdraagt, kan onze huwelijksreis-pot vullen — de link verschijnt hier dichter bij de datum.',
      es: 'Vuestra presencia es nuestro mejor regalo. Si queréis contribuir, abriremos una pequeña hucha para nuestra luna de miel — el enlace estará en este sitio cerca de la fecha.',
      en: 'Your presence is the best gift. If you\'d like to contribute, we\'ll open a small honeymoon fund — the link will appear here closer to the date.',
    },
  },
  {
    id: 'rsvp-deadline',
    category: 'other',
    question: {
      nl: 'Tot wanneer kan ik bevestigen?',
      es: '¿Hasta cuándo puedo confirmar?',
      en: 'When do you need a reply by?',
    },
    answer: {
      nl: 'Graag vóór 15 januari 2027. Daarna sluiten we de catering — laat het ons dus op tijd weten.',
      es: 'Por favor, antes del 15 de enero de 2027. Después de esa fecha cerramos el catering — y nos rompería el corazón que avisaras tarde.',
      en: 'Please reply by 15 January 2027. We close the catering count after that — so let us know in good time.',
    },
  },
];
