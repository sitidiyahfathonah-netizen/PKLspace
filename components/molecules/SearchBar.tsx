"use client";

import React from "react";
import Input from "@/components/atoms/Input";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  onFilterClick?: () => void;
  placeholder?: string;
}

export const SearchBar = ({
  value,
  onChange,
  onSearch,
  onFilterClick,
  placeholder = "cari tempat pkl....",
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-2 sm:gap-3"
    >
      <div className="flex-1 min-w-0">
        <Input
          type="text"
          value={value}
          onChange={onChange}
          onEnter={onSearch}
          placeholder={placeholder}
        />
      </div>

      <button
        type="submit"
        aria-label="Cari"
        className="flex h-11 w-12 sm:h-12 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-[#181838] text-white transition hover:bg-[#252554] active:scale-95 shadow-sm cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
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

      <button
        type="button"
        onClick={onFilterClick}
        className="flex h-11 sm:h-12 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 sm:px-5 text-sm font-medium text-slate-800 transition hover:bg-slate-50 active:scale-95 shrink-0 shadow-sm cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-4 w-4 text-slate-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        <span>Filter</span>
      </button>
    </form>
  );
};

export default SearchBar;
