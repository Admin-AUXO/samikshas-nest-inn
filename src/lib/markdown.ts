import { site, facts, rooms, amenities, scores, reviews, faqs } from '../data/site';
import { menu, combo, extras, menuNotes } from '../data/menu';
import { areas, itineraries, routes, arrival, weather, pack, essentials } from '../data/explore';
import { url } from './url';

export const abs = (path: string) => new URL(url(path), import.meta.env.SITE).href;

export const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';

export const summary =
  "Samiksha's Nest Inn is a private four-bedroom cottage for up to 12 guests inside a working tea estate at West Brooke, 7 km from Kotagiri in the Nilgiris, Tamil Nadu, India. Meals are cooked to order on site. Bookings are made on Airbnb.";

const address = `${site.address.street}, ${site.address.locality}, ${site.address.district}, ${site.address.region} ${site.address.postcode}, India`;

export const homeMd = () => `# ${site.name}

> ${summary}

- Address: ${address}
- Map: ${site.mapsLink} (${site.geo.lat}, ${site.geo.lng})
- Book: ${site.airbnb}
- Phone and WhatsApp: ${site.phones.map((p) => p.display).join(', ')} (${site.hours})
- Email: ${site.email}
- Rating: ${site.rating.score} out of 5 from ${site.rating.count} Airbnb reviews; host ${site.host.name} is an Airbnb Superhost

## The cottage

${facts.map((f) => `- ${f.label}: ${f.value}`).join('\n')}

Inside a tea estate at West Brooke, between Kotagiri, Coonoor and Ooty. Two living rooms, a dining room, a covered lounge and a fenced private lawn with a fire pit. A caretaker, Pradeep, lives on site and cooks to order.

Amenities: ${amenities.join(', ')}.

## Bedrooms

${rooms.map((r) => `- ${r.name}: ${r.bed}, ${r.bath.toLowerCase()}`).join('\n')}

Up to five extra mattresses on request.

## Guest ratings

${scores.map((s) => `- ${s.label}: ${s.value}`).join('\n')}

${reviews.map((r) => `> ${r.quote}\n> — ${r.name}, ${r.date}`).join('\n\n')}

## Location and access

About 7 km from Kotagiri on the Kotagiri–Coonoor road. The last 200–300 m is an unpaved estate track: hatchbacks and SUVs manage it, minibuses and tempo travellers find it tight.

${routes.slice(0, 6).map((r) => `- ${r.from}: ${r.km}, about ${r.time} by car`).join('\n')}

## FAQ

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}
`;

export const diningMd = () => `# Dining at ${site.name}

> Home-style South Indian and Indian food cooked to order by the caretaker. Prices in Indian rupees, from the cottage's current menu card.

${menu
  .map(
    (c) =>
      `## ${c.title}${c.note ? ` (${c.note})` : ''}\n\n${c.dishes
        .map((d) => `- ${d.name}${d.detail ? ` (${d.detail})` : ''}: ${d.price}${d.veg ? ', vegetarian' : ''}`)
        .join('\n')}`
  )
  .join('\n\n')}

## ${combo.title}: ${combo.price}

${combo.items.join(', ')}.

## Extras

${extras.map((e) => `- ${e.name} (${e.detail}): ${e.price}`).join('\n')}

## How ordering works

${menuNotes.map((n) => `- ${n}`).join('\n')}
`;

export const exploreMd = () => `# Area guide: Kotagiri, Coonoor and Ooty from ${site.name}

> Drive times from the cottage at West Brooke, Kotagiri, measured on Google Maps without heavy traffic.

${areas
  .map(
    (a) =>
      `## ${a.title}\n\n${a.intro}\n\n${a.spots
        .map((s) => `- ${s.name}: ${s.km} km, ${s.mins}. ${s.text}${s.tip ? ` ${s.tip}` : ''}`)
        .join('\n')}`
  )
  .join('\n\n')}

## Day plans

${itineraries.map((i) => `- ${i.title}: ${i.stops.join(' → ')}`).join('\n')}

## Getting here

${arrival.map((a) => `- ${a.title}: ${a.text}`).join('\n')}

${routes.map((r) => `- ${r.from}: ${r.km}, ${r.time}`).join('\n')}

## Before you travel

${essentials.map((e) => `- ${e.title}: ${e.text}`).join('\n')}

### Weather

${weather.map((w) => `- ${w.months}: ${w.temp}. ${w.text}`).join('\n')}

### What to pack

${pack.map((p) => `- ${p}`).join('\n')}
`;

export const llmsTxt = () => `# ${site.name}

> ${summary}

Key facts: 4 bedrooms (2 king, 2 queen; 3 en suite), up to 12 guests, private lawn with bonfire and barbecue, caretaker on site, meals cooked to order and charged per dish. Rated ${site.rating.score}/5 from ${site.rating.count} Airbnb reviews. Booking happens only on Airbnb; questions go to WhatsApp ${site.phones[0].display}.

## Pages

- [Home](${abs('/index.md')}): The cottage, bedrooms, reviews, location and FAQ
- [Dining](${abs('/dining.md')}): Full menu with prices, extras and ordering rules
- [Area guide](${abs('/explore.md')}): Drive times to Kotagiri, Coonoor and Ooty sights, day plans, getting here, weather, e-pass

## Booking and contact

- [Book on Airbnb](${site.airbnb}): Availability, prices and secure payment
- [Airbnb reviews](${site.airbnbReviews}): All guest reviews
- [Google Maps](${site.mapsLink}): Location pin

## Optional

- [Full content](${abs('/llms-full.txt')}): All three pages in one Markdown file
- [Photo credits](${abs('/credits/')}): Licences for third-party photos
`;

export const llmsFull = () => [homeMd(), diningMd(), exploreMd()].join('\n---\n\n');
