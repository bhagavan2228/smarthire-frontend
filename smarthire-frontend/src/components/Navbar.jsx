import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  const link = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-sm ${
      isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-blue-700"
    }`;

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-4">
      <div className="flex items-center gap-3 mb-8 px-4">
        <img src={logo} className="h-8 w-8" />
        <span className="font-bold">SmartHire</span>
      </div>

      <nav className="space-y-2">
        <NavLink to="/recruiter" className={link}>Dashboard</NavLink>
        <NavLink to="/recruiter/post-job" className={link}>Post Job</NavLink>
        <NavLink to="/recruiter/manage-jobs" className={link}>Manage Jobs</NavLink>
        <NavLink to="/recruiter/view-applicants" className={link}>View Applicants</NavLink>
      </nav>
    </aside>
  );
}