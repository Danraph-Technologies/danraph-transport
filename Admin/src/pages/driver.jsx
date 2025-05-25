import React from 'react'

const driver = () => {
  return (
    <div className="w-full">
       <div className='max-w-[1100px] w-full rounded-lg border border-gray-300 py-3 px-4 mx-auto'>
        <p className='text-[20px] font-semibold py-2'>Driver Management</p>
        <div className=' relative py-3 mb-2'>
          <input
            type="name"
            name=""
            id=""
            className='w-full rounded-full border border-gray-300 outline-none px-10 py-[10px]  placeholder:text-[#6264A0]'
            placeholder="Search user"
          />
          <div className='flex items-center gap-2 text-[#6264A0] absolute left-3 top-1/2 -translate-y-1/2'>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0269 2.606C7.84116 2.60967 5.74597 3.47958 4.2004 5.02515C2.65483 6.57072 1.78491 8.66591 1.78125 10.8517C1.78308 13.0393 2.65196 15.137 4.19753 16.6851C5.7431 18.2333 7.83932 19.1057 10.0269 19.1112C11.9671 19.1112 13.7548 18.4287 15.1683 17.2992L18.6017 20.7326C18.7757 20.8943 19.0055 20.9824 19.243 20.9782C19.4804 20.9741 19.7071 20.878 19.8752 20.7103C20.0434 20.5426 20.14 20.3162 20.1448 20.0788C20.1496 19.8413 20.0622 19.6112 19.9009 19.4369L16.4675 16C17.6402 14.5416 18.2794 12.7265 18.2795 10.8551C18.2795 6.30963 14.5724 2.606 10.0269 2.606ZM10.0269 4.44222C13.5816 4.44222 16.4433 7.30049 16.4433 10.8517C16.4433 14.4029 13.5816 17.2784 10.0269 17.2784C6.47227 17.2784 3.61401 14.4132 3.61401 10.8586C3.61401 7.30396 6.47227 4.44222 10.0269 4.44222Z" fill="#6264A0"/>
            </svg>

          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full w-full whitespace-nowrap'>
              <thead className='bg-[#004AAD]'>
                <tr className='text-white text-left'>
                  <th className='py-2 pl-3 pr-3 w-[146px] font-normal'>Driver Name</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Phone Number</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Email Address</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Driver ID</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Vehicle Info</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Status</th>
                  <th className='py-2 pl-2 pr-3 w-[146px] font-normal'>Total Trips</th>
                  <th className='py-2 pl-2 pr-4 font-normal'>More</th>
                </tr>
              </thead>

            <tbody>
              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>

              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>



              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>




              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
                
               
              </tr>




              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>



              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
                
               
              </tr>




              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block'></span>  <span>Deactivated</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
              </tr>



              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
                
               
              </tr>


              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
                
               
              </tr>



              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block'></span>  <span>Active</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
                
               
              </tr>




              <tr className='border-b '>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>David Godson</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>0809992224445</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>davidgo@email.com</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>2346589665</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>Toyota/34-55-73</td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'> <span className='rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block'></span>  <span>Deactivated</span> </td>
                <td className='whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10'>25</td>
                <td className='whitespace-nowrap  py-4 pl-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z" fill="#5C5F62"/>
                  </svg>
                </td>
                
               
              </tr>



            </tbody>
          </table>


            <div className="w-full flex justify-center my-5">
  <div className="w-full max-w-[500px] border border-gray-300 rounded-md bg-white px-2 py-[2px]">
    <div className="flex flex-wrap justify-center items-center gap-2">
      {/* Previous Button */}
      <button className="font-medium cursor-pointer flex items-center gap-2 flex-row-reverse px-2 py-2">
        <span>Previous</span>
        <span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.188 6.37674H1.09082M1.09082 6.37674L6.63943 11.9253M1.09082 6.37674L6.63943 0.828125" stroke="#19211F" strokeWidth="1.58849" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {/* Page Numbers - horizontally scrollable on small screens */}
      <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap px-2">
        <button className="border-l border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f] bg-[#EAECF0] rounded">1</button>
        <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">2</button>
        <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">3</button>
        <span className="px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">
          <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.88163 2.46583C1.62311 2.46583 1.40085 2.3744 1.21485 2.19155C1.02884 2.00554 0.93584 1.78171 0.93584 1.52004C0.93584 1.26153 1.02884 1.04084 1.21485 0.85799C1.40085 0.671986 1.62311 0.578983 1.88163 0.578983C2.14014 0.578983 2.3624 0.671986 2.5484 0.85799C2.73441 1.04084 2.82741 1.26153 2.82741 1.52004C2.82741 1.69343 2.78328 1.85264 2.695 1.99766C2.60988 2.13953 2.49639 2.25302 2.35452 2.33815C2.21265 2.42327 2.05502 2.46583 1.88163 2.46583ZM5.65295 2.46583C5.39443 2.46583 5.17217 2.3744 4.98617 2.19155C4.80016 2.00554 4.70716 1.78171 4.70716 1.52004C4.70716 1.26153 4.80016 1.04084 4.98617 0.85799C5.17217 0.671986 5.39443 0.578983 5.65295 0.578983C5.91146 0.578983 6.13372 0.671986 6.31973 0.85799C6.50573 1.04084 6.59873 1.26153 6.59873 1.52004C6.59873 1.69343 6.5546 1.85264 6.46632 1.99766C6.3812 2.13953 6.26771 2.25302 6.12584 2.33815C5.98397 2.42327 5.82634 2.46583 5.65295 2.46583ZM9.42427 2.46583C9.16575 2.46583 8.94349 2.3744 8.75749 2.19155C8.57148 2.00554 8.47848 1.78171 8.47848 1.52004C8.47848 1.26153 8.57148 1.04084 8.75749 0.85799C8.94349 0.671986 9.16575 0.578983 9.42427 0.578983C9.68278 0.578983 9.90504 0.671986 10.091 0.85799C10.2771 1.04084 10.3701 1.26153 10.3701 1.52004C10.3701 1.69343 10.3259 1.85264 10.2376 1.99766C10.1525 2.13953 10.039 2.25302 9.89716 2.33815C9.75529 2.42327 9.59766 2.46583 9.42427 2.46583Z" fill="#19211F"/>
          </svg>
        </span>
        <button className="border-l border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">8</button>
        <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">9</button>
        <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">10</button>
      </div>
      {/* Next Button */}
      <button className="font-medium cursor-pointer flex items-center gap-1 px-2 py-2">
        <span>Next</span>
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.81201 10.3767H15.9092M15.9092 10.3767L10.3606 4.82812M15.9092 10.3767L10.3606 15.9253" stroke="#19211F" strokeWidth="1.58849" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  </div>
</div>
        </div>
        
           
         

      </div>
    </div>
  )
}

export default driver
