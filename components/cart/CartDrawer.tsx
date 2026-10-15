'use client';

import React, { useEffect } from 'react';
import { useCartStore } from '@/lib/cart-store';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { DeliveryMode } from '@/types';

export default function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);
  const deliveryMode = useCartStore((state) => state.deliveryMode);
  const setDeliveryMode = useCartStore((state) => state.setDeliveryMode);
  const clearCart = useCartStore((state) => state.clearCart);
  const getWhatsAppCheckoutURL = useCartStore((state) => state.getWhatsAppCheckoutURL);

  // Handle Escape key and mobile phone back button navigation
  useEffect(() => {
    if (!isOpen) return;

    // Push history entry for mobile back button support
    if (typeof window !== 'undefined' && window.location.hash !== '#cart') {
      window.history.pushState({ modal: 'cart' }, '', '#cart');
    }

    const handlePopState = () => {
      closeCart();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (typeof window !== 'undefined' && window.location.hash === '#cart') {
          window.history.back();
        } else {
          closeCart();
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  const handleManualClose = () => {
    if (typeof window !== 'undefined' && window.location.hash === '#cart') {
      window.history.back();
    } else {
      closeCart();
    }
  };

  if (!isOpen) return null;

  const modes: { id: DeliveryMode; label: string; icon: string }[] = [
    { id: 'dine-in', label: 'Dine-In', icon: '🍽️' },
    { id: 'takeout', label: 'Takeout', icon: '🥡' },
    { id: 'delivery', label: 'Delivery', icon: '🚚' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleManualClose}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white border-l-[2px] border-[#141413] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#141413]/10 flex items-center justify-between bg-[#FAF2E1]">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-black text-[#141413] tracking-tight">
                YOUR ORDER
              </span>
              <span className="text-xs bg-[#E14825] text-white font-bold px-2 py-0.5 rounded-full border border-[#141413]">
                {items.reduce((sum, i) => sum + i.quantity, 0)} Items
              </span>
            </div>

            <button
              type="button"
              onClick={handleManualClose}
              className="w-8 h-8 rounded-full border border-[#141413] bg-white flex items-center justify-center text-[#141413] font-black text-sm hover:bg-[#E14825] hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Delivery Mode Tabs */}
          <div className="p-4 border-b border-[#141413]/10 bg-white">
            <div className="text-[11px] font-black uppercase text-[#5A5751] mb-2 tracking-wider">
              Order Type
            </div>
            <div className="grid grid-cols-3 gap-2">
              {modes.map((m) => {
                const isActive = deliveryMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setDeliveryMode(m.id)}
                    className={`py-2 px-1 text-center rounded-xl border-[1.5px] transition-all text-xs font-bold flex flex-col items-center gap-0.5 ${
                      isActive
                        ? 'border-[#141413] bg-[#E14825] text-white shadow-[2px_2px_0px_#141413]'
                        : 'border-[#141413]/30 bg-white text-[#141413] hover:bg-[#FAF2E1]'
                    }`}
                  >
                    <span>{m.icon}</span>
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Items Scrollable List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="text-6xl animate-bounce">🍕</div>
                <div className="font-display text-2xl font-black text-[#141413]">
                  Your Cart is Empty
                </div>
                <p className="text-xs text-[#5A5751] max-w-xs mx-auto">
                  Looks like you haven&apos;t added any delicious pizzas, burgers or shakes yet!
                </p>
                <button
                  type="button"
                  onClick={handleManualClose}
                  className="btn-base btn-primary text-xs px-5 py-2.5 font-bold"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              items.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>

          {/* Cart Summary & WhatsApp Checkout CTA */}
          {items.length > 0 && (
            <div>
              <CartSummary />

              <div className="p-4 bg-white border-t border-[#141413]/10 space-y-2">
                <a
                  href={getWhatsAppCheckoutURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-base bg-[#25D366] text-white border-[1.5px] border-[#141413] shadow-[3px_4px_0px_#141413] py-3.5 text-sm font-black flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
                >
                  <span className="text-base">💬</span>
                  <span>Order via WhatsApp Now</span>
                </a>

                <div className="flex items-center justify-between px-1 text-[11px] text-[#5A5751]">
                  <span>Direct connection with cafe staff</span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-[#E14825] font-bold hover:underline"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
