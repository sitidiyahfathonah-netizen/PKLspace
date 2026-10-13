import type { Company } from "@/types/company";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://pkl-space-backend-production.up.railway.app";

/**
 * Fetch daftar perusahaan (Mendukung search & filter jurusan)
 * Endpoint: /api/perusahaans?search=...&jurusan=...
 */
export async function getCompanies(params?: {
  search?: string;
  jurusan?: string;
}): Promise<Company[]> {
  const url = new URL("/api/perusahaans", API_BASE_URL);

  url.searchParams.set("pagination[pageSize]", "100");

  if (params?.search?.trim()) {
    url.searchParams.set("search", params.search.trim());
  }

  if (params?.jurusan && params.jurusan !== "Semua") {
    url.searchParams.set("jurusan", params.jurusan);
  }

  const response = await fetch(url.toString(), {
    cache: "no-store", // Selalu fetch data terbaru dari backend
  });

  if (!response.ok) {
    throw new Error(`Gagal mengambil data perusahaan: ${response.status}`);
  }

  const result = await response.json();
  return result.data || result;
}

/**
 * Fetch detail perusahaan berdasarkan Slug
 * Endpoint: /api/perusahaans/{slug}
 */
export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  try {
    const url = new URL(`/api/perusahaans/${slug}`, API_BASE_URL);
    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Gagal mengambil detail perusahaan: ${response.status}`);
    }

    const result = await response.json();
    return result.data || result;
  } catch (error) {
    console.error("Error fetching company by slug:", error);
    return null;
  }
}

/**
 * Helper untuk mengubah relative URL gambar Strapi menjadi Absolute URL
 */
export function getStrapiMediaUrl(path: string | null | undefined): string {
  if (!path) return "/img/placeholder-company.png"; // Fallback jika tidak ada logo
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${API_BASE_URL}${path}`;
}