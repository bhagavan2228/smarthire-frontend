import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"; // ✅ IMPORT
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 px-4">
      <img
  src={logo}
  alt="SmartHire Logo"
  className="h-8 w-8 transition duration-300 hover:scale-105 hover:drop-shadow-lg"
/>
        <span className="text-lg font-bold tracking-wide">
          SmartHire
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {user?.role === "RECRUITER" && (
          <NavLink to="/recruiter" className="px-4 py-2 block rounded-md">
            Dashboard
          </NavLink>
        )}
      </nav>
    </aside>
  );
}