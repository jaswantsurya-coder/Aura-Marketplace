/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Auth />} />
            <Route path="/wishlist" element={<div className="p-12 text-center font-serif text-2xl">Your wishlist is empty</div>} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
