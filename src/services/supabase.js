
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nejivtqrjokcpcyslxxa.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
if (!supabaseKey) {
  throw new Error('Supabase key is not defined. Please set your supabase key in your environment variables.')
}
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase