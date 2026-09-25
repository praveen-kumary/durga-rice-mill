/* --- Official Durga Rice Mill Branded Wholesale Rice Bags --- */
/* Sourced directly from BAG IMAGES folder (Lazeez, White & White, Ragul Bullet, Meri Jaan) */
/* REAL AUTHENTIC DATA ONLY - NO FAKE PRICING, NO FAKE LAB TEST DUMMY STATS */

export interface Product {
  id: string;
  name: string;
  brand: string;
  netWeight: string;
  category: string;
  shortDesc: string;
  description: string;
  mrp?: string;
  unitPrice?: string;
  image: string;
  images: string[];
  specs: {
    packaging?: string;
    netWeight?: string;
    fssaiLic?: string;
    batchNo?: string;
    shelfLife?: string;
    bestFor?: string;
    purity?: string;
    mrp?: string;
    unitPrice?: string;
  };
  cropYear: string;
  commercialUses: string[];
}

export const products: Product[] = [
  {
    id: 'white-and-white-gold',
    name: 'RNR Steam Rice',
    brand: 'White & White',
    netWeight: '26 kg',
    category: 'Steam Rice',
    shortDesc: '26kg sack — Slender, non-sticky grains, Buhler sortex cleaned for high-yield commercial dining and catering.',
    description:
      'Packed under the White & White brand by Durga Rice Mill (Mouda, Nagpur), RNR Steam Rice features premium slender grains steamed and milled to perfection. Processed with advanced Buhler optical color sorting technology, this 26kg commercial sack delivers lightweight, fluffy, separate cooked grains with exceptional volume expansion. The benchmark choice for family dining, hotel buffets, cafeterias, and institutional dining.',
    image: '/assets/bags/durga-rice-mill-white-and-white-rnr-steam-rice-26kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-white-and-white-rnr-steam-rice-26kg-pack.webp',
      '/assets/bags/durga-rice-mill-white-and-white-rnr-steam-rice-26kg-lifestyle.webp',
      '/assets/bags/durga-rice-mill-white-and-white-rnr-steam-rice-26kg-back.webp',
    ],
    specs: {
      packaging: '26 kg Heavy-Duty Woven Sack (Gold Floral Edition)',
      netWeight: '26 kg',
      purity: '100% Buhler Optical Color Sortex Cleaned',
      shelfLife: '24 Months in cool & dry aerated storage',
      batchNo: 'DRM-001',
      fssaiLic: '11517056000660',
      bestFor: 'Daily family meals, hotel buffets, executive dining, high-volume catering',
    },
    cropYear: '2025–2026 Fresh Milling Run',
    commercialUses: [
      'High-Volume Caterers & Marriage Banquets',
      'Hotel Buffets & Executive Dining Halls',
      'Wholesale APMC Grain Redistribution',
      'Corporate & Institutional Canteens',
    ],
  },
  {
    id: 'white-and-white-ruby',
    name: 'JSR Lachkari Wada Kolam Broken Rice',
    brand: 'White & White',
    netWeight: '26 kg',
    category: 'Broken Rice',
    shortDesc: '26kg sack — Double-cleaned JSR Lachkari Wada Kolam broken rice, optical sortex graded for catering, canteens, and batters.',
    description:
      'Milled from authentic Vidarbha JSR Lachkari Wada Kolam paddy by Durga Rice Mill, this double-cleaned broken rice grade offers soft texture, rich natural sweetness, and exceptional cost efficiency. Every batch undergoes de-stoning and optical color sorting to remove impurities and black kernels, making it the preferred choice for commercial catering, mess kitchens, and batter preparation.',
    image: '/assets/bags/durga-rice-mill-white-and-white-jsr-wada-kolam-broken-ruby-26kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-white-and-white-jsr-wada-kolam-broken-ruby-26kg-pack.webp',
      '/assets/bags/durga-rice-mill-white-and-white-jsr-wada-kolam-broken-ruby-26kg-lifestyle.webp',
      '/assets/bags/durga-rice-mill-white-and-white-jsr-wada-kolam-broken-ruby-26kg-back.webp',
    ],
    specs: {
      packaging: '26 kg Woven Polypropylene Sack (Ruby Floral Edition)',
      netWeight: '26 kg',
      purity: '100% Buhler Optical Color Sortex Cleaned',
      shelfLife: '24 Months in cool & dry aerated storage',
      batchNo: 'DRM-001',
      fssaiLic: '11517056000660',
      bestFor: 'Catering feasts, mess dining, idli/dosa batter, khichdi, commercial cooking',
    },
    cropYear: '2025–2026 Fresh Milling Run',
    commercialUses: [
      'Wholesale APMC Redistribution',
      'Hotel & Restaurant Supply',
      'Retail Grocery & Supermarket Chains',
      'Mess & Institutional Canteen Supply',
    ],
  },
  {
    id: 'white-and-white-emerald',
    name: 'JSR Lachkari Wada Kolam Raw Broken Rice',
    brand: 'White & White',
    netWeight: '26 kg',
    category: 'Raw Broken Rice',
    shortDesc: '26kg sack — Raw milled JSR Lachkari Wada Kolam broken rice, sortex cleaned for commercial kitchens, dhabas, and caterers.',
    description:
      'Processed directly from premium unsteamed raw JSR Lachkari Wada Kolam paddy at Durga Rice Mill\'s Mouda plant. This raw broken rice variety delivers immaculate whiteness, high starch density, and wholesome natural taste. Multi-pass Buhler sortex cleaning guarantees spotless purity, perfectly suited for high-volume cooking, caterers, food processors, and traditional South Indian culinary preparations.',
    image: '/assets/bags/durga-rice-mill-white-and-white-jsr-raw-broken-emerald-26kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-white-and-white-jsr-raw-broken-emerald-26kg-pack.webp',
      '/assets/bags/durga-rice-mill-white-and-white-jsr-raw-broken-emerald-26kg-lifestyle.webp',
      '/assets/bags/durga-rice-mill-white-and-white-jsr-raw-broken-emerald-26kg-back.webp',
    ],
    specs: {
      packaging: '26 kg Woven Polypropylene Sack (Emerald Green Floral Edition)',
      netWeight: '26 kg',
      purity: '100% Buhler Optical Color Sortex Cleaned',
      shelfLife: '24 Months in cool & dry aerated storage',
      batchNo: 'DRM-001',
      fssaiLic: '11517056000660',
      bestFor: 'Commercial caterers, canteens, dhabas, khichdi, idli/dosa flour & batters',
    },
    cropYear: '2025–2026 Fresh Harvest',
    commercialUses: [
      'Wedding & Banquet Caterers',
      'Mughlai & Fine-Dining Restaurants',
      'Wholesale Grain Mandi Sourcing',
      'Export & Institutional Kitchens',
    ],
  },
  {
    id: 'lazeez-kolam-green',
    name: 'Lazeez Premium JSR Lachkari Wada Kolam (Green Pack)',
    brand: 'Lazeez / Siddhatej',
    netWeight: '30 kg',
    category: 'Biryani Special',
    shortDesc: '30kg heavy-duty sack — No.1 Slim Rice, Special Biryani Rice, aromatic, double-cleaned and naturally aged.',
    description:
      'Lazeez Premium JSR Lachkari Wada Kolam is crafted specifically for master biryani chefs and commercial caterers who demand slim, non-sticky grains that absorb rich masala gravies without breaking. Prominently labeled "No.1 Slim Rice" and "Special Biryani Rice", this 30kg sack is naturally aged, double-cleaned, and processed through our modern automated milling plant in Mouda, Nagpur. Slogan: "Grown with Care, Served with Love".',
    image: '/assets/bags/durga-rice-mill-lazeez-jsr-lachkari-wada-kolam-green-30kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-lazeez-jsr-lachkari-wada-kolam-green-30kg-pack.webp',
      '/assets/bags/durga-rice-mill-lazeez-jsr-lachkari-wada-kolam-green-30kg-lifestyle.webp',
    ],
    specs: {
      packaging: '30 kg Heavy-Duty Moisture-Barrier Sack (Emerald Green Border)',
      netWeight: '30 kg',
      purity: '100% Dual-Sortex Optical Color Graded',
      shelfLife: '24 Months naturally aged reserve',
      fssaiLic: '11517056000660',
      bestFor: 'Biryani master kitchens, commercial catering, royal pulao, restaurant menu staples',
    },
    cropYear: 'Aged Harvest Reserve',
    commercialUses: [
      'Specialty Biryani Houses & Mughlai Restaurants',
      'Wedding Feasts & Banquet Caterers',
      'Wholesale APMC Rice Redistribution',
      'Bulk Mandi Supply Contracts',
    ],
  },
  {
    id: 'lazeez-kolam-gold',
    name: 'Lazeez Premium Biryani Rice (Gold Pack)',
    brand: 'Lazeez / Siddhatej',
    netWeight: '30 kg',
    category: 'Biryani Special',
    shortDesc: 'Royal 30kg packaging — No.1 Slim Biryani Rice, double cleaned, naturally aged for exceptional aroma.',
    description:
      'The royal gold edition of Lazeez JSR Lachkari Wada Kolam. Selected from premier paddy harvests in the Wainganga river belt, this grain delivers rich natural aroma and tender cooked texture. Ideal for signature dum biryanis, royal pilafs, and celebratory banquets where grain separation and steam fragrance are paramount.',
    image: '/assets/bags/durga-rice-mill-lazeez-premium-biryani-rice-gold-30kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-lazeez-premium-biryani-rice-gold-30kg-pack.webp',
      '/assets/bags/durga-rice-mill-lazeez-premium-biryani-rice-gold-30kg-lifestyle.webp',
    ],
    specs: {
      packaging: '30 kg Premium BOPP Laminated Sack (Gold Border)',
      netWeight: '30 kg',
      purity: '100% Buhler Optical Color Sortex Graded',
      shelfLife: '24 Months naturally aged reserve',
      fssaiLic: '11517056000660',
      bestFor: 'Royal dum biryani, Kashmiri pulao, banquet feasts, 5-star catering',
    },
    cropYear: 'Aged Vintage Reserve',
    commercialUses: [
      'High-Volume Biryani Chains & Cloud Kitchens',
      'Five-Star Banquet Catering',
      'Wholesale APMC Grain Traders',
      'Specialty Gourmet Food Stores',
    ],
  },
  {
    id: 'ragul-bullet-colom',
    name: 'Ragul Bullet Super Vada Colom Rice No. 1',
    brand: 'Ragul Bullet',
    netWeight: '26 kg',
    category: 'Marriage Special',
    shortDesc: '26kg pack — Bangalore\'s First Choice marriage special long grain rice, sortex cleaned with BUHLER optical tech.',
    description:
      'Ragul Bullet is celebrated across South India and Maharashtra as "Bangalore\'s First Choice" for marriage banquets and high-volume catering. Featuring Buhler optical color sorting, hygienic packaging, and APEDA membership certification, this 26kg bag delivers guaranteed grain integrity, rich natural taste, and impressive cooked volume yield. Packed and marketed by Durga Rice Mill, Mouda, Nagpur.',
    image: '/assets/bags/durga-rice-mill-ragul-bullet-super-vada-colom-26kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-ragul-bullet-super-vada-colom-26kg-pack.webp',
      '/assets/bags/durga-rice-mill-ragul-bullet-super-vada-colom-26kg-lifestyle.webp',
    ],
    specs: {
      packaging: '26 kg Hygienically Packed Heavy-Duty Sack (Bullet Motorcycle Edition)',
      netWeight: '26 kg',
      purity: '100% Buhler Optical Color Sortex Cleaned',
      batchNo: '12 ONL 02',
      fssaiLic: '11517056000660',
      shelfLife: '24 Months From Packaging',
      bestFor: 'Marriage feasts, South Indian wedding meals, commercial catering, mandi distribution',
    },
    cropYear: 'Current Harvest Run',
    commercialUses: [
      'Wedding Catering Contracts & Marriage Halls',
      'Bangalore & Karnataka Wholesale Rice Redistribution',
      'Hotel & Canteen Mass Dining Services',
      'Interstate Rice Mandi Trading',
    ],
  },
  {
    id: 'meri-jaan-jeera',
    name: 'Jeera Raw Rice (Sizer)',
    brand: 'Meri Jaan',
    netWeight: '26 kg',
    category: 'Jeera Rice',
    shortDesc: '26kg bag — Sortex-cleaned Jeera Raw Rice (Sizer), naturally seasoned short grain for aromatic jeera rice and pulao.',
    description:
      'Jeera Raw Rice (Sizer) from Durga Rice Mill features uniform, machine-sifted short grains naturally seasoned to release an appetizing aroma when cooked. Sifted through precision rotary sizers and Buhler optical color sorters, this 26kg commercial sack ensures immaculate grain cleanliness with delicate tenderness. The premier choice for restaurant jeera rice, ghee rice, wedding feasts, and temple prasad.',
    image: '/assets/bags/durga-rice-mill-meri-jaan-jeera-raw-rice-sizer-26kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-meri-jaan-jeera-raw-rice-sizer-26kg-pack.webp',
      '/assets/bags/durga-rice-mill-meri-jaan-jeera-raw-rice-sizer-26kg-lifestyle.webp',
    ],
    specs: {
      packaging: '26 kg Heavy-Duty Sack (Vintage Pastoral & Heart Emblem Edition)',
      netWeight: '26 kg',
      purity: '100% Buhler Optical Color Sortex Quality',
      fssaiLic: '11517056000660',
      shelfLife: '24 Months Naturally Seasoned',
      bestFor: 'Restaurant Jeera Rice, Ghee Rice, wedding feasts, temple prasad, banquet service',
    },
    cropYear: 'Naturally Seasoned Crop',
    commercialUses: [
      'Specialty Indian Restaurants (Jeera & Ghee Rice Menus)',
      'Premium Catering & Banquet Services',
      'Supermarkets & Gourmet Grocers',
      'Regional Wholesale APMC Grain Markets',
    ],
  },
  {
    id: 'meri-jaan-sambhar',
    name: 'Jeera Sambhar Rice',
    brand: 'Meri Jaan',
    netWeight: '30 kg',
    category: 'Jeera Rice',
    shortDesc: '30kg sack — Double Sortex soft-aged Jeera Sambhar Rice, specially milled for authentic sambhar rice, daily dining, and South Indian catering.',
    description:
      'Packed under the Meri Jaan brand ("Finest Grain Serve With Pure Love") by Durga Rice Mill, Jeera Sambhar Rice is a dedicated 30kg commercial pack designed for traditional South Indian culinary standards. Processed with advanced double optical color sorting, these naturally soft-aged short-to-medium grains cook to a tender, comforting texture that absorbs sambhars, rasams, and gravies completely without turning mushy. The premier choice for tiffin centers, restaurants, wedding meals, and family kitchens.',
    image: '/assets/bags/durga-rice-mill-meri-jaan-jeera-sambhar-rice-30kg-pack.webp',
    images: [
      '/assets/bags/durga-rice-mill-meri-jaan-jeera-sambhar-rice-30kg-pack.webp',
      '/assets/bags/durga-rice-mill-meri-jaan-jeera-sambhar-rice-30kg-lifestyle.webp',
    ],
    specs: {
      packaging: '30 kg Heavy-Duty Polypropylene Woven Sack (Forest Green Landscape Edition)',
      netWeight: '30 kg',
      purity: '100% Double Sortex Optical Color Graded',
      shelfLife: '24 Months Soft-Aged Reserve',
      batchNo: 'DRM-002',
      fssaiLic: '11517056000660',
      bestFor: 'Authentic Sambhar Rice, Rasam Sadam, Curd Rice, daily thalis, South Indian restaurants & caterers',
    },
    cropYear: 'Naturally Soft-Aged Reserve',
    commercialUses: [
      'South Indian Restaurants & Tiffin Centers (Sambhar Rice & Meals)',
      'Wedding & Banquet Catering Contracts',
      'Wholesale APMC Grain Markets & Distributors',
      'Hostel, Mess & Corporate Canteens',
    ],
  },
];
