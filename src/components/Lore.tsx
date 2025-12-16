'use client'

import { LoreHeader, LoreSalarySpectrum, LoreQuote, LoreStories, LoreCTA } from './lore/index'

interface LoreProps {
    onBack: () => void
    onTryNow: () => void
}

export default function Lore({ onBack, onTryNow }: LoreProps) {
    return (
        <div className="min-h-screen w-full">
            <div className="w-full max-w-6xl mx-auto px-4 py-12">
                <LoreHeader onBack={onBack} />
                <LoreSalarySpectrum />
                <LoreQuote />
                <LoreStories />
                <LoreCTA onTryNow={onTryNow} />
            </div>
        </div>
    )
}
