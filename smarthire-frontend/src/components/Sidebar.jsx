import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "10px 14px",
    borderRadius: "6px",
    marginBottom: "6px",
    textDecoration: "none",
    fontWeight: 500,
    background: isActive ? "#e7f0ff" : "transparent",
    color: isActive ? "#0d6efd" : "#333",
  });

  return (
    <aside
      style={{
        width: "220px",
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginBottom: "24px", fontWeight: 700 }}>
        SmartHire
      </div>

      <nav>
        <NavLink to="/candidate" style={linkStyle}>
          🏠 Dashboard
        </NavLink>
        <NavLink to="/candidate/jobs" style={linkStyle}>
          💼 Browse Jobs
        </NavLink>
        <NavLink to="/candidate/applications" style={linkStyle}>
          📄 My Applications
        </NavLink>

        <hr style={{ margin: "16px 0" }} />

        <NavLink to="/recruiter" style={linkStyle}>
          🧑‍💼 Recruiter Dashboard
        </NavLink>
        <NavLink to="/recruiter/post-job" style={linkStyle}>
          ➕ Post Job
        </NavLink>
        <NavLink to="/recruiter/manage-jobs" style={linkStyle}>
          🗂 Manage Jobs
        </NavLink>
        <NavLink to="/recruiter/view-applicants" style={linkStyle}>
          👥 View Applicants
        </NavLink>
      </nav>
    </aside>
  );
}