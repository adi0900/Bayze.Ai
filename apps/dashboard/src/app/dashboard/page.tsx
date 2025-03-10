import React from "react";

function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-5 flex flex-col justify-between">
        <div>
          <div className="mb-5">
            <img src="/bayez-black.svg" alt="Logo" className="w-12" />
          </div>
          <nav>
            <ul className="flex flex-col gap-4 list-none p-0 mt-16">
              <li className="mb-2">
                <a
                  href="/profile"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition gap-4"
                >
                  <img src="/home.svg" alt="home" className="h-8 w-8" />
                  <span>Profile</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/statistics"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition gap-4"
                >
                  <img src="/Barchart.svg" alt="home" className="h-8 w-8" />
                  <span>Statistics</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/add-jobs"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition gap-4"
                >
                  <img src="/Calendar.svg" alt="add-job" className="w-8 h-8" />
                  <span>Add Jobs</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/active-jobs"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition gap-4"
                >
                  <img src="/Form.svg" alt="add-job" className="w-8 h-8" />
                  <span>Active Jobs</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/job-candidates"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition gap-4"
                >
                  <img src="/Star.svg" alt="add-job" className="w-8 h-8" />
                  <span>Job Candidate</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/hired"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition gap-4"
                >
                  <img src="/Calendar.svg" alt="add-job" className="w-8 h-8" />
                  <span>Hired</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <img
            src="/path/to/company-logo.png"
            alt="Company Logo"
            className="w-12 mr-2"
          />
          <div>
            <p>Company Name</p>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded mt-2 hover:bg-indigo-700 transition">
              Verifying
            </button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-5">
        <header className="flex justify-between items-center mb-5">
          <nav className="flex space-x-4">
            <a
              href="/startup"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Startup
            </a>
            <a
              href="/trademarks"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Trademarks
            </a>
            <a
              href="/consultation"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Consultation
            </a>
            <a
              href="/settings"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Settings
            </a>
          </nav>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="search..."
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <img
              src="/path/to/user-avatar.png"
              alt="User Avatar"
              className="w-8 ml-2 rounded-full"
            />
          </div>
        </header>
        <main className="flex justify-center items-center h-full">
          <div className="text-center">
            <div className="animate-spin h-64 w-64 rounded-full border-t-4 border-indigo-600"></div>
            <h1 className="text-4xl text-indigo-600 mt-5">Verifying</h1>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
