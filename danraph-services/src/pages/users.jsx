import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/sidebar";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import axios from "axios";

const Users = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/auth/userscurrentinformation", {
        withCredentials: true,
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="min-w-[200px] overflow-x-auto  ">
      <Navbar toggleMobileSidebar={toggleMobileSidebar} />
      <div className="flex sm:pt-24 pt-[77px] min-h-screen">
        <Sidebar
          isMobileOpen={isMobileOpen}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        <div
          className={`flex-1 sm:px-3 px-3 py-5  ${
            isMobileOpen ? "ml-0" : ""
          } sm:ml-0`}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Users;
