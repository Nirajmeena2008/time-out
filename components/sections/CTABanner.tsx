'use client';

import React from 'react';

interface CTABannerProps {
  onReserveClick?: () => void;
}

export default function CTABanner({ onReserveClick }: CTABannerProps) {
  return (
    <section id="reserve" className="bg-[#E14825] py-16 md:py-24 text-center border-b-[2px] border-[#141413] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-black/10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 space-y-6">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5C242] text-[#141413] border-[1.5px] border-[#141413] shadow-[2px_3px_0px_#141413] text-xs font-black uppercase">
          <span>🎉</span>
          <span>RESERVE YOUR EXPERIENCE TODAY</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          READY FOR A TIME OUT UNDER THE JAIPUR STARS?
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Whether you want poolside calm or rooftop panorama, your table is ready. Enjoy pure vegetarian bliss with your friends and loved ones.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={onReserveClick}
            className="btn-base btn-yellow text-base px-8 py-3.5 font-black shadow-[3px_4px_0px_#141413] hover:-translate-y-0.5 active:translate-y-0.5"
          >
            <span>📅</span>
            <span>Reserve Table Online</span>
          </button>

          <a
            href="https://wa.me/917023399845?text=Hi!%20I%20would%20like%20to%20reserve%20a%20table%20at%20The%20Time%20Out."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline text-base px-6 py-3.5 font-bold hover:bg-[#FAF2E1]"
          >
            <span>💬</span>
            <span>Book via WhatsApp</span>
          </a>
        </div>

        {/* Micro-Trust Row */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-bold text-white/90">
          <div className="flex items-center gap-1.5">
            <span className="text-[#F5C242] text-sm">✓</span>
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#F5C242] text-sm">✓</span>
            <span>Zero Booking Fee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#F5C242] text-sm">✓</span>
            <span>Rooftop or Poolside Choice</span>
          </div>
        </div>
      </div>
    </section>
  );
}
