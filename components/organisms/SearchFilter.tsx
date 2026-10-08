"use client";

import { useState } from "react";
import SearchBar from "../molecules/SearchBar";

const majors = [
  {
    label: "AKL",
    value: "Akuntansi dan Keuangan Lembaga",
  },
  {
    label: "MPLB",
    value: "Manajemen Perkantoran dan Layanan Bisnis",
  },
  {
    label: "PM",
    value: "Pemasaran",
  },
  {
    label: "PPLG",
    value: "Pengembangan Perangkat Lunak dan Gim",
  },
];

type SearchFilterProps = {
  selectedMajor: string;
  onSearch?: (keyword: string) => void;
  onFilter?: (major: string) => void;
};

const SearchFilter = ({
  selectedMajor,
  onSearch,
  onFilter,
}: SearchFilterProps) => {
  const [keyword, setKeyword] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  // Pilihan sementara di dalam popup
  const [filterMajor, setFilterMajor] = useState("");

  const handleSearch = () => {
    onSearch?.(keyword);
  };

  const handleOpenFilter = () => {
    // Saat popup dibuka, ambil filter yang sedang aktif
    setFilterMajor(selectedMajor);
    setShowFilter(true);
  };

  const handleApplyFilter = () => {
    onFilter?.(filterMajor);
    setShowFilter(false);
  };

  const handleResetFilter = () => {
    setFilterMajor("");
    onFilter?.("");
    setShowFilter(false);
  };

  return (
    <>
      {/* Search */}
      <section className="w-full bg-white px-6 py-8">
        <div className="mx-auto max-w-[1200px]">
          <SearchBar
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
            onSearch={handleSearch}
            onFilterClick={handleOpenFilter}
          />
        </div>
      </section>

      {/* Popup Filter */}
      {showFilter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-[550px] rounded-xl border-2 border-[#39339A] bg-white p-6 shadow-xl">
            {/* Pilihan Jurusan */}
            <div className="space-y-5">
              {majors.map((major) => {
                const isSelected = filterMajor === major.value;

                return (
                  <label
                    key={major.value}
                    className="flex cursor-pointer items-center gap-5">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {
                        setFilterMajor(
                          isSelected ? "" : major.value
                        );
                      }}
                      className="sr-only"/>

                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#39339A] ${
                        isSelected
                          ? "bg-[#39339A]"
                          : "bg-white"
                      }`}>
                      {isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          className="h-7 w-7">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m5 12 4 4L19 6"
                          />
                        </svg>
                      )}
                    </span>

                    <span className="text-2xl font-semibold text-[#211B55]">
                      {major.label}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Judul */}
            <h2 className="mt-7 text-2xl font-semibold text-[#211B55]">
              Filter Jurusan
            </h2>

            {/* Terapkan */}
            <button
              type="button"
              onClick={handleApplyFilter}
              className="mt-6 w-full rounded-xl border-2 border-[#39339A] bg-white px-6 py-3 text-2xl font-semibold text-[#39339A] transition hover:bg-[#F0F0FF]">
              Terapkan
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={handleResetFilter}
              className="mt-5 w-full rounded-xl border-2 border-[#39339A] bg-white px-6 py-3 text-2xl font-semibold text-[#39339A] transition hover:bg-[#F0F0FF]">
              Reset Filter
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFilter;