import React, { useState } from "react";
import {
  Key,
  Plus,
  RotateCw,
  Eye,
  X,
  
} from "lucide-react";
import ApiKeyActionButton from "./ApiKeyActionButton";
const apiKeys = [
  {
    id: "key_1a2b3c4d",
    label: "Provider Integration API",
    scope: "Provider",
    created: "2024-12-01",
    expires: "2025-12-01",
    status: "Active",
    
  },
  {
    id: "key_5e6f7g8h",
    label: "Labs Data Connector",
    scope: "Labs",
    created: "2024-11-15",
    expires: "2025-11-15",
    status: "Revoked",
    
  },
  {
    id: "key_9i0j1k2l",
    label: "Reporting Dashboard",
    scope: "Reporting",
    created: "2024-10-30",
    expires: "2025-04-30",
    status: "Active",
  }
];

const statusBadgeColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Revoked":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

export default function ApiKeyManagementCard() {
  const [modalKey, setModalKey] = useState(null);

  const handleCopy = () => {
    if (modalKey) {
      navigator.clipboard.writeText(modalKey.secret);
      alert("API Key copied!");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 h-fit">
      {/* Card Header */}
     <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 sm:px-6 pt-4 sm:pt-6 [.border-b]:pb-6">
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
    <div>
      <h4 className="leading-none flex items-center gap-2 text-base sm:text-lg">
        <Key className="h-5 w-5 text-green-600" />
        API Key Management
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Manage system API keys and access tokens
      </p>
    </div>
    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
      <ApiKeyActionButton />
    </div>
  </div>
</div>


      {/* Card Content */}
      <div className="px-6 pb-6">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm table-auto">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 h-14">
                <th className="text-left px-2 font-medium">KeyId</th>
                <th className="text-left px-2 font-medium">Label</th>
                <th className="text-left px-2 font-medium">Scope</th>
                <th className="text-left px-2 font-medium w-32">Created</th>
                <th className="text-left px-2 font-medium w-32">Expires</th>
                <th className="text-left px-2 font-medium">Status</th>
                <th className="text-left px-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((key) => (
                <tr
                  key={key.id}
                  className="border-b border-gray-200 dark:border-gray-700 h-14 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-2 font-mono text-xs truncate">{key.id}</td>
                  <td className="p-2 font-medium truncate">{key.label}</td>
                  <td className="p-2">{key.scope}</td>
                  <td className="p-2 w-32 whitespace-nowrap">{key.created}</td>
                  <td className="p-2 w-32 whitespace-nowrap">{key.expires}</td>
                  <td className="p-2">
                    <span
                      className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit shrink-0 ${statusBadgeColor(
                        key.status
                      )}`}
                    >
                      {key.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-1">
                      {/* Show Secret Button */}
                      <button
                        className="inline-flex items-center justify-center h-8 rounded-md gap-1.5 px-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setModalKey(key)}
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button className="inline-flex items-center justify-center h-8 rounded-md gap-1.5 px-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Revoke
                      </button>
                      <button className="inline-flex items-center justify-center h-8 rounded-md gap-1.5 px-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Expire
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 w-full max-w-md relative">
            <h2 className="text-lg font-semibold mb-4">API Key Secret</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Key ID</label>
                <div className="font-mono text-sm">{modalKey.id}</div>
              </div>
              <div>
                <label className="block text-sm font-medium">Full Secret</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="font-mono border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1 flex-1"
                    readOnly
                    value={modalKey.secret}
                  />
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded-md"
                    onClick={handleCopy}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900"
              onClick={() => setModalKey(null)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
