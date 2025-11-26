import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rlvbrbctgibldouucfxx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdmJyYmN0Z2libGRvdXVjZnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODE3NDMsImV4cCI6MjA3OTc1Nzc0M30.H60T2KNqMW7i9WRXsMagsJFw7HYq6yHjnrgXo5OioRA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
