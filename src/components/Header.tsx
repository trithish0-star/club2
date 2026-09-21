'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { ShoppingBag, Search, ShoppingCart, Sparkles } from 'lucide-react';
import { Category } from '@/types';

const CATEGORIES: Category[] = ['All', 'Electronics', 'Fashion', 'Home', 'Accessories'];

export const Header: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    cart,
    setIsCartOpen,
  } = useShop();

  const [searchInput, setSearchInput] = useState(searchQuery);

  // Calculate total item count in cart
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // BUG 1 IMPLEMENTATION:
  // Typing updates searchInput, but clicking Search button or submitting form does NOT trigger the filtering operation!
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Intentionally buggy: search button does not update `searchQuery` with `searchInput`
    // setSearchQuery(searchInput); // Missing!
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 text-white text-xs font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
        <span>TECH ODYSSEY 2026 — Special Sale! Free Delivery on orders over $100</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 cursor-pointer group select-none">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900">NOVA</span>
                <span className="font-extrabold text-2xl tracking-tight text-blue-600">MART</span>
              </div>
              <p className="text-[10px] tracking-wide text-slate-500 font-medium hidden sm:block">
                Everything you need. One smart cart.
              </p>
            </div>
          </div>

          {/* Search Bar (Bug 1 embedded in Search button trigger) */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-lg relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search products, categories, features..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-4 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-sm"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Actions & Cart Icon */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors flex items-center justify-center"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 py-2 overflow-x-auto scrollbar-none border-t border-slate-100">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
