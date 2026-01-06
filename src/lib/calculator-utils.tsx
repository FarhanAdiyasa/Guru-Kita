import { Home, Car, Plane, BookOpen, Heart, Gift, Laptop } from 'lucide-react'
import type { Item, ItemResult, TeacherProfile } from '@/types/calculator'

// Re-export types for backwards compatibility
export type { Item, ItemResult, TeacherProfile }

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
    return `${years} tahun${remainingMonths > 0 ? ` ${remainingMonths} bulan` : ''}`
  } else {
    return `${months} bulan`
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