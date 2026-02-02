import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function ViewApplicants() {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Backend: JobApplicationController -> @GetMapping("/job/{jobId}")
    axiosInstance.get(`/applications/job/${jobId}`).then((res) => setApplicants(res.data));
  }, [jobId]);

  const updateStatus = async (id, status) => {
    try {
      // Backend: AdminApplicationController -> @PutMapping("/{id}/status") with @RequestParam status
      await axiosInstance.put(`/admin/applications/${id}/status?status=${status}`);
      setApplicants(applicants.map(a => a.id === id ? { ...a, status } : a));
    } catch (e) {
      alert("Failed to update status");
    }
  };

  return (
    <div>
      <h1>Manage Applicants</h1>

      <table style={table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role / Job</th>
            <th>Status</th>
            <th align="right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((a) => (
            <tr key={a.id}>
              <td>{a.user?.fullName || a.user?.email || "Candidate"}</td>
              <td>{a.job?.title || "Job"}</td>
              <td>
                <Badge label={a.status} status={a.status} />
              </td>
              <td align="right">
                <Button onClick={() => updateStatus(a.id, "SHORTLISTED")}>Shortlist</Button>{" "}
                <Button variant="danger" onClick={() => updateStatus(a.id, "REJECTED")}>Reject</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const table = {
  width: "100%",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};