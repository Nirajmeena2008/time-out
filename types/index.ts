// ============================================================
// The Time Out — Core Type Definitions
// ============================================================

export type Size = 'R' | 'M' | 'S' | 'L' | 'Half' | 'Full' | 'single';

export interface SizeOption {
  size: Size;
  label: string;
  price: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export type Category =
  | 'pizzas'
  | 'burgers'
  | 'fries-sides'
  | 'momos'
  | 'sandwiches-pasta'
  | 'cold-coffee'
  | 'thick-shakes'
  | 'mocktails';

export type Tag = 'bestseller' | 'popular' | 'chefs-choice' | 'combo' | 'new';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: Category;
  image: string;
  sizeOptions: SizeOption[];
  addOns: AddOn[];
  tags: Tag[];
  isVeg: true;
  rating: number;
  prepTime: number;
}

export interface CategoryInfo {
  id: Category | 'all';
  name: string;
  image: string;
  count: number;
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  image: string;
  selectedSize: SizeOption;
  selectedAddOns: AddOn[];
  quantity: number;
  unitPrice: number;
}

export type DeliveryMode = 'dine-in' | 'takeout' | 'delivery';

export interface CartState {
  items: CartItem[];
  deliveryMode: DeliveryMode;
  isOpen: boolean;
  addItem: (item: MenuItem, size: SizeOption, addOns: AddOn[], qty: number) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  setDeliveryMode: (mode: DeliveryMode) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getGST: () => number;
  getDeliveryFee: () => number;
  getTotal: () => number;
  getItemCount: () => number;
  getWhatsAppCheckoutURL: () => string;
}

export type SortOption = 'popularity' | 'price-low' | 'price-high' | 'rating';

export interface FilterState {
  selectedCategory: Category | 'all';
  searchQuery: string;
  pureVeg: boolean;
  rating4Plus: boolean;
  bestsellers: boolean;
  greatOffers: boolean;
  under250: boolean;
  fastPrep: boolean;
  sortBy: SortOption;
}

export interface Reservation {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'rooftop' | 'poolside' | 'indoor';
  specialRequests?: string;
}
