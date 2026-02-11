"use client";

import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/LineChart';
import MiniBarChart from '@/components/charts/MiniBarChart';
import CurveChart from '@/components/charts/CurveChart';

export default function DashboardPage() {
  // Data
  const transfers = [
    { id: 1, name: "Public Transport", date: "22 September 2020", positive: true, avatar: "/avatars/directions_bus.png" },
    { id: 2, name: "Grocery Store", date: "18 September 2020", positive: false, avatar: "/avatars/Vector.png" },
    { id: 3, name: "Public Transport", date: "22 September 2020", positive: true, avatar: "/avatars/Vector2.png" }
  ];

  const tasks = [
    { id: 1, title: "Meet w/ Simmmple", time: "01:00 PM - 02:00 PM" },
    { id: 2, title: "Fitness Training", time: "02:00 PM - 03:00 PM" },
    { id: 3, title: "Reading time", time: "03:00 PM - 04:00 PM" }
  ];

  // Chart Data - Monthly Earnings (Main Chart)
  const monthlyEarningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Earnings',
        data: [400, 580, 490, 520, 450, 780, 460, 620, 570, 690, 540, 650],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return index === 5 ? 'rgba(99, 102, 241, 1)' : 'rgba(209, 213, 219, 0.5)';
        },
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const monthlyEarningsOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => '$' + context.parsed.y,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 800,
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          color: (ctx) => {
            // Only draw the top guide line
            return ctx.tick.value === 800
              ? 'rgba(99, 102, 241, 0.3)'
              : 'transparent';
          },
          borderDash: [4, 4], // dotted like Figma
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };


  // Line Chart Data (Bottom Left Card)
  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [400, 450, 380, 500, 420, 480, 520],
        fill: false,
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        tension: 0, // 🔴 THIS is the key
        pointRadius: 0,
      }
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Top Header with Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 lg:mb-8 px-4 sm:px-6 lg:px-8 w-full max-w-full mx-auto pt-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Hi Andrei,</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Welcome to Venus!</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block relative w-full max-w-lg">
          <svg
            className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-gray-600 text-sm font-medium absolute left-12 top-1/2 transform -translate-y-1/2">
            Search
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full h-[46px] px-4 pl-24 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-full mx-auto">
        {/* ROW 1: Top Stats - 4 Cards */}
        <div className="grid gap-4 md:gap-6 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Card 1 - This month earnings with mini bar chart */}
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 flex flex-col h-auto min-h-fit">

            <p className="text-xs text-gray-500 mb-2">This month earnings</p>
            <div className="flex justify-between items-end mt-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">$682.5</h2>
              <div className="flex items-end space-x-0.5 h-10 pb-2">
                <img
                  src="/avatars/Barthree.png"
                  alt="Bar"
                  className="h-[48.33px] w-[10.57]"
                />
                <img
                  src="/avatars/Barfour.png"
                  alt="Bar"
                  className="h-[48.33px] w-[10.57]"
                />
                <img
                  src="/avatars/Barfive.png"
                  alt="Bar"
                  className="h-[48.33px] w-[10.57]"
                />
                <img
                  src="/avatars/Barsix.png"
                  alt="Bar"
                  className="h-[48.33px] w-[10.57]"
                />
                <img
                  src="/avatars/Barseven.png"
                  alt="Bar"
                  className="h-[48.33px] w-[10.57]"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - New Clients */}
          <div className="bg-white rounded-[20px] px-5 py-3 border border-gray-100 min-h-[97px] flex items-center gap-3">
            {/* Icon Circle */}
            <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src="/Icondummy.png"
                alt="Icon"
                className="w-5 h-5 object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center min-w-0">
              <p className="text-xs whitespace-nowrap mb-1">
                New clients
              </p>
              <h2 className="text-2xl leading-tight">
                321
              </h2>
            </div>

            {/* Curve */}
            <div className="w-[90px] h-[48px] flex-shrink-0 ml-auto">
              <img
                src="/avatars/Curvegraph.png"
                alt="Graph"
                className="w-full h-full object-contain"
              />
            </div>
          </div>


          {/* Card 3 - Earnings */}
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 min-h-[97px]">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center h-full">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/avatars/Icon3.png"
                  alt="Graph"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">Earnings</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">$350.40</h2>
              </div>
            </div>
          </div>

          {/* Card 4 - Activity */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[20px] p-5 text-white min-h-[97px]">
            <div className="flex flex-col sm:flex-row justify-between gap-3 h-full">
              <div className="flex-1">
                <p className="text-xs text-white/80 mb-1">Activity</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">$540.50</h2>
              </div>
              <div className="self-end sm:self-center">
                <CurveChart
                  color="rgba(255, 255, 255, 0.3)"
                  values={[1, 21, 7, 20, 21,]}
                  variant="soft"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 mb-6">
          {/* Left Card - Monthly Earnings Chart (2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-[20px] p-5 lg:p-6 border border-gray-100 min-h-[345px] flex flex-col">
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">This month earnings</p>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">$682.5</h2>
                <div className='bg-indigo-50'>
                  <img
                    src="/avatars/ChartButton.png"
                    alt="Graph illustration"
                    className="w-auto h-8 object-contain"
                  />
                </div>
              </div>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                On track
              </p>
            </div>

            <div className="flex-1 min-h-[220px]">
              <BarChart data={monthlyEarningsData} options={monthlyEarningsOptions} height={220} />
            </div>
          </div>

          {/* Right Card - Profile (1 column) */}
          <div className="bg-white rounded-[20px] p-5 lg:p-6 border border-gray-100 min-h-[345px] text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
              <img
                src="/avatars/Avatardp.png"
                alt="Charles Robbie"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-1">Charles Robbie</h3>
            <p className="text-sm text-gray-500 mb-6">@ New York, USA</p>
            <div className="grid grid-cols-3 gap-4 lg:gap-6 w-full max-w-sm">
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-800">28</p>
                <p className="text-xs text-gray-500 mt-1">Projects</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-800">643</p>
                <p className="text-xs text-gray-500 mt-1">Followers</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-800">76</p>
                <p className="text-xs text-gray-500 mt-1">Following</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: Three Equal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 mb-6">
          {/* Card 1 - Weekly Earnings Chart */}
          <div className="bg-white rounded-[20px] p-5 lg:p-6 border border-gray-100 min-h-[345px] flex flex-col">
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">This week earnings</p>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">$682.5</h2>
                <span className="text-green-500 text-sm font-medium self-start">+2.45%</span>
              </div>
              <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                On track
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src="/avatars/SecondChart.png"
                alt="Chart"
                className="absolute top-10 left-0 w-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 - Transactions */}
          <div className="bg-white rounded-[20px] p-5 lg:p-6 border border-gray-100 min-h-[345px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-800 text-base lg:text-lg">Your Transactions</h3>
            </div>
            <div className="space-y-4 flex-1">
              {transfers.map((transfer) => (
                <div key={transfer.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src={transfer.avatar}
                        alt={transfer.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{transfer.name}</p>
                      <p className="text-xs text-gray-500">{transfer.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-indigo-600 font-medium text-sm hover:text-indigo-700 flex items-center justify-end gap-1 transition">
              <span>View all</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Card 3 - Calendar */}
          <div className="bg-white rounded-[20px] p-5 lg:p-6 border border-gray-100 min-h-[345px] flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B2559] mb-6">27 May</h2>

            <div className="space-y-4 flex-1">
              {tasks.map((task) => (
                <div key={task.id} className="flex gap-3">
                  <div className="w-1 bg-purple-600 rounded-full flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#1B2559] font-semibold text-base truncate">
                      {task.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {task.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center justify-end gap-2 transition group">
              <span>View all Tasks</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}