import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";
import NavBarLocationTiming from "./NavBarLocationTiming";

export default function EmployerLayout() {
    return (
        <div >
            <NavBarLocationTiming />
            <EmployerNavbar />
            <div className="max-w-7xl mx-auto">
                <Outlet />  {/* ✅ renders the nested route */}
            </div>
        </div>
    );
}
