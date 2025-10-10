import { Download } from "lucide-react";

const AdminComplianceExport = ({ exportComplianceOnclick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Download className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Export Compliance Pack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Bundle HIPAA + SOC2 + Perf + Audit evidence
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
        Generate a comprehensive compliance package containing all required
        documentation, audit trails, and performance metrics for regulatory
        review.
      </p>

      {/* Export Button */}
      <button
        onClick={exportComplianceOnclick}
        dev-link-id="admin-compliance-export-pack-confirm"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
      >
        <Download className="w-5 h-5" />
        Export Compliance Pack
      </button>
    </div>
  );
};

export default AdminComplianceExport;
