'use client'

import { useState, useEffect } from 'react'
import { TeacherProfile, Item, ItemResult } from '@/types/calculator'
import { calculateItemResults } from '@/lib/calculator-utils'
import { ArrowLeft, Share2, Info } from 'lucide-react'

interface SingleItemResultProps {
    teacher: TeacherProfile
    item: Item
    onBack: () => void
    onShowAll: () => void
}

export default function SingleItemResult({ teacher, item, onBack, onShowAll }: SingleItemResultProps) {
    const [livingCosts, setLivingCosts] = useState(0)
    const [result, setResult] = useState<ItemResult | null>(null)
    const [showLivingCostInput, setShowLivingCostInput] = useState(false)

    useEffect(() => {
        const results = calculateItemResults([item], teacher, livingCosts)
        setResult(results[0])
    }, [teacher, item, livingCosts])

    if (!result) return null

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(amount)
    }

    const handleShare = async () => {
        const text = `Seorang ${teacher.title} butuh ${result.message} untuk beli ${item.name}! Cek realitanya di GuruKita.id 😢`
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'GuruKita.id - Realita Gaji Guru',
                    text: text,
                    url: window.location.href
                })
            } catch (err) {
                console.error('Error sharing:', err)
            }
        } else {
            navigator.clipboard.writeText(`${text} ${window.location.href}`)
            alert('Link berhasil disalin!')
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
                >
                    <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-gray-100">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">Kembali</span>
                </button>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-8">
                <div className="p-8 sm:p-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-2xl mb-6 text-5xl shadow-inner">
                        {item.icon}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 tracking-tight">
                        {item.name}
                    </h2>
                    <p className="text-gray-500 font-medium mb-8">
                        {formatCurrency(item.price)}
                    </p>

                    <div className="py-8 border-t border-b border-gray-100 mb-8">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Estimasi Waktu Menabung
                        </p>
                        <div className="text-5xl sm:text-6xl font-black text-emerald-600 tracking-tight leading-none mb-2">
                            {result.message}
                        </div>
                        <p className="text-gray-500 font-medium">
                            dengan gaji {formatCurrency(teacher.monthlySalary)}/bulan
                        </p>
                    </div>

                    {/* Living Cost Toggle */}
                    <div className="mb-8">
                        <button
                            onClick={() => setShowLivingCostInput(!showLivingCostInput)}
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                            <Info className="w-4 h-4" />
                            {showLivingCostInput ? 'Sembunyikan Pengeluaran' : 'Tambah Pengeluaran Bulanan?'}
                        </button>

                        {showLivingCostInput && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 text-left">
                                    Pengeluaran Bulanan (Makan, Kost, dll)
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">
                                        Rp
                                    </div>
                                    <input
                                        type="number"
                                        value={livingCosts || ''}
                                        onChange={(e) => setLivingCosts(Number(e.target.value))}
                                        className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors"
                                        placeholder="0"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-left">
                                    Sisa tabungan: <span className="font-bold text-gray-600">{formatCurrency(result.monthlySavings)}/bulan</span>
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleShare}
                            className="flex-1 py-4 px-6 bg-emerald-50 text-emerald-700 rounded-xl font-bold hover:bg-emerald-100 transition-all flex items-center justify-center gap-2"
                        >
                            <Share2 className="w-5 h-5" />
                            Bagikan
                        </button>
                        <button
                            onClick={onShowAll}
                            className="flex-1 py-4 px-6 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Lihat Semua Barang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
