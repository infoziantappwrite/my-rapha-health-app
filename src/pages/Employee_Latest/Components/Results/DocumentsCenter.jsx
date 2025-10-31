import { useState } from "react";
import {
    FileText,
    Upload,
    Lock,
    Download,
    Printer,
    Share2,
    Sparkles,
    X,
} from "lucide-react";

export default function DocumentsCenter({ documents = [], storage = {} }) {
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => setUploading(false), 1500); // simulate upload
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-300 dark:border-gray-700">
                <div>
                    <h4 className="text-lg font-semibold">Your Documents</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        All your records — official and uploaded — stored securely.
                    </p>
                </div>
                <button
                    onClick={handleUpload}
                    disabled={uploading}
                    className="inline-flex items-center justify-center text-sm font-medium border border-gray-300 
                     bg-gray-50 text-gray-800 hover:bg-gray-100
                     dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 
                     h-8 rounded-md gap-1.5 px-3 transition-all disabled:opacity-50"
                >
                    <Upload className="h-4 w-4" /> {uploading ? "Uploading..." : "Add Record"}
                </button>
            </div>

            {/* Documents */}
            <div className="px-6 pb-6 space-y-3">
                {documents.map((doc) => (
                    <div
                        key={doc.id}
                        onClick={() => setSelectedDoc(doc)}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 
                       border border-gray-300 dark:border-gray-700 rounded-lg 
                       hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 
                       transition-all cursor-pointer"
                    >
                        <div className="flex items-center space-x-3">
                            <FileText
                                className={`h-5 w-5 ${doc.color === "red"
                                        ? "text-red-600 dark:text-red-400"
                                        : "text-blue-600 dark:text-blue-400"
                                    }`}
                            />
                            <div>
                                <p className="text-sm font-medium">{doc.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {doc.type} • {doc.size} MB • {doc.date}
                                </p>
                            </div>
                        </div>
                        {doc.badge && (
                            <span
                                className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 
                            text-xs font-medium border-transparent 
                            ${doc.badge === "New"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                                        : "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
                                    }`}
                            >
                                {doc.badge}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Storage Bar */}
            <div className="mt-auto border-t border-gray-300 dark:border-gray-700 px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Storage Used</span>
                    <span className="text-xs font-medium">
                        {storage.used} MB / {storage.total} MB
                    </span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-800 relative w-full overflow-hidden rounded-full h-2">
                    <div
                        className="bg-blue-600 dark:bg-blue-500 h-full transition-all"
                        style={{ width: `${(storage.used / storage.total) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Secure Note */}
            <div className="text-gray-800 dark:text-gray-200 flex flex-col gap-6 rounded-xl border mt-4 
                      bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800 mx-6 mb-6">
                <div className="p-3 flex items-start space-x-2">
                    <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <p className="text-xs">
                        All records are encrypted and stored securely under HIPAA standards.
                    </p>
                </div>
            </div>

            {/* Modal (Dialog) */}
            {selectedDoc && (
                <>
                    {/* 🔹 Background Blur Overlay */}
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />

                    {/* 🔹 Centered Modal */}
                    <div
                        role="dialog"
                        className="bg-white dark:bg-gray-900 fixed top-1/2 left-1/2 z-50 grid w-full translate-x-[-50%] 
                 translate-y-[-50%] gap-5 rounded-2xl border border-gray-300 dark:border-gray-700 
                 p-8 shadow-2xl sm:max-w-2xl max-w-[800px] max-h-[90vh] overflow-y-auto 
                 animate-in fade-in-0 zoom-in-95"
                    >
                        {/* Header */}
                        <div className="flex flex-col gap-2 text-center sm:text-left">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {selectedDoc.title}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                {selectedDoc.type} • {selectedDoc.size} MB • Uploaded {selectedDoc.date}
                            </p>
                        </div>

                        {/* Preview Section */}
                        <div className="bg-gray-100 dark:bg-gray-800 h-[450px] flex items-center justify-center rounded-lg 
                      border-2 border-dashed border-gray-300 dark:border-gray-700">
                            <div className="text-center">
                                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-sm text-gray-500 dark:text-gray-400">Document Preview</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">
                                    PDF Viewer would render here
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center space-x-2">
                                <DialogButton icon={<Download />} label="Download" />
                                <DialogButton icon={<Printer />} label="Print" />
                                <DialogButton icon={<Share2 />} label="Share" />
                            </div>
                            <DialogButton primary icon={<Sparkles />} label="Explain in Plain Language" />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedDoc(null)}
                            className="absolute top-5 right-5 opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </>
            )}

        </div>
    );
}

function DialogButton({ icon, label, primary }) {
    return (
        <button
            className={`inline-flex items-center justify-center text-sm font-medium transition-all 
                  border h-8 rounded-md gap-1.5 px-3 
                  ${primary
                    ? "bg-[#5D3FD3] text-white hover:bg-[#4a2fb3]"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                }`}
        >
            {icon} {label}
        </button>
    );
}
