import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "24px",
            background: "#f5f7fb",
            minHeight: "100vh",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </>
  );
}