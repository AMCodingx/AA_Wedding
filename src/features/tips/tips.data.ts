import { type Locale } from '~/i18n/locales';

export type TipCategory = 'food' | 'activities' | 'sights' | 'beach';

export interface Tip {
  id: string;
  category: TipCategory;
  name: string;
  blurb: Record<Locale, string>;
}

export const TIPS: Tip[] = [
  {
    id: 'flakos-grill',
    category: 'food',
    name: "Flako's Grill",
    blurb: {
      nl: "Dit is een zogenaamde Truki Pan, dit is meestal een soort food truck langs de weg vanuit waar eten wordt verkocht. Dit is echt een plek waar 's avonds, denk na 20:00-21:00, veel locals komen om (betaalbare) gerechten te halen. Er staan allemaal picknickbanken waar je kan wachten op je eten en het eventueel op kan eten zodra het klaar is. Het is ook heel gebruikelijk om het eten mee te nemen en thuis op te eten. Bij dit soort plekken langsgaan is vaak vaste prik na het uitgaan, werk of een dagje strand. Er zit wel verschil in de kwaliteit van de verschillende plekken, dit is een favoriet.",
      es: 'Un favorito local para pescado y mariscos a la parrilla. Sencillo, fresco y asequible. Siempre lleno los viernes por la noche.',
      en: 'A local favourite for grilled fish and seafood. Simple, fresh and affordable. Always busy on Friday evenings.',
    },
  },
  {
    id: 'sint-willibrordus',
    category: 'sights',
    name: 'Sint Willibrordus',
    blurb: {
      nl: 'Bij Sint Willibrordus kun je vaak prachtige flamingo\'s bewonderen in het zoutmeer naast de weg. Vooral rond zonsopkomst of zonsondergang is het uitzicht hier extra mooi. Als je hier in de buurt bent is het zeker de moeite waard om hier even te stoppen.',
      es: 'Un tranquilo pueblo en la costa oeste con una colorida iglesia colonial. Perfecto para una parada matutina.',
      en: 'A quiet village on the west coast with a colourful colonial church. Perfect for a morning stop.',
    },
  },
  {
    id: 'quad-rijden',
    category: 'activities',
    name: 'Quad rijden',
    blurb: {
      nl: 'Als je Curaçao eens op een avontuurlijke manier wil ontdekken, kan je dat heel goed op een quad doen. Wij zijn met Eric\'s ATV Adventures gegaan en dat was echt top! Met een quad cross je over stoffige wegen, langs ruige kustlijnen en verborgen plekken waar je normaal niet snel komt. Ze hebben verschillende opties. De meest populaire tour is de east tour, deze komt langs de meest toeristische plekken. Wij hadden deze al vaak genoeg gezien en zijn voor de west tour gegaan, dan kom je op plekken waar je normaal niet zo snel komt en krijg je een hele andere kant van Curacao te zien.',
      es: 'Explora la isla en quad. Pasarás por plantaciones, junto a acantilados y por caminos de tierra que de otra manera nunca encontrarías.',
      en: 'Explore the island by quad bike. You\'ll ride through plantations, along cliffs and on dirt tracks you\'d never find otherwise.',
    },
  },
  {
    id: 'hofi-mango',
    category: 'sights',
    name: 'Hofi Mango',
    blurb: {
      nl: 'Hofi Mango is een groene oase midden op het eiland. Hier wandel je tussen honderden mangobomen, tropische planten (enorme cactussen!) en rustige natuurpaden. Het park draait om duurzaamheid en natuurbehoud, maar voelt vooral als een fijne plek om even aan de drukte te ontsnappen. Extra leuk: in het mangoseizoen ruikt het hier overal heerlijk zoet.',
      es: 'Un jardín escondido lleno de árboles frutales locales y cactus. Tranquilo, con sombra y un buen lugar para conocer la flora de la isla.',
      en: 'A hidden garden full of local fruit trees and cacti. Quiet, shady and a great place to discover the island\'s flora.',
    },
  },
  {
    id: 'kura-hulanda',
    category: 'sights',
    name: 'Kura Hulanda',
    blurb: {
      nl: 'Kurá Hulanda is een museum over de geschiedenis van de slavernij, Afrika en de Caribische cultuur. Het museum is indrukwekkend en soms confronterend, maar absoluut de moeite waard. Naast de exposities is ook het historische terrein zelf prachtig om doorheen te wandelen.',
      es: 'Un complejo museístico en Otrobanda sobre la trata trasatlántica de esclavos. Impresionante, educativo y bien mantenido.',
      en: 'A museum complex in Otrobanda about the Trans-Atlantic slave trade. Moving, educational and well-maintained.',
    },
  },
  {
    id: 'grote-kleine-knip',
    category: 'beach',
    name: 'Grote & Kleine Knip',
    blurb: {
      nl: 'Playa Kenepa Grandi, beter bekend als Grote Knip, is misschien wel het bekendste strand van Curaçao. Denk aan helderblauw water, witte stranden en uitzicht waar je meteen je camera voor pakt. Vlak daarnaast ligt Playa Kenepa Chiki (Kleine Knip): kleiner, rustiger en perfect om relaxed te snorkelen.',
      es: 'Dos playas contiguas con agua turquesa y rocas con sombra. Kleine Knip es algo más tranquila; Grote Knip es mejor para nadar.',
      en: 'Two adjacent beaches with turquoise water and shady rocks. Kleine Knip is a little quieter; Grote Knip is better for swimming.',
    },
  },
  {
    id: 'fort-nassau',
    category: 'food',
    name: 'Fort Nassau',
    blurb: {
      nl: 'Bij Fort Nassau eet je niet alleen lekker, maar heb je ook een van de mooiste uitzichten van het eiland. Vanaf het oude fort kijk je uit over Willemstad, de haven en de zee. Vooral tijdens zonsondergang is dit een populaire plek voor een uitgebreid diner of een gezellige cocktailavond.',
      es: 'Un restaurante en lo alto de un fuerte histórico con vistas panorámicas de Willemstad. Ve al atardecer para la mejor vista.',
      en: 'A restaurant at the top of a historic fort with panoramic views over Willemstad. Go at sunset for the best view.',
    },
  },
  {
    id: 'playa-piskado',
    category: 'beach',
    name: 'Playa Piskado',
    blurb: {
      nl: 'Playa Piskado staat bekend als dé plek om zeeschildpadden van dichtbij te zien. Vaak zwemmen ze gewoon rustig tussen de mensen door terwijl jij snorkelt in het heldere water. Een bijzondere ervaring die Curaçao voor veel bezoekers extra speciaal maakt. De reden voor zo veel schildpadden is dat hier de vissers hun vis schoonmaken en de resten teruggooien in de zee. Het kan dus ook wel een beetje ruiken naar vis resten…',
      es: 'La playa donde atracan los pescadores locales — y donde las tortugas vienen a por los restos. Hacer snorkel con tortugas aquí es casi garantizado.',
      en: 'The beach where local fishermen moor — and where sea turtles come for the scraps. Snorkelling with turtles here is almost guaranteed.',
    },
  },
  {
    id: 'toktok',
    category: 'food',
    name: 'TokTok',
    blurb: {
      nl: 'Nog een andere populaire Truki Pan is Toktok. Hier hebben ze heerlijk mals vlees van de barbecue en andere locale specialiteiten. Maak hier een stop om laagdrempelig heerlijk eten af te halen.',
      es: 'El lugar de almuerzo y brunch en Willemstad. Hermoso patio interior, buen café y platos deliciosos inspirados en la cocina local.',
      en: 'The lunch and brunch spot in Willemstad. Beautiful courtyard, good coffee and delicious dishes inspired by local cuisine.',
    },
  },
  {
    id: 'ostrich-farm',
    category: 'sights',
    name: 'Ostrich Farm',
    blurb: {
      nl: 'Bij Curaçao Ostrich Farm maak je kennis met de grootste vogels ter wereld. Tijdens een safari-tour leer je van alles over struisvogels en kun je ze zelfs van dichtbij voeren. Het is een leuke activiteit voor jong en oud, voor een leuke afwisseling tussen alle stranddagen.',
      es: 'Una granja de avestruces en el interior de la isla. Divertido y educativo, especialmente si llevas niños. Puedes ver las aves de cerca.',
      en: 'An ostrich farm in the island\'s interior. Fun and educational, especially if you bring kids. You can see the birds up close.',
    },
  },
  {
    id: 'pirate-bay',
    category: 'beach',
    name: 'Pirate Bay',
    blurb: {
      nl: 'Pirate Bay is een relaxte strandplek waar locals en toeristen graag samenkomen. Je kunt hier chillen op het strand, snorkelen of genieten van een cocktail terwijl de zon langzaam ondergaat.',
      es: 'Una pequeña bahía remota a la que solo se puede llegar a pie o en bote. Arena blanca, agua cristalina y pocos turistas.',
      en: 'A small, remote bay you can only reach on foot or by boat. White sand, clear water and very few tourists.',
    },
  },
  {
    id: 'shete-boka',
    category: 'sights',
    name: 'Shete Boka',
    blurb: {
      nl: 'Bij Shete Boka National Park zie je de ruige kant van Curaçao. Grote golven slaan hier hard tegen de rotsen terwijl je langs verschillende baaien en grotten wandelt.',
      es: 'Parque nacional con espectaculares costas rocosas y olas furiosas. La entrada más famosa es Boka Tabla, donde las olas golpean en una caverna.',
      en: 'National park with spectacular rocky coastline and crashing waves. The most famous inlet is Boka Tabla, where waves pound into a cave-like space.',
    },
  },
  {
    id: 'amazonia',
    category: 'sights',
    name: 'Amazonia',
    blurb: {
      nl: 'Ontdek de jungle! In dit park kijk je je ogen uit met alle verschillende soorten dieren die aanwezig zijn. Met in de hoofdrol Luna, de dansende kaketoe.',
      es: 'Una colorida granja de loros y aves en el centro de la isla. Fotos especiales garantizadas.',
      en: 'A colourful parrot and bird farm in the middle of the island. Spectacular photos guaranteed.',
    },
  },
  {
    id: 'de-visserij',
    category: 'food',
    name: 'De Visserij Piscadera',
    blurb: {
      nl: 'Bij De Visserij draait alles om verse vis. Je kiest zelf je vis of zeevruchten uit, waarna het direct voor je wordt bereid. De sfeer is gezellig en ongedwongen, alsof je aanschuift bij een lokale barbecue aan zee.',
      es: 'Restaurante de pescado junto al agua en Willemstad. Pescado fresco del día, directamente del barco. Sencillo pero delicioso.',
      en: 'Fish restaurant right on the water in Willemstad. Day-fresh fish, straight from the boat. Simple but incredibly good.',
    },
  },
  {
    id: 'klein-curacao',
    category: 'activities',
    name: 'Klein Curaçao',
    blurb: {
      nl: 'Klein Curaçao is een klein onbewoond eiland op ongeveer twee uur varen van Curaçao. Je vindt hier een hagelwit strand, een oude vuurtoren en helderblauw water waar je geweldig kunt snorkelen.',
      es: 'Una pequeña isla deshabitada al sureste de Curaçao. Se organizan excursiones de un día en barco con regularidad. Arena blanca, arrecifes de coral y un faro abandonado.',
      en: 'An uninhabited islet south-east of Curaçao. Day trips by boat run regularly. White sand, coral reefs and an abandoned lighthouse.',
    },
  },
  {
    id: 'mambo-beach',
    category: 'beach',
    name: 'Mambo Beach',
    blurb: {
      nl: "Mambo Beach is een van de gezelligste stranden van het eiland. Overdag kun je hier relaxen op een ligbed aan zee en 's avonds verandert het gebied in een levendige plek vol restaurants, bars en muziek. Ideaal als je strand en gezelligheid wilt combineren.",
      es: 'La playa más animada de la isla, justo fuera de Willemstad. Buenas instalaciones, beach clubs, deportes acuáticos y un ambiente fantástico el domingo por la tarde.',
      en: 'The liveliest beach on the island, just outside Willemstad. Good facilities, beach clubs, water sports and a great vibe on Sunday afternoons.',
    },
  },
  {
    id: 'sint-christoffelberg',
    category: 'activities',
    name: 'Sint Christoffelberg',
    blurb: {
      nl: 'De Christoffelberg beklimmen is een uitdaging, maar absoluut de moeite waard. De wandeling naar de top is pittig, vooral in de warmte, maar eenmaal boven word je beloond met een spectaculair uitzicht over bijna het hele eiland. Het beste kun je vroeg in de ochtend vertrekken.',
      es: 'La montaña más alta de Curaçao (375 m). La caminata dura unas 3 horas y atraviesa un hermoso parque nacional. Empieza pronto por el calor.',
      en: 'The highest peak on Curaçao (375 m). The hike takes about 3 hours through beautiful national park. Start early because of the heat.',
    },
  },
  {
    id: 'willemstad',
    category: 'sights',
    name: 'Willemstad',
    blurb: {
      nl: 'Willemstad is het kleurrijke hart van Curaçao. De beroemde gekleurde huisjes langs de Handelskade, de Pontjesbrug en de gezellige straatjes maken de stad uniek. Je vindt hier een mix van cultuur, historie, winkels, restaurants en een ontspannen Caribische sfeer.',
      es: 'La colorida capital, Patrimonio Mundial de la UNESCO. Cruza el Puente de la Reina Emma, explora Punda y Otrobanda y para a probar el licor de Curaçao.',
      en: 'The colourful capital, a UNESCO World Heritage Site. Walk across the Queen Emma Bridge, explore Punda and Otrobanda, and stop for a Curaçao liqueur tasting.',
    },
  },
  {
    id: 'otrobanda-murals',
    category: 'sights',
    name: 'Otrobanda Murals',
    blurb: {
      nl: 'De kleurrijke muurschilderingen in Otrobanda vormen een van de meest bijzondere culturele trekpleisters van Curaçao. De wijk is uitgegroeid tot een groot openluchtmuseum waar lokale en internationale kunstenaars muren hebben omgetoverd tot indrukwekkende kunstwerken. De schilderingen vertellen verhalen over de geschiedenis, cultuur en identiteit van het eiland, met thema\'s zoals muziek, slavernij, natuur en het dagelijks leven op Curaçao.',
      es: 'Gran proyecto de arte urbano en el barrio de Otrobanda. Docenas de murales en las fachadas cuentan la historia y cultura de la isla.',
      en: 'A large street art project in the Otrobanda neighbourhood. Dozens of murals on building façades tell the island\'s history and culture.',
    },
  },
  {
    id: 'jan-thiel-beach',
    category: 'beach',
    name: 'Jan Thiel Beach',
    blurb: {
      nl: "Jan Thiel Beach is een populaire hotspot waar strand, luxe en gezelligheid samenkomen. Overdag kun je relaxen aan het water en 's avonds geniet je hier van beachclubs, cocktails en live muziek. Vooral tijdens zonsondergang hangt hier een gezellige sfeer.",
      es: 'Una amplia playa de fácil acceso con un ambiente agradable. Buenas instalaciones, buenos restaurantes y mar tranquilo: ideal para un día de playa.',
      en: 'A wide, easily accessible beach with a pleasant atmosphere. Good facilities, nice restaurants and calm sea — ideal for a day at the beach.',
    },
  },
  {
    id: 'cas-abao-beach',
    category: 'beach',
    name: 'Cas Abao Beach',
    blurb: {
      nl: 'Cas Abao Beach is een van de mooiste en populairste stranden van Curaçao. Het water is hier helderblauw, het zand spierwit en de sfeer heerlijk relaxed. Door het rustige water is het ook een perfecte plek om te snorkelen tussen kleurrijke vissen.',
      es: 'Una de las playas más hermosas de Curaçao. Arena blanca como la nieve, agua transparente y hermoso coral justo frente a la orilla. Tiene precio de entrada pero vale la pena.',
      en: 'One of the most beautiful beaches in Curaçao. Snow-white sand, crystal-clear water and gorgeous coral just off the shore. Entry fee, but absolutely worth it.',
    },
  },
  {
    id: 'playa-daaibooi',
    category: 'beach',
    name: 'Playa Daaibooi',
    blurb: {
      nl: 'Playa Daaibooi is een geliefd strand aan de westkust van Curaçao en staat bekend om zijn rustige en natuurlijke sfeer. Het strand ligt tussen hoge rotsen en helder turquoise water, waardoor het een prachtige plek is om te ontspannen en van de natuur te genieten. Zowel locals als toeristen komen hier graag om te zwemmen, snorkelen of gewoon te genieten van de zon.',
      es: 'Una playa tranquila y poco conocida en la costa oeste. Público local, sin turismo masivo, buenas opciones de snorkel y ambiente relajado.',
      en: 'A quiet, little-known beach on the west coast. Local crowd, no mass tourism, good snorkelling options and a relaxed atmosphere.',
    },
  },
];
