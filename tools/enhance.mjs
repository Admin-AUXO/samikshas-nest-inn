import sharp from 'sharp';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const raw = path.join(root, 'raw');
const rawSpots = path.join(root, 'raw_spots');
const homeOut = path.join(root, 'src/assets/home');
const spotOut = path.join(root, 'src/assets/spots');

const home = {
  'lawn': { src: 'abnb_fa489b0c-00e6-44e7-b1ed-d9230cce4ada.jpg' },
  'balcony-view': { src: 'abnb_b920df7b-f1fc-4cbd-8725-e83567812cef.jpg', crop: { left: 0.22, top: 0, width: 0.78, height: 1 } },
  'bonfire': { src: 'abnb_c50e21a0-c99d-4991-8b87-f8b2b5176cbe.jpg' },
  'bonfire-evening': { src: 'site_770ad7443bb376372f498784a90abe04.jpg' },
  'sunset': { src: 'abnb_d1f88021-9810-4942-b557-1243655bf9f4.jpg' },
  'mist-valley': { src: 'site_39ede68e4fed0148994d395b44be991f.jpg' },
  'tea-hills': { src: 'site_254dc5398c8aa185f6ddb1f8465d931f.jpg' },
  'tents': { src: 'site_1287cc39b1f98e761d75f081fa0cea72.jpg' },
  'bedroom-1': { src: 'abnb_dc3aaa8b-f3f4-4da9-bba9-84538339dd15.jpeg', crop: { left: 0.1, top: 0.28, width: 0.9, height: 0.72 } },
  'bedroom-2': { src: 'abnb_a7395dea-000c-4b86-9fc8-a0b061fe98a3.jpeg' },
  'bedroom-3': { src: 'abnb_1d7326fb-499c-42e4-93de-481998e2e575.jpeg', crop: { left: 0.2, top: 0, width: 0.8, height: 1 } },
  'bedroom-4': { src: 'abnb_0df3480c-9718-4034-8da4-673b803defe6.jpeg' },
  'bedroom-alt-1': { src: 'site_e921a95155b990c1198ee5fddb439fe4.jpg' },
  'bedroom-alt-2': { src: 'site_924c121d244b5fc682853fe5b2f79e2e.jpg' },
  'dining': { src: 'abnb_355538ee-e6dc-455c-af33-2b077e3da199.jpg' },
  'living-1': { src: 'site_f08adc9d85202bd380c1f5bde1483913.jpg' },
  'living-2': { src: 'site_f374131014d301ea9daeb8223986e164.jpg' },
  'lounge': { src: 'site_bc72aa86e60645f86a584b7a9bed91cb.jpg' },
  'cottage-exterior': { src: 'site_ffb54af799f372556d291b45512a9841.jpg', crop: { left: 0, top: 0.04, width: 1, height: 0.38 } }
};

const spots = {
  'catherine-falls': 'catherine_0.jpg',
  'kodanad': 'kodanad_0.jpg',
  'tea-estates': 'kotagiri_0.jpg',
  'longwood-shola': 'longwood_0.jpg',
  'dolphins-nose': 'dolphin_0.jpg',
  'lambs-rock': 'lambs_2.jpg',
  'sims-park': 'sims_3.jpg',
  'toy-train': 'toytrain_0.jpg',
  'doddabetta': 'doddabetta_1.jpg',
  'ooty-lake': 'ootylake_0.jpg',
  'botanical-garden': 'botanical_2.jpg',
  'rangaswamy': 'rangaswamy_2.jpg',
  'tea-factory': 'teafactory_3.jpg',
  'pine-forest': 'pineforest_1.jpg'
};

const TARGET = 2000;

const grade = (img) =>
  img
    .modulate({ saturation: 0.9, brightness: 1.01 })
    .recomb([
      [1.03, 0.01, 0],
      [0, 1.0, 0],
      [0, 0, 0.95]
    ])
    .linear(0.97, 6)
    .gamma(1.05);

async function enhance(input, output, crop) {
  let img = sharp(input).rotate();
  const meta = await img.metadata();
  let w = meta.width;
  let h = meta.height;
  if (crop) {
    const region = {
      left: Math.round(crop.left * w),
      top: Math.round(crop.top * h),
      width: Math.round(crop.width * w),
      height: Math.round(crop.height * h)
    };
    img = sharp(await img.extract(region).toBuffer());
    w = region.width;
    h = region.height;
  }
  const long = Math.max(w, h);
  const scale = Math.min(2, TARGET / long);
  if (scale > 1.05) {
    img = img.resize(Math.round(w * scale), Math.round(h * scale), { kernel: 'lanczos3' }).sharpen({ sigma: 0.9, m1: 0.6, m2: 2.2 });
  } else if (long > TARGET) {
    img = img.resize({ width: w >= h ? TARGET : undefined, height: h > w ? TARGET : undefined, kernel: 'lanczos3' });
  }
  const out = await grade(img).jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(output);
  return `${path.basename(output)} ${w}x${h} -> ${out.width}x${out.height}`;
}

for (const [name, cfg] of Object.entries(home)) {
  console.log(await enhance(path.join(raw, cfg.src), path.join(homeOut, `${name}.jpg`), cfg.crop));
}
for (const [name, src] of Object.entries(spots)) {
  console.log(await enhance(path.join(rawSpots, src), path.join(spotOut, `${name}.jpg`)));
}
