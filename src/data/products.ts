/* --- Official Durga Rice Mill Branded Wholesale Rice Bags --- */
/* Sourced directly from BAG IMAGES folder (Lazeez, White & White, Ragul Bullet, Meri Jaan) */

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
    grainLength?: string;
    brokenRatio?: string;
    packaging?: string;
    netWeight?: string;
    mrp?: string;
    unitPrice?: string;
    moisture?: string;
    bestFor?: string;
    purity?: string;
    admixture?: string;
    kettWhiteness?: string;
    shelfLife?: string;
    batchNo?: string;
    fssaiLic?: string;
  };
  elongation: {
    rawMm: number;
    cookedMm: number;
    ratio: string;
  };
  cropYear: string;
  nutrition: {
    energyKcal: number;
    carbsG: number;
    proteinG: number;
    dietaryFiberG: number;
    fatG: number;
    sodiumMg?: number;
    calciumMg?: number;
    ironMg?: number;
  };
  commercialUses: string[];
  cookingGuide: {
    waterRatio: string;
    cookTimeMins: string;
    fluffiness: string;
    openPan?: string;
    closedPan?: string;
    microwave?: string;
    electricCooker?: string;
  };
}

export const products: Product[] = [
  {
    id: 'white-and-white-gold',
    name: 'White & White Lachkari Wada Kolam Rice (Gold Edition)',
    brand: 'White & White',
    netWeight: '26 kg',
    category: 'Wada Kolam',
    shortDesc: 'Premium sorted 26kg Lachkari Wada Kolam rice — Pride of every kitchen, double-cleaned and sortex graded.',
    description:
      'Packed and marketed by Durga Rice Mill (Aroli, Mouda, Nagpur), White & White Gold Edition features carefully sorted Lachkari Wada Kolam rice. Milled to pearl-white brilliance with Buhler sortex technology, this 26kg commercial sack provides fluffy, fragrant, non-sticky cooked grains. Taglined "Pride of Every Kitchen", "Smile when you Eat", and "Affordable Price", it is the benchmark choice for family dining, corporate cafeterias, and high-end catering across Maharashtra and Central India.',
    mrp: '₹2,080 / bag',
    unitPrice: '₹80 / kg',
    image: '/assets/bags/white-white-gold-pack.png',
    images: [
      '/assets/bags/white-white-gold-pack.png',
      '/assets/bags/white-white-gold-lifestyle.png',
      '/assets/bags/white-white-gold-back.png',
    ],
    specs: {
      packaging: '26 kg Heavy-Duty Woven Sack (Gold Floral)',
      netWeight: '26 kg',
      mrp: '₹2,080.00 per bag',
      unitPrice: '₹80.00 per kg',
      grainLength: '5.2 mm (Medium Slender)',
      brokenRatio: '< 1.0%',
      moisture: '12.0 – 12.5%',
      purity: '99.8% Sortex Cleaned',
      admixture: '< 0.2%',
      kettWhiteness: '44° Kett (Immaculate White)',
      shelfLife: '24 Months in cool & dry aerated storage',
      batchNo: 'DRM-001',
      fssaiLic: '11517056000660',
      bestFor: 'Daily thali meals, family dining, mess catering, hotel buffet service',
    },
    elongation: {
      rawMm: 5.2,
      cookedMm: 11.6,
      ratio: '2.23x Expansion',
    },
    cropYear: '2025–2026 Fresh Milling Run',
    nutrition: {
      energyKcal: 360.9,
      carbsG: 81.0,
      proteinG: 8.0,
      dietaryFiberG: 1.0,
      fatG: 1.0,
      sodiumMg: 2.26,
      calciumMg: 9.9,
      ironMg: 0.3,
    },
    commercialUses: [
      'Supermarkets & Retail Provision Outlets',
      'Catering & Wedding Banquets',
      'Family Restaurants & Thali Centers',
      'APMC Grain Mandis & Regional Wholesalers',
    ],
    cookingGuide: {
      waterRatio: '1 : 2 cups water',
      cookTimeMins: '12–15 minutes',
      fluffiness: 'Soft, tender, and separated',
      openPan: 'Bring water to boil, add soaked rice, cook uncovered ~15 mins on medium heat. Drain and serve hot.',
      closedPan: 'Put drained rice & water in pan. Bring to boil, cover tightly, simmer 12 mins. Remove from heat.',
      microwave: 'Pour soaked rice and water into bowl, stir once, cover with cling film. Cook for 6 minutes.',
      electricCooker: 'Pour soaked rice, add measured water, switch cooker to Cooking Mode; auto-switches to Keep Warm.',
    },
  },
  {
    id: 'white-and-white-ruby',
    name: 'White & White Lachkari Wada Kolam Rice (Ruby Edition)',
    brand: 'White & White',
    netWeight: '26 kg',
    category: 'Wada Kolam',
    shortDesc: 'Double-cleaned 26kg Lachkari Wada Kolam in signature ruby-magenta pack for royal household dining.',
    description:
      'Packed in a vibrant ruby-floral BOPP sack by Durga Rice Mill, this premium sorted Lachkari Wada Kolam delivers a delicate aroma, tender bite, and consistent cooking quality. Every grain undergoes multi-pass de-husking, de-stoning, and optical color sorting to ensure spotless grains with uniform length and zero black kernels.',
    mrp: '₹2,080 / bag',
    unitPrice: '₹80 / kg',
    image: '/assets/bags/white-white-ruby-pack.png',
    images: [
      '/assets/bags/white-white-ruby-pack.png',
      '/assets/bags/white-white-ruby-lifestyle.png',
      '/assets/bags/white-white-ruby-back.png',
    ],
    specs: {
      packaging: '26 kg Woven Polypropylene Sack (Ruby Floral)',
      netWeight: '26 kg',
      mrp: '₹2,080.00 per bag',
      unitPrice: '₹80.00 per kg',
      grainLength: '5.2 mm (Medium Slender)',
      brokenRatio: '< 1.0%',
      moisture: '12.0 – 12.4%',
      purity: '99.8% Sortex Cleaned',
      admixture: '< 0.2%',
      kettWhiteness: '44° Kett (Brilliant White)',
      shelfLife: '24 Months in cool & dry aerated storage',
      batchNo: 'DRM-001',
      fssaiLic: '11517056000660',
      bestFor: 'Daily household meals, festive thalis, buffet catering',
    },
    elongation: {
      rawMm: 5.2,
      cookedMm: 11.5,
      ratio: '2.21x Expansion',
    },
    cropYear: '2025–2026 Fresh Milling Run',
    nutrition: {
      energyKcal: 356.9,
      carbsG: 81.0,
      proteinG: 6.0,
      dietaryFiberG: 1.0,
      fatG: 1.0,
      sodiumMg: 2.26,
      calciumMg: 9.9,
      ironMg: 0.3,
    },
    commercialUses: [
      'Wholesale APMC Redistribution',
      'Hotel & Restaurant Supply',
      'Retail Grocery & Supermarket Chains',
      'Mess & Institutional Canteen Supply',
    ],
    cookingGuide: {
      waterRatio: '1 : 2 cups water',
      cookTimeMins: '12–15 minutes',
      fluffiness: 'Soft, lightweight, separate grains',
      openPan: 'Boil water, add drained rice, simmer uncovered ~15 minutes on medium heat. Drain and fluff.',
      closedPan: 'Simmer covered for 12 minutes in measured water. Stand for 5 minutes before opening.',
      microwave: 'Microwave covered in microwavable bowl with 2x water for 6–7 minutes.',
      electricCooker: 'Standard automatic electric rice cooker cycle with 1:2 water ratio.',
    },
  },
  {
    id: 'white-and-white-emerald',
    name: 'White & White Lachkari Wada Kolam (Basmati Type Grain)',
    brand: 'White & White',
    netWeight: '26 kg',
    category: 'Wada Kolam',
    shortDesc: 'Special 26kg Basmati-type elongated grain Wada Kolam — extra length and exceptional cooking yield.',
    description:
      'The crown grade of the White & White portfolio. Sourced from choice paddy crops in the Vidarbha basin, this Basmati Type Grain edition has a longer raw grain profile that elongates past 13.8mm when cooked, while retaining the sweet, easy-to-digest characteristics of authentic Wada Kolam. Finished in an elegant emerald-green floral bag with certified Durga Rice Mill back labeling.',
    mrp: '₹2,080 / bag',
    unitPrice: '₹80 / kg',
    image: '/assets/bags/white-white-emerald-pack.png',
    images: [
      '/assets/bags/white-white-emerald-pack.png',
      '/assets/bags/white-white-emerald-lifestyle.png',
      '/assets/bags/white-white-emerald-back.png',
    ],
    specs: {
      packaging: '26 kg Woven Polypropylene Sack (Emerald Green Floral)',
      netWeight: '26 kg',
      mrp: '₹2,080.00 per bag',
      unitPrice: '₹80.00 per kg',
      grainLength: '6.2 mm (Basmati Type Grain)',
      brokenRatio: '< 0.8%',
      moisture: '11.8 – 12.2%',
      purity: '99.9% Sortex Cleaned',
      admixture: '< 0.1%',
      kettWhiteness: '45° Kett (Snow White)',
      shelfLife: '24 Months in cool & dry aerated storage',
      batchNo: 'DRM-001',
      fssaiLic: '11517056000660',
      bestFor: 'Pulao, jeera rice, wedding buffets, gourmet catering, royal thalis',
    },
    elongation: {
      rawMm: 6.2,
      cookedMm: 13.8,
      ratio: '2.23x Elongation',
    },
    cropYear: '2025–2026 Fresh Harvest',
    nutrition: {
      energyKcal: 356.9,
      carbsG: 81.0,
      proteinG: 6.0,
      dietaryFiberG: 1.0,
      fatG: 1.0,
      sodiumMg: 2.26,
      calciumMg: 9.9,
      ironMg: 0.3,
    },
    commercialUses: [
      'Wedding & Banquet Caterers',
      'Mughlai & Fine-Dining Restaurants',
      'Wholesale Grain Mandi Sourcing',
      'Export & Institutional Kitchens',
    ],
    cookingGuide: {
      waterRatio: '1 : 2.2 cups water',
      cookTimeMins: '14–16 minutes',
      fluffiness: 'Long slender grains with non-sticky separation',
      openPan: 'Bring pre-soaked rice to a rolling boil, simmer 15 mins. Strain through sieve.',
      closedPan: 'Cover tight with measured water, simmer 12 mins, rest 5 mins for maximum needle elongation.',
      microwave: 'Cook on high for 6 minutes covered with cling film.',
      electricCooker: 'Standard cooker cycle with 1:2.2 water ratio.',
    },
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
    mrp: 'Wholesale B2B Rate',
    unitPrice: 'Contract Quotation',
    image: '/assets/bags/lazeez-green-pack.png',
    images: [
      '/assets/bags/lazeez-green-pack.png',
      '/assets/bags/lazeez-green-lifestyle.png',
    ],
    specs: {
      packaging: '30 kg Heavy-Duty Moisture-Barrier Sack (Emerald Green Border)',
      netWeight: '30 kg',
      mrp: 'Wholesale / B2B Mandi Pricing',
      unitPrice: 'Direct Mill Rate on Inquiry',
      grainLength: '5.8 mm (No.1 Slim Rice)',
      brokenRatio: '< 0.8%',
      moisture: '11.8 – 12.2%',
      purity: '99.9% Dual-Sortex Graded',
      admixture: '< 0.1%',
      kettWhiteness: '45° Kett',
      shelfLife: '24 Months naturally aged reserve',
      bestFor: 'Dum Biryani, Special Biryani, Pulao, celebratory feasts, high-end catering',
    },
    elongation: {
      rawMm: 5.8,
      cookedMm: 13.5,
      ratio: '2.33x Superior Expansion',
    },
    cropYear: 'Aged Vintage Reserve',
    nutrition: {
      energyKcal: 358.0,
      carbsG: 80.2,
      proteinG: 7.8,
      dietaryFiberG: 1.5,
      fatG: 0.6,
    },
    commercialUses: [
      'Commercial Biryani Caterers & Dhabas',
      'Wedding Banquet Master Chefs',
      'Luxury Hotel & Mughlai Kitchens',
      'Bulk Interstate Rice Wholesalers',
    ],
    cookingGuide: {
      waterRatio: '1 : 2.25 cups water (Dum boil)',
      cookTimeMins: '13–15 minutes',
      fluffiness: 'Aromatic, needle-slim, separate grains',
      openPan: 'Soak for 20 mins, boil in rolling salted water until 75% done for dum biryani layering.',
      closedPan: 'Cook covered for 14 minutes on low flame for dry, aromatic pulao.',
      microwave: 'Heat in microwave with 1:2 water for 6 mins.',
      electricCooker: 'Standard cooker cycle with 1:2.25 water ratio.',
    },
  },
  {
    id: 'lazeez-kolam-gold',
    name: 'Lazeez Premium JSR Lachkari Wada Kolam (Gold Pack)',
    brand: 'Lazeez / Siddhatej',
    netWeight: '30 kg',
    category: 'Biryani Special',
    shortDesc: 'Royal 30kg packaging — No.1 Slim Biryani Rice, double cleaned, naturally aged for exceptional aroma.',
    description:
      'The royal gold edition of Lazeez JSR Lachkari Wada Kolam. Selected from premier paddy harvests in the Wainganga river belt, this grain delivers rich natural aroma, certified 2.34x post-cooking elongation, and tender cooked texture. Ideal for signature dum biryanis, royal pilafs, and celebratory banquets where grain separation and steam fragrance are paramount.',
    mrp: 'Wholesale B2B Rate',
    unitPrice: 'Contract Quotation',
    image: '/assets/bags/lazeez-gold-pack.png',
    images: [
      '/assets/bags/lazeez-gold-pack.png',
      '/assets/bags/lazeez-gold-lifestyle.png',
    ],
    specs: {
      packaging: '30 kg Premium BOPP Laminated Sack (Gold Border)',
      netWeight: '30 kg',
      mrp: 'Wholesale / B2B Mandi Pricing',
      unitPrice: 'Direct Mill Rate on Inquiry',
      grainLength: '5.8 mm (No.1 Slim Rice)',
      brokenRatio: '< 0.7%',
      moisture: '11.8%',
      purity: '99.9% Sortex Graded',
      admixture: '< 0.1%',
      kettWhiteness: '46° Kett',
      shelfLife: '24 Months naturally aged reserve',
      bestFor: 'Royal dum biryani, Kashmiri pulao, banquet feasts, 5-star catering',
    },
    elongation: {
      rawMm: 5.8,
      cookedMm: 13.6,
      ratio: '2.34x Expansion',
    },
    cropYear: 'Aged Vintage Reserve',
    nutrition: {
      energyKcal: 359.0,
      carbsG: 80.0,
      proteinG: 7.9,
      dietaryFiberG: 1.4,
      fatG: 0.6,
    },
    commercialUses: [
      'High-Volume Biryani Chains & Cloud Kitchens',
      'Five-Star Banquet Catering',
      'Wholesale APMC Grain Traders',
      'Specialty Gourmet Food Stores',
    ],
    cookingGuide: {
      waterRatio: '1 : 2.2 cups water',
      cookTimeMins: '13–15 minutes',
      fluffiness: 'Aromatic, tender, non-sticky needle grains',
      openPan: 'Pre-soak 25 minutes. Boil uncovered in abundant water, strain when al dente.',
      closedPan: 'Cover tight and simmer 13 minutes for fluffy separate table rice.',
      microwave: 'Microwave covered 6 minutes with 1:2 water.',
      electricCooker: 'Cook in automatic rice cooker at 1:2.2 water ratio.',
    },
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
    mrp: '₹1,950 / bag',
    unitPrice: '₹75 / kg',
    image: '/assets/bags/ragul-bullet-pack.png',
    images: [
      '/assets/bags/ragul-bullet-pack.png',
      '/assets/bags/ragul-bullet-lifestyle.png',
      '/assets/grain-macro.jpg',
    ],
    specs: {
      packaging: '26 kg Hygienically Packed Heavy-Duty Sack (Bullet Motorcycle Edition)',
      netWeight: '26 kg',
      mrp: '₹1,950.00 per bag',
      unitPrice: '₹75.00 per kg',
      grainLength: '6.0 mm (Marriage Special Colom Long Grain)',
      brokenRatio: '< 1.2%',
      moisture: '12.4%',
      purity: '99.7% Sortex Cleaned (BUHLER Optical)',
      admixture: '< 0.3%',
      kettWhiteness: '42° Kett',
      batchNo: '12 ONL 02',
      fssaiLic: '11517056000660',
      shelfLife: '24 Months From Packaging',
      bestFor: 'Marriage feasts, South Indian wedding meals, commercial catering, mandi distribution',
    },
    elongation: {
      rawMm: 6.0,
      cookedMm: 13.2,
      ratio: '2.20x Expansion',
    },
    cropYear: 'Current Harvest Run',
    nutrition: {
      energyKcal: 355.0,
      carbsG: 79.5,
      proteinG: 7.2,
      dietaryFiberG: 1.5,
      fatG: 0.6,
    },
    commercialUses: [
      'Wedding Catering Contracts & Marriage Halls',
      'Bangalore & Karnataka Wholesale Rice Redistribution',
      'Hotel & Canteen Mass Dining Services',
      'Interstate Rice Mandi Trading',
    ],
    cookingGuide: {
      waterRatio: '1 : 2.5 cups water',
      cookTimeMins: '15–17 minutes',
      fluffiness: 'High volume yield, firm, distinct grains',
      openPan: 'Cook in open boiling water 16 mins, drain completely for maximum fluffiness.',
      closedPan: 'Cover tight, simmer 15 mins for firm, hearty rice that stays fresh in buffet warmers.',
      microwave: 'Heat covered for 7 mins with 1:2.25 water.',
      electricCooker: 'Standard automated rice cooker with 1:2.5 water ratio.',
    },
  },
  {
    id: 'meri-jaan-jeera',
    name: 'Meri Jaan Premium Quality Jeera Rice',
    brand: 'Meri Jaan',
    netWeight: '26 kg',
    category: 'Jeera Rice',
    shortDesc: '26kg bag — Extra Premium Jeera Rice, naturally seasoned, real taste, and sortex graded.',
    description:
      'Meri Jaan brings the true aromatic warmth of vintage Jeera Rice to commercial kitchens and discerning households. Taglined "Finest grain, Serve with pure Love", this 26kg bag features short, delicate, naturally seasoned grains that release a subtle natural perfume when cooked. Double cleaned and sortex graded by Durga Rice Mill to ensure uniform size, high starch balance, and melt-in-mouth texture.',
    mrp: 'Wholesale B2B Rate',
    unitPrice: 'Contract Quotation',
    image: '/assets/bags/meri-jaan-pack.jpeg',
    images: [
      '/assets/bags/meri-jaan-pack.jpeg',
      '/assets/bags/meri-jaan-lifestyle.png',
      '/assets/grain-macro.jpg',
    ],
    specs: {
      packaging: '26 kg Heavy-Duty Sack (Vintage Pastoral & Heart Emblem)',
      netWeight: '26 kg',
      mrp: 'Wholesale / B2B Mandi Pricing',
      unitPrice: 'Direct Mill Rate on Inquiry',
      grainLength: '4.6 mm (Delicate Jeera Grain)',
      brokenRatio: '< 1.0%',
      moisture: '12.0%',
      purity: '99.8% Sortex Quality',
      admixture: '< 0.2%',
      kettWhiteness: '41° Kett',
      shelfLife: '24 Months Naturally Seasoned',
      bestFor: 'Restaurant Jeera Rice, Ghee Rice, daily fine dining, temple prasad, thali service',
    },
    elongation: {
      rawMm: 4.6,
      cookedMm: 9.8,
      ratio: '2.13x Expansion',
    },
    cropYear: 'Naturally Seasoned Crop',
    nutrition: {
      energyKcal: 352.0,
      carbsG: 78.8,
      proteinG: 7.0,
      dietaryFiberG: 1.6,
      fatG: 0.5,
    },
    commercialUses: [
      'Specialty Indian Restaurants (Jeera & Ghee Rice Menus)',
      'Premium Catering & Banquet Services',
      'Supermarkets & Gourmet Grocers',
      'Regional Wholesale APMC Grain Markets',
    ],
    cookingGuide: {
      waterRatio: '1 : 2.0 cups water',
      cookTimeMins: '12–14 minutes',
      fluffiness: 'Delicate, buttery texture with fragrant steam',
      openPan: 'Boil gently in salted water with cumin seeds and whole spices for 12 minutes.',
      closedPan: 'Saute briefly in ghee with cumin, add 2 cups boiling water, cover and simmer 12 mins.',
      microwave: 'Microwave covered for 6 minutes.',
      electricCooker: 'Cook in automated electric rice cooker at 1:2 water ratio.',
    },
  },
];
