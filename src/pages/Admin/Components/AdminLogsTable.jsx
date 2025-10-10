import { Eye } from 'lucide-react'
import LogPersonas from '../../../constants/Admin/LogPersonas'
import LogEventType from '../../../constants/Admin/LogEventType'

const colorMap = {
  // Persona colors
  [LogPersonas.ADMIN]: 'bg-red-100 text-red-700 border-red-200',
  [LogPersonas.EMPLOYEE]: 'bg-blue-100 text-blue-700 border-blue-200',
  [LogPersonas.PROVIDER]: 'bg-purple-100 text-purple-700 border-purple-200',
  [LogPersonas.NAVIGATOR]: 'bg-green-100 text-green-700 border-green-200',

  // Event type colors
  [LogEventType.USER_CREATED]: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  [LogEventType.CONTENT_ACCESSED]: 'bg-blue-100 text-blue-700 border-blue-200',
  [LogEventType.AI_PROMPT_APPROVED]: 'bg-purple-100 text-purple-700 border-purple-200',
  [LogEventType.PATIENT_DATA_ACCESSED]: 'bg-orange-100 text-orange-700 border-orange-200',
  [LogEventType.COMPLIANCE_EXPORT]: 'bg-red-100 text-red-700 border-red-200',
  [LogEventType.CARE_PLAN_UPDATED]: 'bg-teal-100 text-teal-700 border-teal-200',
}

export default function AdminLogsTable({ logs = [], onLogClick }) {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden
    ">
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-purple-600 to-purple-700 
                    dark:from-purple-700 dark:to-purple-800 border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-white">System Audit Trail</h2>
        <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
          {logs.length} records
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto ">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="text-left text-xs font-medium text-gray-900 dark:text-gray-400 tracking-wider py-3 px-4">
                Timestamp
              </th>
              <th className="text-left text-xs font-medium text-gray-900 dark:text-gray-400 tracking-wider py-3 px-4">
                Persona
              </th>
              <th className="text-left text-xs font-medium text-gray-900 dark:text-gray-400 tracking-wider py-3 px-4">
                Event Type
              </th>
              <th className="text-left text-xs font-medium text-gray-900 dark:text-gray-400 tracking-wider py-3 px-4">
                Actor
              </th>
              <th className="text-left text-xs font-medium text-gray-900 dark:text-gray-400 tracking-wider py-3 px-4">
                Route
              </th>
              <th className="text-left text-xs font-medium text-gray-900 dark:text-gray-400 tracking-wider py-3 px-4">
                IP Address
              </th>
              <th className="text-left text-xs font-medium text-gray-900 dark:text-gray-400 tracking-wider py-3 px-4">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {logs.map((log, index) => (
              <tr
                data-devlink-id={`admin-logs-view-log-${log.id}`}
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                onClick={() => onLogClick && onLogClick(log)}
              >
                <td className="text-sm text-gray-600 dark:text-gray-300 py-4 px-4 whitespace-nowrap">
                  {log.timestamp}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className={`inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full border ${colorMap[log.persona]}`}>
                    {log.persona?.toUpperCase()}
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className={`inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full border ${colorMap[log.eventType]}`}>
                    {log.eventType?.toUpperCase()}
                  </span>
                </td>
                <td className="text-sm text-gray-600 dark:text-gray-300 py-4 px-4 whitespace-nowrap">
                  {log.actor}
                </td>
                <td className="text-sm text-gray-600 dark:text-gray-300 py-4 px-4">
                  <code className="font-mono bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded text-xs">
                    {log.route}
                  </code>
                </td>
                <td className="text-sm text-gray-600 dark:text-gray-300 py-4 px-4 whitespace-nowrap font-mono">
                  {log.ipAddress}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <button
                    title="View Details"
                    className="p-1 cursor-pointer text-gray-600 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}