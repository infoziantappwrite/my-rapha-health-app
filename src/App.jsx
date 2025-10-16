import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Employee Portal Pages
import MyJourney from "./pages/Employee_Portal/MyJourney";
import HealthEducation from "./pages/Employee_Portal/HealthEducation";
import Screening from "./pages/Employee_Portal/Screening";
import DocumentVault from "./pages/Employee_Portal/DocumentVault";
import Messages from "./pages/Employee_Portal/Messages";
import MyResult from "./pages/Employee_Portal/MyResult";

// ✅ Employer Portal Pages (placeholder)

// ✅ Under Development Page
import UnderDevelopment from "./pages/UnderDevelopment";
import SideBar from "./components/SideBar";
import EmployeeLayout from "./components/EmployeeHeader/EmployeeLayout";
import EmployerLayout from "./components/EmployerHeader/EmployerLayout";
import NavigatorHubLayout from "./components/NavigatorHub/NavigatorHubLayout";
import ProviderLayout from "./components/providerHeader/providerLayout";


import EmployeerDashboard from "./pages/Employer_Portal/EmployeerDashboard";
import Reports from "./pages/Employer_Portal/Reports";
import Aiinsights from "./pages/Employer_Portal/Aiinsights";
import MessageNavigatorParent from "./pages/Employer_Portal/MessageNavigatorParent";
import NavigatorDashboard from "./pages/Navigator_Portal/NavigatorDashboard";

import Queue from "./pages/Provider_Portal/Queue";
import Samples from "./pages/Provider_Portal/Samples";
import FollowUp from "./pages/Provider_Portal/FollowUp";
import AppointmentDashboard from "./pages/Provider_Portal/AppointmentDashboard";
import SettingsDashboard from "./pages/Provider_Portal/SettingsDashboard";

import AdminHeader from "./components/AdminHeader/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminEmployers from "./pages/Admin/AdminEmployers";
import AdminContent from "./pages/Admin/AdminContent";
import AdminLogs from "./pages/Admin/AdminLogs";
import AdminCompliance from "./pages/Admin/AdminCompliance";
import AdminAi from "./pages/Admin/AdminAi";
import AdminSystem from "./pages/Admin/AdminSystem";
import ScreeningProgress from "./pages/Employer_Portal/components/ScreeningProgress";
import RiskSummary from "./pages/Employer_Portal/components/RiskSummary";
import NavigatorActivity from "./pages/Employer_Portal/components/NavigatorActivity";
import EmployerMilestones from "./pages/Employer_Portal/components/EmployerMilestones";
import EmployeeEngagement from "./pages/Employer_Portal/components/EmployeeEngagement";
import Results from "./pages/Provider_Portal/Results";
import Case from "./pages/Provider_Portal/Case";
import TablePage from "./pages/Navigator_Portal/compoents/secound/TablePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* ✅ Navbar is common */}
        <SideBar />


        <Routes>

          {/* Redirect root to employee portal by default */}
          <Route path="/" element={<EmployeeLayout />} >
            <Route index element={<MyJourney />} /> {/* /employee */}
          </Route>

          <Route path="/employee" element={<EmployeeLayout />}>

            <Route index element={<MyJourney />} /> {/* /employee */}
            <Route path="education" element={<HealthEducation />} /> {/* /employee/education */}
            <Route path="screening" element={<Screening />} /> {/* /employee/screening */}
            <Route path="documents" element={<DocumentVault />} /> {/* /employee/documents */}
            <Route path="messages" element={<Messages />} /> {/* /employee/messages */}
            <Route path="results" element={<MyResult />} /> {/* /employee/results */}
          </Route>

          {/* Employer Portal Routes */}
          <Route path="/employer" element={<EmployerLayout />}>
            <Route index element={<EmployeerDashboard />} />
            <Route path="insights" element={<Aiinsights />} />
            <Route path="reports" element={<Reports />} />
            <Route path="messages" element={<MessageNavigatorParent />} />
            <Route path="screeningprogress" element={<ScreeningProgress/>} /> {/* /admin/ScreeningProgress */}
            <Route path="risksummary" element={<RiskSummary />} /> {/* /admin/RiskSummary */}
            <Route path="navigatoractivity" element={<NavigatorActivity />} /> {/* /admin/NavigatorActivity */}
            <Route path="employermilestones" element={<EmployerMilestones />} /> {/* /admin/UnderDevelopment */}
            <Route path="employeeengagement" element={<EmployeeEngagement />} /> {/* /admin/UnderDevelopment */}
          </Route>

          <Route path="/navigator" element={<NavigatorHubLayout />}>
            <Route index element={<NavigatorDashboard />} />
            <Route path="table/:cohort" element={<TablePage />} />
          </Route>

          <Route path="/provider" element={<ProviderLayout />}>
            <Route index element={<Queue />} />
            <Route path="samples" element={<Samples />} />
            <Route path="follow-up" element={<FollowUp />} />
             <Route path="results" element={<Results/>} />
              <Route path="cases" element={<Case />} />

            <Route path="calendar" element={<AppointmentDashboard />} />
            <Route path="settings" element={<SettingsDashboard />} />
          </Route>

          <Route path="/admin" element={<AdminHeader />}>
            <Route index element={<UnderDevelopment />} /> {/* /admin */}
            <Route path="dashboard" element={<AdminDashboard/>} />

            {/* Existing routes */}
            <Route path="users" element={<AdminUsers/>} /> {/* /admin/users */}
            <Route path="employers" element={<AdminEmployers/>} /> {/* /admin/employers */}

            {/* New routes */}
            <Route path="content" element={<AdminContent />} /> {/* /admin/content */}
            <Route path="ai" element={<AdminAi/>} /> {/* /admin/ai */}
            <Route path="compliance" element={<AdminCompliance />} /> {/* /admin/compliance */}
            <Route path="logs" element={<AdminLogs />} /> {/* /admin/logs */}
            <Route path="system" element={<AdminSystem />} /> {/* /admin/system */}
            
          </Route>


          {/* Catch-all for undefined routes */}
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
}
