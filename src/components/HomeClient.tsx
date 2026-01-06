'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { arrayMove } from '@dnd-kit/sortable'
import Hero from '@/components/Hero'
import GuruSelection from '@/components/GuruSelection'
import ItemSelection from '@/components/ItemSelection'
import SingleItemResult from '@/components/SingleItemResult'
import Result from '@/components/Result'
import Lore from '@/components/Lore'
import { TeacherProfile, ComprehensiveResults, Item } from '@/types/calculator'
import { calculateItemResults } from '@/lib/calculator-utils'
import { CONFIG } from '@/data/config'

const { items: configItems } = CONFIG

// Filter out special items (like "Check All") for calculator logic
const items = configItems.filter(item => item.id !== 'all-items')


export default function HomeClient() {
  const [currentView, setCurrentView] = useState<'home' | 'lore' | 'guru-selection' | 'item-selection' | 'single-result' | 'result'>('home')
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherProfile | null>(null)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [results, setResults] = useState<ComprehensiveResults | null>(null)
  const [calculating, setCalculating] = useState(false)

  // State for Result component
  const [showAllTimelines, setShowAllTimelines] = useState(false)
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)
  const [livingCosts, setLivingCosts] = useState(0)
  const [customItemName, setCustomItemName] = useState('')
  const [customItemPrice, setCustomItemPrice] = useState('')
  const [hiddenTimelines, setHiddenTimelines] = useState<Set<string>>(new Set())
  const [timelineOrder, setTimelineOrder] = useState<string[]>([])
  const [hideSections, setHideSections] = useState(false)
  const [activeTab, setActiveTab] = useState<'reality' | 'custom'>('reality')
  const [showAllTeachers, setShowAllTeachers] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Initialize timeline order
  useEffect(() => {
    setTimelineOrder(items.map(i => i.id))
  }, [])

  // Handle URL State Hydration (Deep Linking)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const tId = params.get('t')
      const lcVal = params.get('lc')
      const iId = params.get('i')

      if (tId) {
        const { teachers } = CONFIG
        const foundTeacher = teachers.find(t => t.id === tId)

        if (foundTeacher) {
          const cost = lcVal ? parseInt(lcVal) : 0
          setSelectedTeacher(foundTeacher)
          setLivingCosts(cost)
          setCalculating(true)

          // Check if specific item deep link
          if (iId) {
            const foundItem = configItems.find(item => item.id === iId)
            if (foundItem && foundItem.id !== 'all-items') {
              setSelectedItem(foundItem)
              setCurrentView('single-result')
              setCalculating(false)
              return
            }
          }

          // Default: Full Results
          setCurrentView('result')

          // Re-calculate results
          const itemResults = calculateItemResults(items, foundTeacher, cost)
          const mostShocking = itemResults.reduce((prev, current) =>
            (current.months > prev.months) ? current : prev
          )

          setResults({
            teacher: foundTeacher,
            items: itemResults,
            mostShocking,
            livingCosts: cost,
            adjustedMonthlySavings: itemResults[0]?.monthlySavings ?? 0
          })
          setCalculating(false)
        }
      }
    }
  }, [])

  // Sync State to URL
  useEffect(() => {
    const params = new URLSearchParams()
    let shouldUpdate = false

    if (selectedTeacher) {
      if (currentView === 'result') {
        // Full Results View
        params.set('t', selectedTeacher.id)
        if (livingCosts > 0) params.set('lc', livingCosts.toString())
        shouldUpdate = true
      } else if (currentView === 'single-result' && selectedItem) {
        // Single Item View
        params.set('t', selectedTeacher.id)
        params.set('i', selectedItem.id)
        if (livingCosts > 0) params.set('lc', livingCosts.toString())
        shouldUpdate = true
      }
    }

    if (shouldUpdate) {
      const newUrl = `${window.location.pathname}?${params.toString()}`
      window.history.replaceState({ path: newUrl }, '', newUrl)
    } else if (currentView === 'home') {
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [selectedTeacher, selectedItem, livingCosts, currentView])

  // Handle scroll for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTryNow = () => {
    setCurrentView('guru-selection')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLore = () => {
    setCurrentView('lore')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTeacherSelect = (teacher: TeacherProfile) => {
    setSelectedTeacher(teacher)
    setCurrentView('item-selection')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleItemSelect = (item: Item) => {
    if (item.id === 'all-items') {
      handleShowAllResults()
      return
    }
    setSelectedItem(item)
    setCurrentView('single-result')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleShowAllResults = () => {
    if (!selectedTeacher) return

    setCalculating(true)
    setCurrentView('result')
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Filter out the "all-items" special item from calculation
    const calculatableItems = items.filter(i => i.id !== 'all-items')
    const itemResults = calculateItemResults(calculatableItems, selectedTeacher, livingCosts)

    // Find the item that takes the longest to save for (most shocking)
    const mostShocking = itemResults.reduce((prev, current) =>
      (current.months > prev.months) ? current : prev
    )

    const comprehensiveResults: ComprehensiveResults = {
      teacher: selectedTeacher,
      items: itemResults,
      mostShocking,
      livingCosts,
      adjustedMonthlySavings: itemResults[0]?.monthlySavings ?? 0
    }

    setResults(comprehensiveResults)
    setCalculating(false)
  }

  const handleBackToSelection = () => {
    setCurrentView('guru-selection')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      setResults(null)
      setSelectedTeacher(null)
      setSelectedItem(null)
    }, 1000)
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedTeacher(null)
    setSelectedItem(null)
    setResults(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLivingCostsChange = (cost: number) => {
    setLivingCosts(cost)
    if (selectedTeacher) {
      const itemResults = calculateItemResults(items, selectedTeacher, cost)
      const mostShocking = itemResults.reduce((prev, current) =>
        (current.months > prev.months) ? current : prev
      )

      setResults({
        teacher: selectedTeacher,
        items: itemResults,
        mostShocking,
        livingCosts: cost,
        adjustedMonthlySavings: itemResults[0]?.monthlySavings ?? 0
      })
    }
  }

  const handleAddCustomItem = () => {
    if (!customItemName || !customItemPrice || !results) return

    const price = parseInt(customItemPrice)
    if (isNaN(price) || price <= 0) return

    const newItemId = `custom-${Date.now()}`

    // Create new item result
    const monthlySavings = results.adjustedMonthlySavings ?? 0
    const monthsToSave = monthlySavings > 0 ? Math.ceil(price / monthlySavings) : Infinity

    const newItemResult = {
      item: {
        id: newItemId,
        name: customItemName,
        price: price,
        category: 'custom',
        description: 'Custom item',
        icon: '⭐'
      },
      months: monthsToSave,
      years: Math.floor(monthsToSave / 12),
      remainingMonths: monthsToSave % 12,
      message: monthsToSave === Infinity ? "Tidak bisa menabung 😔" : `${monthsToSave} bulan`,
      monthlySavings: monthlySavings
    }

    // Update results
    setResults({
      ...results,
      items: [newItemResult, ...results.items]
    })

    // Update timeline order
    setTimelineOrder([newItemId, ...timelineOrder])

    // Reset form
    setCustomItemName('')
    setCustomItemPrice('')
    setActiveTab('reality') // Switch back to main tab
  }

  const handleRemoveCustomItem = (itemId: string) => {
    if (!results) return

    setResults({
      ...results,
      items: results.items.filter(i => i.item.id !== itemId)
    })
    setTimelineOrder(timelineOrder.filter(id => id !== itemId))

    const newHidden = new Set(hiddenTimelines)
    newHidden.delete(itemId)
    setHiddenTimelines(newHidden)
  }

  const toggleTimelineVisibility = (itemId: string) => {
    const newHidden = new Set(hiddenTimelines)
    if (newHidden.has(itemId)) {
      newHidden.delete(itemId)
    } else {
      newHidden.add(itemId)
    }
    setHiddenTimelines(newHidden)
  }

  const handleShare = async () => {
    if (!results) return

    const text = `Cek berapa lama guru honorer harus menabung untuk beli ${results.items[0].item.name} di GuruKita.id! 😢`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'GuruKita.id - Realita Gaji Guru',
          text: text,
          url: window.location.href
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${text} ${window.location.href}`)
      alert('Link berhasil disalin!')
    }
  }

  const handleDragEnd = (event: { active: { id: string | number }; over: { id: string | number } | null }) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const activeId = String(active.id)
      const overId = String(over.id)
      const oldIndex = timelineOrder.indexOf(activeId)
      const newIndex = timelineOrder.indexOf(overId)

      const newOrder = arrayMove(timelineOrder, oldIndex, newIndex)
      setTimelineOrder(newOrder)
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-gray-200/50 transition-all duration-300">
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleBackToHome}>
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:rotate-3 transition-transform">
              GK
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight leading-none">
                GuruKita<span className="text-emerald-600">.id</span>
              </h1>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
                Suara Guru Indonesia
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <Link href="/feedback" className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-all">
              Feedback
            </Link>
            <Link href="/suggest-salary" className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-all">
              Input Gaji
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative max-w-6xl lg:max-w-7xl mx-auto px-4 py-2 sm:py-4 min-h-screen flex flex-col">

        <div className="relative flex-1 overflow-hidden">
          {/* Home View */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${currentView === 'home'
            ? 'relative z-10 translate-y-0 opacity-100'
            : 'absolute top-0 left-0 z-0 -translate-y-full opacity-0 pointer-events-none'
            }`}>
            <div className="flex items-center justify-center min-h-[600px]">
              <Hero onTryNow={handleTryNow} onLore={handleLore} />
            </div>
          </div>

          {/* Lore View */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${currentView === 'lore'
            ? 'relative z-10 translate-y-0 opacity-100'
            : currentView === 'home'
              ? 'absolute top-0 left-0 z-0 translate-y-full opacity-0 pointer-events-none'
              : 'absolute top-0 left-0 z-0 -translate-y-full opacity-0 pointer-events-none'
            }`}>
            <Lore onBack={handleBackToHome} onTryNow={handleTryNow} />
          </div>

          {/* Guru Selection View */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${currentView === 'guru-selection'
            ? 'relative z-10 translate-y-0 opacity-100'
            : currentView === 'home' || currentView === 'lore'
              ? 'absolute top-0 left-0 z-0 translate-y-full opacity-0 pointer-events-none'
              : 'absolute top-0 left-0 z-0 -translate-y-full opacity-0 pointer-events-none'
            }`}>
            <GuruSelection
              onTeacherSelect={handleTeacherSelect}
              showAllTeachers={showAllTeachers}
              setShowAllTeachers={setShowAllTeachers}
              onBack={handleBackToHome}
            />
          </div>

          {/* Item Selection View */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${currentView === 'item-selection'
            ? 'relative z-10 translate-y-0 opacity-100'
            : currentView === 'guru-selection' || currentView === 'home' || currentView === 'lore'
              ? 'absolute top-0 left-0 z-0 translate-y-full opacity-0 pointer-events-none'
              : 'absolute top-0 left-0 z-0 -translate-y-full opacity-0 pointer-events-none'
            }`}>
            <ItemSelection
              onItemSelect={handleItemSelect}
              onBack={() => {
                setCurrentView('guru-selection')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          </div>

          {/* Single Item Result View */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${currentView === 'single-result'
            ? 'relative z-10 translate-y-0 opacity-100'
            : currentView === 'result'
              ? 'absolute top-0 left-0 z-0 -translate-y-full opacity-0 pointer-events-none'
              : 'absolute top-0 left-0 z-0 translate-y-full opacity-0 pointer-events-none'
            }`}>
            {selectedTeacher && selectedItem && (
              <SingleItemResult
                teacher={selectedTeacher}
                item={selectedItem}
                onBack={() => {
                  setCurrentView('item-selection')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                onShowAll={handleShowAllResults}
              />
            )}
          </div>

          {/* Result View */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${currentView === 'result'
            ? 'relative z-10 translate-y-0 opacity-100'
            : 'absolute top-0 left-0 z-0 translate-y-full opacity-0 pointer-events-none'
            }`}>
            {(results || calculating) && (
              <Result
                results={results!}
                calculating={calculating}
                showAllTimelines={showAllTimelines}
                setShowAllTimelines={setShowAllTimelines}
                showLivingCostInput={showAdvancedOptions}
                setShowLivingCostInput={setShowAdvancedOptions}
                livingCosts={livingCosts}
                showAddItem={showAdvancedOptions}
                setShowAddItem={setShowAdvancedOptions}
                customItemName={customItemName}
                setCustomItemName={setCustomItemName}
                customItemPrice={customItemPrice}
                setCustomItemPrice={setCustomItemPrice}
                hiddenTimelines={hiddenTimelines}
                timelineOrder={timelineOrder}
                hideSections={hideSections}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onBackToSelection={handleBackToSelection}
                onLivingCostsChange={handleLivingCostsChange}
                onAddCustomItem={handleAddCustomItem}
                onRemoveCustomItem={handleRemoveCustomItem}
                onToggleTimelineVisibility={toggleTimelineVisibility}
                onShare={handleShare}
                onDragEnd={handleDragEnd}
              />
            )}
          </div>
        </div>
      </main>

      {/* Floating Action Button (Up) - Only show when scrolled */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </div>
  )
}