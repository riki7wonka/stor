// رابط المشروع (ستجده في قسم API تحت عنوان Project URL - انسخه من هناك)
const SB_URL = "https://cehqepbtzxuuyqqrmvyp.supabase.co";

// المفتاح العام (نسخته لك من صورتك الثانية)
const SB_KEY = "sb_publishable_-jDCO6gqqMjodjqjSA0yQw_IGDEddtD"; 

// إنشاء الاتصال
const _supabase = supabase.createClient(SB_URL, SB_KEY);

// جعل القاعدة متاحة في كل مكان باسم db
window.db = _supabase;
window.supabase = _supabase;
console.log("✅ تم الاتصال بنجاح بمشروع stor");