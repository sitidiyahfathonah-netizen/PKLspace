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
  layout?: "responsive" | "vertical" | "horizontal";
}

export const CompanyCard = ({
  id,
  name,
  logo,
  description,
  major,
  slug,
  className = "",
  layout = "responsive",
}: CompanyCardProps) => {
  const detailHref = slug
    ? `/katalog/${slug}`
    : id !== undefined
      ? `/katalog/${id}`
      : "/katalog";

  const isVertical = layout === "vertical";

  return (
    <article
      className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-3.5 md:p-5 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between ${className}`}
    >
      {/* 
        MOBILE: Kanan-kiri (Flex Row - Foto di Kiri, Teks di Kanan)
        DESKTOP (md:): Atas-bawah (Flex Col - Foto di Atas, Teks di Bawah)
      */}
      <div
        className={
          isVertical
            ? "flex flex-col items-stretch"
            : "flex flex-row md:flex-col items-center md:items-stretch gap-3 sm:gap-3.5 md:gap-0"
        }
      >
        {/* LOGO CONTAINER: Kotak di mobile samping, penuh di desktop */}
        <div
          className={
            isVertical
              ? "relative flex h-[130px] md:h-[180px] w-full shrink-0 mb-3 md:mb-4 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-3 md:p-4"
              : "relative flex h-[100px] w-[120px] sm:h-[105px] sm:w-[130px] md:h-[180px] md:w-full shrink-0 md:mb-4 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 sm:p-3 md:p-4"
          }
        >
          <Image
            src={logo}
            alt={`Logo ${name}`}
            fill
            sizes="(max-width: 768px) 130px, (max-width: 1200px) 40vw, 500px"
            className="object-contain p-1.5 sm:p-2"
            unoptimized
          />
        </div>

        {/* INFO CONTAINER */}
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3
            className="line-clamp-2 text-sm sm:text-base md:text-lg font-bold text-[#181838] leading-snug"
            title={name}
          >
            {name}
          </h3>

          <p className="mt-0.5 sm:mt-1 line-clamp-1 text-xs md:text-sm text-slate-500">
            {description}
          </p>

          {/* Badge Jurusan */}
          <div className="mt-2 sm:mt-2.5">
            <div className="inline-flex max-w-full items-center gap-1.5 rounded-xl md:rounded-full bg-[#CCE1FF] px-2.5 py-1 text-[10px] sm:text-xs font-medium text-[#1E254B] leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0 text-[#1E254B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                />
                <rect
                  x="10.5"
                  y="11"
                  width="3"
                  height="2.5"
                  rx="0.5"
                  strokeWidth={1.5}
                />
              </svg>
              <span className="leading-tight line-clamp-2 break-words">
                {major}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TOMBOL DETAIL: Membentang penuh di bawah */}
      <div className="mt-3 sm:mt-3.5 md:mt-4">
        <Link
          href={detailHref}
          className="flex w-full items-center justify-center rounded-xl bg-[#181838] py-2 sm:py-2.5 md:py-3 text-center text-sm md:text-base font-bold text-white transition duration-200 hover:bg-[#252554] active:scale-[0.98]"
        >
          Detail
        </Link>
      </div>
    </article>
  );
};

export default CompanyCard;
