import { ServiceItem, AddOnOption, Testimonial, FAQItem } from '../types';

export const TRUST_METRICS = [
  {
    value: "100%",
    label: "Eco-Friendly Supplies",
    sublabel: "Non-toxic & pet-safe botanicals",
    icon: "Leaf",
  },
  {
    value: "99.8%",
    label: "Client Satisfaction",
    sublabel: "Backed by 24h re-clean guarantee",
    icon: "ShieldCheck",
  },
  {
    value: "20% OFF",
    label: "New Client Promo",
    sublabel: "Applied automatically at checkout",
    icon: "Sparkles",
  },
  {
    value: "500+",
    label: "Sonoma County Homes",
    sublabel: "Local Petaluma-based specialist crew",
    icon: "MapPin",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential-standard',
    category: 'residential',
    name: 'Residential Pristine Maintenance',
    tagline: 'Routine care for sparkling, allergen-free living spaces',
    badge: 'Most Popular',
    basePrice: 160,
    estimatedTime: '2.5 - 3.5 Hours',
    description: 'A comprehensive, recurring or one-time top-to-bottom maintenance clean utilizing plant-derived, fragrance-free solutions.',
    iconName: 'Home',
    features: [
      'Kitchen countertops, stovetop, sink & exterior appliances',
      'Bathrooms fully sanitized: tile, grout, shower glass, bowls',
      'High dusting, baseboards, cobweb removal, light fixtures',
      'All floors HEPA vacuumed & damp-mopped with non-toxic solutions',
      'Bed linens straightened, trash emptied & disinfected'
    ],
    recommendedFor: 'Busy families, pet owners & weekly/bi-weekly upkeep',
    popular: true,
  },
  {
    id: 'deep-clean-diamond',
    category: 'deep-clean',
    name: 'Black Diamond Deep Clean',
    tagline: 'Intensive restoration for neglected corners & high build-up',
    badge: 'Seasonal Favorite',
    basePrice: 240,
    estimatedTime: '4.0 - 5.5 Hours',
    description: 'An exhaustive deep scrub targeting built-up grime, grease, hard water scale, and hidden dust traps throughout your home.',
    iconName: 'Sparkles',
    features: [
      'Hand-washing all baseboards, door frames & light switch plates',
      'Deep descaling of bathroom tile grout, shower glass & faucets',
      'Stovetop burner degreasing & exterior cabinet hand wiping',
      'Under & behind accessible furniture HEPA vacuuming',
      'Detailed interior window tracks, sills, and blinds dusting'
    ],
    recommendedFor: 'Spring cleaning, first-time visits & semi-annual refreshes',
  },
  {
    id: 'move-in-out',
    category: 'move-in-out',
    name: 'Move-In / Move-Out Turnaround',
    tagline: '100% Security deposit return standard for empty properties',
    badge: 'Realtor Preferred',
    basePrice: 290,
    estimatedTime: '5.0 - 7.0 Hours',
    description: 'Designed specifically for tenants, homeowners, and realtors needing an immaculate empty-home handover.',
    iconName: 'Truck',
    features: [
      'Inside all kitchen & bathroom cabinets, drawers & pantries',
      'Deep cleaning inside oven, refrigerator & dishwasher interiors',
      'Full wall spot-washing, switch plates & scuff treatment',
      'Closet shelves, baseboards, door jambs & trim detailed',
      'Realtor-ready walk-through checklist completion'
    ],
    recommendedFor: 'End-of-lease moves, property listings & new home transitions',
  },
  {
    id: 'commercial-office',
    category: 'commercial',
    name: 'Commercial & Office Sanitization',
    tagline: 'Healthy, spotless workplaces that elevate productivity',
    badge: 'Customizable',
    basePrice: 220,
    estimatedTime: 'Flexible / After-Hours',
    description: 'Tailored custodial services for Petaluma retail stores, boutique offices, creative studios, and wellness clinics.',
    iconName: 'Building2',
    features: [
      'Workstations, keyboards, phones & meeting desks disinfected',
      'Breakroom sinks, microwave, coffee stations & fridges cleaned',
      'Restrooms sanitized, restocked & odor-neutralized naturally',
      'Lobby entry glass, reception counters & high-touch handles',
      'Nightly, bi-weekly or custom schedule availability'
    ],
    recommendedFor: 'Law firms, tech offices, clinics, salons & retail studios',
  },
  {
    id: 'post-construction',
    category: 'deep-clean',
    name: 'Post-Renovation & Remodel Clean',
    tagline: 'Eliminating micro-fine drywall dust, silicone & debris',
    basePrice: 320,
    estimatedTime: '5.0 - 8.0 Hours',
    description: 'Specialized HEPA-filtration equipment and fine residue removal for newly renovated kitchens, additions, and homes.',
    iconName: 'HardHat',
    features: [
      'Multi-stage HEPA air filtration & fine drywall dust extraction',
      'Paint splatters, sticker glue & silicone residue scraped safely',
      'Cabinet interior/exterior wipe down from ceiling to floor',
      'Detailed light fixtures, vents, switches & hardware polishing',
      'Ready-for-move-in condition guarantee'
    ],
    recommendedFor: 'Contractors, interior designers & newly remodeled homes',
  },
  {
    id: 'airbnb-turnover',
    category: 'residential',
    name: 'Luxury Airbnb & Vacation Rental',
    tagline: '5-Star guest ready turnover with linen swap & restock',
    badge: 'Fast Turnaround',
    basePrice: 180,
    estimatedTime: '2.5 - 4.0 Hours',
    description: 'Reliable short-term rental cleaning with high-speed turnover, laundry coordination, and guest amenity styling.',
    iconName: 'Key',
    features: [
      'Hotel-style bed presentation & fresh linen swapping',
      'Hospitality-grade bathroom & kitchen sanitization',
      'Inventory report & guest supply replenishment check',
      'Damage/incident photo log sent straight to host portal',
      'Sync with Airbnb / VRBO guest checkout calendars'
    ],
    recommendedFor: 'Sonoma wine country vacation hosts & Airbnb superhosts',
  },
];

