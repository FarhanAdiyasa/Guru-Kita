'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                </div>

                <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                    Terjadi Kesalahan
                </h2>

                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                    Maaf, sistem mengalami kendala saat memproses permintaan Anda. Tim kami telah dinotifikasi.
                </p>

                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-lg"
                >
                    <RefreshCw className="w-5 h-5" />
                    <span>Coba Lagi</span>
                </button>
            </div>
        </div>
    )
}
