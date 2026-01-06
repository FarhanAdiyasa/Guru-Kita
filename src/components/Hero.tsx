'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface HeroProps {
  onTryNow: () => void
  onLore: () => void
}

// Shock stats data keys
const SHOCK_STATS = [
  { valueKey: 'honorerCountValue', labelKey: 'honorerCount', sourceKey: 'honorerCountSource' },
  { valueKey: 'pppkCountValue', labelKey: 'pppkCount', sourceKey: 'pppkCountSource' },
  { valueKey: 'lowestSalaryValue', labelKey: 'lowestSalary', sourceKey: 'lowestSalarySource' },
]


export default function Hero({ onTryNow, onLore }: HeroProps) {
  const t = useTranslations();
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
            <span className="text-red-900">{t(`Hero.shockStats.${activeStat.valueKey}`)}</span> {t(`Hero.shockStats.${activeStat.labelKey}`)}
          </span>
          <span className="text-xs text-red-400 hidden sm:inline">
            — {t(`Hero.shockStats.${activeStat.sourceKey}`)}
          </span>
        </div>
      </div>

      {/* Logo */}
      <h1 className="text-4xl sm:text-6xl font-bold text-emerald-600 mb-6">{t('Hero.title')}</h1>

      {/* Single Shocking Question */}
      <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-4 leading-tight">
        {t('Hero.mainQuestion.prefix')}<br />
        <span className="text-red-600">{t('Hero.mainQuestion.highlight')}</span><br />
        {t('Hero.mainQuestion.suffix')}
      </h2>

      <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
        {t('Hero.subtitle')}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onTryNow}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          <span>{t('Common.tryNow')}</span>
        </button>

        <button
          onClick={onLore}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
        >
          <span>{t('Common.whyImportant')}</span>
        </button>
      </div>
    </div>
  )
}