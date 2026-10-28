import type { ImageMetadata } from 'astro';

const home = import.meta.glob<{ default: ImageMetadata }>('../assets/home/*.jpg', { eager: true });
const spots = import.meta.glob<{ default: ImageMetadata }>('../assets/spots/*.jpg', { eager: true });

const pick = (set: Record<string, { default: ImageMetadata }>, dir: string, name: string) => {
  const found = set[`../assets/${dir}/${name}.jpg`];
  if (!found) throw new Error(`Missing image ${dir}/${name}`);
  return found.default;
};

export const homeImg = (name: string) => pick(home, 'home', name);
export const spotImg = (name: string) => pick(spots, 'spots', name);
