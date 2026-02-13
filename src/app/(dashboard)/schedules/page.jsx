// src/app/(dashboard)/schedules/page.jsx
'use client';

import { useState } from 'react';

export default function SchedulesPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    { id: 1, title: 'Client Meeting - Acme Corp', time: '09:00 AM', duration: '1 hour', type: 'meeting', color: 'bg-blue-100 text-blue-600' },
    { id: 2, title: 'Invoice Due - Tech Solutions', time: '11:30 AM', duration: '30 min', type: 'deadline', color: 'bg-red-100 text-red-600' },
    { id: 3, title: 'Team Standup', time: '02:00 PM', duration: '30 min', type: 'meeting', color: 'bg-purple-100 text-purple-600' },
    { id: 4, title: 'Payment Follow-up', time: '04:00 PM', duration: '45 min', type: 'task', color: 'bg-green-100 text-green-600' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Quarterly Review', date: 'Feb 15, 2026', time: '10:00 AM', attendees: 5 },
    { id: 2, title: 'Client Presentation', date: 'Feb 18, 2026', time: '02:00 PM', attendees: 3 },
    { id: 3, title: 'Tax Filing Deadline', date: 'Feb 28, 2026', time: 'All Day', attendees: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Schedules</h1>
            <p className="text-gray-600">Manage your calendar and appointments</p>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            + New Event
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Today's Schedule</h2>
              <span className="text-sm text-gray-500">February 13, 2026</span>
            </div>

            <div className="space-y-4">
              {events.map((event, idx) => (
                <div
                  key={event.id}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer border-l-4 border-transparent hover:border-indigo-600"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Time */}
                  <div className="flex flex-col items-center justify-center min-w-[80px] text-center">
                    <span className="text-lg font-bold text-gray-800">{event.time.split(' ')[0]}</span>
                    <span className="text-xs text-gray-500">{event.time.split(' ')[1]}</span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-500">{event.duration}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.color}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Event Quick Button */}
            <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-all font-medium">
              + Add New Event
            </button>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-6">
            {/* Mini Calendar Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Calendar</h3>
              <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 text-sm">Calendar View</span>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={event.id}
                    className="p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer group"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors text-sm mb-1">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-500">{event.date} • {event.time}</p>
                    {event.attendees > 0 && (
                      <p className="text-xs text-gray-400 mt-1">{event.attendees} attendees</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}