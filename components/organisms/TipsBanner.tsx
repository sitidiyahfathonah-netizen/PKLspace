"use client";

import { useEffect, useState } from "react";

const tips = [
  {
    number: "1",
    title: "Checklist CV Magang ATS-Friendly",
    icon: "pencil",
    items: [
      {
        label: "Format Rapi",
        text: "Gunakan font standar (Inter/Arial) & simpan format PDF.",
      },
      {
        label: "Highlight Skill",
        text: "Tampilkan tools/software yang paling dikuasai.",
      },
      {
        label: "Sertakan Proyek",
        text: "Masukkan tugas sekolah/proyek yang relevan.",
      },
    ],
  },
  {
    number: "2",
    title: "Trik Sukses Interview PKL",
    icon: "microphone",
    items: [
      {
        label: "Riset Tempat",
        text: "Pelajari profil & bidang usaha perusahaan tujuan.",
      },
      {
        label: "Jawab Jujur",
        text: "Pakai rumus Pendidikan + Keahlian + Alasan Melamar.",
      },
      {
        label: "Persiapan Teknis",
        text: "Cek koneksi & mik jika interview via online.",
      },
    ],
  },
  {
    number: "3",
    title: "Tips Laporan Selesai Tepat Waktu",
    icon: "document",
    items: [
      {
        label: "Cicil Logbook",
        text: "Catat tugas harian setiap sore di catatan HP.",
      },
      {
        label: "Dokumentasi Proyek",
        text: "Simpan foto & bukti hasil kerja secara berkala.",
      },
      {
        label: "Konsultasi Rutin",
        text: "Minta feedback pembimbing sebelum deadline.",
      },
    ],
  },
];

