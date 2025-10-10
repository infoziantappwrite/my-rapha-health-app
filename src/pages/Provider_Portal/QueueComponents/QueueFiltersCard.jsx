import React, { useState } from "react";

const QueueFiltersCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300  dark:border-gray-700 rounded-xl shadow-sm text-gray-900 dark:text-gray-100 flex flex-col gap-6">
        {/* Header */}
        <div className="px-6 pt-6 flex items-center justify-between border-b border-gray-300  dark:border-gray-700 pb-4">
          <h4 className="flex items-center space-x-2 font-semibold text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-funnel text-blue-600"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
            </svg>
            <span>Queue Filters</span>
          </h4>

          {/* QR Check-In Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-qr-code"
            >
              <rect width="5" height="5" x="3" y="3" rx="1"></rect>
              <rect width="5" height="5" x="16" y="3" rx="1"></rect>
              <rect width="5" height="5" x="3" y="16" rx="1"></rect>
              <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
              <path d="M21 21v.01"></path>
              <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
              <path d="M3 12h.01"></path>
              <path d="M12 3h.01"></path>
              <path d="M12 16v.01"></path>
              <path d="M16 12h1"></path>
              <path d="M21 12v.01"></path>
              <path d="M12 21v-1"></path>
            </svg>
            QR Check-In
          </button>
        </div>

        {/* Filters */}
        <div className="px-6 pb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Blood Draw", "Checked In", "Afternoon (11 AM-3 PM)", "Moderate Risk"].map(
            (filter, idx) => (
              <button
                key={idx}
                className="flex items-center justify-between w-full rounded-md border border-gray-300  dark:border-gray-700 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <span>{filter}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down opacity-50"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            )
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-800 border border-gray-300  dark:border-gray-700 rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg relative animate-in">
            {/* Header */}
            <div className="flex flex-col gap-2 text-center sm:text-left mb-4">
              <h2 className="text-lg font-semibold">QR Code Check-In</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Scan employee QR code for instant check-in
              </p>
            </div>

            {/* QR Scanner Box */}
            <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300  dark:border-gray-700 rounded-lg mb-4">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-qr-code mx-auto text-gray-400 mb-4"
                >
                  <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                  <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                  <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                  <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                  <path d="M21 21v.01"></path>
                  <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                  <path d="M3 12h.01"></path>
                  <path d="M12 3h.01"></path>
                  <path d="M12 16v.01"></path>
                  <path d="M16 12h1"></path>
                  <path d="M21 12v.01"></path>
                  <path d="M12 21v-1"></path>
                </svg>
                <p className="text-gray-600 dark:text-gray-300">
                  Position QR code in camera view
                </p>
              </div>
            </div>

            {/* Example Alert */}
            <div className="flex items-center gap-2 border border-gray-300  dark:border-gray-700 rounded-lg px-4 py-3 text-sm mb-4 bg-gray-50 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-check-big text-green-500"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p>✅ QR Code Scanned: Jennifer Martinez checked in at 10:47 AM</p>
            </div>

            {/* Done Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Done
            </button>

            {/* Close (X) Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QueueFiltersCard;
