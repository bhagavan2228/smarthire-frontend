import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function BrowseJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axiosInstance.get("/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to apply");
      return;
    }
    try {
      // Backend ApplicationController: @PostMapping("/apply") public String applyToJob(@RequestParam Long jobId, ...)
      // NOTE: It's @PostMapping("/apply") NOT "/apply/{jobId}"!
      // And it uses @RequestParam long jobId.
      // Correct call: POST /applications/apply?jobId=123
      await axiosInstance.post(`/applications/apply?jobId=${jobId}`);
      alert("Applied successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to apply. You might have already applied.");
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading jobs...</div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Browse Jobs</h1>
        <p className="text-gray-500 text-sm mt-1">Find your next opportunity</p>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex sm:items-center justify-between flex-col sm:flex-row gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
              <p className="text-sm font-medium text-gray-600 mb-2">
                {job.location} • {job.type || 'Full-time'}
              </p>
              <p className="text-sm text-gray-500 line-clamp-1 max-w-lg">{job.description}</p>
            </div>

            <button
              onClick={() => handleApply(job.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>
        ))}
        {jobs.length === 0 && (
          <div className="text-center py-10 text-gray-500 bg-white rounded-xl">
            No jobs available at the moment.
          </div>
        )}
      </div>
    </div>
  );
}