'use client';

import React from 'react';
import { FilterState, SortOption } from '@/types';

interface FilterChipBarProps {
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onResetFilters: () => void;
}

export default function FilterChipBar({
  filters,
  onFilterChange,
  onResetFilters,
}: FilterChipBarProps) {
  const hasActiveFilters =
    filters.rating4Plus ||
    filters.bestsellers ||
    filters.under250 ||
    filters.fastPrep ||
    filters.searchQuery !== '' ||
    filters.selectedCategory !== 'all';

  const sortLabels: Record<SortOption, string> = {
    popularity: 'Popularity',
    'price-low': 'Price: Low → High',
    'price-high': 'Price: High → Low',
    rating: 'Top Rated',
  };

  const cycleSort = () => {
    const cycle: SortOption[] = ['popularity', 'price-low', 'price-high', 'rating'];
    const nextIdx = (cycle.indexOf(filters.sortBy) + 1) % cycle.length;
    onFilterChange('sortBy', cycle[nextIdx]);
  };

  return (
    <div className="w-full flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
      {/* Pure Veg Badge (Always Active / Informational) */}
      <div className="bg-white border-[1.5px] border-[#108548] rounded-[10px] px-3 py-1.5 h-9 text-[12px] font-bold text-[#108548] whitespace-nowrap inline-flex items-center gap-2 shrink-0">
        <div className="w-3.5 h-3.5 border-[1.5px] border-[#108548] flex items-center justify-center rounded-[2px] bg-white">
          <div className="w-1.5 h-1.5 rounded-full bg-[#108548]"></div>
        </div>
        <span>100% Pure Veg</span>
      </div>

      {/* Rating 4.5+ Filter */}
      <button
        type="button"
        onClick={() => onFilterChange('rating4Plus', !filters.rating4Plus)}
        className={`rounded-[10px] px-3.5 py-1.5 h-9 text-[12px] font-bold whitespace-nowrap inline-flex items-center gap-1.5 shrink-0 border-[1.5px] border-[#141413] transition-all cursor-pointer ${
          filters.rating4Plus
            ? 'bg-[#E14825] text-white shadow-[2px_2px_0px_#141413] -translate-y-0.5'
            : 'bg-white text-[#141413] hover:bg-[#FAF2E1]'
        }`}
      >
        <span>⭐</span>
        <span>Rating 4.5+</span>
      </button>

      {/* Bestsellers Filter */}
      <button
        type="button"
        onClick={() => onFilterChange('bestsellers', !filters.bestsellers)}
        className={`rounded-[10px] px-3.5 py-1.5 h-9 text-[12px] font-bold whitespace-nowrap inline-flex items-center gap-1.5 shrink-0 border-[1.5px] border-[#141413] transition-all cursor-pointer ${
          filters.bestsellers
            ? 'bg-[#E14825] text-white shadow-[2px_2px_0px_#141413] -translate-y-0.5'
            : 'bg-white text-[#141413] hover:bg-[#FAF2E1]'
        }`}
      >
        <span>🔥</span>
        <span>Bestsellers</span>
      </button>

      {/* Under ₹250 Filter */}
      <button
        type="button"
        onClick={() => onFilterChange('under250', !filters.under250)}
        className={`rounded-[10px] px-3.5 py-1.5 h-9 text-[12px] font-bold whitespace-nowrap inline-flex items-center gap-1.5 shrink-0 border-[1.5px] border-[#141413] transition-all cursor-pointer ${
          filters.under250
            ? 'bg-[#E14825] text-white shadow-[2px_2px_0px_#141413] -translate-y-0.5'
            : 'bg-white text-[#141413] hover:bg-[#FAF2E1]'
        }`}
      >
        <span>💰</span>
        <span>Under ₹250</span>
      </button>

      {/* Fast Prep (≤ 20m) Filter */}
      <button
        type="button"
        onClick={() => onFilterChange('fastPrep', !filters.fastPrep)}
        className={`rounded-[10px] px-3.5 py-1.5 h-9 text-[12px] font-bold whitespace-nowrap inline-flex items-center gap-1.5 shrink-0 border-[1.5px] border-[#141413] transition-all cursor-pointer ${
          filters.fastPrep
            ? 'bg-[#E14825] text-white shadow-[2px_2px_0px_#141413] -translate-y-0.5'
            : 'bg-white text-[#141413] hover:bg-[#FAF2E1]'
        }`}
      >
        <span>⚡</span>
        <span>Fast Prep (≤ 20m)</span>
      </button>

      {/* Sort Option Button */}
      <button
        type="button"
        onClick={cycleSort}
        className="rounded-[10px] px-3.5 py-1.5 h-9 text-[12px] font-bold whitespace-nowrap inline-flex items-center gap-1.5 shrink-0 border-[1.5px] border-[#141413] bg-white text-[#141413] hover:bg-[#FAF2E1] transition-all cursor-pointer"
        title="Click to change sort order"
      >
        <span>↕️</span>
        <span>Sort: <span className="text-[#E14825]">{sortLabels[filters.sortBy]}</span></span>
      </button>

      {/* Reset Filters */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={onResetFilters}
          className="rounded-[10px] px-3 py-1.5 h-9 text-[12px] font-bold whitespace-nowrap inline-flex items-center gap-1 shrink-0 text-[#E14825] hover:bg-[#E14825]/10 underline cursor-pointer"
        >
          <span>✕ Reset All</span>
        </button>
      )}
    </div>
  );
}
