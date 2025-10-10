import { useState } from "react";
import { Activity, CircleCheckBig, TriangleAlert, X } from "lucide-react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const sampleData = [
    { time: "00:00", value: 0 },
    { time: "04:00", value: 0.7 },
    { time: "08:00", value: 1.4 },
    { time: "12:00", value: 2.1 },
    { time: "16:00", value: 2.5 },
    { time: "20:00", value: 2.1 },
    { time: "24:00", value: 1.8 },
];

export default function ErrorMonitoringCard() {
    const [modal, setModal] = useState(null); // "health" or "acknowledge"

    return (
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 flex flex-col gap-6 rounded-xl p-4">
            {/* Header */}
            <div className="flex justify-between items-center flex-wrap gap-2">
                <div>
                    <h4 className="leading-none flex items-center gap-2 text-lg font-semibold">
                        <Activity className="h-5 w-5 text-orange-600" />
                        Error Monitoring & Alerts
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Real-time system health monitoring
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => setModal("health")}
                        className="inline-flex items-center justify-center gap-1.5 px-3 h-8 rounded-md border bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm"
                    >
                        <CircleCheckBig className="h-4 w-4" />
                        Run Health Check
                    </button>
                    <button
                        onClick={() => setModal("acknowledge")}
                        className="inline-flex items-center justify-center gap-1.5 px-3 h-8 rounded-md border bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm"
                    >
                        Acknowledge All Alerts
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sampleData}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                        <XAxis dataKey="time" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "white",
                                border: "1px solid #ccc",
                                color: "black",
                            }}
                            cursor={{ stroke: "gray", strokeDasharray: "3 3" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#8884d8"
                            strokeWidth={2}
                            dot={{ stroke: "#8884d8", fill: "white", strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Alert Rules */}
            <div className="space-y-2">
                <h4 className="font-medium">Alert Rules</h4>
                <div className="text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    5xx errors over 1% for 5 minutes → Critical
                </div>
                <div className="text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    Response time over 2s for 3 minutes → Warning
                </div>
                <div className="text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    Auth failure rate over 5% for 2 minutes → Critical
                </div>
                <div className="text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    Database connection pool over 80% for 5 minutes → Warning
                </div>
            </div>

            {/* Modal */}
            {modal && (
                <>
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => setModal(null)} />

                    {modal === "health" ? (
                        <div
                            role="dialog"
                            aria-describedby="radix-:r2a:"
                            aria-labelledby="radix-:r29:"
                            data-state="open"
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 fixed top-[50%] left-[50%] z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg p-6 shadow-lg"
                        >
                            {/* Header */}
                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                <h2 className="text-lg font-semibold">System Health Check Results</h2>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/30">
                                    <span>Database Connection</span>
                                    <CircleCheckBig className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/30">
                                    <span>Redis Cache</span>
                                    <CircleCheckBig className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg bg-red-50 dark:bg-red-900/30">
                                    <span>External API</span>
                                    <TriangleAlert className="h-5 w-5 text-red-600 dark:text-red-400" />
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/30">
                                    <span>File Storage</span>
                                    <CircleCheckBig className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                            </div>


                            {/* Footer */}
                            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end mt-4">
                                <button
                                    onClick={() => setModal(null)}
                                    className="px-4 py-2 h-9 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div
                            role="dialog"
                            aria-describedby="radix-:r2d:"
                            aria-labelledby="radix-:r2c:"
                            data-state="open"
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 fixed top-[50%] left-[50%] z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg p-6 shadow-lg"
                        >
                            {/* Header */}
                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                <h2 className="text-lg font-semibold">Acknowledge All Open Alerts</h2>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div className="relative w-full rounded-lg border  border-gray-300 dark:border-gray-700 px-4 py-3 text-sm grid grid-cols-[0_1fr] gap-y-0.5 gap-x-3 items-start bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                    <TriangleAlert className="h-4 w-4 mt-0.5 text-current" />
                                    <div className="text-muted-foreground ml-2 col-start-2 grid justify-items-start gap-1 text-sm">
                                        This will acknowledge all 4 open alerts. Make sure issues have been resolved.
                                    </div>
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium">Acknowledgment Note</label>
                                    <textarea
                                        className="resize-none border  border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 w-full px-3 py-2 text-base text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-ring outline-none"
                                        placeholder="Describe resolution actions taken..."
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end mt-4">
                                <button
                                    onClick={() => setModal(null)}
                                    className="px-4 py-2 h-9 rounded-md border  border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 h-9 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    Acknowledge All
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

        </div>
    );
}
