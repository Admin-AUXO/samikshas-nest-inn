import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const file = path.join(root, 'src/data/airbnb.json');
const listing = 'https://www.airbnb.co.in/rooms/20239760';

const previous = JSON.parse(fs.readFileSync(file, 'utf8'));

const categories = {
  CHECKIN: 'Check-in',
  COMMUNICATION: 'Communication',
  ACCURACY: 'Accuracy',
  LOCATION: 'Location',
  CLEANLINESS: 'Cleanliness',
  VALUE: 'Value'
};

async function main() {
  const res = await fetch(listing, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
      'Accept-Language': 'en-IN,en;q=0.9'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();

  const score = Number(html.match(/"guestSatisfactionOverall":([\d.]+)/)?.[1] ?? html.match(/"starRating":([\d.]+)/)?.[1]);
  const count = Number(html.match(/"reviewCount":(\d+)/)?.[1]);
  const superhost = /"isSuperhost":true/.test(html);
  const scores = Object.entries(categories).map(([type, label]) => ({
    label,
    value: Number(html.match(new RegExp(`"categoryType":"${type}","localizedRating":"([\\d.]+)"`))?.[1])
  }));

  if (!(score >= 1 && score <= 5) || !(count > 0) || scores.some((s) => !(s.value >= 1 && s.value <= 5))) {
    throw new Error('Could not read the rating from the listing page');
  }
  if (count < previous.count * 0.8) throw new Error(`Review count dropped from ${previous.count} to ${count}`);

  const next = { score, count, superhost, scores, checked: new Date().toISOString().slice(0, 10) };
  fs.writeFileSync(file, JSON.stringify(next, null, 2) + '\n');
  console.log(`Airbnb: ${score} from ${count} reviews, superhost ${superhost}`);
}

main().catch((err) => {
  console.warn(`Keeping saved Airbnb stats (${previous.score}, ${previous.count} reviews): ${err.message}`);
});
