import sharp from 'sharp';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'brand/samikshas-nest-inn-logo.png');
const out = path.join(root, 'src/assets/brand');
const pub = path.join(root, 'public');

const tint = async (hex, file) => {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  for (let i = 0; i < data.length; i += 4) {
    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
  }
  await sharp(data, { raw: info }).png({ compressionLevel: 9 }).toFile(path.join(out, file));
};

await tint('#ffffff', 'logo-light.png');
await tint('#14294a', 'logo-dark.png');
await sharp(src).toFile(path.join(out, 'logo-colour.png'));

const meta = await sharp(src).metadata();

const cropped = await sharp(src)
  .extract({ left: 1228, top: 348, width: 352, height: Math.min(205, meta.height - 348) })
  .toBuffer();
const house = await sharp(cropped)
  .trim({ threshold: 1 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
for (let i = 0; i < house.data.length; i += 4) {
  house.data[i] = 255;
  house.data[i + 1] = 255;
  house.data[i + 2] = 255;
}
const mark = await sharp(house.data, { raw: house.info }).resize(380, 300, { fit: 'inside' }).png().toBuffer();
const badge = (size) =>
  sharp({ create: { width: 512, height: 512, channels: 4, background: '#14294a' } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toBuffer()
    .then((b) => sharp(b).resize(size, size).png().toFile(path.join(pub, size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`)));
await badge(180);
await badge(64);
await badge(32);
console.log('done');
