import fs from 'node:fs';
const queries = JSON.parse(process.argv[2]);
const out = process.argv[3];
fs.mkdirSync(out, { recursive: true });
const meta = [];
const UA = { 'User-Agent': 'SamikshasNestSite/0.1 (admin@neuro-stellar.com)' };
for (const [key, q] of Object.entries(queries)) {
  const u = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=4&gsrsearch=${encodeURIComponent(q + ' filetype:bitmap')}&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=1600`;
  const r = await (await fetch(u, { headers: UA })).json();
  const pages = Object.values(r.query?.pages || {}).sort((a, b) => a.index - b.index);
  let n = 0;
  for (const p of pages) {
    const ii = p.imageinfo?.[0]; if (!ii || ii.width < 900) continue;
    const m = ii.extmetadata || {};
    const file = `${key}_${n++}.jpg`;
    const buf = Buffer.from(await (await fetch(ii.thumburl, { headers: UA })).arrayBuffer());
    fs.writeFileSync(`${out}/${file}`, buf);
    meta.push({ file, title: p.title, page: ii.descriptionurl, license: m.LicenseShortName?.value, artist: (m.Artist?.value || '').replace(/<[^>]+>/g, '').trim() });
  }
}
fs.writeFileSync(`${out}/meta.json`, JSON.stringify(meta, null, 1));
console.log(meta.map(m => `${m.file} | ${m.license} | ${m.artist} | ${m.title}`).join('\n'));
