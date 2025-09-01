import { Wrench, Home } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg text-center border border-gray-200">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-4 rounded-full">
            <Wrench className="w-10 h-10 text-purple-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Page Under Development
        </h1>
        <p className="text-gray-600 mb-6">
          We’re working hard to bring you this feature soon. Please check back
          later or explore other sections of the platform.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-100 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
