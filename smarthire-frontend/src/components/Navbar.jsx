import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header
      style={{
        height: "60px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "18px" }}>
        SmartHire
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ color: "#555" }}>
          {user?.email}
        </span>
        <button
          onClick={handleLogout}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            background: "#f8f9fa",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}