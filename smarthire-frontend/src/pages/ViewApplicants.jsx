import { useState } from "react";

export default function ViewApplicants() {
  const [activeTab, setActiveTab] = useState("All");

  const applicants = [
    { id: 1, name: "Alice Johnson", job: "Frontend Developer", status: "Applied", date: "2024-04-10" },
    { id: 2, name: "Mark Davis", job: "Backend Engineer", status: "Shortlisted", date: "2024-04-09" },
    { id: 3, name: "John Smith", job: "UI/UX Designer", status: "Interview", date: "2024-04-08" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Applicants</h1>
          <p className="text-gray-500 text-sm mt-1">Review and manage candidate applications</p>
        </div>

        <div className="flex gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
          {["All", "Applied", "Shortlisted", "Interview", "Hired"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === tab
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Candidate</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Applied For</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applicants.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                      {a.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-900">{a.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{a.job}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${a.status === "Applied" ? "bg-blue-100 text-blue-700" :
                      a.status === "Shortlisted" ? "bg-purple-100 text-purple-700" :
                        a.status === "Interview" ? "bg-amber-100 text-amber-700" :
                          "bg-gray-100 text-gray-700"
                    }`}>
                    {a.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-xs font-medium hover:bg-green-100 transition">
                    Shortlist
                  </button>
                  <button className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-xs font-medium hover:bg-blue-100 transition">
                    View
                  </button>
                  <button className="px-3 py-1.5 bg-red-50 text-red-700 rounded-md text-xs font-medium hover:bg-red-100 transition">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}