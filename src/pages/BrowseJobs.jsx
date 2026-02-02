import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function BrowseJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axiosInstance.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const handleApply = async (jobId) => {
    try {
      await axiosInstance.post("/applications", { jobId });
      alert("Applied successfully!");
    } catch (error) {
      alert("Failed to apply");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Browse Jobs</h2>

      <div style={styles.list}>
        {jobs.map((job) => (
          <div key={job.id} style={styles.card}>
            <div>
              <h3>{job.title}</h3>
              <p style={styles.meta}>
                {job.company || "SmartHire"} • {job.location}
              </p>
            </div>
            <button style={styles.applyBtn} onClick={() => handleApply(job.id)}>
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
  },
  list: {
    marginTop: "16px",
    display: "grid",
    gap: "14px",
  },
  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "10px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  meta: {
    color: "#6b7280",
    fontSize: "14px",
  },
  applyBtn: {
    background: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};