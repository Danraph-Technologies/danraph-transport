import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/danraph-logo1.png";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import img1 from "../assets/danraph-services2.jpg";

const Navbar = ({ onMenuClick }) => {
  return (
    <div>
      <div className="border-b border-gray-300 py-[18px] ">
        {/* Desktop Navbar */}
        <div className=" items-center hidden lg:flex justify-between mx-10">
          <div className=" flex items-center flex-1 gap-10 ">
            <div className="max-w-[153px]">
              <Link to="/admin/dashboard">
                <img src={img} alt="" className="w-full" />
              </Link>
            </div>

            <div className="flex-1 relative">
              <input
                type="name"
                name=""
                id=""
                className="w-full rounded-full border border-gray-300 outline-none px-10 py-[10px] max-w-[482px] placeholder:text-[#6264A0]"
                placeholder="Search"
              />
              <div className="flex items-center gap-2 text-[#6264A0] absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0269 2.27007C7.84116 2.27373 5.74597 3.14364 4.2004 4.68921C2.65483 6.23478 1.78491 8.32997 1.78125 10.5157C1.78308 12.7033 2.65196 14.801 4.19753 16.3492C5.7431 17.8974 7.83932 18.7698 10.0269 18.7753C11.9671 18.7753 13.7548 18.0927 15.1683 16.9633L18.6017 20.3967C18.7757 20.5584 19.0055 20.6464 19.243 20.6423C19.4804 20.6381 19.7071 20.5421 19.8752 20.3744C20.0434 20.2067 20.14 19.9803 20.1448 19.7428C20.1496 19.5054 20.0622 19.2753 19.9009 19.1009L16.4675 15.6641C17.6402 14.2057 18.2794 12.3905 18.2795 10.5192C18.2795 5.97369 14.5724 2.27007 10.0269 2.27007ZM10.0269 4.10629C13.5816 4.10629 16.4433 6.96455 16.4433 10.5157C16.4433 14.0669 13.5816 16.9425 10.0269 16.9425C6.47227 16.9425 3.61401 14.0773 3.61401 10.5227C3.61401 6.96802 6.47227 4.10629 10.0269 4.10629Z"
                    fill="#6264A0"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              {" "}
              <Link to="/admin/notifications">
                {" "}
                <FiBell className="text-[42px] border border-gray-300 rounded-full p-2" />
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/admin/settings">
                {" "}
                <img
                  src={img1}
                  alt=""
                  className="w-[42px]  rounded-full h-[42px] "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-between items-center mx-3 gap-3">
          <button onClick={onMenuClick} className="p-2">
            <svg width="20" height="20" fill="none" viewBox="0 0 18 14">
              <path
                d="M18 7C18 7.19891 17.921 7.38968 17.7803 7.53033C17.6397 7.67098 17.4489 7.75 17.25 7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790178 7.38968 0 7.19891 0 7C0 6.80109 0.0790178 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H17.25C17.4489 6.25 17.6397 6.32902 17.7803 6.46967C17.921 6.61032 18 6.80109 18 7ZM0.75 1.75H17.25C17.4489 1.75 17.6397 1.67098 17.7803 1.53033C17.921 1.38968 18 1.19891 18 1C18 0.801088 17.921 0.610322 17.7803 0.46967C17.6397 0.329018 17.4489 0.25 17.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790178 0.610322 0 0.801088 0 1C0 1.19891 0.0790178 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75ZM17.25 12.25H0.75C0.551088 12.25 0.360322 12.329 0.21967 12.4697C0.0790178 12.6103 0 12.8011 0 13C0 13.1989 0.0790178 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75H17.25C17.4489 13.75 17.6397 13.671 17.7803 13.5303C17.921 13.3897 18 13.1989 18 13C18 12.8011 17.921 12.6103 17.7803 12.4697C17.6397 12.329 17.4489 12.25 17.25 12.25Z"
                fill="black"
              />
            </svg>
          </button>
          <div>
            <Link to="/admin/dashboard">
              <img src={img} alt="" className="max-w-[115px] w-full" />
            </Link>
          </div>
          <div>
            <Link to="/admin/settings">
              <img
                src={img1}
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
