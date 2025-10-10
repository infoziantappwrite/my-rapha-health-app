import { FileCheckIcon, Plus } from 'lucide-react';

// Sample data array for SOC2 artifacts
const soc2Artifacts = [
  {
    id: 1,
    artifact: 'SOC 2 Type II Report',
    owner: 'External Auditor',
    version: '2025.1',
    lastUpdated: '2025-01-10',
    checksum: 'e3b9c442...',
    status: 'current'
  },
  {
    id: 2,
    artifact: 'Information Security Policy',
    owner: 'CISO',
    version: 'v3.2',
    lastUpdated: '2025-01-05',
    checksum: 'a665a459...',
    status: 'pending'
  },
  {
    id: 3,
    artifact: 'Access Control Matrix',
    owner: 'IT Security',
    version: 'v2.1',
    lastUpdated: '2024-12-28',
    checksum: '5d41402a...',
    status: 'current'
  },
  {
    id: 4,
    artifact: 'Business Continuity Plan',
    owner: 'Operations',
    version: 'v1.8',
    lastUpdated: '2024-12-15',
    checksum: '7d835e95...',
    status: 'outdated'
  },
  {
    id: 5,
    artifact: 'Incident Response Playbook',
    owner: 'Security Team',
    version: 'v4.0',
    lastUpdated: '2025-01-08',
    checksum: 'a98f6bcd...',
    status: 'current'
  }
];

const AdminComplianceSOC2Cards = ({ onUploadClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full min-w-[900px] lg:min-w-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <FileCheckIcon className="w-5 h-5 text-green-600 dark:text-green-500" />
            SOC2 Artifacts
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Security and compliance documentation
          </p>
        </div>
        <button
          onClick={onUploadClick}
          dev-link-id="admin-compliance-upload-artifact"
          className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Upload Artifact
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-7 gap-4 px-4 py-3 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400 rounded-t-lg">
        <div className="text-gray-900 dark:text-gray-100">Artifact</div>
        <div className="text-gray-900 dark:text-gray-100">Owner</div>
        <div className="text-gray-900 dark:text-gray-100">Version</div>
        <div className="text-gray-900 dark:text-gray-100">Last Updated</div>
        <div className="text-gray-900 dark:text-gray-100">Checksum</div>
        <div className="text-gray-900 dark:text-gray-100">Status</div>
        <div className="text-gray-900 dark:text-gray-100">Actions</div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {soc2Artifacts.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm"
          >
            <div className="text-gray-900 dark:text-white font-medium">
              {item.artifact}
            </div>
            <div className="text-gray-600 dark:text-gray-400">{item.owner}</div>
            <div className="text-gray-600 dark:text-gray-400">
              {item.version}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {item.lastUpdated}
            </div>
            <div className="flex items-center">
              <span className="px-2 py-1 bg-gray-300 dark:bg-gray-900 rounded text-gray-600 dark:text-gray-400 font-mono text-xs">
                {item.checksum}
              </span>
            </div>
            <div>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  item.status === "current"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : item.status === "pending"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="p-1 text-gray-900 font-semibold hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
                title="View"
              >
                View
              </button>
              <button
                className="p-1 text-gray-900 font-semibold hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
                title="Upload New Version"
              >
                Upload New
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AdminComplianceSOC2Cards.propTypes = {
  // Add props if needed
};

export default AdminComplianceSOC2Cards;