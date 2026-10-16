"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "../organisms/SearchFilter";
import CompanyCard from "../organisms/CompanyCard";
import Footer from "../organisms/Footer";
import { getCompanies, getStrapiMediaUrl } from "@/lib/api";
import type { Company } from "@/types/company";

const CatalogTemplate = () => {
  const searchParams = useSearchParams();

  const initialMajor = searchParams.get("jurusan") || "";

  const [companiesData, setCompaniesData] = useState<Company[]>([]);
  const [keyword, setKeyword] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(initialMajor);
  const [isLoading, setIsLoading] = useState(true);

  // Mengikuti perubahan jurusan dari URL
  useEffect(() => {
    setSelectedMajor(searchParams.get("jurusan") || "");
  }, [searchParams]);

  // Fetch data dari backend Strapi setiap kali keyword atau selectedMajor berubah
  useEffect(() => {
    const fetchCatalogData = async () => {
      setIsLoading(true);
      try {
        const data = await getCompanies({
          search: keyword,
          jurusan: selectedMajor,
        });
        setCompaniesData(data || []);
      } catch (error) {
        console.error("Gagal memuat katalog perusahaan:", error);
        setCompaniesData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCatalogData();
  }, [keyword, selectedMajor]);

  // Helper untuk menentukan label judul dinamis sesuai Figma
  const getCatalogTitle = () => {
    if (!selectedMajor || selectedMajor === "") {
      return "Daftar Tempat PKL";
    }

    const lower = selectedMajor.toLowerCase();
    if (lower.includes("akuntansi") || lower === "akl") {
      return "Daftar Tempat PKL Jurusan AKL";
    }
    if (lower.includes("manajemen perkantoran") || lower === "mplb") {
      return "Daftar Tempat PKL Jurusan MPLB";
    }
    if (lower.includes("pemasaran") || lower === "pm") {
      return "Daftar Tempat PKL Jurusan PM";
    }
    if (lower.includes("pengembangan perangkat lunak") || lower.includes("gim") || lower === "pplg") {
      return "Daftar Tempat PKL Jurusan PPLG";
    }

    return `Daftar Tempat PKL Jurusan ${selectedMajor}`;
  };
// --- LOGIKA PEMISAHAN JURUSAN UTAMA & PILIHAN LAINNYA (DIPERKUAT) ---
  const primaryCompanies = selectedMajor
    ? companiesData.filter((comp) => {
        const main = (comp.jurusan_utama || "").toLowerCase();
        const search = selectedMajor.toLowerCase();

        // Cek kecocokan fleksibel (baik singkatan maupun nama panjang)
        const isMatchPPLG = (search.includes("pplg") || search.includes("perangkat lunak")) && 
                            (main.includes("pplg") || main.includes("perangkat lunak"));
        const isMatchAKL = (search.includes("akl") || search.includes("akuntansi")) && 
                           (main.includes("akl") || main.includes("akuntansi"));
        const isMatchMPLB = (search.includes("mplb") || search.includes("manajemen perkantoran")) && 
                            (main.includes("mplb") || main.includes("manajemen perkantoran"));
        const isMatchPM = (search.includes("pm") || search.includes("pemasaran")) && 
                          (main.includes("pm") || main.includes("pemasaran"));

        return isMatchPPLG || isMatchAKL || isMatchMPLB || isMatchPM || main.includes(search) || search.includes(main);
      })
    : companiesData;

  const otherCompanies = selectedMajor
    ? companiesData.filter((comp) => {
        const primaryIds = new Set(primaryCompanies.map((p) => p.id));
        return !primaryIds.has(comp.id);
      })
    : [];

  return (
    <div className="min-h-screen bg-white">
      <SearchFilter
        selectedMajor={selectedMajor}
        onSearch={(value) => setKeyword(value)}
        onFilter={(major) => setSelectedMajor(major)}
      />
      <section className="px-4 sm:px-6 pb-12">
        <div className="mx-auto max-w-[1200px]">
          {/* Judul Dinamis Sesuai Figma */}
          <h1 className="hidden sm:block mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-[#181838]">
            {getCatalogTitle()}
          </h1>

          {isLoading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-base text-[#7A7F8C]">Memuat tempat PKL...</p>
            </div>
          ) : companiesData.length > 0 ? (
            <div className="space-y-8">
              {/* Grup 1: Prioritas Utama */}
              {primaryCompanies.length > 0 && (
                <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 md:gap-8">
                  {primaryCompanies.map((company) => {
                    const logoUrl = getStrapiMediaUrl(company.logo?.url);
                    const mainMajor =
                      company.jurusan_utama ||
                      company.jurusan_diterima?.[0] ||
                      '-';
                    const categoryDescription =
                      company.bidang?.nama ||
                      company.kategori?.nama ||
                      'Perusahaan / Instansi';

                    return (
                      <CompanyCard
                        key={company.id}
                        id={company.id}
                        name={company.nama}
                        logo={logoUrl}
                        description={categoryDescription}
                        major={mainMajor}
                        slug={company.slug}
                      />
                    );
                  })}
                </div>
              )}

              {/* Grup 2: Pilihan Lainnya (Hanya muncul jika ada filter jurusan aktif dan ada data lainnya) */}
              {selectedMajor && otherCompanies.length > 0 && (
                <div className="space-y-6 pt-4">
                  <div className="border-t border-[#E2E8F0] pt-6 text-center">
                    <p className="mx-auto max-w-xl text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                      Berikut beberapa tempat PKL lainnya yang dapat menjadi pilihan <br className="hidden sm:block" />
                      bagi siswa jurusan {selectedMajor}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 md:gap-8">
                    {otherCompanies.map((company) => {
                      const logoUrl = getStrapiMediaUrl(company.logo?.url);
                      const mainMajor =
                        company.jurusan_utama ||
                        company.jurusan_diterima?.[0] ||
                        '-';
                      const categoryDescription =
                        company.bidang?.nama ||
                        company.kategori?.nama ||
                        'Perusahaan / Instansi';

                      return (
                        <CompanyCard
                          key={company.id}
                          id={company.id}
                          name={company.nama}
                          logo={logoUrl}
                          description={categoryDescription}
                          major={mainMajor}
                          slug={company.slug}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-base text-[#7A7F8C]">
                Tempat PKL tidak ditemukan.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CatalogTemplate;