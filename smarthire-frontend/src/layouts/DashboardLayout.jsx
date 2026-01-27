import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <main
  style={{
    flex: 1,
    padding: "32px",
    background: "#f5f7fb",
    minHeight: "100vh",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <Outlet />
  </div>
</main>
      </div>
    </>
  );
}