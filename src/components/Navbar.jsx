import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { dark, toggleTheme } = useTheme();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={nav}>
      <h2>SmartHire</h2>

      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={toggleTheme}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 24px",
  background: "#fff",
  borderBottom: "1px solid #e5e7eb",
};