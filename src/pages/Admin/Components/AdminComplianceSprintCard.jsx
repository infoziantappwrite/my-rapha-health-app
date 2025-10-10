import { Check, Eye, Shield } from 'lucide-react'
import PropTypes from 'prop-types'

const sprintTasks = [
  {
    id: 1,
    name: 'Consent gating verified',
    status: 'passed',
  },
  {
    id: 2,
    name: 'Audit export under s5 (checksum)',
    status: 'passed',
  },
  {
    id: 3,
    name: 'Suppression N under 10 enforced (DB + UI)',
    status: 'passed',
  },
  {
    id: 4,
    name: 'PHI vault encryption (AES-256)',
    status: 'passed',
  },
  {
    id: 5,
    name: 'MFA + RBAC active',
    status: 'needs-review',
  },
  {
    id: 6,
    name: 'CRS schema validation',
    status: 'passed',
  },
  {
    id: 7,
    name: 'Event bus idempotency tests',
    status: 'passed',
  },
  {
    id: 8,
    name: 'Accessibility AA spot check',
    status: 'needs-review',
  }
]

export default function AdminComplianceSprintCard({ sprintName = "HIPAA Readiness - Sprint QA", onClickViewEvidence }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            <h3 className="font-medium text-gray-900 dark:text-white">{sprintName}</h3>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Quarterly compliance verification checklist
          </p>
        </div>

        {/* Scrollable Task List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[320px] max-h-[400px]">
          {sprintTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex-shrink-0">
                  {task.status === 'passed' ? (
                    <div className="w-5 h-5 rounded bg-black dark:bg-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-3 text-white dark:text-black" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded bg-gray-500 dark:bg-gray-400" />
                  )}
                </div>
                <span className="truncate font-medium text-gray-900 dark:text-white">
                  {task.name}
                </span>
              </div>
              <span className={
                task.status === 'passed'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900 text-sm font-medium px-2 py-0.5 rounded-sm'
                  : 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900 text-sm font-medium px-2 py-0.5 rounded-sm'
              }>
                {task.status === 'passed' ? 'Passed' : 'Needs Review'}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            onClick={onClickViewEvidence}
            dev-link-id={`admin-compliance-view-artifact-${sprintName.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <Eye className="w-4 h-4" />
            View Evidence
          </button>
        </div>
      </div>
    </div>
  )
}

AdminComplianceSprintCard.propTypes = {
  sprintName: PropTypes.string
}
