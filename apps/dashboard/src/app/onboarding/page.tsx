import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-purple-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8">Register as a Company</h1>
        <form className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium mb-2">Name:</label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Website:</label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Email:
            </label>
            <input type="email" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Address:
            </label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Description:
            </label>
            <textarea className="w-full p-3 border rounded" rows={3}></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Industry:</label>
            <select className="w-full p-3 border rounded">
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Operations:
            </label>
            <select className="w-full p-3 border rounded">
              <option>Local</option>
              <option>National</option>
              <option>International</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              LinkedIn Public URL:
            </label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Size:
            </label>
            <select className="w-full p-3 border rounded">
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201-500</option>
              <option>501-1000</option>
              <option>1001+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Bank Details:
            </label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Digital Signature Certificate:
            </label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">PAN Card:</label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Director Identification Number:
            </label>
            <input type="text" className="w-full p-3 border rounded" />
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
