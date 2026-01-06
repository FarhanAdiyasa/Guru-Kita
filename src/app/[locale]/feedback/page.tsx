'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Toast, { ToastType } from '@/components/Toast'

export default function FeedbackPage() {
    const t = useTranslations()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'Saran',
        message: '',
        rating: 5
    })
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [toast, setToast] = useState<{ isVisible: boolean; message: string; type: ToastType }>({
        isVisible: false,
        message: '',
        type: 'info'
    })

    const showToast = (message: string, type: ToastType) => {
        setToast({ isVisible: true, message, type })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()
            if (response.ok) {
                setSubmitted(true)
            } else {
                showToast(data.error || 'Gagal mengirim feedback. Silakan coba lagi.', 'error')
            }
        } catch (error) {
            console.error('Error submitting feedback:', error)
            showToast('Terjadi kesalahan. Silakan coba lagi.', 'error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-gray-200/50">
                <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group">
                        <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-gray-100">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sm tracking-tight">{t('Common.back')}</span>
                    </Link>
                    <div className="font-black text-gray-900 tracking-tight">{t('Feedback.title')}</div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight">
                        {t('Feedback.header.title')}
                    </h1>
                    <p className="text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
                        {t('Feedback.header.subtitleStart')} <span className="text-emerald-600 font-bold">GuruKita.id</span> {t('Feedback.header.subtitleEnd')}
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl shadow-gray-200/50 border border-white/60 p-6 sm:p-10">
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <Send className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{t('Feedback.success.title')}</h2>
                            <p className="text-gray-500 font-medium mb-8">
                                {t('Feedback.success.message')}
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                {t('Feedback.success.backButton')}
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        {t('Feedback.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder={t('Feedback.form.namePlaceholder')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        {t('Feedback.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300"
                                        placeholder={t('Feedback.form.emailPlaceholder')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="category" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                        {t('Feedback.form.category')} <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="category"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors"
                                    >
                                        <option value="Saran">{t('Feedback.form.categoryOptions.Saran')}</option>
                                        <option value="Bug">{t('Feedback.form.categoryOptions.Bug')}</option>
                                        <option value="Apresiasi">{t('Feedback.form.categoryOptions.Apresiasi')}</option>
                                        <option value="Lainnya">{t('Feedback.form.categoryOptions.Lainnya')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="rating" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    {t('Feedback.form.rating')}
                                </label>
                                <div className="flex flex-col gap-3 p-4 bg-white border-2 border-gray-100 rounded-xl">
                                    <div className="flex gap-3 justify-center sm:justify-start">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                className={`text-3xl transition-all duration-200 transform hover:scale-125 focus:outline-none ${formData.rating >= star ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-200 hover:text-gray-300'
                                                    }`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase text-center sm:text-left transition-all">
                                        {formData.rating === 1 && t('Feedback.form.ratingLabels.1')}
                                        {formData.rating === 2 && t('Feedback.form.ratingLabels.2')}
                                        {formData.rating === 3 && t('Feedback.form.ratingLabels.3')}
                                        {formData.rating === 4 && t('Feedback.form.ratingLabels.4')}
                                        {formData.rating === 5 && t('Feedback.form.ratingLabels.5')}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    {t('Feedback.form.message')} <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl font-medium text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors placeholder-gray-300 resize-none"
                                    placeholder={t('Feedback.form.messagePlaceholder')}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        {t('Feedback.form.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        {t('Feedback.form.submit')}
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
                <Toast
                    message={toast.message}
                    type={toast.type}
                    isVisible={toast.isVisible}
                    onClose={() => setToast({ ...toast, isVisible: false })}
                />
            </main>
        </div>
    )
}
