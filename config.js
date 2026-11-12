
/* =====================================
   LAPTOPX - SUPABASE CONFIGURATION
===================================== */

// Supabase Project URL
const SUPABASE_URL = "https://rlxpawxctfkpfhmfajeh.supabase.co";

// Supabase Publishable Key (or legacy anon key)
const SUPABASE_KEY = "sb_publishable_ocJFpJbGDcO4F6k9alJ8aQ_ndPxO4u3";

// Create shared Supabase client
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
