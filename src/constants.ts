import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Timepieces', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Leather Goods', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Fine Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Fragrance', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Luxury Gold Chronograph',
    price: 12500,
    category: 'Timepieces',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800',
    description: 'A masterpiece of Swiss engineering, featuring an 18k gold casing and a handcrafted leather strap.',
    artisan: 'Vacheron & Co.',
    rating: 4.9,
    reviews: 128,
    isLimited: true,
    details: ['18k Rose Gold Case', 'Manual Winding Movement', 'Sapphire Crystal', '48-hour Power Reserve']
  },
  {
    id: 'p2',
    name: 'Hand-Stitched Calfskin Tote',
    price: 3200,
    category: 'Leather Goods',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    description: 'Exquisite calfskin leather, hand-stitched by master artisans in Florence.',
    artisan: 'Lorenzo Leatherworks',
    rating: 4.8,
    reviews: 85,
    details: ['Full-grain Calfskin', 'Hand-painted Edges', 'Solid Brass Hardware']
  },
  {
    id: 'p3',
    name: 'Diamond Solitaire Necklace',
    price: 8900,
    category: 'Fine Jewelry',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    description: 'A stunning 2-carat ethically sourced diamond set in a minimalist platinum frame.',
    artisan: 'Aura Atelier',
    rating: 5.0,
    reviews: 42,
    isLimited: true,
    details: ['2.0 Carat Diamond', 'VVS1 Clarity', 'Platinum Setting']
  },
  {
    id: 'p4',
    name: 'Oud Imperial Extrait',
    price: 450,
    category: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    description: 'A deep, mysterious blend of rare Cambodian Oud and Bulgarian Rose.',
    artisan: 'Maison de Parfum',
    rating: 4.7,
    reviews: 210,
    details: ['Top: Bergamot, Rose', 'Heart: Cambodian Oud', 'Base: Sandalwood, Amber']
  }
];
