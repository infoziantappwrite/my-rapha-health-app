import React from "react";

const casesData = [
  {
    id: "urgent",
    title: "Urgent (Red)",
    count: 5,
    badge: ">48h: 2",
    buttonText: "View",
    devlinkCard: "prov-cases-kpi-urgent",
    devlinkExplain: "prov-cases-explain-urgent",
  },
  {
    id: "moderate",
    title: "Moderate (Yellow)",
    count: 12,
    badge: null,
    buttonText: "View",
    devlinkCard: "prov-cases-kpi-moderate",
    devlinkExplain: "prov-cases-explain-moderate",
  },
  {
    id: "mine",
    title: "Assigned to Me",
    count: 8,
    badge: null,
    buttonText: "Open My Queue",
    devlinkCard: "prov-cases-kpi-mine",
    devlinkExplain: "prov-cases-explain-mine",
  },
  {
    id: "navigator",
    title: "Awaiting Navigator",
    count: 6,
    badge: null,
    buttonText: "Open Navigator Queue",
    devlinkCard: "prov-cases-kpi-nav",
    devlinkExplain: "prov-cases-explain-nav",
  },
];

const CasesCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {casesData.map((item) => (
        <div
          key={item.id}
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border h-[150px] border border-gray-300 dark:border-gray-700"
          data-devlink={item.devlinkCard}
        >
          <div data-slot="card-content" className="[&:last-child]:pb-6 p-4 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
              <button
                data-devlink={item.devlinkExplain}
                className="text-xs text-blue-600 hover:text-blue-800 underline"
              >
                Explain
              </button>
            </div>

            {/* Count & Badge */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-medium">{item.count}</span>
                {item.badge && (
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-red-100 text-red-800"
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-auto">
              <button
                data-slot="button"
                className="inline-flex items-center border border-gray-300 dark:border-gray-700 justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md gap-1.5 px-3 w-full border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CasesCard;
