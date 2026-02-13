// src/app/(dashboard)/payouts/page.jsx
'use client';

export default function PayoutsPage() {
  const payouts = [
    { id: 1, client: 'Acme Corporation', amount: '$2,450.00', status: 'completed', date: 'Feb 10, 2026', method: 'Bank Transfer' },
    { id: 2, client: 'Tech Solutions Ltd', amount: '$1,850.00', status: 'pending', date: 'Feb 12, 2026', method: 'PayPal' },
    { id: 3, client: 'Global Industries', amount: '$3,200.00', status: 'completed', date: 'Feb 8, 2026', method: 'Bank Transfer' },
    { id: 4, client: 'Startup Hub', amount: '$950.00', status: 'processing', date: 'Feb 13, 2026', method: 'Stripe' },
    { id: 5, client: 'Enterprise Corp', amount: '$5,100.00', status: 'completed', date: 'Feb 5, 2026', method: 'Bank Transfer' },
  ];

  const stats = [
    { label: 'Total Payouts', value: '$45,280', change: '+18%', icon: '💵' },
    { label: 'This Month', value: '$8,450', change: '+12%', icon: '📈' },
    { label: 'Pending', value: '$1,850', change: '-5%', icon: '⏳' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-600';
      case 'pending': return 'bg-yellow-100 text-yellow-600';
      case 'processing': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Payouts</h1>
            <p className="text-gray-600">Track and manage your payment history</p>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            Request Payout
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Payouts Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Payment History</h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {payouts.map((payout, idx) => (
                  <tr
                    key={payout.id}
                    className="hover:bg-gray-50 transition-colors group"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {payout.client}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-800">{payout.amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payout.status)}`}>
                        {payout.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{payout.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{payout.method}</td>
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-gray-100">
            {payouts.map((payout, idx) => (
              <div
                key={payout.id}
                className="p-6 hover:bg-gray-50 transition-all"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{payout.client}</h3>
                    <p className="text-sm text-gray-500">{payout.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payout.status)}`}>
                    {payout.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">{payout.amount}</span>
                  <span className="text-sm text-gray-500">{payout.method}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}