export interface TeacherProfile {
  id: string
  title: string
  location: string
  level: string
  experience: number
  status: string
  monthlySalary: number
  source?: string
}

export interface Item {
  id: string
  name: string
  price: number
  category: string
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

export interface ComprehensiveResults {
  teacher: TeacherProfile
  items: ItemResult[]
  mostShocking: ItemResult
  livingCosts?: number
  adjustedMonthlySavings?: number
}

// New calculator types
export interface Teacher {
  id: string
  name: string
  subjects: string[]
  rating: number
  pricePerHour: number
  image: string
  experience: string
  studentsTotal: number
  sessionsCompleted: number
  description: string
}

export interface Subject {
  id: string
  name: string
  icon: string
}

export interface TimelineEvent {
  id: string
  type: 'session' | 'assessment' | 'milestone'
  week: number
  day: number
  title: string
  description: string
  duration?: number
  date: string
  topics?: string[]
}

export interface CalculationResult {
  studentName: string
  currentGrade: number
  targetGrade: number
  improvementTarget: number
  totalWeeks: number
  totalSessions: number
  sessionsPerWeek: number
  sessionDuration: number
  totalHours: number
  totalCost: number
  timeline: TimelineEvent[]
  milestones: string[]
}