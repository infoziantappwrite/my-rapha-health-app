import React from "react";
import { ChevronRight } from "lucide-react";

const DashboardCard = ({ title, children, onClick, className }) => {
  return (
    <div
      className={`bg-white text-gray-800 flex flex-col gap-4 rounded-lg cursor-pointer 
                 transition-all hover:shadow-md hover:scale-[1.02] border border-gray-300 hover:border-emerald-200 hover:border-2 ${className}`}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h4 className="text-base font-semibold">{title}</h4>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </div>

      {/* Body */}
      <div className="px-4 pb-4 text-sm">{children}</div>
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div>
      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        
        {/* Card 1 */}
        <DashboardCard
          title="Screening Progress Overview"
          onClick={() => console.log("Go to Screening Progress")}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-emerald-600">85%</div>
              <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-emerald-100 text-emerald-800">
                +15% vs target
              </span>
            </div>
            <p className="text-xs text-gray-500">1196 of 1400 screenings completed</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-1 text-center bg-blue-50 rounded">
                <div className="font-medium text-blue-700">234</div>
                <div className="text-blue-600">Breast Cancer</div>
              </div>
              <div className="p-1 text-center bg-green-50 rounded">
                <div className="font-medium text-green-700">210</div>
                <div className="text-green-600">Prostate Cancer</div>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Card 2 */}
        <DashboardCard
          title="Employee Engagement Funnel"
          onClick={() => console.log("Go to Engagement Funnel")}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-emerald-600">59%</div>
              <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-yellow-100 text-yellow-800">
                287 need Navigator
              </span>
            </div>
            <p className="text-xs text-gray-500">Full journey completion rate</p>

            {[
              { label: "Profile Complete", value: "100%" },
              { label: "Family Risk Entered", value: "96%" },
              { label: "Education Viewed", value: "86%" },
              { label: "Screening Scheduled", value: "72%" },
              { label: "Results Reviewed", value: "64%" },
              { label: "Follow-Up Complete", value: "59%" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-24 text-[11px] font-medium">{item.label}</div>
                <div className="h-2 bg-emerald-500 rounded" style={{ width: item.value }}></div>
                <div className="text-[11px] w-8">{item.value}</div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Card 3 */}
        <DashboardCard
          title="At-Risk Population Summary"
          onClick={() => console.log("Go to At-Risk Summary")}
        >
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-1 text-[11px]">
              <div className="text-center p-1 bg-green-50 rounded">
                <div className="font-medium text-green-700">756</div>
                <div className="text-green-600">Low Risk</div>
              </div>
              <div className="text-center p-1 bg-yellow-50 rounded">
                <div className="font-medium text-yellow-700">462</div>
                <div className="text-yellow-600">Moderate</div>
              </div>
              <div className="text-center p-1 bg-red-50 rounded">
                <div className="font-medium text-red-700">182</div>
                <div className="text-red-600">High Risk</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">182 high-risk cases actively managed</p>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span>Cancer Risk: 78 cases</span>
                <span className="text-emerald-600">89% follow-up rate</span>
              </div>
              <div className="flex justify-between">
                <span>Cardiovascular: 104 cases</span>
                <span className="text-emerald-600">94% follow-up rate</span>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Card 4 */}
        <DashboardCard
          title="Navigator Team Activity"
          onClick={() => console.log("Go to Navigator Activity")}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-emerald-600">4.8/5.0</div>
              <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-emerald-100 text-emerald-800">
                Excellent
              </span>
            </div>
            <p className="text-xs text-gray-500">Average satisfaction score</p>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <div className="font-medium text-emerald-600">338</div>
                <div className="text-[11px] text-gray-500">Active Cases</div>
              </div>
              <div>
                <div className="font-medium text-emerald-600">1.6 hrs</div>
                <div className="text-[11px] text-gray-500">Avg Response</div>
              </div>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span>Dr. Sarah Chen</span>
                <span className="text-emerald-600">78 active cases</span>
              </div>
              <div className="flex justify-between">
                <span>Dr. Lisa Park</span>
                <span className="text-yellow-600">104 active cases</span>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Card 5 - Timeline */}
        <DashboardCard
          title="Employer Milestones + Timeline"
          className="lg:col-span-2"
          onClick={() => console.log("Go to Milestones")}
        >
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="text-center p-2 bg-emerald-50 rounded">
                <div className="text-lg font-bold text-emerald-600">Phase 1</div>
                <div className="text-xs font-medium">STL HQ Complete</div>
                <div className="text-[11px] text-gray-500">687 employees</div>
              </div>
              <div className="text-center p-2 bg-yellow-50 rounded border border-yellow-200">
                <div className="text-lg font-bold text-yellow-600">Phase 2</div>
                <div className="text-xs font-medium">BJC & Mobile</div>
                <div className="text-[11px] text-gray-500">72% complete</div>
              </div>
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">Phase 3</div>
                <div className="text-xs font-medium">Full Coverage</div>
                <div className="text-[11px] text-gray-500">Planned Mar 1</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Next: Hire additional Navigators and optimize mobile unit scheduling
            </p>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default DashboardLayout;
