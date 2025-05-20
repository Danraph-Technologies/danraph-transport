import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        {/* Sidebar: always visible on desktop, toggled on mobile */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 px-4 pb-10 pt-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin