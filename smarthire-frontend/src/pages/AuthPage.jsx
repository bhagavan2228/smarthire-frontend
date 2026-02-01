import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function AuthPage() {
  /* ===== REGISTER STATE ===== */
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  /* ===== REGISTER HANDLER ===== */
  const handleRegister = async () => {
    try {
      setRegisterError("");
      setRegisterSuccess("");

      await axiosInstance.post("/auth/register", registerData);

      setRegisterSuccess("Registration successful. Please login.");
      setRegisterData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setRegisterError(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div style={page}>
      <div style={card}>
        {/* Left: Login (UNCHANGED) */}
        <div style={left}>
          <h2 style={title}>Login</h2>

          <input
            type="email"
            placeholder="Email"
            style={input}
          />

          <input
            type="password"
            placeholder="Password"
            style={input}
          />

          <button style={loginBtn}>Login</button>

          <p style={text}>
            No account? <span style={link}>Register</span>
          </p>
        </div>

        {/* Right: Register (WIRED) */}
        <div style={right}>
          <h2 style={title}>Register</h2>

          <input
            type="text"
            placeholder="Name"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                name: e.target.value,
              })
            }
            style={input}
          />

          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                email: e.target.value,
              })
            }
            style={input}
          />

          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                password: e.target.value,
              })
            }
            style={input}
          />

          <button style={loginBtn} onClick={handleRegister}>
            Register
          </button>

          {registerError && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {registerError}
            </p>
          )}

          {registerSuccess && (
            <p style={{ color: "green", fontSize: "13px" }}>
              {registerSuccess}
            </p>
          )}

          <p style={text}>
            Already have an account? <span style={link}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===== styles ===== */

const page = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f3f4f6",
};

const card = {
  width: "800px",
  background: "#ffffff",
  display: "flex",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  overflow: "hidden",
};

const left = {
  flex: 1,
  padding: "32px",
  borderRight: "1px solid #e5e7eb",
};

const right = {
  flex: 1,
  padding: "32px",
};

/* ===== shared styles ===== */

const title = {
  marginBottom: "20px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
};

const loginBtn = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: 600,
  cursor: "pointer",
  marginTop: "8px",
};

const text = {
  marginTop: "14px",
  fontSize: "13px",
};

const link = {
  color: "#2563eb",
  cursor: "pointer",
  fontWeight: 500,
};
