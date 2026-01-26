import { Outlet } from "react-router-dom";
import logoFull from "../assets/logo-full.svg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-center py-4 border-b">
          <img src={logoFull} alt="SmartHire" className="h-10" />
        </div>

        {/* CRITICAL: Outlet must exist */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}