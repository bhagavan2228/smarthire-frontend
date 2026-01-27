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
      {/* ================= HEADER ================= */}
      <div style={header}>
        <div>
          <h1 style={title}>Candidate Dashboard</h1>
          <p style={subtitle}>
            Track your applications and plan your next steps
          </p>
        </div>

        <button style={primaryBtn} onClick={() => navigate("/browse-jobs")}>
          Browse Jobs
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div style={statsGrid}>
        <StatCard title="Applied" value="2" color="#2563eb" />
        <StatCard title="Interviews" value="1" color="#f59e0b" />
        <StatCard title="Offers" value="0" color="#16a34a" />
      </div>

      {/* ================= RECENT ACTIVITY ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>Recent Applications</h2>

        {applications.length === 0 ? (
          <EmptyState
            message="You haven’t applied to any jobs yet."
            actionLabel="Start Applying"
            onAction={() => navigate("/browse-jobs")}
          />
        ) : (
          <div style={list}>
            {applications.map((app) => (
              <div key={app.id} style={applicationCard}>
                <div>
                  <h4 style={{ marginBottom: "4px" }}>{app.job}</h4>
                  <p style={mutedText}>{app.company}</p>
                </div>
                <StatusBadge status={app.status} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= WHAT’S NEXT ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>What’s next?</h2>

        <div style={nextCard}>
          {applications.length === 0 ? (
            <p style={mutedText}>
              Apply to jobs to start tracking your progress here.
            </p>
          ) : (
            <p style={mutedText}>
              Keep an eye on your applications. Recruiters may reach out for
              interviews soon.
            </p>
          )}

          <button
            style={secondaryBtn}
            onClick={() => navigate("/candidate/applications")}
          >
            View All Applications
          </button>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, color }) {
  return (
    <div style={statCard}>
      <p style={mutedText}>{title}</p>
      <h2 style={{ fontSize: "32px", fontWeight: 700, color }}>{value}</h2>
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

function EmptyState({ message, actionLabel, onAction }) {
  return (
    <div style={emptyState}>
      <p style={mutedText}>{message}</p>
      <button style={primaryBtn} onClick={onAction}>
        {actionLabel}
      </button>
    </div>
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

const secondaryBtn = {
  marginTop: "12px",
  padding: "10px 16px",
  background: "#e5e7eb",
  color: "#111827",
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
};

const section = { marginBottom: "32px" };
const sectionTitle = { marginBottom: "12px", fontSize: "18px" };

const list = {
  display: "grid",
  gap: "12px",
};

const applicationCard = {
  background: "#ffffff",
  padding: "16px",
  borderRadius: "10px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const nextCard = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

const emptyState = {
  background: "#ffffff",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};