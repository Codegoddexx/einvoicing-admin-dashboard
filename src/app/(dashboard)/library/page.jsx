// src/app/(dashboard)/activity/page.jsx
'use client';

import { useState } from 'react';

export default function ActivityPage() {
  const activities = [
    { id: 1, type: 'payment', title: 'Payment Received', amount: '+$1,250.00', time: '2 hours ago', icon: '💰', color: 'bg-green-100 text-green-600' },
    { id: 2, type: 'invoice', title: 'Invoice Sent', client: 'Acme Corp', time: '5 hours ago', icon: '📄', color: 'bg-blue-100 text-blue-600' },
    { id: 3, type: 'client', title: 'New Client Added', client: 'Tech Solutions Ltd', time: '1 day ago', icon: '👥', color: 'bg-purple-100 text-purple-600' },
    { id: 4, type: 'payment', title: 'Payment Received', amount: '+$850.00', time: '2 days ago', icon: '💰', color: 'bg-green-100 text-green-600' },
    { id: 5, type: 'invoice', title: 'Invoice Overdue', client: 'Global Industries', time: '3 days ago', icon: '⚠️', color: 'bg-red-100 text-red-600' },
    { id: 6, type: 'payment', title: 'Payment Received', amount: '+$2,100.00', time: '4 days ago', icon: '💰', color: 'bg-green-100 text-green-600' },
  ];

  const stats = [
    { label: 'Total Events', value: '248', change: '+12%', trend: 'up' },
    { label: 'This Week', value: '47', change: '+8%', trend: 'up' },
    { label: 'Pending', value: '12', change: '-5%', trend: 'down' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8 pt-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Activity</h1>
        <p className="text-gray-600">Track all your recent activities and updates</p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{stat.value}</h3>
                <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
          
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full ${activity.color} flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {activity.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {activity.title}
                  </h3>
                  {activity.client && (
                    <p className="text-sm text-gray-500 mt-1">{activity.client}</p>
                  )}
                  {activity.amount && (
                    <p className="text-sm font-medium text-green-600 mt-1">{activity.amount}</p>
                  )}
                </div>

                {/* Time */}
                <span className="text-sm text-gray-400 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>

          {/* Load More */}
          <button className="w-full mt-6 py-3 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors">
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  );
}