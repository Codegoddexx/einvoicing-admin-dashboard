// src/app/(dashboard)/dashboard/page.jsx

export default function DashboardPage() {
  const transfers = [
    { id: 1, name: "Public Transport", date: "22 September 2020", positive: true, avatar: "/avatars/directions_bus.png" },
    { id: 2, name: "Grocery Store", date: "18 September 2020", positive: false, avatar: "/avatars/Vector.png" },
    { id: 3, name: "Public Transport", date: "22 September 2020", positive: true, avatar: "/avatars/Vector2.png" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Top Header with Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 px-4 md:px-8 pt-4">
        <div>
          <p className="text-sm mb-1">Hi Andrei,</p>
          <h1 className="text-2xl md:text-3xl">Welcome to Venus!</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-[341px]">
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
          <span className="text-sm font-medium absolute left-12 top-1/2 transform -translate-y-1/2">
            Search
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full h-[46px] px-4 pl-24 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="px-4 md:px-8">

        {/* ROW 1: Top Stats - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 min-h-[97px]">
            <p className="text-xs mb-1">This month earnings</p>
            <div className="flex justify-between">
              <h2 className="text-2xl">$682.5</h2>
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

          {/* Card 3 */}
          <div className="flex bg-white rounded-[20px] p-5 border border-gray-100 min-h-[97px] gap-3 items-center">
            <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src="/avatars/Icon3.png"
                alt="Graph"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <p className="text-xs mb-1">Earnings</p>
              <h2 className="text-2xl">$350.40</h2>
            </div>
          </div>

          {/* Card 4 - Activity */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[20px] p-5 text-white min-h-[97px] flex items-center justify-between">
            <div>
              <p className="text-xs text-white mb-1">Activity</p>
              <h2 className="text-2xl text-white">$540.50</h2>
            </div>
            <div className="w-[90px] h-[48px] flex-shrink-0">
              <img
                src="/avatars/Chartcurve.png"
                alt="Graph"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* ROW 2: Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          {/* Left Card - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 bg-white rounded-[20px] p-6 border border-gray-100 min-h-[345px] flex flex-col">
            {/* Top Section - Earnings */}
            <div className="mb-4">
              <p className="mb-1">This month earnings</p>
              <div className="flex items-start justify-between space-x-2">
                <h1 className="text-2xl">$682.5</h1>
                <div>
                  <img
                    src="/avatars/ChartButton.png"
                    alt="Graph illustration"
                    className="w-auto h-8 object-contain"
                  />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-1">● On track</p>
            </div>

            {/* Bottom Section - Graph Area */}
            <div className="relative flex-1 w-full">
              <img
                src="/avatars/HighLine.png"
                alt="High Line"
                className="absolute top-5 left-0 w-full object-contain"
              />
              <img
                src="/avatars/ChartGraph.png"
                alt="Chart"
                className="w-full h-full object-contain"
              />
              <img
                src="/avatars/Months.png"
                alt="Months"
                className="absolute bottom-0 left-0 w-full object-contain"
              />
            </div>
          </div>

          {/* Right Card - Takes 1 column */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 min-h-[345px] text-center">
            <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src="/avatars/Avatardp.png"
                alt="Charles Robbie"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl mb-1">Charles Robbie</h3>
            <p className="text-sm mb-6">@ New York, USA</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <h2 className="text-2xl">28</h2>
                <p className="text-xs">Projects</p>
              </div>
              <div>
                <h2 className="text-2xl">643</h2>
                <p className="text-xs">Followers</p>
              </div>
              <div>
                <h2 className="text-2xl">76</h2>
                <p className="text-xs">Following</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: Three Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 - Bar Chart */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 min-h-[345px] flex flex-col">
            <div className="mb-4">
              <p className="text-xs mb-1">This month earnings</p>
              <div className="flex items-start justify-between space-x-2">
                <h2 className="text-2xl">$682.5</h2>
                <span className="text-green-500 text-sm font-medium mb-1">+2.45%</span>
              </div>
              <p className="text-xs text-green-500 mt-1">● On track</p>
            </div>

            {/* Chart Section */}
            <div className="flex-1 relative">
              <img
                src="/avatars/SecondChart.png"
                alt="Chart"
                className="absolute top-10 left-0 w-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 - Transactions */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 min-h-[345px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Your Transactions</h3>
            </div>
            <div className="space-y-5">
              {transfers.map((transfer) => (
                <div key={transfer.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <img
                        src={transfer.avatar}
                        alt={transfer.name}
                        className="w-6 h-6 object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-base">{transfer.name}</p>
                      <p className="text-xs">{transfer.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-indigo-600 font-medium text-sm hover:text-indigo-700 flex items-center justify-end space-x-1">
              <span>View all</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Card 3 - Calendar */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 min-h-[345px]">
            <h2 className="text-3xl mb-6">27 May</h2>

            {/* Tasks List */}
            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="w-1 bg-purple-600 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Meet w/ Simmmple
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    01:00 PM - 02:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-1 bg-purple-600 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Fitness Training
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    02:00 PM - 03:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-1 bg-purple-600 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    Reading time
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    03:00 PM - 04:00 PM
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 text-indigo-600 font-medium text-sm hover:text-indigo-700 flex items-center justify-end space-x-1">
              <span>View all</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}