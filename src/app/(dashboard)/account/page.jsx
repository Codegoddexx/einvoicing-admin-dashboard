// src/app/(dashboard)/account/page.jsx
'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    invoiceAlerts: true,
    paymentUpdates: false,
    weeklyReports: true
  });

  const handleToggle = (setting) => {
    setNotifications({
      ...notifications,
      [setting]: !notifications[setting]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8 pt-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Account</h1>
        <p className="text-gray-600">Manage your account and application preferences</p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Settings</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                PA
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">Precious Adachi</h3>
                <p className="text-sm text-gray-600">Administrator</p>
                <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                  Change Photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Precious Adachi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="Precious.Iwuala@heirstechnologies.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+234 800 000 0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  defaultValue="Administration"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                />
              </div>
            </div>

            <div className="pt-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 px-4 rounded-lg transition-all">
              <div>
                <h3 className="font-semibold text-gray-800">Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive email updates about system activities</p>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  notifications.emailNotifications ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${
                    notifications.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 px-4 rounded-lg transition-all">
              <div>
                <h3 className="font-semibold text-gray-800">Invoice Alerts</h3>
                <p className="text-sm text-gray-600">Get notified when invoices are generated</p>
              </div>
              <button
                onClick={() => handleToggle('invoiceAlerts')}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  notifications.invoiceAlerts ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${
                    notifications.invoiceAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 px-4 rounded-lg transition-all">
              <div>
                <h3 className="font-semibold text-gray-800">Payment Updates</h3>
                <p className="text-sm text-gray-600">Receive notifications for payment transactions</p>
              </div>
              <button
                onClick={() => handleToggle('paymentUpdates')}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  notifications.paymentUpdates ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${
                    notifications.paymentUpdates ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-4 hover:bg-gray-50 px-4 rounded-lg transition-all">
              <div>
                <h3 className="font-semibold text-gray-800">Weekly Reports</h3>
                <p className="text-sm text-gray-600">Get weekly summary of system activities</p>
              </div>
              <button
                onClick={() => handleToggle('weeklyReports')}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  notifications.weeklyReports ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${
                    notifications.weeklyReports ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Security Settings</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Change Password</h3>
              <p className="text-sm text-gray-600 mb-4">Update your password regularly for security</p>
              <button className="px-6 py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                Change Password
              </button>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}