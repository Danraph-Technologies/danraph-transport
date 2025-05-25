import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex min-w-0"> {/* critical fix */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 px-4 pb-10 pt-5 min-w-0"> {/* critical fix */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin