import { Outlet } from "react-router-dom";
import logoFull from "../assets/logo-full.svg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-gray-100">
        
        {/* Header */}
        <div className="flex justify-center py-5 border-b">
          <img src={logoFull} alt="SmartHire" className="h-10" />
        </div>

        {/* Auth Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          <Outlet />
        </div>

      </div>
    </div>
  );
}