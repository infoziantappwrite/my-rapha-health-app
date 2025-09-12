import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";
import NavBarLocationTiming from "./NavBarLocationTiming";

export default function EmployerLayout() {
    return (
        <div className="max-w-6xl mx-auto space-y-6 py-5 p-4 md:p-6 lg:p-0">
            <NavBarLocationTiming />
            <EmployerNavbar />
            <div>
                <Outlet />  {/* ✅ renders the nested route */}
            </div>
        </div>
    );
}
