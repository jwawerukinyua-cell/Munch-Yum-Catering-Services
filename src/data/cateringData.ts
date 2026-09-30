import { CATERING_IMAGES } from '../assets/images';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  guestCapacity: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'mains' | 'canapes' | 'grill' | 'desserts' | 'platters';
  description: string;
  dietary: string[];
  image: string;
  pairingNote?: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  eventType: string;
  comment: string;
  rating: number;
  highlight: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: 'Munch & Yum Catering',
  tagline: 'Unforgettable Flavors for Your Special Moments',
  phone: '0112323708',
  phoneInternational: '+254112323708',
  phoneFormatted: '011 232 3708',
  whatsappUrl: 'https://wa.me/254112323708?text=Hello%20Munch%20%26%20Yum%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20catering%20services%20for%20my%20event.',
  email: 'munchandyumcatering@gmail.com',
  location: 'Nairobi & Available for Destination Events Across Kenya',
  operatingHours: 'Mon - Sun: 7:00 AM – 9:00 PM (Events catered 24/7)',
  socialLinks: {
    instagram: 'https://www.instagram.com/munch_and_yum_catering?stkn=MTRva3h0dXJrdnNiMQ==',
    facebook: 'https://www.facebook.com/profile.php?id=61558447504705',
    tiktok: 'https://www.tiktok.com/@munch.yum.catering',
  },
  founder: {
    name: 'Kabura Karanja',
    title: 'Founder & Executive Chef',
    image: CATERING_IMAGES.chefKabura,
    bio: 'Chef Kabura Karanja founded Munch & Yum Catering with a singular passion: creating vibrant, comforting, and soul-satisfying culinary experiences that turn celebrations into lasting memories. With a deep respect for farm-fresh local produce, authentic spice blends, and generous presentation, Kabura personally oversees every menu recipe to deliver hospitality that warms both hearts and appetites.',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'weddings',
    title: 'Weddings & Receptions',
    tagline: 'Romantic, Grand & Flawlessly Coordinated',
    description: 'From intimate garden nuptials to grand ballroom celebrations, we design lavish multi-course banquets, elegant plated dinners, and picturesque grazing stations tailored to your love story.',
    image: CATERING_IMAGES.wedding,
    features: [
      'Bespoke bride & groom menu tasting',
      'Full service waitstaff & uniform bar captains',
      'Chafing equipment, fine chinaware & styling',
      'Cocktail hour canapés & late-night bites'
    ],
    guestCapacity: '50 – 1,000+ Guests',
  },
  {
    id: 'corporate',
    title: 'Corporate Events & Galas',
    tagline: 'Punctual, Sophisticated & Executive Grade',
    description: 'Impress clients, partners, and team members with executive buffet spreads, boxed gourmet lunches, conference coffee breaks, and cocktail networking platters.',
    image: CATERING_IMAGES.corporate,
    features: [
      'Strict corporate schedule synchronization',
      'Individually labeled dietary meal boxes',
      'Hot & cold beverage stations with artisan coffee',
      'Invoice payment & corporate compliance support'
    ],
    guestCapacity: '20 – 800+ Guests',
  },
  {
    id: 'private-parties',
    title: 'Private Parties & Milestones',
    tagline: 'Vibrant, Warm & Deliciously Memorable',
    description: 'Celebrate birthdays, bridal showers, anniversaries, graduations, and ruracios with sumptuous feast spreads that let you relax and cherish your guests without lifting a finger.',
    image: CATERING_IMAGES.grill,
    features: [
      'Sizzling live grill & barbecue setup',
      'Customized cake cutting & dessert service',
      'Flexible indoor or outdoor backyard setups',
      'Kid-friendly & allergy-safe alternatives'
    ],
    guestCapacity: '15 – 300+ Guests',
  },
  {
    id: 'meal-prep-platters',
    title: 'Meal Prep & Artisanal Platters',
    tagline: 'Convenient, Wholesome & Chef-Crafted',
    description: 'Elevate your weekly dining, family gatherings, or office boardrooms with premium artisan platter deliveries, finger foods, and wholesome meal prep curated fresh daily.',
    image: CATERING_IMAGES.dessert,
    features: [
      'Artisan charcuterie & tropical fruit boards',
      'Weekly batch-cooked chef prepared meals',
      'Same-day express delivery for ordered platters',
      'Eco-friendly thermal packaging'
    ],
    guestCapacity: '5 – 50+ Servings',
  },
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: '1',
    name: 'Slow-Smoked Herb Crusted Nyama Choma',
    category: 'grill',
    description: 'Prime cuts of tender beef and goat marinated for 24 hours in wild garlic, rosemary, and coastal sea salt, flame-kissed to smoky perfection.',
    dietary: ['Halal', 'Gluten-Free'],
    image: CATERING_IMAGES.grill,
    pairingNote: 'Served with sweet fried plantains, tangy kachumbari salsa & tamarind dip',
    popular: true,
  },
  {
    id: '2',
    name: 'Coastal Swahili Coconut Fish Curry',
    category: 'mains',
    description: 'Fresh red snapper fillets simmered in rich hand-pressed coconut milk, turmeric, ginger, fresh cilantro, and cardamom pods.',
    dietary: ['Gluten-Free', 'Dairy-Free'],
    image: CATERING_IMAGES.hero,
    pairingNote: 'Paired seamlessly with aromatic jeera pilau rice and chapati',
    popular: true,
  },
  {
    id: '3',
    name: 'Smoked Salmon & Dill Cream Crostini',
    category: 'canapes',
    description: 'Crisp artisan sourdough toasts topped with whipped herbed cream cheese, Norwegian cold-smoked salmon, capers, and fresh garden microgreens.',
    dietary: ['Pescatarian'],
    image: CATERING_IMAGES.corporate,
    pairingNote: 'Ideal for cocktail receptions and high-energy networking hours',
    popular: false,
  },
  {
    id: '4',
    name: 'Chef Kabura’s Signature Fragrant Pilau Feast',
    category: 'mains',
    description: 'Long-grain basmati rice slow-cooked in rich bone broth infused with toasted cumin, cloves, cinnamon bark, and caramelized shallots with succulent beef morsels.',
    dietary: ['Halal'],
    image: CATERING_IMAGES.wedding,
    pairingNote: 'Accompanied by house-made chili relish and refreshing coleslaw',
    popular: true,
  },
  {
    id: '5',
    name: 'Charred Honey-Mustard Chicken Skewers',
    category: 'grill',
    description: 'Juicy chicken breast cubes basted in acacia honey, Dijon grain mustard, sweet paprika, and charred bell peppers over hot coals.',
    dietary: ['Halal', 'Gluten-Free'],
    image: CATERING_IMAGES.grill,
    pairingNote: 'A guest favorite for both kids and cocktail minglers',
    popular: false,
  },
  {
    id: '6',
    name: 'Artisan Passionfruit Panna Cotta Shooters',
    category: 'desserts',
    description: 'Silky smooth vanilla bean cream topped with tart local Kenyan passionfruit glaze and crystallized mint crystals in elegant shooter glasses.',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: CATERING_IMAGES.dessert,
    pairingNote: 'Refreshing, palate-cleansing finale for upscale dinner courses',
    popular: true,
  },
  {
    id: '7',
    name: 'Gourmet Mini Beef & Truffle Aioli Sliders',
    category: 'canapes',
    description: 'Hand-pressed brioche buns with aged cheddar, seared prime patty, caramelized red onion jam, and decadent black truffle garlic aioli.',
    dietary: ['Halal'],
    image: CATERING_IMAGES.corporate,
    pairingNote: 'The undisputed showstopper of late-night event bite stations',
    popular: true,
  },
  {
    id: '8',
    name: 'Golden Belgian Chocolate Tartlets',
    category: 'desserts',
    description: 'Dark Belgian ganache nestled inside crisp buttery sable tart shells, finished with edible 24k gold leaf dust and fresh raspberries.',
    dietary: ['Vegetarian'],
    image: CATERING_IMAGES.dessert,
    pairingNote: 'A luxurious touch for wedding dessert tables and VIP tables',
    popular: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Wanjiku & Brian M.',
    role: 'Bride & Groom',
    eventType: 'Wedding Reception (350 Guests)',
    comment: 'Chef Kabura and the Munch & Yum Catering team exceeded every expectation! The food was piping hot, exceptionally flavorful, and presented like art. 6 months later, our guests are still raving about the smoked nyama and coconut curry. Booking them was the best decision of our wedding!',
    rating: 5,
    highlight: 'Piping hot, exceptionally flavorful & guests still raving!',
    date: 'August 2026',
  },
  {
    id: '2',
    clientName: 'David Ochieng',
    role: 'Corporate HR & Events Lead',
    eventType: 'Annual Corporate Gala (200 Guests)',
    comment: 'We needed a caterer who understood strict corporate timing and diverse dietary requirements. Munch & Yum handled our 200-person executive dinner with seamless precision. Punctual arrival, spotless setup, and mouth-watering dishes that delighted our international delegates.',
    rating: 5,
    highlight: 'Seamless precision, punctual arrival & spotless setup',
    date: 'September 2026',
  },
  {
    id: '3',
    clientName: 'Amina Kassam',
    role: 'Private Host',
    eventType: '40th Birthday Feast (65 Guests)',
    comment: 'From the first WhatsApp message to the final cleanup, working with Chef Kabura felt like family. She tailored the spice level for our elders and prepared sensational skewers and mocktails. I could actually enjoy my party without stressing about the kitchen!',
    rating: 5,
    highlight: 'Felt like family, stress-free hosting and incredible taste',
    date: 'July 2026',
  },
  {
    id: '4',
    clientName: 'Kenneth Kimani',
    role: 'Managing Director',
    eventType: 'Quarterly Executive Board Luncheon',
    comment: 'The individual gourmet boxes were fresh, beautifully labeled, and arrived 15 minutes ahead of schedule. Munch & Yum Catering is now our permanent company caterer.',
    rating: 5,
    highlight: 'Fresh, punctual and now our permanent company caterer',
    date: 'September 2026',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How early should I book Munch & Yum Catering for my event?',
    answer: 'We recommend reserving your date at least 2 to 4 weeks in advance for private parties and corporate meetings, and 2 to 3 months in advance for peak wedding seasons. However, we also do our best to accommodate short-notice bookings depending on date availability!',
  },
  {
    question: 'Can you cater for specific dietary restrictions and allergies?',
    answer: 'Absolutely. We accommodate Halal, Vegetarian, Vegan, Gluten-Free, Nut-Free, and custom child-friendly requirements. During our consultation, we note all guest dietary profiles and ensure safe, dedicated prep and labeling.',
  },
  {
    question: 'Do you provide serving equipment, chafing dishes, and professional staff?',
    answer: 'Yes! We provide full-service catering packages which include high-grade stainless and copper chafing dishes, elegant food warmers, serving cutlery, and trained, uniformly dressed waitstaff and event captains. We also offer drop-off catering if you only need the food prepared and delivered.',
  },
  {
    question: 'Can we schedule a menu tasting before making our final decision?',
    answer: 'Yes, we provide private menu tasting sessions for weddings and large corporate events (typically for 75+ guests). This allows you to meet Chef Kabura Karanja, experience the presentation, and fine-tune your spice profiles and side dishes.',
  },
  {
    question: 'Where do you offer catering services?',
    answer: 'We are based in Nairobi and cater extensively across Nairobi, Kiambu, Machakos, Kajiado, and Naivasha. We also cater destination events across Kenya upon arrangement.',
  },
  {
    question: 'How do I confirm my booking and what are the payment terms?',
    answer: 'To secure your date on our calendar, we require a 50% commitment deposit following menu approval, with the balance settled prior to or on the event day. You can initiate your booking directly via WhatsApp (0112323708) or through our online quote form.',
  },
];
