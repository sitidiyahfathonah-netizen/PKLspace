'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CompanyCardProps {
  name: string;
  logo: string;
  description: string;
  major: string;
  slug?: string;
}

export const CompanyCard = ({
  name,
  logo,
  description,
  major,
  slug = '#',
}: CompanyCardProps) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-indigo-200 bg-white p-4 shadow-sm transition hover:shadow-md h-full">
      <div>
        {/* Container Logo */}
        <div className="relative mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-4">
          <Image
            src={logo}
            alt={name}
            width={200}
            height={100}
            className="max-h-full w-auto object-contain"
          />
        </div>

        {/* Nama Tempat PKL */}
        <h3 className="text-lg font-bold text-[#181838]">{name}</h3>

        {/* Kategori Singkat (misal: Software House & UI/UX) */}
        <p className="mt-1 text-sm text-slate-500">{description}</p>

        {/* Badge Jurusan */}
        <div className="mt-3 mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs text-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>{major}</span>
        </div>
      </div>

      {/* Tombol Detail Full Width di Bawah */}
      <Link
        href={`/katalog/${slug}`}
        className="mt-2 flex w-full items-center justify-center rounded-xl bg-[#181838] py-2.5 text-sm font-semibold text-white transition hover:bg-[#252552]"
      >
        Detail
      </Link>
    </div>
  );
};

export default CompanyCard;