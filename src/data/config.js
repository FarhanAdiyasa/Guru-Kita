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
      description: "Menembus hutan 6km setiap hari demi mengajar",
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
      description: "Biaya hidup sangat tinggi (bensin 50rb/liter), gaji dirapel per 3 bulan",
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
      description: "Dipecat karena mengunggah slip gaji ke media sosial",
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
      description: "Hanya digaji dari dana BOS, sering telat cair",
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
      description: "Gaji Rp 300 ribu per bulan, dibayar setiap 3 bulan sekali",
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
      description: "Terpaksa tinggal di toilet sekolah karena tidak mampu bayar kos",
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
      description: "36 tahun mengabdi, gaji tetap Rp 250 ribu",
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
      description: "Dibayar berdasarkan jam mengajar, tidak ada jam = tidak ada gaji",
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
      description: "Gaji sangat minim di tengah biaya hidup Jakarta yang tinggi",
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
      description: "Setelah potong pajak & BPJS dari gaji pokok + tunjangan",
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
      description: "Gaji lebih stabil dibanding honorer, namun kontrak terbatas",
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
      description: "Termasuk TKD Daerah yang tinggi dibanding provinsi lain",
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
      description: "Gapok + TKD + Sertifikasi + Jabatan (Tier Tertinggi)",
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
      description: "Sekolah internasional kurikulum Cambridge/IB",
      source: "https://www.cnbcindonesia.com/news/20230502130541-4-434002/intip-gaji-guru-sekolah-internasional-di-jakarta-bisa-puluhan-juta"
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
      description: "Laptop spek minimum untuk administrasi & mengajar (Core i3)",
      icon: "💻"
    },
    {
      id: "motor-beat",
      name: "Honda Beat 2024",
      category: "transportation",
      price: 18500000,
      description: "Kendaraan sejuta umat untuk operasional mengajar",
      icon: "🛵"
    },
    {
      id: "ppg-mandiri",
      name: "Biaya PPG Mandiri",
      category: "education",
      price: 17000000,
      description: "Pendidikan Profesi Guru (agar dapat sertifikasi)",
      icon: "🎓"
    },
    {
      id: "kost-jakarta",
      name: "Sewa Kos Jakarta (1 Thn)",
      category: "housing",
      price: 24000000,
      description: "Kos standar AC di Jakarta (2jt/bulan)",
      icon: "🏠"
    },

    // --- DREAM ITEMS (MID) ---
    {
      id: "umroh",
      name: "Paket Umroh Hemat",
      category: "religious",
      price: 28500000,
      description: "Paket standar 9 hari (Update Hrg 2024)",
      icon: "🕋"
    },
    {
      id: "iphone-15",
      name: "iPhone 15 (128GB)",
      category: "technology",
      price: 16499000,
      description: "HP standar gaya hidup masa kini",
      icon: "📱"
    },
    {
      id: "biaya-nikah",
      name: "Resepsi Nikah Sederhana",
      category: "family",
      price: 60000000,
      description: "Biaya katering & dekorasi venue sederhana",
      icon: "💍"
    },

    // --- DREAM ITEMS (HIGH) ---
    {
      id: "rumah-subsidi",
      name: "Rumah Subsidi (BTN)",
      category: "housing",
      price: 185000000,
      description: "Rumah tapak tipe 30/60 program pemerintah (Jabodetabek)",
      icon: "🏡"
    },
    {
      id: "mobil-lcgc",
      name: "Toyota Calya G",
      category: "transportation",
      price: 190000000,
      description: "Mobil keluarga 7-seater paling terjangkau",
      icon: "🚗"
    },
    {
      id: "haji-plus",
      name: "Haji Plus (ONH)",
      category: "religious",
      price: 165000000,
      description: "Masa tunggu lebih singkat (5-7 tahun)",
      icon: "🕌"
    },
    {
      id: "iphone-15-promax",
      name: "iPhone 15 Pro Max",
      category: "technology",
      price: 24999000,
      description: "HP Flagship tertinggi saat ini",
      icon: "📲"
    },

    // --- SPECIAL ---
    {
      id: "all-items",
      name: "Langsung Cek Semuanya",
      category: "special",
      price: 0,
      description: "Lihat kalkulasi untuk semua barang sekaligus",
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