import { Wrench, Home } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-10 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 max-w-lg text-center border border-gray-300 dark:border-gray-700 transition-colors duration-300">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded-full transition-colors duration-300">
            <Wrench className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
          Page Under Development
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
          We’re working hard to bring you this feature soon. Please check back
          later or explore other sections of the platform.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Go Back
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 dark:bg-purple-700 text-white font-medium hover:bg-purple-700 dark:hover:bg-purple-800 transition-colors duration-300"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
