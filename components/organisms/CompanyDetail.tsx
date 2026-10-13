"use client";

import { useState } from "react";

type CompanyDetailProps = {
  about: string;
  acceptedMajors: string;
  requirements: string[];
  activities: string[];
  positions: string[];
  workHours: string;
};

const CompanyDetail = ({
  about,
  acceptedMajors,
  requirements,
  activities,
  positions,
  workHours,
}: CompanyDetailProps) => {
  const [activeTab, setActiveTab] = useState("Informasi Tempat");

  const tabs = [
    "Informasi Tempat",
    "Persyaratan",
    "Kegiatan",
    "Posisi",
    "Jadwal kerja",
  ];

  return (
    <section className="min-h-[430px] overflow-hidden rounded-2xl border border-[#B8C9E8] bg-white shadow-sm">
      {/* Tabs */}
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

      {/* Isi tab */}
      <div className="p-4 sm:p-6 md:p-8">
        {activeTab === "Informasi Tempat" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">
              Tentang Tempat
            </h2>

            <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#5F6470]">
              {about}
            </p>

            <h2 className="mt-8 text-base font-bold text-[#211B55]">
              Jurusan  yang diterima
            </h2>

            <div className="mt-3">
              <span className="inline-flex rounded-full border border-[#5274C7] bg-[#D5E2FF] px-4 py-1.5 text-xs font-medium text-[#31559F]">
                {acceptedMajors}
              </span>
            </div>
          </div>
        )}

        {activeTab === "Persyaratan" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">
              Persyaratan
            </h2>

            <ul className="mt-4 space-y-3">
              {requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs md:text-sm leading-relaxed text-[#5F6470]"
                >
                  <span className="font-bold text-[#31559F]">•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Kegiatan" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">
              Kegiatan
            </h2>

            <ul className="mt-4 space-y-3">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs md:text-sm leading-relaxed text-[#5F6470]"
                >
                  <span className="font-bold text-[#31559F]">•</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Posisi" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">
              Posisi
            </h2>

            <ul className="mt-4 space-y-3">
              {positions.map((position, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs md:text-sm leading-relaxed text-[#5F6470]"
                >
                  <span className="font-bold text-[#31559F]">•</span>
                  <span>{position}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Jadwal kerja" && (
          <div>
            <h2 className="text-base font-bold text-[#211B55]">
              Jadwal kerja
            </h2>

            <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#5F6470]">
              {workHours}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanyDetail;