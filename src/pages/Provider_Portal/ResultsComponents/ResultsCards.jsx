import React from "react";

// Sample data for dynamic rendering
const kpiCards = [
  {
    title: "New Results",
    value: 12,
    badges: [{ label: "+3 today", color: "green" }],
    buttonLabel: "Review",
    devlinkCard: "prov-res-kpi-new",
    devlinkExplain: "prov-res-explain-new",
    showButton: true,
  },
  {
    title: "Flagged / Abnormal",
    value: 8,
    badges: [
      { label: "Red: 3", color: "red" },
      { label: "Yellow: 5", color: "yellow" },
    ],
    devlinkCard: "prov-res-kpi-flagged",
    devlinkExplain: "prov-res-explain-flagged",
    showButton: false,
  },
  {
    title: "Pending Review",
    value: 15,
    description: "Avg age: 2h 35m",
    devlinkCard: "prov-res-kpi-pending",
    devlinkExplain: "prov-res-explain-pending",
    showButton: false,
  },
  {
    title: "Reported",
    value: 28,
    description: "Today: 12 • Yesterday: 16",
    devlinkCard: "prov-res-kpi-reported",
    devlinkExplain: "prov-res-explain-reported",
    showButton: false,
  },
];

const badgeColors = {
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
  yellow: "bg-yellow-100 text-yellow-800",
};

const ResultsCards = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
      {kpiCards.map((card, idx) => (
        <div
          key={idx}
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl h-[150px] border border-gray-300 dark:border-gray-700"
          data-devlink={card.devlinkCard}
        >
          <div
            data-slot="card-content"
            className="[&:last-child]:pb-6 p-4 h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
              </div>
              <button
                data-devlink={card.devlinkExplain}
                className="text-xs text-blue-600 hover:text-blue-800 underline"
              >
                Explain
              </button>
            </div>

            {/* Value & Badges */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-medium">{card.value}</span>
                {card.badges &&
                  card.badges.map((b, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 ${badgeColors[b.color] || ""}`}
                    >
                      {b.label}
                    </span>
                  ))}
              </div>
              {card.description && (
                <p className="text-sm text-gray-600">{card.description}</p>
              )}
            </div>

            {/* Button */}
            {card.showButton && (
              <div className="mt-auto">
                <button className="inline-flex border-gray-300 dark:border-gray-700 items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 w-full">
                  {card.buttonLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsCards;
