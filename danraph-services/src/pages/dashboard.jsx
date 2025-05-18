import React from 'react'
import img1 from "../images/danraph-services-11.png"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ImageWithSkeleton from "../Components/skeleton";

const dashboard = () => {
  return (
    <main>
      <div className='flex gap-8 items-start flex-wrap pb-14'>
        <section className='max-w-[580px] min-w-[290px] border border-gray-300 px-3 flex-1 py-2 rounded-lg' aria-labelledby="dashboard-greeting">
          <header>
            <h1 id="dashboard-greeting" className='font-semibold sm:text-[30px] text-[22px]'>Hi David</h1>
            <p className='font-normal sm:text-[20px] text-[16px] text-[#8F9DAD]'>Ready to ride?</p>
          </header>

          <section className='flex gap-3 items-center bg-[#F3F8FF] p-4 rounded-md mx-2 my-5' aria-label="Wallet">
            <ImageWithSkeleton src={img1} alt="Wallet" className='sm:max-w-[39px] max-w-[29px] w-full' />
            <span className='font-medium sm:text-[20px] text-[19px]'>Wallet <span className='pr-[3px]'>₦</span>22,000.00</span>
          </section>

          <section aria-labelledby="book-ride-heading">
            <h2 id="book-ride-heading" className='sm:text-[27px] text-[22px] font-semibold py-3 px-3'>Book a Ride</h2>
            <div className='flex flex-col justify-center items-center'>
              <ul className='flex flex-wrap max-w-[520px] justify-center items-center gap-6' style={{ listStyle: 'none' }}>
                <li className='border-[1px] rounded-md flex-1 border-gray-300 max-w-[360px] min-w-[220px] pr-5 p-3'>
                  <p className='flex items-center gap-3 sm:text-[18px] text-[16px]'>Main gate <FaArrowRight /></p>
                  <p className='sm:text-[18px] text-[16px]'>Hostel A</p>
                  <div className='flex items-center gap-5 justify-between py-3'>
                    <span className='sm:text-[20px] text-[18px] font-medium'>₦500</span>
                    <Link to="/users/ride">
                      <button className='bg-blue-800 border-2 border-blue-800 px-4 py-0 hover:bg-transparent hover:text-blue-800 transition duration-500 rounded-full text-white'>Book ride</button>
                    </Link>
                  </div>
                </li>
                <li className='border-[1px] rounded-md flex-1 border-gray-300 max-w-[360px] min-w-[220px] pr-5 p-3'>
                  <p className='flex items-center gap-3 text-[18px]'>Hostel B <FaArrowRight /></p>
                  <p className='text-[18px]'>Science Building</p>
                  <div className='flex items-center gap-5 justify-between py-3'>
                    <span className='sm:text-[20px] text-[18px] font-medium'>₦500</span>
                    <Link to="/users/ride">
                      <button className='bg-blue-800 border-2 border-blue-800 px-4 py-0 hover:bg-transparent hover:text-blue-800 transition duration-500 rounded-full text-white'>Book ride</button>
                    </Link>
                  </div>
                </li>
                <li className='border-[1px] rounded-md flex-1 border-gray-300 max-w-[360px] min-w-[220px] pr-5 p-3'>
                  <p className='flex items-center gap-3 text-[18px]'>Main gate <FaArrowRight /></p>
                  <p className='text-[18px]'>Hostel A</p>
                  <div className='flex items-center gap-5 justify-between py-3'>
                    <span className='text-[20px] font-medium'>₦1,000</span>
                    <Link to="/users/ride">
                      <button className='bg-blue-800 border-2 border-blue-800 px-4 py-0 hover:bg-transparent hover:text-blue-800 transition duration-500 rounded-full text-white'>Book ride</button>
                    </Link>
                  </div>
                </li>
                <li className='border-[1px] rounded-md flex-1 border-gray-300 max-w-[360px] min-w-[220px] pr-5 p-3'>
                  <p className='flex items-center gap-3 text-[18px]'>Main gate <FaArrowRight /></p>
                  <p className='text-[18px]'>Science Building</p>
                  <div className='flex items-center gap-5 justify-between py-3'>
                    <span className='sm:text-[20px] text-[18px] font-medium'>₦500</span>
                    <Link to="/users/ride">
                      <button className='bg-blue-800 border-2 border-blue-800 px-4 py-0 hover:bg-transparent hover:text-blue-800 transition duration-500 rounded-full text-white'>Book ride</button>
                    </Link>
                  </div>
                </li>
              </ul>
              <Link to="/users/charter" className='w-full flex justify-center items-center'>
                <button className='bg-blue-800 border-2 w-full border-blue-800 m-5 md:py-2 py-1 text-[20px] hover:bg-transparent hover:text-blue-800 transition duration-500 rounded-full text-white'>Charter a Car</button>
              </Link>
            </div>
          </section>
        </section>

        <section className='border flex-1 rounded-lg border-gray-300 max-w-[510px] min-w-[270px]' aria-labelledby="recent-rides-heading">
          <h2 id="recent-rides-heading" className='text-[26px] font-semibold px-3 py-2'>Recent Rides</h2>
          <ul className='border-[2px] border-gray-300 m-4 sm:px-4 px-3 mt-1 mb-6 rounded-lg py-2' style={{ listStyle: 'none' }}>
            <li className=''>
              <div className='flex flex-wrap items-center justify-between'>
                <div>
                  <p className='flex gap-2 items-center'><span>Main gate</span> <FaArrowRight /> <span>Hostel A</span></p>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-[12px] text-[#A7B1BD]'>Apr 22, 2024</span>
                  <span className='text-[#76CD90] text-[13px]'>Completed</span>
                </div>
              </div>
              <p className='text-[14px] text-[#585858] p-1'>Apr 22, 2024</p>
            </li>
            <hr className='my-3' />
            <li className=''>
              <div className='flex flex-wrap items-center justify-between'>
                <div>
                  <p className='flex gap-2 items-center'><span>Main gate</span> <FaArrowRight /> <span>Hostel A</span></p>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-[12px] text-[#A7B1BD]'>Apr 22, 2024</span>
                  <span className='text-[#76CD90] text-[13px]'>Completed</span>
                </div>
              </div>
              <p className='text-[14px] text-[#585858] p-1'>Apr 22, 2024</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default dashboard
