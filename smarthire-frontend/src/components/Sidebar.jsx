import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <aside style={sidebar}>
      <img src={logo} alt="SmartHire" style={logoStyle} />

      <NavItem to="/candidate" icon="🏠" label="Dashboard" />
      <NavItem to="/browse-jobs" icon="💼" label="Browse Jobs" />
      <NavItem to="/candidate/applications" icon="📄" label="My Applications" />

      <div style={divider} />

      <NavItem to="/recruiter" icon="🧑‍💼" label="Recruiter Dashboard" />
      <NavItem to="/view-applicants" icon="👥" label="View Applicants" />
    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...navItem,
        background: isActive ? "#1e40af" : "transparent",
      })}
    >
      <span style={{ marginRight: "10px" }}>{icon}</span>
      {label}
    </NavLink>
  );
}

/* ---------------- Styles ---------------- */

const sidebar = {
  width: "220px",
  background: "#0f172a",
  color: "#ffffff",
  padding: "20px",
  minHeight: "100vh",
};

const logoStyle = {
  height: "32px",
  marginBottom: "24px",
};

const navItem = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  borderRadius: "8px",
  color: "#ffffff",
  textDecoration: "none",
  marginBottom: "6px",
  fontSize: "14px",
};

const divider = {
  height: "1px",
  background: "#334155",
  margin: "14px 0",
};