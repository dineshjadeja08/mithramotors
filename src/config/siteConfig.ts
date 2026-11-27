/**
 * ============================================================
 * MITHRA MOTORS — OFFICIAL SITE CONFIGURATION
 * ============================================================
 *
 * Official business details, brand partnerships, confirmed models,
 * services, and verified links.
 * ============================================================
 */

export interface Vehicle {
  id: string;
  brand: 'TVS' | 'KOMAKI' | 'BGAUSS' | 'AMPERE' | string;
  model: string;
  category: 'motorcycle' | 'scooter' | 'electric';
  image: string;
  engineCc?: string;
  mileageTag?: string;
  tag?: string;
  fuelType: 'Petrol' | 'Electric';
  colors?: string[];
  confirmedDetails: string[];
  isFeatured?: boolean;
  isElectricPage?: boolean;
  isPublished: boolean;
}

export interface SparePartCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
  isPublished: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  isPublished: boolean;
}

export type ServiceItem = ServiceCategory;

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  phone: string[];
  mapsUrl?: string;
  isPublished: boolean;
}

export interface VehicleCategory {
  key: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  isPublished: boolean;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  businessType: string;
  headline: string;
  subtitle: string;
  description: string;
  url: string;
  locale: string;

  // Contact Details
  primaryPhone: string;
  secondaryPhone: string;
  whatsappNumber: string;

  // Address
  address: {
    line1: string;
    line2: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    landmark: string;
    fullFormatted: string;
  };

  // Google Maps
  googleMapsUrl: string;

  // Opening Hours
  openingHoursText: string;

  // Reusable branches
  branches: Branch[];

  // Vehicle Categories filter
  vehicleCategories: VehicleCategory[];

  // Brands handled
  brands: {
    name: string;
    description: string;
    type: 'ICE & Electric' | 'Electric Specialist' | 'Smart EV' | 'EV Leader';
    badgeColor: string;
  }[];

  // Vehicles
  vehicles: Vehicle[];

  // Spare Parts
  spareParts: SparePartCategory[];

  // Services
  services: ServiceCategory[];

  // Gallery
  gallery: GalleryImage[];

  // Animation Toggle
  animationsEnabled: boolean;
  ogImage: string;
}

