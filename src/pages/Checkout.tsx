import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, CreditCard, Truck, ShieldCheck, MessageSquare, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion } from 'motion/react';

const Checkout: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const shippingFee = 50;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shippingFee + tax;

  if (cart.length === 0) {
    return (
      <div className="px-8 py-24 text-center space-y-6">
        <div className="w-24 h-24 bg-aura-cream rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag size={40} className="text-aura-black/20" />
        </div>
        <h1 className="text-3xl font-serif">Your collection is empty</h1>
        <p className="text-aura-black/60">Discover unique pieces to start your journey.</p>
        <button
          onClick={() => navigate('/collection')}
          className="bg-aura-black text-white px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif">Checkout</h1>
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${step >= i ? 'bg-aura-gold' : 'bg-aura-black/10'}`} 
            />
          ))}
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-aura-black/40">Your Selection</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="flex gap-4 p-4 bg-white rounded-3xl premium-shadow"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-serif font-bold">{item.name}</h3>
                <p className="text-aura-gold font-display font-semibold text-sm">${item.price.toLocaleString()}</p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-3 bg-aura-cream px-3 py-1 rounded-full">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-aura-black/60">
                      <Minus size={14} />
                    </button>
                    <span className="text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-aura-black/60">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500/60 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="bg-aura-black text-white p-6 rounded-[2rem] space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles size={80} />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-aura-gold flex items-center justify-center">
            <MessageSquare size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest">Aura Concierge</h3>
            <p className="text-[10px] text-white/60">AI-Powered Personal Assistant</p>
          </div>
        </div>
        <p className="text-sm italic text-white/80">"I see you've selected the Gold Chronograph. Would you like me to suggest a matching leather strap or a travel case?"</p>
        <button className="text-aura-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          Ask Concierge <Sparkles size={14} />
        </button>
      </div>

      {/* Order Summary */}
      <div className="bg-aura-cream p-8 rounded-[2rem] space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest">Order Summary</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-aura-black/60">Subtotal</span>
            <span className="font-display font-semibold">${totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-aura-black/60">Shipping (Express)</span>
            <span className="font-display font-semibold">${shippingFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-aura-black/60">Est. Tax</span>
            <span className="font-display font-semibold">${tax.toLocaleString()}</span>
          </div>
          <div className="pt-3 border-t border-aura-black/10 flex justify-between">
            <span className="font-serif text-lg">Total</span>
            <span className="font-display text-xl font-bold text-aura-gold">${grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={() => {
          alert('Order placed successfully!');
          clearCart();
          navigate('/');
        }}
        className="w-full bg-aura-black text-white py-5 rounded-full font-display font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:bg-aura-gold transition-all"
      >
        <CreditCard size={20} />
        Complete Purchase
      </button>

      {/* Security Info */}
      <div className="flex items-center justify-center gap-2 text-aura-black/40">
        <ShieldCheck size={16} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Secure 256-bit SSL Encryption</span>
      </div>
    </div>
  );
};

export default Checkout;
