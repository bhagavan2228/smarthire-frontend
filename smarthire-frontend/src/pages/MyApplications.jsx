import { useState } from "react";

export default function MyApplications() {
  const [applications] = useState([
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "TechCorp",
      status: "APPLIED",
    },
    {
      id: 2,
      jobTitle: "Backend Engineer",
      company: "InnovateX",
      status: "INTERVIEW",
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      company: "DesignHub",
      status: "REJECTED",
    },
  ]);

  return (
    <div>
      <h1 style={{ fontSize: "28px", fontWeight: 700 }}>
        My Applications
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Track the status of your job applications
      </p>

      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f8f9fa" }}>
            <tr>
              <th style={thStyle}>Job Title</th>
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr key={app.id} style={{ borderTop: "1px solid #eee" }}>
                <td style={tdStyle}>{app.jobTitle}</td>
                <td style={tdStyle}>{app.company}</td>
                <td style={tdStyle}>
                  <StatusBadge status={app.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const thStyle = {
  textAlign: "left",
  padding: "14px",
  fontWeight: 600,
  fontSize: "14px",
};

const tdStyle = {
  padding: "14px",
  fontSize: "14px",
};

/* ---------------- Status Badge ---------------- */

function StatusBadge({ status }) {
  const styles = {
    APPLIED: {
      bg: "#e7f0ff",
      color: "#0d6efd",
      label: "Applied",
    },
    INTERVIEW: {
      bg: "#fff3cd",
      color: "#856404",
      label: "Interview",
    },
    SELECTED: {
      bg: "#d4edda",
      color: "#155724",
      label: "Selected",
    },
    REJECTED: {
      bg: "#f8d7da",
      color: "#721c24",
      label: "Rejected",
    },
  };

  const s = styles[status];

  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: 500,
      }}
    >
      {s.label}
    </span>
  );
}