function TipIcon({ type, className }: { type: string; className?: string }) {
  const defaultClasses =
    "h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 xl:h-14 xl:w-14 shrink-0";
  const iconClasses = className ?? defaultClasses;

  if (type === "pencil") {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
        className={iconClasses}
      >
        <path
          d="M15 55 54 16a7 7 0 0 1 10 0l5 5a7 7 0 0 1 0 10L30 70 12 73l3-18Z"
          stroke="currentColor"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m48 22 16 16"
          stroke="currentColor"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "microphone") {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
        className={iconClasses}
      >
        <rect
          x="30"
          y="9"
          width="20"
          height="43"
          rx="10"
          stroke="currentColor"
          strokeWidth="6.5"
        />
        <path
          d="M17 38v4a23 23 0 0 0 46 0v-4M40 65v8M26 73h28"
          stroke="currentColor"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={iconClasses}
    >
      <path
        d="M18 9h29l20 18v42a5 5 0 0 1-5 5H18a5 5 0 0 1-5-5V14a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinejoin="round"
      />
      <path
        d="M47 10v19h19"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TipCardDesktop({ tip }: { tip: (typeof tips)[number] }) {
  return (
    <article className="flex h-full min-w-0 flex-col justify-between rounded-xl border-[1.8px] border-[#211B55] bg-[#DCE9FC] px-3.5 py-2.5 text-[#211B55] sm:px-4 sm:py-3 lg:px-5 lg:py-3.5 xl:px-6 xl:py-4">
      {/* Bagian Atas: Ikon + Judul */}
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex shrink-0 items-center justify-center text-[#211B55]">
          <TipIcon type={tip.icon} />
        </div>
        <h3 className="mt-1 flex min-h-[26px] shrink-0 items-center justify-center text-center text-xs font-bold leading-tight sm:text-[13px] md:text-sm lg:text-[15px]">
          {tip.title}
        </h3>
      </div>

      {/* Garis pemisah horizontal */}
      <div className="my-1.5 h-px w-full shrink-0 bg-[#7786A6] sm:my-2 lg:my-2.5" />

      {/* Daftar tips */}
      <ul className="list-disc space-y-0.5 pl-3.5 text-[11px] leading-tight text-[#211B55] sm:space-y-1 sm:pl-4 sm:text-[11.5px] lg:text-[12px] xl:text-[12.5px] lg:leading-snug">
        {tip.items.map((item) => (
          <li key={item.label}>
            <span className="font-bold">{item.label} :</span> {item.text}
          </li>
        ))}
      </ul>
    </article>
  );
}

function TipCardMobile({ tip }: { tip: (typeof tips)[number] }) {
  return (
    <article className="flex h-full w-full items-center rounded-xl border-[1.8px] border-[#211B55] bg-[#DCE9FC] px-3.5 py-2.5 text-[#211B55] sm:px-4 sm:py-3">
      {/* Ikon di pinggir */}
      <div className="flex w-12 shrink-0 items-center justify-center text-[#211B55] sm:w-14">
        <TipIcon
          type={tip.icon}
          className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
        />
      </div>

      {/* Garis pemisah vertikal */}
      <div className="mx-2.5 h-16 w-[1.5px] shrink-0 bg-[#211B55] sm:mx-3.5 sm:h-20" />

      {/* Konten teks */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="mb-1 text-center text-xs font-bold leading-tight text-[#211B55] sm:text-[13.5px]">
          {tip.title}
        </h3>
        <ul className="list-disc space-y-0.5 pl-3.5 text-[11px] leading-[1.35] text-[#211B55] sm:space-y-1 sm:pl-4 sm:text-[12px]">
          {tip.items.map((item) => (
            <li key={item.label}>
              <span className="font-bold">{item.label} :</span> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ImageSlide() {
  return (
    <div className="flex h-full w-full items-center justify-center px-2 sm:px-3">
      <img
        src="/img/tips-banner-pkl.png"
        alt="Tips menghadapi PKL"
        draggable={false}
        className="max-h-full max-w-full rounded-xl border-[1.8px] border-[#211B55] object-contain shadow-sm"
      />
    </div>
  );
}

const TipsBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateScreen = () => {
      setIsMobile(mediaQuery.matches);
      setCurrentIndex(0);
    };

    updateScreen();
    mediaQuery.addEventListener("change", updateScreen);

    return () => mediaQuery.removeEventListener("change", updateScreen);
  }, []);

  // Slide nyata (Desktop: 2 slide [gambar, 3 kartu]. Mobile: 4 slide [gambar, tip 1, tip 2, tip 3])
  const realSlides =
    mounted && isMobile
      ? [
          <ImageSlide key="image" />,
          ...tips.map((tip) => (
            <div
              key={tip.number}
              className="flex h-full w-full items-center justify-center px-2 sm:px-2.5"
            >
              <TipCardMobile tip={tip} />
            </div>
          )),
        ]
      : [
          <ImageSlide key="image" />,
          <div
            key="cards"
            className="grid h-full w-full grid-cols-3 items-stretch gap-3 px-2 sm:gap-4 sm:px-3 lg:gap-5 lg:px-4"
          >
            {tips.map((tip) => (
              <TipCardDesktop key={tip.number} tip={tip} />
            ))}
          </div>,
        ];

  const totalReal = realSlides.length;
  // Clone slide pertama di akhir untuk infinite carousel loop yang mulus
  const trackSlides = [...realSlides, <ImageSlide key="clone-image" />];
  const trackCount = trackSlides.length;
  const dotIndex = currentIndex >= totalReal ? 0 : currentIndex;

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => previous + 1);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalReal) {
      setIsJumping(true);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isJumping) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsJumping(false);
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [isJumping]);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-[#C9D5FF] px-4 py-3 sm:py-4 md:px-8 md:py-2.5">
      <div className="flex h-full w-full max-w-[1200px] min-h-0 flex-col items-center justify-center">
        {/* Heading */}
        <div className="mb-2.5 flex shrink-0 items-center justify-center gap-2 sm:mb-3 sm:gap-4 md:gap-5">
          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-14 md:w-16 lg:w-20" />
          <h2 className="text-center text-sm font-bold tracking-wide text-[#1E1B4B] sm:text-base md:text-lg lg:text-xl">
            Tips Singkat Untuk PKL
          </h2>
          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-14 md:w-16 lg:w-20" />
        </div>

        {/* Carousel Viewport */}
        <div
          className="h-[155px] min-h-0 w-full min-w-0 overflow-hidden sm:h-[165px] md:h-full md:flex-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
        >
          <div
            className="flex h-full items-stretch"
            style={{
              width: `${trackCount * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / trackCount}%)`,
              transition: isJumping ? "none" : "transform 700ms ease-in-out",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {trackSlides.map((slide, index) => (
              <div
                key={index}
                className="flex h-full items-stretch"
                style={{ width: `${100 / trackCount}%` }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Indikator Slide */}
        <div className="mt-2 flex shrink-0 items-center justify-center gap-1.5 sm:mt-2.5">
          {Array.from({ length: totalReal }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === dotIndex ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === dotIndex
                  ? "w-4 bg-[#211B55]"
                  : "w-1.5 bg-[#211B55]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsBanner;