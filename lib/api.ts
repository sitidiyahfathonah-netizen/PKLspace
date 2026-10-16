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

    if (!response.ok) return [];

    const result = await response.json();
    let rawData = result.data || result;

    let companies: any[] = rawData.map((item: any) => {
      if (item.attributes) {
        return { id: item.id, ...item.attributes };
      }
      return item;
    });

    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}

/**
 * Fetch detail perusahaan berdasarkan Slug + Fetch Cabang dari /api/cabangs
 */
export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  try {
    const companies = await getCompanies();
    
    if (companies.length === 0) return null;

    // Cari yang slug atau namanya paling mendekati dengan URL
    let found = companies.find((comp: any) => {
      const compSlug = comp.slug || (comp.nama ? comp.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : "");
      return compSlug === slug || String(comp.id) === slug || (comp.nama && comp.nama.toLowerCase().includes(slug.replace(/-/g, " ")));
    });

    if (!found) {
      found = companies[0];
    }

    // Default set cabangs kosong
    found.cabangs = [];

    // Cek apakah perusahaan ini berjejaring/memiliki cabang (misal: Alfamart)
    const isAlfamart = found.nama && found.nama.toLowerCase().includes("alfamart");

    if (isAlfamart) {
      try {
        const cabangsRes = await fetch(`${API_BASE_URL}/api/cabangs`, {
          cache: "no-store",
        });

        if (cabangsRes.ok) {
          const cabangsJson = await cabangsRes.json();
          const rawCabangsData = cabangsJson.data || cabangsJson;

          if (Array.isArray(rawCabangsData)) {
            found.cabangs = rawCabangsData.map((item: any) => ({
              id: item.id || item.documentId,
              nama: item.nama || item.attributes?.nama,
              slug: item.slug || item.attributes?.slug,
              alamat: item.alamat || item.attributes?.alamat,
              ringkasan: item.ringkasan || item.attributes?.ringkasan,
              jadwal_kerja: item.jadwal_kerja || item.attributes?.jadwal_kerja,
              kuota_jurusan: item.kuota_jurusan || item.attributes?.kuota_jurusan, // <--- MAP KUOTA JURUSAN CABANG
              tautan_google_maps: item.tautan_google_maps || item.attributes?.tautan_google_maps,
            }));
          }
        }
      } catch (err) {
        console.error("Gagal mengambil data /api/cabangs:", err);
        found.cabangs = [];
      }
    }

    return found;
  } catch (error) {
    console.error("Error fetching company by slug:", error);
    const companies = await getCompanies();
    return companies[0] || null;
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