const siteConfig: SiteConfig = {
  businessName: 'MITHRA MOTORS',
  tagline: 'MULTI BRAND TWO WHEELER SHOWROOM',
  businessType: 'Two-Wheeler Sales & Service',
  headline: 'Trusted Two-Wheeler Showroom in Karapattu',
  subtitle:
    'New Bikes, Electric Scooters, Genuine Spare Parts & Expert Service.',
  description:
    'Mithra Motors is an authorized multi-brand two-wheeler showroom and service center representing TVS, Komaki, BGauss, and Ampere. Located on Uthangarai to Tirupattur Main Road, Karapattu, Krishnagiri, Tamil Nadu.',
  url: 'https://mithramotors.in',
  locale: 'en_IN',

  // ── Confirmed Contact Numbers ─────────────────────────────
  primaryPhone: '96265 59167',
  secondaryPhone: '94897 46955',
  whatsappNumber: '9626559167', // Official WhatsApp: 9626559167

  // ── Address ──────────────────────────────────────────────
  address: {
    line1: 'Uthangarai to Tirupattur Main Road',
    line2: 'Karapattu, Near Barath Pump',
    city: 'Karapattu',
    district: 'Krishnagiri District',
    state: 'Tamil Nadu',
    pincode: '635207',
    landmark: 'Near Barath Pump',
    fullFormatted:
      'Uthangarai to Tirupattur Main Road, Karapattu, Near Barath Pump, Tamil Nadu – 635207.',
  },

  // ── Official Google Maps URL ──────────────────────────────
  googleMapsUrl: 'https://maps.app.goo.gl/u4iZmHZ9RKNheBvr9',

  // ── Official Opening Hours ────────────────────────────────
  openingHoursText: '9:00 AM – 7:00 PM',

  // ── Reusable Branch Components (3 branches; only Karapattu published) ─
  branches: [
    {
      id: 'karapattu',
      name: 'Karapattu Showroom & Workshop',
      address: 'Uthangarai to Tirupattur Main Road, Near Barath Pump',
      city: 'Karapattu',
      state: 'Tamil Nadu',
      pincode: '635207',
      landmark: 'Near Barath Pump',
      phone: ['96265 59167', '94897 46955'],
      mapsUrl: 'https://maps.app.goo.gl/u4iZmHZ9RKNheBvr9',
      isPublished: true,
    },
    {
      id: 'branch-2',
      name: 'Branch 2 (Upcoming)',
      address: 'Location details to be announced upon confirmation',
      city: 'Tamil Nadu',
      state: 'Tamil Nadu',
      pincode: '635207',
      phone: [],
      isPublished: false,
    },
    {
      id: 'branch-3',
      name: 'Branch 3 (Upcoming)',
      address: 'Location details to be announced upon confirmation',
      city: 'Tamil Nadu',
      state: 'Tamil Nadu',
      pincode: '635207',
      phone: [],
      isPublished: false,
    },
  ],

  // ── Vehicle Categories ────────────────────────────────────
  vehicleCategories: [
    { key: 'all', label: 'All Two-Wheelers' },
    { key: 'motorcycle', label: 'Motorcycles' },
    { key: 'scooter', label: 'Scooters' },
    { key: 'electric', label: 'Electric Scooters' },
  ],

  // ── Official Brands ───────────────────────────────────────
  brands: [
    {
      name: 'TVS',
      description: 'Motorcycles, Scooters & Multi-Utility (Jupiter 110, XL100, Apache RTR, Sport)',
      type: 'ICE & Electric',
      badgeColor: '#0754A6',
    },
    {
      name: 'KOMAKI',
      description: 'Advanced Electric Scooters & Smart Mobility (X-One Series)',
      type: 'Electric Specialist',
      badgeColor: '#E5242A',
    },
    {
      name: 'BGAUSS',
      description: 'High Performance & Long Range Premium Electric Scooters',
      type: 'Smart EV',
      badgeColor: '#082D59',
    },
    {
      name: 'AMPERE',
      description: 'Eco-Friendly, Low Maintenance Indian Electric Mobility',
      type: 'EV Leader',
      badgeColor: '#16A34A',
    },
  ],

  // ── Featured Vehicles (TVS, Komaki, BGauss, Ampere) ───────
  vehicles: [
    {
      id: 'tvs-jupiter-110',
      brand: 'TVS',
      model: 'TVS Jupiter 110',
      category: 'scooter',
      image: '/vehicles/tvs-jupiter-poster.webp',
      engineCc: '110 cc',
      mileageTag: 'Most Popular Scooter',
      tag: 'Family Favorite',
      fuelType: 'Petrol',
      colors: ['#D4AF37', '#475569', '#E5242A'],
      confirmedDetails: [
        'Metal body with spacious front legroom',
        'Economical & durable family scooter',
        'Official showroom booking & service support',
      ],
      isFeatured: true,
      isElectricPage: false,
      isPublished: true,
    },
    {
      id: 'komaki-x-one',
      brand: 'KOMAKI',
      model: 'Komaki X-One Electric Scooter',
      category: 'electric',
      image: '/vehicles/komaki-x-one.webp',
      engineCc: 'High Torque Motor',
      mileageTag: 'Zero Petrol Cost',
      tag: 'Electric Scooter',
      fuelType: 'Electric',
      colors: ['#1E293B', '#DC2626', '#E2E8F0'],
      confirmedDetails: [
        'Stylish aerodynamic design & LED headlamps',
        'Long-range battery with fast charging support',
        'Low maintenance & zero emissions',
      ],
      isFeatured: true,
      isElectricPage: true,
      isPublished: true,
    },
    {
      id: 'tvs-xl100',
      brand: 'TVS',
      model: 'TVS XL100 Heavy Duty',
      category: 'motorcycle',
      image: '/vehicles/tvs-xl100.webp',
      engineCc: '100 cc',
      mileageTag: 'Heavy Duty Utility',
      tag: 'Multi-Utility Leader',
      fuelType: 'Petrol',
      colors: ['#0F172A', '#1E3A8A', '#7F1D1D'],
      confirmedDetails: [
        'Rugged frame engineered for tough rural & town roads',
        'Comfortable split seat with detachable rear carrier',
        'Easy self-start with superior load-carrying capacity',
      ],
      isFeatured: true,
      isElectricPage: false,
      isPublished: true,
    },
    {
      id: 'bgauss-scooter',
      brand: 'BGAUSS',
      model: 'BGauss Electric Scooter Series',
      category: 'electric',
      image: '/vehicles/bgauss-scooter.webp',
      engineCc: 'High Speed EV',
      mileageTag: 'Smart Electric Ride',
      tag: 'Advanced EV',
      fuelType: 'Electric',
      colors: ['#0F172A', '#2563EB', '#F8FAFC'],
      confirmedDetails: [
        'Modern smart dashboard & durable suspension',
        'Govt subsidy assistance available on verified models',
        'Long life lithium-ion battery technology',
      ],
      isFeatured: true,
      isElectricPage: true,
      isPublished: true,
    },
    {
      id: 'ampere-scooter',
      brand: 'AMPERE',
      model: 'Ampere Electric Scooter Series',
      category: 'electric',
      image: '/vehicles/ampere-scooter.webp',
      engineCc: 'Reliable EV Hub Motor',
      mileageTag: 'Eco Friendly',
      tag: 'Smart Commuter',
      fuelType: 'Electric',
      colors: ['#FFFFFF', '#082D59', '#16A34A'],
      confirmedDetails: [
        'Smooth quiet acceleration for city & village riding',
        'Low running cost per kilometer',
        'Easy home charging & battery warranty support',
      ],
      isFeatured: false,
      isElectricPage: true,
      isPublished: true,
    },
    {
      id: 'tvs-apache-rtr-200',
      brand: 'TVS',
      model: 'TVS Apache RTR 200 4V',
      category: 'motorcycle',
      image: '/vehicles/tvs-apache-rtr.webp',
      engineCc: '197.7 cc',
      mileageTag: 'Race-Tuned Performance',
      tag: 'Performance Leader',
      fuelType: 'Petrol',
      colors: ['#082D59', '#E5242A', '#0F172A'],
      confirmedDetails: [
        'Racing throttle response with riding modes',
        'Aggressive design, dual-channel ABS & slipper clutch',
        'Showroom booking, enquiry & test rides available',
      ],
      isFeatured: true,
      isElectricPage: false,
      isPublished: true,
    },
    {
      id: 'tvs-sport',
      brand: 'TVS',
      model: 'TVS Sport 110',
      category: 'motorcycle',
      image: '/vehicles/tvs-sport.webp',
      engineCc: '110 cc',
      mileageTag: 'Mileage Champion',
      tag: 'High Mileage',
      fuelType: 'Petrol',
      colors: ['#082D59', '#E5242A', '#1E293B'],
      confirmedDetails: [
        'Exceptional fuel economy for everyday work',
        'Durable suspension with low periodic maintenance cost',
        'Immediate delivery options at Karapattu',
      ],
      isFeatured: false,
      isElectricPage: false,
      isPublished: true,
    },
  ],

  // ── Spare Parts Categories ────────────────────────────────
  spareParts: [
    {
      id: 'engine-parts',
      name: 'Engine Parts',
      description: 'Piston kits, valves, gaskets, cylinder blocks & spark plugs',
      image: '/parts/engine-parts.webp',
      tag: 'Genuine / OEM',
      isPublished: true,
    },
    {
      id: 'brake-parts',
      name: 'Brake Parts',
      description: 'Disc brake pads, brake shoes, master cylinders & rotors',
      image: '/parts/brake-parts.webp',
      tag: 'High Performance',
      isPublished: true,
    },
    {
      id: 'electrical',
      name: 'Electrical Parts',
      description: 'Headlamp units, indicators, wiring harness, starter motors & horn',
      image: '/parts/electrical.webp',
      tag: 'OEM Quality',
      isPublished: true,
    },
    {
      id: 'body-parts',
      name: 'Body Parts',
      description: 'Mudguards, side panels, fuel tanks, visors & crash guards',
      image: '/parts/body-parts.webp',
      tag: 'Original Fitting',
      isPublished: true,
    },
    {
      id: 'tyres',
      name: 'Tyres & Tubes',
      description: 'Front & rear tubeless tyres from MRF, CEAT & TVS Eurogrip',
      image: '/parts/tyres.webp',
      tag: 'Top Brands',
      isPublished: true,
    },
    {
      id: 'batteries',
      name: 'Batteries',
      description: 'Maintenance-free motorcycle & EV scooter batteries with warranty',
      image: '/parts/batteries.webp',
      tag: 'With Warranty',
      isPublished: true,
    },
    {
      id: 'oils',
      name: 'Oils & Lubricants',
      description: '4T Engine oil, synthetic lubricants, chain sprays & brake fluids',
      image: '/parts/oils.webp',
      tag: 'Certified Grade',
      isPublished: true,
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Rearview mirrors, mobile holders, grip covers, seat covers & locks',
      image: '/parts/accessories.webp',
      tag: 'Utility Gear',
      isPublished: true,
    },
    {
      id: 'helmets',
      name: 'Helmets & Riding Gear',
      description: 'ISI certified full-face and open-face helmets, gloves & rain gear',
      image: '/parts/helmets.webp',
      tag: 'Safety Certified',
      isPublished: true,
    },
  ],

  // ── Workshop Service Categories ───────────────────────────
  services: [
    {
      id: 'new-vehicle-sales',
      name: 'New Two-Wheeler Sales',
      description: 'TVS motorcycles, scooters, mopeds and multi-brand lineup with hassle-free documentation.',
      iconName: 'Bike',
      isPublished: true,
    },
    {
      id: 'ev-sales',
      name: 'Electric Scooter Sales',
      description: 'Authorized sales for Komaki, BGauss, and Ampere electric scooters with subsidy advice.',
      iconName: 'Zap',
      isPublished: true,
    },
    {
      id: 'general-service',
      name: 'General Service',
      description: 'Comprehensive multi-brand two-wheeler servicing, washing, and 24-point checkup.',
      iconName: 'Wrench',
      isPublished: true,
    },
    {
      id: 'engine-repair',
      name: 'Engine Repair & Tuning',
      description: 'Complete mechanical overhaul, tappet calibration, mileage setting & tuning.',
      iconName: 'Settings',
      isPublished: true,
    },
    {
      id: 'brake-service',
      name: 'Brake Service & Overhaul',
      description: 'Brake pad replacement, brake bleeding, shoe cleaning and disc rotor calibration.',
      iconName: 'Disc',
      isPublished: true,
    },
    {
      id: 'battery-replacement',
      name: 'Battery Replacement & Testing',
      description: 'Battery health load test, terminal cleaning, water check and new battery installation.',
      iconName: 'BatteryCharging',
      isPublished: true,
    },
    {
      id: 'genuine-parts',
      name: 'Genuine Spare Parts',
      description: '100% genuine factory components and OEM replacement consumables.',
      iconName: 'Package',
      isPublished: true,
    },
    {
      id: 'oil-change',
      name: 'Oil Change',
      description: 'Express engine oil change with authentic 4T high-grade lubricants.',
      iconName: 'Droplet',
      isPublished: true,
    },
    {
      id: 'electrical-repair',
      name: 'Electrical Repair',
      description: 'Headlamps, horn, self-start troubleshooting, relay check and wiring harness diagnostics.',
      iconName: 'Sparkles',
      isPublished: true,
    },
    {
      id: 'tyre-replacement',
      name: 'Tyre Replacement',
      description: 'Tubeless tyre replacement, valve change, puncture repair and wheel alignment.',
      iconName: 'CircleDot',
      isPublished: true,
    },
    {
      id: 'periodic-maintenance',
      name: 'Periodic Maintenance',
      description: 'Scheduled preventive maintenance checks for sustained vehicle longevity.',
      iconName: 'Clock',
      isPublished: true,
    },
  ],

  // ── Gallery Archive ───────────────────────────────────────
  gallery: [
    {
      id: 'g1',
      src: '/vehicles/tvs-jupiter-poster.webp',
      alt: 'TVS Jupiter 110 at Mithra Motors',
      category: 'vehicles',
      isPublished: true,
    },
    {
      id: 'g2',
      src: '/vehicles/komaki-x-one.webp',
      alt: 'Komaki X-One EV Scooter display',
      category: 'vehicles',
      isPublished: true,
    },
    {
      id: 'g3',
      src: '/vehicles/tvs-xl100.webp',
      alt: 'TVS XL100 Heavy Duty',
      category: 'vehicles',
      isPublished: true,
    },
    {
      id: 'g4',
      src: '/vehicles/bgauss-scooter.webp',
      alt: 'BGauss and Ampere Electric Scooters',
      category: 'vehicles',
      isPublished: true,
    },
  ],

  animationsEnabled: true,
  ogImage: '/images/showroom-banner.webp',
};

export default siteConfig;
