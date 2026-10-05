const Footer = () => {
  return (
    <footer className="w-full bg-[#211B55] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-8 py-8 md:grid-cols-3">

        {/* Identitas */}
        <div>
          <h2 className="text-lg font-bold">
            PKLspace
          </h2>

          <p className="mt-2 max-w-[320px] text-xs leading-relaxed text-[#D9D8E8]">
            Platform informasi tempat Praktik Kerja Lapangan
            untuk membantu siswa menemukan tempat PKL yang sesuai
            dengan jurusannya.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-sm font-semibold">
            Navigasi
          </h3>

          <ul className="mt-3 space-y-2 text-xs text-[#D9D8E8]">
            <li>
              <a href="/" className="transition hover:text-white">
                Beranda
              </a>
            </li>

            <li>
              <a href="/katalog" className="transition hover:text-white">
                Katalog
              </a>
            </li>

            <li>
              <a href="/tentang" className="transition hover:text-white">
                Tentang
              </a>
            </li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="text-sm font-semibold">
            Bantuan
          </h3>

          <ul className="mt-3 space-y-2 text-xs text-[#D9D8E8]">
            <li>
              <a href="/faq" className="transition hover:text-white">
                FAQ
              </a>
            </li>

            <li>
              <a href="/kontak" className="transition hover:text-white">
                Kontak
              </a>
            </li>

            <li>
              <a href="/laporkan-informasi" className="transition hover:text-white">
                Laporkan Informasi
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-[#4A4675]">
        <div className="mx-auto max-w-[1200px] px-8 py-4 text-center text-[10px] text-[#D9D8E8]">
          © {new Date().getFullYear()} PKLspace — SMKN 2 Sumedang
        </div>
      </div>
    </footer>
  );
};

export default Footer;