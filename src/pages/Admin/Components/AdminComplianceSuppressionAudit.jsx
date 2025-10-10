import { Play, Lock } from 'lucide-react';

const cohortsData = [
  {
    id: 1,
    cohort: 'Employees under 100',
    size: 2847,
    result: 'Suppressed',
    notes: 'Small employer protection'
  },
  {
    id: 2,
    cohort: 'High-risk conditions',
    size: 156,
    result: 'Suppressed',
    notes: 'Privacy protection'
  },
  {
    id: 3,
    cohort: 'Standard population',
    size: 15642,
    result: 'Visible',
    notes: 'Meets disclosure thresholds'
  }
];

const AdminComplianceSuppressionAudit = ({ onRunClick }) => {
  const lastRun = '2025-01-15 08:30:00';
  const status = 'Passed';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-orange-500 dark:text-orange-400" />
            Suppression Audit
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Privacy protection compliance verification
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600 dark:text-gray-400">Last run:</span>
          <span className="text-gray-900 dark:text-white">{lastRun}</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full text-xs">
            {status}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">Cohorts Checked</h3>
          <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">3</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-green-600 dark:text-green-400 text-sm font-medium mb-2">Visible Count</h3>
          <p className="text-3xl font-bold text-green-700 dark:text-green-300">15,642</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-orange-600 dark:text-orange-400 text-sm font-medium mb-2">Suppressed Count</h3>
          <p className="text-3xl font-bold text-orange-700 dark:text-orange-300">3,003</p>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1">
        <div className="grid grid-cols-4 gap-4 px-4 py-3 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400 rounded-t-lg">
          <div>Cohort</div>
          <div>Size</div>
          <div>Result</div>
          <div>Notes</div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {cohortsData.map((cohort) => (
            <div key={cohort.id} className="grid grid-cols-4 gap-4 px-4 py-3 text-sm">
              <div className="text-gray-900 dark:text-white font-medium">{cohort.cohort}</div>
              <div className="text-gray-600 dark:text-gray-400">{cohort.size.toLocaleString()}</div>
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium ${
                  cohort.result === 'Visible'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}>
                  {cohort.result}
                </span>
              </div>
              <div className={`text-sm text-gray-600 dark:text-gray-400`}>
                {cohort.notes}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="mt-6">
        <button 
            onClick={onRunClick}
            dev-link-id="admin-compliance-hipaa-run"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          <Play size={20} />
          Run Suppression Audit
        </button>
      </div>
    </div>
  );
};

export default AdminComplianceSuppressionAudit;