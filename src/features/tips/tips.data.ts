import { type ImageMetadata } from 'astro';
import { type TKey } from '~/i18n';

import flakosGrillImg from '~/assets/our_tips/food/20240218_210219.jpg';
import deVisserijImg from '~/assets/our_tips/food/20230101_190159.jpg';
import tokTokImg from '~/assets/our_tips/food/IMG_5404.jpg';
import fortNassauImg from '~/assets/our_tips/food/IMG_5451.jpg';

import quadRijdenImg from '~/assets/our_tips/activities/IMG_9751.jpg';
import sintChristoffelbergImg from '~/assets/our_tips/activities/IMG_3442.jpg';
import kleinCuracaoImg from '~/assets/our_tips/beach/20221228_100749.jpg';

import sintWillibrordusImg from '~/assets/our_tips/tourist_sight/IMG_9797.jpg';
import hofiMangoImg from '~/assets/our_tips/tourist_sight/20240214_133233.jpg';
import kuraHulandaImg from '~/assets/our_tips/tourist_sight/IMG_9418.jpg';
import ostrichFarmImg from '~/assets/our_tips/tourist_sight/IMG_5369.jpg';
import sheteBokaImg from '~/assets/our_tips/tourist_sight/IMG_4842.jpg';
import amazoniaImg from '~/assets/our_tips/tourist_sight/IMG_5267.jpg';
import willemstadImg from '~/assets/our_tips/tourist_sight/IMG_4245.jpg';
import otrobandaMuralsImg from '~/assets/our_tips/tourist_sight/20240208_112152.jpg';

import groteKleineKnipImg from '~/assets/our_tips/beach/IMG_4631.jpg';
import playaPiskadoImg from '~/assets/our_tips/beach/IMG_5423.jpg';
import pirateBayImg from '~/assets/our_tips/beach/IMG_5319.jpg.jpeg';
import mamboBeachImg from '~/assets/our_tips/beach/IMG_4691.jpg';
import janThielBeachImg from '~/assets/our_tips/beach/IMG_4808.jpg';
import casAbaoBeachImg from '~/assets/our_tips/beach/IMG_4925.jpg';
import playaDaaibooiImg from '~/assets/our_tips/beach/IMG_5335.jpg';

export type TipCategory = 'food' | 'activities' | 'sights' | 'beach';

export interface Tip {
  id: string;
  category: TipCategory;
  name: string;
  /** Translation key for the blurb — the copy lives in src/i18n/*.json. */
  blurb: TKey;
  image: ImageMetadata;
}

export const TIPS: Tip[] = [
  {
    id: 'flakos-grill',
    category: 'food',
    name: "Flako's Grill",
    image: flakosGrillImg,
    blurb: 'tips.flakos-grill.blurb',
  },
  {
    id: 'sint-willibrordus',
    category: 'sights',
    name: 'Sint Willibrordus',
    image: sintWillibrordusImg,
    blurb: 'tips.sint-willibrordus.blurb',
  },
  {
    id: 'quad-rijden',
    category: 'activities',
    name: 'Quad rijden',
    image: quadRijdenImg,
    blurb: 'tips.quad-rijden.blurb',
  },
  {
    id: 'hofi-mango',
    category: 'sights',
    name: 'Hofi Mango',
    image: hofiMangoImg,
    blurb: 'tips.hofi-mango.blurb',
  },
  {
    id: 'kura-hulanda',
    category: 'sights',
    name: 'Kura Hulanda',
    image: kuraHulandaImg,
    blurb: 'tips.kura-hulanda.blurb',
  },
  {
    id: 'grote-kleine-knip',
    category: 'beach',
    name: 'Grote & Kleine Knip',
    image: groteKleineKnipImg,
    blurb: 'tips.grote-kleine-knip.blurb',
  },
  {
    id: 'fort-nassau',
    category: 'food',
    name: 'Fort Nassau',
    image: fortNassauImg,
    blurb: 'tips.fort-nassau.blurb',
  },
  {
    id: 'playa-piskado',
    category: 'beach',
    name: 'Playa Piskado',
    image: playaPiskadoImg,
    blurb: 'tips.playa-piskado.blurb',
  },
  {
    id: 'toktok',
    category: 'food',
    name: 'TokTok',
    image: tokTokImg,
    blurb: 'tips.toktok.blurb',
  },
  {
    id: 'ostrich-farm',
    category: 'sights',
    name: 'Ostrich Farm',
    image: ostrichFarmImg,
    blurb: 'tips.ostrich-farm.blurb',
  },
  {
    id: 'pirate-bay',
    category: 'beach',
    name: 'Pirate Bay',
    image: pirateBayImg,
    blurb: 'tips.pirate-bay.blurb',
  },
  {
    id: 'shete-boka',
    category: 'sights',
    name: 'Shete Boka',
    image: sheteBokaImg,
    blurb: 'tips.shete-boka.blurb',
  },
  {
    id: 'amazonia',
    category: 'sights',
    name: 'Amazonia',
    image: amazoniaImg,
    blurb: 'tips.amazonia.blurb',
  },
  {
    id: 'de-visserij',
    category: 'food',
    name: 'De Visserij Piscadera',
    image: deVisserijImg,
    blurb: 'tips.de-visserij.blurb',
  },
  {
    id: 'klein-curacao',
    category: 'activities',
    name: 'Klein Curaçao',
    image: kleinCuracaoImg,
    blurb: 'tips.klein-curacao.blurb',
  },
  {
    id: 'mambo-beach',
    category: 'beach',
    name: 'Mambo Beach',
    image: mamboBeachImg,
    blurb: 'tips.mambo-beach.blurb',
  },
  {
    id: 'sint-christoffelberg',
    category: 'activities',
    name: 'Sint Christoffelberg',
    image: sintChristoffelbergImg,
    blurb: 'tips.sint-christoffelberg.blurb',
  },
  {
    id: 'willemstad',
    category: 'sights',
    name: 'Willemstad',
    image: willemstadImg,
    blurb: 'tips.willemstad.blurb',
  },
  {
    id: 'otrobanda-murals',
    category: 'sights',
    name: 'Otrobanda Murals',
    image: otrobandaMuralsImg,
    blurb: 'tips.otrobanda-murals.blurb',
  },
  {
    id: 'jan-thiel-beach',
    category: 'beach',
    name: 'Jan Thiel Beach',
    image: janThielBeachImg,
    blurb: 'tips.jan-thiel-beach.blurb',
  },
  {
    id: 'cas-abao-beach',
    category: 'beach',
    name: 'Cas Abao Beach',
    image: casAbaoBeachImg,
    blurb: 'tips.cas-abao-beach.blurb',
  },
  {
    id: 'playa-daaibooi',
    category: 'beach',
    name: 'Playa Daaibooi',
    image: playaDaaibooiImg,
    blurb: 'tips.playa-daaibooi.blurb',
  },
];
