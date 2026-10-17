# Development Commands

Dokumen ini berisi referensi perintah yang digunakan untuk instalasi, menjalankan, memeriksa, dan membangun proyek frontend PKLspace.

## 1. Prerequisites

Pastikan perangkat sudah memiliki:

- Node.js
- npm
- Git

## 2. Installation

### Install dependencies

Jalankan perintah berikut dari direktori root proyek:

```bash
npm install
```

Perintah ini menginstal dependensi yang tercantum dalam `package.json`.

### Configure environment variables

Frontend mendukung variabel lingkungan berikut:

| Variable                    | Description                                     |
|-----------------------------|-------------------------------------------------|
| `NEXT_PUBLIC_API_BASE_URL` | Alamat dasar backend API yang digunakan frontend |

Jika diperlukan, buat file `.env.local` di direktori root proyek:

```env
NEXT_PUBLIC_API_BASE_URL=https://pkl-space-backend-production.up.railway.app
```

Variabel tersebut bersifat opsional karena frontend memiliki alamat backend bawaan. Gunakan alamat yang sesuai dengan lingkungan pengembangan.


## 3. Development

### Start development server

```bash
npm run dev
```

Menjalankan server pengembangan Next.js. Secara default, aplikasi dapat diakses melalui `http://localhost:3000`.

### Stop development server

Tekan `Ctrl + C` di terminal tempat server berjalan.

## 4. Code Quality and Build

### Run ESLint

```bash
npm run lint
```

Memeriksa kode menggunakan ESLint berdasarkan konfigurasi proyek.

### Build for production

```bash
npm run build
```

Membuat build aplikasi untuk produksi. Perbaiki error yang ditemukan sebelum melakukan deployment.

### Start production server

```bash
npm run start
```

Menjalankan aplikasi menggunakan hasil build produksi. Jalankan `npm run build` terlebih dahulu.

## 5. Additional Type Checking

```bash
npx tsc --noEmit
```

Memeriksa kesalahan tipe TypeScript tanpa menghasilkan file JavaScript.

Perintah ini dijalankan langsung melalui TypeScript compiler dan bukan script khusus dalam `package.json`.

## 6. Git Workflow

### Check working tree

```bash
git status
```

Menampilkan branch aktif dan perubahan file.

### List branches

```bash
git branch
```

Menampilkan branch lokal yang tersedia. Tanda `*` menunjukkan branch aktif.

### Create a feature or documentation branch

```bash
git switch -c docs/your-task-name
```

Gunakan nama branch yang sesuai dengan pekerjaan. Contoh di atas hanya untuk referensi; jangan jalankan jika branch terkait sudah ada.

### Stage changes

```bash
git add README.md docs/commands.md docs/PRD.md
```

Menambahkan file dokumentasi yang dipilih ke staging area. Sesuaikan daftar file dengan perubahan yang memang ingin di-commit.

### Commit changes

```bash
git commit -m "docs: add project documentation"
```

Menyimpan perubahan yang sudah di-stage ke riwayat Git.

### Push branch

```bash
git push -u origin docs/your-task-name
```

Mengirim branch ke repositori remote. Ganti `docs/your-task-name` dengan nama branch aktif yang sebenarnya.

## 7. Available npm Scripts

Script yang didefinisikan dalam `package.json`:

| Script        | Command         | Purpose           |
|---------------|-----------------|-------------------|
| `dev`         | `npm run dev`   | Development server|
| `lint`        | `npm run lint`  | ESLint checks     |
| `build`       | `npm run build` | Production build  |
| `start`       | `npm run start` | Production server |

## 8. Notes

- Jalankan perintah dari direktori root proyek frontend.
- Pastikan dependensi sudah terinstal sebelum menjalankan aplikasi.
- Pastikan backend dapat diakses agar data tempat PKL bisa dimuat.
- Jangan commit file `.env.local` jika berisi konfigurasi lokal atau informasi sensitif.
- Periksa hasil build dan lint sebelum mengajukan Pull Request.
- Proyek menggunakan Pull Request untuk meninjau perubahan sebelum digabungkan ke branch utama.
