import { Outlet } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <PageTransition>
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <span className="text-3xl">◆</span> SmartHire
            </h1>
          </div>
          <Outlet />
        </div>
      </PageTransition>
    </div>
  );
}