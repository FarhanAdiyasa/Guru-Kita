'use client'

export default function LoreQuote() {
    return (
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {/* Gita Wirjawan Quote */}
            <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
                    "Kalau kita gaji seorang guru Rp 10 juta sebulan, saya yakin yang tadinya mau kerja di Gojek, di Google, di Amazon—<span className="text-red-600">mereka bakal belok ngajar</span>."
                </blockquote>

                <div className="flex items-center justify-center gap-3 text-gray-600">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="font-bold">Gita Wirjawan</span>
                    <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <p className="text-gray-500 text-sm mt-1">Investor & Mantan Menteri Perdagangan</p>
            </div>
        </div>
    )
}
