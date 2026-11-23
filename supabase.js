const SUPABASE_URL = "https://ehuvcditacesvnxzfahs.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_yf849Sp9wFP9iEUDtDQR1w_9lfVX8bd";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function testDatabase() {
  const { data, error } = await db
    .from("universities")
    .select("*");

  if (error) {
    console.error("연결 실패:", error);
    return;
  }

  console.log("연결 성공:", data);
}

testDatabase();