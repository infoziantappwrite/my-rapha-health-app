import React, { useState } from "react";
import ActionDropdown from "./ActionDropdown";
import RollbackPopup from "./RollbackPopup";
import HistoryPopup from "./HistoryPopup";
import SecurityTestPopup from "./SecurityTestPopup";

const aiPromptData = [
    {
        id: "AI-001",
        persona: "EMPLOYEE",
        version: "v3.2",
        status: "Approved",
        linkedContent: "CNT-001",
        history: ["v3.2", "v3.1", "v3.0"],
        lastModified: "2025-12-25",
        author: "AI Team",
    },
    {
        id: "AI-002",
        persona: "NAVIGATOR",
        version: "v2.7",
        status: "Review",
        linkedContent: "CNT-002",
        history: ["v2.7", "v2.6", "v2.5"],
        lastModified: "2025-12-24",
        author: "Dr. Chen",
    },
    {
        id: "AI-003",
        persona: "PROVIDER",
        version: "v1.9",
        status: "Published",
        linkedContent: "CNT-003",
        history: ["v1.9", "v1.8", "v1.7"],
        lastModified: "2025-12-26",
        author: "AI Team",
    },
    {
        id: "AI-004",
        persona: "EMPLOYEE",
        version: "v4.1",
        status: "Draft",
        linkedContent: "CNT-004",
        history: ["v4.1", "v4.0", "v3.9"],
        lastModified: "2025-12-23",
        author: "Lisa Anderson",
    },
    {
        id: "AI-005",
        persona: "NAVIGATOR",
        version: "v2.3",
        status: "Revoked",
        linkedContent: "CNT-005",
        history: ["v2.3", "v2.2", "v2.1"],
        lastModified: "2025-12-22",
        author: "Dr. Taylor",
    },
];

const statusColors = {
    Approved: "bg-green-50 text-green-700 border-green-200",
    Review: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Published: "bg-blue-50 text-blue-700 border-blue-200",
    Draft: "bg-gray-100 text-gray-600 border-gray-300",
    Revoked: "bg-red-50 text-red-700 border-red-200",
};

export default function AIPromptDashboardTable() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [showRollbackPopup, setShowRollbackPopup] = useState(false);
    const [showHistoryPopup, setShowHistoryPopup] = useState(false);
    const [showRedTeamPopup, setShowRedTeamPopup] = useState(false);


    const handleRollbackConfirm = () => {
        setShowRollbackPopup(false);
        setSelectedRow(null);
    };

    const handleRollbackClose = () => {
        setShowRollbackPopup(false);
        setSelectedRow(null);
    };

    const handleHistoryClose = () => {
        setShowHistoryPopup(false);
        setSelectedRow(null);
    };

    return (
        <div className="my-6">
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md overflow-hidden flex flex-col">
                <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-xl">
                    <h4 className="text-lg font-semibold">AI Prompt Governance Dashboard</h4>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm table-auto border-collapse border-y border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="border-b border-gray-300 dark:border-gray-700">
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Prompt ID</th>
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Persona</th>
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Version</th>
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Status</th>
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Linked Content</th>
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Version History</th>
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Last Modified</th>
                                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Author</th>
                                <th className="px-2 py-4 text-left w-12"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {aiPromptData.map((row) => (
                                <tr
                                    key={row.id}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b border-gray-300 dark:border-gray-700"
                                >
                                    <td className="px-2 py-2 font-mono">{row.id}</td>
                                    <td className="px-2 py-2 font-medium truncate">{row.persona}</td>
                                    <td className="px-2 py-2 font-mono">{row.version}</td>
                                    <td className="px-2 py-2">
                                        <span
                                            className={`inline-flex items-center gap-1 border rounded-md px-2 py-0.5 text-xs border-gray-300 dark:border-gray-700 ${statusColors[row.status]}`}
                                        >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-2 py-2 font-mono truncate">{row.linkedContent}</td>
                                    <td className="px-2 py-2">
                                        <div className="flex gap-1 flex-wrap">
                                            {row.history.slice(0, 2).map((v, idx) => (
                                                <button
                                                    key={idx}
                                                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                                                >
                                                    {v}
                                                </button>
                                            ))}
                                            {row.history.length > 2 && (
                                                <button className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                                                    +{row.history.length - 2}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-sm">{row.lastModified}</td>
                                    <td className="px-2 py-2 text-sm truncate">{row.author}</td>
                                    <td className="px-2 py-2">
                                        <ActionDropdown
                                            onRollback={() => {
                                                setSelectedRow(row);
                                                setShowRollbackPopup(true);
                                            }}
                                            onViewHistory={() => {
                                                setSelectedRow(row);
                                                setShowHistoryPopup(true);
                                            }}
                                            enableRedTeam={true}
                                            onRunRedTeam={() => {
                                                setSelectedRow(row);
                                                setShowRedTeamPopup(true);
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showRollbackPopup && selectedRow && (
                <RollbackPopup
                    row={selectedRow}
                    onClose={handleRollbackClose}
                    onConfirm={handleRollbackConfirm}
                />
            )}

            {showHistoryPopup && selectedRow && (
                <HistoryPopup
                    row={selectedRow}
                    onClose={handleHistoryClose}
                />
            )}
            {showRedTeamPopup && selectedRow && (
                <SecurityTestPopup
                    open={showRedTeamPopup}
                    onClose={() => setShowRedTeamPopup(false)}
                    onRun={() => alert(`Running Red Team test for ${selectedRow.id}...`)}
                />
            )}

        </div>
    );
}
