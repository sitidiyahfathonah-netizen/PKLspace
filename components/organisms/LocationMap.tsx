"use client";

type CabangItem = {
  id?: number | string;
  nama: string;
  alamat?: string;
  tautan_google_maps?: string;
};

type LocationMapProps = {
  address: string;
  companyName?: string;
  cabangList?: CabangItem[];
  selectedCabangId?: string | number;
  onSelectCabang?: (id: string | number) => void;
  hideDropdown?: boolean; // Prop baru untuk menyembunyikan dropdown jika sudah dirender di luar (mobile)
};

const LocationMap = ({
  address,
  companyName,
  cabangList = [],
  selectedCabangId = "",
  onSelectCabang,
  hideDropdown = false,
}: LocationMapProps) => {
  const activeCabang = cabangList.find(
    (c) => String(c.id) === String(selectedCabangId),
  );

  const currentAddress = activeCabang?.alamat || address;
  const currentName = activeCabang?.nama || companyName;

  const queryText = currentName
    ? `${currentName}, ${currentAddress}`
    : currentAddress;
  const mapsUrl =
    activeCabang?.tautan_google_maps ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(queryText)}`;

  const hasCabang = cabangList && cabangList.length > 0;
  const showMap = !hasCabang || (hasCabang && Boolean(selectedCabangId));

  return (
    <div>
      {/* Dropdown Pilih Cabang (Hanya tampil jika hideDropdown bernilai false) */}
      {hasCabang && !hideDropdown && (
        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-bold text-[#211B55]">
            Pilih Cabang {companyName || "Perusahaan"} :
          </label>
          <select
            value={selectedCabangId}
            onChange={(e) => onSelectCabang && onSelectCabang(e.target.value)}
            className="w-full rounded-xl border border-[#B8C9E8] bg-white px-3 py-2 text-xs font-medium text-[#211B55] outline-none transition focus:border-[#31559F]"
          >
            <option value="">-- Pilih Cabang --</option>
            {cabangList.map((cabang, idx) => (
              <option key={cabang.id || idx} value={cabang.id}>
                {cabang.nama}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Visual Peta Mini */}
      {showMap && (
        <>
          <div className="relative h-44 w-full overflow-hidden rounded-xl border border-[#B8C9E8] bg-[#E8EEF8]">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#31559F_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="absolute top-1/2 left-0 right-0 h-3 bg-white opacity-65 -translate-y-1/2 rotate-6" />
            <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-white opacity-65 -rotate-12" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#211B55] text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <div className="mt-2 rounded-md bg-white/95 px-3 py-1 shadow-sm backdrop-blur-sm">
                <p className="max-w-[220px] truncate text-[11px] font-bold text-[#211B55]">
                  {currentName || address}
                </p>
              </div>
            </div>
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
        </>
      )}
    </div>
  );
};

export default LocationMap;