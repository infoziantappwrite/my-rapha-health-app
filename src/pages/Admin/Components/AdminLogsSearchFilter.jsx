import { Search, Calendar, DownloadCloud, FileText } from "lucide-react";

export default function AdminLogsSearchFilter({
  LogPersonas,
  LogEventType,
  personaChosen,
  setPersonaChosen,
  eventTypeChosen,
  setEventTypeChosen,
}) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {/* Search */}
        <div className="flex-1 min-w-[200px] max-w-[540px]">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-700 w-full">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            <input
              aria-label="Search logs"
              className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-100 w-full"
              placeholder="Search logs..."
              data-devlink-id="admin-logs-search"
            />
          </div>
        </div>

        {/* Persona */}
        <div className="min-w-[160px]">
          <label className="sr-only">Persona</label>
          <select
            value={personaChosen}
            className="w-full text-sm px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-100 shadow-sm dark:shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
            onChange={(e) => setPersonaChosen(e.target.value)}
            data-devlink-id="admin-logs-filter-persona"
          >
            {Object.keys(LogPersonas).map((p) => (
              <option key={p} className="text-sm">
                {LogPersonas[p]}
              </option>
            ))}
          </select>
        </div>

        {/* Event Type */}
        <div className="min-w-[160px]">
          <label className="sr-only">Event Type</label>
          <select
            value={eventTypeChosen}
            className="w-full text-sm px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-100 shadow-sm dark:shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
            onChange={(e) => setEventTypeChosen(e.target.value)}
            data-devlink-id="admin-logs-filter-event-type"
          >
            {Object.keys(LogEventType).map((e) => (
              <option key={e} className="text-sm">
                {LogEventType[e]}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          <button data-devlink-id="admin-logs-date-range-picker" className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-100 font-semibold">
            <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-200 stroke-3" />
            <span className="font-bold">Date Range</span>
          </button>

          <button
            title="Export CSV"
            data-devlink-id="admin-logs-export-csv"
            className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-100 font-semibold"
          >
            <DownloadCloud className="w-4 h-4 text-gray-600 dark:text-gray-200 stroke-3" />
            <span className="hidden sm:inline font-bold">CSV</span>
          </button>

          <button
            title="Export JSON"
            data-devlink-id="admin-logs-export-json"
            className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-100 font-semibold"
          >
            <FileText className="w-4 h-4 text-gray-600 dark:text-gray-200 stroke-3" />
            <span className="hidden sm:inline font-bold">JSON</span>
          </button>
        </div>
      </div>
    </div>
  );
}
