'use client';

import React, { useState } from 'react';
import { MenuItem, SizeOption, AddOn } from '@/types';
import { useCartStore } from '@/lib/cart-store';

interface ItemCustomizerProps {
  item: MenuItem;
  onClose: () => void;
}

export default function ItemCustomizer({ item, onClose }: ItemCustomizerProps) {
  const [selectedSize, setSelectedSize] = useState<SizeOption>(item.sizeOptions[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const toggleAddOn = (addOn: AddOn) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = selectedSize.price + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  // Handle mobile phone back button and Escape key
  React.useEffect(() => {
    // Push history entry for mobile back button support
    if (typeof window !== 'undefined' && window.location.hash !== '#customize') {
      window.history.pushState({ modal: 'customize' }, '', '#customize');
    }

    const handlePopState = () => {
      onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (typeof window !== 'undefined' && window.location.hash === '#customize') {
          window.history.back();
        } else {
          onClose();
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
  }, [onClose]);

  const handleManualClose = () => {
    if (typeof window !== 'undefined' && window.location.hash === '#customize') {
      window.history.back();
    } else {
      onClose();
    }
  };

  const handleAddToCart = () => {
    addItem(item, selectedSize, selectedAddOns, quantity);
    setAdded(true);
    setTimeout(() => {
      handleManualClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      {/* Backdrop click area */}
      <div className="absolute inset-0" onClick={handleManualClose} />

      {/* Modal Card */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl border-[2px] border-[#141413] shadow-[4px_6px_0px_#141413] z-10 max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#141413]/10 flex items-center justify-between bg-[#FAF2E1]">
          <div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 border border-[#108548] flex items-center justify-center rounded-[2px] bg-white">
                <div className="w-1.5 h-1.5 rounded-full bg-[#108548]"></div>
              </div>
              <span className="text-[11px] font-bold text-[#108548] uppercase">Pure Veg</span>
            </div>
            <h3 className="font-display text-2xl font-black text-[#141413] mt-0.5 leading-tight">
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleManualClose}
            className="w-8 h-8 rounded-full border border-[#141413] bg-white flex items-center justify-center text-[#141413] font-black text-sm hover:bg-[#E14825] hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Dish Hero Image Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#141413]/10 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2.5 left-6 text-white font-bold text-xs flex items-center gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-[#141413] px-2 py-0.5 rounded text-[10px] font-black">
              ⭐ {item.rating}
            </span>
            <span>⏱️ {item.prepTime} mins prep</span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <p className="text-sm text-[#5A5751] leading-relaxed">
            {item.description}
          </p>

          {/* Size Selection (if multiple sizes) */}
          {item.sizeOptions.length > 1 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase text-[#141413] tracking-wider">
                  Select Size <span className="text-[#E14825]">*</span>
                </span>
                <span className="text-[11px] font-bold text-[#5A5751]">Required</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {item.sizeOptions.map((opt) => {
                  const isSelected = selectedSize.size === opt.size;
                  return (
                    <button
                      key={opt.size}
                      type="button"
                      onClick={() => setSelectedSize(opt)}
                      className={`p-3 rounded-xl border-[1.5px] text-left transition-all flex justify-between items-center ${
                        isSelected
                          ? 'border-[#141413] bg-[#E14825] text-white shadow-[2px_2px_0px_#141413]'
                          : 'border-[#141413]/30 bg-white text-[#141413] hover:bg-[#FAF2E1]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{opt.label}</div>
                        <div
                          className={`text-xs ${
                            isSelected ? 'text-white/80' : 'text-[#5A5751]'
                          }`}
                        >
                          {opt.size === 'R' ? 'Personal' : opt.size === 'M' ? 'Medium' : ''}
                        </div>
                      </div>
                      <div className="font-display font-black text-lg">
                        ₹{opt.price}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add-ons (e.g. Add Ice Cream for ₹30) */}
          {item.addOns.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase text-[#141413] tracking-wider">
                  Add-Ons & Extras
                </span>
                <span className="text-[11px] font-bold text-[#5A5751]">Optional</span>
              </div>
              <div className="space-y-2">
                {item.addOns.map((addon) => {
                  const isChecked = selectedAddOns.some((a) => a.id === addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon)}
                      className={`w-full p-3 rounded-xl border-[1.5px] text-left transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-[#141413] bg-[#FDE8B2] text-[#141413] shadow-[2px_2px_0px_#141413]'
                          : 'border-[#141413]/20 bg-white text-[#141413] hover:bg-[#FAF2E1]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border-[1.5px] border-[#141413] flex items-center justify-center font-bold text-xs ${
                            isChecked ? 'bg-[#108548] text-white' : 'bg-white'
                          }`}
                        >
                          {isChecked && '✓'}
                        </div>
                        <span className="font-bold text-sm">{addon.name}</span>
                      </div>
                      <span className="font-display font-bold text-base text-[#E14825]">
                        +₹{addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-[#141413]/10">
            <span className="text-xs font-black uppercase text-[#141413] tracking-wider">
              Quantity
            </span>
            <div className="flex items-center gap-3 bg-[#FAF2E1] border-[1.5px] border-[#141413] rounded-full p-1 shadow-[1.5px_1.5px_0px_#141413]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="w-7 h-7 rounded-full bg-white border border-[#141413] flex items-center justify-center font-black text-sm disabled:opacity-40 hover:bg-[#E14825] hover:text-white transition-colors"
              >
                -
              </button>
              <span className="font-display font-black text-base w-6 text-center text-[#141413]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-7 h-7 rounded-full bg-white border border-[#141413] flex items-center justify-center font-black text-sm hover:bg-[#E14825] hover:text-white transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Footer: Add to Cart CTA */}
        <div className="p-4 px-6 border-t border-[#141413]/10 bg-[#FAF2E1] flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold text-[#5A5751] uppercase">Total Amount</div>
            <div className="font-display text-2xl font-black text-[#E14825] leading-none">
              ₹{totalPrice}
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`btn-base flex-1 py-3.5 text-sm font-bold shadow-[2px_3px_0px_#141413] transition-all ${
              added ? 'bg-[#108548] text-white' : 'btn-primary'
            }`}
          >
            {added ? (
              <>
                <span>✓ Added to Cart!</span>
              </>
            ) : (
              <>
                <span>Add to Cart</span>
                <span>• ₹{totalPrice}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
