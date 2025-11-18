// src/app/products-data.ts
export interface Product {
  id: string;
  name: string;
  image: string;
  desc?: string;
  longDesc?: string[]; // optional array of bullet/paragraph lines
}

export const COUVERTURE: Product[] = [
  { id: 'couv-70', name: '70% Dark Couverture', image: '/assets/chocolates/couvertHome.png',
    desc: 'Pure, refined couverture for professionals.',
    longDesc: [
      'Pure, Refined, Uncompromised',
      'Crafted for artisans who value elegance.',
      'Controlled precision roasting.',
      'Roasting Profile: Medium Roast — soft warm undertones.',
      'Aroma: Naturally expressive cocoa, deep complementing cocoa depth.',
      'Palate: Rounded cocoa, delicate sweetness.',
      'No additives, no lecithin — just pure chocolate.',
      'Craftsmanship standard.'
    ]
  },
  { id: 'couv-55', name: '55% Dark Couverture', image: '/assets/chocolates/couvert55.png', desc: 'Pure, refined couverture for professionals.',
    longDesc: [
      'Pure, Refined, Uncompromised',
      'Crafted for artisans who value elegance.',
      'Controlled precision roasting.',
      'Roasting Profile: Medium Roast — soft warm undertones.',
      'Aroma: Naturally expressive cocoa, deep complementing cocoa depth.',
      'Palate: Rounded cocoa, delicate sweetness.',
      'No additives, no lecithin — just pure chocolate.',
      'Craftsmanship standard.'
    ] },
  { id: 'couv-45', name: '45% Dark Couverture', image: '/assets/chocolates/couvert45.png' , desc: 'Pure, refined couverture for professionals.',
    longDesc: [
      'Pure, Refined, Uncompromised',
      'Crafted for artisans who value elegance.',
      'Controlled precision roasting.',
      'Roasting Profile: Medium Roast — soft warm undertones.',
      'Aroma: Naturally expressive cocoa, deep complementing cocoa depth.',
      'Palate: Rounded cocoa, delicate sweetness.',
      'No additives, no lecithin — just pure chocolate.',
      'Craftsmanship standard.'
    ]},
  { id: 'couv-36', name: '36% Milk Couverture', image: '/assets/chocolates/couvert45.png', desc: 'Pure, refined couverture for professionals.',
    longDesc: [
      'Pure, Refined, Uncompromised',
      'Crafted for artisans who value elegance.',
      'Controlled precision roasting.',
      'Roasting Profile: Medium Roast — soft warm undertones.',
      'Aroma: Naturally expressive cocoa, deep complementing cocoa depth.',
      'Palate: Rounded cocoa, delicate sweetness.',
      'No additives, no lecithin — just pure chocolate.',
      'Craftsmanship standard.'
    ] }
];

export const CACAO: Product[] = [
  { id: 'cacao-butter', name: 'Cacao Butter', image: '/assets/chocolates/cacaoHome.png', desc: 'Pure, refined couverture for professionals.',
    longDesc: [
      'Pure, Refined, Uncompromised',
      'Crafted for artisans who value elegance.',
      'Controlled precision roasting.',
      'Roasting Profile: Medium Roast — soft warm undertones.',
      'Aroma: Naturally expressive cocoa, deep complementing cocoa depth.',
      'Palate: Rounded cocoa, delicate sweetness.',
      'No additives, no lecithin — just pure chocolate.',
      'Craftsmanship standard.'
    ] },
  { id: 'cacao-powder', name: 'Cacao Powder', image: '/assets/chocolates/cacaoHome.png', desc: 'Pure, refined couverture for professionals.',
    longDesc: [
      'Pure, Refined, Uncompromised',
      'Crafted for artisans who value elegance.',
      'Controlled precision roasting.',
      'Roasting Profile: Medium Roast — soft warm undertones.',
      'Aroma: Naturally expressive cocoa, deep complementing cocoa depth.',
      'Palate: Rounded cocoa, delicate sweetness.',
      'No additives, no lecithin — just pure chocolate.',
      'Craftsmanship standard.'
    ] }
];

export const ALL_PRODUCTS: Product[] = [...COUVERTURE, ...CACAO];
