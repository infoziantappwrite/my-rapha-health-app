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
import Navbar from "./components/EmployeeHeader/Navbar";
import EmployeeLayout from "./components/EmployeeHeader/EmployeeLayout";
import EmployerLayout from "./components/EmployerHeader/EmployerLayout";
import NavigatorHubLayout from "./components/NavigatorHub/NavigatorHubLayout";
import ProviderLayout from "./components/providerHeader/providerLayout";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* ✅ Navbar is common */}
        <SideBar />


        <Routes>

          {/* Redirect root to employee portal by default */}
          <Route path="/" element={<MyJourney />} />

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
              <Route index element={<div>Employer Dashboard</div>} />
            <Route path="insights" element={<div>AI Insights Page</div>} />
            <Route path="reports" element={<div>Reports Page</div>} />
            <Route path="messages" element={<div>Message Navigator Page</div>} />
          </Route>

          <Route path="/navigator" element={<NavigatorHubLayout />}>
              <Route index element={<div>Navigator Dashboard</div>} />
            <Route path="insights" element={<div>AI Insights Page</div>} />
            <Route path="reports" element={<div>Reports Page</div>} />
            <Route path="messages" element={<div>Message Navigator Page</div>} />
          </Route>

          <Route path="/provider" element={<ProviderLayout />}>
              <Route index element={<div>Provider Dashboard</div>} />
            <Route path="insights" element={<div>AI Insights Page</div>} />
            <Route path="reports" element={<div>Reports Page</div>} />
            <Route path="messages" element={<div>Message Navigator Page</div>} />
          </Route>

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
}