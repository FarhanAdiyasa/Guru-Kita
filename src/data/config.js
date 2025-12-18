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
      id: "guru-agama-jkt",
      title: "Guru Agama Kristen",
      location: "Duren Sawit, Jakarta",
      level: "SD",
      experience: 1,
      status: "Honorer",
      monthlySalary: 300000,
      description: "Gaji sangat minim di tengah biaya hidup Jakarta yang tinggi",
      source: "https://www.detik.com/edu/sekolah/d-7059354/masih-ada-guru-digaji-rp-300-ribu-di-jakarta-diduga-karena-ini"
    },
    {
      id: "guru-surabaya",
      title: "Guru Honorer",
      location: "Surabaya, Jatim",
      level: "SD-SMP",
      experience: 1,
      status: "Honorer",
      monthlySalary: 785000,
      description: "Slip gaji viral, dibayar per jam pelajaran",
      source: "https://jabar.tribunnews.com/2023/10/09/viral-gaji-guru-honorer-rp15000-per-satu-jam-pelajaran-begini-aturannya-menurut-undang-undang"
    },
    {
      id: "guru-bone",
      title: "Guru Honorer",
      location: "Bone, Sulsel",
      level: "SD",
      experience: 13,
      status: "Honorer",
      monthlySalary: 175000,
      description: "Dipecat karena mengunggah slip gaji ke media sosial",
      source: "https://www.bbc.com/indonesia/indonesia-56094473"
    },
    {
      id: "guru-tari",
      title: "Guru Tari",
      location: "Lumajang, Jatim",
      level: "SD",
      experience: 21,
      status: "Honorer",
      monthlySalary: 250000,
      description: "Jual baju tari untuk menutupi kebutuhan hidup",
      source: "https://www.youtube.com/watch?v=_yR_fP3CxqY"
    },
    {
      id: "guru-bogor",
      title: "Guru Honorer",
      location: "Bogor, Jabar",
      level: "SD",
      experience: 36,
      status: "Honorer",
      monthlySalary: 250000,
      description: "36 tahun mengabdi, gaji tetap Rp 250 ribu",
      source: "https://www.youtube.com/watch?v=TVlO3QJroQ8"
    },
    {
      "id": "guru-bengkulu-tengah",
      "title": "Guru Honorer",
      "location": "Bengkulu Tengah, Bengkulu",
      "level": "SD",
      "experience": 10,
      "status": "Honorer",
      "monthlySalary": 300000,
      "description": "Gaji Rp 300 ribu per bulan, dibayar setiap 3 bulan sekali",
      "source": "https://bengkulu.tribunnews.com/2023/10/27/gaji-guru-honorer-di-bengkulu-tengah-hanya-rp-300-ribu-per-bulan-pgri-desak-pemkab-turun-tangan"
    },

    // =================== GURU PPPK (Paruh Waktu) ===================
    {
      id: "pppk-jabar",
      title: "Guru PPPK",
      location: "Jawa Barat",
      level: "SMP",
      experience: 3,
      status: "PPPK",
      monthlySalary: 4000000,
      description: "UMP + tunjangan kinerja + tunjangan profesi (jika sertifikasi)",
      source: "https://dealls.com/pengembangan-karir/gaji-pppk"
    },
    {
      id: "pppk-jateng",
      title: "Guru PPPK",
      location: "Jawa Tengah",
      level: "SD",
      experience: 5,
      status: "PPPK",
      monthlySalary: 4200000,
      description: "UMP + tunjangan kinerja variatif + tunjangan profesi",
      source: "https://dealls.com/pengembangan-karir/gaji-pppk"
    },
    {
      id: "pppk-jatim",
      title: "Guru PPPK",
      location: "Jawa Timur",
      level: "SMA",
      experience: 4,
      status: "PPPK",
      monthlySalary: 4500000,
      description: "UMP Rp 2,3 juta + tunjangan kinerja + tunjangan profesi",
      source: "https://dealls.com/pengembangan-karir/gaji-pppk"
    },
    {
      id: "pppk-sulsel",
      title: "Guru PPPK",
      location: "Sulawesi Selatan",
      level: "SMP",
      experience: 6,
      status: "PPPK",
      monthlySalary: 5500000,
      description: "UMP Rp 3,6 juta + tunjangan kinerja + tunjangan profesi",
      source: "https://dealls.com/pengembangan-karir/gaji-pppk"
    },
    {
      id: "pppk-dki",
      title: "Guru PPPK",
      location: "DKI Jakarta",
      level: "SMA",
      experience: 5,
      status: "PPPK",
      monthlySalary: 7000000,
      description: "Golongan III/a + TKD + tunjangan profesi (total Rp 6-8 juta)",
      source: "https://flotim.pikiran-rakyat.com/ekonomi/pr-3669861180/mengintip-gaji-guru-tertinggi-di-indonesia-2025-dari-pns-pppk-hingga-sekolah-internasional"
    },

    // =================== GURU PNS ===================
    {
      id: "pns-dki-junior",
      title: "Guru PNS",
      location: "DKI Jakarta",
      level: "SMP",
      experience: 5,
      status: "PNS",
      monthlySalary: 8000000,
      description: "Golongan III + TKD + tunjangan profesi (guru junior)",
      source: "https://flotim.pikiran-rakyat.com/ekonomi/pr-3669861180/mengintip-gaji-guru-tertinggi-di-indonesia-2025-dari-pns-pppk-hingga-sekolah-internasional"
    },
    {
      id: "pns-dki-senior",
      title: "Guru PNS Senior",
      location: "DKI Jakarta",
      level: "SMA",
      experience: 20,
      status: "PNS",
      monthlySalary: 15000000,
      description: "Golongan IV + TKD Rp 9-10 juta + tunjangan profesi + jabatan",
      source: "https://flotim.pikiran-rakyat.com/ekonomi/pr-3669861180/mengintip-gaji-guru-tertinggi-di-indonesia-2025-dari-pns-pppk-hingga-sekolah-internasional"
    }
  ],


  // =================== ITEMS TO CALCULATE ===================
  // Format: id, name, category, price
  items: [
    {
      id: "rumah-prefab",
      name: "Tiny Home Gaoshi",
      category: "housing",
      price: 250000000,
      description: "Prefab Minimalis 35m², 2 Kamar (Viral di TikTok)",
      icon: "🏠"
    },
    {
      id: "mobil-ev",
      name: "Wuling Air EV",
      category: "transportation",
      price: 238000000,
      description: "Mobil listrik compact 'Long Range' viral",
      icon: "🚗"
    },
    {
      id: "iphone",
      name: "iPhone 17 Pro Max",
      category: "technology",
      price: 35000000,
      description: "1TB Storage, Titanium Finish (Future Release)",
      icon: "📱"
    },
    {
      id: "ipad-pro",
      name: "iPad Pro M4",
      category: "technology",
      price: 19499000,
      description: "11-inch, 256GB WiFi, Chip M4",
      icon: "🖊️"
    },
    {
      id: "laptop-gaming",
      name: "ASUS TUF A15",
      category: "technology",
      price: 15000000,
      description: "Edisi 2025, RTX 4050 + Ryzen 7",
      icon: "💻"
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
      id: "umroh",
      name: "Paket Umroh",
      category: "religious",
      price: 25000000,
      description: "Paket umroh 12 hari",
      icon: "🕋"
    },
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