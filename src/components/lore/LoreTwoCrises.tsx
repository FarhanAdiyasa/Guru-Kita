'use client'

import { AlertTriangle, TrendingDown } from 'lucide-react'

export default function LoreTwoCrises() {
    return (
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Crisis 1: Emergency */}
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

                {/* Crisis 2: Structural */}
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
    )
}
