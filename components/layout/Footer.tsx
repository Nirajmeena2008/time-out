import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#181715] text-[#A39E93] pt-12 sm:pt-16 pb-8 border-t-[3px] border-[#141413]">
      <div className="max-w-[1200px] mx-auto px-3.5 sm:px-6 md:px-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-[#2A2825]">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-black text-white tracking-tight">
                THE <span className="text-[#E14825]">TIME</span> OUT
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#A39E93]">
              Jaipur&apos;s premier pure vegetarian cafe & rooftop restaurant. Celebrating great food, chill poolside vibes, and starlit gatherings.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#108548]/20 border border-[#108548] text-[#108548] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#108548]"></span>
              100% PURE VEGETARIAN
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2825] flex items-center justify-center text-white hover:bg-[#E14825] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2825] flex items-center justify-center text-white hover:bg-[#E14825] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/917014291523"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-105 transition-transform"
                aria-label="WhatsApp"
              >
                <span className="text-sm font-bold">💬</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-bold text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Full Menu & Categories
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-white transition-colors">
                  Bestsellers & Specials
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Rooftop & Poolside
                </a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-white transition-colors">
                  Table Reservations
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-white transition-colors">
                  Value Combo Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-bold text-white tracking-wide uppercase">
              Visit & Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-base text-[#F5C242]">📍</span>
                <span>Jaisinghpura Khor, Jaipur, Rajasthan 302027</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base text-[#F5C242]">📞</span>
                <a href="tel:+917014291523" className="hover:text-white transition-colors font-semibold">
                  +91 70142 91523
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base text-[#F5C242]">⏰</span>
                <span>Open Daily: 11:00 AM – 11:00 PM</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://maps.google.com/?q=The+Time+Out+Jaisinghpura+Khor+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F5C242] hover:underline font-bold"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-bold text-white tracking-wide uppercase">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Party & Event Bookings
                </Link>
              </li>
            </ul>
            <div className="pt-2 text-xs text-[#A39E93]">
              FSSAI Lic. Registered • GST Compliant
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A39E93]">
          <div>
            © 2026 The Time Out Jaipur. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-[#E14825]">❤️</span>
            <span>in Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
