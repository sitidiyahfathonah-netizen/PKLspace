"use client";

import Image from "next/image";
import Footer from "@/components/organisms/Footer";

export const AboutTemplate = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between">
      <div>
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[530px] flex items-center overflow-hidden bg-blue-100/50">
          <Image
            src="/img/tentang.png"
            alt="Hero Background About PKL Space"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom sm:object-right-bottom z-0"
          />

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-[260px] sm:max-w-md md:max-w-[662px]">
              <h1 className="text-base sm:text-2xl md:text-3xl font-bold text-blue-950 mb-1.5 sm:mb-3">
                Mengenal Aplikasi PKLspace
              </h1>
              <p className="text-[10px] sm:text-sm md:text-base font-light leading-relaxed sm:leading-normal text-blue-900">
                Aplikasi PKL hadir untuk membantu siswa SMK dalam menemukan
                informasi tempat PKL yang sesuai dengan jurusan mereka. Kami
                percaya bahwa pengalaman PKL adalah langkah penting menuju masa
                depan karier yang lebih baik.
              </p>
            </div>
          </div>
        </section>

        <section className="min-h-auto lg:min-h-[567px] flex items-center py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 bg-blue-50">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-blue-950 mb-1.5 sm:mb-2">
              Solusi Mudah untuk Mencari Tempat PKL
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-900 max-w-xl mx-auto mb-6 sm:mb-10 lg:mb-12 leading-relaxed">
              Aplikasi PKL adalah platform yang menyediakan informasi lengkap
              mengenai tempat PKL, mulai dari detail perusahaan, jurusan yang
              diterima, hingga lokasi agar mudah diakses oleh siswa SMK
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-0 rounded-2xl border border-blue-300/80 lg:border-0 bg-white lg:bg-transparent shadow-xs lg:shadow-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-2 sm:mb-4 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5 3.5a7 7 0 1 0 4.384 12.443l4.836 4.836a1 1 0 0 0 1.414-1.414l-4.836-4.836A7 7 0 0 0 10.5 3.5Zm-4.5 7a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xs sm:text-sm text-[#211B55] mb-1">
                  Daftar Tempat PKL
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-900 leading-tight sm:leading-normal max-w-[210px] mx-auto">
                  Temukan berbagai tempat PKL dari berbagai industri dan
                  jurusan.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-0 rounded-2xl border border-blue-300/80 lg:border-0 bg-white lg:bg-transparent shadow-xs lg:shadow-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-2 sm:mb-4 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5L13.5 2H6Zm8 1.5 4.5 4.5H14V3.5ZM8 12a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 12Zm0 3a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 15Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 8 18Z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xs sm:text-sm text-[#211B55] mb-1">
                  Detail informasi Lengkap
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-900 leading-tight sm:leading-normal max-w-[210px] mx-auto">
                  Lihat infomasi lengkap mengenai profil perusahaan, program,
                  dan persyaratan.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-0 rounded-2xl border border-blue-300/80 lg:border-0 bg-white lg:bg-transparent shadow-xs lg:shadow-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-2 sm:mb-4 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-4.87 4.87a3 3 0 0 0-.879 2.121v3.66a2.25 2.25 0 0 1-1.244 2.013L10.5 21.75V14.89a3 3 0 0 0-.879-2.121l-4.87-4.87a3 3 0 0 1-.879-2.121V4.774c0-.897.662-1.667 1.541-1.836Z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xs sm:text-sm text-[#211B55] mb-1">
                  Filter berdasarkan Jurusan
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-900 leading-tight sm:leading-normal max-w-[210px] mx-auto">
                  Temukan tempat yang sesuai dengan jurusanmu dan keahlian yang
                  kamu miliki
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-0 rounded-2xl border border-blue-300/80 lg:border-0 bg-white lg:bg-transparent shadow-xs lg:shadow-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-2 sm:mb-4 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.75 12 7.5 12.5.75-.5 7.5-7.25 7.5-12.5C19.5 5.36 16.14 2 12 2Zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xs sm:text-sm text-[#211B55] mb-1">
                  Informasi Lokasi
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-900 leading-tight sm:leading-normal max-w-[210px] mx-auto">
                  Lihat informasi lokasi tempat pkl mu agar bisa menyesuaikan
                  jarak dengan rumah mu
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-auto lg:min-h-[481px] flex items-center py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 bg-white">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="text-center lg:text-left mb-5 sm:mb-6">
              <div className="inline-block bg-indigo-950 text-white text-xs md:text-sm font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-sm">
                Mengapa Memilih Website ini?
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
              <div className="w-full lg:max-w-[620px] border border-blue-300/80 lg:border-blue-200/80 rounded-2xl p-4 sm:p-6 md:p-8 bg-white shadow-sm">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-950 mb-2.5 sm:mb-3">
                  Dirancang Khusus untuk Kebutuhan Siswa SMK
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 text-[10px] sm:text-xs md:text-sm text-blue-900 list-disc pl-4 sm:pl-5 leading-relaxed sm:leading-normal">
                  <li>Siswa lebih mudah menemukan informasi tempat PKL.</li>
                  <li>
                    Siswa dapat memahami dan mempertimbangkan pilihan tempat PKL
                    berdasarkan informasi yang tersedia.
                  </li>
                  <li>
                    Siswa memiliki akses informasi tempat PKL yang lebih
                    terstruktur dan mudah dijangkau.
                  </li>
                  <li>
                    Siswa dapat memperoleh gambaran awal mengenai tempat PKL
                    sebelum menentukan pilihan.
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-auto flex justify-center items-center shrink-0">
                <div className="relative w-full max-w-[270px] sm:max-w-[360px] lg:max-w-[497px] lg:w-[497px] h-[180px] sm:h-[240px] lg:h-[336px] rounded-[12px]">
                  <Image
                    src="/img/about.png"
                    alt="Dirancang Khusus untuk Kebutuhan Siswa SMK"
                    fill
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 360px, 497px"
                    className="object-contain rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutTemplate;
