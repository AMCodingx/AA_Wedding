import { type ImageMetadata } from 'astro';
import { type Locale } from '~/i18n/locales';
import quadRijdenImg from '~/assets/our_tips/activities/IMG_9751.jpg';
import sintChristoffelbergImg from '~/assets/our_tips/activities/IMG_3442.jpg';

export type TipCategory = 'food' | 'activities' | 'sights' | 'beach';

export interface Tip {
  id: string;
  category: TipCategory;
  name: string;
  blurb: Record<Locale, string>;
  image?: ImageMetadata;
}

export const TIPS: Tip[] = [
  {
    id: 'flakos-grill',
    category: 'food',
    name: "Flako's Grill",
    blurb: {
      nl: "Dit is een zogenaamde Truki Pan, dit is meestal een soort food truck langs de weg vanuit waar eten wordt verkocht. Dit is echt een plek waar 's avonds, denk na 20:00-21:00, veel locals komen om (betaalbare) gerechten te halen. Er staan allemaal picknickbanken waar je kan wachten op je eten en het eventueel op kan eten zodra het klaar is. Het is ook heel gebruikelijk om het eten mee te nemen en thuis op te eten. Bij dit soort plekken langsgaan is vaak vaste prik na het uitgaan, werk of een dagje strand. Er zit wel verschil in de kwaliteit van de verschillende plekken, dit is een favoriet.",
      es: 'Es un llamado Truki Pan, normalmente una especie de food truck junto a la carretera donde se vende comida. Es un sitio muy de noche, piensa a partir de las 20:00 o 21:00, al que van muchos locales a comprar comida asequible. Hay mesas de picnic donde puedes esperar tu pedido y comerlo allí cuando esté listo, aunque también es muy común llevárselo a casa. Pasar por este tipo de lugares suele ser un plan fijo después de salir, trabajar o pasar el día en la playa. La calidad cambia según el sitio, y este es uno de nuestros favoritos.',
      en: "This is a so-called Truki Pan, usually a roadside food truck selling meals. It is a real evening spot, think after 20:00 or 21:00, where many locals come for affordable food. There are picnic benches where you can wait and eat once your order is ready, but it is also very common to take it home. Stops like this are often part of the routine after going out, work or a day at the beach. Quality varies from place to place, and this one is a favourite.",
    },
  },
  {
    id: 'sint-willibrordus',
    category: 'sights',
    name: 'Sint Willibrordus',
    blurb: {
      nl: 'Bij Sint Willibrordus kun je vaak prachtige flamingo\'s bewonderen in het zoutmeer naast de weg. Vooral rond zonsopkomst of zonsondergang is het uitzicht hier extra mooi. Als je hier in de buurt bent is het zeker de moeite waard om hier even te stoppen.',
      es: 'En Sint Willibrordus a menudo puedes ver flamencos preciosos en el lago salado junto a la carretera. La vista es especialmente bonita al amanecer o al atardecer. Si estás por la zona, merece mucho la pena parar un momento.',
      en: 'At Sint Willibrordus, you can often spot beautiful flamingos in the salt lake beside the road. The view is especially lovely around sunrise or sunset. If you\'re nearby, it is definitely worth a quick stop.',
    },
  },
  {
    id: 'quad-rijden',
    category: 'activities',
    name: 'Quad rijden',
    image: quadRijdenImg,
    blurb: {
      nl: 'Als je Curaçao eens op een avontuurlijke manier wil ontdekken, kan je dat heel goed op een quad doen. Wij zijn met Eric\'s ATV Adventures gegaan en dat was echt top! Met een quad cross je over stoffige wegen, langs ruige kustlijnen en verborgen plekken waar je normaal niet snel komt. Ze hebben verschillende opties. De meest populaire tour is de east tour, deze komt langs de meest toeristische plekken. Wij hadden deze al vaak genoeg gezien en zijn voor de west tour gegaan, dan kom je op plekken waar je normaal niet zo snel komt en krijg je een hele andere kant van Curacao te zien.',
      es: 'Si quieres descubrir Curazao de una forma más aventurera, hacerlo en quad es una gran opción. Nosotros fuimos con Eric\'s ATV Adventures y estuvo genial. En quad cruzas caminos polvorientos, costas más salvajes y rincones escondidos a los que normalmente no llegarías. Tienen varias opciones. La ruta más popular es la del este, que pasa por los lugares más turísticos. Como ya los habíamos visto muchas veces, elegimos la ruta del oeste. Te lleva a sitios a los que normalmente no irías tan rápido y te muestra una cara completamente diferente de Curazao.',
      en: 'If you want to discover Curaçao in a more adventurous way, a quad bike is a great option. We went with Eric\'s ATV Adventures and it was excellent. You\'ll cross dusty roads, rugged coastlines and hidden spots you normally wouldn\'t reach. They offer several tours. The most popular is the east tour, which passes the main tourist spots. We had seen those often enough, so we chose the west tour. It takes you to places you normally wouldn\'t get to and shows you a completely different side of Curaçao.',
    },
  },
  {
    id: 'hofi-mango',
    category: 'sights',
    name: 'Hofi Mango',
    blurb: {
      nl: 'Hofi Mango is een groene oase midden op het eiland. Hier wandel je tussen honderden mangobomen, tropische planten (enorme cactussen!) en rustige natuurpaden. Het park draait om duurzaamheid en natuurbehoud, maar voelt vooral als een fijne plek om even aan de drukte te ontsnappen. Extra leuk: in het mangoseizoen ruikt het hier overal heerlijk zoet.',
      es: 'Hofi Mango es un oasis verde en medio de la isla. Aquí paseas entre cientos de mangos, plantas tropicales, cactus enormes y senderos tranquilos. El parque gira en torno a la sostenibilidad y la conservación de la naturaleza, pero sobre todo se siente como un lugar agradable para escapar un rato del ajetreo. Además, en temporada de mango todo huele maravillosamente dulce.',
      en: 'Hofi Mango is a green oasis in the middle of the island. You walk among hundreds of mango trees, tropical plants, huge cacti, and peaceful nature trails. The park is centred on sustainability and nature conservation, but more than anything it feels like a lovely place to escape the bustle. Extra nice: during mango season, the whole place smells wonderfully sweet.',
    },
  },
  {
    id: 'kura-hulanda',
    category: 'sights',
    name: 'Kura Hulanda',
    blurb: {
      nl: 'Kurá Hulanda is een museum over de geschiedenis van de slavernij, Afrika en de Caribische cultuur. Het museum is indrukwekkend en soms confronterend, maar absoluut de moeite waard. Naast de exposities is ook het historische terrein zelf prachtig om doorheen te wandelen.',
      es: 'Kurá Hulanda es un museo sobre la historia de la esclavitud, África y la cultura caribeña. Es impresionante y a veces duro, pero merece muchísimo la pena. Además de las exposiciones, el propio recinto histórico es precioso para pasear.',
      en: 'Kurá Hulanda is a museum about the history of slavery, Africa and Caribbean culture. It is impressive and sometimes confronting, but absolutely worth visiting. Besides the exhibitions, the historic grounds themselves are beautiful to walk through.',
    },
  },
  {
    id: 'grote-kleine-knip',
    category: 'beach',
    name: 'Grote & Kleine Knip',
    blurb: {
      nl: 'Playa Kenepa Grandi, beter bekend als Grote Knip, is misschien wel het bekendste strand van Curaçao. Denk aan helderblauw water, witte stranden en uitzicht waar je meteen je camera voor pakt. Vlak daarnaast ligt Playa Kenepa Chiki (Kleine Knip): kleiner, rustiger en perfect om relaxed te snorkelen.',
      es: 'Playa Kenepa Grandi, más conocida como Grote Knip, quizá sea la playa más famosa de Curazao. Piensa en agua azul cristalina, arena blanca y vistas que te hacen sacar la cámara al instante. Justo al lado está Playa Kenepa Chiki, Kleine Knip, más pequeña, más tranquila y perfecta para hacer snorkel con calma.',
      en: 'Playa Kenepa Grandi, better known as Grote Knip, may be Curaçao\'s best-known beach. Think clear blue water, white sand and views that make you reach for your camera straight away. Right next to it is Playa Kenepa Chiki, Kleine Knip, smaller, quieter and perfect for relaxed snorkelling.',
    },
  },
  {
    id: 'fort-nassau',
    category: 'food',
    name: 'Fort Nassau',
    blurb: {
      nl: 'Bij Fort Nassau eet je niet alleen lekker, maar heb je ook een van de mooiste uitzichten van het eiland. Vanaf het oude fort kijk je uit over Willemstad, de haven en de zee. Vooral tijdens zonsondergang is dit een populaire plek voor een uitgebreid diner of een gezellige cocktailavond.',
      es: 'En Fort Nassau no solo se come bien, también tienes una de las vistas más bonitas de la isla. Desde el antiguo fuerte se ve Willemstad, el puerto y el mar. Es un lugar especialmente popular al atardecer para una cena larga o una noche agradable de cócteles.',
      en: 'At Fort Nassau, you get great food and one of the island\'s most beautiful views. From the old fort, you look out over Willemstad, the harbour and the sea. It is especially popular around sunset for a long dinner or a cosy cocktail evening.',
    },
  },
  {
    id: 'playa-piskado',
    category: 'beach',
    name: 'Playa Piskado',
    blurb: {
      nl: 'Playa Piskado staat bekend als dé plek om zeeschildpadden van dichtbij te zien. Vaak zwemmen ze gewoon rustig tussen de mensen door terwijl jij snorkelt in het heldere water. Een bijzondere ervaring die Curaçao voor veel bezoekers extra speciaal maakt. De reden voor zo veel schildpadden is dat hier de vissers hun vis schoonmaken en de resten teruggooien in de zee. Het kan dus ook wel een beetje ruiken naar vis resten…',
      es: 'Playa Piskado es conocida como el lugar para ver tortugas marinas de cerca. A menudo nadan tranquilamente entre la gente mientras haces snorkel en el agua clara, una experiencia especial que hace que Curazao sea aún más memorable para muchos visitantes. Hay tantas tortugas porque los pescadores limpian aquí el pescado y tiran los restos al mar. Así que sí, puede oler un poco a restos de pescado.',
      en: 'Playa Piskado is known as the place to see sea turtles up close. They often swim calmly between people while you snorkel in the clear water, a special experience that makes Curaçao extra memorable for many visitors. There are so many turtles because fishermen clean their catch here and throw the leftovers back into the sea. So yes, it can smell a bit like fish scraps.',
    },
  },
  {
    id: 'toktok',
    category: 'food',
    name: 'TokTok',
    blurb: {
      nl: 'Nog een andere populaire Truki Pan is Toktok. Hier hebben ze heerlijk mals vlees van de barbecue en andere locale specialiteiten. Maak hier een stop om laagdrempelig heerlijk eten af te halen.',
      es: 'Otro Truki Pan popular es TokTok. Tienen carne a la barbacoa muy tierna y otras especialidades locales. Haz una parada aquí para llevarte comida sencilla y muy rica.',
      en: 'Another popular Truki Pan is TokTok. They serve delicious tender barbecue meat and other local specialities. Stop here for easy, tasty takeaway.',
    },
  },
  {
    id: 'ostrich-farm',
    category: 'sights',
    name: 'Ostrich Farm',
    blurb: {
      nl: 'Bij Curaçao Ostrich Farm maak je kennis met de grootste vogels ter wereld. Tijdens een safari-tour leer je van alles over struisvogels en kun je ze zelfs van dichtbij voeren. Het is een leuke activiteit voor jong en oud, voor een leuke afwisseling tussen alle stranddagen.',
      es: 'En Curaçao Ostrich Farm conoces a las aves más grandes del mundo. Durante un safari aprendes de todo sobre los avestruces e incluso puedes darles de comer de cerca. Es una actividad divertida para todas las edades y una buena variación entre tantos días de playa.',
      en: 'At Curaçao Ostrich Farm, you meet the largest birds in the world. During a safari tour, you\'ll learn all about ostriches and can even feed them up close. It is a fun activity for all ages and a nice change between beach days.',
    },
  },
  {
    id: 'pirate-bay',
    category: 'beach',
    name: 'Pirate Bay',
    blurb: {
      nl: 'Pirate Bay is een relaxte strandplek waar locals en toeristen graag samenkomen. Je kunt hier chillen op het strand, snorkelen of genieten van een cocktail terwijl de zon langzaam ondergaat.',
      es: 'Pirate Bay es un lugar de playa relajado donde se reúnen tanto locales como turistas. Puedes descansar en la playa, hacer snorkel o disfrutar de un cóctel mientras el sol se pone poco a poco.',
      en: 'Pirate Bay is a relaxed beach spot where locals and tourists like to gather. You can chill on the beach, snorkel or enjoy a cocktail while the sun slowly sets.',
    },
  },
  {
    id: 'shete-boka',
    category: 'sights',
    name: 'Shete Boka',
    blurb: {
      nl: 'Bij Shete Boka National Park zie je de ruige kant van Curaçao. Grote golven slaan hier hard tegen de rotsen terwijl je langs verschillende baaien en grotten wandelt.',
      es: 'En el Parque Nacional Shete Boka ves el lado más salvaje de Curazao. Grandes olas golpean con fuerza contra las rocas mientras caminas junto a distintas bahías y cuevas.',
      en: 'At Shete Boka National Park, you see Curaçao\'s rugged side. Huge waves crash hard against the rocks as you walk past different bays and caves.',
    },
  },
  {
    id: 'amazonia',
    category: 'sights',
    name: 'Amazonia',
    blurb: {
      nl: 'Ontdek de jungle! In dit park kijk je je ogen uit met alle verschillende soorten dieren die aanwezig zijn. Met in de hoofdrol Luna, de dansende kaketoe.',
      es: 'Descubre la jungla. En este parque no sabrás dónde mirar con todos los animales diferentes que hay. La protagonista es Luna, la cacatúa bailarina.',
      en: 'Discover the jungle! This park is full of different animals to see, with Luna, the dancing cockatoo, in the starring role.',
    },
  },
  {
    id: 'de-visserij',
    category: 'food',
    name: 'De Visserij Piscadera',
    blurb: {
      nl: 'Bij De Visserij draait alles om verse vis. Je kiest zelf je vis of zeevruchten uit, waarna het direct voor je wordt bereid. De sfeer is gezellig en ongedwongen, alsof je aanschuift bij een lokale barbecue aan zee.',
      es: 'En De Visserij todo gira en torno al pescado fresco. Tú eliges el pescado o marisco y te lo preparan al momento. El ambiente es acogedor y relajado, como si te sentaras en una barbacoa local junto al mar.',
      en: 'At De Visserij, everything is about fresh fish. You choose your fish or seafood yourself, then it is prepared for you right away. The atmosphere is friendly and relaxed, almost like joining a local barbecue by the sea.',
    },
  },
  {
    id: 'klein-curacao',
    category: 'activities',
    name: 'Klein Curaçao',
    blurb: {
      nl: 'Klein Curaçao is een klein onbewoond eiland op ongeveer twee uur varen van Curaçao. Je vindt hier een hagelwit strand, een oude vuurtoren en helderblauw water waar je geweldig kunt snorkelen.',
      es: 'Klein Curaçao es una pequeña isla deshabitada a unas dos horas en barco desde Curazao. Allí encontrarás una playa blanquísima, un antiguo faro y agua azul cristalina donde se puede hacer snorkel de maravilla.',
      en: 'Klein Curaçao is a small uninhabited island about two hours by boat from Curaçao. You\'ll find a bright white beach, an old lighthouse and clear blue water that is perfect for snorkelling.',
    },
  },
  {
    id: 'mambo-beach',
    category: 'beach',
    name: 'Mambo Beach',
    blurb: {
      nl: "Mambo Beach is een van de gezelligste stranden van het eiland. Overdag kun je hier relaxen op een ligbed aan zee en 's avonds verandert het gebied in een levendige plek vol restaurants, bars en muziek. Ideaal als je strand en gezelligheid wilt combineren.",
      es: 'Mambo Beach es una de las playas más animadas de la isla. Durante el día puedes relajarte en una tumbona junto al mar y, por la noche, la zona se convierte en un lugar lleno de vida con restaurantes, bares y música. Ideal si quieres combinar playa y buen ambiente.',
      en: 'Mambo Beach is one of the island\'s liveliest beaches. During the day, you can relax on a lounger by the sea, and in the evening the area turns into a lively spot full of restaurants, bars and music. Ideal if you want to combine beach time with a fun atmosphere.',
    },
  },
  {
    id: 'sint-christoffelberg',
    category: 'activities',
    name: 'Sint Christoffelberg',
    image: sintChristoffelbergImg,
    blurb: {
      nl: 'De Christoffelberg beklimmen is een uitdaging, maar absoluut de moeite waard. De wandeling naar de top is pittig, vooral in de warmte, maar eenmaal boven word je beloond met een spectaculair uitzicht over bijna het hele eiland. Het beste kun je vroeg in de ochtend vertrekken.',
      es: 'Subir el Christoffelberg es un reto, pero merece totalmente la pena. La caminata hasta la cima es exigente, sobre todo con el calor, pero una vez arriba te espera una vista espectacular de casi toda la isla. Lo mejor es salir temprano por la mañana.',
      en: 'Climbing Christoffelberg is a challenge, but absolutely worth it. The hike to the top is tough, especially in the heat, but once you reach the summit you are rewarded with a spectacular view over almost the whole island. It is best to leave early in the morning.',
    },
  },
  {
    id: 'willemstad',
    category: 'sights',
    name: 'Willemstad',
    blurb: {
      nl: 'Willemstad is het kleurrijke hart van Curaçao. De beroemde gekleurde huisjes langs de Handelskade, de Pontjesbrug en de gezellige straatjes maken de stad uniek. Je vindt hier een mix van cultuur, historie, winkels, restaurants en een ontspannen Caribische sfeer.',
      es: 'Willemstad es el corazón colorido de Curazao. Las famosas casas de colores junto a la Handelskade, el Puente Reina Emma y sus calles acogedoras hacen que la ciudad sea única. Aquí encuentras una mezcla de cultura, historia, tiendas, restaurantes y un ambiente caribeño relajado.',
      en: 'Willemstad is the colourful heart of Curaçao. The famous colourful houses along the Handelskade, the Queen Emma Bridge and the cosy streets make the city unique. You\'ll find a mix of culture, history, shops, restaurants and a relaxed Caribbean atmosphere.',
    },
  },
  {
    id: 'otrobanda-murals',
    category: 'sights',
    name: 'Otrobanda Murals',
    blurb: {
      nl: 'De kleurrijke muurschilderingen in Otrobanda vormen een van de meest bijzondere culturele trekpleisters van Curaçao. De wijk is uitgegroeid tot een groot openluchtmuseum waar lokale en internationale kunstenaars muren hebben omgetoverd tot indrukwekkende kunstwerken. De schilderingen vertellen verhalen over de geschiedenis, cultuur en identiteit van het eiland, met thema\'s zoals muziek, slavernij, natuur en het dagelijks leven op Curaçao.',
      es: 'Los murales de colores de Otrobanda son una de las atracciones culturales más especiales de Curazao. El barrio se ha convertido en un gran museo al aire libre donde artistas locales e internacionales han transformado muros en obras impresionantes. Las pinturas cuentan historias sobre la historia, la cultura y la identidad de la isla, con temas como la música, la esclavitud, la naturaleza y la vida cotidiana en Curazao.',
      en: 'The colourful murals in Otrobanda are one of Curaçao\'s most special cultural attractions. The neighbourhood has become a large open-air museum where local and international artists have transformed walls into impressive artworks. The murals tell stories about the island\'s history, culture and identity, with themes such as music, slavery, nature and daily life on Curaçao.',
    },
  },
  {
    id: 'jan-thiel-beach',
    category: 'beach',
    name: 'Jan Thiel Beach',
    blurb: {
      nl: "Jan Thiel Beach is een populaire hotspot waar strand, luxe en gezelligheid samenkomen. Overdag kun je relaxen aan het water en 's avonds geniet je hier van beachclubs, cocktails en live muziek. Vooral tijdens zonsondergang hangt hier een gezellige sfeer.",
      es: 'Jan Thiel Beach es un hotspot popular donde se combinan playa, lujo y buen ambiente. Durante el día puedes relajarte junto al agua y, por la noche, disfrutar de beach clubs, cócteles y música en directo. El ambiente es especialmente agradable durante el atardecer.',
      en: 'Jan Thiel Beach is a popular hotspot where beach, luxury and good vibes come together. During the day, you can relax by the water, and in the evening you can enjoy beach clubs, cocktails and live music. The atmosphere is especially lovely around sunset.',
    },
  },
  {
    id: 'cas-abao-beach',
    category: 'beach',
    name: 'Cas Abao Beach',
    blurb: {
      nl: 'Cas Abao Beach is een van de mooiste en populairste stranden van Curaçao. Het water is hier helderblauw, het zand spierwit en de sfeer heerlijk relaxed. Door het rustige water is het ook een perfecte plek om te snorkelen tussen kleurrijke vissen.',
      es: 'Cas Abao Beach es una de las playas más bonitas y populares de Curazao. El agua es azul cristalina, la arena blanquísima y el ambiente muy relajado. Gracias al agua tranquila, también es un lugar perfecto para hacer snorkel entre peces de colores.',
      en: 'Cas Abao Beach is one of Curaçao\'s most beautiful and popular beaches. The water is clear blue, the sand is bright white and the atmosphere is wonderfully relaxed. The calm water also makes it a perfect place to snorkel among colourful fish.',
    },
  },
  {
    id: 'playa-daaibooi',
    category: 'beach',
    name: 'Playa Daaibooi',
    blurb: {
      nl: 'Playa Daaibooi is een geliefd strand aan de westkust van Curaçao en staat bekend om zijn rustige en natuurlijke sfeer. Het strand ligt tussen hoge rotsen en helder turquoise water, waardoor het een prachtige plek is om te ontspannen en van de natuur te genieten. Zowel locals als toeristen komen hier graag om te zwemmen, snorkelen of gewoon te genieten van de zon.',
      es: 'Playa Daaibooi es una playa muy querida en la costa oeste de Curazao, conocida por su ambiente tranquilo y natural. La playa está entre rocas altas y agua turquesa clara, lo que la convierte en un lugar precioso para relajarse y disfrutar de la naturaleza. Tanto locales como turistas vienen aquí a nadar, hacer snorkel o simplemente disfrutar del sol.',
      en: 'Playa Daaibooi is a beloved beach on Curaçao\'s west coast, known for its quiet, natural atmosphere. The beach sits between high rocks and clear turquoise water, making it a beautiful place to relax and enjoy nature. Both locals and tourists love coming here to swim, snorkel or simply enjoy the sun.',
    },
  },
];
