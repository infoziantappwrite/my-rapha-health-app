import React from 'react';
import { LineChart, CalendarDays } from 'lucide-react';

const ResultsTimeline = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-full mx-auto font-sans dark:bg-gray-800">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Results Timeline</h2>
        <p className="text-sm text-gray-500">Track your health screening results over time</p>
      </div>

      {/* Timeline Items */}
      <div className="space-y-6">
        {/* Complete Health Screening */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-2 rounded-full bg-blue-100">
            <LineChart className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">Complete Health Screening</h3>
            <p className="text-sm text-gray-500">January 15, 2025</p>
            <p className="text-sm text-gray-600 mt-1">Cancer: Clear, Heart: Moderate risk, Diabetes: Normal</p>
          </div>
        </div>

        {/* Next Screening Due */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-2 rounded-full bg-gray-200">
            <CalendarDays className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">Next Screening Due</h3>
            <p className="text-sm text-gray-500">January 19, 2026</p>
            <p className="text-sm text-gray-600 mt-1">Annual comprehensive screening</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTimeline;