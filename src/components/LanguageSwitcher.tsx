'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function LanguageSwitcher() {
    const t = useTranslations('Common')
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const onSelectChange = (nextLocale: string) => {
        setIsOpen(false)
        router.replace(pathname, { locale: nextLocale })
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-700 font-bold text-sm"
            >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                        onClick={() => onSelectChange('id')}
                        className={`w-full text-left px-4 py-2 text-sm font-bold hover:bg-gray-50 flex items-center justify-between ${locale === 'id' ? 'text-emerald-600' : 'text-gray-700'}`}
                    >
                        <span>Bahasa</span>
                        {locale === 'id' && <span className="text-emerald-600">✓</span>}
                    </button>
                    <button
                        onClick={() => onSelectChange('en')}
                        className={`w-full text-left px-4 py-2 text-sm font-bold hover:bg-gray-50 flex items-center justify-between ${locale === 'en' ? 'text-emerald-600' : 'text-gray-700'}`}
                    >
                        <span>English</span>
                        {locale === 'en' && <span className="text-emerald-600">✓</span>}
                    </button>
                </div>
            )}
        </div>
    )
}