export const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: 'inside-fridge',
    name: 'Inside Refrigerator Deep Clean',
    price: 35,
    description: 'Disassemble shelves, sanitize bins & odor elimination',
    icon: 'Refrigerator',
  },
  {
    id: 'inside-oven',
    name: 'Inside Oven Eco-Degrease',
    price: 45,
    description: 'Fume-free non-caustic bake-on grease dissolution',
    icon: 'Flame',
  },
  {
    id: 'interior-windows',
    name: 'Interior Windows & Tracks',
    price: 40,
    description: 'Crystal-clear streak-free glass & deep track vacuum',
    icon: 'Layers',
  },
  {
    id: 'inside-cabinets',
    name: 'Interior Cabinets & Drawers',
    price: 50,
    description: 'Empty shelf wipe down, crumb removal & lining clean',
    icon: 'Archive',
  },
  {
    id: 'pet-dander-treatment',
    name: 'Pet Dander & Hair Removal Extravaganza',
    price: 30,
    description: 'Targeted HEPA upholstery & rug pet hair extraction',
    icon: 'PawPrint',
  },
  {
    id: 'eco-aromatherapy',
    name: 'Organic Lavender/Citrus Steam Polish',
    price: 25,
    description: 'Therapeutic organic essential oil room refreshment',
    icon: 'Sparkles',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Lindqvist',
    location: 'Westside Petaluma',
    rating: 5,
    service: 'Bi-Weekly Residential Clean',
    reviewDate: 'Last Week',
    comment: 'Black Diamond has been a lifesaver for our family! With two golden retrievers and a toddler, our floors were always a battle. Their non-toxic products leave the house smelling fresh with zero chemical fumes. The attention to detail around baseboards and faucets is unmatched.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    verified: true,
  },
  {
    id: 't2',
    name: 'Marcus Sterling',
    location: 'Historic Downtown Petaluma',
    rating: 5,
    service: 'Move-In Deep Cleaning',
    reviewDate: '2 Weeks Ago',
    comment: 'We hired them before moving into our 1920s Victorian. The previous tenants left lots of grease and grime in the kitchen. The Black Diamond team made the entire place look and feel brand new in just 5 hours. We got our full deposit back on our old place too!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    verified: true,
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    location: 'Penngrove / Sonoma Hills',
    rating: 5,
    service: 'Deep Clean + Oven Add-on',
    reviewDate: '3 Weeks Ago',
    comment: 'I am extremely sensitive to synthetic fragrances and bleach, so finding a truly eco-friendly cleaner was top priority. Black Diamond exceeded all expectations. Punctual, polite, trustworthy, and leaves every room completely spotless with a fresh botanical scent.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
    verified: true,
  },
  {
    id: 't4',
    name: 'David Chen',
    location: 'River Plaza Offices, Petaluma',
    rating: 5,
    service: 'Commercial Office Care',
    reviewDate: '1 Month Ago',
    comment: 'Our architecture studio needs a clean, minimalist look for client visits. Black Diamond handles our evening custodial work with immense pride. Dependable, insured, and very communicative.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    verified: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'eco',
    question: 'What kind of cleaning products do you use? Are they really safe for dogs and infants?',
    answer: 'Yes, 100%! We exclusively use plant-derived, biodegradable, and EPA Safer Choice-certified formulas. Our cleaning supplies contain zero harsh bleaches, ammonia, artificial phthalates, or toxic VOCs. They are completely pet-safe, toddler-safe, and gentle on sensitive respiratory systems.',
  },
  {
    id: 'f2',
    category: 'pricing',
    question: 'How does the 20% OFF first-time client discount work?',
    answer: 'Every new client automatically receives 20% OFF their initial service. You can use our instant online estimator to see your discounted rate immediately. When booking online or over the phone at (707) 318-4321, your 20% savings is locked in with no hidden promo codes required.',
  },
  {
    id: 'f3',
    category: 'general',
    question: 'Do I need to be home while your team is cleaning?',
    answer: 'Not at all. Many of our Sonoma County clients provide lockbox codes, garage keypads, or smart lock permissions. You can go about your workday or enjoy downtown Petaluma, and return to an immaculate, fresh home. We are fully licensed, insured, and bonded for your complete peace of mind.',
  },
  {
    id: 'f4',
    category: 'general',
    question: 'Do you bring your own supplies and equipment?',
    answer: 'Yes, our team arrives fully equipped with commercial-grade HEPA-filter vacuums, microfiber color-coded cloths (to prevent cross-contamination), non-toxic sanitizers, steam mops, and all specialty tools.',
  },
  {
    id: 'f5',
    category: 'pricing',
    question: 'What is your 100% Satisfaction Re-Clean Guarantee?',
    answer: 'If any spot or area in your home does not meet our high standards, simply let us know within 24 hours of your service. We will gladly send a specialist back to re-clean that specific area at zero extra cost to you.',
  },
  {
    id: 'f6',
    category: 'scheduling',
    question: 'What service areas do you cover beyond Petaluma?',
    answer: 'We proudly serve all of Petaluma, Penngrove, Cotati, Rohnert Park, Santa Rosa, Sebastopol, Sonoma Valley, and northern Marin (Novato). Contact us if you are just outside these zones!',
  },
];

export const WHY_CHOOSE_POINTS = [
  {
    title: '100% Non-Toxic & Pet-Safe',
    desc: 'Botanical, fragrance-free solutions that protect family lungs, playful pets, and surface finishes.',
    icon: 'Leaf',
    badge: 'Health First',
  },
  {
    title: 'Fully Insured & Bonded ($2M)',
    desc: 'Every specialist is background-checked, vetted, and covered with rigorous liability protection.',
    icon: 'ShieldCheck',
    badge: '100% Secure',
  },
  {
    title: 'Transparent Instant Pricing',
    desc: 'No hidden surcharge surprises. You get upfront itemized quotes with automatic 20% new client savings.',
    icon: 'BadgePercent',
    badge: 'No Hidden Fees',
  },
  {
    title: '24-Hour Re-Clean Guarantee',
    desc: 'If anything is less than pristine, we return within 24 hours to make it right at no cost.',
    icon: 'CheckCircle2',
    badge: 'Peace of Mind',
  },
];
