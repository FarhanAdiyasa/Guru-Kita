'use client'

import { useTranslations } from 'next-intl'
import { Item } from '@/types/calculator'
import { CONFIG } from '@/data/config'
import { ArrowLeft } from 'lucide-react'

interface ItemSelectionProps {
    onItemSelect: (item: Item) => void
    onBack: () => void
}

export default function ItemSelection({ onItemSelect, onBack }: ItemSelectionProps) {
    const t = useTranslations();
    const { items } = CONFIG

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-10">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-6 group"
                >
                    <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-gray-100">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{t('Common.back')}</span>
                </button>

                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                        {t('ItemSelection.title')}
                    </h2>
                    <p className="text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                        {t('ItemSelection.subtitle')}
                    </p>
                </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onItemSelect(item)}
                        className="group relative flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 text-center"
                    >
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                            {t(`Data.Items.${item.id}.name`)}
                        </h3>
                        <p className={`text-xs font-bold uppercase tracking-wider ${item.category === 'special' ? 'text-emerald-600' : 'text-gray-400'}`}>
                            {item.category === 'special'
                                ? t('ItemSelection.seeAllCalculation')
                                : new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)
                            }
                        </p>
                    </button>
                ))}
            </div>
        </div>
    )
}
