# Product Requirements Document (PRD)

## 1. Product Overview

**Product Name:** PKLspace

**Product Type:** Web-based PKL Information Platform

**Production URL:** https://pklspace.vercel.app/

PKLspace adalah aplikasi web yang menyediakan informasi tempat Praktik Kerja Lapangan (PKL) bagi siswa SMKN 2 Sumedang. Aplikasi ini membantu siswa menemukan dan membandingkan pilihan tempat PKL berdasarkan jurusan serta memahami informasi yang diperlukan sebelum memilih tempat PKL.

## 2. Background and Problem Statement

Informasi mengenai tempat PKL dapat tersebar di berbagai sumber sehingga siswa membutuhkan waktu untuk mengumpulkan dan membandingkan informasi.

Siswa juga perlu mengetahui apakah suatu tempat menerima jurusannya, persyaratan yang berlaku, informasi kuota, lokasi, dan jadwal kerja.

PKLspace dikembangkan untuk mengumpulkan informasi tersebut dalam satu platform yang mudah diakses.

## 3. Product Goals

Tujuan PKLspace adalah:

1. Memusatkan informasi tempat PKL dalam satu aplikasi web.
2. Membantu siswa menemukan tempat PKL berdasarkan nama dan jurusan.
3. Menyediakan informasi penting untuk membantu siswa mempertimbangkan pilihan tempat PKL.
4. Menyediakan rekomendasi tempat PKL berdasarkan jurusan.
5. Menyajikan informasi melalui antarmuka yang responsif dan mudah digunakan.

## 4. Target Users

### Primary Users: SMK Students

Siswa SMKN 2 Sumedang yang sedang mencari informasi dan pilihan tempat PKL sesuai jurusan.

Kebutuhan utama:

- Melihat daftar tempat PKL.
- Mencari tempat PKL berdasarkan nama.
- Memfilter tempat PKL berdasarkan jurusan.
- Mengetahui informasi, persyaratan, kegiatan, posisi, kuota, jadwal kerja, dan lokasi tempat PKL jika tersedia.
- Mendapatkan tips untuk menghadapi PKL.

### Supporting Stakeholders: Project Team

Tim pengembang bertanggung jawab membangun frontend, mengintegrasikan backend, serta memastikan informasi yang ditampilkan sesuai dengan data yang disediakan.

## 5. Scope

### In Scope

- Halaman beranda dan rekomendasi tempat PKL.
- Katalog tempat PKL.
- Pencarian tempat PKL berdasarkan nama melalui backend API.
- Filter tempat PKL berdasarkan jurusan.
- Pengelompokan hasil katalog berdasarkan kecocokan jurusan sesuai implementasi aplikasi.
- Halaman detail tempat PKL.
- Informasi jurusan yang diterima dan kuota berdasarkan data yang tersedia.
- Informasi lokasi dan tautan Google Maps jika tersedia.
- Informasi cabang untuk perusahaan tertentu yang memiliki data cabang.
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

| Code | Major |
| --- | --- |
| PPLG | Pengembangan Perangkat Lunak dan Gim |
| AKL | Akuntansi dan Keuangan Lembaga |
| MPLB | Manajemen Perkantoran dan Layanan Bisnis |
| PM | Pemasaran |

Kesesuaian tempat PKL ditentukan berdasarkan data jurusan yang tersedia dari backend dan logika pencocokan yang diterapkan pada frontend.

## 7. Functional Requirements

### FR-01: Homepage

Sistem menampilkan halaman beranda yang berisi pengenalan PKLspace, rekomendasi tempat PKL, dan informasi tips menghadapi PKL.

**Acceptance criteria:**

- Pengguna dapat melihat pengenalan PKLspace dan informasi tips PKL.
- Pengguna dapat melihat rekomendasi tempat PKL berdasarkan jurusan sesuai data yang tersedia.
- Pengguna dapat membuka katalog melalui tautan rekomendasi yang mengarah ke jurusan terkait.
- Jika data rekomendasi tidak tersedia, bagian tersebut menangani kondisi kosong sesuai implementasi aplikasi.

### FR-02: Company Catalog

Sistem menampilkan daftar tempat PKL yang datanya diperoleh dari backend API.

**Acceptance criteria:**

