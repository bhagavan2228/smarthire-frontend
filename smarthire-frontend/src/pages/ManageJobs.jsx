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
        // Change to real Recruiter Job endpoint (Using generic /jobs for now)
        const res = await axios.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load jobs");
        // Remove fallbacks once backend is ready
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <div className="p-8 text-center text-gray-500">Loading jobs...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Jobs</h1>
          <p className="text-gray-500 text-sm mt-1">Edit, delete, or track your job postings</p>
        </div>
        <Link
          to="/post-job"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          + Post Job
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{job.title}</h3>
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap">
                  {job.type || 'Full-time'}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                <span>📍</span> {job.location}
              </p>

              <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                {job.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <Link to={`/recruiter/jobs/${job.id}/applications`}
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold hover:underline">
                View Applicants
              </Link>

              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                  ✎
                </button>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  🗑
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}