"use client";

import { createContext, useContext } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { ReactNode } from "react";

const SupabaseContext = createContext<SupabaseClient | null>(null);

let supabase: SupabaseClient | null = null;

const getSupabaseClient = () => {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY env variables are required!"
      );
    }

    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
};

export const SupabaseClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const supabaseClient = getSupabaseClient();

  return (
    <SupabaseContext.Provider value={supabaseClient}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabaseClient = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error(
      "useSupabaseClient must be used within a SupabaseClientProvider"
    );
  }
  return context;
};
