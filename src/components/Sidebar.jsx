'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from "next-auth/react";

<button onClick={() => signOut({ callbackUrl: "/auth/login" })}>
  Logout
</button>


export default function Sidebar({ mobile = false }) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
    { name: 'Activity', path: '/activity', icon: ActivityIcon },
    { name: 'Library', path: '/library', icon: LibraryIcon },
    { name: 'Security', path: '/security', icon: SecurityIcon },
    { name: 'Schedules', path: '/schedules', icon: ScheduleIcon },
    { name: 'Payouts', path: '/payouts', icon: PayoutIcon },
    { name: 'Settings', path: '/settings', icon: SettingsIcon }
  ];

  return (
    <aside
      className={`
        ${mobile ? "w-full max-w-[290px]" : "w-[260px] xl:w-[290px] 2xl:w-[320px]"}
        flex flex-col h-full bg-white
      `}
    >
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b">
        <img
          src="/avatars/Logofull.png"
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pt-4 overflow-y-auto">
        {menuItems.map(({ name, path, icon: Icon }) => {
          const isActive =
            pathname === path || pathname.startsWith(path + '/');

          return (
            <Link
              key={path}
              href={path}
              className={`
                flex items-center gap-3 px-4 py-3 mb-2 rounded-xl
                text-sm font-medium transition-all
                ${isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'text-gray-500 hover:bg-gray-50'}
              `}
            >
              <Icon />
              {name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 w-full"
      >
        <LogoutIcon />
        Log Out
      </button>
    </aside>
  );
}

/* ---------------- Icons ---------------- */
function Icon({ d }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );
}

function DashboardIcon() { return <Icon d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />; }
function ActivityIcon() { return <Icon d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />; }
function LibraryIcon() { return <Icon d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />; }
function SecurityIcon() { return <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622z" />; }
function ScheduleIcon() { return <Icon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />; }
function PayoutIcon() { return <Icon d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />; }
function SettingsIcon() { return <Icon d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0" />; }
function LogoutIcon() { return <Icon d="M17 16l4-4m0 0l-4-4m4 4H7" />; }
