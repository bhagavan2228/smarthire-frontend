import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        // Correct endpoint: /applications/my
        const res = await axiosInstance.get("/applications/my");
        setApplications(res.data);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  if (loading) return <div className="p-8 text-center text-gray-500">Loading applications...</div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Applications</h1>
        <p className="text-gray-500 text-sm mt-1">Track the status of your job applications</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Job Title</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{app.job?.title || "Unknown Job"}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={app.status || 'Applied'} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="px-6 py-8 text-center text-gray-500">
                  You haven't applied to any jobs yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    APPLIED: "bg-blue-100 text-blue-700",
    SHORTLISTED: "bg-purple-100 text-purple-700",
    INTERVIEW: "bg-amber-100 text-amber-700",
    SELECTED: "bg-green-100 text-green-700",
    REJECTED: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status.toUpperCase()] || "bg-gray-100 text-gray-700"}`}>
      {status}
    </span>
  );
}