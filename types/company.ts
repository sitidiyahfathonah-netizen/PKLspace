export interface CabangItem {
  id: number;
  documentId?: string;
  nama: string;
  slug?: string;
  alamat?: string;
  tautan_google_maps?: string;
}

export interface Company {
  id: number;
  documentId: string;
  nama: string;
  slug: string;
  informasi: string;
  persyaratan: string;
  kegiatan: string;
  posisi: string;
  alamat: string;
  tautan_google_maps: string;
  periode: string;
  jadwal_kerja: string;
  memiliki_cabang: boolean;
  jurusan_utama?: string;
  logo: {
    id: number;
    name: string;
    url: string;
  } | null;

  kategori: {
    id: number;
    nama: string;
    slug: string;
  } | null;

  bidang: {
    id: number;
    nama: string;
    slug: string;
  } | null;

  kuota_jurusan: {
    id: number;
    jurusan: string;
    kuota: number;
  }[];

  cabangs: CabangItem[];

  jurusan_diterima: string[];
}
