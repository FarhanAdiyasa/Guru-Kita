'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowLeft, Share2, RefreshCw } from 'lucide-react'
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
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import SortableTimelineItem from '@/components/SortableTimelineItem'
import Toast, { ToastType } from '@/components/Toast'
import ShareModal from '@/components/ShareModal'
import { ComprehensiveResults } from '@/types/calculator'

// Helper functions


const getItemEmoji = (category: string, itemId?: string) => {
  if (itemId?.startsWith('custom-')) return '⭐'

  switch (category) {
    case 'technology': return '📱'
    case 'transportation': return '🏍️'
    case 'housing': return '🏠'
    case 'religious': return '🕋'
    case 'education': return '📚'
    case 'health': return '🏥'
    case 'family': return '👨‍👩‍👧‍👦'
    default: return '📦'
  }
}

const getSeverityColor = (months: number) => {
  if (months === Infinity) return 'text-red-700'
  if (months >= 6) return 'text-red-600'
  if (months >= 2) return 'text-amber-600'
  return 'text-emerald-600'
}

const getSeverityEmoji = (months: number) => {
  if (months === Infinity) return '🚫'
  if (months >= 6) return '🔴'
  if (months >= 2) return '🟡'
  return '🟢'
}

interface ResultProps {
  results: ComprehensiveResults
  calculating: boolean
  showAllTimelines: boolean
  setShowAllTimelines: (show: boolean) => void
  showLivingCostInput: boolean
  setShowLivingCostInput: (show: boolean) => void
  livingCosts: number
  showAddItem: boolean
  setShowAddItem: (show: boolean) => void
  customItemName: string
  setCustomItemName: (name: string) => void
  customItemPrice: string
  setCustomItemPrice: (price: string) => void
  hiddenTimelines: Set<string>
  timelineOrder: string[]
  hideSections: boolean
  activeTab: 'reality' | 'custom'
  setActiveTab: (tab: 'reality' | 'custom') => void
  onBackToSelection: () => void
  onLivingCostsChange: (cost: number) => void
  onAddCustomItem: () => void
  onRemoveCustomItem: (itemId: string) => void
  onToggleTimelineVisibility: (itemId: string) => void
  onShare: () => void
  onDragEnd: (event: DragEndEvent) => void
}

