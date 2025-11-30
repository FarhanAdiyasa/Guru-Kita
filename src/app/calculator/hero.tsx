'use client'

import { Users, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'
import type { TeacherProfile } from '@/types/calculator'

interface HeroSectionProps {
  teachers: TeacherProfile[]
  selectedTeacher: TeacherProfile | null
  onTeacherSelect: (teacher: TeacherProfile) => void
  formatCurrency: (amount: number) => string
  formatSalary: (amount: number) => string
}

export default function HeroSection({
  teachers,
  selectedTeacher,
  onTeacherSelect,
  formatCurrency,
  formatSalary
}: HeroSectionProps) {
  // Sort teachers by salary (lowest first for maximum shock value)
  const sortedTeachers = [...teachers].sort((a, b) => a.monthlySalary - b.monthlySalary)

  // Display only 3 representative teachers for initial view
  const displayTeachers = [
    sortedTeachers[0], // Lowest salary
    sortedTeachers[Math.floor(sortedTeachers.length / 2)], // Middle salary
    sortedTeachers[sortedTeachers.length - 1] // Highest salary
  ]

  return (
    <section
      id="hero-section"
      className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"
    >
      {/* Header */}
      <div className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Berapa lama guru harus nabung?
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Pilih profil guru untuk melihat berapa bulan mereka butuhkan untuk membeli barang-barang biasa
            </p>

            {/* Shock Warning */}
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-6 py-3 rounded-full mb-8">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">⚠️ Hasilnya mungkin akan mengejutkan Anda</span>
            </div>
          </div>

          {/* Teacher Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {displayTeachers.map((teacher) => (
              <div
                key={teacher.id}
                onClick={() => onTeacherSelect(teacher)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 ${
                  selectedTeacher?.id === teacher.id
                    ? 'ring-4 ring-red-500 ring-offset-4'
                    : ''
                }`}
              >
                {/* Teacher Profile Header */}
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">👨‍🏫</div>
                    <h3 className="font-bold text-xl mb-2">{teacher.title}</h3>
                    <p className="text-red-100 text-sm mb-1">{teacher.location}</p>
                    <p className="text-red-100 text-xs">
                      {teacher.experience} tahun • {teacher.status}
                    </p>
                  </div>
                </div>

                {/* Salary Display */}
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-600 font-medium">Gaji per bulan</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {formatSalary(teacher.monthlySalary)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Kotor, sebelum dipotong apapun
                    </div>
                  </div>

                  {/* Salary Comparison Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Minimal Wage (Jakarta)</span>
                      <span>Rp 5.0 juta</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          teacher.monthlySalary < 2500000
                            ? 'bg-red-500'
                            : teacher.monthlySalary < 3500000
                            ? 'bg-orange-500'
                            : 'bg-yellow-500'
                        }`}
                        style={{
                          width: `${Math.min((teacher.monthlySalary / 5000000) * 100, 100)}%`
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      teacher.monthlySalary < 2500000
                        ? 'bg-red-100 text-red-800'
                        : teacher.monthlySalary < 3500000
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {teacher.monthlySalary < 2500000 && "🚨 Di bawah UMR"}
                      {teacher.monthlySalary >= 2500000 && teacher.monthlySalary < 3500000 && "⚠️ Masih rendah"}
                      {teacher.monthlySalary >= 3500000 && "✨ Cukup baik"}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-4 bg-white">
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${
                      selectedTeacher?.id === teacher.id
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                    }`}
                    disabled={selectedTeacher?.id === teacher.id}
                  >
                    {selectedTeacher?.id === teacher.id
                      ? '✓ Sudah Dipilih'
                      : 'Hitung Berapa Lama Nabung →'
                    }
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Context Message */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-lg text-gray-900">Kenapa gajinya segitu?</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Data ini diambil dari guru sungguhan di seluruh Indonesia.
                Banyak guru harus kerja sampingan, nabung bertahun-tahun untuk barang yang dianggap biasa,
                dan hidup di bawah standar minimum. Klik salah satu profil di atas untuk melihat kenyataannya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}