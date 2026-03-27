import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "./supabase";

type AuthState = {
  /** Current Supabase session (null if not configured or signed out). */
  session: Session | null;
  /** Current user (null if not authenticated). */
  user: User | null;
  /** True if user is signed in anonymously (guest mode). */
  isAnonymous: boolean;
  /** True if user has a real account (Google/Apple/email). */
  isSignedIn: boolean;
  /** True while initial session is loading. */
  isLoading: boolean;
  /** True if Supabase is not configured (no URL/key). */
  isOffline: boolean;
  /** Sign in anonymously (guest mode). */
  signInAnonymously: () => Promise<void>;
  /** Sign out. */
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState>({
  session: null,
  user: null,
  isAnonymous: false,
  isSignedIn: false,
  isLoading: true,
  isOffline: true,
  signInAnonymously: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if Supabase is configured
  const isOffline = !process.env.EXPO_PUBLIC_SUPABASE_URL;

  useEffect(() => {
    if (isOffline) {
      setIsLoading(false);
      return;
    }

    // Get initial session, auto-create anonymous session if none exists
    supabase.auth.getSession().then(async ({ data: { session: s } }) => {
      if (s) {
        setSession(s);
      } else {
        // Duolingo-style: start as anonymous guest automatically
        const { data } = await supabase.auth.signInAnonymously();
        setSession(data.session);
      }
      setIsLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    return () => subscription.unsubscribe();
  }, [isOffline]);

  const signInAnonymously = useCallback(async () => {
    if (isOffline) return;
    await supabase.auth.signInAnonymously();
  }, [isOffline]);

  const signOut = useCallback(async () => {
    if (isOffline) return;
    await supabase.auth.signOut();
  }, [isOffline]);

  const user = session?.user ?? null;
  const isAnonymous = user?.is_anonymous ?? false;
  const isSignedIn = !!user && !isAnonymous;

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isAnonymous,
        isSignedIn,
        isLoading,
        isOffline,
        signInAnonymously,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