export default function Result({
  results,
  calculating,
  showAllTimelines,
  setShowAllTimelines,
  showLivingCostInput,
  setShowLivingCostInput,
  livingCosts,
  showAddItem,
  setShowAddItem,
  customItemName,
  setCustomItemName,
  customItemPrice,
  setCustomItemPrice,
  hiddenTimelines,
  timelineOrder,
  hideSections,
  activeTab,
  setActiveTab,
  onBackToSelection,
  onLivingCostsChange,
  onAddCustomItem,
  onRemoveCustomItem,
  onToggleTimelineVisibility,
  onShare,
  onDragEnd
}: ResultProps) {
  const t = useTranslations();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: ToastType; isVisible: boolean }>({
    message: '',
    type: 'info',
    isVisible: false
  })

  // Initialize drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const formatSalary = (amount: number) => {
    if (amount >= 1000000) {
      const millions = amount / 1000000
      return `Rp ${millions.toFixed(1)} ${t('Common.million')}`
    }
    const thousands = amount / 1000
    return `Rp ${thousands.toFixed(0)} ${t('Common.thousand')}`
  }

  const formatTimeMessage = (months: number) => {
    if (months === Infinity) {
      return t('Result.time.impossible')
    }

    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years >= 1) {
      if (remainingMonths > 0) {
        return `${years} ${t('Result.time.year')} ${remainingMonths} ${t('Result.time.month')}`
      }
      return `${years} ${t('Result.time.year')}`
    }
    return `${months} ${t('Result.time.month')}`
  }

  const getSeverityLabel = (months: number) => {
    if (months === Infinity) return t('Result.severity.impossible')
    if (months >= 6) return t('Result.severity.veryChallenging')
    if (months >= 2) return t('Result.severity.challenging')
    return t('Result.severity.affordable')
  }

  const getShareContent = () => {
    const title = 'GuruKita.id - Realita Gaji Guru'
    const itemName = t(`Data.Items.${results.items[0].item.id}.name`);
    const text = t('Result.shareContent', {
      level: results.teacher.level,
      location: t(`Data.Teachers.${results.teacher.id}.location`),
      salary: formatSalary(results.teacher.monthlySalary),
      item: itemName,
      time: results.items[0].years > 0 ? `${results.items[0].years} ${t('Result.time.year')} ` : `${results.items[0].remainingMonths} ${t('Result.time.month')}`
    });

    return { title, text, url: typeof window !== 'undefined' ? window.location.href : '' }
  }

  if (calculating) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {t('Result.calculating')}
          </div>
          <div className="text-lg text-gray-600">
            {t('Result.calculatingDesc')}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-12">
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        {...getShareContent()}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />

      <div className="max-w-2xl mx-auto">
        <div className="overflow-hidden">
          {/* Profile Header */}
          <div className="p-4 text-center relative">
            <div className="absolute top-4 left-4">
              <button
                onClick={onBackToSelection}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-gray-100">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight hidden sm:inline">{t('Common.back')}</span>
              </button>
            </div>

            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 mt-12">
              Guru {results.teacher.level} • {t(`Data.Teachers.${results.teacher.id}.location`)}
            </h2>

            <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-1 tracking-tight">
              {formatSalary(results.teacher.monthlySalary)}
            </div>

            <div className="text-sm text-gray-500 font-medium">
              {results.teacher.experience} {t('Common.yearsExp')} • {results.teacher.status}
            </div>

            <div className="w-12 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Advanced Options Toggle */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setShowLivingCostInput(!showLivingCostInput)}
              className="w-full px-4 py-3 flex items-center justify-between text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{t('Result.advancedOptions')}</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform ${showLivingCostInput ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Advanced Options Content */}
          {showLivingCostInput && (
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('reality')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'reality'
                    ? 'bg-yellow-50 text-yellow-900 border-b-2 border-yellow-400'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{t('Result.monthlyExpenses')}</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('custom')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'custom'
                    ? 'bg-purple-50 text-purple-900 border-b-2 border-purple-400'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{t('Result.dreamItems')}</span>
                  </div>
                </button>
              </div>

              <div className="p-4">
                {activeTab === 'reality' ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-gray-900">
                        {t('Result.calcRemainingSalary')}
                      </span>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-yellow-200">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center">
                          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t('Result.grossSalary')}</div>
                          <div className="text-lg font-black text-emerald-600">
                            {formatSalary(results.teacher.monthlySalary)}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">{t('Result.canSave')}</div>
                          <div className={`text-lg font-black ${(results.adjustedMonthlySavings || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                            {(results.adjustedMonthlySavings || 0) > 0 ? formatSalary(results.adjustedMonthlySavings || 0) : 'Rp 0 😭'}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        {t('Result.expensesPerMonth')}
                      </div>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                          <span className="text-sm font-bold text-gray-600">Rp</span>
                        </div>
                        <input
                          type="number"
                          value={livingCosts}
                          onChange={(e) => onLivingCostsChange(Number(e.target.value))}
                          className="w-full pl-10 pr-12 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-500"
                          placeholder="Contoh: 1500000"
                          min="0"
                          max={results.teacher.monthlySalary}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                          <span className="text-xs font-bold text-gray-500">/bln</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => onLivingCostsChange(1500000)}
                          className="flex-1 px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium hover:bg-orange-200"
                        >
                          Sederhana (1.5jt)
                        </button>
                        <button
                          onClick={() => onLivingCostsChange(2500000)}
                          className="flex-1 px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium hover:bg-orange-200"
                        >
                          Lumayan (2.5jt)
                        </button>
                      </div>
                    </div>

                    {livingCosts >= results.teacher.monthlySalary && (
                      <div className="bg-red-100 border border-red-300 rounded-lg p-2 text-center">
                        <div className="text-red-800 font-bold text-sm">{t('Result.salaryExhausted')}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-gray-900">
                        {t('Result.addDreamItem')}
                      </span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('Result.itemName')}
                      </label>
                      <input
                        type="text"
                        value={customItemName}
                        onChange={(e) => setCustomItemName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                        placeholder={t('Result.itemNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('ItemSelection.price')}:
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                          <span className="text-sm font-bold text-gray-600">Rp</span>
                        </div>
                        <input
                          type="number"
                          value={customItemPrice}
                          onChange={(e) => setCustomItemPrice(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                          placeholder="Contoh: 5000000"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={onAddCustomItem}
                        disabled={!customItemName.trim() || !customItemPrice.trim() || Number(customItemPrice) <= 0}
                        className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
                      >
                        {t('Result.addItem')}
                      </button>
                      <button
                        onClick={() => {
                          setCustomItemName('')
                          setCustomItemPrice('')
                        }}
                        className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
                      >
                        {t('Common.delete')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="p-3">
            <div className="mb-2 text-center">
              <div className="text-xs font-bold text-gray-700 mb-1">
                <strong>{t('Result.mainTimelines')}</strong> ({t('Result.dragToOrder')})
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
                <div className="space-y-2">
                  {timelineOrder
                    .filter(id => !hiddenTimelines.has(id))
                    .slice(0, 3)
                    .map((id, index) => {
                      const itemResult = results.items.find(r => r.item.id === id)
                      if (!itemResult) return null
                      return (
                        <SortableTimelineItem
                          key={id}
                          itemResult={itemResult}
                          index={index}
                          isHidden={false}
                          showVisibilityToggle={true}
                          onToggleVisibility={() => onToggleTimelineVisibility(id)}
                          onRemove={() => onRemoveCustomItem(id)}
                          getItemEmoji={getItemEmoji}
                          getSeverityColor={getSeverityColor}
                          getSeverityEmoji={getSeverityEmoji}
                          getSeverityLabel={getSeverityLabel}
                          formatTimeMessage={formatTimeMessage}
                        />
                      )
                    })}

                  {!showAllTimelines && timelineOrder.length > 3 && (
                    <button
                      onClick={() => setShowAllTimelines(true)}
                      className="w-full py-2 text-xs text-gray-500 hover:text-gray-700 font-medium border border-dashed border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {t('Result.seeMoreTimelines', { count: timelineOrder.length - 3 })}
                    </button>
                  )}

                  {showAllTimelines && (
                    <>
                      {timelineOrder
                        .filter(id => !hiddenTimelines.has(id))
                        .slice(3)
                        .map((id, index) => {
                          const itemResult = results.items.find(r => r.item.id === id)
                          if (!itemResult) return null
                          return (
                            <SortableTimelineItem
                              key={id}
                              itemResult={itemResult}
                              index={index + 3}
                              isHidden={false}
                              showVisibilityToggle={true}
                              onToggleVisibility={() => onToggleTimelineVisibility(id)}
                              onRemove={() => onRemoveCustomItem(id)}
                              getItemEmoji={getItemEmoji}
                              getSeverityColor={getSeverityColor}
                              getSeverityEmoji={getSeverityEmoji}
                              getSeverityLabel={getSeverityLabel}
                              formatTimeMessage={formatTimeMessage}
                            />
                          )
                        })}

                      {hiddenTimelines.size > 0 && (
                        <div className="mt-4">
                          <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                            {t('Result.hiddenItems')} ({hiddenTimelines.size})
                          </div>
                          <div className="space-y-2 opacity-60">
                            {timelineOrder
                              .filter(id => hiddenTimelines.has(id))
                              .map((id, index) => {
                                const itemResult = results.items.find(r => r.item.id === id)
                                if (!itemResult) return null
                                return (
                                  <SortableTimelineItem
                                    key={id}
                                    itemResult={itemResult}
                                    index={index}
                                    isHidden={true}
                                    showVisibilityToggle={true}
                                    onToggleVisibility={() => onToggleTimelineVisibility(id)}
                                    onRemove={() => onRemoveCustomItem(id)}
                                    getItemEmoji={getItemEmoji}
                                    getSeverityColor={getSeverityColor}
                                    getSeverityEmoji={getSeverityEmoji}
                                    getSeverityLabel={getSeverityLabel}
                                    formatTimeMessage={formatTimeMessage}
                                  />
                                )
                              })}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => setShowAllTimelines(false)}
                        className="w-full py-2 text-xs text-gray-500 hover:text-gray-700 font-medium border border-dashed border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mt-2"
                      >
                        {t('Common.hide')}
                      </button>
                    </>
                  )}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <div className="p-3 flex gap-2">
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex-[2] py-3 bg-gray-900 text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Share2 className="w-5 h-5" />
              {t('Result.shareResults')}
            </button>

            <button
              onClick={onBackToSelection}
              className="flex-1 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold text-base hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              {t('Common.reset')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}