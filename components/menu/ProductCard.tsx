'use client';

import React from 'react';
import { MenuItem } from '@/types';
import { useCartStore } from '@/lib/cart-store';

interface ProductCardProps {
  item: MenuItem;
  onCustomize: (item: MenuItem) => void;
}

export default function ProductCard({ item, onCustomize }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const lowestPrice = Math.min(...item.sizeOptions.map((s) => s.price));
  const hasMultipleSizes = item.sizeOptions.length > 1;
  const hasAddOns = item.addOns.length > 0;

  const handleAddClick = () => {
    if (!hasMultipleSizes && !hasAddOns) {
      // Single size, no add-ons — add directly to cart
      addItem(item, item.sizeOptions[0], [], 1);
    } else {
      // Open customizer modal
      onCustomize(item);
    }
  };

  const getEmojiForCategory = (cat: string) => {
    switch (cat) {
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
        return '🍽️';
    }
  };

  return (
    <div className="card-brutal group flex flex-col justify-between">
      <div>
        {/* Inner Image Container */}
        <div className="rounded-[10px] overflow-hidden aspect-[4/3] relative bg-gradient-to-br from-[#2D1B15] to-[#181715] border border-[#141413]/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

          {/* Corner Status Badge */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {item.tags.includes('bestseller') && (
              <span className="bg-[#E14825] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-[#141413] shadow-[1px_1px_0px_#141413]">
                🔥 Bestseller
              </span>
            )}
            {item.tags.includes('chefs-choice') && (
              <span className="bg-[#F5C242] text-[#141413] text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-[#141413] shadow-[1px_1px_0px_#141413]">
                ⭐ Chef&apos;s Pick
              </span>
            )}
            {item.tags.includes('new') && (
              <span className="bg-[#538D4E] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-[#141413] shadow-[1px_1px_0px_#141413]">
                ✨ New
              </span>
            )}
          </div>

          {/* Prep time badge */}
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-[#141413] text-[11px] font-bold px-2 py-0.5 rounded-md border border-[#141413]">
            ⏱️ {item.prepTime}m
          </div>
        </div>

        {/* Content Area */}
        <div className="p-2 pt-3">
          {/* Dietary Indicator & Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-3.5 h-3.5 border-[1.5px] border-[#108548] flex items-center justify-center rounded-[2px] bg-white">
              <div className="w-1.5 h-1.5 rounded-full bg-[#108548]"></div>
            </div>
            <span className="text-[11px] font-bold text-[#108548] uppercase tracking-wider">
              Pure Veg
            </span>
            <span className="text-xs text-[#5A5751]">• ⭐ {item.rating}</span>
          </div>

          {/* Dish Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#141413] leading-snug">
            {item.name}
          </h3>

          {/* Micro-copy description */}
          <p className="text-xs text-[#5A5751] line-clamp-2 mt-1 leading-relaxed">
            {item.description}
          </p>

          {/* Size labels indicator (if multiple) */}
          {hasMultipleSizes && (
            <div className="mt-2 flex items-center gap-1 flex-wrap">
              <span className="text-[10px] font-bold text-[#5A5751]">Sizes:</span>
              {item.sizeOptions.map((s) => (
                <span
                  key={s.size}
                  className="text-[10px] bg-[#FAF2E1] border border-[#141413]/20 px-1.5 py-0.5 rounded font-semibold text-[#141413]"
                >
                  {s.label} (₹{s.price})
                </span>
              ))}
            </div>
          )}

          {/* Add-on hint */}
          {hasAddOns && (
            <div className="mt-1.5 text-[11px] text-[#E14825] font-semibold">
              ✨ Add Ice Cream available (+₹30)
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row: Price & Add Button */}
      <div className="p-2 pt-0 mt-3 flex items-center justify-between border-t border-[#141413]/10">
        <div>
          <div className="text-[10px] font-bold text-[#5A5751] uppercase">
            {hasMultipleSizes ? 'From' : 'Price'}
          </div>
          <div className="font-display text-2xl font-black text-[#E14825] leading-none">
            ₹{lowestPrice}
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddClick}
          className="btn-base btn-primary text-xs px-4 py-2 font-bold shadow-[2px_2px_0px_#141413]"
          aria-label={`Add ${item.name} to cart`}
        >
          <span>{hasMultipleSizes || hasAddOns ? 'Customize' : 'Add'}</span>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
