import React from 'react'
import img from "../assets/danraph-arrow.png"
import img1 from "../assets/Natalia.png"
import img2 from "../assets/drew.png"
import img3 from "../assets/Andy.png"
import img4 from "../assets/korray.png"
import img5 from "../assets/kate.png"
import img6 from "../assets/melody.png"

const Dashboard = () => {
  return (
    <div>
      <div className='flex flex-wrap'>
      <div className='max-w-[816px] w-full flex-1 border border-gray-300 rounded-lg p-2 px-4'>
        <div className='flex justify-between items-center'>
          <p className='text-[20px] font-semibold'>Overview</p>
          <p className='flex items-center gap-1'>
            <span className='text-[20px] font-semibold'>Today</span> 
            <span className='cursor-pointer'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z" fill="black" fill-opacity="0.4"/>
              </svg>
            </span>
          </p>
        </div>

        <div className='flex flex-wrap sm:justify-between justify-center items-center sm:gap-3 gap-5 py-5'>
        <div className='mm:max-w-[236px] le:max-w-[210px] w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex flex-col gap-2 '>
            <p className='sm:text-[17px] text-[15px] le:text-[16px]'>Total Registered Users</p>

            <div className='flex justify-between'>
              <p className='sm:text-[28px] text-[20px] le:text-[22px] font-semibold'>700</p>
              <p className='flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer'>
                <span>+15.03%</span>
                <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z" fill="black"/>
                </svg>
                </span>
              </p>
            </div>
          </div>

          <div className='mm:max-w-[236px] le:max-w-[210px] w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex flex-col gap-2 '>
            <p className='sm:text-[17px] text-[15px] le:text-[16px]'>Total Active Drivers</p>

            <div className='flex justify-between'>
              <p className='sm:text-[28px] text-[20px] le:text-[22px] font-semibold'>500</p>
              <p className='flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer'>
                <span>+15.03%</span>
                <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z" fill="black"/>
                </svg>
                </span>
              </p>
            </div>
          </div>


          <div className='mm:max-w-[236px] le:max-w-[210px] w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex flex-col gap-2 '>
            <p className='sm:text-[17px] text-[15px] le:text-[16px]'>Total Rides Today</p>

            <div className='flex justify-between'>
              <p className='sm:text-[28px] text-[20px] le:text-[22px] font-semibold'>100</p>
              <p className='flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer'>
                <span>+15.03%</span>
                <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z" fill="black"/>
                </svg>
                </span>
              </p>
            </div>
          </div>


          <div className='mm:max-w-[236px] le:max-w-[210px] w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex flex-col gap-2 '>
            <p className='sm:text-[17px] text-[15px] le:text-[16px]'>Total Charters Today</p>

            <div className='flex justify-between'>
              <p className='sm:text-[28px] text-[20px] le:text-[22px] font-semibold'>60</p>
              <p className='flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer'>
                <span>+15.03%</span>
                <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z" fill="black"/>
                </svg>
                </span>
              </p>
            </div>
          </div>


          <div className='mm:max-w-[236px] le:max-w-[210px] w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex flex-col gap-2 '>
            <p className='sm:text-[17px] text-[15px] le:text-[16px]'>Wallet Balance</p>

            <div className='flex justify-between'>
              <p className='sm:text-[28px] text-[20px] le:text-[22px] font-semibold'>50,000</p>
              <p className='flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer'>
                <span>+15.03%</span>
                <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z" fill="black"/>
                </svg>
                </span>
              </p>
            </div>
          </div>


          <div className='mm:max-w-[236px] le:max-w-[210px] w-full bg-[#EDEEFC] rounded-xl px-4 py-4 flex flex-col gap-2 '>
            <p className='sm:text-[17px] text-[15px] le:text-[16px]'>Income Today</p>

            <div className='flex justify-between'>
              <p className='sm:text-[28px] text-[20px] le:text-[22px] font-semibold'>100,000</p>
              <p className='flex items-center gap-2 hover:-translate-x-2 transition duration-500 cursor-pointer'>
                <span>+15.03%</span>
                <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2667 6.93992L16.7924 5.04785L15.1681 11.6453L13.1419 9.7001L9.87346 13.1047C9.7625 13.2203 9.60921 13.2857 9.44898 13.2857C9.28876 13.2857 9.13547 13.2203 9.02451 13.1047L6.62459 10.6048L3.09492 14.2816C2.86987 14.516 2.49738 14.5236 2.26295 14.2985C2.02852 14.0735 2.02092 13.701 2.24597 13.4666L6.20012 9.34767C6.31108 9.23209 6.46437 9.16675 6.62459 9.16675C6.78482 9.16675 6.93811 9.23209 7.04907 9.34767L9.44898 11.8476L12.293 8.8851L10.2667 6.93992Z" fill="black"/>
                </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className='sm:text-[22px] text-[18px] py-2 font-semibold'>Recent Activities Section</p>
          <div className='py-4 sm:px-3 px-1 grid grid-cols-1 leee:grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Latest Ride Requests & Charters */}
            <div className='w-full'>
              <p className='sm:text-[19.7px] text-[17px]  text-[#323132] font-medium mb-1'>Latest Ride Requests & Charters</p>
              <hr className='border border-[#dbdbdb77]'/>
              <div className='overflow-x-auto'>
                <table className='min-w-[340px] w-full'>
                  <thead>
                    <tr className='text-left text-[14.8px] text-[#8A929C]'>
                      <th className='py-2 pr-4 font-normal'>user Name</th>
                      <th className='py-2 pr-4 font-normal'>To to</th>
                      <th className='py-2 font-normal'>Date</th>
                    </tr>
                  </thead>
                  <tbody className='text-[15px] text-[#616161]'>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        Robert 0,12345
                        <div className='text-[13px] text-[#737478] font-light'>Ride Request</div>
                      </td>
                      <td className='py-3 align-top'>
                        Main Gate
                        <div className='flex items-center gap-1 text-[13px] text-[#737478]'>
                          <img src={img} alt="" className='max-w-[10px] w-full pt-[4px]'/>
                          Hostel A
                        </div>
                      </td>
                      <td className='py-3 align-top'>
                        4/4/2024
                        <div className='text-[13px] text-[#737478] font-light'>10:00AM</div>
                      </td>
                    </tr>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        SamanthaP, 23456
                        <div className='text-[13px] text-[#737478] font-light'>Charter</div>
                      </td>
                      <td className='py-3 align-top'>
                        Library
                        <div className='text-[13px] text-[#737478] font-light'>Sports Complex</div>
                      </td>
                      <td className='py-3 align-top'>
                        4/3/2024
                        <div className='text-[13px] text-[#737478] font-light'>3:30PM</div>
                      </td>
                    </tr>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        James M, 34567
                        <div className='text-[13px] text-[#737478] font-light'>Ride Request</div>
                      </td>
                      <td className='py-3 align-top'>
                        Hostel B
                        <div className='flex items-center gap-1 text-[13px] text-[#737478]'>
                          <img src={img} alt="" className='max-w-[10px] w-full pt-[4px]'/>
                          Main Gate
                        </div>
                      </td>
                      <td className='py-3 align-top'>
                        4/3/2024
                        <div className='text-[13px] text-[#737478] font-light'>12:15 PM</div>
                      </td>
                    </tr>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        Ashley T., 45678
                        <div className='text-[13px] text-[#737478] font-light'>Charter</div>
                      </td>
                      <td className='py-3 align-top'>
                        Charter
                        <div className='flex items-center gap-1 text-[13px] text-[#737478]'>
                          <img src={img} alt="" className='max-w-[10px] w-full pt-[4px]'/>
                          North Lot
                        </div>
                      </td>
                      <td className='py-3 align-top'>
                        4/2/2024
                        <div className='text-[13px] text-[#737478] font-light'>6:45 PM</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-[16px] text-[#004AAD] font-medium mt-2 cursor-pointer'>See more..</p>
              </div>
            </div>

            {/* Recent Wallet Transactions */}
            <div className='w-full'>
              <p className='text-[19.7px] text-[#323132] font-medium mb-1'>Recent Wallet Transactions</p>
              <hr className='border border-[#dbdbdb77]'/>
              <div className='overflow-x-auto'>
                <table className='min-w-[340px] w-full'>
                  <thead>
                    <tr className='text-left text-[14.8px] text-[#8A929C]'>
                      <th className='py-2 pr-4 font-normal'>User, ID</th>
                      <th className='py-2 pr-4 font-normal'>Amount</th>
                      <th className='py-2 pr-4 font-normal'>Date</th>
                      <th className='py-2 font-normal'>Status</th>
                    </tr>
                  </thead>
                  <tbody className='text-[15px] text-[#616161]'>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        Emily J.
                        <div className='text-[13px] text-[#737478] font-light'>Funding</div>
                      </td>
                      <td className='py-3 align-top'>₦5,000.00</td>
                      <td className='py-3 align-top'>
                        4/3/2024
                        <div className='text-[13px] text-[#737478] font-light'>9:15 PM</div>
                      </td>
                      <td className='py-3 align-top text-[#B1A100]'>Pending</td>
                    </tr>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        Oluchi A.
                        <div className='text-[13px] text-[#737478] font-light'>Payment</div>
                      </td>
                      <td className='py-3 align-top'>₦400.00</td>
                      <td className='py-3 align-top'>
                        4/3/2024
                        <div className='text-[13px] text-[#737478] font-light'>6:00 PM</div>
                      </td>
                      <td className='py-3 align-top text-[#D12B2B]'>Failed</td>
                    </tr>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        David K.
                        <div className='text-[13px] text-[#737478] font-light'>Transfer</div>
                      </td>
                      <td className='py-3 align-top'>1,200.00</td>
                      <td className='py-3 align-top'>
                        4/3/2024
                        <div className='text-[13px] text-[#737478] font-light'>6:45 PM</div>
                      </td>
                      <td className='py-3 align-top text-[#1A8F3B]'>Successful</td>
                    </tr>
                    <tr className='border-t border-[#dbdbdb7e]'>
                      <td className='py-3 align-top'>
                        FatimaS.
                        <div className='text-[13px] text-[#737478] font-light'>Funded</div>
                      </td>
                      <td className='py-3 align-top'>10,000.00</td>
                      <td className='py-3 align-top'>
                        4/1/2024
                        <div className='text-[13px] text-[#737478] font-light'>11:30 AM</div>
                      </td>
                      <td className='py-3 align-top text-[#1A8F3B]'>Successfull</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-[16px] text-[#004AAD] font-medium mt-2 cursor-pointer'>See more..</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      <div className='max-w-[260px] w-full hidden lee:block py-3 border-l border-gray-300 mx-5 px-4'>
        <div className='flex justify-between items-center w-full'>
          <p className='text-[20px]'>Notification</p>
          <p className='text-[16px] text-[#F80B0B] font-medium'>See all</p>
        </div>
      
        <div className='py-3 px-2 flex flex-col gap-4'>
          <div className='flex gap-[6px] '>
            <div className='translate-y-1'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z" fill="#EDEEFC"/>
              <path d="M17 13.0003H18C18.1326 13.0003 18.2598 12.9476 18.3536 12.8538C18.4473 12.7601 18.5 12.6329 18.5 12.5003C18.5 12.3677 18.4473 12.2405 18.3536 12.1467C18.2598 12.053 18.1326 12.0003 18 12.0003H17V11.0003H18C18.1326 11.0003 18.2598 10.9476 18.3536 10.8538C18.4473 10.7601 18.5 10.6329 18.5 10.5003C18.5 10.3677 18.4473 10.2405 18.3536 10.1467C18.2598 10.053 18.1326 10.0003 18 10.0003H16.975C16.8646 8.90287 16.3933 7.87308 15.635 7.07215L16.8538 5.85403C16.9002 5.80757 16.9371 5.75242 16.9622 5.69173C16.9873 5.63103 17.0003 5.56598 17.0003 5.50028C17.0003 5.43458 16.9873 5.36953 16.9622 5.30883C16.9371 5.24813 16.9002 5.19298 16.8538 5.14653C16.8073 5.10007 16.7521 5.06322 16.6914 5.03808C16.6308 5.01294 16.5657 5 16.5 5C16.4343 5 16.3692 5.01294 16.3086 5.03808C16.2479 5.06322 16.1927 5.10007 16.1462 5.14653L14.8781 6.41528C14.0365 5.81992 13.0309 5.50021 12 5.50021C10.9691 5.50021 9.96351 5.81992 9.12187 6.41528L7.85375 5.14653C7.75993 5.05271 7.63268 5 7.5 5C7.36732 5 7.24007 5.05271 7.14625 5.14653C7.05243 5.24035 6.99972 5.3676 6.99972 5.50028C6.99972 5.63296 7.05243 5.76021 7.14625 5.85403L8.365 7.07215C7.6067 7.87308 7.13544 8.90287 7.025 10.0003H6C5.86739 10.0003 5.74021 10.053 5.64645 10.1467C5.55268 10.2405 5.5 10.3677 5.5 10.5003C5.5 10.6329 5.55268 10.7601 5.64645 10.8538C5.74021 10.9476 5.86739 11.0003 6 11.0003H7V12.0003H6C5.86739 12.0003 5.74021 12.053 5.64645 12.1467C5.55268 12.2405 5.5 12.3677 5.5 12.5003C5.5 12.6329 5.55268 12.7601 5.64645 12.8538C5.74021 12.9476 5.86739 13.0003 6 13.0003H7V13.5003C7 13.669 7.00875 13.8359 7.025 14.0003H6C5.86739 14.0003 5.74021 14.053 5.64645 14.1467C5.55268 14.2405 5.5 14.3677 5.5 14.5003C5.5 14.6329 5.55268 14.7601 5.64645 14.8538C5.74021 14.9476 5.86739 15.0003 6 15.0003H7.23C7.54904 16.0155 8.18366 16.9024 9.04155 17.5321C9.89944 18.1617 10.9358 18.5012 12 18.5012C13.0642 18.5012 14.1006 18.1617 14.9584 17.5321C15.8163 16.9024 16.451 16.0155 16.77 15.0003H18C18.1326 15.0003 18.2598 14.9476 18.3536 14.8538C18.4473 14.7601 18.5 14.6329 18.5 14.5003C18.5 14.3677 18.4473 14.2405 18.3536 14.1467C18.2598 14.053 18.1326 14.0003 18 14.0003H16.975C16.9913 13.8359 17 13.669 17 13.5003V13.0003ZM12 6.50028C12.9738 6.50149 13.9138 6.85752 14.6441 7.50174C15.3744 8.14596 15.8448 9.03422 15.9675 10.0003H8.03C8.15271 9.03379 8.62356 8.14519 9.35435 7.50092C10.0851 6.85664 11.0258 6.50088 12 6.50028ZM12.5 17.4678V12.5003C12.5 12.3677 12.4473 12.2405 12.3536 12.1467C12.2598 12.053 12.1326 12.0003 12 12.0003C11.8674 12.0003 11.7402 12.053 11.6464 12.1467C11.5527 12.2405 11.5 12.3677 11.5 12.5003V17.4678C10.5339 17.3451 9.64568 16.8746 9.00146 16.1444C8.35724 15.4141 8.00121 14.4741 8 13.5003V11.0003H16V13.5003C15.9988 14.4741 15.6428 15.4141 14.9985 16.1444C14.3543 16.8746 13.4661 17.3451 12.5 17.4678Z" fill="black"/>
              </svg>
            </div>

            <div >
              <p>a ride was booked</p>
              <p className='text-[12px] text-[#00000066] '>just now</p>
            </div>
          </div>


          <div className='flex gap-[6px] '>
            <div className='translate-y-1'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z" fill="#E6F1FD"/>
            <path d="M18.4325 17.2497C17.4806 15.6041 16.0137 14.4241 14.3019 13.8647C15.1486 13.3607 15.8065 12.5925 16.1745 11.6784C16.5425 10.7642 16.6002 9.7545 16.3388 8.80435C16.0774 7.85419 15.5113 7.01612 14.7275 6.41883C13.9437 5.82153 12.9854 5.49805 12 5.49805C11.0145 5.49805 10.0563 5.82153 9.2725 6.41883C8.48869 7.01612 7.92261 7.85419 7.6612 8.80435C7.39979 9.7545 7.4575 10.7642 7.82548 11.6784C8.19345 12.5925 8.85134 13.3607 9.69811 13.8647C7.98624 14.4235 6.51936 15.6035 5.56749 17.2497C5.53258 17.3067 5.50943 17.37 5.49939 17.436C5.48936 17.502 5.49265 17.5694 5.50906 17.6341C5.52548 17.6988 5.55469 17.7596 5.59498 17.8128C5.63527 17.8661 5.68581 17.9107 5.74363 17.9441C5.80144 17.9775 5.86536 17.999 5.93162 18.0073C5.99787 18.0156 6.06511 18.0105 6.12937 17.9924C6.19364 17.9743 6.25362 17.9435 6.30579 17.9018C6.35796 17.8601 6.40125 17.8084 6.43311 17.7497C7.61061 15.7147 9.69186 14.4997 12 14.4997C14.3081 14.4997 16.3894 15.7147 17.5669 17.7497C17.5987 17.8084 17.642 17.8601 17.6942 17.9018C17.7463 17.9435 17.8063 17.9743 17.8706 17.9924C17.9349 18.0105 18.0021 18.0156 18.0684 18.0073C18.1346 17.999 18.1985 17.9775 18.2563 17.9441C18.3142 17.9107 18.3647 17.8661 18.405 17.8128C18.4453 17.7596 18.4745 17.6988 18.4909 17.6341C18.5073 17.5694 18.5106 17.502 18.5006 17.436C18.4905 17.37 18.4674 17.3067 18.4325 17.2497ZM8.49999 9.99975C8.49999 9.30751 8.70526 8.63082 9.08984 8.05525C9.47443 7.47968 10.0211 7.03108 10.6606 6.76617C11.3001 6.50126 12.0039 6.43195 12.6828 6.567C13.3617 6.70205 13.9854 7.03539 14.4749 7.52487C14.9643 8.01436 15.2977 8.638 15.4327 9.31693C15.5678 9.99586 15.4985 10.6996 15.2336 11.3391C14.9687 11.9787 14.5201 12.5253 13.9445 12.9099C13.3689 13.2945 12.6922 13.4997 12 13.4997C11.072 13.4988 10.1824 13.1297 9.52621 12.4735C8.87005 11.8174 8.50098 10.9277 8.49999 9.99975Z" fill="black"/>
            </svg>

            </div>

            <div >
              <p>New user registered.</p>
              <p className='text-[12px] text-[#00000066] '>59 minutes ago</p>
            </div>
          </div>



          <div className='flex gap-[6px] '>
            <div className='translate-y-1'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z" fill="#EDEEFC"/>
            <path d="M17 13.0003H18C18.1326 13.0003 18.2598 12.9476 18.3536 12.8538C18.4473 12.7601 18.5 12.6329 18.5 12.5003C18.5 12.3677 18.4473 12.2405 18.3536 12.1467C18.2598 12.053 18.1326 12.0003 18 12.0003H17V11.0003H18C18.1326 11.0003 18.2598 10.9476 18.3536 10.8538C18.4473 10.7601 18.5 10.6329 18.5 10.5003C18.5 10.3677 18.4473 10.2405 18.3536 10.1467C18.2598 10.053 18.1326 10.0003 18 10.0003H16.975C16.8646 8.90287 16.3933 7.87308 15.635 7.07215L16.8538 5.85403C16.9002 5.80757 16.9371 5.75242 16.9622 5.69173C16.9873 5.63103 17.0003 5.56598 17.0003 5.50028C17.0003 5.43458 16.9873 5.36953 16.9622 5.30883C16.9371 5.24813 16.9002 5.19298 16.8538 5.14653C16.8073 5.10007 16.7521 5.06322 16.6914 5.03808C16.6308 5.01294 16.5657 5 16.5 5C16.4343 5 16.3692 5.01294 16.3086 5.03808C16.2479 5.06322 16.1927 5.10007 16.1462 5.14653L14.8781 6.41528C14.0365 5.81992 13.0309 5.50021 12 5.50021C10.9691 5.50021 9.96351 5.81992 9.12187 6.41528L7.85375 5.14653C7.75993 5.05271 7.63268 5 7.5 5C7.36732 5 7.24007 5.05271 7.14625 5.14653C7.05243 5.24035 6.99972 5.3676 6.99972 5.50028C6.99972 5.63296 7.05243 5.76021 7.14625 5.85403L8.365 7.07215C7.6067 7.87308 7.13544 8.90287 7.025 10.0003H6C5.86739 10.0003 5.74021 10.053 5.64645 10.1467C5.55268 10.2405 5.5 10.3677 5.5 10.5003C5.5 10.6329 5.55268 10.7601 5.64645 10.8538C5.74021 10.9476 5.86739 11.0003 6 11.0003H7V12.0003H6C5.86739 12.0003 5.74021 12.053 5.64645 12.1467C5.55268 12.2405 5.5 12.3677 5.5 12.5003C5.5 12.6329 5.55268 12.7601 5.64645 12.8538C5.74021 12.9476 5.86739 13.0003 6 13.0003H7V13.5003C7 13.669 7.00875 13.8359 7.025 14.0003H6C5.86739 14.0003 5.74021 14.053 5.64645 14.1467C5.55268 14.2405 5.5 14.3677 5.5 14.5003C5.5 14.6329 5.55268 14.7601 5.64645 14.8538C5.74021 14.9476 5.86739 15.0003 6 15.0003H7.23C7.54904 16.0155 8.18366 16.9024 9.04155 17.5321C9.89944 18.1617 10.9358 18.5012 12 18.5012C13.0642 18.5012 14.1006 18.1617 14.9584 17.5321C15.8163 16.9024 16.451 16.0155 16.77 15.0003H18C18.1326 15.0003 18.2598 14.9476 18.3536 14.8538C18.4473 14.7601 18.5 14.6329 18.5 14.5003C18.5 14.3677 18.4473 14.2405 18.3536 14.1467C18.2598 14.053 18.1326 14.0003 18 14.0003H16.975C16.9913 13.8359 17 13.669 17 13.5003V13.0003ZM12 6.50028C12.9738 6.50149 13.9138 6.85752 14.6441 7.50174C15.3744 8.14596 15.8448 9.03422 15.9675 10.0003H8.03C8.15271 9.03379 8.62356 8.14519 9.35435 7.50092C10.0851 6.85664 11.0258 6.50088 12 6.50028ZM12.5 17.4678V12.5003C12.5 12.3677 12.4473 12.2405 12.3536 12.1467C12.2598 12.053 12.1326 12.0003 12 12.0003C11.8674 12.0003 11.7402 12.053 11.6464 12.1467C11.5527 12.2405 11.5 12.3677 11.5 12.5003V17.4678C10.5339 17.3451 9.64568 16.8746 9.00146 16.1444C8.35724 15.4141 8.00121 14.4741 8 13.5003V11.0003H16V13.5003C15.9988 14.4741 15.6428 15.4141 14.9985 16.1444C14.3543 16.8746 13.4661 17.3451 12.5 17.4678Z" fill="black"/>
            </svg>

            </div>

            <div >
              <p>A charter was requested</p>
              <p className='text-[12px] text-[#00000066] '>12 hours ago</p>
            </div>
          </div>




          <div className='flex gap-[6px] '>
            <div className='translate-y-1'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z" fill="#E6F1FD"/>
            <path d="M12 9.50025C11.5055 9.50025 11.0222 9.64687 10.611 9.92158C10.1999 10.1963 9.87949 10.5867 9.69027 11.0435C9.50105 11.5004 9.45155 12.003 9.54801 12.488C9.64447 12.9729 9.88257 13.4184 10.2322 13.768C10.5818 14.1176 11.0273 14.3558 11.5122 14.4522C11.9972 14.5487 12.4999 14.4992 12.9567 14.31C13.4135 14.1207 13.8039 13.8003 14.0786 13.3892C14.3534 12.9781 14.5 12.4947 14.5 12.0003C14.5 11.3372 14.2366 10.7013 13.7677 10.2325C13.2989 9.76364 12.663 9.50025 12 9.50025ZM12 13.5003C11.7033 13.5003 11.4133 13.4123 11.1666 13.2475C10.9199 13.0826 10.7277 12.8484 10.6142 12.5743C10.5006 12.3002 10.4709 11.9986 10.5288 11.7076C10.5867 11.4166 10.7295 11.1494 10.9393 10.9396C11.1491 10.7298 11.4164 10.587 11.7073 10.5291C11.9983 10.4712 12.2999 10.5009 12.574 10.6144C12.8481 10.728 13.0824 10.9202 13.2472 11.1669C13.412 11.4136 13.5 11.7036 13.5 12.0003C13.5 12.3981 13.3419 12.7796 13.0606 13.0609C12.7793 13.3422 12.3978 13.5003 12 13.5003ZM16.6068 13.9465C16.392 14.4544 16.0947 14.9232 15.7268 15.334C15.6378 15.4304 15.5144 15.4879 15.3833 15.4941C15.2522 15.5003 15.1239 15.4547 15.0262 15.3672C14.9284 15.2797 14.8689 15.1572 14.8606 15.0262C14.8524 14.8953 14.8959 14.7663 14.9818 14.6671C15.6384 13.9341 16.0014 12.9846 16.0014 12.0006C16.0014 11.0165 15.6384 10.067 14.9818 9.334C14.9368 9.28529 14.902 9.22811 14.8792 9.16578C14.8565 9.10346 14.8465 9.03724 14.8496 8.97099C14.8527 8.90473 14.869 8.83976 14.8975 8.77986C14.926 8.71996 14.9661 8.66633 15.0156 8.62209C15.065 8.57786 15.1227 8.54389 15.1854 8.52218C15.2481 8.50047 15.3144 8.49145 15.3806 8.49564C15.4468 8.49983 15.5115 8.51715 15.571 8.54659C15.6304 8.57603 15.6834 8.61701 15.7268 8.66713C16.3582 9.37359 16.776 10.2447 16.9318 11.1793C17.0876 12.1139 16.9749 13.0735 16.6068 13.9465ZM8.31247 10.4434C8.01746 11.1417 7.92698 11.9095 8.05158 12.6573C8.17617 13.4052 8.51072 14.1022 9.01622 14.6671C9.10218 14.7663 9.14571 14.8953 9.13742 15.0262C9.12913 15.1572 9.06968 15.2797 8.9719 15.3672C8.87412 15.4547 8.74585 15.5003 8.61477 15.4941C8.48368 15.4879 8.36029 15.4304 8.27122 15.334C7.45034 14.4177 6.99641 13.2308 6.99641 12.0006C6.99641 10.7704 7.45034 9.5834 8.27122 8.66713C8.35966 8.56808 8.48381 8.50823 8.61638 8.50073C8.74894 8.49323 8.87906 8.53869 8.9781 8.62713C9.07714 8.71556 9.13699 8.83972 9.1445 8.97228C9.152 9.10484 9.10653 9.23496 9.0181 9.334C8.7231 9.66218 8.48465 10.0371 8.31247 10.4434ZM19.5 12.0003C19.503 13.9638 18.7332 15.8497 17.3568 17.2503C17.3113 17.2989 17.2565 17.338 17.1956 17.3652C17.1348 17.3924 17.0691 17.4072 17.0025 17.4086C16.9358 17.41 16.8696 17.3981 16.8076 17.3736C16.7456 17.349 16.6892 17.3124 16.6416 17.2657C16.594 17.219 16.5562 17.1633 16.5305 17.1018C16.5047 17.0403 16.4915 16.9743 16.4917 16.9076C16.4918 16.841 16.5053 16.775 16.5313 16.7137C16.5573 16.6523 16.5953 16.5967 16.6431 16.5503C17.8348 15.3361 18.5024 13.7028 18.5024 12.0015C18.5024 10.3002 17.8348 8.6669 16.6431 7.45275C16.5499 7.3581 16.4982 7.23032 16.4993 7.09752C16.5003 6.96472 16.5541 6.83778 16.6487 6.74463C16.7434 6.65147 16.8712 6.59973 17.004 6.60078C17.1367 6.60184 17.2637 6.6556 17.3568 6.75025C18.7332 8.15077 19.503 10.0367 19.5 12.0003ZM7.35685 16.549C7.40289 16.5959 7.43926 16.6513 7.46386 16.7123C7.48847 16.7732 7.50083 16.8383 7.50025 16.904C7.49967 16.9697 7.48616 17.0347 7.46048 17.0952C7.4348 17.1556 7.39746 17.2105 7.3506 17.2565C7.30373 17.3025 7.24826 17.3389 7.18734 17.3635C7.12642 17.3881 7.06125 17.4005 6.99555 17.3999C6.92986 17.3993 6.86492 17.3858 6.80444 17.3601C6.74397 17.3345 6.68914 17.2971 6.6431 17.2503C5.26696 15.8493 4.49591 13.964 4.49591 12.0003C4.49591 10.0365 5.26696 8.15121 6.6431 6.75025C6.68863 6.70157 6.74344 6.66248 6.8043 6.63529C6.86516 6.6081 6.93084 6.59335 6.99748 6.59191C7.06412 6.59048 7.13038 6.60238 7.19235 6.62692C7.25433 6.65146 7.31077 6.68815 7.35836 6.73482C7.40595 6.7815 7.44373 6.83721 7.46947 6.8987C7.49522 6.96019 7.5084 7.0262 7.50826 7.09286C7.50812 7.15951 7.49465 7.22547 7.46865 7.28685C7.44265 7.34822 7.40463 7.40378 7.35685 7.45025C6.16514 8.6644 5.4975 10.2977 5.4975 11.999C5.4975 13.7003 6.16514 15.3336 7.35685 16.5478V16.549Z" fill="black"/>
            </svg>


            </div>

            <div >
              <p>Andy funded his account</p>
              <p className='text-[12px] text-[#00000066] '>Today, 11:59 AM</p>
            </div>
          </div>
        </div>
        
        <div className='py-6'>
          <p>Users List (120)</p>

          <div className='py-2 flex flex-col gap-4 px-2'>
            <div className='flex items gap-2'>
              <img src={img1} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Natali Craig</p>
            </div>


            <div className='flex items gap-2'>
              <img src={img2} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Drew Cano</p>
            </div>


            <div className='flex items gap-2'>
              <img src={img3} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Andi Lane</p>
            </div>



            <div className='flex items gap-2'>
              <img src={img4} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Koray Okumus</p>
            </div>


            <div className='flex items gap-2'>
              <img src={img5} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Kate Morrison</p>
            </div>


            <div className='flex items gap-2'>
              <img src={img6} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Melody Macy</p>
            </div>

            <div className='flex items gap-2'>
              <img src={img4} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Koray Okumus</p>
            </div>


            <div className='flex items gap-2'>
              <img src={img5} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Kate Morrison</p>
            </div>


            <div className='flex items gap-2'>
              <img src={img6} alt="" className='max-w-[25px] w-full rounded-full'/>
              <p className='text-[14px]'>Melody Macy</p>
            </div>
          </div>
          <div><p className='text-[16px] text-[#F80B0B] cursor-pointer '>View all</p></div>

        </div>
      </div>


      </div>
      
    </div>
  )
}

export default Dashboard
