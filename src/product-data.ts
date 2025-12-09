// src/app/products-data.ts
export interface ProductSection {
  title: string;         // e.g. 'Tasting Notes', '🍰 Ideal Applications'
  text?: string;         // optional paragraph
  bullets?: string[];    // optional bullet points
}

export interface Product {
  id: string;
  name: string;
  image: string;
  desc?: string;         // will be used as BIG title on detail page
  heroLine?: string;
  intro?: string;
  highlight?: string;
  bridge?: string;       // <- new: extra sentence before sections
  sections?: {
    title: string;
    text?: string;
    bullets?: string[];
  }[];

  longDesc?: string[];   // fallback for products without sections
}

export const COUVERTURE: Product[] = [
  {
    id: 'couv-45',
    name: '45% Bar',
    image: '/assets/chocolates/45DarkCo.jpg',

    // BIG title on detail page
    desc: '45% Dark Couverture',

    // Golden hero line
    heroLine: 'Pure Craft. Perfect Melt.',

    // Subtitle line
    intro: 'Your Signature Chocolate Starts Here.',

    // Main intro paragraph
    highlight:
      'A masterful balance of cocoa depth and gentle sweetness. With balanced cocoa richness and flawless fluidity, this chocolate is approachable for all palates.',

    // Optional connecting sentence (we used this field for 55%)
    bridge: '',   // remove if not needed

    sections: [
      {
        title: '🍰 IDEAL APPLICATION',
        bullets: [
          'Artisan bonbons & truffles',
          'Ganache, mousse, and fillings',
          'Cakes, pastries & tarts',
          'Dipped fruits, nuts, and cookies',
          'Chocolate bars & custom molds'
        ]
      },
      {
        title: '🌱 ETHICAL & SUSTAINABLE',
        text:
          'We partner with responsible cocoa growers to support fair trade practices and environmentally conscious farming. Enjoy chocolate that tastes good and does good.'
      }
    ]
  },
  {
    id: 'couv-55',
    name: '55% Bar',
    image: '/assets/chocolates/55DarkCo.PNG',

    // this will be your main black H1
    desc: '55% Dark Couverture ',

    heroLine: 'Bold Depth. Silky Precision. Crafted for Masters.',
    intro:
      'Our 55% Dark Couverture Chocolate delivers a refined balance of cocoa intensity and smooth sweetness.',
    highlight:
      'A perfectly balanced 55% dark couverture that snaps clean, shines bright, and elevates every confection.',
    // ⭐ the missing sentence:
    bridge:
      'Whether you are creating a signature collection or elevating everyday classics, this chocolate delivers unmatched sophistication.',

    sections: [
      {
        title: 'TASTING NOTES',
        bullets: [
          'Aroma: Deep cocoa with subtle roasted notes.',
          'Taste: Bold dark chocolate, balanced sweetness, hints of dried fruit and warm spice.'
        ]
      },
      {
        title: '🍰 IDEAL APPLICATIONS',
        bullets: [
          'Artisan bonbons & pralines',
          'Elegant coatings & enrobing',
          'Glossy molded bars & figures',
          'Smooth ganache, truffles & fillings',
          'Luxury patisserie, tarts & plated desserts'
        ]
      },
      {
        title: '🌱 ETHICAL & SUSTAINABLE',
        text: 'We partner with responsible cocoa growers to support fair trade practices and environmentally conscious farming. Enjoy chocolate that tastes good and does good.'
      }
    ]
  },
  {
    id: 'couv-70',
    name: '70% Bar',
    image: '/assets/chocolates/70DarkCo.PNG',

    // BIG title on the detail page
    desc: '70% Dark Couverture',

    // Golden hero line
    heroLine: 'Pure Intensity. Signature Excellence. Crafted for True Artisans.',

    // Short intro sentence
    intro:
      'Our 70% Dark Couverture Chocolate delivers uncompromising depth, exceptional purity, and a powerful cocoa profile designed for master chocolatiers and high-end pastry creators.',

    // Highlight paragraph
    highlight:
      'Bold, complex, and deeply aromatic with a refined bitterness that showcases true cocoa character.',

    // Connecting line
    bridge:
      'Perfect for luxurious collections and signature recipes where flavor intensity is essential.',

    sections: [
      {
        title: 'TASTING NOTES',
        bullets: [
          'Aroma: Intense cocoa, subtle earthy notes, hints of dark fruit.',
          'Taste: Rich, mature dark chocolate with balanced bitterness and a layered flavor structure.'
        ]
      },
      {
        title: '🍰 IDEAL APPLICATIONS',
        bullets: [
          'Premium chocolates & pralines',
          'High-impact ganache & truffles',
          'Ultra-smooth glazes & coatings',
          'Gourmet bars & single-origin creations',
          'Culinary desserts requiring strong cocoa presence'
        ]
      },
      {
        title: '🌱 ETHICAL & SUSTAINABLE',
        text:
          'We partner with responsible cocoa growers to support fair trade practices and environmentally conscious farming. Enjoy chocolate that tastes good and does good.'
      }
    ]
  },
  {
    id: 'couv-85',
    name: '85% Bar',
    image: '/assets/chocolates/85DarkCo.PNG',

    // Big title on detail page
    desc: '85% Dark Couverture',

    // Golden hero line
    heroLine: 'Uncompromising Strength. Pure Cocoa Mastery.',

    // Intro paragraph
    intro:
      'Our 85% Dark Couverture Chocolate is engineered for chocolatiers and pastry professionals who demand the highest level of cocoa intensity.',

    // Highlight paragraph
    highlight:
      'Crafted from meticulously selected high-cocoa beans, it offers a deep, commanding cocoa presence with a remarkably clean and refined bitterness.',

    // Bridge sentence
    bridge:
      'Perfect for culinary work where purity, intensity, and precision are essential.',

    sections: [
      {
        title: 'TASTING NOTES',
        bullets: [
          'Aroma: Robust cocoa, warm woodiness, subtle roasted notes.',
          'Taste: Intensely dark with layered complexity — earthy depth, dark fruit hints, and a beautifully structured bitterness.'
        ]
      },
      {
        title: '🍰 IDEAL APPLICATIONS',
        bullets: [
          'Ultra-premium chocolate bars & single-origin concepts',
          'High-cocoa ganache, truffles & pralines',
          'Sophisticated dessert components requiring intense flavor',
          'Bold glazes, coatings & artistic chocolate work',
          'Balance-enhancing ingredient for blends and signature recipes'
        ]
      },
      {
        title: '🌱 ETHICAL & SUSTAINABLE',
        text:
          'We partner with responsible cocoa growers to support fair trade practices and environmentally conscious farming. Enjoy chocolate that tastes good and does good.'
      }
    ]
  },

  {
    id: 'couv-36',
    name: '35% Milk Bar',
    image: '/assets/chocolates/35MilkCo.PNG',

    // Big title on detail page
    desc: '35% Milk Couverture',

    // Golden hero line
    heroLine: 'Creamy Elegance. Professional Craftsmanship.',

    // Intro paragraph
    intro:
      'Our 35% Milk Couverture Chocolate blends rich cocoa with creamy milk for a smooth, velvety chocolate experience.',

    // Highlight paragraph
    highlight:
      'A perfectly balanced milk chocolate with smooth sweetness and gentle cocoa depth.',

    // Transitional line / bridge
    bridge:
      'Creamy, well-balanced flavor for versatile use.',

    sections: [
      {
        title: 'TASTING NOTES',
        bullets: [
          'Aroma: Creamy, warm cocoa with subtle caramel notes.',
          'Taste: Smooth, sweet, and well-rounded milk chocolate with a gentle cocoa finish.'
        ]
      },
      {
        title: '🍰 IDEAL APPLICATIONS',
        bullets: [
          'Truffles & pralines',
          'Mousse, ganache, and creamy fillings',
          'Coatings, glazes, and dipped confections',
          'Cakes, tarts, and pastry decorations',
          'Chocolate bars & molded shapes'
        ]
      },
      {
        title: '🌱 ETHICAL & SUSTAINABLE',
        text:
          'We partner with responsible cocoa growers to support fair trade practices and environmentally conscious farming. Enjoy chocolate that tastes good and does good.'
      }
    ]
  },

  {
    id: 'couv-37',
    name: '45% Milk Bar',
    image: '/assets/chocolates/45MilkCo.PNG   ',

    // Big title on detail page
    desc: '45% Milk Couverture',

    // Golden hero line
    heroLine: 'Silky Smoothness. Masterful Balance.',

    // Intro paragraph
    intro:
      'Our Milk Couverture Chocolate brings together fine cocoa and rich milk for a smooth, creamy, and premium chocolate experience.',

    // Highlight paragraph
    highlight:
      'Perfectly balanced with gentle sweetness, soft cocoa depth, and a velvety melt — crafted for chocolatiers and pastry professionals.',

    // Bridge / connecting sentence
    bridge:
      'Designed for both classic creations and modern confections, offering exceptional texture and flavor harmony.',

    sections: [
      {
        title: 'TASTING NOTES',
        bullets: [
          'Aroma: Creamy milk chocolate with warm cocoa depth.',
          'Taste: Smooth, sweet, and balanced flavor profile with a pleasant cocoa finish.'
        ]
      },
      {
        title: '🍰 IDEAL APPLICATIONS',
        bullets: [
          'Pralines & creamy truffles',
          'Ganache, mousse & fillings',
          'Cakes, pastries & tarts',
          'Chocolate bars & molded shapes',
          'Decorations, glazes & dipped confections'
        ]
      },
      {
        title: '🌱 ETHICAL & SUSTAINABLE',
        text:
          'We partner with responsible cocoa growers to support fair trade practices and environmentally conscious farming. Enjoy chocolate that tastes good and does good.'
      }
    ]
  }


];

