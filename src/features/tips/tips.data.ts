import { type ImageMetadata } from 'astro';
import { type TKey } from '~/i18n';

import flakosGrillImg from '~/assets/our_tips/food/flakos-grill.jpg';
import deVisserijImg from '~/assets/our_tips/food/20230101_190159.jpg';
import tokTokImg from '~/assets/our_tips/food/IMG_5404.jpg';
import fortNassauImg from '~/assets/our_tips/food/IMG_5451.jpg';
import tokoMoreAndMoreImg from '~/assets/our_tips/food/toko-more-and-more.jpg';
import tokoCindyImg from '~/assets/our_tips/food/toko-cindy.jpg';
import zestBeachCafeImg from '~/assets/our_tips/food/zest-beach-cafe.jpg';
import plasaBieuImg from '~/assets/our_tips/food/plasa-bieu.jpg';
import batidos100Img from '~/assets/our_tips/food/batidos-100.jpg';
import islandBreezeImg from '~/assets/our_tips/food/island-breeze.jpg';

import quadRijdenImg from '~/assets/our_tips/activities/IMG_9751.jpg';
import sintChristoffelbergImg from '~/assets/our_tips/activities/IMG_3442.jpg';
import seuImg from '~/assets/our_tips/activities/seu.jpg';
import kleinCuracaoImg from '~/assets/our_tips/beach/20221228_100749.jpg';

import sintWillibrordusImg from '~/assets/our_tips/tourist_sight/IMG_9797.jpg';
import hofiMangoImg from '~/assets/our_tips/tourist_sight/20240214_133233.jpg';
import kuraHulandaImg from '~/assets/our_tips/tourist_sight/IMG_9418.jpg';
import ostrichFarmImg from '~/assets/our_tips/tourist_sight/IMG_5369.jpg';
import sheteBokaImg from '~/assets/our_tips/tourist_sight/IMG_4842.jpg';
import amazoniaImg from '~/assets/our_tips/tourist_sight/IMG_5267.jpg';
import willemstadImg from '~/assets/our_tips/tourist_sight/IMG_4245.jpg';
import otrobandaMuralsImg from '~/assets/our_tips/tourist_sight/20240208_112152.jpg';
import tomasitoCaveImg from '~/assets/our_tips/tourist_sight/tomasito-cave.jpg';
import barquitoImg from '~/assets/our_tips/tourist_sight/barquito.jpg';
import renaissanceRifFortImg from '~/assets/our_tips/tourist_sight/renaissance-rif-fort.jpg';
import museoTulaImg from '~/assets/our_tips/tourist_sight/museo-tula.jpg';
import marsheNoboImg from '~/assets/our_tips/tourist_sight/marshe-nobo.jpg';

import groteKleineKnipImg from '~/assets/our_tips/beach/IMG_4631.jpg';
import playaPiskadoImg from '~/assets/our_tips/beach/IMG_5423.jpg';
import pirateBayImg from '~/assets/our_tips/beach/IMG_5319.jpg.jpeg';
import mamboBeachImg from '~/assets/our_tips/beach/IMG_4691.jpg';
import janThielBeachImg from '~/assets/our_tips/beach/jan-thiel-beach.jpg';
import casAbaoBeachImg from '~/assets/our_tips/beach/IMG_4925.jpg';
import playaDaaibooiImg from '~/assets/our_tips/beach/IMG_5335.jpg';
import playaKalkiImg from '~/assets/our_tips/beach/playa-kalki.jpg';
import watamulaBeachImg from '~/assets/our_tips/beach/watamula-beach.jpg';

export type TipCategory = 'food' | 'activities' | 'sights' | 'beach';

export interface Tip {
  id: string;
  category: TipCategory;
  name: string;
  /** Translation key for the blurb — the copy lives in src/i18n/*.json. */
  blurb: TKey;
  image: ImageMetadata;
  /** Vertical focal point for the card's 16:10 cover crop. Portrait phone
      photos only show ~a third of their height in the frame, so the ones
      with people carry the object-position that keeps heads in view.
      Omitted = centred. */
  focus?: string;
}

