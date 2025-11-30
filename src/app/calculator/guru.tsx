'use client'

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  Calculator,
  TrendingUp,
  AlertTriangle,
  Clock,
  Calendar,
  DollarSign,
  Target,
  Eye,
  EyeOff,
  Trash2,
  Plus
} from 'lucide-react'
import type { TeacherProfile, Item, ItemResult } from '@/types/calculator'

interface GuruSectionProps {
  results: {
    teacher: TeacherProfile
    items: ItemResult[]
    mostShocking: ItemResult
    livingCosts?: number
    adjustedMonthlySavings?: number
  } | null
  timelineOrder: string[]
  hiddenTimelines: Set<string>
  showAllTimelines: boolean
  showLivingCostInput: boolean
  livingCosts: number
  onDragEnd: (event: DragEndEvent) => void
  onToggleTimeline: (itemId: string) => void
  onToggleShowAll: () => void
  onToggleLivingCostInput: () => void
  onLivingCostsChange: (costs: number) => void
  formatTimeMessage: (months: number) => string
  getSeverityColor: (months: number) => string
  getSeverityEmoji: (months: number) => string
  getSeverityLabel: (months: number) => string
  getItemEmoji: (category: string, itemId?: string) => string
  formatSalary: (amount: number) => string
  onRemoveCustomItem?: (itemId: string) => void
}

