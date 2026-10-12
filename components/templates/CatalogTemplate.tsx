
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "../organisms/SearchFilter";
import Footer from "../organisms/Footer";

const CatalogTemplate = () => {
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(
    searchParams.get("jurusan") || ""
  );

  useEffect(() => {
    setSelectedMajor(searchParams.get("jurusan") || "");
  }, [searchParams]);

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

          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-base text-[#7A7F8C]">
              {keyword
                ? "Pencarian akan tersedia setelah data terhubung ke Strapi."
                : selectedMajor
                  ? "Belum ada data tempat PKL untuk jurusan ini."
                  : "Data tempat PKL akan ditampilkan setelah terhubung ke Strapi."}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CatalogTemplate;
