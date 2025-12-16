'use client'

interface LoreHeaderProps {
    onBack: () => void
}

export default function LoreHeader({ onBack }: LoreHeaderProps) {
    return (
        <>
            {/* Navigation */}
            <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-12 group"
            >
                <div className="p-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
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
                    <br />Ini adalah <span className="text-gray-900 font-bold">krisis sistemik</span>.
                </p>
            </div>

        </>
    )
}
