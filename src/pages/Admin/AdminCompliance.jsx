import AdminHeader from "./Components/AdminHeader";
import { LogsIcon, X } from "lucide-react";
import { useState } from "react";

import AdminComplianceSprintCard from "./Components/AdminComplianceSprintCard";
import AdminComplianceSOC2Cards from "./Components/AdminComplianceSOC2Cards";
import AdminComplianceSuppressionAudit from "./Components/AdminComplianceSuppressionAudit";
import AdminComplianceExport from "./Components/AdminComplianceExport";

import FullscreenModalBackdrop from "./Components/FullscreenModalBackdrop";


const evidences = [
    {
        id: 1,
        title: "HIPAA Security Rule Assessment",
        timestamp: "2025-01-15 10:30:00"
    },
    {
        id: 2,
        title: "PHI Inventory and Classification",
        timestamp: "2025-01-14 16:45:00"
    },
    {
        id: 3,
        title: "Risk Analysis Report",
        timestamp: "2025-01-12 09:15:00"
    },
    {
        id: 4,
        title: "Business Associate Agreements",
        timestamp: "2025-01-10 14:20:00"
    },
    {
        id: 5,
        title: "Breach Notification Procedures",
        timestamp: "2025-01-08 11:30:00"
    }
]

const EvidenceModal = ({ onClose }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-auto overflow-y-auto"
      style={{ maxHeight: "95vh" }}
    >
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            HIPAA Compliance Evidence
        </h2>
        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          <X />
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-4">
            {evidences.map((evidence) => (
                <div key={evidence.id} className="flex flex-row items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow">
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">{evidence.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Submitted on: {evidence.timestamp}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const UploadSOC2Modal = ({ onClose }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-auto overflow-y-auto"
      style={{ maxHeight: "95vh" }}
    >
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Upload SOC2 Artifact
        </h2>
        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          <X />
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-4">
            <div className="my-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Artifact Name
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter artifact name"
                    data-devlink-id="upload-soc2-artifact-name"
                    defaultValue={"Security Policy v2.1"}
                />
            </div>

            <div className="my-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Version Notes
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Describe changes in this version"
                    data-devlink-id="upload-soc2-artifact-checksum"
                />
            </div>

            <div className="my-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    File
                </label>
                <input
                    type="file"
                    className="w-full font-medium px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter artifact name"
                    data-devlink-id="upload-soc2-artifact-name"
                />
            </div>

            <div className="my-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Checksum (SHA-256)
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter artifact checksum"
                    data-devlink-id="upload-soc2-artifact-checksum"
                    defaultValue={"a3f5c94e7b1d9c2a6e8f4b5c7d9e1f2a"}
                />
            </div>
        </div>
      </div>
    </div>
  );
};


const packageContents = [
    {
        id: 1,
        name: "HIPAA_Compliance_Report_2025.pdf",
        checksum: "b1946ac92492d2347c6235b4d2611184",
    },
    {
        id: 2,
        name: "SOC2_Type_II_Report_2025.pdf",
        checksum: "6f1ed002ab5595859014ebf0951522d9",
    },
    {
        id: 3,
        name: "Performance_Metrics_Report.xlsx",
        checksum: "3c59dc048e8850243be8079a5c74d079",
    },
    {
        id: 4,
        name: "Audit_Log_Export_Q4_2025.json",
        checksum: "45c48cce2e2d7fbdea1afc51c7c6ad26",
    }
];

const ExportComplianceModal = ({ onClose }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-auto overflow-y-auto"
      style={{ maxHeight: "95vh" }}
    >

        <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Export Compliance Pack
        </h2>
        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          <X />
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-4">
            <div className="my-2">
                <h3 className="font-bold">Package Contents</h3>
                <ul className="list-none list-inside mt-2">
                    {packageContents.map((item) => (
                        <li key={item.id} className="my-2 text-gray-700 dark:text-gray-300 flex flex-row justify-between">
                            <span className="name">
                                {item.name}
                            </span>
                            <span className="text-gray-500 dark:text-gray-500 ml-2">
                                {item.checksum.slice(0, 15)}...
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-4">
            <div className="my-2">
                <h3 className="font-bold">Export Details</h3>
                <ul className="list-none list-inside mt-2">
                    <li className="my-2 flex flex-row justify-between">
                        <span className="name">
                            Filename:
                        </span>
                        <span className="ml-2">
                            rapha_compliance_pack_2025-01-15.zip
                        </span>
                    </li>

                    <li className="my-2 flex flex-row justify-between">
                        <span className="name">
                            Estimated Size:
                        </span>
                        <span className="ml-2">
                            24.7 MB
                        </span>
                    </li>

                    <li className="my-2 flex flex-row justify-between">
                        <span className="name">
                            Generated:
                        </span>
                        <span className="ml-2">
                            2025-01-15 14:30:00 UTC
                        </span>
                    </li>
                </ul>
            </div>

            <div className="my-2 flex flex-row justify-end gap-3 md:flex-col">
                <button 
                    onClick={onClose}
                    className="w-full cursor-pointer bg-gray-200 dark:bg-gray-700 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg"
                >
                    Cancel
                </button>
                <button
                    className="w-full cursor-pointer bg-violet-600 font-semibold hover:bg-violet-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                    onClick={onClose}
                >
                    Generate Package
                </button>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400"> 
                Audit log entry created.
            </div>
        </div>
      </div>

    </div>
  );
};


const RunSuppressionAuditModal = ({ onClose }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-auto overflow-y-auto"
      style={{ maxHeight: "95vh" }}
    >

        <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Run Suppression Audit
        </h2>
        <button
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          <X />
        </button>
      </div>

      <div className="space-y-6">
          {/* progress */}

          <h3 className="my-2 font-bold">Audit Progress</h3>
          <div className="progress my-0 mb-1">
            <div className="w-full bg-gray-400/70 dark:bg-gray-300/15 h-2 rounded overflow-hidden">
                <div className="bg-black dark:bg-white h-2" style={{ width: '70%' }}></div>
            </div>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Processing cohort 2 of 3...</span>

      </div>

      <div className="space-y-5 mt-5">
        <div className="flex flex-col gap-4">
            <ul className="list-none list-inside mt-2 space-y-2">
                <li className="flex flex-row items-center justify-between">
                    <span>
                        ✔️ Employees under 100
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-300">
                        Suppressed (2,847)
                    </span>
                </li>
                <li className="flex flex-row items-center justify-between">
                    <span>
                        🔁 High-risk conditions
                    </span>
                    <span className="text-blue-600 dark:text-blue-300">
                        Processing...
                    </span>
                </li>
                <li className="flex flex-row items-center justify-between">
                    <span>
                        ⏳ Standard population
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                        Pending
                    </span>
                </li>
            </ul>
        </div>
      </div>

      <button 
        onClick={onClose}
        className="cursor-pointer w-full mb-3 bg-gray-200 dark:bg-gray-700 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded-lg mt-6"
    >
        Close
      </button>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        Audit log entry created.
      </div>

    </div>
  );
};



const AdminCompliance = () => {
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showUploadArtifactModal, setShowUploadArtifactModal] =
    useState(false);
  const [showRunSuppressionAuditModal, setShowRunSuppressionAuditModal] =
    useState(false);
  const [showExportComplianceModal, setShowExportComplianceModal] =
    useState(false);

  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <AdminHeader
        title="Compliance Management"
        icon={<LogsIcon className="h-6 w-6 text-white" />}
        subtitle="Maintain regulatory compliance and audit readiness for health data protection"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <AdminComplianceSprintCard sprintName={"HIPAA Readiness - Sprint QA"} onClickViewEvidence={() => setShowEvidenceModal(true)} />
        </div>
        <div className="w-full overflow-x-auto">
          <AdminComplianceSOC2Cards onUploadClick={() => setShowUploadArtifactModal(true)} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <AdminComplianceSuppressionAudit onRunClick={() => setShowRunSuppressionAuditModal(true)} />
        </div>
        <div className="w-full">
          <AdminComplianceExport exportComplianceOnclick={() => setShowExportComplianceModal(true)} />
        </div>
      </div>

      {showEvidenceModal && (
        <FullscreenModalBackdrop
          showCloseButton={true}
          closeWhenClickedOutside={true}
          opacity={50}
          onClose={() => setShowEvidenceModal(false)}
        >
          <EvidenceModal onClose={() => setShowEvidenceModal(false)} />
        </FullscreenModalBackdrop>
      )}

      {showUploadArtifactModal && (
        <FullscreenModalBackdrop
          showCloseButton={true}
          closeWhenClickedOutside={true}
          opacity={50}
          onClose={() => setShowUploadArtifactModal(false)}
        >
          <UploadSOC2Modal onClose={() => setShowUploadArtifactModal(false)} />
        </FullscreenModalBackdrop>
      )}

      {showExportComplianceModal && (
        <FullscreenModalBackdrop
          showCloseButton={true}
          closeWhenClickedOutside={true}
          opacity={50}
          onClose={() => setShowExportComplianceModal(false)}
        >
          <ExportComplianceModal onClose={() => setShowExportComplianceModal(false)} />
        </FullscreenModalBackdrop>
      )}

      {showRunSuppressionAuditModal && (
        <FullscreenModalBackdrop
          showCloseButton={true}
          closeWhenClickedOutside={true}
          opacity={50}
          onClose={() => setShowRunSuppressionAuditModal(false)}
        >
          <RunSuppressionAuditModal onClose={() => setShowRunSuppressionAuditModal(false)} />
        </FullscreenModalBackdrop>
      )}

    </div>
  );
};

export default AdminCompliance;
