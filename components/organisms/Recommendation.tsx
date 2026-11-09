"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import CompanyCard from "./CompanyCard";

type Company = {
  id: number;
  name: string;
  logo: string;
  description: string;
  major: string;
  majors?: string[];
  slug?: string;
};

const MAJORS = [
  {
    code: "AKL",
    name: "Akuntansi Lembaga Keuangan",
    filterKeywords: [
      "akl",
      "akuntansi dan keuangan lembaga",
      "akuntansi lembaga keuangan",
      "akuntansi",
      "keuangan lembaga",
    ],
  },
  {
    code: "MPLB",
    name: "Manajemen Perkantoran dan Layanan Bisnis",
    filterKeywords: [
      "mplb",
      "manajemen perkantoran dan layanan bisnis",
      "manajemen perkantoran",
      "layanan bisnis",
    ],
  },
  {
    code: "PM",
    name: "Pemasaran",
    filterKeywords: ["pm", "pemasaran"],
  },
  {
    code: "PPLG",
    name: "Pengembangan Perangkat Lunak dan Gim",
    filterKeywords: [
      "pplg",
      "pengembangan perangkat lunak dan gim",
      "rekayasa perangkat lunak",
      "perangkat lunak",
      "rpl",
      "gim",
    ],
  },
];

type RecommendationProps = {
  companies: Company[];
};

const matchesMajor = (text: string, keywords: string[]): boolean => {
  const normalized = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

  if (!normalized) return false;

  const words = normalized.split(/\s+/);

  return keywords.some((keyword) => {
    const normalizedKeyword = keyword
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

    // Singkatan seperti PPLG, AKL, MPLB, dan PM
    // harus cocok sebagai kata utuh agar tidak salah cocok.
    if (["pplg", "akl", "mplb", "pm", "rpl"].includes(normalizedKeyword)) {
      return words.includes(normalizedKeyword);
    }

    return normalized.includes(normalizedKeyword);
  });
};

