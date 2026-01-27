import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col">
      
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-blue-600">
        <img src={logo} alt="SmartHire" className="h-8" />
        <span className="text-lg font-bold tracking-wide">SmartHire</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
        <NavLink
          to="/recruiter"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition
            ${isActive ? "bg-blue-600" : "hover:bg-blue-800"}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/post-job"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition
            ${isActive ? "bg-blue-600" : "hover:bg-blue-800"}`
          }
        >
          Post Job
        </NavLink>

        <NavLink
          to="/manage-jobs"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition
            ${isActive ? "bg-blue-600" : "hover:bg-blue-800"}`
          }
        >
          Manage Jobs
        </NavLink>

        <NavLink
          to="/view-applicants"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition
            ${isActive ? "bg-blue-600" : "hover:bg-blue-800"}`
          }
        >
          View Applicants
        </NavLink>
      </nav>

    </aside>
  );
}