import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from '../Components/sidebar';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const Users = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div>
      <Navbar toggleMobileSidebar={toggleMobileSidebar} />
      <div className="flex sm:pt-24 pt-[77px] min-h-screen">
        <Sidebar  isMobileOpen={isMobileOpen} toggleMobileSidebar={toggleMobileSidebar} />
        
       
        <div className={`flex-1 sm:px-3 px-3 py-5  ${isMobileOpen ? 'ml-0' : ''} sm:ml-0`}>
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Users;