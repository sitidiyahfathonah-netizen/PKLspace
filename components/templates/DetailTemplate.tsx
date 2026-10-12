
import Link from "next/link";
import CompanyDetail from "../organisms/CompanyDetail";
import LocationMap from "../organisms/LocationMap";
import Footer from "../organisms/Footer";

type DetailTemplateProps = {
  id: string;
};

const DetailTemplate = ({ id }: DetailTemplateProps) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Kembali ke katalog */}
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

        {/* Header perusahaan — baris di mobile & desktop */}
        <section className="mb-6 flex flex-row items-center gap-4 sm:gap-6 md:mb-10">
          {/* Placeholder logo — kecil di mobile, besar di desktop */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-[#B8C9E8] bg-white p-3 shadow-sm sm:h-36 sm:w-36 md:h-52 md:w-[475px] md:rounded-2xl md:p-8">
            <div className="h-12 w-12 rounded-lg bg-[#F1F4FA] sm:h-16 sm:w-16 md:h-24 md:w-24 md:rounded-xl" />
          </div>

          {/* Placeholder informasi perusahaan */}
          <div className="min-w-0 flex-1">
            {/* Nama */}
            <div className="h-5 w-3/4 rounded-md bg-[#F1F4FA] sm:h-7 md:h-9" />

            {/* Deskripsi */}
            <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
              <div className="h-3 w-full rounded bg-[#F1F4FA] sm:h-4" />
              <div className="h-3 w-5/6 rounded bg-[#F1F4FA] sm:h-4" />
            </div>

            {/* Placeholder alamat */}
            <div className="mt-2 flex items-start gap-1.5 sm:mt-3 sm:gap-2">
              <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#D5E2FF] sm:h-4 sm:w-4" />
              <div className="h-3 w-3/4 rounded bg-[#F1F4FA] sm:h-4" />
            </div>

            {/* Placeholder tag jurusan */}
            <div className="mt-3 h-6 w-36 rounded-full bg-[#D5E2FF] sm:h-7 sm:w-48" />
          </div>
        </section>

        {/* Konten utama — satu kolom di mobile, dua kolom di desktop */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Detail utama (tab: Informasi, Persyaratan, dst.) */}
          <div className="min-w-0">
            <CompanyDetail
              about=""
              acceptedMajors=""
              requirements={[]}
              activities={[]}
              positions={[]}
              workHours=""
            />
          </div>

          {/* Sidebar: muncul di bawah pada mobile, di kanan pada desktop */}
          <aside className="h-fit rounded-2xl border border-[#B8C9E8] bg-white p-4 shadow-sm sm:p-5">
            <LocationMap address="" />

            {/* Informasi lainnya */}
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
                    <p className="text-[10px] text-[#7A7F8C]">Periode</p>
                    <div className="mt-1 h-4 w-28 rounded bg-[#F1F4FA]" />
                  </div>
                </div>

                {/* Kuota */}
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
                    <p className="text-[10px] text-[#7A7F8C]">Kuota</p>
                    <div className="mt-1 h-4 w-20 rounded bg-[#F1F4FA]" />
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
