import React from "react";
import { LucideZap, LucideExternalLink } from "lucide-react";

const alertsData = [
  { timestamp: "2025-01-15 14:23:12", type: "5xx spike", severity: "Critical", status: "Open", actor: "API Gateway" },
  { timestamp: "2025-01-15 13:45:33", type: "Latency", severity: "Warning", status: "Ack'd", actor: "Load Balancer" },
  { timestamp: "2025-01-15 12:17:45", type: "Auth failure", severity: "Critical", status: "Ack'd", actor: "Identity Service" },
  { timestamp: "2025-01-15 11:33:21", type: "Database connection", severity: "Warning", status: "Open", actor: "Primary DB" },
  { timestamp: "2025-01-15 10:45:12", type: "Memory usage", severity: "Warning", status: "Ack'd", actor: "App Server 03" },
  { timestamp: "2025-01-15 09:22:44", type: "SSL certificate", severity: "Info", status: "Ack'd", actor: "Certificate Manager" },
  { timestamp: "2025-01-15 08:11:33", type: "Backup failure", severity: "Critical", status: "Open", actor: "Backup Service" },
  { timestamp: "2025-01-15 07:55:11", type: "Disk space", severity: "Warning", status: "Ack'd", actor: "Storage Node 02" },
  { timestamp: "2025-01-15 06:33:22", type: "Network latency", severity: "Warning", status: "Open", actor: "CDN Edge" },
  { timestamp: "2025-01-15 05:44:55", type: "Cache miss rate", severity: "Info", status: "Ack'd", actor: "Redis Cluster" },
  { timestamp: "2025-01-15 04:15:10", type: "Service timeout", severity: "Critical", status: "Open", actor: "Payment Gateway" }
];


const severityClasses = {
    Critical: "bg-red-600 text-white dark:bg-red-500 dark:text-white",
    Warning: "bg-yellow-500 text-black dark:bg-yellow-400 dark:text-black",
    Info: "bg-blue-500 text-white dark:bg-blue-400 dark:text-white",
};

const statusClasses = {
    Open: "bg-red-600 text-white dark:bg-red-500 dark:text-white",
    "Ack'd": "bg-green-600 text-white dark:bg-green-500 dark:text-white",
};

export default function RecentAlertsCard() {
    return (
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-4 rounded-lg border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold">
                        <LucideZap className="h-5 w-5 text-red-600" /> Recent Alerts & Quick Links
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Latest system alerts and navigation shortcuts
                    </p>
                </div>
                <button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <LucideExternalLink className="h-4 w-4" /> Open Audit Logs
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700 text-left">
                            <th className="px-3 py-2 border-b border-gray-200 dark:border-gray-600 font-medium">Timestamp</th>
                            <th className="px-3 py-2 border-b border-gray-200 dark:border-gray-600 font-medium">Type</th>
                            <th className="px-3 py-2 border-b border-gray-200 dark:border-gray-600 font-medium">Severity</th>
                            <th className="px-3 py-2 border-b border-gray-200 dark:border-gray-600 font-medium">Status</th>
                            <th className="px-3 py-2 border-b border-gray-200 dark:border-gray-600 font-medium">Actor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alertsData.map((alert, idx) => (
                            <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <td className="px-3 py-2 font-mono text-xs truncate">{alert.timestamp}</td>
                                <td className="px-3 py-2 truncate">{alert.type}</td>
                                <td className="px-2 py-1">
                                    <span className={`inline-flex justify-center w-full rounded-md text-xs font-medium ${severityClasses[alert.severity]}`}>
                                        {alert.severity}
                                    </span>
                                </td>
                                <td className="px-2 py-1">
                                    <span className={`inline-flex justify-center w-full rounded-md text-xs font-medium ${statusClasses[alert.status]}`}>
                                        {alert.status}
                                    </span>
                                </td>

                                <td className="px-3 py-2 truncate">{alert.actor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
