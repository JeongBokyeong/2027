const SUPABASE_URL = "https://ehuvcditacesvnxzfahs.supabase.co";
const SUPABASE_KEY = "sb_publishable_yf849Sp9wFP9iEUDtDQR1w_9lfVX8bd";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
window.db = db;