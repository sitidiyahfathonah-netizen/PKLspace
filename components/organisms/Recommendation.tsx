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

const majors = [
  "Pengembangan Perangkat Lunak dan Gim",
  "Akuntansi dan Keuangan Lembaga",
  "Manajemen Perkantoran dan Layanan Bisnis",
  "Pemasaran",
];

type RecommendationProps = {
  companies: Company[];
};

const getMajorKeywords = (major: string): string[] => {
  const value = major.toLowerCase().trim();

  if (
    value.includes("pengembangan perangkat lunak") ||
    value.includes("gim") ||
    value === "pplg" ||
    value === "rpl"
  ) {
    return [
      "pplg",
      "pengembangan perangkat lunak dan gim",
      "rekayasa perangkat lunak",
      "perangkat lunak",
      "rpl",
      "gim",
    ];
  }

  if (value.includes("akuntansi") || value === "akl") {
    return [
      "akl",
      "akuntansi dan keuangan lembaga",
      "akuntansi lembaga keuangan",
      "keuangan lembaga",
    ];
  }

  if (value.includes("manajemen perkantoran") || value === "mplb") {
    return [
      "mplb",
      "manajemen perkantoran dan layanan bisnis",
      "manajemen perkantoran",
      "layanan bisnis",
    ];
  }

  if (value.includes("pemasaran") || value === "pm") {
    return ["pm", "pemasaran"];
  }

  return [value];
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

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const isChangingMajor = useRef(false);
  const navigationDirection = useRef<"next" | "previous" | "dot" | null>(null);

  const resistanceAccumulator = useRef(0);
  const resistanceResetTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const touchStartX = useRef(0);
  const isTouching = useRef(false);

  const selectedMajor = majors[activeMajor];
  const keywords = getMajorKeywords(selectedMajor);

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

  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    const direction = navigationDirection.current;

    container.scrollTo({
      left: direction === "previous" ? container.scrollWidth : 0,
      behavior: "auto",
    });

    resistanceAccumulator.current = 0;

    requestAnimationFrame(() => {
      handleScrollMetrics();
      isChangingMajor.current = false;
    });
  }, [activeMajor, handleScrollMetrics, recommendedCompanies.length]);

  const changeMajor = useCallback(
    (direction: "next" | "previous") => {
      if (isChangingMajor.current) return;

      if (direction === "next" && activeMajor < majors.length - 1) {
        isChangingMajor.current = true;
        navigationDirection.current = "next";
        setActiveMajor((prev) => prev + 1);
      } else if (direction === "previous" && activeMajor > 0) {
        isChangingMajor.current = true;
        navigationDirection.current = "previous";
        setActiveMajor((prev) => prev - 1);
      }
    },
    [activeMajor],
  );

  const handleScroll = () => {
    handleScrollMetrics();
  };

  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    const RESISTANCE_THRESHOLD = 150;

    const handleWheel = (e: WheelEvent) => {
      if (isChangingMajor.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 6;
      const isAtStart = scrollLeft <= 6;

      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (delta > 0 && isAtEnd && activeMajor < majors.length - 1) {
        e.preventDefault();
        resistanceAccumulator.current += delta;

        if (resistanceResetTimer.current) {
          clearTimeout(resistanceResetTimer.current);
        }

        if (resistanceAccumulator.current >= RESISTANCE_THRESHOLD) {
          changeMajor("next");
        } else {
          resistanceResetTimer.current = setTimeout(() => {
            resistanceAccumulator.current = 0;
          }, 280);
        }
      } else if (delta < 0 && isAtStart && activeMajor > 0) {
        e.preventDefault();
        resistanceAccumulator.current += Math.abs(delta);

        if (resistanceResetTimer.current) {
          clearTimeout(resistanceResetTimer.current);
        }

        if (resistanceAccumulator.current >= RESISTANCE_THRESHOLD) {
          changeMajor("previous");
        } else {
          resistanceResetTimer.current = setTimeout(() => {
            resistanceAccumulator.current = 0;
          }, 280);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);

      if (resistanceResetTimer.current) {
        clearTimeout(resistanceResetTimer.current);
      }
    };
  }, [activeMajor, changeMajor]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isTouching.current = true;
    resistanceAccumulator.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = cardContainerRef.current;

    if (!container || isChangingMajor.current || !isTouching.current) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const deltaX = touchStartX.current - currentX;

    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 8;
    const isAtStart = container.scrollLeft <= 8;

    const TOUCH_RESISTANCE = 95;

    if (deltaX > 0 && isAtEnd && activeMajor < majors.length - 1) {
      if (deltaX >= TOUCH_RESISTANCE) {
        isTouching.current = false;
        changeMajor("next");
      }
    } else if (deltaX < 0 && isAtStart && activeMajor > 0) {
      if (Math.abs(deltaX) >= TOUCH_RESISTANCE) {
        isTouching.current = false;
        changeMajor("previous");
      }
    }
  };

  const handleTouchEnd = () => {
    isTouching.current = false;
    resistanceAccumulator.current = 0;
  };

  const handleMajorClick = (index: number) => {
    if (index === activeMajor) return;

    isChangingMajor.current = true;
    navigationDirection.current = index > activeMajor ? "next" : "previous";
    setActiveMajor(index);
  };

  return (
    <section className="flex w-full items-center justify-center bg-white px-4 py-8 sm:px-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-4 text-center sm:mb-6 md:text-left">
          <h2 className="text-xl font-bold text-[#243B82] sm:text-2xl md:text-3xl">
            Rekomendasi Tempat PKL
          </h2>
          <p className="mt-1 text-sm text-[#7A7F8C] sm:mt-2 sm:text-base">
            berdasarkan jurusanmu
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border-2 border-[#5274C7] bg-[#EAF0FF] px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="mb-4 text-left sm:mb-6">
            <h3 className="text-base font-bold text-[#1D376F] sm:text-xl">
              {selectedMajor}
            </h3>
          </div>

          <div
            ref={cardContainerRef}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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

          <div className="mt-4 sm:mt-6">
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#CAD6F1]">
              <div
                className="absolute top-0 bottom-0 rounded-full bg-[#6B85C4] transition-all duration-150 ease-out"
                style={{
                  width: "35%",
                  left: `${scrollRatio * (100 - 35)}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2 sm:mt-5">
          {majors.map((major, index) => (
            <button
              key={major}
              type="button"
              onClick={() => handleMajorClick(index)}
              aria-label={`Pilih jurusan ${major}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeMajor
                  ? "w-7 bg-[#31559F]"
                  : "w-2 bg-[#AAB8DD] hover:bg-[#8FA5D8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
