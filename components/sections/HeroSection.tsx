'use client';

import React from 'react';

interface HeroSectionProps {
  onReserveClick?: () => void;
}

export default function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section id="hero" className="bg-white border-b-[2px] border-[#141413] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, CTAs, Trust Bar */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white border-[1.5px] border-[#141413] shadow-[1.5px_2px_0px_#141413] text-[11px] sm:text-xs font-bold text-[#141413]">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#108548] animate-pulse shrink-0"></span>
              <span>100% PURE VEG • JAIPUR</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#141413] leading-[1.08] sm:leading-[1.05] tracking-tight">
              TASTE THE <br />
              <span className="text-[#E14825] relative inline-block">
                TIME OUT
                <svg
                  className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-2.5 sm:h-3 text-[#E14825]"
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
            <p className="text-sm sm:text-base md:text-lg text-[#5A5751] max-w-lg leading-relaxed font-medium">
              Jaipur&apos;s favorite rooftop & poolside pure veg cafe. Indulge in artisanal stone-baked pizzas, double tikki burgers, thick shakes & exotic coolers under the stars.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2">
              <a
                href="#menu"
                className="btn-base btn-primary text-xs sm:text-sm px-6 py-3 font-bold justify-center"
              >
                <span>🍕</span>
                <span>Explore Full Menu</span>
              </a>

              <button
                type="button"
                onClick={onReserveClick}
                className="btn-base btn-yellow text-xs sm:text-sm px-6 py-3 font-bold justify-center"
              >
                <span>📅</span>
                <span>Book Rooftop Table</span>
              </button>
            </div>

            {/* Trust/USP Bar */}
            <div className="pt-5 border-t border-[#141413]/10 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FDE8B2] border border-[#141413] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  ⭐
                </div>
                <div>
                  <div className="font-display font-black text-xs sm:text-sm text-[#141413] leading-none">
                    4.5+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#5A5751] font-semibold leading-tight">
                    Google Rated
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D7ECD9] border border-[#141413] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  🌿
                </div>
                <div>
                  <div className="font-display font-black text-xs sm:text-sm text-[#141413] leading-none">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#5A5751] font-semibold leading-tight">
                    Pure Vegetarian
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF2E1] border border-[#141413] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  🏊
                </div>
                <div>
                  <div className="font-display font-black text-xs sm:text-sm text-[#141413] leading-none">
                    Rooftop
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#5A5751] font-semibold leading-tight">
                    & Poolside Vibe
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame with Tilted Badges */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 px-1 sm:px-0">
            {/* Tilted Floating Badge: Top-Left */}
            <div className="absolute -top-3 left-1 sm:-top-4 sm:-left-3 z-20 bg-[#E14825] text-white border-[1.5px] border-[#141413] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg shadow-[2px_3px_0px_#141413] font-bold text-[11px] sm:text-xs badge-tilt-left flex items-center gap-1.5">
              <span>🔥</span>
              <span>Jaipur&apos;s Hotspot</span>
            </div>

            {/* Tilted Floating Badge: Bottom-Right */}
            <div className="absolute -bottom-3 right-1 sm:-bottom-4 sm:-right-3 z-20 bg-[#F5C242] text-[#141413] border-[1.5px] border-[#141413] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg shadow-[2px_3px_0px_#141413] font-bold text-[11px] sm:text-xs badge-tilt-right flex items-center gap-1.5">
              <span>🏊</span>
              <span>Rooftop & Poolside</span>
            </div>

            {/* Main Image Frame */}
            <div className="relative rounded-2xl border-[2px] border-[#141413] overflow-hidden bg-[#181715] shadow-[4px_6px_0px_#141413] sm:shadow-[6px_8px_0px_#141413]">
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
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex justify-between items-start z-10 gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-[#141413] border border-[#141413] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm truncate">
                    Stone-Baked Pizza
                  </span>
                  <span className="bg-[#108548] text-white px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold border border-white shadow-sm flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Pure Veg
                  </span>
                </div>

                {/* Center / Dish Heading */}
                <div className="absolute bottom-16 sm:bottom-20 left-3 right-3 sm:left-4 sm:right-4 z-10 text-white">
                  <div className="font-display text-lg sm:text-2xl md:text-3xl font-black tracking-wide drop-shadow-md leading-tight">
                    THE TIME OUT SPECIAL
                  </div>
                  <div className="text-[11px] sm:text-sm text-[#F5C242] font-semibold drop-shadow line-clamp-1">
                    Loaded Veggies • Fresh Tandoori Paneer • 100% Mozzarella
                  </div>
                </div>

                {/* Bottom Overlay Bar inside photo */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border-[1.5px] border-[#141413] flex items-center justify-between z-10 shadow-[2px_3px_0px_#141413]">
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-[#5A5751] uppercase tracking-wider">
                      Handcrafted Pizzas
                    </div>
                    <div className="font-display text-lg sm:text-2xl font-black text-[#E14825] leading-none">
                      ₹89 <span className="text-[10px] sm:text-xs font-normal text-[#5A5751]">Starting Price</span>
                    </div>
                  </div>
                  <a
                    href="#menu"
                    className="btn-base btn-primary text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 font-bold"
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
