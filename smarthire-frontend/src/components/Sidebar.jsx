import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <img src={logo} alt="SmartHire" style={styles.logo} />

      <nav>
        <NavItem to="/candidate">Dashboard</NavItem>
        <NavItem to="/browse-jobs">Browse Jobs</NavItem>
        <NavItem to="/my-applications">My Applications</NavItem>
        <NavItem to="/manage-jobs">Manage Jobs</NavItem>
        <NavItem to="/view-applicants">View Applicants</NavItem>
      </nav>
    </aside>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.link,
        background: isActive ? "#1e40af" : "transparent",
      })}
    >
      {children}
    </NavLink>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    background: "#0f172a",
    color: "#fff",
    padding: "20px",
  },
  logo: {
    height: "30px",
    marginBottom: "24px",
  },
  link: {
    display: "block",
    padding: "10px",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    marginBottom: "6px",
  },
};