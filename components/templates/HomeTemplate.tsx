import Hero from "../organisms/Hero";
import TipsBanner from "../organisms/TipsBanner";
import Recommendation from "../organisms/Recommendation";
import Footer from "../organisms/Footer";
import { getCompanies, getStrapiMediaUrl } from "@/lib/api";

const recommendationGroups = [
  {
    major: "Pengembangan Perangkat Lunak & Gim",
    companies: [
      ["sawala"],
      ["PT Sawarga Digital Indonesia"],
      ["global edutipa"],
    ],
  },
  {
    major: "Pemasaran",
    companies: [["griya"], ["plaza asia"], ["alfamart"]],
  },
  {
    major: "Manajemen Perkantoran dan Layanan Bisnis",
    companies: [
      ["badan pertanahan nasional", "bpn sumedang"],
      ["len"],
      ["bapperida", "badan perencanaan pembangunan riset dan inovasi daerah"],
    ],
  },
  {
    major: "Akuntansi dan Keuangan Lembaga",
    companies: [
      ["bjb"],
      ["bpr cimalaka", "bpr karpana tasia"],
      ["badan keuangan dan aset daerah", "bkad"],
    ],
  },
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const matchesName = (companyName: string, aliases: string[]) => {
  const name = normalize(companyName);
  const words = name.split(/\s+/);

  return aliases.some((alias) => {
    const normalizedAlias = normalize(alias);

    if (normalizedAlias.length <= 4) {
      return words.includes(normalizedAlias);
    }

    return name.includes(normalizedAlias);
  });
};

const HomeTemplate = async () => {
  let companies: Awaited<ReturnType<typeof getCompanies>> = [];

  try {
    companies = await getCompanies();
  } catch (error) {
    console.error("Gagal memuat rekomendasi di halaman beranda:", error);
  }

  const recommendationCompanies = recommendationGroups.flatMap((group) =>
    group.companies.flatMap((aliases) => {
      const company = companies.find((item) => matchesName(item.nama, aliases));

      if (!company) return [];

      return [
        {
          id: company.id,
          name: company.nama,
          logo: getStrapiMediaUrl(company.logo?.url),
          description:
            company.bidang?.nama ||
            company.kategori?.nama ||
            "Perusahaan / Instansi",
          major: group.major,
          majors: [group.major],
          slug: company.slug,
        },
      ];
    }),
  );

  return (
    <div className="w-full bg-white">
      <section className="flex flex-col md:h-[calc(100vh-88px)] md:max-h-[calc(100vh-88px)]">
        <div className="w-full md:h-1/2 md:min-h-0">
          <Hero />
        </div>

        <div className="w-full md:h-1/2 md:min-h-0">
          <TipsBanner />
        </div>
      </section>

      <section className="flex min-h-screen w-full flex-col justify-center md:min-h-[calc(100vh-88px)]">
        <Recommendation companies={recommendationCompanies} />
      </section>

      <Footer />
    </div>
  );
};

export default HomeTemplate;
