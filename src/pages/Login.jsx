import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "../components/ui/Button";
import axiosInstance from "../api/axiosInstance";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* import axiosInstance at top, assuming I need to add it or it's there? It's NOT there in view_file output. */
  /* Wait, I need to add the import first or include it in the replacement if I can span it. */
  /* The replace_file_content works on a block. I should probably use multi_replace. */

  /* Let's try to do it in one go with multi_replace or carefully with replace. */
  /* Better to use multi_replace to add import AND change handler. */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      const { token, role } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "ROLE_ADMIN") navigate("/recruiter");
      else if (role === "ROLE_CANDIDATE") navigate("/candidate");
      else navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div style={page}>
      <form style={card} onSubmit={handleLogin}>
        <img src={logo} alt="SmartHire" style={logoStyle} />
        <h2>Login</h2>

        <input
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          placeholder="Password"
          type="password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Login</Button>

        <p style={footer}>
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3f4f6",
};

const card = {
  background: "#fff",
  padding: "32px",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
};

const logoStyle = { height: "34px", marginBottom: "16px" };
const footer = { marginTop: "12px", fontSize: "14px" };