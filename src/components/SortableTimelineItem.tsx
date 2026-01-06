'use client'

import { useTranslations } from 'next-intl'
import { GripVertical, Eye, EyeOff } from 'lucide-react'
import {
  useSortable,
} from '@dnd-kit/sortable'
import { ItemResult } from '@/types/calculator'

interface SortableTimelineItemProps {
  itemResult: ItemResult
  index: number
  isHidden: boolean
  showVisibilityToggle: boolean
  onToggleVisibility: () => void
  onRemove: () => void
  getItemEmoji: (category: string, itemId?: string) => string
  getSeverityColor: (months: number) => string
  getSeverityEmoji: (months: number) => string
  getSeverityLabel: (months: number) => string
  formatTimeMessage: (months: number) => string
}

export default function SortableTimelineItem({
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
}: SortableTimelineItemProps) {
  const t = useTranslations()
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: itemResult.item.id })

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition,
    opacity: isDragging ? 0.5 : undefined,
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      const millions = amount / 1000000
      return `Rp ${millions.toFixed(1)}${t('Common.millionShort')}`
    } else if (amount >= 1000) {
      const thousands = amount / 1000
      return `Rp ${thousands.toFixed(0)}${t('Common.thousandShort')}`
    }
    return `Rp ${amount.toLocaleString('id-ID')}`
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${index < 3 && !isHidden ? 'bg-gray-50' : 'bg-gray-100 border border-gray-200'
        } ${isHidden ? 'opacity-40' : ''}`}
    >
      {/* Drag Handle */}
      <div
        className="mr-2 cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="w-4 h-4" />
      </div>

      {/* Toggle Visibility - Only show when enabled */}
      {showVisibilityToggle && (
        <button
          onClick={onToggleVisibility}
          className="mr-2 text-gray-400 hover:text-gray-600 transition-colors"
          title={isHidden ? t('Common.show') : t('Common.hide')}
        >
          {isHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      )}

      {/* Item Content */}
      <div className="flex items-center gap-2 flex-1">
        <span className="text-xl">{getItemEmoji(itemResult.item.category, itemResult.item.id)}</span>
        <div>
          <div className="font-semibold text-sm text-gray-900">
            {itemResult.item.name || t(`Data.Items.${itemResult.item.id}.name`)}
          </div>
          <div className="text-xs text-gray-600">
            {formatCurrency(itemResult.item.price)}
          </div>
        </div>
      </div>

      {/* Time Display */}
      <div className="text-right">
        <div className={`font-bold text-base ${getSeverityColor(itemResult.months)}`}>
          {formatTimeMessage(itemResult.months)}
        </div>
        <div className={`text-xs font-medium ${getSeverityColor(itemResult.months)}`}>
          {getSeverityEmoji(itemResult.months)} {getSeverityLabel(itemResult.months)}
        </div>
      </div>

      {/* Remove Button for Custom Items */}
      {itemResult.item.id.startsWith('custom-') && (
        <button
          onClick={onRemove}
          className="ml-2 text-xs text-red-600 hover:text-red-800 font-medium"
        >
          {t('Common.delete')}
        </button>
      )}
    </div>
  )
}