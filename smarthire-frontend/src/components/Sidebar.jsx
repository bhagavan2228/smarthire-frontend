import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  // TEMP role (Day 4 → replace with JWT role)
  const role = "recruiter"; // "candidate" | "recruiter"

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col py-6 px-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl text-blue-500">◆</span> SmartHire
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {/* Candidate Sidebar */}
        {role === "candidate" && (
          <>
            <NavItem to="/browse-jobs" icon="💼" label="Browse Jobs" />
            <NavItem
              to="/candidate/applications"
              icon="📄"
              label="My Applications"
            />
          </>
        )}

        {/* Recruiter Sidebar */}
        {role === "recruiter" && (
          <>
            <NavItem
              to="/recruiter"
              icon="📊"
              label="Dashboard"
            />
            <NavItem
              to="/post-job"
              icon="✍️"
              label="Post Job"
            />
            <NavItem
              to="/manage-jobs"
              icon="📁"
              label="Manage Jobs"
            />
            <NavItem
              to="/view-applicants"
              icon="👥"
              label="View Applicants"
            />
          </>
        )}
      </nav>

      {/* Logout / User Info eventually */}
    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
          ? "bg-blue-600 text-white shadow-md"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}
