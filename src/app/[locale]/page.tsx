import { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'
import { CONFIG } from '@/data/config'

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

function formatSalary(amount: number) {
    if (amount >= 1000000) return `Rp ${(amount / 1000000).toFixed(1)}jt`
    return `Rp ${(amount / 1000).toFixed(0)}rb`
}

export async function generateMetadata(
    { searchParams }: Props
): Promise<Metadata> {
    const resolvedParams = await searchParams
    const tId = resolvedParams.t as string
    const iId = resolvedParams.i as string

    const { teachers, items } = CONFIG

    let title = "GuruKita - Platform Transparansi Gaji Guru Indonesia"
    let description = "Berapa lama guru honorer harus menabung untuk beli rumah? Kalkulator realita gaji guru Indonesia."

    if (tId) {
        const teacher = teachers.find(t => t.id === tId)
        if (teacher) {
            if (iId) {
                const item = items.find(i => i.id === iId)
                if (item) {
                    title = `${teacher.location}: Guru vs ${item.name}`
                    description = `Seorang ${teacher.title} di ${teacher.location} (Gaji ${formatSalary(teacher.monthlySalary)}) butuh berapa lama untuk membeli ${item.name}? Cek realitanya di sini! 😢`
                }
            } else {
                title = `Realita Gaji Guru di ${teacher.location}`
                description = `Intip rincian gaji ${teacher.title} di ${teacher.location} sebesar ${formatSalary(teacher.monthlySalary)}. Cukupkah untuk hidup layak?`
            }
        }
    }

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: 'https://gurukita.farhanadiyasa.id',
            siteName: 'GuruKita',
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/og-image.png'],
            creator: '@gurukita_id',
        },
    }
}

export default function Page() {
    return <HomeClient />
}
