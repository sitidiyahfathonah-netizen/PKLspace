type LocationMapProps = {
  address: string;
};

const LocationMap = ({ address }: LocationMapProps) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div>
      {/* Placeholder Map */}
      <div className="flex h-44 w-full items-center justify-center rounded-xl bg-[#CCD2DE]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-10 w-10 text-[#6D7588]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
          />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      </div>

      {/* Tombol Google Maps */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#211B55] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#39339A]"
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
            d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
          />
          <circle cx="12" cy="10" r="2.5" />
        </svg>

        <span>Lihat di Google Maps</span>
      </a>
    </div>
  );
};

export default LocationMap;