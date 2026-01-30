import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axiosInstance";

export default function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/jobs");
        setJobs(res.data);
      } catch {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Job Postings</h2>

      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 rounded shadow mb-3">
          <h3 className="font-semibold">{job.title}</h3>
          <p>{job.location}</p>
          <p className="text-sm">{job.description}</p>

          <Link to={`/recruiter/jobs/${job.id}/applications`}
            className="text-blue-600 underline">
            View Applicants
          </Link>
        </div>
      ))}
    </div>
  );
}