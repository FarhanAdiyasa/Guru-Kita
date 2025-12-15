export interface LoreStory {
    id: string
    title: string
    name: string
    role: string
    location: string
    salary: string
    story: string
    quote: string
    sideHustle: string
    source: string
    sourceUrl: string
    image: string
    color: string
}

export const LORE_STORIES: LoreStory[] = [
    {
        id: "ervina-ntt",
        title: "6 Kilometer Menembus Hutan",
        name: "Vinsensia Ervina Talluma",
        role: "Guru Honorer SD",
        location: "Sikka, NTT",
        salary: "Rp 300.000/bulan",
        story: "Setiap pagi, Ervina menembus hutan dan jalan terjal sejauh 6 km. Lututnya sering gemetar di tanjakan, tapi ia terus berjalan karena sekolah di dusun terpencil itu tak punya guru lain.",
        quote: "Saya capek, lutut sering gemetar... tapi kalau saya tidak datang, anak-anak di sini tidak punya guru.",
        sideHustle: "Bertani ubi untuk makan sehari-hari",
        source: "YouTube",
        sourceUrl: "https://www.youtube.com/watch?v=u8R2_X5It0Q",
        image: "/images/6 Kilometer Menembus Hutan.png",
        color: "emerald"
    },
    {
        id: "nining-banten",
        title: "Tinggal di Toilet Sekolah",
        name: "Nining Suryani",
        role: "Guru Honorer SD",
        location: "Pandeglang, Banten",
        salary: "Rp 350.000/3 bulan",
        story: "Setelah rumahnya roboh, Nining dan keluarganya tinggal di bekas toilet sekolah. Tempat orang membuang kotoran disulap jadi tempat istirahat dan membesarkan anak.",
        quote: "Kadang saya malu kalau murid tahu gurunya tinggal di samping WC. Tapi kalau berhenti, siapa yang biayai anak saya?",
        sideHustle: "Mengandalkan suami kerja serabutan",
        source: "Kompas.com",
        sourceUrl: "https://regional.kompas.com/read/2019/07/15/15243301/15-tahun-jadi-guru-honorer-ini-alasan-nining-tetap-bertahan-dan-tinggal-di",
        image: "/images/Tinggal di Toilet Sekolah.png",
        color: "slate"
    },
    {
        id: "alvi-sukabumi",
        title: "Pulang Mengajar Jadi Pemulung",
        name: "Pak Alvi",
        role: "Guru Honorer MTs",
        location: "Sukabumi, Jawa Barat",
        salary: "Sangat Minim",
        story: "36 tahun mengabdi. Pagi menulis di papan tulis, sore memungut botol plastik. Murid-muridnya sering mencium tangannya saat ia sedang memulung sampah.",
        quote: "Pagi saya menulis nama murid. Sore saya menulis harga botol bekas. Saya ingin murid saya punya pekerjaan lebih baik dari gurunya.",
        sideHustle: "Pemulung barang bekas",
        source: "FajarSumbar",
        sourceUrl: "https://www.fajarsumbar.com/2024/10/kisah-inspiratif-guru-honorer-yang.html",
        image: "/images/Pulang Mengajar Jadi Pemulung.png",
        color: "orange"
    },
    {
        id: "ribut-lumajang",
        title: "Menyewakan Baju Tari",
        name: "Ribut Santoso",
        role: "Guru Tari",
        location: "Lumajang, Jawa Timur",
        salary: "Rp 250.000/bulan",
        story: "21 tahun mengabdi, menempuh 18 km setiap hari. Gajinya habis untuk bensin. Ia bertahan hidup dengan menyewakan kostum tari jahitannya sendiri.",
        quote: "Setiap ingin berhenti, saya ingat wajah anak-anak menari di panggung. Bensin mungkin habis, tapi bangga saya tidak.",
        sideHustle: "Sewa kostum & konten kreator",
        source: "YouTube",
        sourceUrl: "https://www.youtube.com/watch?v=_yR_fP3CxqY",
        image: "/images/Menyewakan Baju Tari.png",
        color: "pink"
    }
]
