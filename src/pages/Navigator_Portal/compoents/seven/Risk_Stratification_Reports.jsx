import React, { useState } from 'react';

// Import your components
import RiskReports from './Pages/RiskReports/RiskReports';
import DocumentViewer from './Pages/DocumentViewer';
import NavigatorProductivity from './Pages/NavigatorProductivity/NavigatorProductivity';
import ClinicalProtocols from './Pages/ClinicalProtocols';
import AuditTrail from './Pages/AuditTrail';

const Risk_Stratification_Reports = () => {
  const [activeTab, setActiveTab] = useState('Primary');
  const [activeComponent, setActiveComponent] = useState(null);

  const tabs = ['Primary', 'AI', 'Admin'];

  const features = {
    Primary: [
      {
        title: 'Risk Stratification Reports',
        description: 'Generate comprehensive risk analysis reports with charts and data exports',
        button: 'Open Reports',
        component: <RiskReports />,
      },
      {
        title: 'Document Viewer',
        description: 'Access and preview member documents, lab results, and clinical files',
        button: 'View Documents',
        component: <DocumentViewer />,
      },
      {
        title: 'Navigator Productivity',
        description: 'Track performance metrics, caseload analytics, and efficiency KPIs',
        button: 'View Analytics',
        component: <NavigatorProductivity />,
      },
      {
        title: 'Clinical Protocols',
        description: 'Access evidence-based care protocols and clinical decision support tools',
        button: 'View Protocols',
        component: <ClinicalProtocols />,
      },
      {
        title: 'Audit Trail & History',
        description: 'Review audit logs, compliance tracking, and export historical data',
        button: 'View Audit Trail',
        component: <AuditTrail />,
      },
    ],
    AI: [
      {
        title: 'AI Insights',
        description: 'Leverage AI to predict risk and suggest interventions.',
        button: 'Explore AI',
        component: <div>AI Insights Component</div>,
      },
    ],
    Admin: [
      {
        title: 'User Management',
        description: 'Manage user roles, permissions, and settings.',
        button: 'Manage Users',
        component: <div>User Management Component</div>,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveComponent(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Show selected component */}
      {activeComponent ? (
        <div className="mt-4">
          {React.cloneElement(activeComponent, { onBack: () => setActiveComponent(null) })}
        </div>
      ) : (
        // Cards
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {features[activeTab].map((item, index) => (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-5 flex flex-col justify-between transition-colors duration-300"
    >
      <div>
        <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">{item.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setActiveComponent(item.component)}
          className="bg-purple-600 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-700 transition-colors"
        >
          {item.button}
        </button>
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default Risk_Stratification_Reports;
