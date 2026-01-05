'use client'

import { ErrorBoundary } from '@/components/ErrorBoundary'

interface ProvidersProps {
    children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ErrorBoundary>
            {children}
        </ErrorBoundary>
    )
}
