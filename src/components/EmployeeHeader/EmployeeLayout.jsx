import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />   {/* ✅ employee-specific navbar */}
      <div>
        <Outlet />  {/* ✅ renders the nested route */}
      </div>
    </div>
  );
}
