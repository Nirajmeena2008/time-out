'use client';

import React from 'react';

interface HeroSectionProps {
  onReserveClick?: () => void;
}

export default function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section id="hero" className="bg-white border-b-[2px] border-[#141413] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, CTAs, Trust Bar */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-[1.5px] border-[#141413] shadow-[1.5px_2px_0px_#141413] text-xs font-bold text-[#141413]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#108548] animate-pulse"></span>
              <span>100% PURE VEG • JAIPUR</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#141413] leading-[1.05] tracking-tight">
              TASTE THE <br />
              <span className="text-[#E14825] relative inline-block">
                TIME OUT
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#E14825]"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9M10 11C60 6 140 6 190 11"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#5A5751] max-w-lg leading-relaxed font-medium">
              Jaipur&apos;s favorite rooftop & poolside pure veg cafe. Indulge in artisanal stone-baked pizzas, double tikki burgers, thick shakes & exotic coolers under the stars.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="btn-base btn-primary text-sm px-6 py-3 font-bold"
              >
                <span>🍕</span>
                <span>Explore Full Menu</span>
              </a>

              <button
                type="button"
                onClick={onReserveClick}
                className="btn-base btn-yellow text-sm px-6 py-3 font-bold"
              >
                <span>📅</span>
                <span>Book Rooftop Table</span>
              </button>
            </div>

            {/* Trust/USP Bar */}
            <div className="pt-6 border-t border-[#141413]/10 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FDE8B2] border border-[#141413] flex items-center justify-center font-bold text-sm shrink-0">
                  ⭐
                </div>
                <div>
                  <div className="font-display font-black text-sm text-[#141413] leading-none">
                    4.5+
                  </div>
                  <div className="text-[11px] text-[#5A5751] font-semibold leading-tight">
                    Google Rated
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#D7ECD9] border border-[#141413] flex items-center justify-center font-bold text-sm shrink-0">
                  🌿
                </div>
                <div>
                  <div className="font-display font-black text-sm text-[#141413] leading-none">
                    100%
                  </div>
                  <div className="text-[11px] text-[#5A5751] font-semibold leading-tight">
                    Pure Vegetarian
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF2E1] border border-[#141413] flex items-center justify-center font-bold text-sm shrink-0">
                  🏊
                </div>
                <div>
                  <div className="font-display font-black text-sm text-[#141413] leading-none">
                    Rooftop
                  </div>
                  <div className="text-[11px] text-[#5A5751] font-semibold leading-tight">
                    & Poolside Vibe
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame with Tilted Badges */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Tilted Floating Badge: Top-Left */}
            <div className="absolute -top-4 -left-3 z-20 bg-[#E14825] text-white border-[1.5px] border-[#141413] px-3.5 py-1.5 rounded-lg shadow-[2px_3px_0px_#141413] font-bold text-xs badge-tilt-left flex items-center gap-1.5">
              <span>🔥</span>
              <span>Jaipur&apos;s Hotspot</span>
            </div>

            {/* Tilted Floating Badge: Bottom-Right */}
            <div className="absolute -bottom-4 -right-3 z-20 bg-[#F5C242] text-[#141413] border-[1.5px] border-[#141413] px-3.5 py-1.5 rounded-lg shadow-[2px_3px_0px_#141413] font-bold text-xs badge-tilt-right flex items-center gap-1.5">
              <span>🏊</span>
              <span>Rooftop & Poolside</span>
            </div>

            {/* Main Image Frame */}
            <div className="relative rounded-2xl border-[2px] border-[#141413] overflow-hidden bg-[#181715] shadow-[6px_8px_0px_#141413]">
              <div className="aspect-[4/3] w-full relative overflow-hidden group">
                {/* Real Pizza Photography */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/hero-pizza.jpg"
                  alt="Authentic fresh baked pure veg pizza at The Time Out Jaipur"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Ambient vignette & gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Corner Pill inside photo */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                  <span className="bg-white/95 backdrop-blur-sm text-[#141413] border border-[#141413] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                    Signature Stone-Baked Pizza
                  </span>
                  <span className="bg-[#108548] text-white px-2.5 py-0.5 rounded-full text-xs font-bold border border-white shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Pure Veg
                  </span>
                </div>

                {/* Center / Dish Heading */}
                <div className="absolute bottom-20 left-4 right-4 z-10 text-white">
                  <div className="font-display text-2xl sm:text-3xl font-black tracking-wide drop-shadow-md">
                    THE TIME OUT SPECIAL
                  </div>
                  <div className="text-xs sm:text-sm text-[#F5C242] font-semibold drop-shadow">
                    Loaded Veggies • Fresh Tandoori Paneer • 100% Mozzarella
                  </div>
                </div>

                {/* Bottom Overlay Bar inside photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border-[1.5px] border-[#141413] flex items-center justify-between z-10 shadow-[2px_3px_0px_#141413]">
                  <div>
                    <div className="text-[10px] font-bold text-[#5A5751] uppercase tracking-wider">
                      Handcrafted Pizzas
                    </div>
                    <div className="font-display text-2xl font-black text-[#E14825] leading-none">
                      ₹89 <span className="text-xs font-normal text-[#5A5751]">Starting Price</span>
                    </div>
                  </div>
                  <a
                    href="#menu"
                    className="btn-base btn-primary text-xs px-3.5 py-2 font-bold"
                  >
                    Order Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
