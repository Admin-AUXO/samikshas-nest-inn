import airbnb from './airbnb.json';

export const site = {
  name: "Samiksha's Nest Inn",
  airbnb: 'https://www.airbnb.co.in/rooms/20239760',
  airbnbReviews: 'https://www.airbnb.co.in/rooms/20239760/reviews',
  mapsLink: 'https://maps.app.goo.gl/AVVjCJ4ksZKy8rb17',
  mapsEmbed: 'https://maps.google.com/maps?q=11.4149477,76.8209145&z=12&output=embed',
  geo: { lat: 11.4149477, lng: 76.8209145 },
  address: {
    street: 'Eco Valley, West Brooke',
    locality: 'Kotagiri',
    region: 'Tamil Nadu',
    district: 'The Nilgiris',
    postcode: '643214',
    country: 'IN'
  },
  phones: [
    { display: '+91 83173 07278', tel: '+918317307278' },
    { display: '+91 63632 94171', tel: '+916363294171' }
  ],
  whatsapp: '918317307278',
  email: 'samikshasnestinn@gmail.com',
  hours: 'Daily, 9 am – 9 pm',
  rating: { score: airbnb.score, count: airbnb.count, superhost: airbnb.superhost },
  host: { name: 'Nivetha', cohost: 'Jegadeesh', caretaker: 'Pradeep', years: 9 }
};

export const waLink = (text = "Hi, I have a question about staying at Samiksha's Nest Inn.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/#cottage', label: 'Cottage' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/dining/', label: 'Dining' },
  { href: '/explore/', label: 'Area guide' },
  { href: '/#faq', label: 'FAQ' }
];

export const facts = [
  { value: '12', label: 'Guests' },
  { value: '4', label: 'Bedrooms' },
  { value: '3', label: 'Bathrooms' },
  { value: '7 km', label: 'To Kotagiri' }
];

export const rooms = [
  { name: 'Bedroom 1', bed: 'King bed', bath: 'En suite', image: 'bedroom-1' },
  { name: 'Bedroom 2', bed: 'King bed', bath: 'En suite', image: 'bedroom-2' },
  { name: 'Bedroom 3', bed: 'Queen bed', bath: 'En suite', image: 'bedroom-3' },
  { name: 'Bedroom 4', bed: 'Queen bed', bath: 'Shared bathroom', image: 'bedroom-4' }
];

export const amenities = [
  'Private lawn',
  'Bonfire and barbecue',
  'Fireplace',
  'Two living rooms',
  'Wi-Fi',
  'Free parking',
  'Caretaker on site',
  'Extra mattresses'
];

export const scores = airbnb.scores;

export const reviews = [
  {
    name: 'Kumar',
    date: 'April 2026',
    quote:
      'The property is surrounded with tea estates and feels amazing. It was quite, calm and relaxing.'
  },
  {
    name: 'Vivek',
    date: 'July 2025',
    quote:
      'The veg biriyani that we had here was one of the best we’ve ever had, and was so good that we kept talking about it throughout the trip.'
  },
  {
    name: 'Pranav',
    date: 'September 2026',
    quote:
      'Pradeep, the caretaker, was the nicest, friendliest person and made us feel right at home.'
  },
  {
    name: 'Ranjit',
    date: 'September 2024',
    quote:
      'We were a family of 6… The ambience of the property was pleasant and homely, and the location was beautiful!'
  }
];

export const faqs = [
  {
    q: 'How do I book?',
    a: 'Through Airbnb, which handles payment, confirmation and cancellation. Pick your dates on this site and the listing opens with them filled in.'
  },
  {
    q: 'How do we reach the cottage?',
    a: 'It is 7 km from Kotagiri on the Kotagiri–Coonoor road. The last 200–300 m is an unpaved estate track: hatchbacks and SUVs manage it, minibuses and tempo travellers find it tight. Arrive in daylight the first time.'
  },
  {
    q: 'Are meals included?',
    a: 'No. Our caretaker cooks to order from the menu, and food is charged per dish. Order at least 4 hours ahead; the kitchen runs from 8 am to 10 pm. Guests can’t use the kitchen, but outside food is welcome.'
  },
  {
    q: 'Do I need a Nilgiris e-pass?',
    a: 'Yes, if you drive a vehicle registered outside the Nilgiris. It is free from epass.tnega.org. Single-use plastic, including water bottles, is also banned in the district.'
  },
  {
    q: 'Is there anything nearby?',
    a: 'The cottage is surrounded by tea, with no shops on the estate. Kotagiri town, with restaurants, ATMs and a pharmacy, is 11 minutes away. Mobile data works at the cottage.'
  },
  {
    q: 'Can you arrange cabs or treks?',
    a: 'Yes. We arrange day cabs, airport and station transfers and local guides. A guided 5–6 km trek is ₹500 per person for groups of six or more, and a bonfire is ₹800 per evening.'
  },
  {
    q: 'Is it suitable for children?',
    a: 'Yes. The lawn is fenced, extra mattresses are available and the kitchen cooks mild food for children on request.'
  },
  {
    q: 'Are pets allowed?',
    a: 'Please ask us on WhatsApp before booking.'
  }
];