- Sistem mengambil data perusahaan melalui backend API.
- Permintaan katalog menggunakan parameter `pagination[pageSize]=100` untuk membatasi jumlah data dalam satu permintaan.
- Data yang berhasil diterima digunakan untuk menampilkan kartu tempat PKL.
- Kartu dapat menampilkan nama tempat PKL, logo jika tersedia, dan informasi bidang atau jurusan yang relevan.
- Pengguna dapat membuka halaman detail melalui kartu tempat PKL.
- Sistem menangani proses pemuatan, kegagalan pengambilan data, dan kondisi ketika data tidak tersedia.
- Katalog belum menyediakan pagination atau fitur Load More untuk mengambil data berikutnya.

**Batasan:**

Data yang dapat ditampilkan, dicari, dan difilter dibatasi oleh data yang berhasil diterima dari backend. Jika jumlah tempat PKL melebihi batas pengambilan, data di luar hasil permintaan tersebut belum tentu muncul di katalog.

### FR-03: Search

Sistem menyediakan pencarian tempat PKL berdasarkan nama melalui filter pada backend API.

**Acceptance criteria:**

- Pengguna dapat memasukkan kata kunci pencarian.
- Frontend mengirimkan kata kunci pencarian ke backend menggunakan parameter filter nama yang didukung oleh Strapi.
- Backend memproses filter nama dan mengembalikan data yang sesuai dengan kata kunci.
- Pencarian dapat digunakan bersama filter jurusan.
- Jika tidak ada hasil yang sesuai, sistem menampilkan kondisi kosong atau pesan yang sesuai.

### FR-04: Major Filter

Sistem menyediakan filter berdasarkan jurusan PPLG, AKL, MPLB, dan PM.

**Acceptance criteria:**

- Pengguna dapat memilih jurusan melalui kontrol filter.
- Pengguna dapat menerapkan dan mengatur ulang filter sesuai fitur yang tersedia.
- Frontend menyesuaikan hasil berdasarkan jurusan yang dipilih menggunakan data yang diterima dari backend.
- Hasil dapat dikelompokkan berdasarkan kecocokan jurusan utama dan pilihan tempat PKL lain yang relevan sesuai implementasi aplikasi.
- Jika filter direset, katalog kembali menampilkan hasil tanpa filter jurusan.
- Hasil filter bergantung pada data yang berhasil diambil serta informasi jurusan yang tersedia.

**Batasan:**

Filter jurusan saat ini masih diproses di frontend. Filter tersebut hanya dapat memproses data yang diterima dari backend, dengan batas pengambilan maksimal 100 data per permintaan.

### FR-05: Company Detail

Sistem menyediakan halaman detail untuk menampilkan informasi tempat PKL.

**Acceptance criteria:**

- Halaman detail menampilkan nama tempat PKL dan informasi yang tersedia.
- Informasi dapat mencakup deskripsi, persyaratan, kegiatan, posisi, jurusan yang diterima, kuota, periode, dan jadwal kerja sesuai kelengkapan data.
- Alamat dan tautan Google Maps ditampilkan jika tersedia.
- Jika logo tidak tersedia, sistem menggunakan tampilan pengganti sesuai implementasi.
- Informasi cabang dan pilihan cabang ditampilkan untuk perusahaan yang memiliki data cabang dan didukung oleh implementasi aplikasi.
- Perusahaan tanpa data cabang tidak harus menampilkan pilihan cabang.
- Sistem menangani proses pemuatan data.
- Jika data detail tidak ditemukan atau gagal dimuat, sistem menampilkan penanganan yang sesuai dan menyediakan navigasi kembali ke katalog jika tersedia.

### FR-06: About and PKL Tips

Sistem menyediakan halaman Tentang dan informasi tips menghadapi PKL.

**Acceptance criteria:**

- Pengguna dapat membaca informasi mengenai PKLspace.
- Pengguna dapat mengakses informasi tips untuk membantu persiapan menghadapi PKL.
- Halaman dapat diakses melalui navigasi aplikasi.

## 8. Non-Functional Requirements

### NFR-01: Responsive Design

Antarmuka dirancang agar dapat digunakan pada perangkat desktop dan ponsel.

### NFR-02: Usability

Navigasi, pencarian, filter, dan informasi detail dirancang agar mudah dipahami oleh siswa.

