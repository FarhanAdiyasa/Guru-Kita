'use client'

import { TeacherProfile } from '@/types/calculator'

interface TeacherProfileCardProps {
  teacher: TeacherProfile
  isSelected: boolean
  onSelect: (teacher: TeacherProfile) => void
}

export default function TeacherProfileCard({ teacher, isSelected, onSelect }: TeacherProfileCardProps) {
  const handleClick = () => {
    onSelect(teacher)
  }

  // Format salary in Indonesian style
  const formatSalary = (amount: number) => {
    const millions = amount / 1000000
    return `Rp ${millions.toFixed(1)} juta`
  }

  return (
    <div
      onClick={handleClick}
      className={`
        w-full overflow-hidden rounded-xl cursor-pointer transition-all duration-200 p-4 sm:p-6
        ${isSelected
          ? 'bg-[#E8F5E9] ring-2 ring-[#5D8E7E]'
          : 'bg-[#F3F0EB] hover:bg-[#EBE5D9]'
        }
        hover:shadow-md active:translate-y-0.5 active:scale-[0.98]
      `}
      role="button"
      tabIndex={0}
      aria-label={`Pilih profil: ${teacher.title}, gaji ${formatSalary(teacher.monthlySalary)}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {/* Top: Location */}
      <div className="text-lg font-semibold text-gray-900 mb-2">
        {teacher.location}
      </div>

      {/* Second line: Level + Experience */}
      <div className="text-sm text-gray-600 mb-3">
        Guru {teacher.level} • {teacher.experience} tahun pengalaman
      </div>

      {/* BIG SALARY */}
      <div className="text-center py-4 mb-3">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 leading-none">
          {formatSalary(teacher.monthlySalary)}
        </div>
        <div className="text-sm text-gray-500 mt-1">
          per bulan
        </div>
      </div>

      {/* Status badge */}
      <div className="flex justify-center">
        <span className={`
          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
          ${teacher.status === 'PNS'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-gray-100 text-gray-800'
          }
        `}>
          {teacher.status}
        </span>
      </div>
    </div>
  )
}