export const CACAO: Product[] = [
  {
  id: 'cacao-butter',
  name: 'Natural Non-Deodorised Cacao Butter',
  image: '/assets/chocolates/cocoaBut.jpg',

  // BIG title on detail page
  desc: 'Natural Non-Deodorised Cacao Butter',

  // Golden hero line
  heroLine: 'Pure, Natural Cocoa Butter',

  // Subtitle line
  // intro: 'The Natural Essence of Cocoa — Pure & Untouched.',

  // Main intro paragraph
  highlight:
    'Our Natural Non-Deodorised Cocoa Butter is a premium, unrefined vegetable fat extracted from high-quality cocoa beans. Unlike deodorised versions, this butter retains its rich, authentic chocolate aroma and natural golden color. It is packed with antioxidants and nourishing fatty acids, making it ideal for skincare, haircare, and artisanal chocolate production',

  // Optional connecting sentence
  bridge: '',

  sections: [
    {
      title: '⭐ BENEFITS',
      bullets: [
        'Deeply moisturises and softens skin',
        'Supports elasticity, smoothness, and natural glow',
        'Rich in antioxidants and nourishing fatty acids',
        'Ideal for soaps, balms, lotions, and body butters',
        'Suitable for food, cosmetic & pharmaceutical applications'
      ]
    },
    {
      title: '✨ SUGGESTED USES',
      bullets: [
        'Body butters & lotions',
        'Lip balms & massage bars',
        'Hair conditioners & masks',
        'Artisanal chocolate & confectionery',
        'Baking, glazing & gourmet applications'
      ]
    }
  ]
},

{
  id: 'cacao-powder',
  name: 'Natural Cacao Powder',
  image: '/assets/chocolates/cocoaPowder.jpeg',

  // BIG title on detail page
  desc: 'Natural Cacao Powder',

  // Golden hero line
  heroLine: 'Rich. Aromatic. Pure Cocoa Depth.',

  // Subtitle line (optional)
  // intro: '',

  // Main intro paragraph
  highlight:
    'Natural Cocoa Powder is crafted by pressing roasted cocoa beans to remove a portion of their cocoa butter, then finely grinding the remaining solids. It retains its natural acidity, deep chocolate aroma, and rich brown color — perfect for baking, beverages, desserts, and even cosmetic formulations requiring pure cocoa richness.',

  // Optional connecting sentence
  bridge: '',

  sections: [
    {
      title: '🌿 TYPICAL COMPOSITION',
      bullets: [
        'Cocoa Butter: ~10–12% (High-fat variants: 20–22%)',
        'Cocoa Solids: ~88–90%',
        'Moisture: <5%',
        'Natural pH: ~5.2–5.8',
        'Rich in natural antioxidants & polyphenols'
      ]
    },
    {
      title: '✨ SUGGESTED USES',
      bullets: [
        'Cakes, brownies, biscuits & pastries',
        'Hot chocolate, smoothies & beverages',
        'Chocolate coatings & confectionery',
        'Ice creams & dairy-based desserts',
        'Cosmetic scrubs, masks & natural soaps'
      ]
    }
  ]
},

{
  id: 'cacao-nibs',
  name: 'Cacao Nibs',
  image: '/assets/chocolates/cocoaNibs.jpeg',

  // BIG title on detail page
  desc: 'Premium Roasted Cacao Nibs',

  // Golden hero line
  heroLine: 'Pure. Crunchy. Naturally Intense.',

  // Subtitle line (optional)
  // intro: '',

  // Main intro paragraph
  highlight:
    'Cacao Nibs are small pieces of crushed, roasted cocoa beans — minimally processed to retain their authentic chocolate aroma, bold flavor, and nutrient-rich profile. They offer natural crunch, antioxidants, and pure cocoa intensity, perfect for gourmet foods, desserts, snacks, and artisanal chocolate applications.',

  // Optional connecting sentence
  bridge: '',

  sections: [
    {
      title: '🌿 TYPICAL COMPOSITION',
      bullets: [
        'Cocoa Butter: ~45–55%',
        'Protein: ~12–15%',
        'Dietary Fibre: ~10–15%',
        'Carbohydrates: ~5–10%',
        'Moisture: <5%',
        'Natural antioxidants (polyphenols)'
      ]
    },
    {
      title: '✨ SUGGESTED USES',
      bullets: [
        'Bakery & dessert toppings',
        'Artisanal chocolate making',
        'Trail mixes & healthy snacks',
        'Smoothies & nutritional blends',
        'Cereals, granola & energy bars'
      ]
    }
  ]
},

  
{
  id: 'cacao-mass',
  name: 'Natural Cocoa Mass',
  image: '/assets/chocolates/cocoaMass.jpeg',

  // BIG title on detail page
  desc: '100% Natural Cocoa Mass',

  // Golden hero line
  heroLine: 'Pure Cocoa Mass. Unmatched Intensity.',

  // Subtitle line (optional)
  // intro: '',

  // Main intro paragraph
  highlight:
    'Natural Cocoa Mass is a minimally processed, 100% cocoa ingredient made from roasted and finely ground cocoa beans. Containing both cocoa solids and cocoa butter in their natural proportions, it delivers intense chocolate flavor, deep color, and exceptional richness — ideal for premium chocolate crafting, baking, beverages, and cosmetic formulations.',

  // Optional connecting sentence
  bridge: '',

  sections: [
    {
      title: '🌿 TYPICAL COMPOSITION',
      bullets: [
        'Cocoa Butter: ~48–55%',
        'Cocoa Solids: ~45–52%',
        'Moisture: <1%',
        'Natural antioxidants & polyphenols'
      ]
    },
    {
      title: '⭐ BENEFITS',
      bullets: [
        'Strong, authentic cocoa flavor',
        'Adds color, texture & richness to recipes',
        'Naturally rich in flavonoids & antioxidants',
        'Essential base for premium chocolate manufacturing',
        'Vegan, gluten-free & non-GMO'
      ]
    },
    {
      title: '✨ SUGGESTED USES',
      bullets: [
        'Chocolate & confectionery production',
        'Hot chocolate mixes & beverage blends',
        'Bakery & dessert applications',
        'Cosmetic formulations (aroma & antioxidant boost)'
      ]
    }
  ]
}

];

export const ALL_PRODUCTS: Product[] = [...COUVERTURE, ...CACAO];
