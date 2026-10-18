# PKLspace

PKLspace adalah aplikasi web pusat informasi tempat Praktik Kerja Lapangan (PKL) yang membantu siswa SMKN 2 Sumedang menemukan tempat PKL sesuai jurusan. Aplikasi menyediakan informasi tempat PKL, persyaratan, kegiatan, posisi, jadwal kerja, kuota jurusan, serta lokasi tempat PKL.

**Production:** https://pklspace.vercel.app/

## Fitur Utama

- **Beranda:** Menampilkan pengenalan PKLspace, tips menghadapi PKL, dan rekomendasi tempat PKL berdasarkan jurusan.
- **Katalog Tempat PKL:** Menampilkan daftar tempat PKL yang diperoleh dari backend.
- **Pencarian:** Membantu pengguna mencari tempat PKL berdasarkan nama.
- **Filter Jurusan:** Menyaring tempat PKL berdasarkan jurusan yang dipilih.
- **Rekomendasi Jurusan:** Mengelompokkan tempat PKL berdasarkan kesesuaian jurusan utama dan menampilkan pilihan tempat PKL lainnya yang menerima jurusan terkait.
- **Detail Tempat PKL:** Menampilkan informasi tempat PKL, persyaratan, kegiatan, posisi, jurusan yang diterima, kuota, periode, dan jadwal kerja.
- **Informasi Lokasi:** Menampilkan alamat, tautan Google Maps, dan informasi cabang jika tersedia.
- **Tentang PKLspace:** Menjelaskan tujuan aplikasi dan menyediakan tips menghadapi PKL.

## Jurusan yang Didukung

PKLspace mencakup empat jurusan:

- **PPLG:** Pengembangan Perangkat Lunak dan Gim
- **AKL:** Akuntansi dan Keuangan Lembaga
- **MPLB:** Manajemen Perkantoran dan Layanan Bisnis
- **PM:** Pemasaran

## Teknologi yang Digunakan

| Teknologi      | Kegunaan                                     |
| -------------- | -------------------------------------------- |
| Next.js 16     | Framework aplikasi web                       |
| React 19       | Pembuatan antarmuka pengguna                 |
| TypeScript     | Penulisan kode dengan tipe data              |
| Tailwind CSS 4 | Styling dan desain responsif                 |
| Lucide React   | Ikon antarmuka                               |
| REST API       | Komunikasi dan pengambilan data dari backend |

Frontend mengambil data melalui fungsi yang tersedia di `lib/api.ts`. Backend menyediakan data perusahaan dan informasi cabang untuk kebutuhan tertentu.

## Struktur Proyek

```text
pklspace-frontend/
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── katalog/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── lib/
│   └── api.ts
├── types/
│   └── company.ts
├── public/
├── docs/
│   ├── commands.md
│   └── PRD.md
├── package.json
└── README.md
```

## Persyaratan

Sebelum menjalankan proyek, pastikan perangkat memiliki:

- Node.js dan npm.
- Git.
- Editor kode, seperti Visual Studio Code.
- Koneksi ke backend PKLspace agar data dari server dapat dimuat.

## Instalasi dan Menjalankan Proyek

### 1. Clone repositori

```bash
git clone https://github.com/sitidiyahfathonah-netizen/PKLspace.git
cd PKLspace
```

Pastikan direktori yang digunakan merupakan repositori frontend PKLspace.

### 2. Instal dependensi

```bash
npm install
```

### 3. Konfigurasi backend

Frontend menyediakan variabel lingkungan `NEXT_PUBLIC_API_BASE_URL` untuk menentukan alamat dasar backend.

Buat file `.env.local` di root proyek jika ingin menggunakan alamat backend yang berbeda dari konfigurasi bawaan.

```env
NEXT_PUBLIC_API_BASE_URL=https://pkl-space-backend-production.up.railway.app
```

Jika variabel tersebut tidak diatur, frontend menggunakan alamat backend bawaan yang ditentukan di `lib/api.ts`.

**Catatan:** Jangan memasukkan kredensial, token, atau rahasia lainnya ke repositori. File `.env.local` tidak boleh di-commit.

### 4. Jalankan server pengembangan

```bash
npm run dev
```

Buka http://localhost:3000 di browser.

## Perintah yang Tersedia

| Perintah        | Kegunaan                          |
| --------------- | --------------------------------- |
| `npm run dev`   | Menjalankan server pengembangan   |
| `npm run lint`  | Memeriksa kode menggunakan ESLint |
| `npm run build` | Membuat build produksi            |
| `npm run start` | Menjalankan aplikasi hasil build  |

Perintah-perintah tersebut dijalankan secara manual sesuai kebutuhan. Penjelasan lebih lengkap tersedia di [`docs/commands.md`](docs/commands.md).

## Catatan Implementasi Katalog

Saat ini, frontend meminta maksimal 100 data perusahaan per permintaan melalui parameter `pagination[pageSize]=100`. Data yang diterima kemudian digunakan untuk pencarian dan penyaringan jurusan di frontend.

Dengan demikian, hasil katalog dibatasi oleh jumlah data yang diambil dari backend. Jika jumlah perusahaan melebihi batas tersebut, perusahaan di luar data yang diterima belum tentu muncul dalam hasil pencarian atau filter.

Implementasi ini dipilih untuk menjaga cakupan pengembangan tetap sederhana dan sesuai dengan waktu pengerjaan proyek. Pengembangan berikutnya dapat mencakup pagination, fitur _Load More_, atau pemindahan pencarian dan filter ke backend agar katalog dapat menangani jumlah data yang lebih besar.

## Ruang Lingkup

PKLspace berfokus pada penyediaan informasi tempat PKL agar siswa dapat menemukan pilihan yang relevan dengan jurusannya.

Aplikasi ini bukan sistem pendaftaran PKL dan tidak mengelola pelamar maupun status penerimaan siswa. Informasi tempat PKL dan kuota ditampilkan berdasarkan data yang disediakan backend. Kuota yang ditampilkan tidak otomatis menunjukkan jumlah slot yang masih tersedia saat ini.

## Dokumentasi Proyek

- [`docs/commands.md`](docs/commands.md) — referensi perintah dan workflow pengembangan.
- [`docs/PRD.md`](docs/PRD.md) — kebutuhan produk, ruang lingkup, dan kriteria penerimaan fitur.

## Kontribusi dan Pengembangan

Perubahan kode sebaiknya dilakukan melalui branch terpisah dan Pull Request agar dapat ditinjau sebelum digabungkan ke branch utama.

Untuk panduan perintah dan workflow pengembangan, lihat [`docs/commands.md`](docs/commands.md).
