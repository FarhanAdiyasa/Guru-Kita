'use client'

interface HeroProps {
  onTryNow: () => void
}

export default function Hero({ onTryNow }: HeroProps) {
  return (
    <div className="text-center w-full max-w-4xl px-4">
      {/* Logo */}
      <h1 className="text-4xl sm:text-6xl font-bold text-emerald-600 mb-6">GuruKita</h1>

      {/* Single Shocking Question */}
      <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-4 leading-tight">
        Guru butuh<br />
        <span className="text-red-600">berapa tahun</span><br />
        buat iPhone?
      </h2>

      <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
        Jawabannya akan mengejutkan kamu
      </p>

      {/* Single CTA Button */}
      <button
        onClick={onTryNow}
        className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-6 rounded-xl font-bold text-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
      >
        <span>Coba Sekarang</span>
      </button>
    </div>
  )
}