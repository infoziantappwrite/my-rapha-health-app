import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  
  return (
    <div>
      <Navbar />  
      <div>
        <Outlet />  {/* ✅ renders the nested route */}
      </div>
    </div>
  );
}
