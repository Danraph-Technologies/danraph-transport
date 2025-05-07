import React from 'react'
import img from "../assets/danraph-logo1.png"
import img1 from "../assets/danraph-services1.png"
import img2 from "../assets/danraph-services2.jpg"
import { FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageWithSkeleton from "./skeleton";

const Navbar = ({ onHamburgerClick }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <div className='border bg-[#FFFFFF]  border-gray-300 '>
        {/* Desktop Navbar */}
        <div className='hidden items-center  justify-between sm:flex px-10 py-5'>
          <div className='flex items-center flex-1 gap-16'>
          <a href="https://danraph-transport.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={img} alt="" className='max-w-[159px] w-full' />
            </a>
            <div className='relative max-w-[483px] w-full'>
              <input
                type="search"
                placeholder='Search'
                className='outline-none border border-gray-300 rounded-full w-full pl-8 py-[10px]'
              />
              <FaSearch className='text-[#6264A0] absolute left-2 top-1/2 transform -translate-y-1/2' />
            </div>
          </div>
          <div className='flex items-center gap-8'>
            <div className='max-w-[48px] border border-gray-300 rounded-full p-2'>
              <img src={img1} alt="" className='w-full rounded-full' />
            </div>
            
            <div className='w-[50px] h-[50px]'>
             <Link to="/drivers/settings"> <img src={img2} alt="" className='w-full h-full rounded-full' /></Link>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className='sm:hidden flex items-center justify-between px-5 py-3'>
          <button onClick={onHamburgerClick} aria-label="Open sidebar">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 7C18 7.19891 17.921 7.38968 17.7803 7.53033C17.6397 7.67098 17.4489 7.75 17.25 7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790178 7.38968 0 7.19891 0 7C0 6.80109 0.0790178 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H17.25C17.4489 6.25 17.6397 6.32902 17.7803 6.46967C17.921 6.61032 18 6.80109 18 7ZM0.75 1.75H17.25C17.4489 1.75 17.6397 1.67098 17.7803 1.53033C17.921 1.38968 18 1.19891 18 1C18 0.801088 17.921 0.610322 17.7803 0.46967C17.6397 0.329018 17.4489 0.25 17.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790178 0.610322 0 0.801088 0 1C0 1.19891 0.0790178 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75ZM17.25 12.25H0.75C0.551088 12.25 0.360322 12.329 0.21967 12.4697C0.0790178 12.6103 0 12.8011 0 13C0 13.1989 0.0790178 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75H17.25C17.4489 13.75 17.6397 13.671 17.7803 13.5303C17.921 13.3897 18 13.1989 18 13C18 12.8011 17.921 12.6103 17.7803 12.4697C17.6397 12.329 17.4489 12.25 17.25 12.25Z" fill="black" />
            </svg>
          </button>
          <a href="https://danraph-transport.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ImageWithSkeleton src={img} alt="" className='max-w-[125px] w-full' />
            </a>
            <Link to="/drivers/settings"><ImageWithSkeleton src={img2} alt="" className='w-[45px] h-[45px] rounded-full' /></Link> 
        </div>
      </div>
    </div>
  )
}

export default Navbar