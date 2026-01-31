// src/app/(dashboard)/dashboard/page.jsx

export default function DashboardPage() {
  const transfers = [
    { id: 1, name: "From Alex Manda", date: "Today, 09:30", amount: "+$50", positive: true, avatar: "AM" },
    { id: 2, name: "To Laura Santos", date: "Yesterday, 14:30", amount: "-$27", positive: false, avatar: "LS" },
    { id: 3, name: "From Jaden S.", date: "Yesterday, 09:15", amount: "+$157", positive: true, avatar: "JS" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Top Header with Search */}
      <div className="flex items-center justify-between mb-8 px-8 pt-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Hi Andrei,</p>
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Venus!</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-[341px]">
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

      <div className="px-8">

        {/* ROW 1: Top Stats - 4 Cards */}
        <div className="flex gap-[20px] max-w-[1150px] h-[97px] mb-[20px]">
          {/* Card 1 */}
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 w-[257px] h-[97px]">
            <p className="text-xs text-gray-500 mb-1">This month earnings</p>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold text-gray-800">$682.5</h2>
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
          <div className="bg-white rounded-[20px] px-5 py-3 border border-gray-100 w-[257px] h-[97px] flex items-center gap-3">

            {/* Icon Circle */}
            <div className="relative w-15 h-15 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              {/* Center Icon */}
              <img
                src="/Icondummy.png"
                alt="Icon"
                className="w-5 h-5 object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center min-w-0">
              <p className="text-xs text-gray-500 whitespace-nowrap mb-1">
                New clients
              </p>
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
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
          <div className="flex bg-white rounded-[20px] p-5 border border-gray-100 w-[257px] h-[97px] gap-5">
            <div className="w-15 h-15 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
              <img
                src="/avatars/Icon3.png"
                alt="Graph"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Earnings</p>
              <h2 className="text-2xl font-bold text-gray-800">$350.40</h2>
            </div>
          </div>

          {/* Card 4 - New Clients + Activity */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-[20px] p-5 text-white w-[257px] h-[97px]">
            <p className="text-xs text-white-500 mb-1">Activity</p>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold text-white-500">$540.50</h2>              
                 <div className="w-[90px] h-[48px] flex-shrink-0 ml-auto">
              <img
                src="/avatars/Chartcurve.png"
                alt="Graph"
                className="w-full h-full object-contain"
              />
            </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Two Cards */}
        <div className="flex gap-[20px] max-w-[1150px] h-[345px] mb-[20px]">
          {/* Left Card - 720px */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 w-[720px] h-[345px] flex flex-col">
            {/* Top Section - Earnings */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">This month earnings</p>
              <div className=" flex items-start justify-between space-x-2">
                <p className="text-2xl font-bold text-gray-800">$682.5</p>
                <div>
                  <img
                    src="/avatars/ChartButton.png"
                    alt="Graph illustration"
                    className="w-full h-full object-contain"
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

              {/* Main Chart */}
              <img
                src="/avatars/ChartGraph.png"
                alt="Chart"
                className="w-full h-full object-contain"
              />

              {/* Months */}
              <img
                src="/avatars/Months.png"
                alt="Months"
                className="absolute bottom-0 left-0 w-full object-contain"
              />
            </div>
          </div>

          {/* Right Card - 350px (Security) */}
          {/* ............. */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 w-[350px] h-[345px] text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src="/avatars/Avatardp.png"
                alt="Charles Robbie"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Charles Robbie</h3>
            <p className="text-sm text-gray-500 mb-6">@ New York, USA</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-2xl font-bold text-gray-800">28</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">643</p>
                <p className="text-xs text-gray-500">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">76</p>
                <p className="text-xs text-gray-500">Following</p>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 3: Three Equal Cards */}
        <div className="flex gap-[20px] max-w-[1150px] h-[345px]">

          {/* Card 1 - Bar Chart (350px) */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 w-[350px] h-[345px] flex flex-col">
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">This month earnings</p>
              <div className=" flex items-start justify-between space-x-2">
                <p className="text-2xl font-bold text-gray-800">$682.5</p>
                <span className="text-green-500 text-sm font-medium mb-1">+2.45%</span>
              </div>
              <p className="text-xs text-green-500 mt-1">● +2.45%</p>
              {/* Bottom Chart Section */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between mb-2">

                </div>

                {/* Line Chart */}
                <div className="h-20 relative">
                  <img
                    src="/avatars/SecondChart.png"
                    alt="Chart"
                    className="absolute top-10 left-0 w-full object-contain"
                  />
                </div>
              </div>
            </div>


          </div>

          {/* Card 2 - Profile (350px) */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 w-[350px] h-[345px] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Control card security in-app with a tap
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Discover our cards benefits with one tap.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-medium text-sm hover:bg-indigo-700 transition-colors">
              Cards
            </button>
          </div>

          {/* Card 3 - Transfers (350px) */}
          <div className="bg-white rounded-[20px] p-6 border border-gray-100 w-[350px] h-[345px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Your Transfers</h3>
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="space-y-3">
              {transfers.map((transfer) => (
                <div key={transfer.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">{transfer.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{transfer.name}</p>
                      <p className="text-xs text-gray-500">{transfer.date}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${transfer.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {transfer.amount}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-indigo-600 font-medium text-sm hover:text-indigo-700 flex items-center justify-center space-x-1">
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