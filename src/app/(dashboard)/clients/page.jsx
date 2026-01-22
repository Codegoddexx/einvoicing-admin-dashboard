import Link from 'next/link';
import { clients } from '@/data/mockData';

export default function ClientsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Client Management</h1>
          <p className="text-gray-600">Manage all your clients in one place</p>
        </div>
        <Link
          href="/clients/onboard"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
        >
          + Onboard Client
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex items-center space-x-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search clients..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
          <option>All Industries</option>
          <option>Technology</option>
          <option>Finance</option>
          <option>Consulting</option>
        </select>
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Industry
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Invoices
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-800">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.contactPerson}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-800">{client.email}</div>
                  <div className="text-sm text-gray-500">{client.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-800">{client.industry}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      client.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : client.status === 'inactive'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">{client.totalInvoices}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{client.totalRevenue}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Link
                      href={`/clients/${client.id}`}
                      className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                    >
                      View
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link
                      href={`/clients/edit/${client.id}`}
                      className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
          <span className="font-medium">{clients.length}</span> clients
        </p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}