const Recommendation = ({ companies }: RecommendationProps) => {
  const [activeMajor, setActiveMajor] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentMajor = MAJORS[activeMajor];
  const selectedMajor = currentMajor.name;
  const keywords = currentMajor.filterKeywords;

  const recommendedCompanies = companies.filter((company) => {
    const allCompanyMajors = [company.major, ...(company.majors ?? [])].filter(
      Boolean,
    );

    return allCompanyMajors.some((major) => matchesMajor(major, keywords));
  });

  const handleScrollMetrics = useCallback(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    const ratio =
      maxScroll > 0 ? Math.min(Math.max(scrollLeft / maxScroll, 0), 1) : 0;

    setScrollRatio(ratio);

    const containerCenter = scrollLeft + clientWidth / 2;
    const cardElements =
      container.querySelectorAll<HTMLElement>("[data-card-index]");

    let closestIdx = 0;
    let minDistance = Infinity;

    cardElements.forEach((el) => {
      const idx = Number(el.getAttribute("data-card-index"));
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);

      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setActiveCardIndex(closestIdx);
  }, []);

  // Tutup dropdown saat klik di luar atau tekan Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  // Reset scroll container saat jurusan berganti
  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    container.scrollTo({
      left: 0,
      behavior: "auto",
    });

    requestAnimationFrame(() => {
      handleScrollMetrics();
    });
  }, [activeMajor, handleScrollMetrics, recommendedCompanies.length]);

  const handleMajorClick = (index: number) => {
    if (index === activeMajor) return;
    setActiveMajor(index);
    setIsDropdownOpen(false);
  };

  const handleScroll = () => {
    handleScrollMetrics();
  };

  return (
    <section className="flex w-full items-center justify-center bg-white px-4 py-8 sm:px-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header Rekomendasi & Filter Dropdown Jurusan */}
        <div className="mb-4 flex items-start justify-between sm:mb-6">
          <div className="text-left">
            <h2 className="text-xl font-bold text-[#243B82] sm:text-2xl md:text-3xl">
              Rekomendasi Tempat PKL
            </h2>
            <p className="mt-1 text-sm text-[#7A7F8C] sm:mt-2 sm:text-base">
              berdasarkan jurusanmu
            </p>
          </div>

          {/* Filter Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg border border-[#A7B9D2] bg-white px-3.5 py-1.5 text-sm font-medium text-[#4A607A] transition-colors hover:border-[#5274C7] sm:px-4 sm:py-2 sm:text-base"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <span>{MAJORS[activeMajor].code}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-[#8A9BB4] transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Pop Up Menu sesuai desain */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full z-30 mt-1.5 w-full min-w-[96px] overflow-hidden rounded-xl border border-[#9FB0C8] bg-white shadow-md">
                {MAJORS.map((item, index) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => handleMajorClick(index)}
                    className={`block w-full border-b border-[#9FB0C8] py-2 text-center text-sm font-medium transition-colors last:border-b-0 hover:bg-[#F0F5FF] ${
                      activeMajor === index
                        ? "bg-[#F0F5FF]/60 font-semibold text-[#243B82]"
                        : "text-[#5B7293]"
                    }`}
                  >
                    {item.code}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Container Rekomendasi */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-[#5274C7] bg-[#EAF0FF] px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="mb-4 text-left sm:mb-6">
            <h3 className="text-base font-bold text-[#1D376F] sm:text-xl">
              {selectedMajor}
            </h3>
          </div>

          <div
            ref={cardContainerRef}
            onScroll={handleScroll}
            className="no-scrollbar flex w-full items-center gap-4 overflow-x-auto scroll-smooth px-1 pb-2 sm:gap-6 sm:px-2 snap-x snap-mandatory sm:snap-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {recommendedCompanies.length > 0 ? (
              <>
                {recommendedCompanies.map((company, index) => {
                  const isZoomed = activeCardIndex === index;

                  return (
                    <div
                      key={company.id}
                      data-card-index={index}
                      className={`shrink-0 snap-center sm:snap-align-none transition-all duration-300 ease-out transform-gpu
                        w-[72vw] max-w-[280px] sm:max-w-none sm:w-[calc((100%-48px)/2.5)] [&>article]:w-full
                        ${
                          isZoomed
                            ? "scale-100 opacity-100 shadow-md sm:scale-100 sm:opacity-100 sm:shadow-none"
                            : "scale-[0.93] opacity-80 sm:scale-100 sm:opacity-100"
                        }`}
                    >
                      <CompanyCard
                        id={company.id}
                        name={company.name}
                        logo={company.logo}
                        description={company.description}
                        major={company.major}
                        slug={company.slug}
                        layout="vertical"
                      />
                    </div>
                  );
                })}

                <div
                  data-card-index={recommendedCompanies.length}
                  className="flex shrink-0 snap-center items-center pr-4 sm:snap-align-none sm:pr-6"
                >
                  <Link
                    href={`/katalog?jurusan=${encodeURIComponent(selectedMajor)}`}
                    className="flex h-[280px] w-[80px] shrink-0 flex-col items-center justify-center gap-2 text-center text-xs font-semibold text-[#31559F] hover:text-[#243B82] sm:h-[350px] sm:w-[120px] sm:text-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl shadow-md transition-transform duration-200 hover:scale-110 sm:h-10 sm:w-10 sm:text-2xl">
                      →
                    </span>
                    <span>
                      Lihat
                      <br />
                      semua
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex w-full items-center justify-center py-8">
                <p className="text-sm text-[#6B7280] sm:text-base">
                  Belum ada tempat PKL untuk jurusan ini.
                </p>
              </div>
            )}
          </div>

          {/* Scroll progress bar bawah (hanya 1 scrollbar seperti pada desain) */}
          <div className="mt-4 sm:mt-6">
            <div className="relative h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-[#CBD7E8]">
              <div
                className="absolute top-0 bottom-0 rounded-full bg-[#687F9E] transition-all duration-150 ease-out"
                style={{
                  width: "35%",
                  left: `${scrollRatio * (100 - 35)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
