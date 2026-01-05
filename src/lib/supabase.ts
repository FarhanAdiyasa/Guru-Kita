import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables exist
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
        'Supabase environment variables are not set. Some features may not work correctly.',
        { supabaseUrl: !!supabaseUrl, supabaseAnonKey: !!supabaseAnonKey }
    )
}

// Create client with fallback to prevent crashes
export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Helper to check if Supabase is available
export const isSupabaseAvailable = (): boolean => supabase !== null