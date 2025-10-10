import AdminHeader from "./Components/AdminHeader";
import AdminLogsSearchFilter from "./Components/AdminLogsSearchFilter";
import AdminLogsTable from "./Components/AdminLogsTable.jsx";
import FullscreenModalBackdrop from "./Components/FullscreenModalBackdrop.jsx";

import { useEffect, useState } from "react";
import { LogsIcon, X } from "lucide-react"; // default icon

import LogEventType from "../../constants/Admin/LogEventType.js";
import LogPersonas from "../../constants/Admin/LogPersonas.js";

const logs = [
	{
		id: 1,
		timestamp: '2025-12-26 14:32:15 EST',
		persona: LogPersonas.ADMIN,
		eventType: LogEventType.USER_CREATED,
		actor: 'admin@rapha.com',
		route: '/admin/users/create',
		ipAddress: '192.168.1.1'
	},
	{
		id: 2,
		timestamp: '2025-12-26 14:28:42 EST',
		persona: LogPersonas.EMPLOYEE,
		eventType: LogEventType.CONTENT_ACCESSED,
		actor: 'sarah.chen@healthcorp.com',
		route: '/content/view/mental-health',
		ipAddress: '192.168.1.2'
	},
	{
		id: 3,
		timestamp: '2025-12-26 14:25:18 EST',
		persona: LogPersonas.ADMIN,
		eventType: LogEventType.AI_PROMPT_APPROVED,
		actor: 'dr.rodriguez@medical.org',
		route: '/admin/ai/approve',
		ipAddress: '192.168.1.100'
	},
	{
		id: 4,
		timestamp: '2025-12-26 14:22:07 EST',
		persona: LogPersonas.PROVIDER,
		eventType: LogEventType.PATIENT_DATA_ACCESSED,
		actor: 'dr.rodriguez@medical.org',
		route: '/provider/patient/view',
		ipAddress: '172.16.0.23'
	},
	{
		id: 5,
		timestamp: '2025-12-26 14:18:33 EST',
		persona: LogPersonas.ADMIN,
		eventType: LogEventType.COMPLIANCE_EXPORT,
		actor: 'admin@rapha.com',
		route: '/admin/compliance/export',
		ipAddress: '192.168.1.100'
	},
	{
		id: 5,
		timestamp: '2025-12-26 14:18:33 EST',
		persona: LogPersonas.NAVIGATOR,
		eventType: LogEventType.CARE_PLAN_UPDATED,
		actor: 'navigator@healthcorp.com',
		route: '/navigator/care-plan/update',
		ipAddress: '10.0.1.67'
	},
];

const ModalContent = ({ log, onClose }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-auto overflow-y-auto"
      style={{ maxHeight: "95vh" }}
    >
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Audit Log Details
        </h2>
        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          <X />
        </button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Log ID
            </label>
            <span className="inline-flex text-sm font-medium py-0.5">
              LOG-{String(log.id).padStart(3, "0")}
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Timestamp
            </label>
            <span className="inline-flex text-sm font-medium">
              {log.timestamp}
            </span>
          </div>
        </div>

        {/* Status Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Persona
            </label>
            <span className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full border bg-red-100 text-red-700 border-red-200">
              {log.persona?.toUpperCase()}
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Event Type
            </label>
            <span className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full border bg-emerald-100 text-emerald-700 border-emerald-200">
              {log.eventType?.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Request Information */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
            Request Information
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                Actor
              </label>
              <span className="text-gray-900 dark:text-white">{log.actor}</span>
            </div>
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                Route
              </label>
              <code className="font-mono text-xs bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded">
                {log.route}
              </code>
            </div>
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                IP Address
              </label>
              <span className="font-mono text-gray-900 dark:text-white">
                {log.ipAddress}
              </span>
            </div>
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                User Agent
              </label>
              <span className="text-gray-900 dark:text-white text-sm">
                Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
              </span>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
            Event Details
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <pre className="text-sm font-mono text-gray-900 dark:text-white whitespace-pre-wrap">
              {JSON.stringify(
                {
                  targetUser: "john.smith@company.com",
                  role: "EMPLOYEE",
                  employer: "HealthCorp Inc",
                },
                null,
                2
              )}
            </pre>
          </div>
        </div>

        {/* Security Context */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
            Security Context
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                Session ID
              </label>
              <span className="font-mono text-gray-900 dark:text-white">
                sess_a7b2c3d4e5f6g7h8
              </span>
            </div>
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                Request ID
              </label>
              <span className="font-mono text-gray-900 dark:text-white">
                req_b8c3d4e5f6g7h8i9
              </span>
            </div>
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                Auth Method
              </label>
              <span className="text-gray-900 dark:text-white">
                OAuth 2.0 + MFA
              </span>
            </div>
            <div>
              <label className="block text-gray-500 dark:text-gray-400 mb-1">
                Risk Score
              </label>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                Low (0.12)
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex gap-2">
          <button className="cursor-pointer flex-1 bg-purple-600 dark:bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            Export Log
          </button>
          <button
            onClick={() => {
              if (onClose) {
                onClose();
              }
            }}
            className="cursor-pointer flex-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminLogs = () => {

	const [filteredLogs, setFilteredLogs] = useState([logs]);
	const [personaChosen, setPersonaChosen] = useState(LogPersonas.ALL_PERSONAS);
	const [eventTypeChosen, setEventTypeChosen] = useState(LogEventType.ALL_EVENT_TYPES);

	const [logToShow, setLogToShow] = useState(null);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		let logsBackup = [...logs];

		if (personaChosen !== LogPersonas.ALL_PERSONAS) {
			logsBackup = logsBackup.filter(log => log.persona === personaChosen);
		}
		if (eventTypeChosen !== LogEventType.ALL_EVENT_TYPES) {
			logsBackup = logsBackup.filter(log => log.eventType === eventTypeChosen);
		}

		setFilteredLogs(logsBackup);

	}, [personaChosen, eventTypeChosen]);

  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <AdminHeader
        title="Audit Logs"
        icon={<LogsIcon className="h-6 w-6 text-white" />}
        subtitle="Comprehensive system activity tracking and forensic log analysis"
      />
      <AdminLogsSearchFilter
        LogPersonas={LogPersonas}
        LogEventType={LogEventType}
        personaChosen={personaChosen}
        setPersonaChosen={setPersonaChosen}
        eventTypeChosen={eventTypeChosen}
        setEventTypeChosen={setEventTypeChosen}
      />
      <AdminLogsTable
        logs={filteredLogs}
        onLogClick={(log) => {
          setLogToShow(log);
          setShowModal(true);
        }}
      />

      {showModal && (
        <FullscreenModalBackdrop
          showCloseButton={true}
          closeWhenClickedOutside={true}
          opacity={50}
          onClose={() => setShowModal(false)}
        >
          <ModalContent log={logToShow} onClose={() => setShowModal(false)} />
        </FullscreenModalBackdrop>
      )}
    </div>
  );
};

export default AdminLogs;
