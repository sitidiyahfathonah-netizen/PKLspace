"use client";

import { useEffect, useRef, useState } from "react";
import CompanyCard from "./CompanyCard";

type Company = {
  id: number;
  name: string;
  logo: string;
  description: string;
  major: string;
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

const Recommendation = ({ companies }: RecommendationProps) => {
  const [activeMajor, setActiveMajor] = useState(0);

  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Menandai ketika perpindahan jurusan sedang dilakukan
  const isChangingMajor = useRef(false);

  // Menyimpan arah perpindahan jurusan
  const navigationDirection = useRef<"next" | "previous" | "dot" | null>(
    null
  );

  const selectedMajor = majors[activeMajor];

  const recommendedCompanies = companies.filter(
    (company) => company.major === selectedMajor
  );

  // Ketika jurusan berubah:
  // - next     -> mulai dari kiri
  // - previous -> mulai dari kanan
  // - dot      -> mulai dari kiri
  useEffect(() => {
    const container = cardContainerRef.current;

    if (!container) return;

    const direction = navigationDirection.current;

    if (direction === "previous") {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "auto",
      });
    } else {
      container.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }

    // Tunggu sampai posisi scroll hasil perpindahan
    // selesai sebelum scroll user dibaca lagi.
    requestAnimationFrame(() => {
      isChangingMajor.current = false;
    });
  }, [activeMajor]);

  // Scroll horizontal:
  // - Sampai ujung kanan -> jurusan berikutnya
  // - Sampai ujung kiri  -> jurusan sebelumnya
  const handleScroll = () => {
    const container = cardContainerRef.current;

    if (!container || isChangingMajor.current) return;

    const isAtStart = container.scrollLeft <= 10;

    const isAtEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10;

    // SCROLL KE KANAN
    if (isAtEnd && activeMajor < majors.length - 1) {
      isChangingMajor.current = true;
      navigationDirection.current = "next";

      setActiveMajor((prev) => prev + 1);
      return;
    }

    // SCROLL KE KIRI
    if (isAtStart && activeMajor > 0) {
      isChangingMajor.current = true;
      navigationDirection.current = "previous";

      setActiveMajor((prev) => prev - 1);
      return;
    }
  };

  // Memilih jurusan melalui titik
  const handleMajorClick = (index: number) => {
    if (index === activeMajor) {
      return;
    }

    isChangingMajor.current = true;
    navigationDirection.current = "dot";

    setActiveMajor(index);
  };

  return (
    <section className="flex min-h-screen w-full items-center bg-white px-8 py-12">
      <div className="mx-auto w-full max-w-[1200px]">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#243B82]">
            Rekomendasi Tempat PKL
          </h2>

          <p className="mt-2 text-base text-[#7A7F8C]">
            Berdasarkan jurusanmu
          </p>
        </div>

        {/* Recommendation Box */}
        <div className="relative min-h-[500px] overflow-hidden rounded-xl border border-[#5274C7] bg-[#EAF0FF] px-12 py-8">

          {/* Jurusan */}
          <div className="mb-8 text-center">
            <h3 className="text-lg font-semibold uppercase text-[#31559F]">
              {selectedMajor}
            </h3>
          </div>

          {/* Cards */}
          <div
            ref={cardContainerRef}
            onScroll={handleScroll}
            className="flex min-h-[350px] items-center gap-6 overflow-x-auto px-6 pb-4">
            {recommendedCompanies.length > 0 ? (
              <>
                {recommendedCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="w-[300px] shrink-0 sm:w-[360px] lg:w-[430px] [&>article]:w-full">
                    <CompanyCard
                      name={company.name}
                      logo={company.logo}
                      description={company.description}
                      major={company.major}
                    />
           </div>
                ))}

                {/* Lihat Semua */}
                <a href={`/katalog?jurusan=${encodeURIComponent( 
                  selectedMajor
                  )}`}
                  className="flex h-[350px] w-[120px] shrink-0 flex-col items-center justify-center gap-2 text-center text-sm font-semibold text-[#31559F] hover:text-[#243B82]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-md"> → </span>

                  <span>
                    Lihat
                    <br />
                    semua
                  </span>
                </a>
              </>
            ) : (
              <div className="flex w-full items-center justify-center">
                <p className="text-base text-[#6B7280]">
                  Belum ada tempat PKL untuk jurusan ini.
                </p>
              </div>
            )}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {majors.map((major, index) => (
              <button
                key={major}
                type="button"
                onClick={() => handleMajorClick(index)}
                aria-label={`Pilih jurusan ${major}`}
                className={`h-2 rounded-full transition-all ${
                  index === activeMajor
                    ? "w-7 bg-[#31559F]"
                    : "w-2 bg-[#AAB8DD]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;