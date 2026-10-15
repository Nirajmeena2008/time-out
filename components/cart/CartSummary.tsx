'use client';

import React from 'react';
import { useCartStore } from '@/lib/cart-store';

export default function CartSummary() {
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getGST = useCartStore((state) => state.getGST);
  const getDeliveryFee = useCartStore((state) => state.getDeliveryFee);
  const getTotal = useCartStore((state) => state.getTotal);
  const deliveryMode = useCartStore((state) => state.deliveryMode);

  const subtotal = getSubtotal();
  const gst = getGST();
  const deliveryFee = getDeliveryFee();
  const total = getTotal();

  return (
    <div className="bg-[#FAF2E1] border-t border-[#141413]/10 p-5 space-y-2.5">
      {/* Subtotal */}
      <div className="flex justify-between items-center text-xs font-semibold text-[#5A5751]">
        <span>Items Subtotal</span>
        <span className="font-bold text-[#141413]">₹{subtotal}</span>
      </div>

      {/* GST */}
      <div className="flex justify-between items-center text-xs font-semibold text-[#5A5751]">
        <span className="flex items-center gap-1">
          <span>GST (5%)</span>
          <span className="text-[10px] bg-white border border-[#141413]/20 px-1 rounded">CGST+SGST</span>
        </span>
        <span className="font-bold text-[#141413]">₹{gst}</span>
      </div>

      {/* Delivery Fee */}
      <div className="flex justify-between items-center text-xs font-semibold text-[#5A5751]">
        <span>
          Delivery Fee{' '}
          {deliveryMode !== 'delivery' && (
            <span className="text-[10px] text-[#108548] font-bold">({deliveryMode === 'dine-in' ? 'Dine-In' : 'Takeout'})</span>
          )}
        </span>
        <span className={`font-bold ${deliveryFee === 0 ? 'text-[#108548]' : 'text-[#141413]'}`}>
          {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
        </span>
      </div>

      {/* Grand Total */}
      <div className="pt-2 border-t border-dashed border-[#141413]/20 flex justify-between items-baseline">
        <div>
          <div className="text-sm font-black text-[#141413] uppercase tracking-wide">
            Grand Total
          </div>
          <div className="text-[10px] text-[#5A5751] font-semibold">
            Inclusive of all taxes
          </div>
        </div>
        <div className="font-display text-3xl font-black text-[#E14825]">
          ₹{total}
        </div>
      </div>
    </div>
  );
}
