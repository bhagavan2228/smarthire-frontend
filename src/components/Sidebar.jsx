import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <aside style={sidebar}>
      {/* Logo */}
      <div style={logoWrap}>
        <img src={logo} alt="SmartHire" style={logoStyle} />
      </div>

      {/* Candidate */}
      <NavItem to="/candidate" icon="🏠" label="Dashboard" />
      <NavItem to="/browse-jobs" icon="💼" label="Browse Jobs" />
      <NavItem to="/candidate/applications" icon="📄" label="My Applications" />

      <Divider />

      {/* Recruiter */}
      <NavItem to="/recruiter" icon="🧑‍💼" label="Recruiter Dashboard" />
      <NavItem to="/view-applicants" icon="👥" label="Applicants" />
    </aside>
  );
}

/* ================= NAV ITEM ================= */

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...navItem,
        background: isActive ? "#1e40af" : "transparent",
        boxShadow: isActive
          ? "inset 4px 0 0 #60a5fa"
          : "none",
      })}
      onMouseEnter={(e) => {
        if (!e.currentTarget.classList.contains("active")) {
          e.currentTarget.style.background = "#1f2937";
        }
      }}
      onMouseLeave={(e) => {
        if (!e.currentTarget.classList.contains("active")) {
          e.currentTarget.style.background = "transparent";
        }
      }}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <span style={iconStyle}>{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}

/* ================= DIVIDER ================= */

function Divider() {
  return <div style={divider} />;
}

/* ================= STYLES ================= */

const sidebar = {
  width: "240px",
  background: "#0f172a",
  color: "#ffffff",
  padding: "20px 14px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

const logoWrap = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "28px",
};

const logoStyle = {
  height: "34px",
};

const navItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 14px",
  borderRadius: "10px",
  color: "#e5e7eb",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "6px",
  transition: "all 0.2s ease",
};

const iconStyle = {
  fontSize: "18px",
};

const divider = {
  height: "1px",
  background: "#334155",
  margin: "16px 0",
};