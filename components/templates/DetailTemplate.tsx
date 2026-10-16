"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CompanyDetail from "../organisms/CompanyDetail";
import LocationMap from "../organisms/LocationMap";
import Footer from "../organisms/Footer";
import { getCompanyBySlug, getStrapiMediaUrl } from "@/lib/api";
import type { Company } from "@/types/company";

type DetailTemplateProps = {
  slug: string;
};

const DetailTemplate = ({ slug }: DetailTemplateProps) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  
  // State untuk menyimpan ID cabang yang sedang dipilih di dropdown
  const [selectedCabangId, setSelectedCabangId] = useState<string | number>("");

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const data = await getCompanyBySlug(slug);
        setCompany(data);
      } catch (error) {
        console.error("Gagal mengambil detail perusahaan:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchDetail();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm font-semibold text-[#31559F]">Memuat detail tempat PKL...</p>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
        <p className="text-base font-semibold text-slate-700">Tempat PKL tidak ditemukan.</p>
        <Link
          href="/katalog"
          className="mt-4 rounded-lg bg-[#211B55] px-4 py-2 text-xs font-semibold text-white hover:bg-[#39339A]"
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  // --- LOGIKA CABANG DINAMIS ---
  const cabangList = company.cabangs || [];
  const activeCabang = cabangList.find((c: any) => String(c.id) === String(selectedCabangId));

  // Jika cabang dipilih, gunakan data cabang. Jika tidak, gunakan data perusahaan utama.
  const displayTitle = activeCabang?.nama || company.nama;
  const displayAddress = activeCabang?.alamat || company.alamat;
  const displayAbout = (activeCabang as any)?.ringkasan || (activeCabang ? `Cabang resmi ${company.nama} berlokasi di ${activeCabang.alamat}.` : company.informasi);
  
  // Jadwal kerja dinamis dari cabang yang dipilih (atau fallback ke perusahaan utama)
  const displayWorkHours = (activeCabang as any)?.jadwal_kerja || company.jadwal_kerja;

  // Formatting & Parsing Data Strapi
  const logoUrl = getStrapiMediaUrl(company.logo?.url);

  // Parsing Persyaratan
  const requirementsList: string[] = Array.isArray(company.persyaratan)
    ? company.persyaratan
    : company.persyaratan
    ? company.persyaratan.split("\n").map((item) => item.replace(/^[•\-\*]\s*/, "").trim()).filter(Boolean)
    : ["Tidak ada persyaratan khusus."];

  // Parsing Kegiatan
  const activitiesList: string[] = Array.isArray(company.kegiatan)
    ? company.kegiatan
    : company.kegiatan
    ? company.kegiatan.split("\n").map((item) => item.replace(/^[•\-\*]\s*/, "").trim()).filter(Boolean)
    : ["Kegiatan akan diarahkan oleh pembimbing lapangan."];

  // Parsing Posisi
  const positionsList: string[] = Array.isArray(company.posisi)
    ? company.posisi
    : company.posisi
    ? [company.posisi]
    : ["Posisi disesuaikan dengan latar belakang jurusan."];

  // Jurusan yang Diterima teks cadangan
  const acceptedMajorsText =
    company.jurusan_diterima && company.jurusan_diterima.length > 0
      ? company.jurusan_diterima.join(", ")
      : company.jurusan_utama || "Semua Jurusan";

  // --- PERBAIKAN KUOTA DINAMIS (CABANG / UTAMA) ---
  const quotaList = activeCabang && (activeCabang as any).kuota_jurusan && (activeCabang as any).kuota_jurusan.length > 0
    ? (activeCabang as any).kuota_jurusan
    : (company.kuota_jurusan || []);

  const totalQuota = quotaList.reduce((acc: number, curr: any) => acc + Number(curr.kuota || 0), 0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Tombol Kembali ke Katalog */}
        <Link
          href="/katalog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#31559F] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Kembali ke Katalog</span>
        </Link>

        {/* Header Perusahaan (Menggunakan displayTitle & displayAddress) */}
        <section className="mb-6 flex flex-row items-center gap-4 sm:gap-6 md:mb-10">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#B8C9E8] bg-white p-2 shadow-sm sm:h-36 sm:w-36 md:h-48 md:w-56 md:rounded-2xl md:p-4">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={`Logo ${displayTitle}`}
                fill
                className="object-contain p-2"
              />
            ) : (
              <div className="h-12 w-12 rounded-lg bg-[#F1F4FA] sm:h-16 sm:w-16" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold text-[#211B55] sm:text-2xl md:text-3xl leading-snug">
              {displayTitle}
            </h1>

            <p className="mt-1 text-xs text-[#5F6470] sm:text-sm">
              {company.bidang?.nama || company.kategori?.nama || "Perusahaan / Instansi"}
            </p>

            {displayAddress && (
              <div className="mt-2 flex items-start gap-1.5 sm:mt-3 sm:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#31559F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <p className="line-clamp-2 text-xs text-[#5F6470] sm:text-sm">
                  {displayAddress}
                </p>
              </div>
            )}

            <div className="mt-3">
              <span className="inline-flex rounded-full border border-[#5274C7] bg-[#D5E2FF] px-3 py-1 text-xs font-semibold text-[#31559F]">
                {company.jurusan_utama || "Semua Jurusan"}
              </span>
            </div>
          </div>
        </section>

        {/* Konten Utama */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <CompanyDetail
              about={displayAbout}
              acceptedMajors={acceptedMajorsText}
              requirements={requirementsList}
              activities={activitiesList}
              positions={positionsList}
              workHours={displayWorkHours || "Jadwal jam kerja menyesuaikan kebijakan tempat."}
              quotaList={quotaList}
            />
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-[#B8C9E8] bg-white p-4 shadow-sm sm:p-5">
            <LocationMap 
              address={displayAddress || company.alamat || company.nama} 
              companyName={company.nama}
              cabangList={cabangList}
              selectedCabangId={selectedCabangId}
              onSelectCabang={(id) => setSelectedCabangId(id)}
            />

            <div className="mt-5">
              <h2 className="text-sm font-bold text-[#211B55] sm:text-base">
                Informasi lainnya
              </h2>

              <div className="mt-3 space-y-4 border-t border-[#D9DCE5] pt-4">
                {/* Periode */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DCE8FF] text-[#31559F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <rect x="3" y="4" width="18" height="17" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-[#7A7F8C]">Periode Magang</p>
                    <p className="text-xs font-bold text-[#211B55]">
                      {company.periode || "4 bulan"}
                    </p>
                  </div>
                </div>

                {/* Kuota Keseluruhan */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DCE8FF] text-[#31559F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-[#7A7F8C]">Kuota Keseluruhan</p>
                    <p className="text-xs font-bold text-[#211B55]">
                      {totalQuota > 0 ? `${totalQuota} siswa` : "Menyesuaikan"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetailTemplate;