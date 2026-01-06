'use client'

import { useTranslations } from 'next-intl'

export default function LoreQuote() {
    const t = useTranslations()

    return (
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {/* Gita Wirjawan Quote */}
            <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
                    {t('Lore.quote.text')}
                </blockquote>

                <div className="flex items-center justify-center gap-3 text-gray-600">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="font-bold">{t('Lore.quote.author')}</span>
                    <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{t('Lore.quote.role')}</p>
            </div>
        </div>
    )
}
