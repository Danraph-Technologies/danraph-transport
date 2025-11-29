import React from 'react'
import { Link } from 'react-router-dom'

function pricing() {
    return (
        <div>
            <div className='border rounded-lg w-full p-2 '>
                <div className='flex justify-between text-[20px] font-semibold  '>
                    <h2>Pricing & Commission</h2>
                    <p className='flex items-center gap-2 '>
                        <span>Today</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z" fill="black" fill-opacity="0.4" />
                        </svg>

                    </p>
                </div>

                <div className="md:grid-cols-4 mm:grid-cols-2 le:grid-cols-2 grid grid-cols-1 items-center gap-4 py-5">
                    <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
                        <p className="sm:text-[17px] text-[15px] le:text-[16px]">
                            Active Drivers
                        </p>

                        <div className="flex  flex-wrap gap-1 justify-between">
                            <p className="sm:text-[25px] text-[20px]  font-semibold">700</p>
                            <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                                <span>+15.03%</span>
                                <span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
                        <p className="sm:text-[17px] text-[15px] le:text-[16px]">
                            Total Commissioned Earned
                        </p>

                        <div className="flex  flex-wrap gap-1 justify-between">
                            <p className="sm:text-[25px] text-[20px]  font-semibold">500</p>
                            <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                                <span>+15.03%</span>
                                <span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
                        <p className="sm:text-[17px] text-[15px] le:text-[16px]">
                            Total Payouts to Drivers
                        </p>

                        <div className="flex  flex-wrap gap-1 justify-between">
                            <p className="sm:text-[25px] text-[20px]  font-semibold">100,000</p>
                            <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                                <span>+15.03%</span>
                                <span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex  flex-col gap-2 ">
                        <p className="sm:text-[17px] text-[15px] le:text-[16px]">
                            Active USers
                        </p>

                        <div className="flex  flex-wrap gap-1 justify-between">
                            <p className="sm:text-[25px] text-[20px]  font-semibold">200</p>
                            <p className="flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer">
                                <span>+15.03%</span>
                                <span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>




                </div>

                <div>
                    <div className='flex flex-wrap gap-2 justify-between items-center'>
                        <h2 className='font-semibold text-[20px]'>Drivers Earning Report</h2>
                        <Link to="/admin/manage-route" >
                            <button className='rounded-lg text-white flex items-center gap-2 bg-blue-700 p-2'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.625 7.8125C15.625 8.06114 15.5262 8.2996 15.3504 8.47541C15.1746 8.65123 14.9361 8.75 14.6875 8.75H8.75V14.6875C8.75 14.9361 8.65123 15.1746 8.47541 15.3504C8.2996 15.5262 8.06114 15.625 7.8125 15.625C7.56386 15.625 7.3254 15.5262 7.14959 15.3504C6.97377 15.1746 6.875 14.9361 6.875 14.6875V8.75H0.9375C0.68886 8.75 0.450403 8.65123 0.274587 8.47541C0.0987721 8.2996 0 8.06114 0 7.8125C0 7.56386 0.0987721 7.3254 0.274587 7.14959C0.450403 6.97377 0.68886 6.875 0.9375 6.875H6.875V0.9375C6.875 0.68886 6.97377 0.450403 7.14959 0.274587C7.3254 0.0987721 7.56386 0 7.8125 0C8.06114 0 8.2996 0.0987721 8.47541 0.274587C8.65123 0.450403 8.75 0.68886 8.75 0.9375V6.875H14.6875C14.9361 6.875 15.1746 6.97377 15.3504 7.14959C15.5262 7.3254 15.625 7.56386 15.625 7.8125Z" fill="white" />
                                </svg>
                                <span>Create/View routes</span>
                            </button>
                        </Link>
                    </div>

                    <div className='py-3 relative'>
                        <input type="search" name="" id="" placeholder='Search' className=' pl-10 w-full border rounded-full outline-none p-2 placeholder:text-[#6264A0]' />

                        <div className='absolute left-3 top-1/2 -translate-y-1/2'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0269 1.77007C7.84116 1.77373 5.74597 2.64364 4.2004 4.18921C2.65483 5.73478 1.78491 7.82997 1.78125 10.0157C1.78308 12.2033 2.65196 14.301 4.19753 15.8492C5.7431 17.3974 7.83932 18.2698 10.0269 18.2753C11.9671 18.2753 13.7548 17.5927 15.1683 16.4633L18.6017 19.8967C18.7757 20.0584 19.0055 20.1464 19.243 20.1423C19.4804 20.1381 19.7071 20.0421 19.8752 19.8744C20.0434 19.7067 20.14 19.4803 20.1448 19.2428C20.1496 19.0054 20.0622 18.7753 19.9009 18.6009L16.4675 15.1641C17.6402 13.7057 18.2794 11.8905 18.2795 10.0192C18.2795 5.47369 14.5724 1.77007 10.0269 1.77007ZM10.0269 3.60629C13.5816 3.60629 16.4433 6.46455 16.4433 10.0157C16.4433 13.5669 13.5816 16.4425 10.0269 16.4425C6.47227 16.4425 3.61401 13.5773 3.61401 10.0227C3.61401 6.46802 6.47227 3.60629 10.0269 3.60629Z" fill="#6264A0" />
                            </svg>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default pricing