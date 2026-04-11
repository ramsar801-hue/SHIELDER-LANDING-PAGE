import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zxzxvuwqabutjfyrevjh.supabase.co';
const supabaseAnonKey = 'sb_publishable_Qve2FHKrKi789h3ElBj5_g_osAUkH2M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
