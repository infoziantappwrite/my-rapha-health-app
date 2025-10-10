import React, { useState } from "react";
import {
  FileText,
  FileImage,
  FlaskConical,
  Share2,
  Download,
  MessageSquare,
  Info,
  Moon,
  Sun,
} from "lucide-react";

const documentsData = [
  {
    id: 1,
    title: "Lab Results - A1C",
    size: "127 KB",
    date: "2024-01-15",
    status: "New",
    patient: "Sarah Johnson",
    type: "Lab",
    provider: "Quest Diagnostics",
    content: "A1C Test Results - 7.2% (Elevated)",
  },
  {
    id: 2,
    title: "Mammogram Report",
    size: "2.3 MB",
    date: "2024-01-14",
    status: "Reviewed",
    patient: "Sarah Johnson",
    type: "Image",
    provider: "City Hospital Imaging",
    content: "Mammogram results are normal.",
  },
  {
    id: 3,
    title: "Clinical Note",
    size: "45 KB",
    date: "2024-01-13",
    status: "New",
    patient: "Sarah Johnson",
    type: "Note",
    provider: "Dr. Emily Carter",
    content: "Follow-up visit summary and next steps for treatment.",
  },
  {
    id: 4,
    title: "Blood Work Panel",
    size: "89 KB",
    date: "2024-01-12",
    status: "Reviewed",
    patient: "Sarah Johnson",
    type: "Lab",
    provider: "Quest Diagnostics",
    content: "Comprehensive blood panel results with normal findings.",
  },
  {
    id: 5,
    title: "Cardiac Echo",
    size: "4.1 MB",
    date: "2024-01-11",
    status: "New",
    patient: "Sarah Johnson",
    type: "Image",
    provider: "Heart Care Center",
    content: "Echocardiogram results show mild valve regurgitation.",
  },
  {
    id: 6,
    title: "Progress Note",
    size: "32 KB",
    date: "2024-01-10",
    status: "Archived",
    patient: "Sarah Johnson",
    type: "Note",
    provider: "Dr. Emily Carter",
    content: "Progress note archived for follow-up reference.",
  },
];

const DocumentViewer = () => {
  const [selectedDocument, setSelectedDocument] = useState(documentsData[0]);
  const [darkMode, setDarkMode] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case "Lab":
        return <FlaskConical className="text-purple-500" size={18} />;
      case "Image":
        return <FileImage className="text-blue-500" size={18} />;
      case "Note":
        return <FileText className="text-green-500" size={18} />;
      default:
        return <FileText className="text-gray-400" size={18} />;
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row p-4 font-sans transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div className="w-full md:w-1/3 md:mr-4 mb-4 md:mb-0">
        <div
          className={`rounded-xl shadow-md p-4 h-full overflow-y-auto transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-inherit pb-2 border-b border-gray-300 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Documents</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
            {documentsData.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDocument(doc)}
                className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all duration-200 mb-2 ${
                  selectedDocument?.id === doc.id
                    ? darkMode
                      ? "bg-purple-800/40 ring-2 ring-purple-500"
                      : "bg-purple-50 ring-2 ring-purple-300"
                    : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  {getIcon(doc.type)}
                  <div>
                    <h3 className="text-sm font-medium">{doc.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {doc.type} • {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>

                {doc.status === "New" && (
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                    New
                  </span>
                )}
                {doc.status === "Reviewed" && (
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full dark:bg-green-900/30 dark:text-green-300">
                    Reviewed
                  </span>
                )}
                {doc.status === "Archived" && (
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full dark:bg-gray-700/40 dark:text-gray-300">
                    Archived
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Pane */}
      <div className="w-full md:w-2/3">
        <div
          className={`rounded-xl shadow-md p-6 h-full overflow-y-auto transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          {selectedDocument ? (
            <>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {getIcon(selectedDocument.type)}
                  {selectedDocument.title}
                </h2>
              </div>

              <div className="flex justify-between items-start mb-6 text-sm">
                <div className="flex-1">
                  <p>
                    Patient:{" "}
                    <span className="font-medium">{selectedDocument.patient}</span>
                  </p>
                  <p>
                    Date:{" "}
                    <span className="font-medium">{selectedDocument.date}</span>
                  </p>
                </div>
                <div className="flex-1 text-right">
                  <p>
                    Type:{" "}
                    <span className="font-medium">{selectedDocument.type}</span>
                  </p>
                  <p>
                    Provider:{" "}
                    <span className="font-medium">{selectedDocument.provider}</span>
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-10 h-72 text-center ${
                  darkMode
                    ? "border-gray-600 text-gray-400"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                <div className="mb-3 text-4xl">📄</div>
                <p className="text-base font-medium">Document Preview</p>
                <p className="text-sm mt-1">{selectedDocument.content}</p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Download size={16} /> Download
                </button>
                <button
                  className={`flex items-center gap-2 border px-4 py-2 rounded-md transition-colors ${
                    darkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Share2 size={16} /> Share
                </button>
                <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                  <MessageSquare size={16} /> Open in Messaging
                </button>
                <button className="flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors">
                  <Info size={16} /> Explain
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <p>Select a document to view its details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
