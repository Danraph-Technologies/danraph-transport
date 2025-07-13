import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Drivers = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar onHamburgerClick={() => setSidebarOpen(true)} />
      <div className="flex">
        {/* Desktop sidebar */}
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        {/* Mobile sidebar */}
        <div
          className={`fixed inset-0 z-50  bg-black bg-opacity-30   sm:hidden transition-opacity duration-[0.4s] ${
            sidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className={`fixed left-0 top-0 h-full py-12 w-[240px] overflow-y-auto bg-white shadow-lg transition-transform duration-[0.4s] transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-3xl text-gray-700 focus:outline-none"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              &times;
            </button>
            <Sidebar closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </div>
        <div className="flex-1 p-4 mt-[70px] sm:mt-[100px]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Drivers;
