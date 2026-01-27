import { useNavigate } from "react-router-dom";

export default function CandidateDashboard() {
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      job: "Frontend Developer",
      company: "TechCorp",
      status: "APPLIED",
    },
    {
      id: 2,
      job: "Backend Engineer",
      company: "InnovateX",
      status: "INTERVIEW",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <h1 style={title}>Candidate Dashboard</h1>
      <p style={subtitle}>Your job activity at a glance</p>

      {/* Stats Cards */}
      <div style={grid}>
        <StatCard title="Jobs Applied" value="2" />
        <StatCard title="Interviews" value="1" />
        <StatCard title="Offers" value="0" />
      </div>

      {/* Quick Actions */}
      <div style={actions}>
        <button style={primaryBtn} onClick={() => navigate("/browse-jobs")}>
          Browse Jobs
        </button>
        <button
          style={secondaryBtn}
          onClick={() => navigate("/candidate/applications")}
        >
          View All Applications
        </button>
      </div>

      {/* Recent Applications */}
      <div style={section}>
        <h2 style={sectionTitle}>Recent Applications</h2>

        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th>Job</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.job}</td>
                  <td>{app.company}</td>
                  <td>
                    <StatusBadge status={app.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value }) {
  return (
    <div style={card}>
      <p style={cardTitle}>{title}</p>
      <h2 style={cardValue}>{value}</h2>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    APPLIED: { bg: "#e0e7ff", color: "#1e40af" },
    INTERVIEW: { bg: "#fef3c7", color: "#92400e" },
    SELECTED: { bg: "#dcfce7", color: "#166534" },
    REJECTED: { bg: "#fee2e2", color: "#991b1b" },
  };

  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: 600,
        background: map[status].bg,
        color: map[status].color,
      }}
    >
      {status}
    </span>
  );
}

/* ================= STYLES ================= */

const title = { fontSize: "28px", fontWeight: 700 };
const subtitle = { color: "#6b7280", marginBottom: "24px" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
  marginBottom: "24px",
};

const card = {
  background: "#fff",
  padding: "22px",
  borderRadius: "10px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
};

const cardTitle = { color: "#6b7280", marginBottom: "8px" };
const cardValue = { fontSize: "30px", fontWeight: 700 };

const actions = {
  display: "flex",
  gap: "12px",
  marginBottom: "32px",
};

const primaryBtn = {
  padding: "10px 16px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 600,
};

const secondaryBtn = {
  ...primaryBtn,
  background: "#e5e7eb",
  color: "#111827",
};

const section = { marginTop: "16px" };
const sectionTitle = { marginBottom: "12px", fontSize: "18px" };

const tableWrap = {
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  overflow: "hidden",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};