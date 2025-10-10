import React from 'react';
import DocumentManager from './components/DocumentManager';

const DocumentVault = () => {
  return (
     <div className="space-y-10  max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Document Vault
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Securely manage your health documents and completed consents
        </p>
      </div>
      <DocumentManager />
    </div>
  );
};

export default DocumentVault;
