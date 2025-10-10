import React from "react";
import { FileText } from "lucide-react";
import AdminHeader from "./Components/AdminHeader"; // adjust path if needed
import CMSDashboardTable from "./Components/CMSDashboardTable";

const AdminContent = () => {
  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"      >
      <AdminHeader
        icon={<FileText className="h-6 w-6 text-white" />}
        title="Content Management"
        subtitle="Govern content modules, versions, and publication lifecycle with comprehensive oversight."
      />
      <CMSDashboardTable/>
    </div>
  );
};

export default AdminContent;
