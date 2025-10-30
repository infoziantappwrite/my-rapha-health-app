import React, { useState } from "react";
import {
  Heart,
  Activity,
  Dna,
  Droplet,
  AlertTriangle,
  X,
  Target,
  Brain,
  FileText,
  CircleCheckBig,
} from "lucide-react";
import { Dialog } from "@headlessui/react";

const familyRisks = [
  {
    id: 1,
    title: "Heart Disease",
    risk: "Elevated Risk",
    color: "red",
    bg: "bg-red-100 dark:bg-red-900/30",
    border: "border-red-300 dark:border-red-700",
    text: "text-red-600",
    icon: Heart,
    family: "Father (Heart Attack 58), Maternal Grandfather",
    description:
      "Strong family history with early onset. Cardiovascular screening essential.",
    recommendations: [
      "Schedule comprehensive screening within 30 days",
      "Consult Navigator for personalized prevention plan",
      "Review educational content specific to heart disease",
    ],
  },
  {
    id: 2,
    title: "Prostate Cancer",
    risk: "Low Risk",
    color: "green",
    bg: "bg-green-100 dark:bg-green-900/30",
    border: "border-green-300 dark:border-green-700",
    text: "text-green-600",
    icon: Activity,
    family: "None Known",
    description:
      "No known family history. Standard screening schedule applies.",
    recommendations: ["Continue regular screenings", "Maintain healthy lifestyle"],
  },
  {
    id: 3,
    title: "Colon Cancer",
    risk: "Moderate Risk",
    color: "amber",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    border: "border-amber-300 dark:border-amber-700",
    text: "text-amber-600",
    icon: Dna,
    family: "Maternal Grandfather",
    description: "One second-degree relative. Consider screening at age 40.",
    recommendations: ["Discuss with Navigator", "Consider early screening"],
  },
  {
    id: 4,
    title: "Diabetes",
    risk: "Moderate Risk",
    color: "amber",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    border: "border-amber-300 dark:border-amber-700",
    text: "text-amber-600",
    icon: Droplet,
    family: "Mother",
    description:
      "First-degree relative with Type 2 diabetes. Monitor glucose levels.",
    recommendations: ["Monitor fasting glucose", "Adopt diet and exercise plan"],
  },
  {
    id: 5,
    title: "Asthma",
    risk: "Elevated Risk",
    color: "red",
    bg: "bg-red-100 dark:bg-red-900/30",
    border: "border-red-300 dark:border-red-700",
    text: "text-red-600",
    icon: AlertTriangle,
    family: "Brother, Father",
    description:
      "Family members with history of chronic respiratory issues.",
    recommendations: [
      "Avoid triggers",
      "Keep inhaler ready",
      "Periodic lung check-ups",
    ],
  },
];

export default function FamilyRiskGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-6">
        {familyRisks.map((risk) => {
          const Icon = risk.icon;
          return (
            <div
              key={risk.id}
              onClick={() => setSelected(risk)}
              className={`flex flex-col gap-4 rounded-2xl border ${risk.border} ${risk.bg} cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200 p-4`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`h-5 w-5 ${risk.text}`} />
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-md bg-white/60 dark:bg-gray-800/60 border ${risk.border} ${risk.text}`}
                >
                  {risk.risk}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                {risk.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {risk.description}
              </p>
              <div className="pt-2 border-t border-gray-300 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                <span className="font-medium">Family:</span> {risk.family}
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-2">
                View Details →
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Dialog */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        className="relative z-50"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

        {/* Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in fade-in duration-200">
            {selected && (
              <>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    {React.createElement(selected.icon, {
                      className: `h-5 w-5 ${selected.text}`,
                    })}
                    {selected.title} — Risk Details
                  </h2>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Risk Info */}
                <div
                  className={`p-4 rounded-lg ${selected.bg} border ${selected.border} mb-4`}
                >
                  <p className="text-sm font-medium mb-1">
                    {selected.risk}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-medium">Family Connections:</span>{" "}
                    {selected.family}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {selected.description}
                  </p>
                </div>

                {/* Recommendations */}
                <div className="mb-4">
                  <h3 className="font-medium flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm mb-2">
                    <Target className="h-4 w-4" /> Recommended Actions
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {selected.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start">
                        <CircleCheckBig className="h-4 w-4 mr-2 mt-0.5 text-purple-600 dark:text-purple-400" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education Section */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-sm flex items-center text-purple-700 dark:text-purple-300">
                    <Brain className="h-4 w-4 mr-2" /> Educational Resources
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    Learn more about prevention and early detection.
                  </p>
                  <button className="inline-flex items-center text-sm px-3 py-1.5 rounded-md border border-purple-200 hover:bg-purple-100 dark:border-purple-700 dark:hover:bg-purple-800/30 transition text-purple-700 dark:text-purple-300">
                    <FileText className="h-3.5 w-3.5 mr-2" />
                    View Education Modules
                  </button>
                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition text-sm flex items-center gap-2"
                  >
                    <X className="h-4 w-4" /> Close
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
