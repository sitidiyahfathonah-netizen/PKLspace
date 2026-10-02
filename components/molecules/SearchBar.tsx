'use client';

import React from 'react';
import { Input } from '@/components/atoms/Input';

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  onFilterClick?: () => void;
}

export const SearchBar = ({
  value,
  onChange,
  onSearch,
  onFilterClick,
}: SearchBarProps) => {
  return (
    <div className="flex items-center gap-3 w-full max-w-4xl">
      {/* 1. Kotak Ikon Kaca Pembesar (Kiri) */}
      <button
        type="button"
        onClick={onSearch}
        aria-label="Cari"
        className="flex h-12 w-14 items-center justify-center rounded-xl bg-[#dbe2ea] text-slate-700 transition hover:bg-[#cbd5e1] shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>

      {/* 2. Input Teks (Tengah) */}
      <div className="flex-1">
        <Input
          placeholder="cari tempat pkl...."
          value={value}
          onChange={onChange}
          className="h-12"
        />
      </div>

      {/* 3. Tombol Filter (Kanan) */}
      <button
        type="button"
        onClick={onFilterClick}
        className="flex h-12 items-center gap-2 rounded-xl bg-[#dbe2ea] px-5 text-sm font-medium text-slate-700 transition hover:bg-[#cbd5e1] shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Filter</span>
      </button>
    </div>
  );
};

export default SearchBar;