export type Dish = { name: string; text?: string; veg: boolean; favourite?: string };
export type Course = { id: string; title: string; kicker: string; intro: string; dishes: Dish[] };

export const menu: Course[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    kicker: 'From 8 am',
    intro: 'South Indian breakfasts, served with tea or filter coffee.',
    dishes: [
      { name: 'Idli, sambar and coconut chutney', veg: true },
      { name: 'Ghee roast or masala dosa', text: 'With potato masala, sambar and two chutneys.', veg: true },
      { name: 'Oothappam and chutney', text: 'Thick onion and tomato pancakes.', veg: true, favourite: 'Ranjit, September 2024' },
      { name: 'Ven pongal and medu vada', text: 'Peppered rice and lentils with ghee.', veg: true },
      { name: 'Poori masala', veg: true },
      { name: 'Rava or semiya upma', veg: true },
      { name: 'Omelette or bread omelette', text: 'Masala or plain, made to order.', veg: false, favourite: 'Ranjit, September 2024' },
      { name: 'Toast, butter and jam', veg: true }
    ]
  },
  {
    id: 'meals',
    title: 'Lunch and dinner',
    kicker: 'Order 4 hours ahead',
    intro: 'Home-style dishes for the table. Mix vegetarian and non-vegetarian as you like.',
    dishes: [
      { name: 'Vegetable biriyani', text: 'With onion raita.', veg: true, favourite: 'Vivek, July 2025' },
      { name: 'Meals plate', text: 'Rice, sambar, rasam, poriyal, kootu, curd and pickle.', veg: true },
      { name: 'Chapati with vegetable kurma', veg: true },
      { name: 'Paneer butter masala', veg: true },
      { name: 'Mushroom pepper fry', veg: true },
      { name: 'Curd rice', veg: true },
      { name: 'Chicken biriyani', veg: false },
      { name: 'Pepper chicken', text: 'Dry-roasted with black pepper and curry leaf.', veg: false, favourite: 'Ranjit, September 2024' },
      { name: 'Chicken Chettinad', veg: false },
      { name: 'Mutton sukka', text: 'Slow-cooked, dry-spiced mutton.', veg: false, favourite: 'Rajnikanth, August 2024' },
      { name: 'Egg curry', veg: false }
    ]
  },
  {
    id: 'fire',
    title: 'Bonfire and grill',
    kicker: 'Evenings on the lawn',
    intro: 'Grilled over coals on the lawn, usually with a bonfire.',
    dishes: [
      { name: 'Barbecue chicken', text: 'Marinated overnight, grilled on the lawn.', veg: false, favourite: 'Shubham, June 2026' },
      { name: 'Paneer and vegetable skewers', veg: true },
      { name: 'Fire-roasted corn', text: 'With chilli, lime and salt.', veg: true }
    ]
  },
  {
    id: 'drinks',
    title: 'Hot drinks',
    kicker: 'Any time',
    intro: 'Local Nilgiri tea and South Indian coffee.',
    dishes: [
      { name: 'Nilgiri tea', text: 'Plain, with milk, or ginger and cardamom.', veg: true },
      { name: 'Filter coffee', veg: true },
      { name: 'Hot milk or Horlicks', veg: true }
    ]
  }
];

export const feast = {
  title: 'Group dinners',
  text: 'For celebrations or larger groups, ask for a set dinner of eight to ten dishes, served together at the table.',
  quote: 'He personally prepared a delicious dinner with nearly 10 dishes, all of which were exceptional in taste.',
  by: 'Kumar, March 2025'
};

export const menuNotes = [
  'Meals are optional and charged per dish. We share the current menu card and prices on WhatsApp before you arrive.',
  'Please order lunch and dinner at least 4 hours ahead. We buy fresh every day and do not run a restaurant.',
  'Mild food for children, infant meals, Jain and no-onion-garlic cooking are available on request.',
  'Other cuisines can be prepared if you tell us when you book.'
];
