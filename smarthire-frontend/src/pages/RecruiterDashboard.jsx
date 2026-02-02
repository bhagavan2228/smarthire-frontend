import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function RecruiterDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ jobs: 0, applicants: 0, interviews: 0, hires: 0 });
  const [recentJobs, setRecentJobs] = useState([]);
  const [recentApplicants, setRecentApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Parallel fetch for better performance
        const [jobsRes, appsRes] = await Promise.all([
          axiosInstance.get("/jobs"), // Use all jobs 
          axiosInstance.get("/applications") // Use all applications as recruiter
        ]);

        const jobs = jobsRes.data;
        const apps = appsRes.data;

        setRecentJobs(jobs.slice(0, 3));
        setRecentApplicants(apps.slice(0, 3));

        // Calculate stats
        setStats({
          jobs: jobs.length,
          applicants: apps.length,
          interviews: apps.filter(a => (a.status || '').toUpperCase() === 'INTERVIEW').length,
          hires: apps.filter(a => (a.status || '').toUpperCase() === 'SELECTED').length
        });

      } catch (error) {
        console.error("Dashboard fetch error:", error);
        // Keep defaults or show error
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Recruiter Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Manage your job postings and track candidate pipelines
          </p>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
          onClick={() => navigate("/post-job")}
        >
          <span>＋</span> Post New Job
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Active Jobs" value={stats.jobs} color="text-blue-600" bg="bg-blue-50" icon="💼" />
        <StatCard title="Total Applicants" value={stats.applicants} color="text-green-600" bg="bg-green-50" icon="👥" />
        <StatCard title="Interviews" value={stats.interviews} color="text-amber-500" bg="bg-amber-50" icon="📅" />
        <StatCard title="Hires" value={stats.hires} color="text-teal-600" bg="bg-teal-50" icon="🤝" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* ================= RECENT JOBS ================= */}
        <section className="xl:col-span-2 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-gray-800">Recent Jobs</h2>
            <button
              onClick={() => navigate("/manage-jobs")}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View all
            </button>
          </div>

          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-1">{job.title}</h4>
                  <div className="flex gap-3 text-sm text-gray-500">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type || "Full-time"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    {/* Backend Job entity doesn't have applicants count directly. Just mocking 0 or need separate fetch */}
                    <span className="block text-xl font-bold text-gray-800">--</span>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Applicants</span>
                  </div>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    onClick={() => navigate("/view-applicants")}
                  >
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= RECENT APPLICANTS ================= */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Applicants</h2>
            <button
              onClick={() => navigate("/view-applicants")}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View all
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
            {recentApplicants.map((applicant) => (
              <div key={applicant.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                    {(applicant.user?.fullName || "U").charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{applicant.user?.fullName || "Candidate"}</p>
                    <p className="text-xs text-gray-500">{applicant.job?.title || "Role"}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-md text-sm font-medium transition-colors">
                  {applicant.status || 'Applied'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, color, bg, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
      </div>
      <div className={`w-12 h-12 rounded-lg ${bg} ${color} flex items-center justify-center text-2xl`}>
        {icon}
      </div>
    </div>
  );
}