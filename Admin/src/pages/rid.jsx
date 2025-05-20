import React from 'react'

const rid = () => {
  return (
    <div>
       <div className='max-w-[860px] sm:mx-4 flex flex-col sm:justify-start justify-center w-full border border-gray-300 rounded-lg py-2 px-4'>
        <div>
          <p className='text-[20px] font-[semi-bold] py-4'>Ride Activities</p>
          <div className='overflow-x-auto max-w-full'>
          <table className='min-w-full whitespace-nowrap'>
              <thead className='bg-[#004AAD]'>
                <tr className='text-white text-left'>
                  <th className='py-2 pl-3 pr-3 w-[146px] font-normal'>Pickup</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Drop Off</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Time(distance)</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Fare (₦)</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Status</th>
                  <th className='py-2 pl-2 pr-4 font-normal'>More</th>
                </tr>
              </thead>

            <tbody>
              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block'></span>  <span>Pending</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>

              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block'></span>  <span>Pending</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>



              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block'></span>  <span>Pending</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>




              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Completed</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>




              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#004AAD] inline-block'></span>  <span>Ongoing</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>



              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Completed</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>




              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#004AAD] inline-block'></span>  <span>Ongoing</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>



              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Ifite School Gate</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Management Sciences</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>30 min</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>1000</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Completed</span> </td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>


            </tbody>
          </table>
       </div>
        </div>
        

      </div>
    </div>
  )
}

export default rid
