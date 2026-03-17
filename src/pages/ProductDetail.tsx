import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, Heart, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../CartContext';
import { motion } from 'motion/react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="p-12 text-center">Product not found</div>;
  }

  return (
    <div className="relative">
      {/* Header Actions */}
      <div className="absolute top-4 left-0 right-0 z-10 px-6 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-aura-black"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center transition-colors ${
            isLiked ? 'text-red-500' : 'text-aura-black'
          }`}
        >
          <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Product Image */}
      <div className="h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Product Info */}
      <div className="relative -mt-12 bg-aura-paper rounded-t-[3rem] px-8 pt-10 pb-32 space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-aura-gold">{product.artisan}</p>
              <h1 className="text-3xl font-serif leading-tight">{product.name}</h1>
            </div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold text-aura-black">${product.price.toLocaleString()}</p>
              <div className="flex items-center gap-1 justify-end text-aura-gold mt-1">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-aura-black/60 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Details List */}
        {product.details && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Specifications</h3>
            <ul className="grid grid-cols-1 gap-3">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-aura-black/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-aura-gold" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-aura-black/5">
          <div className="flex flex-col items-center text-center gap-2">
            <ShieldCheck size={20} className="text-aura-gold" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Authentic</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Truck size={20} className="text-aura-gold" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Express</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <RotateCcw size={20} className="text-aura-gold" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">14d Return</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="fixed bottom-24 left-0 right-0 px-8 py-4 bg-gradient-to-t from-aura-paper via-aura-paper to-transparent">
          <button
            onClick={() => {
              addToCart(product);
              navigate('/checkout');
            }}
            className="w-full bg-aura-black text-white py-5 rounded-full font-display font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:bg-aura-gold transition-all"
          >
            <ShoppingBag size={20} />
            Add to Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
