'use client'

import { ExternalLink } from 'lucide-react'

// Spectrum data with verified sources
const SALARY_SPECTRUM = [
    {
        label: 'Guru Honorer',
        salary: 'Rp 300rb',
        subtext: 'Rata-rata (Range: Rp 90rb - 500rb)',
        timeForIphone: '10+ tahun',
        status: 'Honorer',
        source: 'BBC Indonesia',
        sourceUrl: 'https://www.bbc.com/indonesia/indonesia-56094473',
    },
    {
        label: 'Guru PPPK',
        salary: 'Rp 3,2jt+',
        subtext: 'Gaji Pokok Gol IX (S1)',
        timeForIphone: '7-11 bulan',
        status: 'PPPK',
        source: 'Perpres 11/2024',
        sourceUrl: 'https://peraturan.bpk.go.id/Details/276756/perpres-no-11-tahun-2024',
    },
    {
        label: 'Guru PNS',
        salary: 'Rp 8jt+',
        subtext: 'Gaji Pokok + Tunjangan',
        timeForIphone: '2-4 bulan',
        status: 'PNS',
        source: 'Pikiran Rakyat',
        sourceUrl: 'https://www.pikiran-rakyat.com/pendidikan/pr-017626215/berapa-gaji-guru-pns-2024-ini-rinciannya',
    },
    {
        label: 'Guru Singapura',
        salary: 'Rp 45jt+',
        subtext: 'Fresh Graduate (S$ 3.800)',
        timeForIphone: '< 1 bulan',
        status: 'Global',
        source: 'MOE Singapore',
        sourceUrl: 'https://www.moe.gov.sg/careers/become-teachers',
    },
]


// Status badge colors matching TeacherProfileCard
const getStatusBadgeClass = (status: string) => {
    switch (status) {
        case 'Honorer':
            return 'bg-gray-100 text-gray-800'
        case 'PPPK':
            return 'bg-amber-100 text-amber-800'
        case 'PNS':
            return 'bg-blue-100 text-blue-800'
        case 'Global':
            return 'bg-emerald-100 text-emerald-800'
        default:
            return 'bg-gray-100 text-gray-800'
    }
}

export default function LoreSalarySpectrum() {
    return (
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="text-center mb-12">
                <h3 className="text-4xl font-black text-gray-900 mb-4">Bandingkan Sendiri</h3>
                <p className="text-xl text-gray-600">Spektrum gaji guru: dari yang paling rendah ke standar global</p>
            </div>

            {/* Spectrum Cards - Matching TeacherProfileCard style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {SALARY_SPECTRUM.map((item, index) => (
                    <div
                        key={index}
                        className="w-full overflow-hidden rounded-xl p-4 sm:p-6 bg-[#F3F0EB] hover:bg-[#EBE5D9] transition-all duration-200 hover:shadow-md"
                    >
                        {/* Top: Label */}
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                            {item.label}
                        </div>

                        {/* Second line: Subtext */}
                        <div className="text-sm text-gray-600 mb-3">
                            {item.subtext}
                        </div>

                        {/* BIG SALARY */}
                        <div className="text-center py-4 mb-3">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 leading-none">
                                {item.salary}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                per bulan
                            </div>
                        </div>

                        {/* Status badge */}
                        <div className="flex justify-center mb-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(item.status)}`}>
                                {item.status}
                            </span>
                        </div>

                        {/* Source Link */}
                        <div className="text-center">
                            <a
                                href={item.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-gray-400 hover:text-emerald-600 hover:underline transition-colors inline-flex items-center gap-1"
                            >
                                <span>🔗 Sumber: {item.source}</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
