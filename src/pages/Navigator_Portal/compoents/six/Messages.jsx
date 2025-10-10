import React from 'react';

const Messages = () => {
  const metrics = [
    {
      title: 'Unread Messages',
      value: 12,
      color: 'bg-purple-500',
      buttonLabel: 'View All',
    },
    {
      title: 'Draft Messages',
      value: 3,
      color: 'bg-purple-400',
      buttonLabel: 'Continue',
    },
    {
      title: 'Escalations',
      value: 2,
      color: 'bg-red-500',
      buttonLabel: 'Review',
    },
    {
      title: 'Response SLA (30d)',
      value: '92%',
      color: 'bg-green-500',
      buttonLabel: 'Explain',
    },
  ];

  const getProgressWidth = (value) => {
    if (typeof value === 'number') {
      return `${value * 5}%`; // Scale as in your UI (20 = 100%)
    }
    return value;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 relative transition-colors duration-200"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {metric.title}
            </span>
            <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
              Explain
            </button>
          </div>

          {/* Value */}
          <div className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {metric.value}
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
            <div
              className={`${metric.color} h-full`}
              style={{ width: getProgressWidth(metric.value) }}
            ></div>
          </div>

          {/* Action button */}
          <button className="text-xs px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors">
            {metric.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Messages;
