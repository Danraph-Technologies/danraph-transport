import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../images/danraph-logo.png";
import img2 from "../images/Danraph-services10.jpg";
import { FaSearch } from "react-icons/fa";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const SkeletonCircle = () => (
  <div
    className="rounded-full bg-gray-200 animate-pulse"
    style={{ width: 42, height: 42 }}
  />
);

const PROFILE_IMAGE_KEY = "danraph_profile_image";

const Navbar = ({ toggleMobileSidebar }) => {
  const [profileImage, setProfileImage] = useState(img2);
  const [imgLoading, setImgLoading] = useState(true);
  const location = useLocation();

  // Helper to update localStorage and state
  const updateProfileImage = (url) => {
    localStorage.setItem(PROFILE_IMAGE_KEY, url);
    setProfileImage(url);
  };

  useEffect(() => {
    setImgLoading(true);
    // Always fetch user info from backend on mount/route change
    axios
      .get("http://localhost:3000/api/auth/userscurrentinformation", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.profileImage) {
          const imgUrl =
            res.data.profileImage.startsWith("http") ||
            res.data.profileImage.startsWith("blob")
              ? res.data.profileImage
              : `http://localhost:3000${res.data.profileImage}`;
          updateProfileImage(imgUrl);
        } else {
          updateProfileImage(img2);
        }
      })
      .catch(() => updateProfileImage(img2))
      .finally(() => setImgLoading(false));

    // Listen for profile image update event
    const handleProfileImageUpdate = (e) => {
      if (e.detail && e.detail.url) {
        updateProfileImage(e.detail.url);
      }
    };
    window.addEventListener(
      "danraph-profile-image-updated",
      handleProfileImageUpdate
    );
    return () => {
      window.removeEventListener(
        "danraph-profile-image-updated",
        handleProfileImageUpdate
      );
    };
  }, [location.pathname]);

  return (
    <div className="border-b-[1px]  bg-[#FFFFFF] border-gray-300 pb-3 fixed top-0 left-0 w-full z-50">
      <div className="items-center hidden nav:flex justify-between mx-5">
        <div className="flex items-center gap-9">
          <Link to="/">
            <img src={img1} alt="" className="max-w-[170px] w-full" />
          </Link>
          <div className="relative max-w-[582px] w-[450px] top-4 ">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-400 rounded-3xl w-full outline-none"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 translate-y-4">
          <div className="border border-gray-400 rounded-full max-w-[50px] bg-transparent p-[7px] w-full ">
            <BellIcon className="  w-full cursor-pointer" />
          </div>
          <div>
            <Link to="/users/settings">
              {imgLoading ? (
                <SkeletonCircle />
              ) : (
                <img
                  src={profileImage}
                  alt=""
                  className="rounded-full w-[42px] h-[42px] object-cover cursor-pointer "
                  onLoad={() => setImgLoading(false)}
                />
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center nav:hidden justify-between px-4">
        <button onClick={toggleMobileSidebar}>
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Link to="/">
          <img src={img1} alt="" className="max-w-[130px] w-full" />
        </Link>
        <Link to="/users/settings">
          {imgLoading ? (
            <SkeletonCircle />
          ) : (
            <img
              src={profileImage}
              alt=""
              className="rounded-full w-[42px] h-[42px] object-cover cursor-pointer"
              onLoad={() => setImgLoading(false)}
            />
          )}
        </Link>
      </div>
    </div>
  );
};


export default Navbar;
