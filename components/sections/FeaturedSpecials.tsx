'use client';

import React, { useState } from 'react';
import { featuredItems } from '@/lib/menu-data';
import { MenuItem } from '@/types';
import ItemCustomizer from '@/components/menu/ItemCustomizer';
import { useCartStore } from '@/lib/cart-store';

export default function FeaturedSpecials() {
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = (item: MenuItem) => {
    if (item.sizeOptions.length === 1 && item.addOns.length === 0) {
      addItem(item, item.sizeOptions[0], [], 1);
    } else {
      setCustomizingItem(item);
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
    <section id="specials" className="relative border-b-[2px] border-[#141413]">
      {/* Top Divider Strip */}
      <div className="bg-[#F4E7CE] border-b border-[#141413]/10 py-3">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C242] border-[1.5px] border-[#141413] shadow-[2px_2px_0px_#141413] text-xs font-black text-[#141413]">
            <span>🔥</span>
            <span>JAIPUR&apos;S FAVORITES THIS WEEK</span>
          </div>
          <span className="text-xs font-bold text-[#5A5751] hidden sm:inline">
            Pure Veg • Freshly Prepared To Order
          </span>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-[#FAF2E1] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#E14825] text-white text-xs font-bold mb-2">
                Curated Specials
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#141413] tracking-tight">
                OUR BESTSELLERS
              </h2>
              <p className="text-sm sm:text-base text-[#5A5751] mt-1 font-medium">
                The most loved bites & sips that our guests order again and again
              </p>
            </div>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E14825] hover:underline"
            >
              <span>View All 46+ Items</span>
              <span>→</span>
            </a>
          </div>

          {/* 3-Column Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => {
              const lowestPrice = Math.min(...item.sizeOptions.map((s) => s.price));
              const hasMultipleSizes = item.sizeOptions.length > 1;

              return (
                <div
                  key={item.id}
                  className="card-brutal group flex flex-col justify-between"
                >
                  <div>
                    {/* Inner Image Container */}
                    <div className="rounded-[10px] overflow-hidden aspect-[4/3] relative bg-gradient-to-br from-[#2D1B15] to-[#181715] flex items-center justify-center border border-[#141413]/20">
                      {/* Big Icon Graphic */}
                      <span className="text-6xl transform group-hover:scale-110 transition-transform duration-200">
                        {getEmojiForCategory(item.category)}
                      </span>

                      {/* Corner Status Badge */}
                      <div className="absolute top-2 left-2 flex gap-1">
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
                      </div>

                      {/* Prep time badge */}
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-[#141413] text-[11px] font-bold px-2 py-0.5 rounded-md border border-[#141413]">
                        ⏱️ {item.prepTime}m
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-2 pt-3">
                      {/* Dietary Indicator */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-3.5 h-3.5 border-[1.5px] border-[#108548] flex items-center justify-center rounded-[2px] bg-white">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#108548]"></div>
                        </div>
                        <span className="text-[11px] font-bold text-[#108548] uppercase tracking-wider">
                          Pure Veg
                        </span>
                        <span className="text-xs text-[#5A5751]">• ⭐ {item.rating}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#141413] leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-xs text-[#5A5751] line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Row: Price & Add Button */}
                  <div className="p-2 pt-0 mt-3 flex items-center justify-between border-t border-[#141413]/10">
                    <div>
                      <div className="text-[10px] font-bold text-[#5A5751] uppercase">
                        {hasMultipleSizes ? 'Starting from' : 'Price'}
                      </div>
                      <div className="font-display text-2xl font-black text-[#E14825] leading-none">
                        ₹{lowestPrice}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className="btn-base btn-primary text-xs px-4 py-2 font-bold shadow-[2px_2px_0px_#141413]"
                    >
                      <span>Add</span>
                      <span>+</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Item Customizer Modal */}
      {customizingItem && (
        <ItemCustomizer
          item={customizingItem}
          onClose={() => setCustomizingItem(null)}
        />
      )}
    </section>
  );
}
