'use client';

import React from 'react';
import { menuItems } from '@/lib/menu-data';
import { MenuItem } from '@/types';
import { useCartStore } from '@/lib/cart-store';

interface BestsellersMarqueeProps {
  onCustomize: (item: MenuItem) => void;
}

export default function BestsellersMarquee({
  onCustomize,
}: BestsellersMarqueeProps) {
  const addItem = useCartStore((state) => state.addItem);

  // Filter all items tagged as bestseller or chef's choice
  const bestsellers = menuItems.filter(
    (item) => item.tags.includes('bestseller') || item.tags.includes('chefs-choice')
  );

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...bestsellers, ...bestsellers];

  const handleItemAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.sizeOptions.length === 1 && item.addOns.length === 0) {
      addItem(item, item.sizeOptions[0], [], 1);
    } else {
      onCustomize(item);
    }
  };

  const getEmoji = (cat: string) => {
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
    <div className="w-full bg-[#F4E7CE]/70 border-[1.5px] border-[#141413] rounded-2xl p-4 md:p-5 shadow-[3px_4px_0px_#141413] relative overflow-hidden">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3.5 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E14825] text-white border border-[#141413] shadow-[1.5px_1.5px_0px_#141413] text-xs font-black uppercase">
            <span>🔥</span>
            <span>BESTSELLERS CAROUSEL</span>
          </span>
          <span className="font-display font-black text-sm text-[#141413] hidden sm:inline uppercase tracking-wide">
            Jaipur&apos;s Most-Loved Dishes
          </span>
        </div>
        <span className="text-[11px] font-bold text-[#5A5751] bg-white/70 border border-[#141413]/20 px-2.5 py-0.5 rounded-full">
          ⚡ Moves Left → Right • Hover to Pause
        </span>
      </div>

      {/* Marquee Container with edge masks */}
      <div className="relative overflow-hidden w-full py-1">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#F4E7CE] to-transparent z-10" />

        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#F4E7CE] to-transparent z-10" />

        {/* Animated Marquee Strip */}
        <div className="animate-marquee-ltr flex items-center gap-3.5">
          {marqueeItems.map((item, idx) => {
            const lowestPrice = Math.min(...item.sizeOptions.map((s) => s.price));
            const hasMultipleSizes = item.sizeOptions.length > 1;

            return (
              <div
                key={`${item.id}-${idx}`}
                className="w-[270px] sm:w-[290px] shrink-0 bg-white border-[1.5px] border-[#141413] rounded-xl p-2.5 shadow-[2px_3px_0px_#141413] hover:-translate-y-1 hover:shadow-[3px_4px_0px_#141413] transition-all flex items-center gap-3 cursor-pointer group"
                onClick={() => onCustomize(item)}
              >
                {/* Visual Thumbnail */}
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#2D1B15] to-[#181715] overflow-hidden shrink-0 border border-[#141413]/20 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-1 left-1 w-3 h-3 border border-[#108548] flex items-center justify-center rounded-[2px] bg-white shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#108548]"></div>
                  </div>
                </div>

                {/* Info & CTA */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    {item.tags.includes('bestseller') ? (
                      <span className="text-[9px] font-black uppercase text-[#E14825] tracking-wide">
                        🔥 Bestseller
                      </span>
                    ) : (
                      <span className="text-[9px] font-black uppercase text-[#F59E0B] tracking-wide">
                        ⭐ Chef&apos;s Pick
                      </span>
                    )}
                    <span className="text-[10px] text-[#5A5751]">⭐ {item.rating}</span>
                  </div>

                  <h4 className="font-bold text-xs sm:text-sm text-[#141413] truncate leading-tight mt-0.5">
                    {item.name}
                  </h4>

                  <div className="flex items-center justify-between mt-1.5">
                    <span className="font-display font-black text-base text-[#E14825] leading-none">
                      ₹{lowestPrice}
                      {hasMultipleSizes && (
                        <span className="text-[10px] text-[#5A5751] font-normal ml-0.5">
                          +
                        </span>
                      )}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleItemAdd(item, e)}
                      className="btn-base btn-primary text-[10px] px-2.5 py-1 font-bold shadow-[1px_1.5px_0px_#141413]"
                    >
                      <span>Add</span>
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
