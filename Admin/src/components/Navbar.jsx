import React from 'react'
import img from "../assets/danraph-logo1.png"
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import img1 from "../assets/danraph-services2.jpg"


const Navbar = ({ onMenuClick }) => {
  return (
    <div>
      <div className='border-b border-gray-300 py-[18px] '>
      {/* Desktop Navbar */}
      <div className=' items-center hidden lg:flex justify-between mx-10'>
        <div className=' flex items-center flex-1 gap-10 '>
          <div className='max-w-[153px]'>
          <img src={img} alt="" className='w-full'/>
          </div>

          <div className='flex-1 relative'>
            <input
              type="name"
              name=""
              id=""
              className='w-full rounded-full border border-gray-300 outline-none px-10 py-[10px] max-w-[482px] placeholder:text-[#6264A0]'
              placeholder="Search"
            />
            <div className='flex items-center gap-2 text-[#6264A0] absolute left-3 top-1/2 -translate-y-1/2'>
              <FaSearch className="w-4 h-4 " />
            </div>
          </div>
        </div>

       <div className='flex items-center gap-4'>
        <div> <FiBell className='text-[42px] border border-gray-300 rounded-full p-2'/></div>
       <div><img src={img1} alt="" className='w-[42px]  rounded-full h-[42px] '/></div>
       
       </div>
        </div> 

       {/* Mobile Navbar */}
       <div className='flex lg:hidden justify-between items-center mx-3 gap-3'>
          <button onClick={onMenuClick} className="p-2">
            <svg width="20" height="20" fill="none" viewBox="0 0 18 14">
              <path d="M18 7C18 7.19891 17.921 7.38968 17.7803 7.53033C17.6397 7.67098 17.4489 7.75 17.25 7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790178 7.38968 0 7.19891 0 7C0 6.80109 0.0790178 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H17.25C17.4489 6.25 17.6397 6.32902 17.7803 6.46967C17.921 6.61032 18 6.80109 18 7ZM0.75 1.75H17.25C17.4489 1.75 17.6397 1.67098 17.7803 1.53033C17.921 1.38968 18 1.19891 18 1C18 0.801088 17.921 0.610322 17.7803 0.46967C17.6397 0.329018 17.4489 0.25 17.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790178 0.610322 0 0.801088 0 1C0 1.19891 0.0790178 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75ZM17.25 12.25H0.75C0.551088 12.25 0.360322 12.329 0.21967 12.4697C0.0790178 12.6103 0 12.8011 0 13C0 13.1989 0.0790178 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75H17.25C17.4489 13.75 17.6397 13.671 17.7803 13.5303C17.921 13.3897 18 13.1989 18 13C18 12.8011 17.921 12.6103 17.7803 12.4697C17.6397 12.329 17.4489 12.25 17.25 12.25Z" fill="black"/>
            </svg>
          </button>
          <div>
            <img src={img} alt="" className='max-w-[115px] w-full'/>
          </div>
          <div>
            <img src={img1} alt="" className='w-[40px] h-[40px] rounded-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
