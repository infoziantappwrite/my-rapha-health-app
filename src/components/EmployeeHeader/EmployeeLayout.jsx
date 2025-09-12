import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 py-5 p-4 md:p-6 lg:p-0">
      <Navbar />   {/* ✅ employee-specific navbar */}
      <div>
        <Outlet />  {/* ✅ renders the nested route */}
      </div>
    </div>
  );
}
