'use client';

import React, { useState } from 'react';
import { comboDeals } from '@/lib/menu-data';
import { useCartStore } from '@/lib/cart-store';

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('TIMEOUT20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddCombo = (deal: (typeof comboDeals)[0]) => {
    // Add representative combo item to cart
    addItem(
      {
        id: deal.id,
        name: deal.title,
        description: deal.description,
        category: 'pizzas',
        image: deal.image,
        sizeOptions: [{ size: 'single', label: 'Combo Special', price: deal.comboPrice }],
        addOns: [],
        tags: ['combo', 'bestseller'],
        isVeg: true,
        rating: 4.9,
        prepTime: 20,
      },
      { size: 'single', label: 'Combo Special', price: deal.comboPrice },
      [],
      1
    );
  };

  return (
    <section id="combos" className="bg-[#181715] relative overflow-hidden py-16 md:py-24 border-b-[2px] border-[#141413]">
      {/* Warm Ambient Glow in top right */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 80% 20%, #E14825 0%, #3A2218 45%, transparent 75%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E14825] text-white border border-[#141413] shadow-[2px_2px_0px_#141413] text-xs font-bold mb-3">
            <span>💰</span>
            <span>EXCLUSIVE VALUE COMBOS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            COMBO DEALS THAT HIT DIFFERENT
          </h2>
          <p className="text-sm sm:text-base text-[#A39E93] mt-2 font-medium">
            Bundled favorites tailored for poolside hangouts and rooftop parties with your crew
          </p>
        </div>

        {/* 2-Column Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comboDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl border-[2px] border-[#F5C242] p-4 shadow-[0_0_20px_rgba(245,194,66,0.18)] hover:shadow-[0_0_25px_rgba(245,194,66,0.3)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with real photography */}
                <div className="rounded-xl overflow-hidden aspect-[16/10] bg-gradient-to-br from-[#2F1C16] to-[#141413] relative border border-[#141413]/20 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={deal.image}
                    alt={deal.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Bottom title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <div className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-white">
                      {deal.title}
                    </div>
                  </div>

                  {/* Corner Discount Tag */}
                  <div className="absolute top-3 left-3 bg-[#E14825] text-white font-black text-xs px-3 py-1 rounded-full border border-[#141413] shadow-[2px_2px_0px_#141413] uppercase z-10">
                    {deal.discount}
                  </div>

                  {/* Veg Tag */}
                  <div className="absolute top-3 right-3 bg-[#108548] text-white text-[11px] font-bold px-2 py-0.5 rounded-full border border-white z-10">
                    100% Veg
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-2 pt-4">
                  <h3 className="font-display text-2xl font-black text-[#141413]">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-[#5A5751] mt-1 font-medium">
                    {deal.description}
                  </p>

                  {/* Included Items List */}
                  <div className="mt-4 space-y-1.5 bg-[#FAF2E1] p-3 rounded-xl border border-[#141413]/10">
                    <div className="text-[11px] font-bold text-[#5A5751] uppercase">Included In Combo:</div>
                    {deal.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#141413]">
                        <span className="text-[#108548]">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="p-2 pt-4 mt-2 flex items-center justify-between border-t border-[#141413]/10">
                <div>
                  <div className="text-xs text-[#5A5751] line-through font-semibold">
                    Regular: ₹{deal.originalPrice}
                  </div>
                  <div className="font-display text-3xl font-black text-[#E14825] leading-none">
                    ₹{deal.comboPrice}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddCombo(deal)}
                  className="btn-base btn-primary text-sm px-6 py-2.5 font-bold shadow-[2px_3px_0px_#141413]"
                >
                  <span>Grab Combo</span>
                  <span>+</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Announcement Bar */}
        <div className="mt-10 bg-white rounded-2xl border-[2px] border-[#141413] p-4 sm:p-5 shadow-[4px_5px_0px_#141413] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#E14825] text-white flex items-center justify-center font-bold text-xl border-[1.5px] border-[#141413] shrink-0">
              🏷️
            </div>
            <div>
              <div className="font-bold text-base text-[#141413]">
                Welcome Offer: Get <span className="text-[#E14825] font-black">20% OFF</span> Your First Order!
              </div>
              <div className="text-xs text-[#5A5751] font-medium">
                Apply promo code at checkout or mention it when placing your order on WhatsApp.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <code className="bg-[#FAF2E1] border-[1.5px] border-dashed border-[#141413] px-3.5 py-2 rounded-xl font-mono text-sm font-black text-[#141413] select-all">
              TIMEOUT20
            </code>
            <button
              type="button"
              onClick={handleCopyCode}
              className="btn-base btn-dark text-xs px-4 py-2.5 font-bold shrink-0"
            >
              {copied ? '✓ Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