export const TIPS: Tip[] = [
  {
    id: 'flakos-grill',
    category: 'food',
    name: "Flako's Grill",
    image: flakosGrillImg,
    focus: '50% 55%',
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
    focus: '50% 35%',
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
    focus: '50% 48%',
    blurb: 'tips.fort-nassau.blurb',
  },
  {
    id: 'playa-piskado',
    category: 'beach',
    name: 'Playa Piskado',
    image: playaPiskadoImg,
    focus: '50% 20%',
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
    id: 'toko-more-and-more',
    category: 'food',
    name: 'Toko More & More',
    image: tokoMoreAndMoreImg,
    blurb: 'tips.toko-more-and-more.blurb',
  },
  {
    id: 'toko-cindy',
    category: 'food',
    name: 'Toko Cindy',
    image: tokoCindyImg,
    focus: '50% 45%',
    blurb: 'tips.toko-cindy.blurb',
  },
  {
    id: 'zest-beach-cafe',
    category: 'food',
    name: 'Zest Beach Cafe',
    image: zestBeachCafeImg,
    blurb: 'tips.zest-beach-cafe.blurb',
  },
  {
    id: 'plasa-bieu',
    category: 'food',
    name: 'Plasa Bieu',
    image: plasaBieuImg,
    blurb: 'tips.plasa-bieu.blurb',
  },
  {
    id: 'batidos-100',
    category: 'food',
    name: "100% Batido's",
    image: batidos100Img,
    focus: '50% 60%',
    blurb: 'tips.batidos-100.blurb',
  },
  {
    id: 'island-breeze',
    category: 'food',
    name: 'Island Breeze',
    image: islandBreezeImg,
    blurb: 'tips.island-breeze.blurb',
  },
  {
    id: 'ostrich-farm',
    category: 'sights',
    name: 'Ostrich Farm',
    image: ostrichFarmImg,
    focus: '50% 25%',
    blurb: 'tips.ostrich-farm.blurb',
  },
  {
    id: 'pirate-bay',
    category: 'beach',
    name: 'Pirate Bay',
    image: pirateBayImg,
    focus: '50% 30%',
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
    focus: '50% 40%',
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
    id: 'seu',
    category: 'activities',
    name: 'Seú',
    image: seuImg,
    focus: '50% 45%',
    blurb: 'tips.seu.blurb',
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
    id: 'tomasito-cave',
    category: 'sights',
    name: 'Tomasito Cave',
    image: tomasitoCaveImg,
    blurb: 'tips.tomasito-cave.blurb',
  },
  {
    id: 'barquito',
    category: 'sights',
    name: 'Barquito',
    image: barquitoImg,
    blurb: 'tips.barquito.blurb',
  },
  {
    id: 'renaissance-rif-fort',
    category: 'sights',
    name: 'Renaissance Mall & Rif Fort',
    image: renaissanceRifFortImg,
    focus: '50% 70%',
    blurb: 'tips.renaissance-rif-fort.blurb',
  },
  {
    id: 'museo-tula',
    category: 'sights',
    name: 'Museo Tula',
    image: museoTulaImg,
    focus: '50% 45%',
    blurb: 'tips.museo-tula.blurb',
  },
  {
    id: 'marshe-nobo',
    category: 'sights',
    name: 'Marshe Nobo',
    image: marsheNoboImg,
    focus: '50% 35%',
    blurb: 'tips.marshe-nobo.blurb',
  },
  {
    id: 'jan-thiel-beach',
    category: 'beach',
    name: 'Jan Thiel Beach',
    image: janThielBeachImg,
    focus: '50% 40%',
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
  {
    id: 'playa-kalki',
    category: 'beach',
    name: 'Playa Kalki',
    image: playaKalkiImg,
    focus: '50% 50%',
    blurb: 'tips.playa-kalki.blurb',
  },
  {
    id: 'watamula-beach',
    category: 'beach',
    name: 'Watamula Beach',
    image: watamulaBeachImg,
    focus: '50% 60%',
    blurb: 'tips.watamula-beach.blurb',
  },
];
