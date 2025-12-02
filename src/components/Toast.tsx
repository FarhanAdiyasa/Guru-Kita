'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, XCircle, Info } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
    message: string
    type?: ToastType
    isVisible: boolean
    onClose: () => void
}

export default function Toast({ message, type = 'info', isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    if (!isVisible) return null

    const getIcon = () => {
        switch (type) {
            case 'success': return <CheckCircle className="w-5 h-5 text-emerald-500" />
            case 'error': return <XCircle className="w-5 h-5 text-red-500" />
            default: return <Info className="w-5 h-5 text-blue-500" />
        }
    }

    return (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-[100] animate-fade-in-up">
            <div className="bg-gray-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 min-w-[300px] justify-center">
                {getIcon()}
                <span className="font-medium text-sm">{message}</span>
            </div>
        </div>
    )
}
