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

  // Product title
  desc: '45% Dark Couverture Chocolate',

  // Short hero line (optional – keep minimal for B2B feel)
  heroLine: 'Balanced Sweetness. Clean Melt.',

  // Short intro / spec highlight
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A low-bitterness dark couverture with elevated sweetness and excellent melt. Balanced cocoa flavour and creamy texture make it ideal for glazing, enrobing, and applications requiring clean sweetness without intensity.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'FLUIDITY',
      text: '●●●○○'
    },
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs',
        'Cocoa Butter',
        'Cane Sugar'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Best before 12 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship chocolates across India and internationally. Shipping charges apply.'
    }
  ]
},

  {
  id: 'couv-55',
  name: '55% Bar',
  image: '/assets/chocolates/55DarkCo.PNG',

  // Product title
  desc: '55% Dark Couverture Chocolate',

  // Short hero line
  heroLine: 'Balanced Cocoa. Professional Precision.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A well-balanced dark couverture with pronounced cocoa notes and controlled bitterness. Smooth melt and reliable fluidity make it a versatile choice for ganache, molding, and everyday professional use.',

  // Optional bridge (not required here)
  bridge: '',

  sections: [
    {
      title: 'FLUIDITY',
      text: '●●●○○'
    },
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs',
        'Cocoa Butter',
        'Cane Sugar'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Best before 12 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship chocolates across India and internationally. Shipping charges apply.'
    }
  ]
},

  
 {
  id: 'couv-70',
  name: '70% Bar',
  image: '/assets/chocolates/70DarkCo.PNG',

  // Product title
  desc: '70% Dark Couverture Chocolate',

  // Short hero line
  heroLine: 'Intense Cocoa. Refined Bitterness.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'An intense dark couverture with bold cocoa character and restrained sweetness. Clean bitterness, strong aroma, and excellent melt performance make it ideal for ganache, pastry fillings, and flavour-forward desserts.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'FLUIDITY',
      text: '●●●●○'
    },
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs',
        'Cocoa Butter',
        'Cane Sugar'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Best before 12 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship chocolates across India and internationally. Shipping charges apply.'
    }
  ]
},

{
  id: 'couv-85',
  name: '85% Bar',
  image: '/assets/chocolates/85DarkCo.PNG',

  // Product title
  desc: '85% Dark Couverture Chocolate',

  // Short hero line
  heroLine: 'Maximum Cocoa. Pure Expression.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A high-intensity dark couverture with deep cocoa notes and minimal sweetness. Firm bitterness, clean finish, and precise melt make it ideal for flavour-driven ganache, baking, and applications requiring maximum cocoa impact.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'FLUIDITY',
      text: '●●●●○'
    },
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs',
        'Cocoa Butter',
        'Cane Sugar'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Best before 12 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship chocolates across India and internationally. Shipping charges apply.'
    }
  ]
},

{
  id: 'couv-35',
  name: '35% Milk Bar',
  image: '/assets/chocolates/35MilkCo.PNG',

  // Product title
  desc: '35% Milk Couverture Chocolate',

  // Short hero line
  heroLine: 'Creamy Milk. Smooth Melt.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A smooth milk couverture with pronounced dairy notes and gentle cocoa flavour. High fluidity and a creamy melt make it ideal for molding, enrobing, and soft-centre fillings.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'FLUIDITY',
      text: '●●●○○'
    },
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs',
        'Cocoa Butter',
        'Cane Sugar',
        'Skimmed Milk Powder',
        'Whole Milk Powder',
        'Ethylvanillin'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Best before 12 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship chocolates across India and internationally. Shipping charges apply.'
    }
  ]
},

{
  id: 'couv-45-milk',
  name: '45% Milk Bar',
  image: '/assets/chocolates/45MilkCo.PNG',

  // Product title
  desc: '45% Milk Couverture Chocolate',

  // Short hero line
  heroLine: 'Cocoa-Forward Milk. Refined Balance.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A cocoa-forward milk couverture with reduced sweetness and subtle caramel notes. Smooth melt and balanced viscosity make it ideal for premium pastries, ganache, and refined milk chocolate applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'FLUIDITY',
      text: '●●●○○'
    },
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs',
        'Cocoa Butter',
        'Cane Sugar',
        'Skimmed Milk Powder',
        'Whole Milk Powder',
        'Ethylvanillin'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Best before 12 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship chocolates across India and internationally. Shipping charges apply.'
    }
  ]
}



];

