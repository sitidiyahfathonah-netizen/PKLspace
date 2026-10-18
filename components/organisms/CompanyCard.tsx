"use client";

import Image from "next/image";
import Link from "next/link";

interface CompanyCardProps {
  id?: number;
  name: string;
  logo: string;
  description: string;
  major: string;
  slug?: string;
  className?: string;
}

export const CompanyCard = ({
  id,
  name,
  logo,
  description,
  major,
  slug,
  className = "",
}: CompanyCardProps) => {
  const detailHref = slug
    ? `/katalog/${slug}`
    : id !== undefined
      ? `/katalog/${id}`
      : "/katalog";

  return (
    <article
      className={`w-full min-h-[410px] md:min-h-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3.5 md:p-5 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between ${className}`}
    >
      {/* 
        MOBILE: Kanan-kiri (Flex Row - Foto di Kiri, Teks di Kanan)
        DESKTOP (md:): Atas-bawah (Flex Col - Foto di Atas, Teks di Bawah)
      */}
      <div className="flex flex-col items-stretch gap-3.5">
        {/* LOGO CONTAINER: Lebar di mobile, penuh di desktop */}
        <div className="relative flex h-[175px] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-3 md:mb-4 md:h-[180px] md:p-4">
          <Image
            src={logo}
            alt={`Logo ${name}`}
            fill
            sizes="(max-width: 768px) 115px, 100vw"
            className="object-contain p-1"
          />
        </div>

        {/* INFO CONTAINER */}
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3
            className="line-clamp-2 text-xs md:text-lg font-bold text-[#181838] leading-snug"
            title={name}
          >
            {name}
          </h3>

          <p className="mt-0.5 md:mt-1 line-clamp-1 text-[11px] md:text-sm text-slate-500">
            {description}
          </p>

          {/* Badge Jurusan */}
          <div className="mt-2 md:mt-3">
            <div className="inline-flex max-w-full items-center gap-1 rounded-full border border-blue-200 bg-[#EAF0FF] px-2 md:px-3 py-0.5 md:py-1 text-[9px] md:text-xs font-medium text-[#1E254B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-3.5 md:w-3.5 shrink-0 text-[#25448C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H9V5Z"
                />
              </svg>
              <span className="truncate">{major}</span>
            </div>
          </div>
        </div>
      </div>

      {/* TOMBOL DETAIL: Membentang penuh di bawah */}
      <div className="mt-3.5 md:mt-5 pt-2.5 md:pt-3 border-t border-slate-100">
        <Link
          href={detailHref}
          className="flex w-full items-center justify-center rounded-xl bg-[#181838] py-2 md:py-3 text-center text-xs md:text-sm font-semibold text-white transition duration-200 hover:bg-[#252554] active:scale-[0.98]"
        >
          Detail
        </Link>
      </div>
    </article>
  );
};

export default CompanyCard;
