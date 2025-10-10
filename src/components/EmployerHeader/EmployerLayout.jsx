import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";
import NavBarLocationTiming from "./NavBarLocationTiming";
import ComplianceBanner from "../../pages/Employer_Portal/components/ComplianceBanner";

export default function EmployerLayout() {
    return (
        <div >
            <NavBarLocationTiming />
            <EmployerNavbar />
            <div className="max-w-7xl mx-auto">
                <Outlet />  {/* ✅ renders the nested route */}
            </div>
            <ComplianceBanner/>
        </div>
    );
}
