import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Welcome !
        </h1>
        <form>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              placeholder="Contact No."
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              placeholder="Email ID"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="w-full p-2 rounded bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-white">
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
