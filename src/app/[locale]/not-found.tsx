'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowLeft, MapPinOff } from 'lucide-react'

export default function NotFound() {
    const t = useTranslations()

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
            <div className="text-center max-w-lg mx-auto">
                <div className="mb-8 relative inline-block">
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <MapPinOff className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-red-100 text-red-600 font-black text-xl px-4 py-2 rounded-xl transform rotate-12 shadow-sm border border-red-200">
                        404
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                    {t('NotFound.title')}
                </h1>

                <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
                    {t('NotFound.description')}
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                >
                    <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span>{t('NotFound.backButton')}</span>
                </Link>
            </div>
        </div>
    )
}
