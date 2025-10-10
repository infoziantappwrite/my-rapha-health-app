import React from 'react';
import { Upload } from 'lucide-react';

const UploadOutside = () => {
  return (
    <div className="flex justify-center  dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full max-w-full">
        
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Upload Outside Lab Results
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Share additional test results with your Navigator for comprehensive review
          </p>
        </div>
        
        {/* Drag and Drop Area */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-10 text-center transition-colors duration-200 hover:border-blue-400 dark:hover:border-blue-500">
          <div className="flex justify-center mb-4">
            <Upload className="w-12 h-12 text-gray-400 dark:text-gray-300" />
          </div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Drag and drop files here
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Supports PDF, JPG, PNG files up to 10MB
          </p>
          <label
            htmlFor="file-upload"
            className="mt-6 inline-block bg-gray-800 dark:bg-gray-700 text-white font-medium py-2 px-6 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-700 dark:hover:bg-gray-600"
          >
            Choose Files
          </label>
          <input id="file-upload" type="file" className="hidden" multiple />
        </div>
        
        {/* Footer Note */}
        <div className="mt-4 flex items-start text-xs text-gray-500 dark:text-gray-400">
          <span className="mr-2">🔒</span>
          <p>
            All uploads are encrypted and HIPAA-compliant. Only you and your assigned Navigator can access these documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadOutside;
