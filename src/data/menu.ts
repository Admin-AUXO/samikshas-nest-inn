export type Dish = { name: string; detail?: string; price: string; veg: boolean; favourite?: string };
export type Course = { id: string; title: string; note?: string; dishes: Dish[] };

export const menu: Course[] = [
  {
    id: 'tiffin',
    title: 'Tiffin',
    note: 'Breakfast and evening',
    dishes: [
      { name: 'Idly plate', detail: '3 idlies with sambar and chutney', price: '₹50', veg: true },
      { name: 'Plain dosa', detail: '2 dosas', price: '₹70', veg: true },
      { name: 'Onion dosa or uttapam', detail: '2 pieces', price: '₹80', veg: true, favourite: 'Ranjit, September 2024' },
      { name: 'Masala dosa plate', detail: '2 dosas', price: '₹90', veg: true },
      { name: 'Poori and masala', detail: '3 pooris', price: '₹80', veg: true },
      { name: 'Chapathi with gravy', detail: '2 chapathis', price: '₹70', veg: true },
      { name: 'Bread omelette plate', price: '₹80', veg: false, favourite: 'Ranjit, September 2024' },
      { name: 'Instant noodles', price: '₹50', veg: true }
    ]
  },
  {
    id: 'starters',
    title: 'Starters',
    dishes: [
      { name: 'Gobi 65 or gobi chilli', detail: 'Plate', price: '₹180', veg: true },
      { name: 'Paneer chilli', detail: 'Plate, 200 g', price: '₹240', veg: true },
      { name: 'Chicken 65 or chilli chicken', detail: 'Plate', price: '₹250', veg: false },
      { name: 'Pepper chicken or chicken fry', detail: 'Plate', price: '₹250', veg: false, favourite: 'Ranjit, September 2024' },
      { name: 'Chicken barbecue', detail: 'Per kg', price: '₹850', veg: false, favourite: 'Shubham, June 2026' },
      { name: 'Mutton fry', detail: '½ kg, Sundays only', price: '₹850', veg: false, favourite: 'Rajnikanth, August 2024' },
      { name: 'Fish fry or tawa fry', detail: 'Seasonal', price: 'Ask', veg: false }
    ]
  },
  {
    id: 'meals',
    title: 'Rice and meals',
    dishes: [
      { name: 'Veg meals', price: '₹180', veg: true },
      { name: 'Non-veg meals', price: '₹300', veg: false },
      { name: 'Veg biriyani', price: '₹180', veg: true, favourite: 'Vivek, July 2025' },
      { name: 'Paneer or mushroom biriyani', price: '₹200', veg: true },
      { name: 'Chicken biriyani', price: '₹240', veg: false },
      { name: 'Ghee rice or jeera rice', price: '₹180', veg: true },
      { name: 'Curd rice', price: '₹100', veg: true },
      { name: 'Rice and rasam', price: '₹80', veg: true },
      { name: 'Plain rice', price: '₹60', veg: true }
    ]
  },
  {
    id: 'gravies',
    title: 'Gravies',
    dishes: [
      { name: 'Mixed veg gravy', price: '₹160', veg: true },
      { name: 'Mushroom gravy', price: '₹190', veg: true },
      { name: 'Paneer gravy', price: '₹240', veg: true },
      { name: 'Dal fry', price: '₹110', veg: true },
      { name: 'Chicken gravy', price: '₹240', veg: false },
      { name: 'Egg curry', detail: '4 eggs', price: '₹160', veg: false },
      { name: 'Fish gravy', detail: 'Seasonal', price: 'Ask', veg: false }
    ]
  },
  {
    id: 'breads',
    title: 'Breads and eggs',
    dishes: [
      { name: 'Chapathi', detail: '2 pieces', price: '₹40', veg: true },
      { name: 'Phulka', detail: '2 pieces', price: '₹40', veg: true },
      { name: 'Paratha', detail: '2 pieces', price: '₹60', veg: true },
      { name: 'Egg burji', detail: '4 eggs', price: '₹100', veg: false },
      { name: 'Boiled eggs', detail: '3 eggs', price: '₹50', veg: false },
      { name: 'Omelette', detail: '1 egg', price: '₹20', veg: false }
    ]
  },
  {
    id: 'snacks',
    title: 'Snacks and desserts',
    dishes: [
      { name: 'French fries', price: '₹100', veg: true },
      { name: 'Onion pakkoda', price: '₹100', veg: true },
      { name: 'Soya fries', price: '₹70', veg: true },
      { name: 'Masala peanuts', detail: '100 g', price: '₹70', veg: true },
      { name: 'Gulab jamun', detail: '5 pieces', price: '₹40', veg: true },
      { name: 'Ice cream', detail: '½ litre pack', price: '₹250', veg: true }
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks',
    note: '100 ml / 150 ml',
    dishes: [
      { name: 'Tea or lemon tea', price: '₹20 / ₹30', veg: true },
      { name: 'Ginger tea', price: '₹25 / ₹35', veg: true },
      { name: 'Coffee', price: '₹30 / ₹40', veg: true },
      { name: 'Banana milkshake', price: '₹70', veg: true },
      { name: 'Lassi', price: '₹50', veg: true },
      { name: 'Fresh juice', detail: 'Seasonal', price: 'Ask', veg: true }
    ]
  }
];

export const combo = {
  title: 'Combo meal',
  price: '₹400',
  items: ['Chapathi', 'Chicken gravy', 'Chilli chicken', 'Rice and rasam', 'Gulab jamun']
};

export const extras = [
  { name: 'Bonfire', detail: 'Per evening', price: '₹800' },
  { name: 'Guided trek', detail: '5–6 km, minimum 6 people', price: '₹500 per person' },
  { name: 'Birthday decorations', detail: 'Including cake', price: '₹4,000' }
];

export const menuNotes = [
  'Order at least 4 hours before each meal. The kitchen runs from 8 am to 10 pm.',
  'Minimum order is 2 of any item, except barbecue.',
  'Guests can’t use the kitchen, but outside food is welcome.',
  'Prices are from the cottage’s current menu card and may change. Food is paid for separately from the stay.'
];
