import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Heart } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { motion } from 'motion/react';

const Collection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="px-6 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-serif">Artisan Collection</h1>
        <p className="text-aura-black/60 text-sm">Discover unique pieces crafted by master artisans worldwide.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
            selectedCategory === 'All' ? 'bg-aura-black text-white' : 'bg-white border border-aura-black/10 text-aura-black'
          }`}
        >
          All Pieces
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
              selectedCategory === cat.name ? 'bg-aura-black text-white' : 'bg-white border border-aura-black/10 text-aura-black'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-aura-black/40">{filteredProducts.length} Items Found</span>
        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <SlidersHorizontal size={16} /> Filter & Sort
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >
            <Link to={`/product/${product.id}`} className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-aura-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-aura-black hover:text-red-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // Wishlist logic
                  }}
                >
                  <Heart size={16} />
                </button>
                {product.isLimited && (
                  <div className="absolute bottom-4 left-4 bg-aura-gold text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    Limited Edition
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-aura-black/40">{product.artisan}</p>
                <h3 className="text-sm font-serif h-10 overflow-hidden line-clamp-2">{product.name}</h3>
                <p className="text-aura-gold font-display font-semibold">${product.price.toLocaleString()}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
