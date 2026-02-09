"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed inset-y-0 left-0 z-40">
        <Sidebar />
      </div>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Hamburger */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Search Icon */}
          <button
            onClick={() => setMobileSearchOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Search"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Expandable Search */}
        {mobileSearchOpen && (
          <div className="px-4 pb-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-11 px-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}
      </header>

      {/* Mobile Sidebar Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Sidebar mobile />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main
        className="
          transition-all
          ml-0
          md:ml-[260px]
          xl:ml-[290px]
          2xl:ml-[320px]
        "
      >
        {children}
      </main>
    </div>
  );
}
