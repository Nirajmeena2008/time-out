'use client';

import React, { useState, useMemo } from 'react';
import { menuItems } from '@/lib/menu-data';
import { filterMenuItems, defaultFilterState } from '@/lib/filters';
import { FilterState, MenuItem, Category } from '@/types';
import CategoryCarousel from '@/components/menu/CategoryCarousel';
import BestsellersMarquee from '@/components/menu/BestsellersMarquee';
import FilterChipBar from '@/components/menu/FilterChipBar';
import ProductGrid from '@/components/menu/ProductGrid';
import ItemCustomizer from '@/components/menu/ItemCustomizer';

export default function InteractiveMenu() {
  const [filters, setFilters] = useState<FilterState>(defaultFilterState);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return filterMenuItems(menuItems, filters);
  }, [filters]);

  const handleFilterChange = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSelectCategory = (cat: Category | 'all') => {
    setFilters((prev) => ({ ...prev, selectedCategory: cat }));
  };

  const handleResetFilters = () => {
    setFilters(defaultFilterState);
  };

  return (
    <section id="menu" className="bg-[#FAF2E1] py-10 sm:py-16 md:py-24 border-b-[2px] border-[#141413]">
      <div className="max-w-[1200px] mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
        {/* Row 1: Section Header & Search Input */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E14825] text-white text-[11px] sm:text-xs font-bold mb-2">
              <span>📖</span>
              <span>INTERACTIVE CATALOG</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#141413] tracking-tight">
              EXPLORE OUR COMPLETE MENU
            </h2>
            <p className="text-xs sm:text-base text-[#5A5751] mt-1 font-medium">
              46+ pure vegetarian delicacies prepared fresh with premium ingredients
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="w-full md:w-[320px] relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#5A5751]">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search pizzas, shakes, momos..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-full border-[1.5px] border-[#141413] bg-white text-sm text-[#141413] placeholder:text-[#5A5751]/60 shadow-[2px_2px_0px_#141413] focus:outline-none focus:ring-2 focus:ring-[#E14825]/40"
            />
            {filters.searchQuery && (
              <button
                type="button"
                onClick={() => handleFilterChange('searchQuery', '')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#5A5751] hover:text-[#E14825]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Circular Category Carousel */}
        <div>
          <div className="text-xs font-black uppercase text-[#5A5751] tracking-wider mb-2">
            Categories ({menuItems.length} Dishes Total)
          </div>
          <CategoryCarousel
            selectedCategory={filters.selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Row 2.5: Multi-attribute Filter & Sort Chip Bar */}
        <div>
          <FilterChipBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Row 3: Continuous Bestsellers Marquee Showcase */}
        <div id="specials" className="scroll-mt-24">
          <BestsellersMarquee
            onCustomize={(item) => setCustomizingItem(item)}
          />
        </div>

        {/* Row 4: Results Counter & Sort Label */}
        <div className="flex items-center justify-between text-xs font-bold text-[#5A5751] pt-2 border-t border-[#141413]/10">
          <span>
            Showing <strong className="text-[#141413]">{filteredItems.length}</strong> of{' '}
            {menuItems.length} dishes
          </span>
          {filters.selectedCategory !== 'all' && (
            <span className="text-[#E14825]">
              Filter active: Category &ldquo;{filters.selectedCategory}&rdquo;
            </span>
          )}
        </div>

        {/* Row 5: Responsive Product Grid */}
        <ProductGrid
          items={filteredItems}
          onCustomize={(item) => setCustomizingItem(item)}
          onResetFilters={handleResetFilters}
        />
      </div>

      {/* Item Customizer Modal */}
      {customizingItem && (
        <ItemCustomizer
          item={customizingItem}
          onClose={() => setCustomizingItem(null)}
        />
      )}
    </section>
  );
}
