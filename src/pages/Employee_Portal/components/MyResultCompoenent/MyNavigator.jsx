import React from 'react';
import { MessageSquare, User, Calendar } from 'lucide-react';

const MyNavigator = () => {
  return (
    <div className="max-w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Navigator Notes & Communications
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track all interactions and notes from your health navigator
        </p>
      </div>

      {/* Notes */}
      <div className="space-y-6">
        {/* Note 1 */}
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <span className="font-semibold text-gray-800 dark:text-gray-100">Dr. Sarah Chen</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>January 19, 2025</span>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-200">
            Heart health results reviewed. Recommend starting Mediterranean diet and scheduling cardiology consultation within 2 weeks.
          </p>
        </div>

        {/* Note 2 */}
        <div className="border-l-4 border-green-500 pl-4 py-2">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <span className="font-semibold text-gray-800 dark:text-gray-100">System Update</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>January 18, 2025</span>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-200">
            Cancer and diabetes screening results are reassuring. Continue current preventive measures.
          </p>
        </div>
      </div>

    </div>
  );
};

export default MyNavigator;
