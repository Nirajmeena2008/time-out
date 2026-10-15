// ============================================================
// The Time Out — Filter & Sort Logic (Pure Functions)
// ============================================================

import { MenuItem, FilterState, Category, SortOption } from '@/types';

export const defaultFilterState: FilterState = {
  selectedCategory: 'all',
  searchQuery: '',
  pureVeg: false,
  rating4Plus: false,
  bestsellers: false,
  greatOffers: false,
  under250: false,
  fastPrep: false,
  sortBy: 'popularity',
};

export function filterMenuItems(items: MenuItem[], filters: FilterState): MenuItem[] {
  let result = [...items];

  // Category filter
  if (filters.selectedCategory !== 'all') {
    result = result.filter((item) => item.category === filters.selectedCategory);
  }

  // Search query
  if (filters.searchQuery.trim()) {
    const query = filters.searchQuery.toLowerCase().trim();
    result = result.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }

  // Rating 4.5+ filter
  if (filters.rating4Plus) {
    result = result.filter((item) => item.rating >= 4.5);
  }

  // Bestsellers filter
  if (filters.bestsellers) {
    result = result.filter((item) => item.tags.includes('bestseller'));
  }

  // Under ₹250 filter
  if (filters.under250) {
    result = result.filter((item) => Math.min(...item.sizeOptions.map((s) => s.price)) <= 250);
  }

  // Fast Prep (≤ 20m) filter
  if (filters.fastPrep) {
    result = result.filter((item) => item.prepTime <= 20);
  }

  // Sort
  result = sortItems(result, filters.sortBy);

  return result;
}

function sortItems(items: MenuItem[], sortBy: SortOption): MenuItem[] {
  switch (sortBy) {
    case 'price-low':
      return items.sort(
        (a, b) => Math.min(...a.sizeOptions.map((s) => s.price)) - Math.min(...b.sizeOptions.map((s) => s.price))
      );
    case 'price-high':
      return items.sort(
        (a, b) => Math.min(...b.sizeOptions.map((s) => s.price)) - Math.min(...a.sizeOptions.map((s) => s.price))
      );
    case 'rating':
      return items.sort((a, b) => b.rating - a.rating);
    case 'popularity':
    default:
      return items.sort((a, b) => {
        const aScore = (a.tags.includes('bestseller') ? 3 : 0) + (a.tags.includes('popular') ? 2 : 0) + (a.tags.includes('chefs-choice') ? 1 : 0);
        const bScore = (b.tags.includes('bestseller') ? 3 : 0) + (b.tags.includes('popular') ? 2 : 0) + (b.tags.includes('chefs-choice') ? 1 : 0);
        return bScore - aScore || b.rating - a.rating;
      });
  }
}

export function getCategoryLabel(category: Category | 'all'): string {
  const labels: Record<Category | 'all', string> = {
    all: 'All Dishes',
    pizzas: 'Pizzas',
    burgers: 'Burgers',
    'fries-sides': 'Fries & Sides',
    momos: 'Momos',
    'sandwiches-pasta': 'Sandwiches & Pasta',
    'cold-coffee': 'Cold Coffee',
    'thick-shakes': 'Thick Shakes',
    mocktails: 'Mocktails',
  };
  return labels[category];
}
