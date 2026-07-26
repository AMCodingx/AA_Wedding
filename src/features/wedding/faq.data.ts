import { type FaqEntry } from './faq.types';

/**
 * To add an FAQ: append an entry. The accordion picks it up automatically.
 * Keep IDs stable — they become URL anchors people may share.
 *
 * The copy is the couple's own, in their own voice, so it is deliberately
 * plain and a little chatty. Answers are arrays because several of them run
 * to two or three paragraphs; the card renders one <p> per item.
 *
 * Spanish is Caribbean, not peninsular: `ustedes` throughout (nobody on
 * Curaçao or in the DR says `vosotros`), `parquear`, `guagua`.
 */
export const FAQ_ENTRIES: FaqEntry[] = [
  {
    id: 'where-to-stay',
    question: {
      nl: 'Waar verblijven?',
      es: '¿Dónde nos quedamos?',
      en: 'Where to stay?',
    },
    answer: {
      nl: [
        'Wij hebben het geluk dat we familie op het eiland hebben, maar hierdoor hebben we zelf geen ervaring met verschillende verblijfslocaties. Voor deze reis hebben we Minet gevraagd om ons te helpen bij het vinden van een fijne plek om te verblijven. Zij helpt jullie hier ook graag mee!',
        'Je kunt een kijkje nemen op haar website, maar het is nog beter om contact met haar op te nemen, omdat zij meer mogelijkheden heeft dan alleen haar website.',
        'De locatie op het eiland waar je verblijft maakt eigenlijk niet zoveel uit, omdat het eiland zo klein is. Als je ervoor kiest om in een meer toeristisch gebied te verblijven (zoals Willemstad, Jan Thiel, Mambo Beach, enz.), is er doordeweeks en ’s avonds meer levendigheid in de omgeving. Andere delen van het eiland zijn rustiger.',
      ],
      es: [
        'Tenemos la dicha de tener familia en la isla, pero por eso mismo no tenemos experiencia buscando dónde quedarnos. Para este viaje le pedimos a Minet que nos ayudara a encontrar un buen sitio, y con mucho gusto los ayuda a ustedes también.',
        'Pueden darle un vistazo a su página web, pero es mejor todavía escribirle directamente, porque ella maneja más opciones de las que aparecen ahí.',
        'En qué parte de la isla se queden no importa mucho, porque es bien pequeña. Si escogen la zona más turística (Willemstad, Jan Thiel, Mambo Beach y por ahí), van a tener más movimiento entre semana y de noche. El resto de la isla es más tranquilo.',
      ],
      en: [
        'We have the luxury of having family on the island, so we do not have much experience with places to stay ourselves. For this trip we asked Minet to help us find a nice place, and she is more than happy to help you too!',
        'You can take a look at her website, but it is even better to contact her directly, because she has more options than the ones listed there.',
        'Where you stay on the island does not really matter, since it is so small. If you choose the more touristic part (Willemstad, Jan Thiel, Mambo Beach and so on) there is more buzz around you during the week and at night. Other parts are quieter.',
      ],
    },
  },
  {
    id: 'kids-welcome',
    question: {
      nl: 'Zijn kinderen welkom?',
      es: '¿Los niños son bienvenidos?',
      en: 'Are kids welcome?',
    },
    answer: {
      nl: [
        'Wij zijn dol op jullie kinderen en ze zijn van harte welkom om deze bijzondere dag met ons mee te vieren. De keuze of jullie ze meenemen, laten we helemaal aan jullie over.',
        'Het is goed om te weten dat er beperkte voorzieningen zijn, omdat de gehele dag op het strand plaatsvindt. Er zijn ook oppasservices beschikbaar op Curaçao. We voegen deze informatie zo snel mogelijk hier toe.',
      ],
      es: [
        'Nos encantan sus niños y son más que bienvenidos a celebrar este día tan especial con nosotros. Si los traen o no, lo dejamos completamente en sus manos.',
        'Eso sí, el día entero es en la playa, así que hay pocas facilidades. En Curazao también hay servicios de niñera; en cuanto tengamos esa información la subimos aquí.',
      ],
      en: [
        'We love your kids and they are more than welcome to come and join this special day. We leave it up to you whether you prefer to bring them.',
        'It is good to know that there are limited facilities, since the whole day is on the beach. There are also nanny services available on Curaçao — we will add that information here as soon as we can.',
      ],
    },
  },
  {
    id: 'what-to-wear',
    question: {
      nl: 'Wat trek je aan?',
      es: '¿Qué nos ponemos?',
      en: 'What to wear?',
    },
    answer: {
      nl: [
        'Er is geen dresscode. Zorg er vooral voor dat je iets draagt waarin je je prettig voelt en waarin je makkelijk je dansmoves kunt laten zien.',
        'Het is goed om te weten dat de hele dag op het strand plaatsvindt, dus hakken of hele lange jurken kunnen wat lastig zijn.',
      ],
      es: [
        'No hay código de vestimenta. Solo pónganse algo con lo que se sientan bien y con lo que puedan sacar sus pasos de baile sin problema.',
        'Eso sí, el día entero es en la playa, así que los tacones o los vestidos muy largos les pueden complicar la cosa.',
      ],
      en: [
        'There is no dress code. Just make sure you wear something you feel good in and can easily show off your dance moves in.',
        'It is good to know that the whole day is on the beach, so heels or very long dresses might be challenging.',
      ],
    },
  },
  {
    id: 'getting-there',
    question: {
      nl: 'Hoe komen we daar?',
      es: '¿Cómo llegamos?',
      en: 'How do we get there?',
    },
    answer: {
      nl: [
        'Wij gaan vervoer regelen naar de locatie. Als je hiervan gebruik wilt maken, laat het ons dan weten en geef door waar je verblijft.',
        'Wil je zelf rijden? Dat kan ook, maar je kunt niet bij de locatie parkeren omdat er maar een beperkt aantal parkeerplaatsen beschikbaar is. Je kunt parkeren bij Playa Porto Marie. Vanaf daar regelen wij shuttlebusjes naar de locatie.',
      ],
      es: [
        'Nosotros vamos a organizar el transporte hasta el lugar. Si lo quieren usar, avísennos y dígannos dónde se están quedando.',
        '¿Prefieren ir por su cuenta? También se puede, pero no van a poder parquear en el lugar porque hay muy pocos espacios. Pueden parquear en Playa Porto Marie y desde ahí nosotros coordinamos las guaguas que los llevan.',
      ],
      en: [
        'We are going to arrange transport to the location. If you want to use it, please let us know and tell us where you are staying.',
        'Would you rather drive yourself? That is possible too, but you cannot park at the location, since there are only a few parking spaces. You can park at Playa Porto Marie, and from there we will arrange shuttle buses to the location.',
      ],
    },
  },
  {
    id: 'gifts',
    question: {
      nl: 'Wat geven we cadeau?',
      es: '¿Qué les regalamos?',
      en: 'What to give?',
    },
    answer: {
      nl: [
        'Cadeaus zijn niet nodig. Of je nu uit het buitenland komt of vanuit Curaçao zelf: het is al een cadeau dat je de moeite neemt om erbij te zijn en deze bijzondere dag met ons te vieren.',
      ],
      es: [
        'No hace falta ningún regalo. Ya sea que vengan de afuera o de Curazao mismo, para nosotros el regalo es que hagan el esfuerzo de estar ahí y celebrar con nosotros.',
      ],
      en: [
        'No need for gifts. Whether you came from abroad or from Curaçao itself, it is a gift that you made the effort to be there and celebrate with us.',
      ],
    },
  },
  {
    id: 'rsvp-deadline',
    question: {
      nl: 'Wanneer moeten we reageren?',
      es: '¿Hasta cuándo podemos responder?',
      en: 'When do we need to reply by?',
    },
    answer: {
      nl: [
        'We weten nog niet precies wanneer we het definitieve aantal gasten nodig hebben. Zodra we dit weten, zullen we de informatie hier bijwerken.',
        'Als je nu al weet of je komt, mag je het ons natuurlijk altijd laten weten.',
      ],
      es: [
        'Todavía no sabemos para cuándo vamos a necesitar el número exacto de invitados. En cuanto lo sepamos, actualizamos esta página.',
        'Si ya saben si vienen, nos pueden avisar cuando quieran.',
      ],
      en: [
        'We do not know yet when we will need the exact numbers. As soon as we do, we will update this.',
        'If you already know whether you are coming, you can always let us know.',
      ],
    },
  },
  {
    id: 'another-question',
    question: {
      nl: 'Ik heb nog een andere vraag.',
      es: 'Tengo otra pregunta.',
      en: 'I have another question.',
    },
    answer: {
      nl: [
        'Stuur ons gerust een bericht met je vraag! Als we vragen ontvangen die ook voor anderen handig kunnen zijn, voegen we deze toe aan deze pagina.',
      ],
      es: [
        '¡Escríbannos con toda confianza! Si nos llegan preguntas que le puedan servir a los demás, las vamos a agregar a esta página.',
      ],
      en: [
        'Please feel free to send us a message with your question! If we receive questions that could be useful for others too, we will add them to this page.',
      ],
    },
  },
];
