'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Calculator, ArrowLeft } from 'lucide-react'
import TeacherProfileCard from '@/components/TeacherProfileCard'
import { TeacherProfile } from '@/types/calculator'
import { CONFIG } from '@/data/config'

const { teachers } = CONFIG

// Define status types
type TeacherStatus = 'Honorer' | 'PPPK' | 'PNS' | 'Semua'

const STATUS_KEYS = {
  Semua: 'all',
  Honorer: 'honorer',
  PPPK: 'pppk',
  PNS: 'pns'
} as const;

const STATUS_CONFIG_UI = {
  Semua: {
    color: 'gray',
    bgColor: 'bg-gray-100',
    activeColor: 'bg-gray-900 text-white',
  },
  Honorer: {
    color: 'red',
    bgColor: 'bg-red-50',
    activeColor: 'bg-red-600 text-white',
  },
  PPPK: {
    color: 'amber',
    bgColor: 'bg-amber-50',
    activeColor: 'bg-amber-600 text-white',
  },
  PNS: {
    color: 'blue',
    bgColor: 'bg-blue-50',
    activeColor: 'bg-blue-600 text-white',
  }
}

interface GuruSelectionProps {
  onTeacherSelect: (teacher: TeacherProfile) => void
  showAllTeachers: boolean
  setShowAllTeachers: (show: boolean) => void
  onBack: () => void
}

export default function GuruSelection({ onTeacherSelect, showAllTeachers, setShowAllTeachers, onBack }: GuruSelectionProps) {
  const t = useTranslations();
  const [activeStatus, setActiveStatus] = useState<TeacherStatus>('Semua')

  // Filter teachers by status
  const filteredTeachers = activeStatus === 'Semua'
    ? teachers
    : teachers.filter(t => t.status === activeStatus)

  // Sort teachers by salary
  const sortedTeachers = [...filteredTeachers].sort((a, b) => a.monthlySalary - b.monthlySalary)

  // Get count per status
  const statusCounts = {
    Semua: teachers.length,
    Honorer: teachers.filter(t => t.status === 'Honorer').length,
    PPPK: teachers.filter(t => t.status === 'PPPK').length,
    PNS: teachers.filter(t => t.status === 'PNS').length
  }

  // Display logic
  const displayTeachers = showAllTeachers ? sortedTeachers : sortedTeachers.slice(0, 6)

  return (
    <div>
      {/* Header */}
      <header>
        <div className="px-4 py-6 sm:px-6 lg:py-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-6 group"
          >
            <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-gray-100">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-tight">{t('Common.back')}</span>
          </button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-emerald-50 rounded-xl">
                <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-3xl">
                  {t('GuruSelection.headerTitle')}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Selection Grid */}
      <div className="p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('GuruSelection.selectProfileTitle')}</h2>
          <p className="text-gray-600 mb-6">{t('GuruSelection.selectProfileSubtitle')}</p>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {(Object.keys(STATUS_KEYS) as TeacherStatus[]).map((status) => {
              const configUI = STATUS_CONFIG_UI[status];
              const key = STATUS_KEYS[status];
              const isActive = activeStatus === status
              const count = statusCounts[status]

              return (
                <button
                  key={status}
                  onClick={() => {
                    setActiveStatus(status)
                    setShowAllTeachers(false)
                  }}
                  className={`
                    px-4 py-2 rounded-full font-bold text-sm transition-all
                    ${isActive
                      ? configUI.activeColor
                      : `${configUI.bgColor} text-gray-700 hover:opacity-80`
                    }
                  `}
                >
                  {t(`GuruSelection.filters.${key}`)} ({count})
                </button>
              )
            })}
          </div>

          {/* Status Description */}
          <p className="text-sm text-gray-500">
            {t(`GuruSelection.filters.${STATUS_KEYS[activeStatus]}Desc`)}
          </p>
        </div>

        {/* Teacher Cards Grid */}
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

        {/* Empty State */}
        {displayTeachers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('GuruSelection.noData')}</p>
          </div>
        )}

        {/* Show More/Less Button */}
        {!showAllTeachers && sortedTeachers.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllTeachers(true)}
              className="inline-flex items-center px-6 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors font-medium"
            >
              <span>{t('GuruSelection.showMore', { count: sortedTeachers.length - 6 })}</span>
            </button>
          </div>
        )}

        {showAllTeachers && sortedTeachers.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllTeachers(false)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium"
            >
              <span>{t('GuruSelection.showLess')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}