export const CACAO: Product[] = [
{
  id: 'cocoa-butter-natural',
  name: 'Natural Non-Deodorised Cocoa Butter',
  image: '/assets/chocolates/cocoaBut.jpg',

  // Product title
  desc: 'Natural Non-Deodorised Cocoa Butter',

  // Short hero line
  heroLine: 'Pure Cocoa Fat. Natural Aroma.',

  // Quantity info
  intro: 'Quantity (Minimum): 1000g',

  // Main description
  highlight:
    'An unrefined cocoa butter retaining its natural cocoa volatiles and aroma. High fat purity, stable crystallisation, and a clean melt improve viscosity, tempering control, and snap in chocolate and compound applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},


{
  id: 'cacao-powder',
  name: 'Natural Cocoa Powder',
  image: '/assets/chocolates/cocoaPowder.jpeg',

  // Product title
  desc: 'Natural Cocoa Powder',

  // Short hero line
  heroLine: 'Pure Cocoa. Natural Intensity.',

  // Quantity info
  intro: 'Quantity (Minimum): 1000g',

  // Main description
  highlight:
    'An unprocessed and unsweetened natural cocoa powder rich in flavonoids and essential minerals. Retaining its natural acidity and deep cocoa aroma, it delivers authentic chocolate flavour for baking, beverages, and confectionery applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Nibs'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},


{
  id: 'cacao-nibs',
  name: 'Cacao Nibs',
  image: '/assets/chocolates/cocoaNibs.jpeg',

  // Product title
  desc: 'Premium Roasted Cacao Nibs',

  // Short hero line
  heroLine: 'Pure Cocoa. Natural Crunch.',

  // Quantity info
  intro: 'Quantity (Minimum): 1000g',

  // Main description
  highlight:
    'Carefully roasted cacao nibs delivering intense cocoa flavour, clean bitterness, and a crisp texture. Minimally processed to retain natural antioxidants and cocoa character, making them ideal for inclusions, toppings, pralines, and baked applications requiring controlled roast intensity.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Beans'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},


  
{
  id: 'cacao-mass',
  name: 'Natural Cocoa Mass',
  image: '/assets/chocolates/cocoaMass.jpeg',

  // Product title
  desc: '100% Natural Cocoa Mass',

  // Short hero line
  heroLine: 'Pure Cocoa. Total Intensity.',

  // Quantity info
  intro: 'Quantity (Minimum): 1000g',

  // Main description
  highlight:
    'A minimally processed, 100% cocoa ingredient made from roasted and finely ground cocoa beans. Containing cocoa solids and cocoa butter in their natural proportions, it delivers intense chocolate flavour, deep colour, and exceptional richness for premium chocolate, bakery, and beverage applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Cocoa Beans'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
}


];

export const Coatings:Product[] = [
  {
  id: 'coated-almonds',
  name: 'Chocolate Coated Almonds',
  image: '/assets/chocolates/Coated Almonds.png', // image from G Drive (replace if needed)

  // Product title
  desc: 'Chocolate Coated Almonds',

  // Short hero line
  heroLine: 'Crisp Nuts. Rich Chocolate.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'Crisp roasted almonds coated in refined dark chocolate. Bold cocoa notes paired with a satisfying crunch create a balanced, elegant finish, making them ideal for premium snacking, gifting, and dessert applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Roasted Almonds',
        'Dark Chocolate (Cocoa Mass, Cocoa Butter, Cane Sugar)'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},
{
  id: 'coated-pista',
  name: 'Chocolate Coated Pista',
  image: '/assets/chocolates/CoatedPista.png', // image from G Drive (replace extension if required)

  // Product title
  desc: 'Chocolate Coated Pista',

  // Short hero line
  heroLine: 'Premium Pistachios. Elegant Chocolate Finish.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'Premium pistachios enrobed in smooth chocolate with a refined green finish. Balanced coating ensures a clean bite, consistent crunch, and controlled sweetness, making it ideal for professional confectionery, gifting, and dessert applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Roasted Pistachios',
        'Chocolate (Cocoa Mass, Cocoa Butter, Cane Sugar)'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},
{
  id: 'coated-hazelnut',
  name: 'Chocolate Coated Hazelnut',
  image: '/assets/chocolates/CoatedHazelnut.png', // image from G Drive (update extension if needed)

  // Product title
  desc: 'Chocolate Coated Hazelnut',

  // Short hero line
  heroLine: 'Deep Cocoa. Refined Crunch.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'Roasted hazelnuts enrobed in dark chocolate for pronounced cocoa flavour and clean bitterness. Controlled coating ensures balanced crunch, smooth melt, and a refined finish, making it ideal for premium snacking and professional confectionery applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Roasted Hazelnuts',
        'Dark Chocolate (Cocoa Mass, Cocoa Butter, Cane Sugar)'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},
{
  id: 'coated-cranberries',
  name: 'Chocolate Coated Cranberries',
  image: '/assets/chocolates/CoatedCranberries .png', // image from G Drive (update extension if needed)

  // Product title
  desc: 'Chocolate Coated Cranberries',

  // Short hero line
  heroLine: 'Bright Fruit. Smooth Chocolate.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'Tangy dried cranberries coated in fine chocolate, offering a refined balance of bright fruit acidity and smooth chocolate. Ideal for premium snacking, gifting, and elegant dessert garnishing.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Dried Cranberries',
        'Chocolate (Cocoa Mass, Cocoa Butter, Cane Sugar)'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},
{
  id: 'coated-butterscotch',
  name: 'Chocolate Coated Butterscotch',
  image: '/assets/chocolates/Coated Butterscotch.png', // image from G Drive (update extension if needed)

  // Product title
  desc: 'Chocolate Coated Butterscotch',

  // Short hero line
  heroLine: 'Crunchy Caramel. Smooth Chocolate.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'Crunchy butterscotch pieces enrobed in smooth chocolate for a balanced caramel profile. Controlled coating ensures a clean bite, consistent texture, and reliable performance in confectionery and dessert applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'INGREDIENTS',
      bullets: [
        'Butterscotch Pieces',
        'Chocolate (Cocoa Mass, Cocoa Butter, Cane Sugar)'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
}







]

export const Fillings :Product[] = [
  {
  id: 'dark-chocolate-filling',
  name: 'Dark Chocolate Filling',
  image: '/assets/chocolates/DarkChocolateFilling.png', // image from G Drive (update extension if needed)

  // Product title
  desc: 'Dark Chocolate Filling',

  // Short hero line
  heroLine: 'Smooth Texture. Reliable Performance.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A smooth, stable dark chocolate filling with defined cocoa intensity and controlled sweetness. Designed for clean piping, consistent setting, and reliable performance in pralines, enrobed centres, and baked applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'APPLICATIONS',
      bullets: [
        'Pralines & molded chocolates',
        'Enrobed centres',
        'Filled bars & bonbons',
        'Baked fillings & layered desserts'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},
{
  id: 'milk-chocolate-filling',
  name: 'Milk Chocolate Filling',
  image: '/assets/chocolates/MilkChocolateFilling.png', // image from G Drive (update extension if needed)

  // Product title
  desc: 'Milk Chocolate Filling',

  // Short hero line
  heroLine: 'Creamy Texture. Consistent Results.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A smooth, stable milk chocolate filling with balanced sweetness and creamy dairy notes. Designed for clean piping, consistent setting, and reliable performance in pralines, enrobed centres, and baked applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'APPLICATIONS',
      bullets: [
        'Pralines & molded chocolates',
        'Enrobed centres',
        'Filled bars & bonbons',
        'Baked fillings & layered desserts'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
},
{
  id: 'choco-hazelnut-filling',
  name: 'Choco Hazelnut Filling',
  image: '/assets/chocolates/ChocolateHazelnutfilling.png', // image from G Drive (update extension if needed)

  // Product title
  desc: 'Choco Hazelnut Filling',

  // Short hero line
  heroLine: 'Nutty Depth. Smooth Performance.',

  // Quantity info
  intro: 'Quantity (Minimum): 500g',

  // Main description
  highlight:
    'A smooth chocolate filling blended with roasted hazelnut paste for balanced cocoa intensity and rich nut flavour. Stable texture and clean piping make it ideal for pralines, enrobed centres, and baked applications.',

  // Optional bridge (not needed here)
  bridge: '',

  sections: [
    {
      title: 'APPLICATIONS',
      bullets: [
        'Pralines & molded chocolates',
        'Enrobed centres',
        'Filled bars & bonbons',
        'Baked fillings & layered desserts'
      ]
    },
    {
      title: 'STORAGE & SHIPPING INFO',
      text:
        'Shelf life is 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. We ship our products across India and internationally. Shipping charges apply.'
    }
  ]
}


]

export const ALL_PRODUCTS: Product[] = [...COUVERTURE, ...CACAO,...Coatings,...Fillings];
