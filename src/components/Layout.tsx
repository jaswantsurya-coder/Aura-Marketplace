import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Home, Grid, Heart, Menu } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { totalItems } = useCart();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Grid, label: 'Collection', path: '/collection' },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-aura-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-morphism px-4 py-4 flex items-center justify-between">
        <button className="p-2">
          <Menu size={24} className="text-aura-black" />
        </button>
        
        <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-aura-black">
          AURA
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="p-2">
            <Search size={24} className="text-aura-black" />
          </button>
          <Link to="/checkout" className="p-2 relative">
            <ShoppingBag size={24} className="text-aura-black" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-aura-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-morphism px-6 py-4 flex justify-between items-center rounded-t-3xl premium-shadow">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-aura-gold' : 'text-aura-black/40'
              }`}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium uppercase tracking-tighter">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Layout;
