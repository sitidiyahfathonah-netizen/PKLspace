# Development Commands

Dokumen ini menjelaskan perintah untuk menginstal dependensi, menjalankan, memeriksa, dan membangun aplikasi frontend PKLspace, serta perintah Git yang digunakan selama pengembangan.

## 1. Prerequisites

Pastikan perangkat sudah memiliki:

- Node.js
- npm
- Git

## 2. Installation

### Install Dependencies

Jalankan perintah berikut dari direktori root proyek:

```bash
npm install
```

Perintah ini menginstal dependensi yang tercantum dalam `package.json`.

### Configure Environment Variables

Frontend mendukung variabel lingkungan berikut:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Alamat dasar backend API yang digunakan frontend. |

Untuk menggunakan alamat backend yang berbeda, buat file `.env.local` di direktori root proyek:

```env
NEXT_PUBLIC_API_BASE_URL=https://pkl-space-backend-production.up.railway.app
```

Variabel ini bersifat opsional karena frontend memiliki alamat backend bawaan. Jika ditentukan, nilai variabel digunakan sesuai implementasi dalam `lib/api.ts`.

## 3. Development

### Start Development Server

```bash
npm run dev
```

Menjalankan server pengembangan Next.js. Secara default, aplikasi dapat diakses melalui `http://localhost:3000`.

### Stop Development Server

Tekan `Ctrl + C` di terminal tempat server berjalan.

## 4. Code Quality and Build

### Run ESLint

```bash
npm run lint
```

Memeriksa kode menggunakan ESLint berdasarkan konfigurasi proyek. Periksa dan perbaiki masalah yang dilaporkan sebelum mengajukan perubahan.

### Build for Production

```bash
npm run build
```

Membuat build aplikasi untuk produksi. Proses build Next.js juga mencakup pemeriksaan TypeScript.

**Hasil validasi:** Perintah `npm run build` berhasil dijalankan tanpa kesalahan pada pemeriksaan TypeScript.

### Start Production Server

```bash
npm run start
```

Menjalankan aplikasi menggunakan hasil build produksi. Jalankan `npm run build` terlebih dahulu.

## 5. Additional Type Checking

```bash
npx tsc --noEmit
```

Memeriksa kesalahan tipe TypeScript tanpa menghasilkan file JavaScript. Perintah ini dapat digunakan sebagai pemeriksaan tambahan di luar proses build.

## 6. Git Workflow

Perintah berikut merupakan referensi untuk mengelola perubahan kode maupun dokumentasi.

### Check Working Tree

```bash
git status
```

Menampilkan branch aktif dan status perubahan file.

### List Local Branches

```bash
git branch
```

Menampilkan branch lokal yang tersedia. Tanda `*` menunjukkan branch aktif.

### Create a Documentation Branch

```bash
git switch -c docs/your-task-name
```

Membuat branch baru sekaligus berpindah ke branch tersebut. Ganti `docs/your-task-name` dengan nama branch yang sesuai.

### Stage Documentation Changes

```bash
git add README.md docs/commands.md docs/PRD.md
```

Menambahkan file dokumentasi yang dipilih ke staging area. Sesuaikan daftar file dengan perubahan yang ingin disertakan dalam commit.

### Commit Changes

```bash
git commit -m "docs: update project documentation"
```

Menyimpan perubahan yang sudah di-stage ke riwayat Git.

### Push Branch

```bash
git push -u origin docs/your-task-name
```

Mengirim branch ke repositori remote. Ganti nama contoh dengan nama branch yang sebenarnya.

## 7. Available npm Scripts

Script berikut tersedia dalam `package.json` proyek:

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `npm run dev` | Menjalankan server pengembangan. |
| `lint` | `npm run lint` | Memeriksa kode menggunakan ESLint. |
| `build` | `npm run build` | Membuat build produksi. |
| `start` | `npm run start` | Menjalankan server produksi. |

## 8. Notes

- Jalankan perintah dari direktori root proyek frontend.
- Pastikan dependensi sudah terinstal sebelum menjalankan aplikasi.
- Pastikan backend dapat diakses agar data tempat PKL dapat dimuat.
- Jangan commit file `.env.local` yang berisi konfigurasi lokal.
- Jalankan pemeriksaan yang relevan sebelum mengajukan Pull Request.
- Pull Request digunakan untuk meninjau perubahan sebelum digabungkan ke branch utama.
- Perintah dalam dokumen ini dijalankan sesuai kebutuhan dan tidak berjalan otomatis, kecuali dikonfigurasi secara terpisah.