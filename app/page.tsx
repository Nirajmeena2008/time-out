'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PromoBanner from '@/components/sections/PromoBanner';
import InteractiveMenu from '@/components/sections/InteractiveMenu';
import BrandStory from '@/components/sections/BrandStory';
import CTABanner from '@/components/sections/CTABanner';
import CartDrawer from '@/components/cart/CartDrawer';
import ReservationModal from '@/components/reservation/ReservationModal';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF2E1] text-[#141413]">
      {/* Sticky Navigation Bar */}
      <Navbar onReserveClick={openReservation} />

      {/* Main Single-Page Experience */}
      <main className="flex-1">
        {/* Section 1: Hero Split */}
        <HeroSection onReserveClick={openReservation} />

        {/* Section 2: Interactive Catalog & Full Menu (includes Categories & Continuous Bestsellers) */}
        <InteractiveMenu />

        {/* Section 3: Dark Mode Promotional Banner & Value Combos */}
        <PromoBanner />

        {/* Section 5: Brand Story & Poolside / Rooftop Ambiance */}
        <BrandStory />

        {/* Section 6: High-Impact Conversion CTA Banner */}
        <CTABanner onReserveClick={openReservation} />
      </main>

      {/* Section 7: Multi-Column Dark Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={closeReservation}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFAB />
    </div>
  );
}
