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

  return (
    <div className="min-h-screen bg-white">
      <SearchFilter
        selectedMajor={selectedMajor}
        onSearch={(value) => setKeyword(value)}
        onFilter={(major) => setSelectedMajor(major)}
      />
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-10 text-2xl font-bold text-[#211B55]">
            Daftar Tempat PKL
          </h1>

          {isLoading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-base text-[#7A7F8C]">Memuat tempat PKL...</p>
            </div>
          ) : companiesData.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

              {companiesData.map((company) => {
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
                  <div
                    key={company.id}
                    className="[&>article]:w-full"
                  >
                    <CompanyCard
                      id={company.id}
                      name={company.nama}
                      logo={logoUrl}
                      description={categoryDescription}
                      major={mainMajor}
                      slug={company.slug}
                    />
                  </div>
                );
              })}

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