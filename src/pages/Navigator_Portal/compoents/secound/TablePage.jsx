import React from "react";
import { useParams } from "react-router-dom";
import Table from "../Table";
import { ArrowUp, ArrowDown, ArrowRight } from "lucide-react";

const TablePage = () => {
  const { cohort } = useParams();

const allData = [
  { employee: "Sarah Johnson", employer: "Tech Solutions", riskScore: 9.2, condition: "Diabetes", lastContact: "2024-01-15", navigator: "Lisa Rodriguez", trend: "up", status: "Active", riskLabel: "High Risk" },
  { employee: "Mike Chen", employer: "Acme Corp", riskScore: 8.7, condition: "Heart Disease", lastContact: "2024-01-14", navigator: "Sarah Chen", trend: "down", status: "Critical", riskLabel: "Medium Risk" },
  { employee: "Emily Davis", employer: "Health Inc", riskScore: 9.5, condition: "Cancer Risk", lastContact: "2024-01-13", navigator: "Mike Johnson", trend: "right", status: "Review", riskLabel: "High Risk" },
  { employee: "James Wilson", employer: "Global Tech", riskScore: 8.9, condition: "Hypertension", lastContact: "2024-01-12", navigator: "Lisa Rodriguez", trend: "up", status: "Monitor", riskLabel: "Low Risk" },
  { employee: "Olivia Brown", employer: "Innovatech", riskScore: 7.8, condition: "Obesity", lastContact: "2024-01-11", navigator: "Sarah Chen", trend: "down", status: "Review", riskLabel: "Medium Risk" },
  { employee: "Liam Smith", employer: "NextGen Solutions", riskScore: 9.1, condition: "Diabetes", lastContact: "2024-01-10", navigator: "Mike Johnson", trend: "up", status: "Active", riskLabel: "High Risk" },
  { employee: "Unknown Employee 1", employer: "Unknown Corp", riskScore: 7.0, condition: "Unknown", lastContact: "2024-02-11", navigator: "Unknown Navigator", trend: "right", status: "Unknown", riskLabel: "Unknown" },
  { employee: "Unknown Employee 2", employer: "Unknown Inc", riskScore: 8.0, condition: "Unknown", lastContact: "2024-02-12", navigator: "Unknown Navigator", trend: "up", status: "Unknown", riskLabel: "Unknown" },

  // Existing new data
  { employee: "Daniel Kim", employer: "Innovatech", riskScore: 7.5, condition: "Hypertension", lastContact: "2024-02-01", navigator: "Lisa Rodriguez", trend: "right", status: "Review", riskLabel: "Low Risk" },
  { employee: "Ella White", employer: "HealthTech", riskScore: 8.9, condition: "Obesity", lastContact: "2024-02-02", navigator: "Sarah Chen", trend: "up", status: "Active", riskLabel: "Medium Risk" },
  { employee: "Oliver Martinez", employer: "NextGen Solutions", riskScore: 9.7, condition: "Diabetes", lastContact: "2024-02-03", navigator: "Mike Johnson", trend: "up", status: "Active", riskLabel: "High Risk" },
  { employee: "Grace Lee", employer: "Acme Corp", riskScore: 7.3, condition: "Asthma", lastContact: "2024-02-04", navigator: "Lisa Rodriguez", trend: "down", status: "Review", riskLabel: "Low Risk" },
  { employee: "Lucas Brown", employer: "Tech Solutions", riskScore: 8.2, condition: "Heart Disease", lastContact: "2024-02-05", navigator: "Sarah Chen", trend: "right", status: "Monitor", riskLabel: "Medium Risk" },
  { employee: "Chloe Wilson", employer: "Global Tech", riskScore: 9.0, condition: "Cancer Risk", lastContact: "2024-02-06", navigator: "Mike Johnson", trend: "up", status: "Active", riskLabel: "High Risk" },
  { employee: "Ethan Davis", employer: "Health Inc", riskScore: 8.4, condition: "High Cholesterol", lastContact: "2024-02-07", navigator: "Lisa Rodriguez", trend: "down", status: "Review", riskLabel: "Medium Risk" },
  { employee: "Lily Thompson", employer: "Innovatech", riskScore: 7.6, condition: "Obesity", lastContact: "2024-02-08", navigator: "Sarah Chen", trend: "right", status: "Monitor", riskLabel: "Low Risk" },
  { employee: "Mason Lee", employer: "NextGen Solutions", riskScore: 9.2, condition: "Diabetes", lastContact: "2024-02-09", navigator: "Mike Johnson", trend: "up", status: "Active", riskLabel: "High Risk" },
  { employee: "Avery Martinez", employer: "TechSolutions", riskScore: 8.1, condition: "Hypertension", lastContact: "2024-02-10", navigator: "Lisa Rodriguez", trend: "right", status: "Monitor", riskLabel: "Low Risk" },
];


  // Map status color based on risk label
  const getStatusBadge = (riskLabel) => {
    switch (riskLabel) {
      case "High Risk":
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white">High</span>;
      case "Medium Risk":
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Medium</span>;
      case "Low Risk":
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Low</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">Unknown</span>;
    }
  };

  // Filter by cohort and render trend/status
  const data = allData
    .filter(row => row.riskLabel === cohort)
    .map(row => ({
      ...row,
      trend: row.trend === "up" ? <ArrowUp className="w-4 h-4 text-green-600" />
             : row.trend === "down" ? <ArrowDown className="w-4 h-4 text-red-600" 
             /> : <ArrowRight className="w-4 h-4 text-gray-500" />,
      status: getStatusBadge(row.riskLabel)
    }));

  const columns = [
    { key: "employee", label: "EMPLOYEE" },
    { key: "employer", label: "EMPLOYER" },
    { key: "riskScore", label: "RISK SCORE" },
    { key: "condition", label: "PRIMARY CONDITION" },
    { key: "lastContact", label: "LAST CONTACT" },
    { key: "navigator", label: "NAVIGATOR" },
    { key: "trend", label: "TREND" },
    { key: "status", label: "STATUS" },
    { key: "actions", label: "ACTIONS", type: "action" },
  ];

  return <Table data={data} columns={columns} title={`Risk Cohort — ${cohort}`} />;
};

export default TablePage;
