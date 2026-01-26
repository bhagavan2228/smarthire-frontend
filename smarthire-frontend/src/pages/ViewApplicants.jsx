import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axiosInstance";

const STATUS_OPTIONS = [
  "APPLIED",
  "SHORTLISTED",
  "INTERVIEW_SCHEDULED",
  "SELECTED",
  "REJECTED",
];

export default function ViewApplicants() {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // interview form state
  const [selectedApp, setSelectedApp] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    axios
      .get(`/jobs/${jobId}/applications`)
      .then((res) => setApplications(res.data))
      .finally(() => setLoading(false));
  }, [jobId]);

  const updateStatus = async (applicationId, status) => {
    await axios.patch(`/applications/${applicationId}/status`, { status });
    setApplications((prev) =>
      prev.map((a) =>
        a.id === applicationId ? { ...a, status } : a
      )
    );
  };

  const scheduleInterview = async () => {
    await axios.post("/interviews/schedule", {
      applicationId: selectedApp.id,
      date,
      time,
    });

    updateStatus(selectedApp.id, "INTERVIEW_SCHEDULED");

    // reset form
    setSelectedApp(null);
    setDate("");
    setTime("");
  };

  if (loading) return <p>Loading applicants...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Applicants
      </h1>

      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white p-4 rounded shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">
                    {app.candidateName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Status: <b>{app.status}</b>
                  </p>
                </div>

                <select
                  value={app.status}
                  onChange={(e) =>
                    updateStatus(app.id, e.target.value)
                  }
                  className="border px-2 py-1 rounded"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {app.status === "SHORTLISTED" && (
                <button
                  onClick={() => setSelectedApp(app)}
                  className="mt-3 text-blue-600 underline"
                >
                  Schedule Interview
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Interview Scheduling Section */}
      {selectedApp && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">
            Schedule Interview for {selectedApp.candidateName}
          </h2>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 mr-2"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border p-2 mr-2"
          />

          <button
            onClick={scheduleInterview}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}