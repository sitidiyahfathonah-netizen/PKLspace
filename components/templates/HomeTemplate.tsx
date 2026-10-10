import Hero from "../organisms/Hero";
import TipsBanner from "../organisms/TipsBanner";
import Recommendation from "../organisms/Recommendation";
import Footer from "../organisms/Footer";

const companies = [
  // PPLG
  {
    id: 1,
    name: "CV Tahu Kotak Digital",
    logo: "/img/company/tahu-kotak-digital.png",
    description:
      "Tempat PKL di bidang pemrograman dan teknologi digital.",
    major: "Pengembangan Perangkat Lunak dan Gim",
  },
  {
    id: 2,
    name: "PT Global Edutipa Informatika",
    logo: "/img/EDUTIPA.jpeg",
    description:
      "Tempat PKL di bidang IT, pemrograman, dan pengembangan software.",
    major: "Pengembangan Perangkat Lunak dan Gim",
  },
  {
    id: 3,
    name: "PT Sawala Inovasi Indonesia",
    logo: "/img/Sawala.webp",
    description:
      "Tempat PKL di bidang pengembangan website dan software.",
    major: "Pengembangan Perangkat Lunak dan Gim",
  },

  // AKL
  {
    id: 4,
    name: "BJB Bank Branch Sumedang",
    logo: "/img/BANK BJB.jpeg",
    description: "Perbankan",
    major: "Akuntansi dan Keuangan Lembaga",
  },
  {
    id: 5,
    name: "Bank mandiri taspen",
    logo: "/img/mandiri-taspen.jpeg",
    description: "Perbankan",
    major: "Akuntansi dan Keuangan Lembaga",
  },
  {
    id: 6,
    name: "BPR Cimalaka",
    logo: "/img/BPR Cimalaka.jpeg",
    description: "Perbankan",
    major: "Akuntansi dan Keuangan Lembaga",
  },

  // MPLB
  {
    id: 7,
    name: "Dinas Pendidikan",
    logo: "/img/dinas-pendidikan.jpeg",
    description:
      "Tempat PKL di bidang administrasi perkantoran dan pelayanan.",
    major: "Manajemen Perkantoran dan Layanan Bisnis",
  },
  {
    id: 8,
    name: "Dinas Arsip dan Perpustakaan",
    logo: "/img/dinas arsip perpus.jpeg",
    description:
      "Tempat PKL di bidang administrasi, dokumen, dan kearsipan.",
    major: "Manajemen Perkantoran dan Layanan Bisnis",
  },
  {
    id: 9,
    name: "KPRI KPKS",
    logo: "/img/KPRI-KPKS.jpeg",
    description:
      "Tempat PKL di bidang administrasi dan pengelolaan dokumen koperasi.",
    major: "Manajemen Perkantoran dan Layanan Bisnis",
  },

  {
    id: 10,
    name: "Plaza Asia Sumedang",
    logo: "/img/Asia Plaza.jpeg",
    description:
      "Tempat PKL di bidang retail, penjualan, dan pelayanan pelanggan.",
    major: "Pemasaran",
  },
  {
    id: 11,
    name: "Griya Plaza Sumedang",
    logo: "/img/Griya.jpeg",
    description:
      "Tempat PKL di bidang retail dan pelayanan pelanggan.",
    major: "Pemasaran",
  },
  {
    id: 12,
    name: "Ria Busana Sumedang",
    logo: "/img/RIA BUSANA.jpeg",
    description:
      "Tempat PKL di bidang fashion, retail, dan penataan produk.",
    major: "Pemasaran",
  },
];

const HomeTemplate = () => {
  return (
    <div className="w-full bg-white">
      {/* Tampilan Pertama (1 Layar Desktop): Hero (50%) + TipsBanner (50%) */}
      <section className="flex flex-col md:h-[calc(100vh-76px)] md:max-h-[calc(100vh-76px)]">
        {/* Bagian Atas: Hero (50%) */}
        <div className="w-full md:h-1/2 md:min-h-0">
          <Hero />
        </div>

        {/* Bagian Bawah: TipsBanner (50%) */}
        <div className="w-full md:h-1/2 md:min-h-0">
          <TipsBanner />
        </div>
      </section>

      {/* Tampilan Kedua (1 Layar Desktop): Rekomendasi */}
      <section className="flex min-h-screen w-full flex-col justify-center md:min-h-[calc(100vh-76px)]">
        <Recommendation companies={companies} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeTemplate;

