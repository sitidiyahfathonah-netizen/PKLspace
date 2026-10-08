'use client';

import Image from 'next/image';
import Footer from '@/components/organisms/Footer';

export const AboutTemplate = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      <div>
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full bg-blue-50/70 py-16 px-6 md:px-16 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl z-10">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Mengenal Aplikasi PKL SPACE
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Aplikasi PKL Space adalah platform wadah informasi yang dirancang untuk
                mempermudah siswa SMK dalam mencari tempat Praktik Kerja Lapangan (PKL)
                yang sesuai dengan jurusan dan kebutuhan mereka secara efisien dan terstruktur.
              </p>
            </div>

            {/* Ilustrasi Hero Right */}
            <div className="relative w-full md:w-[320px] h-[200px] flex justify-center items-center">
              <div className="relative w-full h-full">
                <Image
                  src="/img/about-hero-illustration.png" // Ganti dengan path gambar kamu jika ada
                  alt="Ilustrasi PKL Space"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Solusi Mudah untuk Mencari Tempat PKL
            </h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto mb-12">
              Aplikasi PKL Space menyediakan berbagai fitur unggulan untuk membantu kamu
              menemukan tempat PKL impian dengan informasi yang jelas dan akurat.
            </p>

            {/* Grid 4 Fitur */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Fitur 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-slate-900 mb-1">Pilihan Tempat PKL</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Menyediakan berbagai daftar instansi dan perusahaan yang menerima siswa PKL.
                </p>
              </div>

              {/* Fitur 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-slate-900 mb-1">Detail Informasi Lengkap</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Memuat profil perusahaan, kuota, persyaratan, serta kontak yang bisa dihubungi.
                </p>
              </div>

              {/* Fitur 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-slate-900 mb-1">Filter Berdasarkan Jurusan</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Memudahkan pencarian tempat PKL yang sesuai dengan keahlian jurusanmu.
                </p>
              </div>

              {/* Fitur 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#181838] flex items-center justify-center text-white mb-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-slate-900 mb-1">Peta Lokasi</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Dilengkapi fitur peta untuk melihat jarak dan lokasi pasti tempat PKL.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DETAIL INFO SECTION ================= */}
        <section className="py-12 px-6 md:px-16 bg-slate-50">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Card Box */}
            <div className="w-full md:w-2/3 bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
              <span className="inline-block bg-[#181838] text-white text-xs px-3 py-1 rounded-md font-medium mb-4">
                Mengapa Harus PKL Space?
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Dirancang Khusus untuk Kebutuhan Siswa SMK
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                <li>Mempermudah pencarian informasi tempat PKL terpercaya.</li>
                <li>Akses informasi cepat, transparan, dan dapat diakses di mana saja.</li>
                <li>Menghubungkan jurusan sekolah dengan kebutuhan perusahaan yang relevan.</li>
                <li>Menghemat waktu siswa dan guru dalam menentukan tempat PKL yang tepat.</li>
              </ul>
            </div>

            {/* Right Illustration */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src="/img/about-student-illustration.png" // Ganti dengan path gambar kamu jika ada
                  alt="Siswa SMK PKL Space"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default AboutTemplate;