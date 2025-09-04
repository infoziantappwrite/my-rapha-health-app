import { Outlet } from "react-router-dom";
import NavigatorNavBar from "./NavigatorNavBar";


export default function NavigatorHubLayout() {
    return (
        <div>
            <div className="p-4">
                <Outlet />  {/* ✅ renders the nested route */}
            </div>
        </div>
    );
}
