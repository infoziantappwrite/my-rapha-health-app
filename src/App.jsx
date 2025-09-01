import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* ✅ Navbar is common */}
        <Header />
        
        <Routes>
          <Route path="/" element={<div>My Journey Content</div>} />
          <Route path="/education" element={<div>Health Education Content</div>} />
          <Route path="/screening" element={<div>Screening Content</div>} />
          <Route path="/results" element={<div>My Results Content</div>} />
          <Route path="/documents" element={<div>Documents Content</div>} />
          <Route path="/messages" element={<div>Messages Content</div>} />
        </Routes>
      </div>
    </Router>
  );
}