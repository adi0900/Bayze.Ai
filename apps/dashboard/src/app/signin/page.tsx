import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Welcome !
        </h1>
        <h2 className="text-xl text-center text-white mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              id="email"
              name="email"
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
          <button className="w-full p-2 rounded bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Sign Up
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          or <span className="text-purple-600">Sign up with</span>
        </div>
        <div className="mt-4">
          <button className="w-full p-2 rounded bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 flex items-center justify-center">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google logo"
              className="mr-2"
            />
            Log In with Google
          </button>
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
