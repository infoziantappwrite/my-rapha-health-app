import { useNavigate } from "react-router-dom";
import { Shield, LogIn } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleMicrosoftLogin = async () => {
    try {
      // 👉 Placeholder for actual Microsoft login logic
      // For now, we directly navigate to the Employee page
      // Once you integrate Entra ID, navigate only after success
      navigate("/employee");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="flex justify-center">
          <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome to Rapha Health
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-md leading-relaxed">
          A preventive health and wellness platform built with faith-guided
          principles. We believe in proactive care, holistic wellness, and
          privacy-first digital health innovation.
        </p>

        <button
          onClick={handleMicrosoftLogin}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 
          text-white py-3 rounded-md font-semibold transition shadow-md"
        >
          <LogIn className="w-5 h-5" />
          Sign in with Microsoft
        </button>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Secure login powered by Microsoft Entra ID.
        </p>
      </div>
    </div>
  );
}
