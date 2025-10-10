import { useState } from "react";
import { Eye, Download, MoreVertical, Upload } from "lucide-react";

export default function DocumentManager() {
  const [activeTab, setActiveTab] = useState("All Documents");

  const tabs = [
    { name: "All Documents", count: 5 },
    { name: "Test Results", count: 1 },
    { name: "Consents", count: 1 },
    { name: "Education", count: 1 },
    { name: "External Labs", count: 1 },
  ];

  const documents = [
    {
      name: "Health Screening Results",
      size: "2.4 MB",
      type: "PDF",
      category: "Test Results",
      status: "new",
      date: "2025-01-19",
    },
    {
      name: "Family Health History",
      size: "1.2 MB",
      type: "PDF",
      category: "Family Risk",
      status: "reviewed",
      date: "2025-01-16",
    },
    {
      name: "Previous Lab Results",
      size: "1.8 MB",
      type: "PDF",
      category: "External Labs",
      status: "reviewed",
      date: "2025-01-10",
    },
    {
      name: "HIPAA Consent Form",
      size: "0.8 MB",
      type: "PDF",
      category: "Consent",
      status: "signed",
      date: "2025-01-15",
    },
    {
      name: "Education Module Completion Certificate",
      size: "1.1 MB",
      type: "PDF",
      category: "Education",
      status: "complete",
      date: "2025-01-18",
    },
  ];

  const statusColors = {
    new: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    reviewed: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    signed: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    complete: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300",
  };

  return (
    <div className="space-y-6">

      {/* Upload Box */}
      <div className="border-2 border-dashed border-blue-300 rounded-xl p-10 text-center bg-blue-50 dark:bg-gray-700 dark:border-blue-500">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
            <Upload className="w-8 h-8 text-blue-500 dark:text-blue-300" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2">
          Upload Health Documents
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-4">
          Securely upload your health records, lab results, or other medical documents. Our AI will automatically analyze and summarize your documents.
        </p>
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
          Choose Files to Upload
        </button>
        <p className="text-gray-400 dark:text-gray-400 text-sm mt-2">
          Supports PDF, JPG, PNG, DOC, DOCX • Max 10MB per file
        </p>
      </div>

      {/* Document Library */}
      <div className="border border-gray-300 dark:border-gray-600 p-3 sm:p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
          Document Library
        </h3>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex-shrink-0 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm font-medium border ${
                activeTab === tab.name
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tab.name}
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.name
                    ? "bg-white text-blue-600"
                    : "bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-300"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Table for large screens */}
        <div className="hidden sm:block bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm">
              <tr>
                <th className="p-3 sm:p-4 font-medium">Document</th>
                <th className="p-3 sm:p-4 font-medium">Type</th>
                <th className="p-3 sm:p-4 font-medium">Category</th>
                <th className="p-3 sm:p-4 font-medium">Status</th>
                <th className="p-3 sm:p-4 font-medium">Date</th>
                <th className="p-3 sm:p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-gray-700 dark:text-gray-200 text-sm">
              {documents.map((doc, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 sm:p-4 flex items-center gap-3">
                    <div className="w-8 h-10 bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded">
                      <span className="text-blue-600 dark:text-blue-300 font-bold text-sm">PDF</span>
                    </div>
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{doc.size}</p>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4">{doc.type}</td>
                  <td className="p-3 sm:p-4">{doc.category}</td>
                  <td className="p-3 sm:p-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[doc.status]}`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-3 sm:p-4">{doc.date}</td>
                  <td className="p-3 sm:p-4 flex gap-3 text-gray-500 dark:text-gray-300">
                    <Eye className="w-5 h-5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300" />
                    <Download className="w-5 h-5 cursor-pointer hover:text-green-600 dark:hover:text-green-400" />
                    <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="sm:hidden flex flex-col gap-4">
          {documents.map((doc, idx) => (
            <div key={idx} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-10 bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded">
                    <span className="text-blue-600 dark:text-blue-300 font-bold text-sm">PDF</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{doc.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{doc.size}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[doc.status]}`}>
                  {doc.status}
                </span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
                <span>{doc.type}</span>
                <span>{doc.category}</span>
                <span>{doc.date}</span>
              </div>
              <div className="flex gap-3 mt-2 text-gray-500 dark:text-gray-300">
                <Eye className="w-5 h-5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300" />
                <Download className="w-5 h-5 cursor-pointer hover:text-green-600 dark:hover:text-green-400" />
                <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
