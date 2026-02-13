// src/app/(dashboard)/library/page.jsx
'use client';

export default function LibraryPage() {
  const documents = [
    { id: 1, name: 'Invoice Template.docx', size: '2.4 MB', date: 'Feb 10, 2026', type: 'document', color: 'text-blue-600' },
    { id: 2, name: 'Client Contracts.pdf', size: '5.1 MB', date: 'Feb 8, 2026', type: 'pdf', color: 'text-red-600' },
    { id: 3, name: 'Financial Report Q4.xlsx', size: '1.8 MB', date: 'Feb 5, 2026', type: 'spreadsheet', color: 'text-green-600' },
    { id: 4, name: 'Company Logo.png', size: '890 KB', date: 'Feb 3, 2026', type: 'image', color: 'text-purple-600' },
    { id: 5, name: 'Tax Documents 2025.zip', size: '12.3 MB', date: 'Jan 28, 2026', type: 'archive', color: 'text-orange-600' },
    { id: 6, name: 'Meeting Notes.txt', size: '45 KB', date: 'Jan 25, 2026', type: 'text', color: 'text-gray-600' },
  ];

  const categories = [
    { name: 'Documents', count: 24, icon: '📄', color: 'bg-blue-100 text-blue-600' },
    { name: 'Images', count: 18, icon: '🖼️', color: 'bg-purple-100 text-purple-600' },
    { name: 'Spreadsheets', count: 12, icon: '📊', color: 'bg-green-100 text-green-600' },
    { name: 'PDFs', count: 31, icon: '📑', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Library</h1>
            <p className="text-gray-600">Manage your documents and files</p>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            + Upload File
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-full ${cat.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count} files</p>
            </div>
          ))}
        </div>

        {/* Files List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Recent Files</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {documents.map((doc, idx) => (
              <div
                key={doc.id}
                className="flex items-center gap-4 p-6 hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* File Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center ${doc.color} group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-500">{doc.size} • {doc.date}</p>
                </div>

                {/* Actions */}
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

