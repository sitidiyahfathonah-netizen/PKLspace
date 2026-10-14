import type { Company } from "@/types/company";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://pkl-space-backend-production.up.railway.app";

export async function getCompanies(params?: {
  search?: string;
  jurusan?: string;
}): Promise<Company[]> {
  const url = new URL("/api/perusahaans", API_BASE_URL);

  url.searchParams.set("pagination[pageSize]", "100");
  url.searchParams.set("populate", "*");

  const response = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Gagal mengambil data perusahaan: ${response.status}`);
  }

  const result = await response.json();
  let rawData = result.data || result;

  // Normalisasi data Strapi v4/v5
  let companies: any[] = rawData.map((item: any) => {
    if (item.attributes) {
      return { id: item.id, ...item.attributes };
    }
    return item;
  });

  // 1. Filter Pencarian Nama Perusahaan
  if (params?.search?.trim()) {
    const keyword = params.search.trim().toLowerCase();
    companies = companies.filter((comp) => {
      const name = (comp.nama || comp.name || "").toLowerCase();
      return name.includes(keyword);
    });
  }

  // 2. Filter & Sorting Jurusan yang Presisi
  if (params?.jurusan && params.jurusan !== "Semua") {
    const selectedMajor = params.jurusan.trim().toLowerCase();

    // Tentukan kata kunci spesifik berdasarkan jurusan yang dipilih
    const getKeywords = (major: string) => {
      if (major.includes("akuntansi") || major === "akl") return ["akuntansi", "akl", "keuangan lembaga"];
      if (major.includes("manajemen perkantoran") || major === "mplb") return ["manajemen perkantoran", "mplb", "layanan bisnis"];
      if (major.includes("pemasaran") || major === "pm") return ["pemasaran", "pm"];
      if (major.includes("pengembangan perangkat lunak") || major.includes("gim") || major === "pplg") return ["pplg", "perangkat lunak", "gim", "rpl", "rekayasa perangkat lunak"];
      return [major];
    };

    const targetKeywords = getKeywords(selectedMajor);

    // Filter: Perusahaan harus memiliki setidaknya salah satu keyword di jurusan utama atau diterima
    companies = companies.filter((comp) => {
      const mainMajor = (comp.jurusan_utama || "").toLowerCase();
      const acceptedMajors: string[] = Array.isArray(comp.jurusan_diterima)
        ? comp.jurusan_diterima.map((m: any) => String(m).toLowerCase())
        : [];
      const combinedText = [mainMajor, ...acceptedMajors].join(" ");

      return targetKeywords.some((kw) => combinedText.includes(kw));
    });

    // Sorting: Jurusan Utama yang mengandung target keyword ditaruh paling atas
    companies.sort((a, b) => {
      const mainA = (a.jurusan_utama || "").toLowerCase();
      const mainB = (b.jurusan_utama || "").toLowerCase();

      const isMainA = targetKeywords.some((kw) => mainA.includes(kw));
      const isMainB = targetKeywords.some((kw) => mainB.includes(kw));

      if (isMainA && !isMainB) return -1;
      if (!isMainA && isMainB) return 1;
      return 0;
    });
  }

  return companies;
}

/**
 * Fetch detail perusahaan berdasarkan Slug
 */
export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  try {
    const url = new URL(`/api/perusahaans/${slug}`, API_BASE_URL);
    url.searchParams.set("populate", "*");
    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Gagal mengambil detail perusahaan: ${response.status}`);
    }

    const result = await response.json();
    const data = result.data || result;
    return data.attributes ? { id: data.id, ...data.attributes } : data;
  } catch (error) {
    console.error("Error fetching company by slug:", error);
    return null;
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