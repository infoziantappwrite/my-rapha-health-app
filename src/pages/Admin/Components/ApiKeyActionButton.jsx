// ApiKeyActionButton.jsx
import React, { useState } from "react";
import { Plus, RotateCw, X } from "lucide-react";

export default function ApiKeyActionButton() {
    const [modal, setModal] = useState(null); // "create", "rotate", or null

    return (
        <div className="flex gap-2">
            {/* Create Key Button */}
            <button
                className="inline-flex items-center justify-center text-sm font-medium h-8 rounded-md gap-1.5 px-3 bg-gray-100 dark:bg-gray-700 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setModal("create")}
            >
                <Plus className="h-4 w-4 mr-1" />
                Create Key
            </button>

            {/* Rotate Key Button */}
            <button
                className="inline-flex items-center justify-center text-sm font-medium h-8 rounded-md gap-1.5 px-3 bg-gray-100 dark:bg-gray-700 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setModal("rotate")}
            >
                <RotateCw className="h-4 w-4 mr-1" />
                Rotate Key
            </button>

            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 w-full max-w-lg relative">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">
                                {modal === "create" ? "Create New API Key" : "Rotate API Key"}
                            </h2>
                            <button
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                                onClick={() => setModal(null)}
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="space-y-4">
                            {modal === "create" ? (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Key Label
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-200 dark:border-gray-700  rounded-md px-3 py-1 text-sm"
                                            placeholder="e.g., Mobile App Integration"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                            Scope
                                        </label>
                                        <select
                                            className="w-full rounded-md px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                        >
                                            <option>Provider</option>
                                            <option>Labs</option>
                                            <option>Reporting</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full border border-gray-200 dark:border-gray-700  rounded-md px-3 py-1 text-sm"
                                        />
                                    </div>
                                </>
                            ) : (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Are you sure you want to rotate the API key? This will
                                    invalidate the old key.
                                </p>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex gap-3 pt-4">
                            <button
                                className="flex-1 bg-purple-600 text-white rounded-md h-9 px-4 hover:bg-purple-700"
                                onClick={() =>
                                    alert(
                                        modal === "create"
                                            ? "API Key Created!"
                                            : "API Key Rotated!"
                                    )
                                }
                            >
                                {modal === "create" ? "Create Key" : "Rotate Key"}
                            </button>
                            <button
                                className="flex-1 border border-gray-200 dark:border-gray-700  bg-background dark:bg-input/30 text-foreground rounded-md h-9 px-4 hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setModal(null)}
                            >
                                Cancel
                            </button>
                        </div>

                        <div className="text-xs text-gray-500 mt-4">
                            Audit log entry created.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
