export default function RecruiterDashboard() {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Total Jobs</p>
          <p className="text-2xl font-bold mt-1">5</p>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Applications</p>
          <p className="text-2xl font-bold mt-1">15</p>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Interviews</p>
          <p className="text-2xl font-bold mt-1">3</p>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Hires</p>
          <p className="text-2xl font-bold mt-1">1</p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Jobs */}
        <div className="bg-white border rounded-lg p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Jobs</h2>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-blue-600">Senior Java Developer</p>
                <p className="text-gray-500">TechCorp • New York</p>
              </div>
              <span className="text-gray-400">3 apps</span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-blue-600">UI/UX Designer</p>
                <p className="text-gray-500">Creative Labs • Remote</p>
              </div>
              <span className="text-gray-400">5 apps</span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-blue-600">Backend Engineer</p>
                <p className="text-gray-500">InnovateX • Bengaluru</p>
              </div>
              <span className="text-gray-400">7 apps</span>
            </li>
          </ul>
        </div>

        {/* Recent Applicants */}
        <div className="bg-white border rounded-lg p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Applicants</h2>

          <ul className="space-y-4 text-sm">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">Alice Johnson</p>
                <p className="text-gray-500">Frontend Developer</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                View
              </button>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">Mark Davis</p>
                <p className="text-gray-500">Backend Engineer</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                View
              </button>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">John Smith</p>
                <p className="text-gray-500">UI/UX Designer</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                View
              </button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}