
'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'
import TeacherProfileCard from '@/components/TeacherProfileCard'
import { TeacherProfile } from '@/types/calculator'
import { CONFIG } from '@/data/config'

const { teachers } = CONFIG

interface GuruSelectionProps {
  onTeacherSelect: (teacher: TeacherProfile) => void
  showAllTeachers: boolean
  setShowAllTeachers: (show: boolean) => void
}

export default function GuruSelection({ onTeacherSelect, showAllTeachers, setShowAllTeachers }: GuruSelectionProps) {
  // Sort teachers by salary and get 3 representative profiles
  const sortedTeachers = [...teachers].sort((a, b) => a.monthlySalary - b.monthlySalary)

  // Get representative profiles (Low, Mid, High)
  const lowTeacher = sortedTeachers[0]
  const midTeacher = sortedTeachers[Math.floor(sortedTeachers.length / 2)]
  const highTeacher = sortedTeachers[sortedTeachers.length - 1]

  const representativeTeachers = [lowTeacher, midTeacher, highTeacher]

  // Get the rest of the teachers
  const otherTeachers = sortedTeachers.filter(t => !representativeTeachers.includes(t))

  // If showing all, append others to the bottom to maintain order of top 3
  const displayTeachers = showAllTeachers
    ? [...representativeTeachers, ...otherTeachers]
    : representativeTeachers

  // Indonesian currency formatting
  const formatSalary = (amount: number) => {
    const millions = amount / 1000000
    return `Rp ${millions.toFixed(1)} juta`
  }

  return (
    <div>
      {/* Header */}
      <header>
        <div className="px-4 py-6 sm:px-6 lg:py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-emerald-50 rounded-xl">
                <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-3xl">
                  Berapa lama guru harus nabung?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Selection Grid */}
      <div className="p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pilih Profil Guru</h2>
          <p className="text-gray-600">Klik profil guru untuk melihat analisis keterjangkauan mereka</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {displayTeachers.map((teacher) => (
            <TeacherProfileCard
              key={teacher.id}
              teacher={teacher}
              isSelected={false}
              onSelect={onTeacherSelect}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {!showAllTeachers && teachers.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllTeachers(true)}
              className="inline-flex items-center px-6 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors font-medium"
            >
              <span>+ Lihat {teachers.length - 3} Profil Guru Lainnya</span>
            </button>
          </div>
        )}

        {showAllTeachers && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllTeachers(false)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium"
            >
              <span>- Tampilkan Sedikit</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}