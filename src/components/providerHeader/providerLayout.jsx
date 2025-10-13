import { Outlet } from "react-router-dom";
import ProviderNavBar from "./providerNavBar";
import ProviderCard from "./ProviderCard";
import ProviderUtilityRail from "../ProviderUtilityRail";



export default function NavigatorHubLayout() {
    return (
        <div >
           
            <ProviderCard/>
             <ProviderNavBar />
             <ProviderUtilityRail/>
            <div>
                <Outlet />  {/* ✅ renders the nested route */}
            </div>
        </div>
    );
}
