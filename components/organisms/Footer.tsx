import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#131438] text-white">
      {/* Konten Utama Footer */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-10 sm:py-12 lg:px-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-14 md:gap-24 lg:gap-32">
          
          {/* Logo & Brand Name */}
          <div className="flex flex-col items-start">
            <Link href="/" className="group inline-flex flex-col items-start">
              <div className="relative h-20 w-28 sm:h-24 sm:w-32 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/img/Logo PKLspace.png"
                  alt="PKLspace Logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <div className="mt-1 text-2xl font-bold tracking-tight">
                <span className="text-[#3b82f6]">PKL</span>
                <span className="text-[#93c5fd]">space</span>
              </div>
            </Link>
          </div>

          {/* Kolom Navigasi */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-white tracking-wide">
              Navigasi
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-[#B4B9DB]">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog"
                  className="transition-colors hover:text-white">
                  Katalog
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="transition-colors hover:text-white">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-white tracking-wide">
              Kontak
            </h3>
            <ul className="mt-3.5 space-y-3 text-sm text-[#B4B9DB]">
              <li>
                <a
                  href="tel:0261201531"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                  <span>0261201531</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:smkn2sumedang@yahoo.com"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                  <span>smkn2sumedang@yahoo.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Garis Pembatas & Copyright */}
      <div className="border-t border-[#2b2d5c]">
        <div className="mx-auto max-w-7xl px-6 py-4 text-left text-xs text-[#8d93be] sm:px-10 lg:px-16">
          © 2026 PKLspace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;