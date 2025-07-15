import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center gap-y-5 flex-col min-h-screen bg-gray-50">
      <svg
        className="w-16 h-16 text-blue-600 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      <span className="text-indigo-500 font-medium text-3xl">Loading...</span>
    </div>
  );
}

export default Loader;
