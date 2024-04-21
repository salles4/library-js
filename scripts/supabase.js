const supabaseUrl = "https://oatzrwezibkcabfwxppo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdHpyd2V6aWJrY2FiZnd4cHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MDkxNzEsImV4cCI6MjAyOTE4NTE3MX0.H0917Fbh0rYTBrfNmwgy6aJNc0nCS6t3wWCeEKcNQ4k"

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;