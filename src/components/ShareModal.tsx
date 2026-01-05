'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Link as LinkIcon, Check, MessageCircle, Twitter } from 'lucide-react'

interface ShareModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    text: string
    url: string
}

export default function ShareModal({ isOpen, onClose, title, text, url }: ShareModalProps) {
    const [copied, setCopied] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Prevent body scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!mounted) return null
    if (!isOpen) return null

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`${text}\n${url}`)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy', err)
        }
    }

    const handleWhatsApp = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`
        window.open(whatsappUrl, '_blank')
    }

    const handleTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        window.open(twitterUrl, '_blank')
    }

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl transform transition-all scale-100 p-6 animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Bagikan Hasil</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Action Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                        onClick={handleWhatsApp}
                        aria-label="Bagikan ke WhatsApp"
                        className="flex items-center justify-center gap-2 p-4 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366]/20 transition-colors font-bold"
                    >
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                        WhatsApp
                    </button>
                    <button
                        onClick={handleTwitter}
                        aria-label="Bagikan ke Twitter atau X"
                        className="flex items-center justify-center gap-2 p-4 bg-black/5 text-black rounded-xl hover:bg-black/10 transition-colors font-bold"
                    >
                        <Twitter className="w-5 h-5" aria-hidden="true" />
                        X / Twitter
                    </button>
                </div>

                {/* Copy Link Section */}
                <div className="relative">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Salin Link Manual
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-xl">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                            <LinkIcon className="w-4 h-4 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            value={url}
                            readOnly
                            className="flex-1 bg-transparent text-sm font-medium text-gray-600 outline-none min-w-0"
                        />
                        <button
                            onClick={handleCopy}
                            aria-label={copied ? "Link berhasil disalin" : "Salin link ke clipboard"}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${copied
                                ? 'bg-emerald-500 text-white shadow-emerald-200'
                                : 'bg-gray-900 text-white hover:bg-gray-800 shadow-xl'
                                }`}
                        >
                            {copied ? <><Check className="w-4 h-4" /> Tersalin!</> : 'Salin'}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}
