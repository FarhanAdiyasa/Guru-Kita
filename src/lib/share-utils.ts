import { TeacherProfile } from '@/types/calculator'
import { CONFIG } from '@/data/config'

const { teachers } = CONFIG

interface ShareState {
    teacherId: string | null
    livingCosts: number
    customItems: { name: string; price: number }[]
}

/**
 * Serializes the current app state into URL query parameters.
 */
export const serializeShareState = (
    teacher: TeacherProfile | null,
    livingCosts: number,
    // We can add custom items support later if needed, focusing on core for now
): string => {
    if (!teacher) return ''

    const params = new URLSearchParams()
    params.set('t', teacher.id)

    if (livingCosts > 0) {
        params.set('lc', livingCosts.toString())
    }

    // Clean URL generation
    return `?${params.toString()}`
}

/**
 * Deserializes URL query parameters back into app state.
 */
export const deserializeShareState = (): ShareState | null => {
    if (typeof window === 'undefined') return null

    const params = new URLSearchParams(window.location.search)
    const teacherId = params.get('t')
    const livingCostsStr = params.get('lc')

    if (!teacherId) return null

    // Validate teacher exists
    const teacherExists = teachers.some(t => t.id === teacherId)
    if (!teacherExists) return null

    return {
        teacherId,
        livingCosts: livingCostsStr ? parseInt(livingCostsStr, 10) : 0,
        customItems: [] // Todo implementation
    }
}

/**
 * Copies the current URL with state to clipboard
 */
export const copyShareableLink = async (): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(window.location.href)
        return true
    } catch (err) {
        console.error('Failed to copy link', err)
        return false
    }
}
