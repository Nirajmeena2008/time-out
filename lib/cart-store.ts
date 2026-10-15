// ============================================================
// The Time Out — Zustand Cart Store
// ============================================================

import { create } from 'zustand';
import { CartState, MenuItem, SizeOption, AddOn, DeliveryMode } from '@/types';

const DELIVERY_FEE = 40;
const GST_RATE = 0.05;

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  deliveryMode: 'dine-in',
  isOpen: false,

  addItem: (item: MenuItem, size: SizeOption, addOns: AddOn[], qty: number) => {
    const unitPrice = size.price + addOns.reduce((sum, a) => sum + a.price, 0);
    const id = `${item.id}-${size.size}-${addOns.map(a => a.id).sort().join(',')}`;

    set((state) => {
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + qty } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id,
            menuItemId: item.id,
            name: item.name,
            image: item.image,
            selectedSize: size,
            selectedAddOns: addOns,
            quantity: qty,
            unitPrice,
          },
        ],
      };
    });
  },

  updateQuantity: (id: string, qty: number) => {
    set((state) => {
      if (qty <= 0) {
        return { items: state.items.filter((i) => i.id !== id) };
      }
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: qty } : i
        ),
      };
    });
  },

  removeItem: (id: string) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  setDeliveryMode: (mode: DeliveryMode) => {
    set({ deliveryMode: mode });
  },

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  clearCart: () => set({ items: [], isOpen: false }),

  getSubtotal: () => {
    return get().items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  },

  getGST: () => {
    return Math.round(get().getSubtotal() * GST_RATE);
  },

  getDeliveryFee: () => {
    return get().deliveryMode === 'delivery' ? DELIVERY_FEE : 0;
  },

  getTotal: () => {
    return get().getSubtotal() + get().getGST() + get().getDeliveryFee();
  },

  getItemCount: () => {
    return get().items.reduce((sum, i) => sum + i.quantity, 0);
  },

  getWhatsAppCheckoutURL: () => {
    const state = get();
    const lines: string[] = [
      '🍕 *New Order from The Time Out Website*',
      '',
      `📦 *Order Type:* ${state.deliveryMode === 'dine-in' ? 'Dine-in' : state.deliveryMode === 'takeout' ? 'Takeout' : 'Delivery'}`,
      '',
      '── *Order Items* ──',
    ];

    state.items.forEach((item, idx) => {
      const addOnText = item.selectedAddOns.length > 0
        ? ` + ${item.selectedAddOns.map(a => a.name).join(', ')}`
        : '';
      lines.push(
        `${idx + 1}. ${item.name} (${item.selectedSize.label})${addOnText} × ${item.quantity} = ₹${item.unitPrice * item.quantity}`
      );
    });

    lines.push('');
    lines.push(`💰 *Subtotal:* ₹${state.getSubtotal()}`);
    lines.push(`📋 *GST (5%):* ₹${state.getGST()}`);
    if (state.deliveryMode === 'delivery') {
      lines.push(`🚚 *Delivery Fee:* ₹${state.getDeliveryFee()}`);
    }
    lines.push(`✅ *Total:* ₹${state.getTotal()}`);

    const text = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/917023399845?text=${text}`;
  },
}));
