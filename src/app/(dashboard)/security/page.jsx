// src/app/(dashboard)/security/page.jsx
'use client';

import { useState } from 'react';

export default function SecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const securityItems = [
    { id: 1, title: 'Two-Factor Authentication', description: 'Add an extra layer of security', enabled: twoFactorEnabled, toggle: () => setTwoFactorEnabled(!twoFactorEnabled) },
    { id: 2, title: 'Login Notifications', description: 'Get notified of new logins', enabled: true },
    { id: 3, title: 'Session Management', description: 'Manage active sessions', enabled: false },
  ];

  const loginHistory = [
    { id: 1, device: 'Chrome on MacBook Pro', location: 'Lagos, Nigeria', time: '2 hours ago', status: 'success' },
    { id: 2, device: 'Safari on iPhone 14', location: 'Lagos, Nigeria', time: '1 day ago', status: 'success' },
    { id: 3, device: 'Firefox on Windows', location: 'Abuja, Nigeria', time: '3 days ago', status: 'failed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8 pt-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Security</h1>
        <p className="text-gray-600">Manage your account security settings</p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Security Settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Security Settings</h2>

          <div className="space-y-4">
            {securityItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>

                <button
                  onClick={item.toggle}
                  className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                    item.enabled ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                      item.enabled ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Change Password</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
              Update Password
            </button>
          </div>
        </div>

        {/* Login History */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Login History</h2>

          <div className="space-y-4">
            {loginHistory.map((login, idx) => (
              <div
                key={login.id}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  login.status === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {login.status === 'success' ? '✓' : '✗'}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{login.device}</h3>
                  <p className="text-sm text-gray-500 mt-1">{login.location} • {login.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}