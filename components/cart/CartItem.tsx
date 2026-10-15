'use client';

import React from 'react';
import { CartItem as CartItemType } from '@/types';
import { useCartStore } from '@/lib/cart-store';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const getEmoji = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('pizza')) return '🍕';
    if (n.includes('burger')) return '🍔';
    if (n.includes('fries') || n.includes('cheese balls')) return '🍟';
    if (n.includes('momo')) return '🥟';
    if (n.includes('sandwich')) return '🥪';
    if (n.includes('pasta')) return '🍝';
    if (n.includes('coffee')) return '☕';
    if (n.includes('shake')) return '🥤';
    if (n.includes('mocktail') || n.includes('mojito') || n.includes('lagoon')) return '🍹';
    return '🍽️';
  };

  const lineTotal = item.unitPrice * item.quantity;

  return (
    <div className="bg-[#FAF2E1]/60 border-[1.5px] border-[#141413] rounded-xl p-3 flex gap-3 items-center">
      {/* Thumbnail */}
      <div className="w-14 h-14 rounded-lg bg-white border border-[#141413]/20 overflow-hidden shrink-0 shadow-sm relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 border border-[#108548] flex items-center justify-center rounded-[2px] bg-white">
            <div className="w-1 h-1 rounded-full bg-[#108548]"></div>
          </div>
          <h4 className="font-bold text-sm text-[#141413] truncate">
            {item.name}
          </h4>
        </div>

        <div className="text-xs text-[#5A5751] mt-0.5">
          <span className="font-semibold text-[#141413]">
            {item.selectedSize.label}
          </span>
          {item.selectedAddOns.length > 0 && (
            <span className="text-[#E14825] font-semibold">
              {' '}+ {item.selectedAddOns.map((a) => a.name).join(', ')}
            </span>
          )}
        </div>

        <div className="text-[11px] text-[#5A5751] mt-0.5">
          ₹{item.unitPrice} each
        </div>
      </div>

      {/* Right Controls & Line Total */}
      <div className="flex flex-col items-end gap-1.5 shrink-0">
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="text-[11px] font-bold text-[#E14825] hover:underline"
          title="Remove item"
        >
          Remove
        </button>

        {/* Quantity Controls */}
        <div className="flex items-center gap-1.5 bg-white border-[1.5px] border-[#141413] rounded-full px-1 py-0.5 shadow-sm">
          <button
            type="button"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#E14825] hover:text-white transition-colors"
          >
            -
          </button>
          <span className="text-xs font-black w-4 text-center text-[#141413]">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#E14825] hover:text-white transition-colors"
          >
            +
          </button>
        </div>

        {/* Line Total */}
        <div className="font-display font-black text-sm text-[#E14825]">
          ₹{lineTotal}
        </div>
      </div>
    </div>
  );
}
