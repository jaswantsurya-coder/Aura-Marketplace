import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 via-aura-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-aura-gold font-display text-sm font-semibold uppercase tracking-[0.3em]"
          >
            Spring Collection 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl text-white font-serif leading-tight"
          >
            The Art of <br /> <span className="italic">Timeless</span> Luxury
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 bg-white text-aura-black px-8 py-4 rounded-full font-display text-sm font-bold uppercase tracking-widest hover:bg-aura-gold hover:text-white transition-all"
            >
              Explore Collection <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-aura-black py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white font-display text-xs font-bold uppercase tracking-[0.5em] px-8">
              Limited Edition • Artisan Crafted • Global Shipping • Ethical Sourcing • 
            </span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="px-6 space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-serif">Curated Categories</h2>
          <Link to="/collection" className="text-aura-gold text-sm font-bold uppercase tracking-widest border-b border-aura-gold pb-1">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif text-xl italic">{category.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Limited Edition Deals */}
      <section className="bg-aura-cream py-12 px-6 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-aura-gold">
            <Clock size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Ending Soon</span>
          </div>
          <h2 className="text-3xl font-serif">Limited Edition Deals</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {PRODUCTS.filter(p => p.isLimited).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="min-w-[280px] group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  1 of 50
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-aura-black/40">{product.artisan}</p>
                <h3 className="text-lg font-serif">{product.name}</h3>
                <p className="text-aura-gold font-display font-semibold">${product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="px-6 pb-12 space-y-8">
        <h2 className="text-3xl font-serif text-center">Recommended For You</h2>
        <div className="grid grid-cols-1 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex gap-6 items-center group"
            >
              <div className="w-32 h-32 overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-1 text-aura-gold">
                  <Star size={12} fill="currentColor" />
                  <span className="text-[10px] font-bold">{product.rating}</span>
                </div>
                <h3 className="text-xl font-serif leading-tight">{product.name}</h3>
                <p className="text-aura-gold font-display font-semibold">${product.price.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-aura-black/10 flex items-center justify-center group-hover:bg-aura-black group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
