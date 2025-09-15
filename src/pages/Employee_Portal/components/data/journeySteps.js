import {
  User,
  Users,
  GraduationCap,
  Calendar,
  BarChart3,
  Stethoscope,
} from "lucide-react";

export const journeySteps = [
{
    id: 1,
    title: "My Profile",
    description: "Personal health information complete",
    status: "Complete",
    icon: User,
    completion: 100,
    color: "bg-green-500",
    cardBg: "bg-gray-50 dark:bg-gray-900/30",
    cardBorder: "border-gray-200 dark:border-gray-700",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300",
    headerTitle: "My Profile Complete",
    headerSubtitle: "Step 1 of 6 - Journey Progress",
    headerDesc: "Your personal health information is secure and complete",
    popupContent: {
      sections: [
        {
          title: "Personal Health Profile",
          items: [
            "Basic Information Complete",
            "Emergency Contacts Added",
            "Medical History Recorded",
            "Quick Stats",
            "Profile Completion: 100%",
            "Last Updated: Today",
            "Security Status: ✅ Secure",
          ],
          
        },
      ],
      buttons: [
            { label: "Update Personal Info", link: "/update-info" },
            { label: "Privacy Settings", link: "/privacy-settings" },
          ],
    },
  },
  {
    id: 2,
    title: "Family Risk",
    description: "Family health history assessment",
    status: "In Progress",
    icon: Users,
    completion: 60,
    color: "bg-blue-500",
    cardBg: "bg-gray-50 dark:bg-gray-900/30",
    cardBorder: "border-gray-200 dark:border-gray-700",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300",
    headerTitle: "Family Health History Assessment",
    headerSubtitle: "Step 2 of 6 - Journey Progress",
    headerDesc: "Comprehensive family health history for personalized risk assessment",
    popupContent: {
      sections: [
        {
          title: "Family Health Summary",
          items: [
            "Cancer History",
            "Family assessment",
            "Heart Disease",
            "Cardiovascular risks",
            "Diabetes",
            "Metabolic conditions",
          ],
          
        },
      ],
      buttons: [
            { label: "Complete Assessment", link: "/family-assessment" },
            { label: "View Risk Summary", link: "/risk-summary" },
          ],
    },
  },
  {
    id: 3,
    title: "Health Education",
    description: "Learn about your health risks",
    status: "Available",
    icon: GraduationCap,
    completion: 50,
    color: "bg-yellow-500",
    cardBg: "bg-gray-50 dark:bg-gray-900/30",
    cardBorder: "border-gray-200 dark:border-gray-700",
    badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300",
    headerTitle: "Health Education Progress",
    headerSubtitle: "Step 3 of 6 - Journey Progress",
    headerDesc: "Learn about your health risks and prevention strategies",
    popupContent: {
      sections: [
        {
          title: "Ready to Learn?",
          items: [
            'Click "Open Education Hub" below to access your personalized learning modules',
            "Foundation: Understanding Cancer",
            "Essential knowledge for all participants - Complete",
            "Personalized Modules: Breast Cancer Awareness, Heart Disease Prevention, Diabetes Prevention",
            "Learning Metrics: Modules Completed: 3/5, Time Invested: 45 minutes, Knowledge Score: 92%",
          ],
         
        },
      ],
       buttons: [
            { label: "Open Education Hub", link: "/education-hub" },
            { label: "View Certificates", link: "/certificates" },
          ],
    },
  },
  {
    id: 4,
    title: "Health Screening",
    description: "Schedule your comprehensive screening",
    status: "Available",
    icon: Calendar,
    completion: 20,
    color: "bg-yellow-500",
    cardBg: "bg-gray-50 dark:bg-gray-900/30",
    cardBorder: "border-gray-200 dark:border-gray-700",
    badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300",
    headerTitle: "Health Screening Status",
    headerSubtitle: "Step 4 of 6 - Journey Progress",
    headerDesc: "Comprehensive health screening appointments and results",
    popupContent: {
      sections: [
        {
          title: "Screening Overview",
          items: [
            "Blood Draw Screening: Cancer markers, cholesterol, diabetes indicators",
            "Mammogram Screening: 3D breast cancer detection and imaging",
            "Scheduling Options: Mobile Unit (On-site), Flexible Scheduling, Results in 3-5 days",
          ],
         
        },
      ],
       buttons: [
            { label: "Schedule Screening", link: "/schedule-screening" },
            { label: "Preparation Checklist", link: "/preparation-checklist" },
          ],
    },
  },
  {
    id: 5,
    title: "My Results",
    description: "Review your health screening results",
    status: "Coming Soon",
    icon: BarChart3,
    completion: 0,
    color: "bg-gray-400",
    cardBg: "bg-gray-50 dark:bg-gray-900/30",
    cardBorder: "border-gray-200 dark:border-gray-700",
    badgeColor: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    headerTitle: "My Health Results",
    headerSubtitle: "Step 5 of 6 - Journey Progress",
    headerDesc: "Comprehensive screening results with personalized insights",
    popupContent: {
      sections: [
        {
          title: "Results Overview",
          items: [
            "Cancer Screening: No abnormalities detected",
            "Heart Health: Moderate risk - review needed",
            "Diabetes: Normal blood glucose",
          ],
         
        },
      ],
       buttons: [
            { label: "View Results Dashboard", link: "/results-dashboard" },
            { label: "Download Results", link: "/download-results" },
          ],
    },
  },
  {
    id: 6,
    title: "Expert Follow-up",
    description: "Connect with health experts",
    status: "Coming Soon",
    icon: Stethoscope,
    completion: 0,
    color: "bg-gray-400",
    cardBg: "bg-gray-50 dark:bg-gray-900/30",
    cardBorder: "border-gray-200 dark:border-gray-700",
    badgeColor: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    headerTitle: "Expert Navigator Support",
    headerSubtitle: "Step 6 of 6 - Journey Progress",
    headerDesc: "Connect with health experts for personalized guidance",
    popupContent: {
      sections: [
        {
          title: "Navigator Details",
          items: [
            "Dr. Sarah Chen, MD - Senior Health Navigator",
            "Specializations: Preventive Medicine, Cardiovascular Health, Cancer Prevention",
            "Support Options: Secure messaging available 24/7, Phone consultations by appointment, Follow-up scheduling available",
          ],
          
        },
      ],
      buttons: [
            { label: "Connect with Navigator", link: "/connect-navigator" },
            { label: "Schedule Consultation", link: "/schedule-consultation" },
          ],
    },
  },
];
