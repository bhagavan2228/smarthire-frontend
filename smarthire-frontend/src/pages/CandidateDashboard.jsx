export default function CandidateDashboard() {
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Candidate Dashboard</h1>
        <p className="text-gray-600">Welcome to SmartHire</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Jobs Applied</p>
          <p className="text-2xl font-bold mt-1">3</p>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Interviews</p>
          <p className="text-2xl font-bold mt-1">1</p>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Offers</p>
          <p className="text-2xl font-bold mt-1">0</p>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white border rounded-lg p-5 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Applications</h2>

        <ul className="space-y-3 text-sm">
          <li className="flex justify-between items-center">
            <div>
              <p className="font-medium text-blue-600">Frontend Developer</p>
              <p className="text-gray-500">TechCorp • Bengaluru</p>
            </div>
            <span className="text-yellow-600 font-medium">Under Review</span>
          </li>

          <li className="flex justify-between items-center">
            <div>
              <p className="font-medium text-blue-600">Backend Engineer</p>
              <p className="text-gray-500">InnovateX • Remote</p>
            </div>
            <span className="text-green-600 font-medium">Interview</span>
          </li>

          <li className="flex justify-between items-center">
            <div>
              <p className="font-medium text-blue-600">UI/UX Designer</p>
              <p className="text-gray-500">DesignHub • Hyderabad</p>
            </div>
            <span className="text-gray-500 font-medium">Applied</span>
          </li>
        </ul>
      </div>

    </div>
  );
}