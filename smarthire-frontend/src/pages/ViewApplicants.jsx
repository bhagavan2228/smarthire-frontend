import { useState } from "react";

export default function ViewApplicants() {
  const [loading] = useState(false);

  const applicants = [
    {
      id: 1,
      name: "Alice Johnson",
      job: "Frontend Developer",
      status: "APPLIED",
    },
    {
      id: 2,
      name: "Mark Davis",
      job: "Backend Engineer",
      status: "INTERVIEW",
    },
    {
      id: 3,
      name: "Sara Khan",
      job: "UI/UX Designer",
      status: "SHORTLISTED",
    },
  ];

  if (loading) {
    return <p style={mutedText}>Loading applicants…</p>;
  }

  if (applicants.length === 0) {
    return (
      <div style={emptyState}>
        <h3>No applicants yet</h3>
        <p style={mutedText}>
          Candidates will appear here once they apply.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* ================= HEADER ================= */}
      <div style={header}>
        <div>
          <h1 style={title}>Manage Applicants</h1>
          <p style={mutedText}>
            Review and move candidates through the pipeline
          </p>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div style={tableWrapper}>
        <table style={table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th align="right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((a) => (
              <tr key={a.id} style={row}>
                <td>{a.name}</td>
                <td>{a.job}</td>
                <td>
                  <StatusBadge status={a.status} />
                </td>
                <td align="right">
                  <button style={shortlistBtn}>Shortlist</button>
                  <button style={rejectBtn}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatusBadge({ status }) {
  const map = {
    APPLIED: { bg: "#e0e7ff", color: "#1e40af" },
    SHORTLISTED: { bg: "#dcfce7", color: "#166534" },
    INTERVIEW: { bg: "#fef3c7", color: "#92400e" },
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
  marginBottom: "24px",
};

const title = {
  fontSize: "26px",
  fontWeight: 700,
};

const mutedText = {
  color: "#6b7280",
  fontSize: "14px",
};

const tableWrapper = {
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  overflow: "hidden",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const row = {
  transition: "background 0.2s ease",
};

const shortlistBtn = {
  padding: "6px 12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "8px",
};

const rejectBtn = {
  padding: "6px 12px",
  background: "#ef4444",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const emptyState = {
  background: "#fff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  textAlign: "center",
};