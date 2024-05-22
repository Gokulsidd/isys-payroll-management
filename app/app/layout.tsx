'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';

const Layout = ({ children } : { children : React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-full">
      <div className='h-[80px] w-full fixed top-0 sm:hidden border border-gray-100    bg-white/75'></div>
      {/* Hamburger Menu */}
      <div className="fixed top-6 left-8 sm:left-4 z-50 cursor-pointer bg-[#fefefe]" onClick={toggleSidebar}>
        <svg className="w-10 h-10 p-1 hover:shadow-main hover:border-inherit border text-black rounded-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
        </svg>
      </div>
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar  handleSideBar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="p-2 px-4 w-full h-[100vh] overflow-y-scroll mt-16 sm:mt-0 sm:ml-12">{children}</div>
    </div>
  );
};

export default Layout;
