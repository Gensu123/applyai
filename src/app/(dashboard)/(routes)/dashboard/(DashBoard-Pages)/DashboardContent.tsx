// pages/dashboard.js or a similar file
'use client'

import Image from 'next/image';
import { IoIosLogOut, IoIosCloudUpload } from 'react-icons/io'; // Icons, make sure to install react-icons package

const DashboardContent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <aside className="w-64" aria-label="Sidebar">
        {/* Sidebar content here */}
      </aside>
      <main className="pl-64">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white">
          <h1 className="text-xl font-semibold">Welcome, Olivia Simmons</h1>
          {/* Profile image and other header content */}
        </header>

        {/* Main content */}
        <div className="p-4 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Hey, I am Front-end Developer, Based in Brazil</h2>
            {/* Profile card */}
            <div className="flex items-center space-x-4">
              <div>
                {/* Replace with actual Image component */}
                <Image src="/profile-pic.jpg" alt="Olivia Simmons" width={100} height={100} className="rounded-full" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Olivia Simmons</h3>
                <button className="bg-purple-500 text-white px-3 py-1 rounded-lg flex items-center">
                  Upload Resume <IoIosCloudUpload className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Details section */}
          <section className="flex space-x-4">
            {/* Work Experience card */}
            <div className="flex-1 bg-purple-200 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Work Experience:</h3>
              {/* Content */}
            </div>

            {/* Education card */}
            <div className="flex-1 bg-green-200 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Education:</h3>
              {/* Content */}
            </div>
          </section>

          {/* More sections like Skills, Hobbies, etc */}
        </div>
      </main>
    </div>
  );
};

export default DashboardContent;
