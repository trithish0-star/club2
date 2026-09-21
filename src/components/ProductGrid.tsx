'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { ProductCard } from './ProductCard';
import { ShoppingBag } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { products, searchQuery, selectedCategory } = useShop();

  // Filter products by category and searchQuery
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Collection`}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Showing {filteredProducts.length} items
          </p>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-200/60 flex items-center justify-center text-slate-400">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No products found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
            Try adjusting your search terms or selecting a different category from above.
          </p>
        </div>
      ) : (
        /* BUG 7 IMPLEMENTATION:
           `-space-y-16 sm:space-y-0` causes vertical overlap/collision of product cards on mobile viewports (<640px),
           while desktop (lg:grid-cols-4, md:grid-cols-3) and tablet remain visually correct! */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 -space-y-16 sm:space-y-0">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
