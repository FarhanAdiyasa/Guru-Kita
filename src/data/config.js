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
      title: "Guru SD Negeri",
      location: "Semarang, Jawa Tengah",
      level: "SD",
      experience: 2,
      status: "PNS",
      monthlySalary: 1900000,
      description: "Guru sekolah dasar negeri dengan 2 tahun pengalaman"
    },
    {
      id: "teacher-2",
      title: "Guru SD Swasta",
      location: "Jakarta Pusat, DKI Jakarta",
      level: "SD",
      experience: 3,
      status: "Honorer",
      monthlySalary: 2800000,
      description: "Guru sekolah dasar swasta dengan 3 tahun pengalaman"
    },
    {
      id: "teacher-3",
      title: "Guru SMA Negeri",
      location: "Surabaya, Jawa Timur",
      level: "SMA",
      experience: 10,
      status: "PNS",
      monthlySalary: 4200000,
      description: "Guru sekolah menengah atas negeri dengan 10 tahun pengalaman"
    },
    {
      id: "teacher-4",
      title: "Guru SMP Swasta",
      location: "Bandung, Jawa Barat",
      level: "SMP",
      experience: 5,
      status: "Honorer",
      monthlySalary: 2100000,
      description: "Guru sekolah menengah pertama swasta dengan 5 tahun pengalaman"
    },
    {
      id: "teacher-5",
      title: "Guru TK Negeri",
      location: "Yogyakarta, DIY",
      level: "TK",
      experience: 7,
      status: "PNS",
      monthlySalary: 2500000,
      description: "Guru taman kanak-kanak negeri dengan 7 tahun pengalaman"
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