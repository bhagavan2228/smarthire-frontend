import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", background: "#f9fafb" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <main style={{ padding: "24px" }}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>
    </div>
  );
}