import Link from "next/link";

type CompanyCardProps = {
  id?: number;
  name: string;
  logo: string;
  description: string;
  major: string;
  className?: string;
};

const CompanyCard = ({
  id,
  name,
  logo,
  description,
  major,
  className = "",
}: CompanyCardProps) => {
  return (
    <article
      className={`flex h-full w-full flex-col justify-between rounded-2xl border-2 border-[#5274C7] bg-white p-4 shadow-sm transition-all duration-300 sm:p-5 ${className}`}
    >
      <div>
        {/* Logo Container */}
        <div className="flex h-[120px] w-full items-center justify-center rounded-xl border border-[#9BB0DF] bg-white p-3 sm:h-[150px] sm:p-4">
          <img
            src={logo}
            alt={`Logo ${name}`}
            className="max-h-full max-w-full object-contain select-none"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="mt-3.5 sm:mt-4">
          <h3
            className="text-base font-bold text-[#1A2E63] sm:text-lg line-clamp-1"
            title={name}
          >
            {name}
          </h3>

          <p className="mt-1 text-xs text-[#5F6B84] sm:text-sm line-clamp-1">
            {description}
          </p>

          {/* Major Badge with Briefcase Icon */}
          <div className="mt-3">
            <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#5274C7] bg-[#EAF0FF]/80 px-3 py-1 text-[11px] font-medium text-[#25448C] sm:text-xs">
              <svg
                className="h-3.5 w-3.5 shrink-0 text-[#25448C]"
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
              <span className="truncate">{major}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4 pt-1 sm:mt-5">
        {id ? (
          <Link
            href={`/katalog/${id}`}
            className="flex w-full items-center justify-center rounded-xl bg-[#1E254B] py-2.5 text-center text-xs font-semibold text-white transition duration-200 hover:bg-[#141A35] active:scale-[0.98] sm:py-3 sm:text-sm"
          >
            Detail
          </Link>
        ) : (
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-xl bg-[#1E254B] py-2.5 text-center text-xs font-semibold text-white transition duration-200 hover:bg-[#141A35] active:scale-[0.98] sm:py-3 sm:text-sm"
          >
            Detail
          </button>
        )}
      </div>
    </article>
  );
};

export default CompanyCard;