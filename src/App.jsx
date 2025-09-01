import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

// ✅ Employee Portal Pages
import MyJourney from "./pages/Employee_Portal/MyJourney";
import HealthEducation from "./pages/Employee_Portal/HealthEducation";
import Screening from "./pages/Employee_Portal/Screening";
import DocumentVault from "./pages/Employee_Portal/DocumentVault";
import Messages from "./pages/Employee_Portal/Messages";

// ✅ Under Development Page
import UnderDevelopment from "./pages/UnderDevelopment";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* ✅ Navbar is common */}
        <Header />

        <Routes>
          <Route path="/" element={<MyJourney />} />
          <Route path="/education" element={<HealthEducation />} />
          <Route path="/screening" element={<Screening />} />
          <Route path="/results" element={<UnderDevelopment />} />
          <Route path="/documents" element={<DocumentVault />} />
          <Route path="/messages" element={<Messages />} />

          {/* 🚧 Catch-all for undefined routes */}
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
}
