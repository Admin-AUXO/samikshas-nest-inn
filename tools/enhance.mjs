import sharp from 'sharp';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const raw = path.join(root, 'raw');
const rawSpots = path.join(root, 'raw_spots');
const homeOut = path.join(root, 'src/assets/home');
const spotOut = path.join(root, 'src/assets/spots');

const home = {
  'mist-valley': { src: 'site_39ede68e4fed0148994d395b44be991f.jpg' },
  'lawn-hedge': { src: 'airbnb/a79.jpg' },
  'estate-view': { src: 'airbnb/a65.jpg' },
  'tea-hills': { src: 'airbnb/a55.jpg' },
  'misty-roof': { src: 'airbnb/a06.jpg' },
  'sunrise': { src: 'airbnb/a13.jpg' },
  'aerial': { src: 'airbnb/a08.jpg' },
  'cottage-lawn': { src: 'airbnb/a10.jpg' },
  'cottage-garden': { src: 'airbnb/a69.jpg', crop: { left: 0, top: 0.1, width: 1, height: 0.8 } },
  'lawn': { src: 'abnb_fa489b0c-00e6-44e7-b1ed-d9230cce4ada.jpg' },
  'bonfire': { src: 'abnb_c50e21a0-c99d-4991-8b87-f8b2b5176cbe.jpg' },
  'bonfire-tents': { src: 'airbnb/a74.jpg' },
  'bonfire-evening': { src: 'airbnb/a58.jpg' },
  'grill': { src: 'airbnb/a11.jpg' },
  'bedroom-1': { src: 'airbnb/a43.jpg' },
  'bedroom-2': { src: 'airbnb/a42.jpg' },
  'bedroom-3': { src: 'airbnb/a49.jpg' },
  'bedroom-4': { src: 'airbnb/a39.jpg' },
  'bathroom': { src: 'airbnb/a45.jpg' },
  'dining': { src: 'airbnb/a82.jpg' },
  'living-1': { src: 'airbnb/a63.jpg' },
  'living-2': { src: 'airbnb/a60.jpg' },
  'lounge': { src: 'airbnb/a87.jpg' },
  'estate-track': { src: 'airbnb/a24.jpg' }
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
