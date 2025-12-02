'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, PlusCircle } from 'lucide-react'

export default function SuggestSalaryPage() {
    const [formData, setFormData] = useState({
        jobTitle: '',
        location: '',
        salary: '',
        experience: '',
        status: 'Honorer',
        source: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true)
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-gray-200/50">
                <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group">
                        <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-gray-100">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sm tracking-tight">Kembali</span>
                    </Link>
                    <div className="font-black text-gray-900 tracking-tight">Input Gaji Baru</div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight">
                        Kontribusi Data Gaji
                    </h1>
                    <p className="text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
                        Bantu kami melengkapi database gaji guru di Indonesia agar lebih <span className="text-emerald-600 font-bold">akurat dan transparan</span>.
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl shadow-gray-200/50 border border-white/60 p-6 sm:p-10">
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <PlusCircle className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Data Terkirim!</h2>
                            <p className="text-gray-500 font-medium mb-8">
                                Terima kasih telah berkontribusi untuk transparansi gaji guru di Indonesia.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Kembali ke Beranda
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="jobTitle" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        Posisi / Jabatan <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        required
                                        value={formData.jobTitle}
                                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder="Contoh: Guru SD Kelas 1"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="location" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        Lokasi (Kota/Kab) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        required
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder="Contoh: Jakarta Selatan"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="salary" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    Gaji Bulanan (Rp) <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">
                                        Rp
                                    </div>
                                    <input
                                        type="number"
                                        id="salary"
                                        required
                                        value={formData.salary}
                                        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder="Contoh: 3000000"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="status" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        Status Kepegawaian
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="status"
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors appearance-none"
                                        >
                                            <option value="Honorer">Honorer</option>
                                            <option value="PNS">PNS</option>
                                            <option value="PPPK">PPPK</option>
                                            <option value="Swasta">Guru Swasta</option>
                                            <option value="Lainnya">Lainnya</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="experience" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        Pengalaman (Tahun)
                                    </label>
                                    <input
                                        type="number"
                                        id="experience"
                                        value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder="Contoh: 5"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="source" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    Sumber Data (Opsional)
                                </label>
                                <input
                                    type="text"
                                    id="source"
                                    value={formData.source}
                                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                    placeholder="Link berita / dokumen pendukung"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
                            >
                                <PlusCircle className="w-5 h-5" />
                                Kirim Data
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    )
}
