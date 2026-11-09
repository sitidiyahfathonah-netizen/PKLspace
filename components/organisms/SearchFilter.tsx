"use client";

import { useEffect, useState } from "react";
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

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFilter]);

  return (
    <>
      {/* Search */}
      <section className="w-full bg-white px-4 sm:px-6 pt-5 pb-4 sm:pt-8 sm:pb-6">
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 transition-opacity"
          onClick={handleCloseFilter}
        >
          <div
            className="w-full max-w-[420px] rounded-2xl border-2 border-[#1E254B] bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Judul Filter Jurusan & Tombol Close (X) */}
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-xl font-bold text-[#1E254B]">
                Filter Jurusan
              </h2>
              <button
                type="button"
                onClick={handleCloseFilter}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#1E254B] transition-colors hover:bg-slate-100"
                aria-label="Tutup filter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Pilihan Jurusan */}
            <div className="my-5 space-y-4">
              {majors.map((major) => {
                const isSelected = filterMajor === major.value;

                return (
                  <label
                    key={major.value}
                    className="group flex cursor-pointer select-none items-center gap-4"
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {
                        setFilterMajor(isSelected ? "" : major.value);
                      }}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 transition-colors ${
                        isSelected
                          ? "border-[#1E254B] bg-[#1E254B]"
                          : "border-[#7B8FA6] bg-white group-hover:border-[#1E254B]"
                      }`}
                    >
                      {isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth={3}
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m5 12 4 4L19 6"
                          />
                        </svg>
                      )}
                    </span>

                    <span className="text-lg font-bold text-[#1E254B]">
                      {major.label}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Tombol Terapkan & Reset */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleApplyFilter}
                className="w-full rounded-xl border-2 border-[#1E254B] bg-white py-3 text-center text-lg font-bold text-[#1E254B] transition hover:bg-[#F0F5FF] active:scale-[0.99]"
              >
                Terapkan
              </button>

              <button
                type="button"
                onClick={handleResetFilter}
                className="w-full rounded-xl border-2 border-[#1E254B] bg-white py-3 text-center text-lg font-bold text-[#1E254B] transition hover:bg-[#F0F5FF] active:scale-[0.99]"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFilter;
