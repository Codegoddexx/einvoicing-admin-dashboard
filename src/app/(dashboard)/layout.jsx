import Sidebar from '@/components/Sidebar';
// import Header from '@/components/Header';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-[290px]">
        {/* <Header /> */}
        <main>
          {/* <div className="p-8"> */}
            {children}
          {/* </div> */}
        </main>
      </div>
    // </div>
  );
}