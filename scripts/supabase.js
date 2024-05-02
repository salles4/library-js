const supabaseUrl = "https://oatzrwezibkcabfwxppo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdHpyd2V6aWJrY2FiZnd4cHBvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzYwOTE3MSwiZXhwIjoyMDI5MTg1MTcxfQ.u2HUJZ-hGi8Jk97FWI-hiQ3NpyMMM7V6hHQaL_Gvx1s"

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;