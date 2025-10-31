import {
  Heart,
  Activity,
  Droplet,
  Shield,
  CircleCheckBig,
  TriangleAlert,
} from "lucide-react";

const iconMap = {
  breast: Heart,
  heart: Activity,
  diabetes: Droplet,
  colon: Shield,
};

const colorMap = {
  green: {
    bg: "bg-green-50 dark:bg-green-900/10",
    border: "border-green-200 dark:border-green-800",
    left: "border-l-4 border-l-green-400 dark:border-l-green-500",
    text: "text-green-800 dark:text-green-300",
    button:
      "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/10",
    border: "border-amber-200 dark:border-amber-800",
    left: "border-l-4 border-l-amber-500 dark:border-l-amber-400",
    text: "text-amber-800 dark:text-amber-300",
    button:
      "bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600",
  },
};

export default function ResultsSummary({ results = [] }) {
  return (
    <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 transition-colors">
      <h2 className="text-xl font-semibold text-[#303046] dark:text-gray-100 mb-4">
        Your Results Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.map((result) => {
          const Icon = iconMap[result.type] || Heart;
          const colors = colorMap[result.color] || colorMap.green;

          return (
            <div
              key={result.id}
              className={`flex flex-col gap-6 rounded-xl border cursor-pointer hover:shadow-lg transition-all
                          ${colors.bg} ${colors.border} ${colors.left}`}
            >
              {/* Header */}
              <div className="grid auto-rows-min items-start gap-1.5 px-6 pt-6">
                <div className="flex items-start justify-between mb-2">
                  <Icon className={`h-8 w-8 ${colors.text}`} />
                  <div className={colors.text}>
                    {result.status === "ok" ? (
                      <CircleCheckBig className="h-6 w-6" />
                    ) : (
                      <TriangleAlert className="h-6 w-6" />
                    )}
                  </div>
                </div>
                <h4 className="text-base font-medium dark:text-gray-100">
                  {result.title}
                </h4>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <p className={`text-sm mb-4 ${colors.text}`}>
                  {result.message}
                </p>
                <button
                  className={`inline-flex items-center justify-center w-full text-sm font-medium 
                              rounded-md gap-1.5 px-3 py-1.5 text-white transition-all 
                              ${colors.button}`}
                >
                  {result.buttonText}
                </button>
                <p className="text-xs italic text-gray-500 dark:text-gray-400 mt-3 text-center">
                  {result.note}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
