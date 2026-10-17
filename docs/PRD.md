# Product Requirements Document (PRD)

## 1. Product Overview

**Product Name:** PKLspace

**Product Type:** Web-based PKL information platform

**Production URL:** https://pklspace.vercel.app/

PKLspace adalah aplikasi web yang menyediakan informasi tempat Praktik Kerja Lapangan (PKL) bagi siswa SMKN 2 Sumedang. Aplikasi ini membantu siswa menemukan dan membandingkan pilihan tempat PKL berdasarkan jurusan serta memahami informasi yang diperlukan sebelum memilih tempat PKL.

## 2. Background and Problem Statement

Informasi mengenai tempat PKL dapat tersebar di berbagai sumber sehingga siswa membutuhkan waktu untuk mengumpulkan dan membandingkan informasi.

Siswa juga perlu mengetahui apakah suatu tempat menerima jurusannya, persyaratan yang berlaku, kuota yang tersedia, lokasi, dan jadwal kerja.

PKLspace dikembangkan untuk mengumpulkan informasi tersebut dalam satu platform yang mudah diakses.

## 3. Product Goals

Tujuan PKLspace adalah:

1. Memusatkan informasi tempat PKL dalam satu aplikasi web.
2. Membantu siswa menemukan tempat PKL berdasarkan nama dan jurusan.
3. Menyediakan informasi penting untuk membantu siswa mempertimbangkan pilihan tempat PKL.
4. Menyediakan rekomendasi tempat PKL berdasarkan jurusan.
5. Menyajikan informasi secara jelas melalui antarmuka yang responsif.

## 4. Target Users

### Primary Users: SMK Students

Siswa SMKN 2 Sumedang yang sedang mencari informasi dan pilihan tempat PKL sesuai jurusan.

Kebutuhan utama:

- Melihat daftar tempat PKL.
- Mencari tempat PKL berdasarkan nama.
- Memfilter tempat PKL berdasarkan jurusan.
- Mengetahui informasi, persyaratan, kegiatan, posisi, kuota, jadwal kerja, dan lokasi tempat PKL.
- Mendapatkan tips untuk menghadapi PKL.

### Supporting Stakeholders: Project Team

Tim pengembang bertanggung jawab membangun frontend, mengintegrasikan backend, serta memastikan informasi yang ditampilkan sesuai dengan data yang disediakan.

## 5. Scope

### In Scope

- Halaman beranda dan rekomendasi tempat PKL.
- Katalog tempat PKL.
- Pencarian tempat PKL berdasarkan nama.
- Filter berdasarkan jurusan.
- Pengelompokan tempat PKL berdasarkan jurusan utama dan pilihan lainnya.
- Halaman detail tempat PKL.
- Informasi jurusan yang diterima dan kuota per jurusan.
- Informasi lokasi dan tautan Google Maps.
- Informasi cabang untuk perusahaan yang memiliki data cabang.
- Halaman Tentang dan tips menghadapi PKL.
- Integrasi frontend dengan backend API.
- Tampilan responsif untuk berbagai ukuran layar.

### Out of Scope

Fitur berikut tidak termasuk dalam cakupan aplikasi saat ini:

- Pendaftaran atau pengajuan lamaran PKL melalui aplikasi.
- Pelacakan status lamaran siswa.
- Pengelolaan jumlah pelamar aktif.
- Dashboard administrasi untuk mengelola data tempat PKL.
- Sistem autentikasi dan akun siswa.
- Proses seleksi siswa oleh perusahaan.

## 6. Supported Majors

PKLspace mendukung informasi tempat PKL untuk empat jurusan:

| Code |           Major                             |
|------|---------------------------------------------|
| PPLG | Pengembangan Perangkat Lunak dan Gim        |
| AKL  | Akuntansi dan Keuangan Lembaga              |
| MPLB | Manajemen Perkantoran dan Layanan Bisnis    |
| PM   | Pemasaran                                   |

Kesesuaian tempat PKL ditentukan berdasarkan data jurusan yang tersedia di backend.

## 7. Functional Requirements

### FR-01: Homepage

Sistem menampilkan halaman beranda yang berisi pengenalan PKLspace, tips menghadapi PKL, dan rekomendasi tempat PKL.

**Acceptance criteria:**

- Pengguna dapat melihat bagian pengenalan dan tips PKL.
- Pengguna dapat melihat rekomendasi tempat PKL berdasarkan jurusan.
- Pengguna dapat membuka katalog yang difilter berdasarkan jurusan melalui tautan rekomendasi.
- Jika tidak ada rekomendasi untuk suatu jurusan, sistem menampilkan pesan yang sesuai.

### FR-02: Company Catalog

Sistem menampilkan daftar tempat PKL yang datanya diperoleh dari backend.

**Acceptance criteria:**

- Sistem menampilkan kartu tempat PKL berdasarkan data yang berhasil dimuat.
- Kartu menampilkan nama tempat PKL, logo jika tersedia, dan informasi bidang atau jurusan utama.
- Pengguna dapat membuka halaman detail dari kartu tempat PKL.
- Sistem menampilkan indikator pemuatan ketika data sedang diambil.
- Jika data tidak tersedia, sistem menampilkan pesan bahwa tempat PKL tidak ditemukan.

### FR-03: Search

Sistem menyediakan pencarian tempat PKL berdasarkan nama.

**Acceptance criteria:**

- Pengguna dapat memasukkan kata kunci pencarian.
- Sistem menampilkan hasil yang sesuai dengan kata kunci.
- Pencarian dapat digunakan bersama filter jurusan.
- Jika tidak ada hasil yang sesuai, sistem menampilkan pesan yang informatif.

### FR-04: Major Filter

Sistem menyediakan filter berdasarkan jurusan yaitu PPLG, AKL, MPLB, dan PM.

**Acceptance criteria:**

- Pengguna dapat memilih satu jurusan.
- Pengguna dapat menerapkan filter dan mengatur ulang filter.
- Katalog menyesuaikan daftar berdasarkan jurusan yang dipilih.
- Ketika filter jurusan aktif, tempat PKL dikelompokkan menjadi tempat yang cocok dengan jurusan utama dan pilihan tempat PKL lainnya.
- Jika filter direset, katalog kembali menampilkan daftar tanpa filter jurusan.

### FR-05: Company Detail

Sistem menyediakan halaman detail untuk menampilkan informasi tempat PKL.

**Acceptance criteria:**

- Halaman detail menampilkan nama tempat PKL dan informasi yang tersedia.
- Informasi dapat mencakup deskripsi, persyaratan, kegiatan, posisi, jurusan yang diterima, kuota, periode, dan jadwal kerja.
- Alamat dan tautan Google Maps ditampilkan jika tersedia.
- Logo yang tidak tersedia digantikan dengan gambar placeholder.
- Informasi cabang ditampilkan apabila data cabang tersedia untuk tempat PKL terkait.
- Sistem menampilkan indikator pemuatan ketika data sedang diambil.
- Jika data detail tidak berhasil ditemukan, sistem menyediakan pesan yang sesuai dan tautan kembali ke katalog.

### FR-06: About and PKL Tips

Sistem menyediakan halaman Tentang dan informasi tips menghadapi PKL.

**Acceptance criteria:**

- Pengguna dapat membaca informasi mengenai PKLspace.
- Pengguna dapat mengakses tips yang membantu persiapan menghadapi PKL.

## 8. Non-Functional Requirements

### NFR-01: Responsive Design

Antarmuka harus dapat digunakan pada perangkat desktop, dan ponsel.

### NFR-02: Usability

Navigasi, pencarian, filter, dan informasi detail harus mudah dipahami oleh siswa.

### NFR-03: Maintainability

Kode frontend menggunakan TypeScript dan struktur komponen berbasis Atomic Design untuk membantu pemeliharaan.

### NFR-04: Data Integration

Frontend mengambil data tempat PKL dari backend API. Tampilan harus menangani proses pemuatan dan kondisi ketika data tidak tersedia.

### NFR-05: Security

Konfigurasi sensitif tidak boleh disimpan di repositori publik. Variabel dengan awalan `NEXT_PUBLIC_` harus dianggap dapat diakses oleh browser dan tidak boleh berisi rahasia.

## 9. Technical Overview

### Frontend Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React

### Component Architecture

Komponen frontend dikelompokkan menggunakan Atomic Design:

- `atoms`: komponen antarmuka dasar.
- `molecules`: gabungan beberapa komponen dasar.
- `organisms`: bagian antarmuka yang lebih kompleks.
- `templates`: susunan komponen untuk membentuk halaman.

### API Integration

Fungsi komunikasi dengan backend dikelola di `lib/api.ts`.

Endpoint yang digunakan:

| Endpoint                     |                                Purpose                             |
|------------------------------|--------------------------------------------------------------------|
| `/api/perusahaans`           | Mengambil data tempat PKL                                          |
| `/api/cabangs`               | Mengambil data cabang perusahaan tertentu                          |

Definisi tipe data perusahaan berada di `types/company.ts`.

Alamat dasar API dapat diatur melalui `NEXT_PUBLIC_API_BASE_URL`. Jika variabel tersebut tidak ditentukan, frontend menggunakan alamat bawaan yang didefinisikan dalam kode.

## 10. Main Routes

| Route          | Purpose                                           |
|----------------|---------------------------------------------------|
| `/`            | Beranda                                           |
| `/katalog`     | Katalog tempat PKL                                |
| `/katalog/[id]`| Detail tempat PKL berdasarkan parameter rute      |
| `/About`       | Halaman Tentang                                   |

Catatan: direktori halaman Tentang saat ini bernama `app/About`. Konvensi penamaan rute dapat ditinjau kembali agar konsisten.

## 11. Assumptions and Constraints

- Data tempat PKL bergantung pada ketersediaan backend.
- Informasi kuota mencerminkan data yang disediakan backend dan tidak menjamin kuota masih tersedia saat siswa memilih tempat PKL.
- Tidak semua tempat PKL memiliki logo atau data cabang.
- Informasi yang ditampilkan mengikuti kelengkapan data setiap tempat PKL.
- Pengelolaan data dilakukan di luar frontend saat ini.

## 12. Success Criteria

PKLspace dianggap memenuhi tujuan utamanya apabila:

1. Siswa dapat mengakses daftar tempat PKL.
2. Siswa dapat mencari dan memfilter tempat PKL berdasarkan jurusan.
3. Siswa dapat membuka detail dan membaca informasi yang tersedia.
4. Rekomendasi tempat PKL dapat mengarahkan pengguna ke katalog dengan jurusan yang sesuai.
5. Antarmuka dapat digunakan pada perangkat desktop dan mobile.
6. Aplikasi dapat mengambil dan menampilkan data backend ketika layanan tersedia.

## 13. Future Improvements

Pengembangan selanjutnya dapat mempertimbangkan:

- Penyempurnaan validasi dan pencocokan jurusan.
- Peningkatan penanganan kesalahan ketika backend tidak tersedia.
- Penambahan dan pemeliharaan data tempat PKL yang lebih lengkap.
- Peninjauan konsistensi rute dan aksesibilitas antarmuka.

Prioritas pengembangan lanjutan ditentukan berdasarkan evaluasi tim dan kebutuhan pengguna.