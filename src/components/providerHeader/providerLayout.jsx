import { Outlet } from "react-router-dom";
import ProviderNavBar from "./providerNavBar";



export default function NavigatorHubLayout() {
    return (
        <div >
            <ProviderNavBar />
            <div>
                <Outlet />  {/* ✅ renders the nested route */}
            </div>
        </div>
    );
}
