export type Spot = {
  name: string;
  image?: string;
  km: number;
  mins: string;
  text: string;
  tip?: string;
};

export type Area = { id: string; title: string; intro: string; spots: Spot[] };

export const areas: Area[] = [
  {
    id: 'kotagiri',
    title: 'Near Kotagiri',
    intro: 'Tea estates, shola forest and viewpoints over the plains.',
    spots: [
      {
        name: 'Kotagiri town and Nehru Park',
        image: 'tea-estates',
        km: 7,
        mins: '11 min',
        text: 'The nearest town, with cafés, a market, ATMs and Moddy’s homemade chocolates opposite Nehru Park.'
      },
      {
        name: 'Longwood Shola',
        image: 'longwood-shola',
        km: 9.3,
        mins: '17 min',
        text: 'One of the last patches of native shola forest, and an Important Bird Area with Nilgiri endemics such as the laughingthrush and wood pigeon.',
        tip: 'Entry needs Forest Department permission. Ask us to check before you go.'
      },
      {
        name: 'Catherine Falls',
        image: 'catherine-falls',
        km: 16.3,
        mins: '31 min',
        text: 'A tall double-tiered fall seen across the valley from the Dolphin’s Nose side, or from the road head above it. Best from July to November.',
        tip: 'The trail to the base is steep and unmarked. Go with a local guide, and skip it in heavy rain.'
      },
      {
        name: 'Kodanad View Point',
        image: 'kodanad',
        km: 24.9,
        mins: '46 min',
        text: 'The eastern edge of the Nilgiris, looking down to the Moyar river, Rangaswamy Pillar and the Mysore plateau.',
        tip: 'Go in the morning for clear air; afternoons often cloud over.'
      },
      {
        name: 'Rangaswamy Pillar',
        image: 'rangaswamy',
        km: 29.2,
        mins: '58 min',
        text: 'A lone rock pillar beside a peak sacred to the Irula people, seen best from the Kodanad road.'
      }
    ]
  },
  {
    id: 'coonoor',
    title: 'Coonoor',
    intro: 'Gardens, tea factories and cliff viewpoints.',
    spots: [
      {
        name: 'Highfield Tea Factory',
        image: 'tea-factory',
        km: 12.2,
        mins: '24 min',
        text: 'Watch withering, rolling and drying, then taste the teas at one of the best-known factory tours in the hills.'
      },
      {
        name: 'Sim’s Park',
        image: 'sims-park',
        km: 13.1,
        mins: '24 min',
        text: 'A Victorian botanical park in a ravine, with rare trees, a small lake and the fruit show each May.'
      },
      {
        name: 'Coonoor station and the toy train',
        image: 'toy-train',
        km: 14.9,
        mins: '30 min',
        text: 'The Nilgiri Mountain Railway, a UNESCO World Heritage line, runs through Coonoor between Mettupalayam and Ooty.',
        tip: 'Book on IRCTC; seats sell out weeks ahead in season.'
      },
      {
        name: 'Lamb’s Rock',
        image: 'lambs-rock',
        km: 17.6,
        mins: '39 min',
        text: 'A short walk through tea to a cliff with views over the Coimbatore plains.'
      },
      {
        name: 'Dolphin’s Nose',
        image: 'dolphins-nose',
        km: 22.5,
        mins: '51 min',
        text: 'A rocky headland above a deep gorge, with Catherine Falls across the valley.'
      }
    ]
  },
  {
    id: 'ooty',
    title: 'Ooty',
    intro: 'The main hill-station sights. Start early to avoid weekend traffic.',
    spots: [
      {
        name: 'Doddabetta Peak',
        image: 'doddabetta',
        km: 19.1,
        mins: '39 min',
        text: 'At 2,637 m, the highest point in the Nilgiris, with a telescope house and wide views on a clear day.'
      },
      {
        name: 'Government Botanical Garden',
        image: 'botanical-garden',
        km: 20.4,
        mins: '41 min',
        text: 'Terraced lawns, glasshouses and a fossil tree, laid out in 1848. Home of the May flower show.'
      },
      {
        name: 'Ooty Lake',
        image: 'ooty-lake',
        km: 23.6,
        mins: '47 min',
        text: 'Boating on the town lake. Busy, but popular with children.'
      },
      {
        name: 'Pine Forest',
        image: 'pine-forest',
        km: 30.1,
        mins: '58 min',
        text: 'Tall, straight rows of pine on a slope above the Kamarajar dam, on the road towards Pykara.'
      }
    ]
  }
];

