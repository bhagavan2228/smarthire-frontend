import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <aside style={sidebar}>
      <img src={logo} style={{ height: 30, marginBottom: 30 }} />

      <Nav to="/candidate">Dashboard</Nav>
      <Nav to="/browse-jobs">Browse Jobs</Nav>
      <Nav to="/candidate/applications">My Applications</Nav>

      <div style={{ marginTop: 30 }} />

      <Nav to="/recruiter">Recruiter</Nav>
      <Nav to="/view-applicants">Applicants</Nav>
    </aside>
  );
}

function Nav({ to, children }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        padding: "10px 14px",
        borderRadius: 8,
        color: "#fff",
        textDecoration: "none",
        background: isActive ? "var(--secondary)" : "transparent",
        display: "block",
        marginBottom: 6,
      })}
    >
      {children}
    </NavLink>
  );
}

const sidebar = {
  width: 240,
  background: "#0f172a",
  color: "#fff",
  padding: 20,
};