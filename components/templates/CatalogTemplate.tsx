"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "../organisms/SearchFilter";
import CompanyCard from "../organisms/CompanyCard";
import Footer from "../organisms/Footer";

const companies = [
  {
    id: 1,
    name: "PT. Sawala Technology",
    logo: "/img/Sawala.webp",
    description: "Software House & UI/UX",
    major: "Pengembangan Perangkat Lunak dan Gim",
  },
  {
    id: 2,
    name: "PT. Global Edutipa Informatika",
    logo: "/img/EDUTIPA.jpeg",
    description: "Software House & UI/UX",
    major: "Pengembangan Perangkat Lunak dan Gim",
  },
  {
    id: 3,
    name: "BJB Bank Branch Sumedang",
    logo: "/img/BANK BJB.jpeg",
    description: "Perbankan",
    major: "Akuntansi dan Keuangan Lembaga",
  },
  {
    id: 4,
    name: "Bank Mandiri Taspen",
    logo: "/img/mandiri-taspen.jpeg",
    description: "Perbankan",
    major: "Akuntansi dan Keuangan Lembaga",
  },
  {
    id: 5,
    name: "Dinas Pendidikan",
    logo: "/img/dinas-pendidikan.jpeg",
    description: "Administrasi dan pelayanan",
    major: "Manajemen Perkantoran dan Layanan Bisnis",
  },
  {
    id: 6,
    name: "Dinas Arsip dan Perpustakaan",
    logo: "/img/dinas arsip perpus.jpeg",
    description: "Administrasi dan kearsipan",
    major: "Manajemen Perkantoran dan Layanan Bisnis",
  },
  {
    id: 7,
    name: "Plaza Asia Sumedang",
    logo: "/img/Asia Plaza.jpeg",
    description: "Retail dan pelayanan pelanggan",
    major: "Pemasaran",
  },
  {
    id: 8,
    name: "Griya Plaza Sumedang",
    logo: "/img/Griya.jpeg",
    description: "Retail dan pelayanan pelanggan",
    major: "Pemasaran",
  },
];

const CatalogTemplate = () => {
  const searchParams = useSearchParams();

  const initialMajor = searchParams.get("jurusan") || "";

  const [companiesData, setCompaniesData] = useState(companies);
  const [keyword, setKeyword] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(initialMajor);

  // Mengikuti perubahan jurusan dari URL
  useEffect(() => {
    setSelectedMajor(searchParams.get("jurusan") || "");
  }, [searchParams]);

  // Search dan filter yang sudah ada
  useEffect(() => {
    const result = companies.filter((company) => {
      const matchKeyword = company.name
        .toLowerCase()
        .includes(keyword.toLowerCase());

      const matchMajor =
        selectedMajor === "" || company.major === selectedMajor;

      return matchKeyword && matchMajor;
    });

    setCompaniesData(result);
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

          {companiesData.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {companiesData.map((company) => (
                <div
                  key={company.id}
                  className="[&>article]:w-full">
                  <CompanyCard
                    name={company.name}
                    logo={company.logo}
                    description={company.description}
                    major={company.major}
                  />
                </div>
              ))}
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