// 🎯 GURUKITA CONFIG - EDIT THIS FILE ONLY!
// ========================================
// Satu tempat untuk semua data yang bisa diedit

export const CONFIG = {
  // =================== HOMEPAGE DATA ===================
  homepage: {
    // Visitor counter (akan auto-increment)
    initialVisitorCount: 2341,

    // Trending facts yang muncul di homepage
    shockingFacts: [
      "Guru di Surabaya butuh 18 bulan untuk iPhone",
      "Guru di Jakarta butuh 12 bulan untuk DP rumah",
      "Software Engineer butuh 3 bulan untuk iPhone"
    ],

    // Social proof percentages
    shockedPercentage: 0.7,  // 70% dari visitor kaget
    sharedPercentage: 0.3    // 30% dari visitor share
  },

  // =================== TEACHER PROFILES ===================
  // Format: id, title, location, level, experience, status, monthlySalary
  teachers: [
    {
      id: "teacher-1",
      title: "Guru SD Negeri (PNS)",
      location: "Jakarta Selatan, DKI Jakarta",
      level: "SD",
      experience: 5,
      status: "PNS Gol III/a",
      monthlySalary: 7500000,
      description: "Guru PNS di Jakarta dengan tunjangan kinerja daerah (TKD)",
      source: "https://www.detik.com/edu/sekolah/d-7130245/gaji-pns-guru-2024-naik-8-persen-ini-rincian-nominal-golongan-i-iv"
    },
    {
      id: "teacher-2",
      title: "Guru Honorer SD",
      location: "Kab. Semarang, Jawa Tengah",
      level: "SD",
      experience: 3,
      status: "Honorer",
      monthlySalary: 500000,
      description: "Guru honorer di sekolah dasar negeri kabupaten",
      source: "https://dataindonesia.id/pendidikan/detail/survei-gaji-guru-honorer-di-bawah-rp2-juta-pada-2024"
    },
    {
      id: "teacher-3",
      title: "Guru Honorer SMA",
      location: "Bandung, Jawa Barat",
      level: "SMA",
      experience: 5,
      status: "Honorer Provinsi",
      monthlySalary: 2500000,
      description: "Guru honorer tingkat SMA di bawah naungan provinsi",
      source: "https://www.ayobandung.com/pendidikan/pr-7911964132/gaji-guru-honorer-sma-di-jawa-barat-2024-tembus-rp25-juta-tapi-ada-syaratnya"
    },
    {
      id: "teacher-4",
      title: "Guru Honorer 3T",
      location: "Kupang, NTT",
      level: "SD",
      experience: 2,
      status: "Honorer Sekolah",
      monthlySalary: 300000,
      description: "Guru honorer di daerah terdepan, terluar, tertinggal",
      source: "https://tirto.id/gaji-guru-honorer-sd-smp-sma-2024-dan-tunjangan-jika-diangkat-pppk-g3jQ"
    },
    {
      id: "teacher-5",
      title: "Guru PNS Senior",
      location: "Jayapura, Papua",
      level: "SMA",
      experience: 15,
      status: "PNS Gol IV",
      monthlySalary: 6000000,
      description: "Guru PNS senior dengan tunjangan kemahalan khusus Papua",
      source: "https://www.klikpendidikan.id/news/35812039864/sri-mulyani-resmi-tetapkan-standar-gaji-honorer-di-papua-tembus-rp4-juta-per-bulan-segini-nominalnya"
    }
  ],

  // =================== ITEMS TO CALCULATE ===================
  // Format: id, name, category, price
  items: [
    {
      id: "dp-rumah",
      name: "DP Rumah Sederhana",
      category: "housing",
      price: 60000000,
      description: "Uang muka untuk rumah sederhana type 36",
      icon: "🏠"
    },
    {
      id: "biaya-nikah",
      name: "Biaya Pernikahan",
      category: "family",
      price: 50000000,
      description: "Biaya resepsi pernikahan sederhana",
      icon: "💒"
    },
    {
      id: "iphone",
      name: "iPhone 15 Pro",
      category: "technology",
      price: 20000000,
      description: "iPhone 15 Pro 128GB",
      icon: "📱"
    },
    {
      id: "motor",
      name: "Motor Bebek",
      category: "transportation",
      price: 18000000,
      description: "Honda Beat atau Yamaha Mio",
      icon: "🏍️"
    },
    {
      id: "laptop",
      name: "Laptop Kerja",
      category: "technology",
      price: 8000000,
      description: "Laptop untuk menunjang pekerjaan",
      icon: "💻"
    },
    {
      id: "kursus-master",
      name: "Kursus Master S2",
      category: "education",
      price: 25000000,
      description: "Biaya kuliah S2 1 semester",
      icon: "🎓"
    },
    {
      id: "asuransi",
      name: "Asuransi Kesehatan",
      category: "health",
      price: 3600000,
      description: "Premi asuransi kesehatan 1 tahun",
      icon: "🏥"
    },
    {
      id: "buku-anak",
      name: "Buku Pelajaran Anak",
      category: "education",
      price: 1500000,
      description: "Buku dan alat tulis untuk 1 tahun",
      icon: "📚"
    },
    {
      id: "cek-darurat",
      name: "Cek Darurat Rumah Sakit",
      category: "health",
      price: 2000000,
      description: "Biaya cek darurat dan perawatan ringan",
      icon: "🚑"
    },
    {
      id: "umroh",
      name: "Paket Umroh",
      category: "religious",
      price: 25000000,
      description: "Paket umroh 12 hari",
      icon: "🕋"
    }
  ],

  // =================== COMPARISON DATA ===================
  // Untuk perbandingan dengan profesi lain
  comparisons: {
    softwareEngineer: {
      name: "Software Engineer",
      monthlySalary: 15000000,
      monthsForIphone: 3
    },
    doctor: {
      name: "Dokter",
      monthlySalary: 12000000,
      monthsForIphone: 4
    },
    accountant: {
      name: "Akuntan",
      monthlySalary: 8000000,
      monthsForIphone: 6
    }
  },

  // =================== CALCULATOR SETTINGS ===================
  calculator: {
    // Asumsi perhitungan
    assumptions: "Perhitungan mengasumsikan guru nabung 100% gaji (tanpa makan, listrik, dll)",

    // Warna dan emoji untuk severity
    severity: {
      red: { months: 6, emoji: "🔴", label: "Sangat menantang" },
      amber: { months: 2, emoji: "🟡", label: "Cukup menantang" },
      green: { months: 0, emoji: "🟢", label: "Terjangkau" }
    }
  },

  // =================== APP SETTINGS ===================
  app: {
    name: "GuruKita",
    tagline: "Platform transparansi gaji guru Indonesia",
    currency: "IDR",
    language: "id-ID"
  }
}

// Export individual sections untuk kemudahan
export const { homepage, teachers, items, comparisons, calculator, app } = CONFIG