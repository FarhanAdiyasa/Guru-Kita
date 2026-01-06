'use client'

import { useTranslations } from 'next-intl'
import { Calculator } from 'lucide-react'

interface LoreCTAProps {
    onTryNow: () => void
}

export default function LoreCTA({ onTryNow }: LoreCTAProps) {
    const t = useTranslations()

    return (
        <div className="py-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            {/* Purbaya Quote */}
            <div className="max-w-4xl mx-auto mb-16">
                <blockquote className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
                    {t('Lore.cta.quote')}
                </blockquote>

                <div className="flex items-center justify-center gap-3 text-gray-600">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="font-bold">{t('Lore.cta.author')}</span>
                    <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{t('Lore.cta.role')}</p>
            </div>

            <button
                onClick={onTryNow}
                className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-red-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
                <Calculator className="w-6 h-6" />
                {t('Lore.cta.button')}
            </button>
        </div>
    )
}
