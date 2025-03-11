"use client";

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

async function handleGoogleSignIn() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/signin`, // Redirect to the sign-in page to handle the token
    },
  });
  if (error) {
    console.error("OAuth sign in failed: " + error.message);
  }
}

export default function GoogleSignIn() {
  return (
    <button
      className="w-full p-2 rounded bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 flex items-center justify-center"
      onClick={handleGoogleSignIn}
    >
      <img
        src="https://img.icons8.com/color/16/000000/google-logo.png"
        alt="Google logo"
        className="mr-2"
      />
      Log In with Google
    </button>
  );
}
