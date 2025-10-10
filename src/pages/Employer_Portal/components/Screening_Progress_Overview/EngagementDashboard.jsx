import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Info, X, Funnel, Brain, FileText, ChevronDown, Target } from "lucide-react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const NotificationToast = ({ title, content, onClose }) => (
    <div className="fixed top-5 right-5 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg p-4 flex flex-col space-y-2 z-50">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                <h4 className="text-sm font-semibold">{title}</h4>
            </div>
            <button onClick={onClose}>
                <X className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
            </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
    </div>
);

const EngagementDashboard = () => {
    const [filters, setFilters] = useState({
        timePeriod: "Last 90 Days",
        site: "All Sites",
        department: "All Departments",
        riskLevel: "All Risk Levels",
    });

    const [showToast, setShowToast] = useState(null);
    const [showAI, setShowAI] = useState(true); // toggle AI forecasting

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const chartData = {
        labels: ["Current", "30 Days", "60 Days", "90 Days"],
        datasets: [
            { label: "Education Viewed %", data: [85, 86, 87, 88], borderColor: "red", borderDash: [5, 5], tension: 0.3 },
            { label: "Final Completion %", data: [55, 60, 65, 70], borderColor: "blue", borderDash: [5, 5], tension: 0.3 },
            { label: "Screening Scheduled %", data: [70, 75, 80, 85], borderColor: "orange", borderDash: [5, 5], tension: 0.3 },
        ],
    };

    const chartOptions = { responsive: true, plugins: { legend: { position: "bottom" } }, scales: { y: { min: 40, max: 100 } } };

    const filterOptions = {
        timePeriod: ["Last 30 Days", "Last 60 Days", "Last 90 Days"],
        site: ["All Sites", "Site A", "Site B"],
        department: ["All Departments", "HR", "Finance", "Engineering"],
        riskLevel: ["All Risk Levels", "Low", "Medium", "High"],
    };

    return (
        <div>
            {showToast && <NotificationToast title={showToast.title} content={showToast.content} onClose={() => setShowToast(null)} />}

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg mb-8">
                {/* Card Header */}
                <div className="grid auto-rows-min items-start gap-1.5 px-6 pt-6 border-b border-gray-300 dark:border-gray-700 pb-6">
                    <div className="flex items-center justify-between">
                        <h4 className="flex items-center space-x-2 text-lg font-semibold">
                            <Funnel className="h-5 w-5 text-blue-600" />
                            <span>Interactive Filters & Controls</span>
                        </h4>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setShowAI(!showAI)}
                                className="inline-flex items-center gap-1.5 text-sm font-medium h-8 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
                            >
                                <Brain className="h-3 w-3 text-purple-600" />
                                {showAI ? "Hide AI Forecasting" : "Show AI Forecasting"}
                            </button>
                            <button
                                onClick={() => setShowToast({ title: "Export CSV", content: "Exporting filtered data as CSV." })}
                                className="inline-flex items-center gap-1.5 text-sm font-medium h-8 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
                            >
                                <FileText className="h-3 w-3" />
                                Export CSV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {Object.keys(filters).map((key) => (
                            <div key={key} className="flex flex-col">
                                <label className="text-sm font-medium mb-2">{key.replace(/([A-Z])/g, " $1")}</label>
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="flex justify-between items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 w-full"
                                    >
                                        {filters[key]}
                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                    </button>
                                    {/* Simple dropdown simulation */}
                                    <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg hidden group-hover:block">
                                        {filterOptions[key].map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => handleFilterChange(key, option)}
                                                className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Apply Filters Button */}
                        <div className="flex items-end">
                            <button
                                onClick={() => setShowToast({ title: "Filters Applied", content: "Filters have been successfully applied." })}
                                className="flex items-center justify-center gap-2 w-full h-9 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
                            >
                                <Target className="h-4 w-4" />
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showAI && (
                <>      {/* Engagement Chart */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-4 mb-4">
                        <div className="flex justify-between mb-2 items-center">
                            <h3 className="font-semibold text-lg">Projected Engagement Trends</h3>
                            <button
                                onClick={() => setShowToast({ title: "Export Forecast", content: "Exporting AI-powered forecast as CSV." })}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md text-sm"
                            >
                                Export Forecast
                            </button>
                        </div>
                        <Line data={chartData} options={chartOptions} />
                    </div>

                    {/* Alerts */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1 bg-red-50 dark:bg-red-900 border border-red-300 dark:border-red-700 p-4 rounded-md text-red-800 dark:text-red-200">
                            <strong>Predicted Risk Alert:</strong> Step 3 drop-off increase predicted due to low Navigator availability in weeks 3-4. Risk of 5% additional education abandonment.
                        </div>
                        <div className="flex-1 bg-yellow-50 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 p-4 rounded-md text-yellow-800 dark:text-yellow-200">
                            <strong>Churn Risk Warning:</strong> High churn risk for employees &gt;45 days stalled. 23 employees require immediate Navigator intervention.
                        </div>
                    </div>

                    {/* AI Strategic Recommendations */}

                    <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-md p-4">
                        <h3 className="font-semibold mb-2">AI Strategic Recommendations</h3>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                            <li>
                                <strong>Immediate Action (Next 7 Days):</strong> Deploy additional Navigator capacity for Step 3 education support. Expected impact: +18% Step 3→4 conversion rate.
                            </li>
                            <li>
                                <strong>Strategic Optimization (30 Days):</strong> Implement mobile-first education modules and gamification features. Projected 12% overall completion rate improvement.
                            </li>
                            <li>
                                <strong>Long-term Enhancement (90 Days):</strong> Establish predictive analytics system for early drop-off identification. Target: 85%+ completion rate across all cohorts.
                            </li>
                        </ol>
                    </div>
                </>

            )}
        </div>
    );
};

export default EngagementDashboard;
