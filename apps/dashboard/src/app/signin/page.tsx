"use client";

import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@bayez/supabaseClient"; // Correct the import path
import GoogleSignIn from "./GoogleSignIn"; // Import the GoogleSignIn component

async function handleSignin(supabase: any, email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return error;
}

function Page() {
  const supabase = useSupabaseClient(); // Use the Supabase client hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      if (accessToken) {
        // Store the access token and redirect to the dashboard
        localStorage.setItem("access_token", accessToken);
        window.location.href = "/dashboard";
      }
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const error = await handleSignin(supabase, email, password);
    if (error) {
      console.error("Sign in failed: " + error.message);
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0B0A]">
      <div className="bg-[#1A1A1A66] bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Welcome !
        </h1>
        <h2 className="text-xl text-center text-white mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="absolute right-2 top-9 text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 00-7 7 7 7 0 0014 0 7 7 0 00-7-7zm0 12a5 5 0 100-10 5 5 0 000 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <button
            className="w-full p-2 rounded bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="submit"
          >
            Continue
          </button>
        </form>
        <div className="mt-6">
          <button className="mx-auto flex justify-center items-center w-full p-0.5 rounded bg-gradient-to-b from-[#666666] to-[#CCCCCC] border border-[linear-gradient('to-bottom', #666666, #CCCCCC )] text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            <div className="flex justify-center items-center bg-gradient-to-b from-[#360342] to-[#CF18F8] h-8 w-full rounded leading-none">
              <p>Sign In</p>
            </div>
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          or <span className="text-purple-600">Sign In with</span>
        </div>
        {/* Use the GoogleSignIn component */}
        <div className="mt-4">
          <GoogleSignIn />
        </div>
        <div className="mt-4 text-center text-white">
          Already a Member?{" "}
          <a href="#" className="text-purple-600">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
