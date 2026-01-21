export default function StatsCard({ title, value, change, icon, color = "indigo" }) {
  const colorClasses = {
    indigo: "bg-indigo-100 text-indigo-600",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600"
  };

  const isPositive = change?.startsWith('+');

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{value}</h3>
          {change && (
            <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {change} from last month
            </p>
          )}
        </div>
        {icon && (
          <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}