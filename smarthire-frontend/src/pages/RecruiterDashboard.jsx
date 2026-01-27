import { useNavigate } from "react-router-dom";

export default function RecruiterDashboard() {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      applicants: 8,
    },
    {
      id: 2,
      title: "Backend Engineer",
      applicants: 5,
    },
  ];

  return (
    <div>
      {/* ================= HEADER ================= */}
      <div style={header}>
        <div>
          <h1 style={title}>Recruiter Dashboard</h1>
          <p style={subtitle}>
            Manage jobs and track candidate pipelines
          </p>
        </div>

        <button
          style={primaryBtn}
          onClick={() => navigate("/recruiter/post-job")}
        >
          Post New Job
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div style={statsGrid}>
        <StatCard title="Active Jobs" value="2" color="#2563eb" />
        <StatCard title="Total Applicants" value="13" color="#16a34a" />
        <StatCard title="Interviews" value="4" color="#f59e0b" />
        <StatCard title="Hires" value="1" color="#0f766e" />
      </div>

      {/* ================= JOBS OVERVIEW ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>Your Jobs</h2>

        <div style={jobsGrid}>
          {jobs.map((job) => (
            <div key={job.id} style={jobCard}>
              <div>
                <h4 style={{ marginBottom: "6px" }}>{job.title}</h4>
                <p style={mutedText}>
                  {job.applicants} applicants
                </p>
              </div>

              <button
                style={secondaryBtn}
                onClick={() => navigate("/view-applicants")}
              >
                View Applicants
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PIPELINE PREVIEW ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>Hiring Pipeline</h2>

        <div style={pipelineCard}>
          <PipelineItem label="Applied" value="6" color="#2563eb" />
          <PipelineItem label="Shortlisted" value="4" color="#9333ea" />
          <PipelineItem label="Interview" value="2" color="#f59e0b" />
          <PipelineItem label="Hired" value="1" color="#16a34a" />
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
      <h2 style={{ fontSize: "32px", fontWeight: 700, color }}>
        {value}
      </h2>
    </div>
  );
}

function PipelineItem({ label, value, color }) {
  return (
    <div style={pipelineItem}>
      <span style={mutedText}>{label}</span>
      <span style={{ fontWeight: 700, color }}>{value}</span>
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
  padding: "8px 14px",
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

const jobsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "16px",
};

const jobCard = {
  background: "#ffffff",
  padding: "18px",
  borderRadius: "12px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const pipelineCard = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "12px",
};

const pipelineItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "