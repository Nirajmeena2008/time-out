'use client';

import React from 'react';
import { MenuItem } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  items: MenuItem[];
  onCustomize: (item: MenuItem) => void;
  onResetFilters?: () => void;
}

export default function ProductGrid({
  items,
  onCustomize,
  onResetFilters,
}: ProductGridProps) {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl border-[2px] border-[#141413] p-12 text-center max-w-md mx-auto my-8 shadow-[4px_5px_0px_#141413]">
        <div className="text-5xl mb-3">🔍</div>
        <h3 className="font-display text-2xl font-black text-[#141413]">
          No Dishes Found
        </h3>
        <p className="text-sm text-[#5A5751] mt-2 leading-relaxed">
          We couldn&apos;t find any dishes matching your current search or filter combination.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="btn-base btn-primary text-xs px-5 py-2.5 mt-5 font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onCustomize={onCustomize}
        />
      ))}
    </div>
  );
}
