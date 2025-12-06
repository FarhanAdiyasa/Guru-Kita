'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send } from 'lucide-react'

export default function FeedbackPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        rating: 5
    })
    const [submitted, setSubmitted] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitted(true)
            } else {
                alert('Gagal mengirim feedback. Silakan coba lagi.')
            }
        } catch (error) {
            console.error('Error submitting feedback:', error)
            alert('Terjadi kesalahan. Silakan coba lagi.')
        } finally {
            setIsSubmitting(false)
        }
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
                    <div className="font-black text-gray-900 tracking-tight">Feedback</div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight">
                        Kirim Masukan
                    </h1>
                    <p className="text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
                        Bantu kami meningkatkan <span className="text-emerald-600 font-bold">GuruKita.id</span> dengan saran dan masukan berharga Anda.
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl shadow-gray-200/50 border border-white/60 p-6 sm:p-10">
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <Send className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Terima Kasih!</h2>
                            <p className="text-gray-500 font-medium mb-8">
                                Masukan Anda telah kami terima dan sangat berarti bagi pengembangan platform ini.
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
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        Nama (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder="Nama Anda"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        Email (Opsional)
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder="email@contoh.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="rating" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    Rating Pengalaman
                                </label>
                                <div className="flex gap-3 justify-center sm:justify-start p-4 bg-white border-2 border-gray-100 rounded-xl">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className={`text-3xl transition-all duration-200 transform hover:scale-125 focus:outline-none ${formData.rating >= star ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-200 hover:text-gray-300'
                                                }`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    Pesan <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300 resize-none"
                                    placeholder="Ceritakan pengalaman atau saran Anda..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Kirim Masukan
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    )
}
