import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'motion/react';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] px-8 py-12 flex flex-col justify-center space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-serif">
          {isLogin ? 'Welcome Back' : 'Join the Club'}
        </h1>
        <p className="text-aura-black/60 text-sm max-w-[280px] mx-auto">
          {isLogin 
            ? 'Enter your credentials to access your private collection.' 
            : 'Become a member to access exclusive artisan pieces and limited drops.'}
        </p>
      </div>

      <div className="space-y-6">
        {!isLogin && (
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-aura-black/30" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white border border-aura-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-aura-gold transition-colors"
            />
          </div>
        )}
        
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-aura-black/30" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white border border-aura-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-aura-gold transition-colors"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-aura-black/30" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white border border-aura-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-aura-gold transition-colors"
          />
        </div>

        {isLogin && (
          <div className="text-right">
            <button className="text-[10px] font-bold uppercase tracking-widest text-aura-gold">
              Forgot Password?
            </button>
          </div>
        )}

        <button
          onClick={() => navigate('/')}
          className="w-full bg-aura-black text-white py-5 rounded-full font-display font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl hover:bg-aura-gold transition-all"
        >
          {isLogin ? 'Sign In' : 'Create Account'}
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-aura-black/10" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-aura-black/30">Or Continue With</span>
          <div className="flex-1 h-[1px] bg-aura-black/10" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-4 bg-white border border-aura-black/5 rounded-2xl hover:bg-aura-cream transition-colors">
            <Chrome size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 py-4 bg-white border border-aura-black/5 rounded-2xl hover:bg-aura-cream transition-colors">
            <Github size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Apple</span>
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-aura-black/60">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-aura-gold font-bold uppercase tracking-widest"
        >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
  );
};

export default Auth;
