import { Home, Car, Plane, BookOpen, Heart, Gift, Laptop } from 'lucide-react'
import type { TimelineEvent } from '@/types/calculator'

export interface Item {
  id: string
  name: string
  price: number
  category: string
  description: string
  icon: string
}

export interface ItemResult {
  item: Item
  months: number
  years: number
  remainingMonths: number
  message: string
  monthlySavings: number
}

export interface TeacherProfile {
  id: string
  title: string
  location: string
  level: string
  experience: number
  status: string
  monthlySalary: number
  description: string
}

export function getItemIcon(category: string) {
  switch (category) {
    case 'technology': return <Laptop className="w-5 h-5" />
    case 'transportation': return <Car className="w-5 h-5" />
    case 'housing': return <Home className="w-5 h-5" />
    case 'religious': return <Plane className="w-5 h-5" />
    case 'education': return <BookOpen className="w-5 h-5" />
    case 'health': return <Heart className="w-5 h-5" />
    case 'family': return <Gift className="w-5 h-5" />
    default: return <Laptop className="w-5 h-5" />
  }
}

export function calculateTimeMessage(months: number): string {
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years >= 1) {
    return `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`
  } else {
    return `${months} month${months > 1 ? 's' : ''}`
  }
}

export function calculateItemResults(items: Item[], teacher: TeacherProfile, livingCosts: number = 0): ItemResult[] {
  const adjustedMonthlySavings = Math.max(0, teacher.monthlySalary - livingCosts)

  return items.map(item => {
    const months = adjustedMonthlySavings > 0 ? Math.ceil(item.price / adjustedMonthlySavings) : Infinity
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    const message = adjustedMonthlySavings > 0 ? calculateTimeMessage(months) : "Tidak bisa menabung 😔"

    return {
      item,
      months,
      years,
      remainingMonths,
      message,
      monthlySavings: adjustedMonthlySavings
    }
  })
}

export function generateTimeline(): TimelineEvent[] {
  const currentDate = new Date()
  const timeline: TimelineEvent[] = []

  // Week 1 - Initial Assessment
  timeline.push({
    id: '1',
    type: 'assessment',
    week: 1,
    day: 1,
    title: 'Tes Diagnostik Awal',
    description: 'Evaluasi kemampuan dasar dan identifikasi area yang perlu diperbaiki',
    duration: 60,
    date: formatDate(currentDate),
    topics: ['Tes awal', 'Identifikasi kelemahan']
  })

  // Week 1-2 - Foundation Building
  timeline.push({
    id: '2',
    type: 'session',
    week: 1,
    day: 3,
    title: 'Sesi 1: Fondasi Konsep',
    description: 'Memahami konsep-konsep fundamental yang menjadi dasar pembelajaran',
    duration: 90,
    date: formatDate(addDays(currentDate, 2)),
    topics: ['Konsep dasar', 'Teori fundamental']
  })

  timeline.push({
    id: '3',
    type: 'session',
    week: 2,
    day: 8,
    title: 'Sesi 2: Praktik Terbimbing',
    description: 'Latihan soal dengan bimbingan intensif untuk pemahaman lebih dalam',
    duration: 90,
    date: formatDate(addDays(currentDate, 7)),
    topics: ['Latihan soal', 'Pembahasan']
  })

  // Week 2 - First Milestone
  timeline.push({
    id: '4',
    type: 'milestone',
    week: 2,
    day: 10,
    title: 'Checkpoint Minggu 2',
    description: 'Evaluasi progress pertama dan penyesuaian strategi belajar',
    duration: 45,
    date: formatDate(addDays(currentDate, 9)),
    topics: ['Evaluasi progress', 'Feedback']
  })

  // Week 3-4 - Skill Development
  timeline.push({
    id: '5',
    type: 'session',
    week: 3,
    day: 15,
    title: 'Sesi 3: Pengembangan Skill',
    description: 'Fokus pada pengembangan kemampuan problem solving',
    duration: 90,
    date: formatDate(addDays(currentDate, 14)),
    topics: ['Problem solving', 'Teknik efektif']
  })

  timeline.push({
    id: '6',
    type: 'session',
    week: 4,
    day: 22,
    title: 'Sesi 4: Deep Dive',
    description: 'Eksplorasi mendalam pada topik-topik challenging',
    duration: 90,
    date: formatDate(addDays(currentDate, 21)),
    topics: ['Topik advanced', 'Aplikasi konsep']
  })

  // Week 4 - Mid Assessment
  timeline.push({
    id: '7',
    type: 'assessment',
    week: 4,
    day: 24,
    title: 'Tes Formatif Tengah Program',
    description: 'Assessment komprehensif untuk mengukur pemahaman akumulatif',
    duration: 90,
    date: formatDate(addDays(currentDate, 23)),
    topics: ['Tes formatif', 'Analisis hasil']
  })

  // Week 5-6 - Enhancement
  timeline.push({
    id: '8',
    type: 'session',
    week: 5,
    day: 29,
    title: 'Sesi 5: Enhanced Learning',
    description: 'Peningkatan understanding melalui metode pembelajaran inovatif',
    duration: 90,
    date: formatDate(addDays(currentDate, 28)),
    topics: ['Metode inovatif', 'Visual learning']
  })

  timeline.push({
    id: '9',
    type: 'session',
    week: 6,
    day: 36,
    title: 'Sesi 6: Final Preparation',
    description: 'Persiapan intensif menghadapi evaluasi akhir program',
    duration: 90,
    date: formatDate(addDays(currentDate, 35)),
    topics: ['Review komprehensif', 'Final prep']
  })

  // Week 6 - Final Assessment
  timeline.push({
    id: '10',
    type: 'milestone',
    week: 6,
    day: 38,
    title: 'Graduation Day!',
    description: 'Evaluasi final dan pengukuran pencapaian target belajar',
    duration: 120,
    date: formatDate(addDays(currentDate, 37)),
    topics: ['Final assessment', 'Target achievement']
  })

  return timeline
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}