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
    // --- HONORER DAERAH & 3T ---
    {
      id: "guru-sikka",
      title: "Guru Honorer Pedalaman",
      location: "Sikka, NTT (3T)",
      level: "SD",
      experience: 5,
      status: "Honorer",
      monthlySalary: 300000,
      source: "https://www.youtube.com/watch?v=u8R2_X5It0Q"
    },
    {
      id: "guru-papua",
      title: "Guru Honorer Pegunungan",
      location: "Papua Pegunungan",
      level: "SD",
      experience: 3,
      status: "Honorer",
      monthlySalary: 500000,
      source: "https://www.kompas.id/baca/humaniora/2023/11/24/nasib-guru-honorer-di-pedalaman-papua"
    },
    {
      id: "guru-bone",
      title: "Guru Honorer Viral",
      location: "Bone, Sulsel",
      level: "SD",
      experience: 13,
      status: "Honorer",
      monthlySalary: 175000,
      source: "https://www.bbc.com/indonesia/indonesia-56094473"
    },
    {
      id: "guru-medan",
      title: "Guru Honorer Sekolah",
      location: "Medan, Sumatera Utara",
      level: "SMP",
      experience: 8,
      status: "Honorer",
      monthlySalary: 450000,
      source: "https://medan.tribunnews.com/2023/11/25/kisah-pilu-guru-honorer-di-medan-gaji-kecil-dituntut-administrasi-rumit"
    },
    {
      id: "guru-bengkulu-tengah",
      title: "Guru Honorer",
      location: "Bengkulu Tengah",
      level: "SD",
      experience: 10,
      status: "Honorer",
      monthlySalary: 300000,
      source: "https://bengkulu.tribunnews.com/2023/10/27/gaji-guru-honorer-di-bengkulu-tengah-hanya-rp-300-ribu-per-bulan-pgri-desak-pemkab-turun-tangan"
    },

    // --- HONORER JAWA ---
    {
      id: "guru-toilet",
      title: "Guru Honorer",
      location: "Pandeglang, Banten",
      level: "SD",
      experience: 15,
      status: "Honorer",
      monthlySalary: 350000,
      source: "https://regional.kompas.com/read/2019/07/15/15243301/15-tahun-jadi-guru-honorer-ini-alasan-nining-tetap-bertahan-dan-tinggal-di"
    },
    {
      id: "guru-bogor",
      title: "Guru Honorer Senior",
      location: "Bogor, Jabar",
      level: "SD",
      experience: 36,
      status: "Honorer",
      monthlySalary: 250000,
      source: "https://www.youtube.com/watch?v=TVlO3QJroQ8"
    },
    {
      id: "guru-surabaya",
      title: "Guru Honorer Jam-jaman",
      location: "Surabaya, Jatim",
      level: "SD-SMP",
      experience: 1,
      status: "Honorer",
      monthlySalary: 785000,
      source: "https://jabar.tribunnews.com/2023/10/09/viral-gaji-guru-honorer-rp15000-per-satu-jam-pelajaran-begini-aturannya-menurut-undang-undang"
    },
    {
      id: "guru-agama-jkt",
      title: "Guru Agama Honorer",
      location: "Jakarta Timur",
      level: "SD",
      experience: 2,
      status: "Honorer",
      monthlySalary: 300000,
      source: "https://www.detik.com/edu/sekolah/d-7059354/masih-ada-guru-digaji-rp-300-ribu-di-jakarta-diduga-karena-ini"
    },

    // --- PPPK (ASN) ---
    {
      id: "pppk-jabar",
      title: "Guru PPPK",
      location: "Jawa Barat",
      level: "SMP",
      experience: 3,
      status: "PPPK",
      monthlySalary: 3800000,
      source: "https://dealls.com/pengembangan-karir/gaji-pppk"
    },
    {
      id: "pppk-sulsel",
      title: "Guru PPPK",
      location: "Sulawesi Selatan",
      level: "SMP",
      experience: 6,
      status: "PPPK",
      monthlySalary: 4200000,
      source: "https://dealls.com/pengembangan-karir/gaji-pppk"
    },
    {
      id: "pppk-dki",
      title: "Guru PPPK Jakarta",
      location: "DKI Jakarta",
      level: "SMA",
      experience: 5,
      status: "PPPK",
      monthlySalary: 6800000,
      source: "https://flotim.pikiran-rakyat.com/ekonomi/pr-3669861180/mengintip-gaji-guru-tertinggi-di-indonesia-2025-dari-pns-pppk-hingga-sekolah-internasional"
    },

    // --- PNS & SWASTA ---
    {
      id: "pns-dki-senior",
      title: "Guru PNS Senior (IV/a)",
      location: "DKI Jakarta",
      level: "SMA",
      experience: 20,
      status: "PNS",
      monthlySalary: 14500000,
      source: "https://flotim.pikiran-rakyat.com/ekonomi/pr-3669861180/mengintip-gaji-guru-tertinggi-di-indonesia-2025-dari-pns-pppk-hingga-sekolah-internasional"
    },
    {
      id: "guru-inter",
      title: "Guru International School",
      location: "Jakarta Selatan",
      level: "SMA",
      experience: 8,
      status: "Swasta",
      monthlySalary: 18000000,
      source: "https://pina.id/artikel/keuangan/gaji-guru-di-indonesia-berapa-sih-standarnya"
    }
  ],


  // =================== ITEMS TO CALCULATE ===================
  // Format: id, name, category, price
  items: [
    // --- KEBUTUHAN DASAR & KERJA ---
    {
      id: "laptop-guru",
      name: "Laptop Kerja (Entry)",
      category: "technology",
      price: 5500000,
      icon: "💻"
    },
    {
      id: "motor-beat",
      name: "Honda Beat 2024",
      category: "transportation",
      price: 18500000,
      icon: "🛵"
    },
    {
      id: "ppg-mandiri",
      name: "Biaya PPG Mandiri",
      category: "education",
      price: 17000000,
      icon: "🎓"
    },
    {
      id: "kost-jakarta",
      name: "Sewa Kos Jakarta (1 Thn)",
      category: "housing",
      price: 24000000,
      icon: "🏠"
    },

    // --- DREAM ITEMS (MID) ---
    {
      id: "umroh",
      name: "Paket Umroh Hemat",
      category: "religious",
      price: 28500000,
      icon: "🕋"
    },
    {
      id: "iphone-15",
      name: "iPhone 15 (128GB)",
      category: "technology",
      price: 16499000,
      icon: "📱"
    },
    {
      id: "biaya-nikah",
      name: "Resepsi Nikah Sederhana",
      category: "family",
      price: 60000000,
      icon: "💍"
    },

    // --- DREAM ITEMS (HIGH) ---
    {
      id: "rumah-subsidi",
      name: "Rumah Subsidi (BTN)",
      category: "housing",
      price: 185000000,
      icon: "🏡"
    },
    {
      id: "mobil-lcgc",
      name: "Toyota Calya G",
      category: "transportation",
      price: 190000000,
      icon: "🚗"
    },
    {
      id: "haji-plus",
      name: "Haji Plus (ONH)",
      category: "religious",
      price: 165000000,
      icon: "🕌"
    },
    {
      id: "iphone-15-promax",
      name: "iPhone 15 Pro Max",
      category: "technology",
      price: 24999000,
      icon: "📲"
    },

    // --- SPECIAL ---
    {
      id: "all-items",
      name: "Langsung Cek Semuanya",
      category: "special",
      price: 0,
      icon: "⚡"
    }
  ],

  // =================== COMPARISON DATA ===================
  // Untuk perbandingan dengan profesi lain
  comparisons: {
    softwareEngineer: {
      name: "Software Engineer",
      monthlySalary: 18000000,
      monthsForIphone: 1
    },
    doctor: {
      name: "Dokter Umum (RS)",
      monthlySalary: 15000000,
      monthsForIphone: 2
    },
    bumn: {
      name: "Staf BUMN (Entry)",
      monthlySalary: 9000000,
      monthsForIphone: 3
    }
  },

  // =================== CALCULATOR SETTINGS ===================
  calculator: {
    // Warna dan emoji untuk severity
    severity: {
      red: { months: 6, emoji: "🔴" },
      amber: { months: 2, emoji: "🟡" },
      green: { months: 0, emoji: "🟢" }
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