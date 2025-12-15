'use client'

import Image from 'next/image'
import { ArrowLeft, Calculator, ExternalLink, AlertTriangle, TrendingDown, Info } from 'lucide-react'
import { LORE_STORIES } from '@/data/lore'

interface LoreProps {
    onBack: () => void
    onTryNow: () => void
}

// Spectrum data - from worst to best
const SALARY_SPECTRUM = [
    {
        label: 'Guru Honorer',
        salary: 'Rp 300rb',
        subtext: 'Bertahan hidup',
        timeForIphone: '10+ tahun',
        // Styling matching TeacherProfileCard
        cardBg: 'bg-[#FFF5F5]', // Light red tint
        salaryColor: 'text-red-600',
        badgeColor: 'bg-red-100 text-red-800',
    },
    {
        label: 'Guru PNS',
        salary: 'Rp 4,5jt',
        subtext: 'Cukup, tapi tetap rendah',
        timeForIphone: '8 bulan',
        cardBg: 'bg-[#FFFBEB]', // Light amber tint
        salaryColor: 'text-amber-600',
        badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
        label: 'Profesi Lain',
        salary: 'Rp 10jt',
        subtext: 'Lulusan universitas, kualifikasi setara',
        timeForIphone: '3-4 bulan',
        cardBg: 'bg-[#F0F9FF]', // Light blue tint
        salaryColor: 'text-blue-600',
        badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
        label: 'Guru Singapura',
        salary: 'Rp 46jt',
        subtext: 'Dihargai setara profesional',
        timeForIphone: '< 1 bulan',
        cardBg: 'bg-[#ECFDF5]', // Light emerald tint
        salaryColor: 'text-emerald-600',
        badgeColor: 'bg-emerald-100 text-emerald-800',
    }
]

