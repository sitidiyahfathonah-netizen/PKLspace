
import type { Company } from "@/types/company";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://pkl-space-backend-production.up.railway.app";

export async function getCompanies(params?: {
  search?: string;
  jurusan?: string;
}): Promise<Company[]> {
  try {
    const url = new URL("/api/perusahaans", API_BASE_URL);
    url.searchParams.set("pagination[pageSize]", "100");
    url.searchParams.set("populate", "*");

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Gagal memuat data perusahaan. Status: ${response.status}`
      );
    }

    const result = await response.json();
    const rawData = result.data || result;

    let companies: any[] = rawData.map((item: any) => {
      if (item.attributes) {
        return { id: item.id, ...item.attributes };
      }
      return item;
    });

    // Filter pencarian nama perusahaan
    if (params?.search?.trim()) {
      const keyword = params.search.trim().toLowerCase();

      companies = companies.filter((comp) => {
        const name = String(comp.nama || comp.name || "").toLowerCase();
        return name.includes(keyword);
      });
    }

    // Filter jurusan
    if (params?.jurusan?.trim() && params.jurusan.trim() !== "Semua") {
      const selectedMajor = params.jurusan.trim().toLowerCase();

      const getKeywords = (major: string): string[] => {
        if (major.includes("akuntansi") || major === "akl") {
          return ["akuntansi", "akl", "keuangan lembaga"];
        }

        if (
          major.includes("manajemen perkantoran") ||
          major === "mplb"
        ) {
          return ["manajemen perkantoran", "mplb", "layanan bisnis"];
        }

        if (major.includes("pemasaran") || major === "pm") {
          return ["pemasaran", "pm"];
        }

        if (
          major.includes("pengembangan perangkat lunak") ||
          major.includes("gim") ||
          major === "pplg"
        ) {
          return [
            "pplg",
            "perangkat lunak",
            "gim",
            "rpl",
            "rekayasa perangkat lunak",
          ];
        }

        return [major];
      };

      const targetKeywords = getKeywords(selectedMajor);

      const getMajorText = (value: any): string[] => {
        if (!Array.isArray(value)) return [];

        return value.map((item: any) => {
          if (typeof item === "string") return item.toLowerCase();

          if (item && typeof item === "object") {
            return String(
              item.nama || item.jurusan || item.name || ""
            ).toLowerCase();
          }

          return "";
        });
      };

      companies = companies.filter((comp) => {
        const mainMajor = String(comp.jurusan_utama || "").toLowerCase();
        const acceptedMajors = getMajorText(comp.jurusan_diterima);
        const quotaMajors = getMajorText(comp.kuota_jurusan);

        const allMajors = [
          mainMajor,
          ...acceptedMajors,
          ...quotaMajors,
        ].join(" ");

        return targetKeywords.some((keyword) =>
          allMajors.includes(keyword)
        );
      });

      // Utamakan perusahaan yang jurusan utamanya sesuai pilihan
      companies.sort((a, b) => {
        const mainA = String(a.jurusan_utama || "").toLowerCase();
        const mainB = String(b.jurusan_utama || "").toLowerCase();

        const isMainA = targetKeywords.some((keyword) =>
          mainA.includes(keyword)
        );
        const isMainB = targetKeywords.some((keyword) =>
          mainB.includes(keyword)
        );

        if (isMainA && !isMainB) return -1;
        if (!isMainA && isMainB) return 1;
        return 0;
      });
    }

    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
}

/**
 * Fetch detail perusahaan berdasarkan Slug + Fetch Cabang dari /api/cabangs
 */

export async function getCompanyBySlug(
  slug: string
): Promise<Company | null> {
  try {
    const companies = await getCompanies();

    const found = companies.find((comp: any) => {
      const compSlug =
        comp.slug ||
        (comp.nama
          ? comp.nama
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")
          : "");

      return (
        compSlug === slug ||
        String(comp.id) === slug ||
        (comp.nama &&
          comp.nama.toLowerCase().includes(slug.replace(/-/g, " ")))
      );
    });

    if (!found) {
      return null;
    }

    found.cabangs = [];

    const isAlfamart =
      found.nama && found.nama.toLowerCase().includes("alfamart");

    if (isAlfamart) {
      try {
        const cabangsRes = await fetch(`${API_BASE_URL}/api/cabangs`, {
          cache: "no-store",
        });

        if (!cabangsRes.ok) {
          throw new Error(
            `Gagal memuat data cabang. Status: ${cabangsRes.status}`
          );
        }

        const cabangsJson = await cabangsRes.json();
        const rawCabangsData = cabangsJson.data || cabangsJson;

        if (Array.isArray(rawCabangsData)) {
          found.cabangs = rawCabangsData.map((item: any) => {
            const data = item.attributes
              ? { id: item.id, ...item.attributes }
              : item;

            return {
              id: data.id || data.documentId,
              nama: data.nama,
              slug: data.slug,
              alamat: data.alamat,
              ringkasan: data.ringkasan,
              jadwal_kerja: data.jadwal_kerja,
              kuota_jurusan: data.kuota_jurusan,
              tautan_google_maps: data.tautan_google_maps,
            };
          });
        }
      } catch (err) {
        console.error("Gagal mengambil data /api/cabangs:", err);
        found.cabangs = [];
      }
    }

    return found;
  } catch (error) {
    console.error("Error fetching company by slug:", error);
    throw error;
  }
}


/**
 * Helper untuk memperbaiki URL gambar Strapi
 */
export function getStrapiMediaUrl(path: string | null | undefined): string {
  if (!path) return "/img/placeholder-company.png";

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${API_BASE_URL}${path}`;
}
