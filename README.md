# Guru Kita 🇮🇩

**Guru Kita** adalah aplikasi interaktif yang dirancang untuk meningkatkan kesadaran tentang realitas finansial guru di Indonesia. Aplikasi ini membantu pengguna memvisualisasikan tantangan ekonomi yang dihadapi guru melalui kalkulator tabungan dan simulasi biaya hidup yang realistis.

![Guru Kita Banner](/public/banner.png) 
*(Note: Add a screenshot or banner here if available)*

## 🌟 Fitur Utama

-   **Pilih Profil Guru**: Bandingkan berbagai tingkat pendapatan guru (Honorer, PNS Golongan Rendah, PNS Senior) untuk melihat perbedaan daya beli.
-   **Kalkulator Tabungan**: Hitung berapa lama seorang guru harus menabung untuk membeli barang impian (Rumah, Kendaraan, Gadget, Ibadah).
-   **Reality Check Mode**: Masukkan biaya hidup bulanan untuk melihat sisa tabungan yang realistis (atau minus!).
-   **Timeline Visual**: Drag-and-drop item impian untuk memprioritaskan target tabungan.
-   **Analisis Keterjangkauan**: Indikator visual (warna & emoji) yang menunjukkan apakah suatu barang "Terjangkau", "Menantang", atau "Mustahil".

## 🛠️ Teknologi

Project ini dibangun menggunakan teknologi web modern:

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Interactivity**: [dnd-kit](https://dndkit.com/) (untuk fitur drag & drop)
-   **Database**: [Supabase](https://supabase.com/) (Optional/Integration ready)

## 🚀 Cara Menjalankan

Ikuti langkah-langkah ini untuk menjalankan project di komputer lokal Anda:

1.  **Clone Repository**
    ```bash
    git clone https://github.com/FarhanAdiyasa/Guru-Kita.git
    cd guru-kita
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

3.  **Setup Environment Variables**
    Salin file contoh konfigurasi:
    ```bash
    cp .env.local.example .env.local
    ```
    Isi variable yang diperlukan di file `.env.local` (jika menggunakan fitur yang membutuhkan backend/database).

4.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```

5.  **Buka Aplikasi**
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📂 Struktur Project

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
│   ├── GuruSelection.tsx    # Halaman pemilihan profil guru
│   ├── Result.tsx           # Halaman hasil kalkulasi & timeline
│   ├── TeacherProfileCard.tsx # Komponen kartu profil
│   └── ...
├── data/             # Static data & configuration
├── types/            # TypeScript definitions
└── ...
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat *Issue* untuk mendiskusikan fitur baru atau *Pull Request* untuk perbaikan bug.

1.  Fork repository ini
2.  Buat branch fitur Anda (`git checkout -b fitur-keren`)
3.  Commit perubahan Anda (`git commit -m 'Menambahkan fitur keren'`)
4.  Push ke branch (`git push origin fitur-keren`)
5.  Buat Pull Request

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](LICENSE).

---
*Dibuat dengan ❤️ untuk pendidikan Indonesia.*
