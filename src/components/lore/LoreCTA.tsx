'use client'

import { Calculator } from 'lucide-react'

interface LoreCTAProps {
    onTryNow: () => void
}

export default function LoreCTA({ onTryNow }: LoreCTAProps) {
    return (
        <div className="py-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            {/* Purbaya Quote */}
            <div className="max-w-4xl mx-auto mb-16">
                <blockquote className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
                    "Tapi kalau gurunya digaji 2,8 juta, <span className="text-red-600">betul jelek</span>. Mendingan kerja di Amazon. Yang pintar-pintar betul enggak mau di sana. <span className="text-red-600">Guru akan menentukan masa depan kita.</span>"
                </blockquote>

                <div className="flex items-center justify-center gap-3 text-gray-600">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="font-bold">Purbaya Yudi Sadewa</span>
                    <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <p className="text-gray-500 text-sm mt-1">Menteri Keuangan RI, 2024</p>
            </div>

            <button
                onClick={onTryNow}
                className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-red-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
                <Calculator className="w-6 h-6" />
                Coba Kalkulator
            </button>
        </div>
    )
}
