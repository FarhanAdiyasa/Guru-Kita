export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-emerald-100 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 border-4 border-t-emerald-600 border-r-emerald-600 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-4 bg-emerald-50 rounded-full flex items-center justify-center text-xs font-bold text-emerald-600">
                        GK
                    </div>
                </div>
                <p className="text-gray-500 font-bold text-sm tracking-widest animate-pulse uppercase">
                    Memuat...
                </p>
            </div>
        </div>
    )
}
