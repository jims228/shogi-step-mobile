import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ── AsyncStorage adapter for Supabase ──
// Uses AsyncStorage which is already installed and doesn't require a dev build rebuild.
// For production, consider migrating to expo-secure-store after rebuilding the dev client.
const StorageAdapter = {
  getItem: async (key: string) => AsyncStorage.getItem(key),
  setItem: async (key: string, value: string) => AsyncStorage.setItem(key, value),
  removeItem: async (key: string) => AsyncStorage.removeItem(key),
};

// ── Supabase client ──
// Set these in your environment or replace with your project values.
// Free tier: 50k MAU, 500MB DB, 1GB storage.
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: StorageAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
