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
    <input
      type="text"
      placeholder="Search..."
      className="w-full h-[46px] px-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    />
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
            <div className="flex space-x-1 mb-1">
              <div className="w-1 h-6 bg-indigo-400 rounded"></div>
              <div className="w-1 h-8 bg-indigo-500 rounded"></div>
              <div className="w-1 h-4 bg-indigo-300 rounded"></div>
              <div className="w-1 h-10 bg-indigo-600 rounded"></div>
            </div>
          </div>
        </div>

        {/* Card 2 - Empty with icon */}
        <div className="bg-white rounded-[20px] p-5 border border-gray-100 flex items-center justify-center w-[257px] h-[97px]">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[20px] p-5 border border-gray-100 w-[257px] h-[97px]">
          <p className="text-xs text-gray-500 mb-1">This month earnings</p>
          <h2 className="text-2xl font-bold text-gray-800">$350.40</h2>
        </div>

        {/* Card 4 - New Clients + Activity */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[20px] p-5 text-white w-[257px] h-[97px]">
          <div className="flex items-center space-x-2 mb-3">
           
            <div>
              <p className="text-sm opacity-90">New clients</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xs opacity-75">Activity</p>
            <div className="flex-1 flex items-end space-x-1 h-6">
              <div className="w-1 h-2 bg-white/40 rounded"></div>
              <div className="w-1 h-4 bg-white/60 rounded"></div>
              <div className="w-1 h-3 bg-white/50 rounded"></div>
              <div className="w-1 h-5 bg-white/70 rounded"></div>
              <div className="w-1 h-4 bg-white/60 rounded"></div>
              <div className="w-1 h-6 bg-white rounded"></div>
            </div>
            <p className="text-xl font-bold">$540.50</p>
          </div>
        </div>
      </div>

      {/* ROW 2: Two Large Cards */}
    <div className="flex gap-[20px] max-w-[1150px] h-[345px] mb-[20px]">
        {/* Left Card - 720px */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100 w-[720px] h-[345px]">
          <div className="flex items-start justify-between mb-6">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Reach financial goals faster
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Use your Venus debit card in the world with no hidden fees. Hold, transfer and spend money.
              </p>
              <button className="mt-4 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-indigo-700 transition-colors">
                Learn more
              </button>
            </div>
            <div className="w-64 h-40 overflow-hidden rounded-xl">
              <img
                src="/avatars/IllustrationCard.png"
                alt="Card illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Chart Section */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-800">This month earnings</h3>
                <div className="flex items-end space-x-2 mt-2">
                  <p className="text-3xl font-bold text-gray-800">$682.5</p>
                  <span className="text-green-500 text-sm font-medium mb-1">+2.45%</span>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="h-20 relative">
              <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 80 Q 50 60, 100 70 T 200 50 T 300 40 T 400 30"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                />
                <path
                  d="M 0 80 Q 50 60, 100 70 T 200 50 T 300 40 T 400 30 L 400 100 L 0 100 Z"
                  fill="url(#chartGradient)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Card - 350px (Security) */}
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
      </div>

      {/* ROW 3: Three Equal Cards */}
      <div className="flex gap-[20px] max-w-[1150px] h-[345px]">
        {/* Card 1 - Bar Chart (350px) */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100 w-[350px] h-[345px] flex flex-col">
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">This month earnings</p>
            <div className="flex items-end space-x-2">
              <p className="text-2xl font-bold text-gray-800">$682.5</p>
              <span className="text-green-500 text-sm font-medium mb-1">+2.45%</span>
            </div>
            <p className="text-xs text-green-500 mt-1">● On track</p>
          </div>

          {/* Bar Chart */}
          <div className="flex-1 flex items-end justify-between gap-2 px-2">
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-indigo-100 rounded-t" style={{ height: '20%' }}></div>
              <span className="text-xs text-gray-500 mt-2">Jan</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-indigo-100 rounded-t" style={{ height: '35%' }}></div>
              <span className="text-xs text-gray-500 mt-2">Feb</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-indigo-100 rounded-t" style={{ height: '25%' }}></div>
              <span className="text-xs text-gray-500 mt-2">Mar</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-indigo-100 rounded-t" style={{ height: '45%' }}></div>
              <span className="text-xs text-gray-500 mt-2">Apr</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-indigo-600 rounded-t" style={{ height: '100%' }}></div>
              <span className="text-xs text-gray-500 mt-2">May</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-indigo-100 rounded-t" style={{ height: '40%' }}></div>
              <span className="text-xs text-gray-500 mt-2">Jun</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-indigo-100 rounded-t" style={{ height: '50%' }}></div>
              <span className="text-xs text-gray-500 mt-2">Jul</span>
            </div>
          </div>
        </div>

        {/* Card 2 - Profile (350px) */}
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