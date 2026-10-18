"use client";

import { useState } from "react";

type QuotaItem = {
  id?: number | string;
  jurusan: string;
  kuota: number | string;
};

type CompanyDetailProps = {
  about: string;
  acceptedMajors: string;
  requirements: string[];
  activities: string[];
  positions: string[];
  workHours: string;
  quotaList?: QuotaItem[];
};

// Helper untuk merender teks markdown sederhana (**teks**) menjadi HTML tebal
const renderMarkdownText = (text: string) => {
  if (!text) return null;

  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-[#211B55]">
          {content}
        </strong>
      );
    }
    return part;
  });
};

const CompanyDetail = ({
  about,
  acceptedMajors,
  requirements,
  activities,
  positions,
  workHours,
  quotaList = [],
}: CompanyDetailProps) => {
  const [activeTab, setActiveTab] = useState("Informasi Tempat");

  const tabs = [
    "Informasi Tempat",
    "Persyaratan",
    "Kegiatan",
    "Posisi",
    "Jadwal kerja",
  ];

  // Cek apakah menerima lebih dari 1 jurusan
  const isMultipleMajors = quotaList.length > 1;

  return (
    <section className="min-h-[430px] overflow-hidden rounded-2xl border border-[#B8C9E8] bg-white shadow-sm">
      {/* Tabs Navigasi */}
      <div className="overflow-x-auto border-b border-[#D9DCE5] px-4 sm:px-6">
        <div className="flex min-w-max gap-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer py-4 text-xs font-semibold transition ${
                  isActive
                    ? "border-b-2 border-[#211B55] text-[#211B55]"
                    : "text-[#8A92A3] hover:text-[#211B55]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Isi Tab */}
      <div className="p-4 sm:p-6 md:p-8">
        {activeTab === "Informasi Tempat" && (
          <div>
            {/* Tentang Tempat */}
            <h2 className="text-base font-bold text-[#211B55]">
              Tentang Tempat
            </h2>
            <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#5F6470]">
              {renderMarkdownText(about)}
            </p>

            {/* Jurusan dan Kuota yang Diterima */}
            <h2 className="mt-8 text-base font-bold text-[#211B55]">
              Jurusan dan Kuota yang diterima
            </h2>

            {/* Banner Peringatan (Disclaimer) */}
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#DCE8FF] px-4 py-2.5 text-xs text-[#31559F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <p className="font-medium">
                {isMultipleMajors
                  ? "Perlu diingat Jurusan dan Kuota ini tidak tetap dan bisa berubah sewaktu-waktu !!"
                  : "Perlu diingat Kuota ini bukan kuota tetap dan bisa berubah sewaktu-waktu !!"}
              </p>
            </div>

            {/* List Kartu Jurusan & Kuota */}
            <div className="mt-4 space-y-3">
              {quotaList.length > 0 ? (
                quotaList.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="flex items-center justify-between rounded-xl border border-[#B8C9E8] bg-white p-3.5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F4FA] text-[#31559F]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <rect
                            x="2"
                            y="7"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-[#211B55] md:text-sm">
                        {item.jurusan}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-[#8A92A3]">menerima </span>
                      <span className="text-xs font-bold text-[#31559F] md:text-sm">
                        {item.kuota} Kuota
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-[#B8C9E8] p-4 text-xs text-[#5F6470]">
                  {acceptedMajors}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "Persyaratan" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">Persyaratan</h2>
            <ul className="mt-4 space-y-3">
              {requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs md:text-sm leading-relaxed text-[#5F6470]"
                >
                  <span className="font-bold text-[#31559F]">•</span>
                  <span>{renderMarkdownText(requirement)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Kegiatan" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">Kegiatan</h2>
            <ul className="mt-4 space-y-3">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs md:text-sm leading-relaxed text-[#5F6470]"
                >
                  <span className="font-bold text-[#31559F]">•</span>
                  <span>{renderMarkdownText(activity)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Posisi" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">Posisi</h2>
            <ul className="mt-4 space-y-3">
              {positions.map((position, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs md:text-sm leading-relaxed text-[#5F6470]"
                >
                  <span className="font-bold text-[#31559F]">•</span>
                  <span>{renderMarkdownText(position)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Jadwal kerja" &&
          (() => {
            // Memecah teks workHours berdasarkan heading yang ada di Strapi
            const partsKeterangan = workHours.split(/Keterangan:\s*/i);
            const mainPart = partsKeterangan[0];
            const keteranganText = partsKeterangan[1]
              ? partsKeterangan[1].trim()
              : "";

            const partsShift = mainPart.split(/Jadwal Shift[^:]*:\s*/i);
            const jadwalKerjaText = partsShift[0]
              .replace(/Jadwal Tempat & Sistem Jam Kerja:\s*/i, "")
              .trim();
            const jadwalShiftText = partsShift[1] ? partsShift[1].trim() : "";

            return (
              <div>
                <h2 className="text-base font-bold text-[#211B55]">
                  Jadwal & Sistem Kerja
                </h2>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#5F6470]">
                  {renderMarkdownText(jadwalKerjaText)}
                </p>

                {jadwalShiftText && (
                  <>
                    <h2 className="mt-6 text-base font-bold text-[#211B55]">
                      Jadwal Shift (bisa berubah tergantung pembimbing)
                    </h2>
                    <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#5F6470]">
                      {renderMarkdownText(jadwalShiftText)}
                    </p>
                  </>
                )}

                {keteranganText && (
                  <>
                    <h2 className="mt-6 text-base font-bold text-[#211B55]">
                      Keterangan
                    </h2>
                    <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#5F6470]">
                      {renderMarkdownText(keteranganText)}
                    </p>
                  </>
                )}
              </div>
            );
          })()}
      </div>
    </section>
  );
};

export default CompanyDetail;
