'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/cart-store';

interface NavbarProps {
  onReserveClick?: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  const itemCount = useCartStore((state) => state.getItemCount());
  const toggleCart = useCartStore((state) => state.toggleCart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger bounce animation when item count increases
  useEffect(() => {
    if (itemCount > 0) {
      setBouncing(true);
      const timer = setTimeout(() => setBouncing(false), 400);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  // Handle mobile menu drawer phone back button navigation
  useEffect(() => {
    if (!mobileMenuOpen) return;

    if (typeof window !== 'undefined' && window.location.hash !== '#nav') {
      window.history.pushState({ modal: 'mobile-menu' }, '', '#nav');
    }

    const handlePopState = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      if (typeof window !== 'undefined' && window.location.hash === '#nav') {
        window.history.back();
      } else {
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 h-16 sm:h-[72px] ${
        isScrolled
          ? 'bg-[#FAF2E1]/95 backdrop-blur-md shadow-sm border-b border-[#141413]/10'
          : 'bg-[#FAF2E1] border-b border-[#141413]/8'
      }`}
    >
      <div className="max-w-[1200px] mx-auto h-full px-3.5 sm:px-6 md:px-8 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-1.5 sm:gap-2 group shrink-0 min-w-0">
          <span className="font-display text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#141413] whitespace-nowrap leading-none">
            THE <span className="text-[#E14825]">TIME</span> OUT
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#108548] animate-pulse shrink-0" title="100% Pure Veg" />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#hero"
            className="text-[14px] font-semibold text-[#141413] hover:text-[#E14825] transition-colors"
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-[14px] font-semibold text-[#141413] hover:text-[#E14825] transition-colors"
          >
            Menu
          </a>
          <a
            href="#specials"
            className="text-[14px] font-semibold text-[#141413] hover:text-[#E14825] transition-colors"
          >
            Specials
          </a>
          <a
            href="#about"
            className="text-[14px] font-semibold text-[#141413] hover:text-[#E14825] transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-[14px] font-semibold text-[#141413] hover:text-[#E14825] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Table Reservation Button */}
          <button
            onClick={onReserveClick}
            type="button"
            className="hidden sm:inline-flex btn-base btn-outline text-xs sm:text-sm px-3.5 py-1.5 sm:px-4 sm:py-2 hover:bg-[#FAF2E1]"
          >
            <span>📅</span>
            <span>Reserve Table</span>
          </button>

          {/* Cart Trigger Button */}
          <button
            onClick={toggleCart}
            type="button"
            className="btn-base btn-primary relative group p-2.5 sm:px-4 sm:py-2 flex items-center gap-1.5"
            aria-label="View Cart"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="hidden sm:inline font-bold text-xs sm:text-sm">Cart</span>
            {itemCount > 0 && (
              <span
                className={`absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-[#F5C242] text-[#141413] font-black text-[10px] sm:text-[11px] px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full border border-[#141413] shadow-[1px_1px_0px_#141413] ${
                  bouncing ? 'badge-bounce scale-110' : ''
                }`}
              >
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="md:hidden p-2 rounded-lg border-[1.5px] border-[#141413] bg-white text-[#141413] hover:bg-[#FAF2E1] flex items-center justify-center shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF2E1] border-b-[2px] border-[#141413] px-6 py-5 shadow-lg space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#141413] py-2 border-b border-[#141413]/10"
            >
              🏠 Home
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#141413] py-2 border-b border-[#141413]/10"
            >
              🍽️ Explore Menu
            </a>
            <a
              href="#specials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#141413] py-2 border-b border-[#141413]/10"
            >
              🔥 Bestsellers & Deals
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#141413] py-2 border-b border-[#141413]/10"
            >
              ✨ About The Time Out
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#141413] py-2"
            >
              📍 Location & Contact
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick?.();
              }}
              type="button"
              className="w-full btn-base btn-yellow py-3 text-sm font-bold shadow-[2px_3px_0px_#141413]"
            >
              📅 Reserve Rooftop / Poolside Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