export default function Lore({ onBack, onTryNow }: LoreProps) {
    return (
        <div className="min-h-screen w-full bg-white">
            <div className="w-full max-w-6xl mx-auto px-4 py-12">
                {/* Navigation */}
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-12 group"
                >
                    <div className="p-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-all">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-base">Kembali</span>
                </button>

                {/* Header - Bold & Editorial */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 leading-tight">
                        Kenapa Ini <span className="text-red-600">Penting?</span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        Ini bukan soal beberapa guru yang kurang beruntung.
                        <br />Ini adalah <span className="text-gray-900 font-bold">krisis sistemik</span> yang menghantam:
                    </p>

                    {/* Three-part impact badges - Solid & Bold */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm sm:text-base font-bold">
                        <span className="px-4 py-2 bg-red-100 text-red-800 rounded-lg">
                            Guru honorer: kemiskinan ekstrem
                        </span>
                        <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg">
                            Guru PNS: dibayar di bawah profesi lain
                        </span>
                        <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                            Anak Indonesia: diajar oleh orang yang tak dihargai
                        </span>
                    </div>
                </div>

                {/* === SECTION 1: TWO CRISES === */}
                <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Crisis 1: Emergency - Solid Card */}
                        <div className="bg-[#FFF5F5] rounded-2xl p-8 border-2 border-red-100">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                                <span className="text-lg font-black text-red-600 uppercase tracking-wider">Krisis Darurat</span>
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-6">Guru Honorer</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-800 font-medium">
                                    <span className="text-red-500 text-xl">•</span>
                                    <span className="text-xl">529.770 guru tanpa gaji layak</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-800 font-medium">
                                    <span className="text-red-500 text-xl">•</span>
                                    <span className="text-xl">Di bawah UMR, di bawah garis kemiskinan</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-800 font-medium">
                                    <span className="text-red-500 text-xl">•</span>
                                    <span className="text-xl">Bisa dipecat kapan saja tanpa perlindungan</span>
                                </li>
                            </ul>
                        </div>

                        {/* Crisis 2: Structural - Solid Card */}
                        <div className="bg-[#FFFBEB] rounded-2xl p-8 border-2 border-amber-100">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingDown className="w-8 h-8 text-amber-600" />
                                <span className="text-lg font-black text-amber-600 uppercase tracking-wider">Krisis Struktural</span>
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-6">Semua Guru Indonesia</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-800 font-medium">
                                    <span className="text-amber-500 text-xl">•</span>
                                    <span className="text-xl">Dibayar jauh lebih rendah dari profesi lain</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-800 font-medium">
                                    <span className="text-amber-500 text-xl">•</span>
                                    <span className="text-xl">Dibayar jauh lebih rendah dari guru negara tetangga</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-800 font-medium">
                                    <span className="text-amber-500 text-xl">•</span>
                                    <span className="text-xl">Mengajar generasi masa depan, diberi upah masa lalu</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xl text-gray-900 font-medium">
                            <span className="font-black">Akar masalahnya sama:</span> Indonesia tidak memprioritaskan pendidikan.
                        </p>
                    </div>
                </div>

                {/* === SECTION 2: SALARY SPECTRUM === */}
                <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-black text-gray-900 mb-4">Bandingkan Sendiri</h3>
                        <p className="text-xl text-gray-600">Spektrum gaji: dari yang paling rendah ke standar global</p>
                    </div>

                    {/* Spectrum Visual - Cards matching TeacherProfileCard style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {SALARY_SPECTRUM.map((item, index) => (
                            <div
                                key={index}
                                className={`
                                    ${item.cardBg} 
                                    rounded-xl p-6 
                                    flex flex-col h-full
                                    transition-transform hover:-translate-y-1 duration-200
                                `}
                            >
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                                    {item.label}
                                </h4>

                                <div className={`text-4xl font-black mb-2 ${item.salaryColor} tracking-tight`}>
                                    {item.salary}
                                    <span className="text-base font-bold text-gray-500 ml-1">/bln</span>
                                </div>

                                <p className="text-sm text-gray-700 mb-6 font-medium leading-snug flex-grow">
                                    {item.subtext}
                                </p>

                                <div className={`inline-flex items-center self-start px-3 py-1.5 rounded-lg text-xs font-bold ${item.badgeColor}`}>
                                    iPhone: {item.timeForIphone}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom insight text - Dark & Impactful */}
                    <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12 text-center">
                        <p className="text-2xl sm:text-3xl leading-relaxed mb-8 font-bold">
                            Guru honorer butuh <span className="text-red-400">150x lebih lama</span> dari guru Singapura.
                        </p>

                        <div className="w-full h-px bg-gray-700 mb-8"></div>

                        <div className="space-y-4 text-xl sm:text-2xl font-bold leading-relaxed">
                            <p>Guru honorer: <span className="text-red-400">skandal moral.</span></p>
                            <p>Guru PNS: <span className="text-amber-400">penghinaan ekonomi.</span></p>
                            <p>Sistem ini: <span className="text-white border-b-2 border-white">bencana nasional.</span></p>
                        </div>

                        <p className="text-gray-400 mt-8 text-lg font-medium">
                            Dan anak-anak Indonesia yang membayar harganya.
                        </p>
                    </div>
                </div>

                {/* === SECTION 3: STORIES === */}
                <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-black text-gray-900 mb-4">
                            Di Balik <span className="text-emerald-600">Angka</span>
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Wajah-wajah nyata di balik statistik.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {LORE_STORIES.map((story) => (
                            <div key={story.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                                {/* Image Header */}
                                <div className="relative w-full h-72 overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex justify-between items-end">
                                            <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold uppercase tracking-wider">
                                                {story.location}
                                            </span>
                                            <span className="text-white font-bold text-2xl drop-shadow-md">
                                                {story.salary}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                                        {story.title}
                                    </h3>

                                    <div className="mb-8 flex-grow">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                            "{story.story}"
                                        </p>
                                        <blockquote className="pl-4 border-l-4 border-emerald-500 italic text-gray-500 text-base">
                                            "{story.quote}"
                                        </blockquote>
                                    </div>

                                    {/* Footer Card */}
                                    <div className="pt-6 border-t border-gray-100 mt-auto">
                                        <div className="mb-4">
                                            <p className="text-lg font-bold text-gray-900">{story.name}</p>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {story.role} • <span className="text-emerald-700 font-bold">{story.sideHustle}</span>
                                            </p>
                                        </div>

                                        <a
                                            href={story.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors uppercase tracking-wider"
                                        >
                                            Sumber: {story.source} <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* === SECTION 4: CTA TO CALCULATOR === */}
                <div className="bg-gray-900 rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                    <div className="relative z-10">
                        <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                            Mereka tidak minta kaya.<br />
                            Mereka cuma ingin <span className="text-emerald-400">layak</span>.
                        </h3>

                        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                            Cek sendiri berapa lama guru harus menabung untuk barang-barang yang mungkin kamu beli dalam hitungan minggu.
                        </p>

                        <button
                            onClick={onTryNow}
                            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-emerald-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            <Calculator className="w-6 h-6" />
                            Coba Kalkulator
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
