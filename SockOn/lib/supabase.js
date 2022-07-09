import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://omshpqwbzzelicywustl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tc2hwcXdienplbGljeXd1c3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDk3NTgsImV4cCI6MTk3MjkyNTc1OH0.8K-SoFrvUnZpuFlvgPS7asdCveMbCAK3inUl-xLUgUk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});