### NFR-03: Maintainability

Kode frontend menggunakan TypeScript dan struktur komponen berbasis Atomic Design untuk membantu pemeliharaan kode.

### NFR-04: Data Integration

Frontend mengambil data tempat PKL dari backend API dan menangani kondisi pemuatan, kegagalan pengambilan data, serta data yang tidak tersedia.

### NFR-05: Security

Konfigurasi sensitif tidak boleh disimpan di repositori publik. Variabel dengan awalan `NEXT_PUBLIC_` dapat diakses oleh browser sehingga tidak boleh digunakan untuk menyimpan rahasia.

## 9. Technical Overview

### Frontend Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React

### Component Architecture

Komponen frontend dikelompokkan menggunakan pendekatan Atomic Design:

- `atoms`: komponen antarmuka dasar.
- `molecules`: gabungan beberapa komponen dasar.
- `organisms`: bagian antarmuka yang lebih kompleks.
- `templates`: susunan komponen untuk membentuk halaman.

### API Integration

Fungsi komunikasi dengan backend dikelola di `lib/api.ts`.

Endpoint utama yang digunakan:

| Endpoint | Purpose |
| --- | --- |
| `/api/perusahaans` | Mengambil data perusahaan atau tempat PKL, termasuk pencarian berdasarkan nama. |
| `/api/cabangs` | Mengambil data cabang untuk kebutuhan perusahaan tertentu. |

Definisi tipe data perusahaan berada di `types/company.ts`.

Alamat dasar API dapat diatur melalui `NEXT_PUBLIC_API_BASE_URL`. Jika variabel tersebut tidak ditentukan, frontend menggunakan alamat bawaan yang didefinisikan dalam kode.

## 10. Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Beranda. |
| `/about` | Halaman Tentang. |
| `/katalog` | Katalog tempat PKL. |
| `/katalog/[id]` | Halaman detail tempat PKL berdasarkan parameter rute. |

## 11. Assumptions and Constraints

- Ketersediaan data tempat PKL bergantung pada backend API.
- Katalog saat ini mengambil maksimal 100 data perusahaan per permintaan.
- Pencarian nama diproses melalui filter backend, sedangkan filter jurusan diproses di frontend.
- Filter jurusan hanya dapat memproses data yang berhasil diterima.
- Pagination dan fitur Load More belum tersedia pada katalog.
- Informasi kuota mengikuti data dari backend dan tidak selalu menunjukkan sisa kuota aktual.
- Tidak semua tempat PKL memiliki logo, informasi cabang, atau data lengkap untuk setiap bagian detail.
- Informasi lokasi dan Google Maps ditampilkan sesuai ketersediaan data serta dukungan implementasi.
- Informasi yang ditampilkan bergantung pada kelengkapan dan keakuratan data backend.
- Pengelolaan data tempat PKL dilakukan di luar frontend saat ini.

## 12. Success Criteria

PKLspace dianggap memenuhi tujuan utamanya apabila:

1. Siswa dapat mengakses daftar tempat PKL.
2. Siswa dapat mencari tempat PKL berdasarkan nama dan memfilter tempat PKL berdasarkan jurusan menggunakan data yang tersedia.
3. Siswa dapat membuka halaman detail dan membaca informasi tempat PKL yang tersedia.
4. Rekomendasi tempat PKL dapat mengarahkan pengguna ke katalog dengan jurusan yang sesuai.
5. Antarmuka dapat digunakan pada perangkat desktop dan ponsel.
6. Aplikasi dapat mengambil dan menampilkan data backend ketika layanan tersedia.

## 13. Future Improvements

Pengembangan selanjutnya dapat mempertimbangkan:

- Penambahan pagination atau fitur Load More pada katalog.
- Pemindahan filter jurusan ke backend agar dapat memproses data dalam jumlah lebih besar.
- Penyempurnaan validasi dan pencocokan jurusan.
- Peningkatan penanganan kesalahan ketika backend tidak tersedia.
- Penambahan dan pemeliharaan data tempat PKL yang lebih lengkap.
- Peninjauan konsistensi tipe data, rute, dan aksesibilitas antarmuka.

Prioritas pengembangan lanjutan ditentukan berdasarkan evaluasi tim, kebutuhan pengguna, dan waktu pengembangan.