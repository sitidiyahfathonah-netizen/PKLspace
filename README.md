# PKLspace

**PKLspace** adalah aplikasi web pusat informasi tempat Praktik Kerja Lapangan (PKL) yang membantu siswa SMKN 2 Sumedang menemukan tempat PKL sesuai jurusan. Aplikasi ini menyediakan informasi tempat PKL, persyaratan, kegiatan, jadwal kerja, kuota jurusan, dan lokasi tempat PKL.

**Production:** https://pklspace.vercel.app/

## Fitur Utama

- **Beranda:** menampilkan pengenalan PKLspace, tips menghadapi PKL, dan rekomendasi tempat PKL berdasarkan jurusan.
- **Katalog Tempat PKL:** menampilkan daftar tempat PKL yang tersedia.
- **Pencarian:** membantu pengguna mencari tempat PKL berdasarkan nama.
- **Filter Jurusan:** menyaring informasi tempat PKL berdasarkan jurusan yang dipilih.
- **Informasi Jurusan:** mengelompokkan tempat PKL berdasarkan jurusan utama dan menampilkan pilihan tempat PKL lainnya.
- **Detail Tempat PKL:** menampilkan informasi tempat PKL, persyaratan, kegiatan, posisi, jurusan yang diterima, kuota, periode, dan jadwal kerja.
- **Informasi Lokasi:** menampilkan alamat, tautan Google Maps, dan informasi cabang jika tersedia.
- **Tentang PKLspace:** menyediakan informasi mengenai aplikasi dan tips menghadapi PKL.

## Jurusan yang Didukung

PKLspace mencakup empat jurusan:

- **PPLG** — Pengembangan Perangkat Lunak dan Gim
- **AKL** — Akuntansi dan Keuangan Lembaga
- **MPLB** — Manajemen Perkantoran dan Layanan Bisnis
- **PM** — Pemasaran

## Teknologi yang Digunakan

| Teknologi              | Kegunaan                                    |
|------------------------|---------------------------------------------|
| Next.js 16             | Framework aplikasi web                      |
| React 19               | Pembuatan antarmuka pengguna                |
| TypeScript             | Penulisan kode dengan tipe data             |
| Tailwind CSS 4         | Styling dan desain responsif                |
| Lucide React           | Ikon antarmuka                              |
| REST API               | Pengambilan data tempat PKL dari backend    |

Frontend mengambil data dari backend melalui fungsi pada `lib/api.ts`. API menyediakan data perusahaan dan, untuk kebutuhan tertentu, informasi cabang perusahaan.

## Struktur Proyek

```text
pklspace-frontend/
├── app/                    # Halaman dan routing Next.js
│   ├── page.tsx            # Beranda
│   ├── About/              # Halaman Tentang
│   └── katalog/
│       ├── page.tsx        # Katalog tempat PKL
│       └── [id]/
│           └── page.tsx    # Detail tempat PKL
├── components/
│   ├── atoms/              # Komponen dasar
│   ├── molecules/          # Gabungan komponen dasar
│   ├── organisms/          # Bagian antarmuka yang lebih kompleks
│   └── templates/          # Susunan halaman
├── lib/
│   └── api.ts              # Fungsi komunikasi dengan backend
├── types/
│   └── company.ts          # Definisi tipe data perusahaan
├── public/                 # Aset statis
├── docs/
│   ├── commands.md         # Referensi perintah proyek
│   └── PRD.md              # Product Requirements Document
├── package.json
└── README.md
```

## Persyaratan

Sebelum menjalankan proyek, pastikan perangkat sudah memiliki:

- Node.js dan npm.
- Git.
- Editor kode, seperti Visual Studio Code.
- Akses ke backend PKLspace untuk memuat data dari server.

## Instalasi dan Menjalankan Proyek

### 1. Clone repositori

```bash
git clone https://github.com/sitidiyahfathonah-netizen/PKLspace.git
cd PKLspace
```

> Pastikan kamu berada di repositori frontend yang benar jika repositori di kemudian hari dipisahkan.

### 2. Instal dependensi

```bash
npm install
```

### 3. Konfigurasi backend (opsional)

Frontend menyediakan variabel lingkungan `NEXT_PUBLIC_API_BASE_URL` untuk menentukan alamat dasar backend.

Buat file `.env.local` di root proyek jika ingin menggunakan alamat backend yang berbeda dari konfigurasi bawaan:

```env
NEXT_PUBLIC_API_BASE_URL=https://pkl-space-backend-production.up.railway.app
```

Jika variabel ini tidak diatur, kode frontend menggunakan alamat backend bawaan tersebut.

**Catatan:** Jangan memasukkan kredensial, token, atau rahasia lainnya ke dalam repositori. File `.env.local` tidak boleh di-commit.

### 4. Jalankan server pengembangan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah yang Tersedia

| Perintah        | Kegunaan                         |
|-----------------|----------------------------------|
| `npm run dev`   | Menjalankan server pengembangan  |
| `npm run lint`  | Memeriksa kode menggunakan ESLint|
| `npm run build` | Membuat build untuk produksi     |
| `npm run start` | Menjalankan aplikasi hasil build |

Penjelasan lebih lengkap tersedia di [`docs/commands.md`](docs/commands.md).

## Dokumentasi Proyek

- [`docs/commands.md`](docs/commands.md) — daftar perintah dan workflow pengembangan.
- [`docs/PRD.md`](docs/PRD.md) — kebutuhan produk, ruang lingkup, dan kriteria penerimaan fitur.

## Ruang Lingkup

PKLspace berfokus pada penyediaan informasi tempat PKL agar siswa dapat menemukan pilihan yang relevan dengan jurusannya.

Aplikasi ini bukan sistem pendaftaran PKL atau sistem pengelolaan pelamar. Informasi tempat PKL dan kuota ditampilkan berdasarkan data yang disediakan backend.

## Kontribusi dan Pengembangan

Perubahan kode sebaiknya dilakukan melalui branch terpisah dan Pull Request agar mudah ditinjau sebelum digabungkan ke branch utama.

Untuk panduan perintah dan workflow pengembangan, lihat [`docs/commands.md`](docs/commands.md).
