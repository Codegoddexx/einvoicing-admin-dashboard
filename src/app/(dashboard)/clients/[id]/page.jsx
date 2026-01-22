import Link from 'next/link';
import { getClientById } from '@/data/mockData';

export default function ClientDetailsPage({ params }) {
  const client = getClientById(params.id);

  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Client Not Found</h2>
        <Link href="/clients" className="text-indigo-600 hover:text-indigo-700">
          Back to Clients
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/clients"
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium mb-2 inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Clients
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">{client.name}</h1>
          <p className="text-gray-600">{client.industry} • Onboarded {client.dateOnboarded}</p>
        </div>
        <div className="flex space-x-3">
          <Link
            href={`/clients/edit/${client.id}`}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Edit Client
          </Link>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Generate Invoice
          </button>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mb-6">
        <span
          className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
            client.status === 'active'
              ? 'bg-green-100 text-green-700'
              : client.status === 'inactive'
              ? 'bg-red-100 text-red-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Invoices</p>
          <p className="text-3xl font-bold text-gray-800">{client.totalInvoices}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-800">{client.totalRevenue}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Industry</p>
          <p className="text-3xl font-bold text-gray-800">{client.industry}</p>
        </div>
      </div>

      {/* Details Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Contact Person</p>
              <p className="font-medium text-gray-800">{client.contactPerson}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email Address</p>
              <p className="font-medium text-gray-800">{client.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone Number</p>
              <p className="font-medium text-gray-800">{client.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-medium text-gray-800">{client.address}</p>
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Company Name</p>
              <p className="font-medium text-gray-800">{client.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Industry</p>
              <p className="font-medium text-gray-800">{client.industry}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date Onboarded</p>
              <p className="font-medium text-gray-800">{client.dateOnboarded}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-medium text-gray-800 capitalize">{client.status}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Invoices</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            View All
          </button>
        </div>
        <div className="text-center py-8 text-gray-500">
          <p>No invoices found for this client</p>
        </div>
      </div>
    </div>
  );
}