// Sortable Item Result Component
function SortableItemResult({
  itemResult,
  index,
  isHidden,
  showVisibilityToggle,
  onToggleVisibility,
  onRemove,
  getItemEmoji,
  getSeverityColor,
  getSeverityEmoji,
  getSeverityLabel,
  formatTimeMessage
}: {
  itemResult: ItemResult
  index: number
  isHidden: boolean
  showVisibilityToggle: boolean
  onToggleVisibility: () => void
  onRemove?: () => void
  getItemEmoji: (category: string, itemId?: string) => string
  getSeverityColor: (months: number) => string
  getSeverityEmoji: (months: number) => string
  getSeverityLabel: (months: number) => string
  formatTimeMessage: (months: number) => string
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: itemResult.item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  if (isHidden) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60"
        {...attributes}
        {...listeners}
      >
        <div className="text-gray-400 cursor-move">⋮⋮</div>
        <span className="text-gray-500 line-through">
          {getItemEmoji(itemResult.item.category, itemResult.item.id)} {itemResult.item.name}
        </span>
        <span className="text-gray-400 text-sm ml-auto">Sembunyikan</span>
      </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-xl border-2 shadow-md hover:shadow-lg transition-all cursor-move ${
        itemResult.months >= 6 ? 'border-red-200' :
        itemResult.months >= 2 ? 'border-orange-200' : 'border-green-200'
      }`}
      {...attributes}
      {...listeners}
    >
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Item Icon */}
          <div className="text-3xl flex-shrink-0">
            {getItemEmoji(itemResult.item.category, itemResult.item.id)}
          </div>

          {/* Item Details */}
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-900">{itemResult.item.name}</h4>
              {showVisibilityToggle && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleVisibility()
                  }}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {isHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-3">{itemResult.item.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span className="text-lg font-bold text-gray-800">
                  {itemResult.item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                </span>
              </div>

              <div className={`text-right ${getSeverityColor(itemResult.months)}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{getSeverityEmoji(itemResult.months)}</span>
                  <span className="text-2xl font-bold">
                    {formatTimeMessage(itemResult.months)}
                  </span>
                </div>
                <div className="text-sm font-medium">{getSeverityLabel(itemResult.months)}</div>
              </div>
            </div>

            {onRemove && itemResult.item.id.startsWith('custom-') && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove()
                }}
                className="mt-2 flex items-center gap-1 text-xs text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-3 h-3" />
                Hapus item custom
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GuruSection({
  results,
  timelineOrder,
  hiddenTimelines,
  showAllTimelines,
  showLivingCostInput,
  livingCosts,
  onDragEnd,
  onToggleTimeline,
  onToggleShowAll,
  onToggleLivingCostInput,
  onLivingCostsChange,
  formatTimeMessage,
  getSeverityColor,
  getSeverityEmoji,
  getSeverityLabel,
  getItemEmoji,
  formatSalary,
  onRemoveCustomItem
}: GuruSectionProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  if (!results) return null

  const visibleItems = showAllTimelines
    ? results.items
    : results.items.filter(item => !hiddenTimelines.has(item.item.id))

  const displayItems = showAllTimelines
    ? timelineOrder.map(itemId => results.items.find(item => item.item.id === itemId)).filter(Boolean) as ItemResult[]
    : visibleItems.slice(0, 3)

  return (
    <section
      id="results-section"
      className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teacher Profile Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Hasil Analisis: {results.teacher.title}
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-2">
            Gaji: {formatSalary(results.teacher.monthlySalary)}/bulan
          </p>
          <p className="text-gray-500">
            {results.teacher.location} • {results.teacher.experience} tahun • {results.teacher.status}
          </p>
        </div>

        {/* Reality Check Section */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <span className="font-bold text-yellow-900 text-lg">
                {showLivingCostInput ? '💸 Real Check: Berapa yang bisa ditabung?' : '⚠️ Ini gaji KOTOR, belum dipotong apapun!'}
              </span>
            </div>
            <button
              onClick={onToggleLivingCostInput}
              className="px-4 py-2 bg-yellow-200 hover:bg-yellow-300 text-yellow-800 rounded-lg font-bold transition-colors"
            >
              {showLivingCostInput ? 'Tutup' : 'Cek realitas →'}
            </button>
          </div>

          {showLivingCostInput && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-400">
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-700 mb-1">Gaji Bersih</div>
                    <div className="text-2xl font-black text-green-600">
                      {formatSalary(results.adjustedMonthlySavings || 0)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Sisa setelah {formatSalary(livingCosts)} biaya hidup
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-400">
                  <div className="text-center">
                    <div className="text-sm font-bold text-red-700 mb-1">Biaya Hidup</div>
                    <div className="text-2xl font-black text-red-600">
                      {formatSalary(livingCosts)}
                    </div>
                    <div className="text-xs text-gray-500">Makan + Kos + Transport</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Biaya hidup per bulan:
                </label>
                <input
                  type="number"
                  value={livingCosts}
                  onChange={(e) => onLivingCostsChange(Number(e.target.value))}
                  className="w-full px-4 py-3 text-lg font-bold border-2 border-yellow-400 rounded-lg"
                  placeholder="Contoh: 1500000"
                  min="0"
                  max={results.teacher.monthlySalary}
                />
                <div className="text-xs text-gray-600 mt-1">
                  Tips: Mulai dari Rp 1.500.000 untuk hidup sederhana
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onLivingCostsChange(1500000)}
                  className="px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg font-bold text-sm"
                >
                  Makan sederhana (Rp 1.5jt)
                </button>
                <button
                  onClick={() => onLivingCostsChange(2500000)}
                  className="px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg font-bold text-sm"
                >
                  Makan lumayan (Rp 2.5jt)
                </button>
              </div>

              {livingCosts >= results.teacher.monthlySalary && (
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-3 text-center">
                  <div className="text-red-800 font-bold">💀 GAJIAN HABIS BUAT MAKAN DOANK!</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Most Shocking Result */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border-2 border-red-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-3xl">{getSeverityEmoji(results.mostShocking.months)}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">💔 Paling Menyedihkan:</h3>
              <p className="text-gray-600">Butuh <span className="font-bold">{formatTimeMessage(results.mostShocking.months)}</span> untuk beli:</p>
            </div>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{getItemEmoji(results.mostShocking.item.category, results.mostShocking.item.id)}</span>
              <div>
                <h4 className="font-bold text-lg">{results.mostShocking.item.name}</h4>
                <p className="text-gray-600 text-sm">{results.mostShocking.item.description}</p>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  {results.mostShocking.item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-red-600" />
              Timeline Berapa Lama Nabung
            </h3>
            <div className="text-sm text-gray-600">
              {showAllTimelines ? 'Semua items' : '3 items terlama'} • Seret untuk urutkan
            </div>
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
          >
            <SortableContext
              items={timelineOrder}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {displayItems.map((itemResult, index) => (
                  <SortableItemResult
                    key={itemResult.item.id}
                    itemResult={itemResult}
                    index={index}
                    isHidden={hiddenTimelines.has(itemResult.item.id)}
                    showVisibilityToggle={showAllTimelines}
                    onToggleVisibility={() => onToggleTimeline(itemResult.item.id)}
                    onRemove={onRemoveCustomItem ? () => onRemoveCustomItem(itemResult.item.id) : undefined}
                    getItemEmoji={getItemEmoji}
                    getSeverityColor={getSeverityColor}
                    getSeverityEmoji={getSeverityEmoji}
                    getSeverityLabel={getSeverityLabel}
                    formatTimeMessage={formatTimeMessage}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          {results.items.length > 3 && (
            <div className="text-center mt-6">
              <button
                onClick={onToggleShowAll}
                className="px-6 py-3 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-bold transition-colors"
              >
                {showAllTimelines ? 'Tampilkan 3 terlama' : `Lihat ${results.items.length - 3} items lainnya`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}