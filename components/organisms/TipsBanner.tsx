'use client';

import { useEffect, useRef, useState } from 'react';

const tips = [
  {
    number: '1',
    title: 'Checklist CV Magang ATS-Friendly',
    items: [
      'Format Rapi : Gunakan font standar (Inter/Arial) & simpan format PDF.',
      'Highlight Skill : Tampilkan tools/software yang paling dikuasai.',
      'Sertakan Proyek : Masukkan tugas sekolah/proyek yang relevan.',
    ],
  },
  {
    number: '2',
    title: 'Trik Sukses Interview PKL',
    items: [
      'Riset Tempat : Pelajari profil & bidang usaha perusahaan tujuan.',
      'Jawab Jujur : Pakai rumus Pendidikan + Keahlian + Alasan Lamut.',
      'Persiapan Teknis : Cek koneksi & mik jika interview via online.',
    ],
  },
  {
    number: '3',
    title: 'Tips Laporan Selesai Tepat Waktu',
    items: [
      'Cicil Logbook : Catat tugas harian setiap sore di catatan HP.',
      'Dokumentasi Proyek : Simpan foto & bukti hasil kerja secara berkala.',
      'Konsultasi Rutin : Minta feedback pembimbing sebelum deadline.',
    ],
  },
];

function TipCard({ tip }: { tip: (typeof tips)[number] }) {
  return (
    <article className="flex w-full flex-1 items-center rounded-xl border-2 border-[#211B55] bg-[#DCE8FF] px-4 py-3 text-[#211B55] sm:px-5">
      {/* Nomor dan garis pemisah */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <span className="w-10 text-center text-5xl font-bold leading-none sm:w-12 sm:text-6xl">
          {tip.number}
        </span>
        <div className="h-20 w-px shrink-0 bg-[#211B55]" />
      </div>

      {/* Isi tips */}
      <div className="min-w-0 flex-1 pl-3 sm:pl-4">
        <h3 className="mb-1 text-center text-sm font-bold leading-snug sm:text-base">
          {tip.title}
        </h3>
        <ul className="list-disc space-y-0.5 pl-4 text-[13px] leading-[1.45] sm:text-sm">
          {tip.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Konten gambar – dipakai di slide pertama dan clone                   */
/* ------------------------------------------------------------------ */
function ImageSlide() {
  return (
    <div className="flex h-full w-full items-center justify-center px-1">
      <img
        src="/img/tips-banner-pkl.png"
        alt="Tips menghadapi PKL"
        draggable={false}
        className="max-h-full max-w-full rounded-lg border border-[#211B55] object-contain"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Komponen utama                                                        */
/* ------------------------------------------------------------------ */
const TipsBanner = () => {
  // currentIndex mengikuti posisi track (termasuk clone di akhir)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Saat true, matikan CSS transition supaya jump instan tanpa animasi
  const [isJumping, setIsJumping] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* -- Deteksi ukuran layar -- */
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => {
      setIsMobile(mq.matches);
      setCurrentIndex(0);
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  /* ----------------------------------------------------------------
   * Daftar slide NYATA (tanpa clone).
   * Mobile : [gambar, tip1, tip2, tip3]        → 4 slide
   * Desktop: [gambar, semua-kartu]              → 2 slide
   * ---------------------------------------------------------------- */
  const realSlides = mounted && isMobile
    ? [
        <ImageSlide key="img" />,
        ...tips.map((tip) => (
          <div key={tip.number} className="flex h-full w-full items-center px-1">
            <TipCard tip={tip} />
          </div>
        )),
      ]
    : [
        <ImageSlide key="img" />,
        <div key="cards" className="flex h-full w-full items-stretch gap-4 px-1 lg:gap-5">
          {tips.map((tip) => (
            <div key={tip.number} className="flex min-w-0 flex-1">
              <TipCard tip={tip} />
            </div>
          ))}
        </div>,
      ];

  const totalReal = realSlides.length;

  // Track = [...slide nyata, clone slide-0] agar loop maju terasa mulus
  const trackSlides = [...realSlides, <ImageSlide key="clone-img" />];
  const trackCount = trackSlides.length; // totalReal + 1

  /* -- Dot indicator menunjuk ke slide nyata -- */
  const dotIndex = currentIndex >= totalReal ? 0 : currentIndex;

  /* -- Auto-advance setiap 3 detik -- */
  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => window.clearInterval(id);
  }, [isPaused]);

  /* -- Saat animasi selesai, jika berada di clone langsung jump ke aslinya -- */
  const handleTransitionEnd = () => {
    if (currentIndex >= totalReal) {
      // Matikan transisi, pindah ke slide asli
      setIsJumping(true);
      setCurrentIndex(0);
    }
  };

  // Setelah state jumping selesai di-render, aktifkan kembali transisi
  useEffect(() => {
    if (isJumping) {
      // Biarkan render tanpa transisi dulu, lalu nyalakan lagi
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsJumping(false));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isJumping]);

  // Pause saat hover / sentuh, resume saat keluar / lepas
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-[#C9D5FF] px-4 py-4 md:px-8 md:py-2">
      <div className="flex h-full w-full max-w-[1200px] flex-col items-center justify-center">

        {/* Heading */}
        <div className="mb-2 flex shrink-0 items-center justify-center gap-2 sm:mb-2.5 sm:gap-4 md:gap-5">
          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-14 md:w-16 lg:w-20" />
          <h2 className="text-sm font-bold tracking-wide text-[#1E1B4B] sm:text-base md:text-lg lg:text-xl">
            Tips Singkat Untuk PKL
          </h2>
          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-14 md:w-16 lg:w-20" />
        </div>

        {/* Carousel viewport */}
        <div
          className="min-h-0 w-full min-w-0 flex-1 overflow-hidden"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
          onTouchCancel={handleResume}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex h-full items-stretch"
            style={{
              width: `${trackCount * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / trackCount}%)`,
              transition: isJumping ? 'none' : 'transform 700ms ease-in-out',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {trackSlides.map((slide, i) => (
              <div
                key={i}
                className="flex h-full items-stretch"
                style={{ width: `${100 / trackCount}%` }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicator */}
        <div className="mt-2 flex shrink-0 items-center justify-center gap-1.5">
          {Array.from({ length: totalReal }).map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === dotIndex ? 'w-4 bg-[#211B55]' : 'w-1.5 bg-[#211B55]/30'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TipsBanner;
