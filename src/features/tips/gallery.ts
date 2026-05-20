import type { ImageMetadata } from 'astro';
import { type TipCategory } from './tips.data';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/our_tips/**/*.{jpg,JPG,jpeg,png}',
  { eager: true },
);

const folderToCategory: Record<string, TipCategory> = {
  activities: 'activities',
  beach: 'beach',
  food: 'food',
  tourist_sight: 'sights',
};

export const galleryByCategory: Record<TipCategory, ImageMetadata[]> = {
  food: [],
  activities: [],
  sights: [],
  beach: [],
};

for (const [path, mod] of Object.entries(modules)) {
  const folder = path.split('/our_tips/')[1]?.split('/')[0] ?? '';
  const category = folderToCategory[folder];
  if (category) {
    galleryByCategory[category].push(mod.default);
  }
}
