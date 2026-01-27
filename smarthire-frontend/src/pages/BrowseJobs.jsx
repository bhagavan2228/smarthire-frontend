import { useState } from "react";

export default function BrowseJobs() {
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Bengaluru",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "InnovateX",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Hyderabad",
      type: "Contract",
    },
  ]);

  return (
    <div>
      <h1 style={{ fontSize: "28px", fontWeight: 700 }}>
        Browse Jobs
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Explore opportunities and apply instantly
      </p>

      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Job Card ---------------- */

function JobCard({ job }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "6px" }}>{job.title}</h3>
        <p style={{ color: "#666", marginBottom: "4px" }}>
          {job.company} • {job.location}
        </p>
        <span
          style={{
            fontSize: "12px",
            padding: "4px 8px",
            borderRadius: "12px",
            background: "#e7f0ff",
            color: "#0d6efd",
            fontWeight: 500,
          }}
        >
          {job.type}
        </span>
      </div>

      <button
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          background: "#198754",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 500,
        }}
        onClick={() => alert("Applied successfully (mock)")}
      >
        Apply
      </button>
    </div>
  );
}