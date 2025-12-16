'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  onTryNow: () => void
  onLore: () => void
}

// Shock stats data with verified sources
const SHOCK_STATS = [
  { value: '704.503', label: 'guru honorer tercatat (2022)', source: 'Kemendikbud' },
  { value: '770.134', label: 'guru diangkat PPPK (2024)', source: 'BKN' },
  { value: 'Rp 90rb', label: 'gaji terendah guru honorer/bulan', source: 'BBC Indonesia' },
]


export default function Hero({ onTryNow, onLore }: HeroProps) {
  const [activeStatIndex, setActiveStatIndex] = useState(0)

  // Rotate through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % SHOCK_STATS.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const activeStat = SHOCK_STATS[activeStatIndex]

  return (
    <div className="text-center w-full max-w-4xl px-4">
      {/* Shock Stats Banner */}
      <div className="mb-8 animate-in fade-in duration-500">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-sm sm:text-base font-bold text-red-700">
            <span className="text-red-900">{activeStat.value}</span> {activeStat.label}
          </span>
          <span className="text-xs text-red-400 hidden sm:inline">
            — {activeStat.source}
          </span>
        </div>
      </div>

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

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onTryNow}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          <span>Coba Sekarang</span>
        </button>

        <button
          onClick={onLore}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
        >
          <span>Kenapa Penting?</span>
        </button>
      </div>
    </div>
  )
}