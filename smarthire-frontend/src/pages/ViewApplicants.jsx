export default function ViewApplicants() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Manage Applicants</h2>

      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2">Candidate</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-2">Alice Johnson</td>
            <td>Applied</td>
            <td className="flex gap-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded">Shortlist</button>
              <button className="bg-red-600 text-white px-3 py-1 rounded">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}