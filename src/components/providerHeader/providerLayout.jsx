import { Outlet } from "react-router-dom";
import ProviderNavBar from "./providerNavBar";



export default function NavigatorHubLayout() {
    return (
        <div className="max-w-7xl mx-auto ">
            <ProviderNavBar />
            <div className="p-4">
                <Outlet />  {/* ✅ renders the nested route */}
            </div>
        </div>
    );
}
