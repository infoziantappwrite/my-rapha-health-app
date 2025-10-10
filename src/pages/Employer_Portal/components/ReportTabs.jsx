import React, { useState } from "react";
import {
  ChartColumn,
  Users,
  Target,
  MessageCircle,
  BarChart,
  TriangleAlert,
  DollarSign,
  Eye,
  Download,
  Share2,
  RefreshCw,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const tabs = [
  { id: "all", label: "All Reports", icon: <ChartColumn className="h-4 w-4" /> },
  { id: "population", label: "Population", icon: <Users className="h-4 w-4" /> },
  { id: "outcomes", label: "Outcomes", icon: <Target className="h-4 w-4" /> },
  { id: "navigator", label: "Navigator", icon: <MessageCircle className="h-4 w-4" /> },
  { id: "demographics", label: "Demographics", icon: <BarChart className="h-4 w-4" /> },
  { id: "risk", label: "Risk", icon: <TriangleAlert className="h-4 w-4" /> },
  { id: "cost", label: "Cost", icon: <DollarSign className="h-4 w-4" /> },
];

const reports = {
  population: [
    {
      title: "Population Insights - Engagement",
      date: "Generated 2025-01-15",
      filters: "National, Age 30-65",
      insight:
        "Engagement increased by 22% among younger cohorts, with significant regional differences.",
      stats: { views: 52, exports: 12, lastViewed: "2025-01-18" },
    },
    {
      title: "Health Literacy by Region",
      date: "Generated 2025-01-14",
      filters: "South & West, Age 18+",
      insight:
        "Health literacy programs improved knowledge scores by 15%, with strongest gains in rural populations.",
      stats: { views: 40, exports: 9, lastViewed: "2025-01-17" },
    },
    {
      title: "Preventive Checkup Trends",
      date: "Generated 2025-01-09",
      filters: "Nationwide, FY 2024–25",
      insight:
        "Preventive checkups rose 28% after awareness campaigns. Female participation outpaced male by 12%.",
      stats: { views: 33, exports: 6, lastViewed: "2025-01-14" },
    },
  ],

  outcomes: [
    {
      title: "Screening Outcomes - All Diseases",
      date: "Generated 2025-01-20",
      filters: "All Locations, All Diseases, Q1 2025",
      insight:
        "Early detection rate improved by 18%. Heart disease screening shows highest ROI.",
      stats: { views: 28, exports: 8, lastViewed: "2025-01-19" },
    },
    {
      title: "Cancer Screening Effectiveness",
      date: "Generated 2025-01-18",
      filters: "Urban Centers, Cancer, FY 2024–25",
      insight:
        "Cancer screenings led to 12% earlier-stage diagnoses compared to last year.",
      stats: { views: 36, exports: 10, lastViewed: "2025-01-19" },
    },
    {
      title: "Diabetes Risk Assessments",
      date: "Generated 2025-01-10",
      filters: "All States, Age 40+, Jan 2025",
      insight:
        "Over 24% of participants were flagged high-risk. Rural areas showed highest growth.",
      stats: { views: 21, exports: 4, lastViewed: "2025-01-15" },
    },
  ],

  navigator: [
    {
      title: "Navigator Assistant - Usage Trends",
      date: "Generated 2025-01-12",
      filters: "All Navigators, Jan 2025",
      insight: "Navigator queries spiked by 35% after program changes.",
      stats: { views: 40, exports: 5, lastViewed: "2025-01-16" },
    },
    {
      title: "Top FAQs - Navigator",
      date: "Generated 2025-01-08",
      filters: "Most Asked, Dec 2024–Jan 2025",
      insight:
        "‘How to schedule a screening?’ was the #1 query. Appointment rescheduling grew 18%.",
      stats: { views: 30, exports: 3, lastViewed: "2025-01-15" },
    },
    {
      title: "Navigator Satisfaction Scores",
      date: "Generated 2025-01-05",
      filters: "All Programs, Q4 2024",
      insight:
        "User satisfaction hit 87%. Response times improved by 22% compared to Q3.",
      stats: { views: 25, exports: 4, lastViewed: "2025-01-12" },
    },
  ],

  demographics: [
    {
      title: "Age Distribution Analysis",
      date: "Generated 2025-01-11",
      filters: "Nationwide, FY 2024–25",
      insight:
        "Participants aged 40–55 make up 42% of screenings, driving the highest compliance rates.",
      stats: { views: 38, exports: 7, lastViewed: "2025-01-16" },
    },
    {
      title: "Gender-Based Participation",
      date: "Generated 2025-01-07",
      filters: "Urban vs Rural, Jan 2025",
      insight:
        "Female participation is 12% higher in preventive programs, especially in rural zones.",
      stats: { views: 29, exports: 6, lastViewed: "2025-01-14" },
    },
    {
      title: "Regional Demographic Shifts",
      date: "Generated 2025-01-03",
      filters: "North & East, Dec 2024",
      insight:
        "Migration patterns led to a 9% increase in young adult screenings in metro regions.",
      stats: { views: 20, exports: 3, lastViewed: "2025-01-10" },
    },
  ],

  risk: [
    {
      title: "High-Risk Population Identification",
      date: "Generated 2025-01-13",
      filters: "Age 50+, Chronic Conditions",
      insight:
        "15% of participants fall into the high-risk group. Early intervention programs recommended.",
      stats: { views: 42, exports: 11, lastViewed: "2025-01-17" },
    },
    {
      title: "Cardiovascular Risk Analysis",
      date: "Generated 2025-01-09",
      filters: "Male, Age 45–65, Urban",
      insight:
        "Cardiovascular risks increased by 14% compared to last year. Lifestyle changes critical.",
      stats: { views: 31, exports: 5, lastViewed: "2025-01-13" },
    },
    {
      title: "Chronic Disease Risk Map",
      date: "Generated 2025-01-04",
      filters: "State-Level, FY 2024–25",
      insight:
        "Three states show 20%+ higher prevalence of diabetes and hypertension risk factors.",
      stats: { views: 27, exports: 6, lastViewed: "2025-01-09" },
    },
  ],

  cost: [
    {
      title: "Program Cost Savings",
      date: "Generated 2025-01-19",
      filters: "All Programs, Q1 2025",
      insight:
        "Preventive screenings saved an estimated $2.4M in downstream treatment costs.",
      stats: { views: 44, exports: 12, lastViewed: "2025-01-20" },
    },
    {
      title: "Per-Screening Cost Analysis",
      date: "Generated 2025-01-14",
      filters: "Urban vs Rural, FY 2024–25",
      insight:
        "Urban screenings cost 18% less per patient due to higher throughput efficiencies.",
      stats: { views: 34, exports: 8, lastViewed: "2025-01-18" },
    },
    {
      title: "Cost vs Outcome Efficiency",
      date: "Generated 2025-01-06",
      filters: "National Benchmark, FY 2024",
      insight:
        "Heart disease screenings deliver the best cost-to-impact ratio, outperforming diabetes by 1.7x.",
      stats: { views: 26, exports: 5, lastViewed: "2025-01-11" },
    },
  ],
};


const ReportCard = ({ report }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl hover:shadow-lg transition-all duration-200 border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-500">
      {/* Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{report.title}</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">{report.date}</div>
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-50 dark:bg-gray-700 rounded flex items-center justify-center">
            <ChartColumn className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-4">
        <div className="text-xs bg-gray-50 dark:bg-gray-700 p-2 rounded">
          <strong>Filters:</strong> {report.filters}
        </div>
        <div className="text-xs bg-emerald-50 dark:bg-emerald-900 p-3 rounded border border-emerald-200 dark:border-emerald-700 flex items-start space-x-2">
          <div className="flex space-x-1">
            <Sparkles className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
            <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-xs text-emerald-800 dark:text-emerald-200">{report.insight}</div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-3">
            <span>{report.stats.views} views</span>
            <span>{report.stats.exports} exports</span>
          </div>
          <span>Last viewed {report.stats.lastViewed}</span>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 inline-flex items-center justify-center text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-md px-3 h-8">
            <Eye className="h-3 w-3 mr-2" /> View Full Report
          </button>
          <button className="border border-gray-300 dark:border-gray-600 rounded-md px-3 h-8 flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
            <Download className="h-3 w-3" />
          </button>
          <button className="border border-gray-300 dark:border-gray-600 rounded-md px-3 h-8 flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
            <Share2 className="h-3 w-3" />
          </button>
          <button className="border border-gray-300 dark:border-gray-600 rounded-md px-3 h-8 flex items-center hover:bg-gray-100 dark:hover:bg-gray-700">
            <RefreshCw className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ReportTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const visibleReports =
    activeTab === "all"
      ? Object.values(reports).flat()
      : reports[activeTab] || [];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tabs */}
      <div
        role="tablist"
        className="bg-gray-100 dark:bg-gray-700 h-10 rounded-xl p-[3px] grid grid-cols-7 gap-1 mb-6"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium rounded-lg border transition
              ${
                activeTab === tab.id
                  ? "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-sm"
                  : "border-transparent hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
          >
            {tab.icon}
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleReports.map((report, i) => (
          <ReportCard key={i} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportTabs;
