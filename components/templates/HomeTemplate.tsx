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
    name: "Bank BJB",
    logo: "/img/BANK BJB.jpeg",
    description:
      "Tempat PKL di bidang perbankan dan pengelolaan keuangan.",
    major: "Akuntansi dan Keuangan Lembaga",
  },
  {
    id: 5,
    name: "Bank Mandiri Taspen",
    logo: "/img/mandiri-taspen.jpeg",
    description:
      "Tempat PKL di bidang perbankan dan administrasi keuangan.",
    major: "Akuntansi dan Keuangan Lembaga",
  },
  {
    id: 6,
    name: "BPR Cimalaka",
    logo: "/img/BPR Cimalaka.jpeg",
    description:
      "Tempat PKL di bidang perbankan dan pencatatan keuangan.",
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
    <div className="min-h-screen bg-white">

      {/* SCROLL 1 */}
      <section className="flex min-h-[calc(100vh-80px)] flex-col">
        <div className="h-1/2 min-h-0">
          <Hero />
        </div>

        <div className="h-1/2 min-h-0">
          <TipsBanner />
        </div>
      </section>

      {/* Bagian tampilan kedua */}
      <section className="min-h-screen">
        <Recommendation companies={companies} />
      </section>

      <Footer />
    </div>
  );
};

export default HomeTemplate;