import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <div>
      <Navbar />   {/* ✅ employee-specific navbar */}
      <div className="p-4">
        <Outlet />  {/* ✅ renders the nested route */}
      </div>
    </div>
  );
}
