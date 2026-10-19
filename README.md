# PKLspace

PKLspace adalah aplikasi web pusat informasi tempat Praktik Kerja Lapangan (PKL) yang membantu siswa SMKN 2 Sumedang menemukan tempat PKL sesuai jurusan. Aplikasi menyediakan informasi tempat PKL, persyaratan, kegiatan, posisi, jadwal kerja, kuota jurusan, serta lokasi tempat PKL.

**Production:** [https://pklspace.vercel.app/](https://pklspace.vercel.app/)

## Fitur Utama

- **Beranda:** Menampilkan pengenalan PKLspace, tips menghadapi PKL, dan rekomendasi tempat PKL berdasarkan jurusan.
- **Katalog Tempat PKL:** Menampilkan daftar tempat PKL yang datanya diperoleh dari backend.
- **Pencarian:** Membantu pengguna mencari tempat PKL berdasarkan nama menggunakan query filter Strapi.
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

| Teknologi | Kegunaan |
|---|---|
| Next.js 16 | Framework aplikasi web |
| React 19 | Pembuatan antarmuka pengguna |
| TypeScript | Penulisan kode dengan tipe data |
| Tailwind CSS 4 | Styling dan desain responsif |
| Lucide React | Ikon antarmuka |
| Strapi REST API | Penyediaan dan pengambilan data backend |

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
- Koneksi internet dan akses ke backend PKLspace agar data dapat dimuat.

## Instalasi dan Menjalankan Proyek

### 1. Clone repositori

```bash
git clone https://github.com/sitidiyahfathonah-netizen/PKLspace.git
cd PKLspace
```

Pastikan direktori yang digunakan adalah direktori frontend yang berisi `package.json`.

### 2. Instal dependensi

```bash
npm install
```

### 3. Konfigurasi backend

Frontend menggunakan variabel lingkungan `NEXT_PUBLIC_API_BASE_URL` untuk menentukan alamat dasar backend.

Buat file `.env.local` di root proyek jika ingin mengatur alamat backend secara eksplisit.

```env
NEXT_PUBLIC_API_BASE_URL=https://pkl-space-backend-production.up.railway.app
```

Jika variabel tersebut tidak diatur, frontend menggunakan alamat backend bawaan yang ditentukan di `lib/api.ts`.

**Catatan:** Jangan memasukkan kredensial, token, atau rahasia lainnya ke repositori. File `.env.local` tidak boleh di-commit.

### 4. Jalankan server pengembangan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah yang Tersedia

| Perintah | Kegunaan |
|---|---|
| `npm run dev` | Menjalankan server pengembangan |
| `npm run lint` | Memeriksa kode menggunakan ESLint |
| `npm run build` | Membuat build produksi dan memeriksa TypeScript |
| `npm run start` | Menjalankan aplikasi hasil build |

Perintah tersebut dijalankan secara manual sesuai kebutuhan. Penjelasan lebih lengkap tersedia di [`docs/commands.md`](docs/commands.md).

## Catatan Implementasi Katalog

Katalog saat ini mengambil maksimal 100 data perusahaan dalam satu permintaan melalui parameter `pagination[pageSize]=100`.

- **Pencarian nama:** Menggunakan query filter Strapi sehingga penyaringan nama dilakukan di backend.
- **Filter jurusan:** Masih dilakukan di frontend berdasarkan data jurusan utama, jurusan yang diterima, dan kuota jurusan.
- **Pengelompokan hasil:** Frontend mengutamakan tempat PKL yang jurusan utamanya sesuai dengan pilihan pengguna, kemudian menampilkan pilihan tempat PKL lainnya yang relevan.
- **Pagination:** Pagination backend belum diterapkan pada katalog.

Karena pengambilan data masih dibatasi hingga 100 perusahaan per permintaan, hasil filter jurusan belum tentu mencakup seluruh data jika jumlah perusahaan melebihi batas tersebut.

Pengembangan selanjutnya dapat mencakup pemindahan filter jurusan ke backend serta penerapan pagination backend untuk meningkatkan efisiensi pengambilan data dan mendukung pertumbuhan jumlah perusahaan.

## Ruang Lingkup

PKLspace berfokus pada penyediaan informasi tempat PKL agar siswa dapat menemukan pilihan yang relevan dengan jurusannya.

Aplikasi ini bukan sistem pendaftaran PKL dan tidak mengelola pelamar maupun status penerimaan siswa. Informasi tempat PKL dan kuota ditampilkan berdasarkan data yang disediakan backend. Kuota yang ditampilkan merupakan informasi kuota yang tercatat, bukan jumlah slot yang dipastikan masih tersedia saat ini.

## Dokumentasi Proyek

- [`docs/commands.md`](docs/commands.md) — referensi perintah dan workflow pengembangan.
- [`docs/PRD.md`](docs/PRD.md) — kebutuhan produk, ruang lingkup, dan kriteria penerimaan fitur.

## Kontribusi dan Pengembangan

Perubahan kode sebaiknya dilakukan melalui branch terpisah dan Pull Request agar dapat ditinjau sebelum digabungkan ke branch utama.

Untuk panduan perintah dan workflow pengembangan, lihat [`docs/commands.md`](docs/commands.md).
