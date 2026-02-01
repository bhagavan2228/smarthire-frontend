import { useState } from "react";

export default function BrowseJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Bengaluru",
      description: "We are looking for a skilled React developer..."
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "InnovateX",
      location: "Remote",
      description: "Join our backend team working with Java Spring Boot..."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Hyderabad",
      description: "Create beautiful user interfaces and experiences..."
    },
  ];

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
                {job.company} • {job.location}
              </p>
              <p className="text-sm text-gray-500 line-clamp-1 max-w-lg">{job.description}</p>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}