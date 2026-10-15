'use client';

import React from 'react';
import { categories } from '@/lib/menu-data';
import { Category } from '@/types';

interface CategoryCarouselProps {
  selectedCategory: Category | 'all';
  onSelectCategory: (cat: Category | 'all') => void;
}

export default function CategoryCarousel({
  selectedCategory,
  onSelectCategory,
}: CategoryCarouselProps) {
  const getCategoryEmoji = (id: Category | 'all') => {
    switch (id) {
      case 'all':
        return '🍽️';
      case 'pizzas':
        return '🍕';
      case 'burgers':
        return '🍔';
      case 'fries-sides':
        return '🍟';
      case 'momos':
        return '🥟';
      case 'sandwiches-pasta':
        return '🥪';
      case 'cold-coffee':
        return '☕';
      case 'thick-shakes':
        return '🥤';
      case 'mocktails':
        return '🍹';
      default:
        return '✨';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-start gap-5 overflow-x-auto py-2 pb-4 hide-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className="w-[88px] flex flex-col items-center cursor-pointer group shrink-0 focus:outline-none"
            >
              {/* Circular Thumbnail Wrapper */}
              <div
                className={`w-20 h-20 rounded-full bg-white p-1 relative transition-all duration-200 ${
                  isSelected
                    ? 'border-[2.5px] border-[#E14825] shadow-[0_0_0_3px_rgba(225,72,37,0.25)] scale-105'
                    : 'border-[1.5px] border-[#141413] shadow-[0_4px_10px_rgba(20,20,19,0.08)] group-hover:-translate-y-1'
                }`}
              >
                {/* Visual Graphic inside circle */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#FAF2E1]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 transition-opacity ${
                    isSelected ? 'bg-[#E14825]/20' : 'bg-black/10'
                  }`} />
                </div>

                {/* Corner Item-Count Pill Badge */}
                <div
                  className={`absolute -bottom-1 -right-1 rounded-full px-1.5 py-0.5 text-[10px] font-black border-[1.5px] border-white shadow-sm ${
                    isSelected
                      ? 'bg-[#E14825] text-white'
                      : 'bg-[#181715] text-white'
                  }`}
                >
                  {cat.count}
                </div>
              </div>

              {/* Category Label */}
              <span
                className={`mt-2 text-xs text-center max-w-[86px] truncate transition-colors ${
                  isSelected
                    ? 'text-[#E14825] font-black'
                    : 'text-[#141413] font-bold group-hover:text-[#E14825]'
                }`}
              >
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
