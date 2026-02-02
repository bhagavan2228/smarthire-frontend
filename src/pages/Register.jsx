import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import logo from "../assets/logo.svg";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axiosInstance.post("/auth/register", { name, email, password });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div style={page}>
      <div style={card}>
        <img src={logo} alt="SmartHire" style={logoStyle} />

        <h2 style={title}>Register</h2>

        <label style={label}>Name</label>
        <input
          type="text"
          placeholder="Name"
          style={input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label style={label}>Email</label>
        <input
          type="email"
          placeholder="Email"
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label style={label}>Password</label>
        <input
          type="password"
          placeholder="Password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={primaryBtn} onClick={handleRegister}>
          Register
        </button>

        <p style={footerText}>
          Already have an account?{" "}
          <Link to="/login" style={link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f3f4f6",
};

const card = {
  width: "100%",
  maxWidth: "420px",
  background: "#ffffff",
  padding: "32px",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const logoStyle = {
  height: "36px",
  display: "block",
  margin: "0 auto 20px",
};

const title = {
  textAlign: "center",
  fontSize: "22px",
  fontWeight: 700,
  marginBottom: "24px",
};

const label = {
  display: "block",
  fontSize: "14px",
  marginBottom: "6px",
  color: "#374151",
};

const input = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  marginBottom: "16px",
  fontSize: "14px",
};

const primaryBtn = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: 600,
  cursor: "pointer",
};

const footerText = {
  marginTop: "16px",
  textAlign: "center",
  fontSize: "14px",
  color: "#6b7280",
};

const link = {
  color: "#2563eb",
  fontWeight: 500,
  textDecoration: "none",
};