export const itineraries = [
  {
    title: 'A slow day',
    stops: ['Morning walk through the estate', 'Breakfast on the lawn', 'Longwood Shola or Kotagiri town', 'Sunset from the cottage, bonfire and barbecue']
  },
  {
    title: 'Coonoor loop',
    stops: ['Highfield Tea Factory', 'Sim’s Park', 'Lunch in Coonoor', 'Lamb’s Rock and Dolphin’s Nose']
  },
  {
    title: 'Ooty classics',
    stops: ['Leave by 8 am', 'Doddabetta Peak', 'Botanical Garden', 'Ooty Lake, back before dark']
  },
  {
    title: 'The eastern edge',
    stops: ['Kodanad View Point at mid-morning', 'Tea tasting at Kodanad estate', 'Rangaswamy Pillar view', 'Kotagiri chocolates on the way home']
  }
];

export const routes = [
  { from: 'Kotagiri town', km: '7 km', time: '11 min' },
  { from: 'Coonoor railway station', km: '15 km', time: '30 min' },
  { from: 'Ooty railway station', km: '22.5 km', time: '45 min' },
  { from: 'Mettupalayam railway station', km: '40 km', time: '1 h 10 min' },
  { from: 'Coimbatore Junction', km: '76 km', time: '1 h 55 min' },
  { from: 'Coimbatore airport (CJB)', km: '76 km', time: '2 h' },
  { from: 'Kochi', km: '263 km', time: '5 h 45 min' },
  { from: 'Bengaluru', km: '346 km', time: '8 h' },
  { from: 'Chennai', km: '536 km', time: '10 h 20 min' }
];

export const arrival = [
  {
    title: 'By air',
    text: 'Fly to Coimbatore (CJB). From there it is about two hours by car up the Mettupalayam–Kotagiri ghat road. We can arrange a cab.'
  },
  {
    title: 'By rail',
    text: 'Take a train to Mettupalayam, then the toy train to Coonoor, or a cab straight up. Coonoor station is 30 minutes from the cottage.'
  },
  {
    title: 'By road',
    text: 'From Mettupalayam, take the Kotagiri ghat road. It has far fewer hairpin bends than the Coonoor road. At Kotagiri, follow the Coonoor road for about 7 km to West Brooke.'
  }
];

export const weather = [
  { months: 'Dec – Feb', temp: '9–19 °C', text: 'Clear, crisp and dry. The best views, and frosty nights.' },
  { months: 'Mar – May', temp: '14–23 °C', text: 'Warm days and cool nights. Peak season, with the Ooty flower show in May.' },
  { months: 'Jun – Aug', temp: '13–20 °C', text: 'South-west monsoon. Green, misty and wet; waterfalls in full flow.' },
  { months: 'Sep – Nov', temp: '13–20 °C', text: 'Rains ease, then return in October. Quiet roads and lush tea.' }
];

export const pack = [
  'Warm layers and a jacket all year',
  'A rain jacket from June to November',
  'Shoes with grip for the estate and trails',
  'A refillable water bottle',
  'A torch for the walk to the car',
  'Insect repellent and sunscreen',
  'Any medicines you need'
];

export const essentials = [
  {
    title: 'Nilgiris e-pass',
    text: 'Tourist vehicles registered outside the Nilgiris need a free e-pass from epass.tnega.org. Apply before you set out.',
    link: { href: 'https://epass.tnega.org', label: 'epass.tnega.org' }
  },
  {
    title: 'Plastic-free district',
    text: 'Single-use plastics, including PET water bottles, are banned across the Nilgiris, with fines and checks at entry points.'
  },
  {
    title: 'Medical help',
    text: 'Government Hospital, Kotagiri: 04266 271309. Government Lawley Hospital, Coonoor: 0423 2231050. Ambulance: 108.'
  }
];

