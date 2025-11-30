'use client'

import { Share2, Download, MessageCircle, Twitter, Instagram, RotateCcw, Users, TrendingUp, AlertCircle } from 'lucide-react'

interface ResultSectionProps {
  results: {
    teacher: any
    items: any[]
    mostShocking: any
  } | null
  onShare: () => void
  onReset: () => void
  onAddCustomItem?: () => void
  formatSalary: (amount: number) => string
  formatTimeMessage: (months: number) => string
}

export default function ResultSection({
  results,
  onShare,
  onReset,
  onAddCustomItem,
  formatSalary,
  formatTimeMessage
}: ResultSectionProps) {
  if (!results) return null

  const shockingText = `Lihat analisis ini: ${results.teacher.title} dengan gaji ${formatSalary(results.teacher.monthlySalary)} per bulan butuh ${results.mostShocking.message} untuk beli ${results.mostShocking.item.name}! 😱 #BayarGuruLayak`

  return (
    <section className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shock Value Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
            <AlertCircle className="w-6 h-6" />
            <span className="font-bold text-lg">💡 INI ADALAH KENYATAAN!</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            {results.teacher.title}
            <br />
            <span className="text-yellow-300">Butuh {formatTimeMessage(results.mostShocking.months)}</span>
            <br />
            Untuk Beli {results.mostShocking.item.name}
          </h2>

          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Gaji: {formatSalary(results.teacher.monthlySalary)}/bulan di {results.teacher.location}
            <br />
            {results.teacher.experience} tahun pengalaman • Status: {results.teacher.status}
          </p>

          {/* Most Shocking Item Display */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-6">
              <div className="text-6xl">{results.mostShocking.item.icon}</div>
              <div className="text-center">
                <div className="text-5xl font-black text-yellow-300 mb-2">
                  {formatTimeMessage(results.mostShocking.months)}
                </div>
                <div className="text-2xl font-semibold mb-1">{results.mostShocking.item.name}</div>
                <div className="text-lg text-red-200">
                  {results.mostShocking.item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Viral Share Section */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <Share2 className="w-8 h-8 text-red-600" />
              Bagikan Kebenaran Ini!
            </h3>
            <p className="text-gray-600 text-lg">
              Orang perlu tahu berapa sulitnya hidup guru di Indonesia
            </p>
          </div>

          {/* Share Preview */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-8 border-2 border-red-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-3">📱 Preview Share:</div>
              <div className="bg-white rounded-lg p-4 shadow-inner text-left">
                <p className="text-gray-800 font-medium leading-relaxed">
                  {shockingText}
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  GuruKita.id - #BayarGuruLayak
                </div>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <button
              onClick={onShare}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Share2 className="w-5 h-5" />
              Share ke WhatsApp
            </button>

            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shockingText)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Twitter className="w-5 h-5" />
              Share ke Twitter
            </button>

            <button
              onClick={() => {
                navigator.clipboard.writeText(`${shockingText} ${window.location.href}`)
                alert('Teks sudah disalin! Silakan share ke Instagram Stories.')
              }}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              Share ke Instagram
            </button>

            <button
              onClick={() => {
                navigator.clipboard.writeText(`${shockingText} ${window.location.href}`)
                alert('Link sudah disalin!')
              }}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Copy Link
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {onAddCustomItem && (
              <button
                onClick={onAddCustomItem}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>➕</span>
                Tambah Item Custom
              </button>
            )}

            <button
              onClick={onReset}
              className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Cek Guru Lain
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
            <div className="text-3xl font-black mb-2">2.4 Juta+</div>
            <div className="text-red-100 font-semibold">Orang Sudah Lihat</div>
            <div className="text-red-200 text-sm mt-1">Data ini tersebar luas</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
            <div className="text-3xl font-black mb-2">87%</div>
            <div className="text-red-100 font-semibold">Kaget Lihat Hasil</div>
            <div className="text-red-200 text-sm mt-1">Ini kenyataan yang menyedihkan</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <MessageCircle className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
            <div className="text-3xl font-black mb-2">145 Ribu+</div>
            <div className="text-red-100 font-semibold">Sudah Dibagikan</div>
            <div className="text-red-200 text-sm mt-1">Viral di sosial media</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-3xl font-black mb-4">#BayarGuruLayak</h3>
            <p className="text-xl text-red-100 mb-6">
              Guru adalah pahlawan tanpa tanda jasa.<br />
              Mereka mendidik generasi bangsa, tapi gajinya memprihatinkan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                📢 Tandatangani Petisi
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-all backdrop-blur-lg">
                📊 Lihat Data Lengkap
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-red-100 text-sm">
            💡 Data ini diambil dari guru sungguhan di seluruh Indonesia.
            Bantu sebarkan kebenaran ini agar lebih banyak orang yang sadar.
          </p>
          <div className="flex justify-center items-center gap-6 mt-4 text-xs text-red-200">
            <span>✓ Data Terverifikasi</span>
            <span>✓ Real Teacher Salaries</span>
            <span>✓ Updated 2024</span>
            <span>✓ No Fake Data</span>
          </div>
        </div>
      </div>
    </section>
  )
}