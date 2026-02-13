// src/app/(dashboard)/settings/page.jsx
'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'business', name: 'Business', icon: '🏢' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'billing', name: 'Billing', icon: '💳' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mb-8 px-4 sm:px-6 lg:px-8 pt-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h2>
                <div className="space-y-5">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      A
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                        Change Photo
                      </button>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max 2MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="Andrei"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="User"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="admin@heirs.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+234 123 456 7890"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-900"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                      Save Changes
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Business Information</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      defaultValue="Heirs Technologies"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID</label>
                    <input
                      type="text"
                      placeholder="123-45-6789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition text-gray-900"
                      placeholder="Enter your business address"
                    />
                  </div>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
                <p className="text-gray-500">Manage how you receive notifications</p>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Billing & Subscription</h2>
                <p className="text-gray-500">Manage your subscription and payment methods</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}