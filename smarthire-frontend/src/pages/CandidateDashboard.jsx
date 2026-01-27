import { useNavigate } from "react-router-dom";

export default function CandidateDashboard() {
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "TechCorp",
      status: "APPLIED",
    },
    {
      id: 2,
      role: "Backend Engineer",
      company: "InnovateX",
      status: "INTERVIEW",
    },
  ];

  return (
    <div>
      {/* ================= HEADER ================= */}
      <div style={header}>
        <div>
          <h1 style={title}>Candidate Dashboard</h1>
          <p style={subtitle}>
            Track your job applications and next steps
          </p>
        </div>

        <button
          style={primaryBtn}
          onClick={() => navigate("/browse-jobs")}
        >
          Browse Jobs
        </button>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div style={statsGrid}>
        <StatCard icon="📨" label="Applied" value="2" color="#2563eb" />
        <StatCard icon="🎯" label="Interviews" value="1" color="#f59e0b" />
        <StatCard icon="🏆" label="Offers" value="0" color="#16a34a" />
      </div>

      {/* ================= RECENT APPLICATIONS ================= */}
      <section>
        <h2 style={sectionTitle}>Recent Applications</h2>

        {applications.length === 0 ? (
          <div style={emptyState}>
            <p style={mutedText}>
              You haven’t applied to any jobs yet.
            </p>
            <button
              style={primaryBtn}
              onClick={() => navigate("/browse-jobs")}
            >
              Start Applying
            </button>
          </div>
        ) : (
          <div style={applicationsGrid}>
            {applications.map((app) => (
              <div
                key={app.id}
                style={applicationCard}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div>
                  <h4 style={{ marginBottom: "4px" }}>{app.role}</h4>
                  <p style={mutedText}>{app.company}</p>
                </div>
                <StatusBadge status={app.status} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ icon, label, value, color }) {
  return (
    <div style={statCard}>
      <span style={iconStyle}>{icon}</span>
      <p style={mutedText}>{label}</p>
      <h2 style={{ fontSize: "30px", fontWeight: 700, color }}>
        {value}
      </h2>
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
        padding: "6px 12px",
        borderRadius: "999px",
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

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "28px",
};

const title = { fontSize: "28px", fontWeight: 700 };
const subtitle = { color: "#6b7280" };
const mutedText = { color: "#6b7280", fontSize: "14px" };

const primaryBtn = {
  padding: "10px 16px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
  marginBottom: "32px",
};

const statCard = {
  background: "#ffffff",
  padding: "22px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "22px",
  marginBottom: "8px",
};

const sectionTitle = {
  fontSize: "18px",
  marginBottom: "12px",
};

const applicationsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "16px",
};

const applicationCard = {
  background: "#ffffff",
  padding: "18px",
  borderRadius: "12px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "all 0.2s ease",
};

const emptyState = {
  background: "#ffffff",
  padding: "32px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  textAlign: "center",
};