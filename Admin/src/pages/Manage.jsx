import React from 'react'
import img from "../assets/danraph-arrow.png"

const Manage = () => {
  return (
    <div className='sm:px-5'>
     <div className='max-w-[933px] w-full border border-gray-300 rounded-lg sm:px-6 px-4 py-4 '>
      <p className='text-[20px] font-semibold'>Manage Locations</p>
      <div className='pt-5 pb-3 flex flex-wrap items-center gap-4 justify-between overflow-x-auto min-h[100px] border-b border-gray-300 '>
        
        <div className='flex items-center gap-2 sm:text-[21.04px] text-[19px] font-medium'>
          <p>Main Gate</p> 
          <img src={img} alt="arrow" className='max-w-[18.5px] '/>
          <p>Hostel A</p>
        </div>

        <div>
          <p className='text[21.33px] font-normal text-[#231F20]'>30 Minutes drive</p>
        </div>

        <div>
          <p className='text-[#231F20] sm:text-[20.33px] text-[17px] font-medium'>Fee:₦1,000</p>
        </div>

        <div className="group cursor-pointer ">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="44"
              height="44"
              rx="22"
              fill="#EAEAEA"
              className="transition-colors duration-200 group-hover:fill-[#bdbdbda9]"
            />
            <path d="M31.3113 16.8782L27.1216 12.6895C26.9823 12.5501 26.8169 12.4396 26.6349 12.3642C26.4529 12.2888 26.2578 12.25 26.0608 12.25C25.8638 12.25 25.6687 12.2888 25.4867 12.3642C25.3047 12.4396 25.1393 12.5501 25 12.6895L13.4397 24.2498C13.2998 24.3886 13.1889 24.5538 13.1134 24.7358C13.0379 24.9178 12.9994 25.113 13 25.3101V29.4998C13 29.8976 13.158 30.2791 13.4393 30.5604C13.7207 30.8417 14.1022 30.9998 14.5 30.9998H30.25C30.4489 30.9998 30.6397 30.9208 30.7803 30.7801C30.921 30.6395 31 30.4487 31 30.2498C31 30.0509 30.921 29.8601 30.7803 29.7194C30.6397 29.5788 30.4489 29.4998 30.25 29.4998H20.8113L31.3113 18.9998C31.4506 18.8605 31.5611 18.6951 31.6365 18.5131C31.7119 18.3311 31.7507 18.136 31.7507 17.939C31.7507 17.742 31.7119 17.5469 31.6365 17.3649C31.5611 17.1829 31.4506 17.0175 31.3113 16.8782ZM18.6897 29.4998H14.5V25.3101L22.75 17.0601L26.9397 21.2498L18.6897 29.4998ZM28 20.1895L23.8113 15.9998L26.0613 13.7498L30.25 17.9395L28 20.1895Z" fill="black"/>
          </svg>
        </div>


        <div className='bg-[#EFEFEF] hover:bg-[#c7c7c7a9] transition-colors duration-200 px-2 py-1'>
          <p className='text-[#EE1D52] sm:text-[16px] text-[15px] font-medium cursor-pointer '>Delete Route</p>
        </div>
      </div>


       <div className='pt-5 pb-3 flex flex-wrap items-center gap-4 justify-between overflow-x-auto min-h[100px] border-b border-gray-300 '>
        
        <div className='flex items-center gap-2 sm:text-[21.04px] text-[19px] font-medium'>
          <p>Main Gate</p> 
          <img src={img} alt="arrow" className='max-w-[18.5px] '/>
          <p>Hostel A</p>
        </div>

        <div>
          <p className='text[21.33px] font-normal text-[#231F20]'>30 Minutes drive</p>
        </div>

        <div>
          <p className='text-[#231F20] sm:text-[20.33px] text-[17px] font-medium'>Fee:₦1,000</p>
        </div>

        <div className="group cursor-pointer ">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="44"
              height="44"
              rx="22"
              fill="#EAEAEA"
              className="transition-colors duration-200 group-hover:fill-[#bdbdbda9]"
            />
            <path d="M31.3113 16.8782L27.1216 12.6895C26.9823 12.5501 26.8169 12.4396 26.6349 12.3642C26.4529 12.2888 26.2578 12.25 26.0608 12.25C25.8638 12.25 25.6687 12.2888 25.4867 12.3642C25.3047 12.4396 25.1393 12.5501 25 12.6895L13.4397 24.2498C13.2998 24.3886 13.1889 24.5538 13.1134 24.7358C13.0379 24.9178 12.9994 25.113 13 25.3101V29.4998C13 29.8976 13.158 30.2791 13.4393 30.5604C13.7207 30.8417 14.1022 30.9998 14.5 30.9998H30.25C30.4489 30.9998 30.6397 30.9208 30.7803 30.7801C30.921 30.6395 31 30.4487 31 30.2498C31 30.0509 30.921 29.8601 30.7803 29.7194C30.6397 29.5788 30.4489 29.4998 30.25 29.4998H20.8113L31.3113 18.9998C31.4506 18.8605 31.5611 18.6951 31.6365 18.5131C31.7119 18.3311 31.7507 18.136 31.7507 17.939C31.7507 17.742 31.7119 17.5469 31.6365 17.3649C31.5611 17.1829 31.4506 17.0175 31.3113 16.8782ZM18.6897 29.4998H14.5V25.3101L22.75 17.0601L26.9397 21.2498L18.6897 29.4998ZM28 20.1895L23.8113 15.9998L26.0613 13.7498L30.25 17.9395L28 20.1895Z" fill="black"/>
          </svg>
        </div>


        <div className='bg-[#EFEFEF] hover:bg-[#c7c7c7a9] transition-colors duration-200 px-2 py-1'>
          <p className='text-[#EE1D52] sm:text-[16px] text-[15px] font-medium cursor-pointer '>Delete Route</p>
        </div>
      </div>




       <div className='pt-5 pb-3 flex flex-wrap items-center gap-4 justify-between overflow-x-auto min-h[100px] border-b border-gray-300 '>
        
        <div className='flex items-center gap-2 sm:text-[21.04px] text-[19px] font-medium'>
          <p>Main Gate</p> 
          <img src={img} alt="arrow" className='max-w-[18.5px] '/>
          <p>Hostel A</p>
        </div>

        <div>
          <p className='text[21.33px] font-normal text-[#231F20]'>30 Minutes drive</p>
        </div>

        <div>
          <p className='text-[#231F20] sm:text-[20.33px] text-[17px] font-medium'>Fee:₦1,000</p>
        </div>

        <div className="group cursor-pointer ">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="44"
              height="44"
              rx="22"
              fill="#EAEAEA"
              className="transition-colors duration-200 group-hover:fill-[#bdbdbda9]"
            />
            <path d="M31.3113 16.8782L27.1216 12.6895C26.9823 12.5501 26.8169 12.4396 26.6349 12.3642C26.4529 12.2888 26.2578 12.25 26.0608 12.25C25.8638 12.25 25.6687 12.2888 25.4867 12.3642C25.3047 12.4396 25.1393 12.5501 25 12.6895L13.4397 24.2498C13.2998 24.3886 13.1889 24.5538 13.1134 24.7358C13.0379 24.9178 12.9994 25.113 13 25.3101V29.4998C13 29.8976 13.158 30.2791 13.4393 30.5604C13.7207 30.8417 14.1022 30.9998 14.5 30.9998H30.25C30.4489 30.9998 30.6397 30.9208 30.7803 30.7801C30.921 30.6395 31 30.4487 31 30.2498C31 30.0509 30.921 29.8601 30.7803 29.7194C30.6397 29.5788 30.4489 29.4998 30.25 29.4998H20.8113L31.3113 18.9998C31.4506 18.8605 31.5611 18.6951 31.6365 18.5131C31.7119 18.3311 31.7507 18.136 31.7507 17.939C31.7507 17.742 31.7119 17.5469 31.6365 17.3649C31.5611 17.1829 31.4506 17.0175 31.3113 16.8782ZM18.6897 29.4998H14.5V25.3101L22.75 17.0601L26.9397 21.2498L18.6897 29.4998ZM28 20.1895L23.8113 15.9998L26.0613 13.7498L30.25 17.9395L28 20.1895Z" fill="black"/>
          </svg>
        </div>


        <div className='bg-[#EFEFEF] hover:bg-[#c7c7c7a9] transition-colors duration-200 px-2 py-1'>
          <p className='text-[#EE1D52] sm:text-[16px] text-[15px] font-medium cursor-pointer '>Delete Route</p>
        </div>
      </div>




       <div className='pt-5 pb-3 flex flex-wrap items-center gap-4 justify-between overflow-x-auto min-h[100px] border-b border-gray-300 '>
        
        <div className='flex items-center gap-2 sm:text-[21.04px] text-[19px] font-medium'>
          <p>Main Gate</p> 
          <img src={img} alt="arrow" className='max-w-[18.5px] '/>
          <p>Hostel A</p>
        </div>

        <div>
          <p className='text[21.33px] font-normal text-[#231F20]'>30 Minutes drive</p>
        </div>

        <div>
          <p className='text-[#231F20] sm:text-[20.33px] text-[17px] font-medium'>Fee:₦1,000</p>
        </div>

        <div className="group cursor-pointer ">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="44"
              height="44"
              rx="22"
              fill="#EAEAEA"
              className="transition-colors duration-200 group-hover:fill-[#bdbdbda9]"
            />
            <path d="M31.3113 16.8782L27.1216 12.6895C26.9823 12.5501 26.8169 12.4396 26.6349 12.3642C26.4529 12.2888 26.2578 12.25 26.0608 12.25C25.8638 12.25 25.6687 12.2888 25.4867 12.3642C25.3047 12.4396 25.1393 12.5501 25 12.6895L13.4397 24.2498C13.2998 24.3886 13.1889 24.5538 13.1134 24.7358C13.0379 24.9178 12.9994 25.113 13 25.3101V29.4998C13 29.8976 13.158 30.2791 13.4393 30.5604C13.7207 30.8417 14.1022 30.9998 14.5 30.9998H30.25C30.4489 30.9998 30.6397 30.9208 30.7803 30.7801C30.921 30.6395 31 30.4487 31 30.2498C31 30.0509 30.921 29.8601 30.7803 29.7194C30.6397 29.5788 30.4489 29.4998 30.25 29.4998H20.8113L31.3113 18.9998C31.4506 18.8605 31.5611 18.6951 31.6365 18.5131C31.7119 18.3311 31.7507 18.136 31.7507 17.939C31.7507 17.742 31.7119 17.5469 31.6365 17.3649C31.5611 17.1829 31.4506 17.0175 31.3113 16.8782ZM18.6897 29.4998H14.5V25.3101L22.75 17.0601L26.9397 21.2498L18.6897 29.4998ZM28 20.1895L23.8113 15.9998L26.0613 13.7498L30.25 17.9395L28 20.1895Z" fill="black"/>
          </svg>
        </div>


        <div className='bg-[#EFEFEF] hover:bg-[#c7c7c7a9] transition-colors duration-200 px-2 py-1'>
          <p className='text-[#EE1D52] sm:text-[16px] text-[15px] font-medium cursor-pointer '>Delete Route</p>
        </div>
      </div>




       <div className='pt-5 pb-3 flex flex-wrap items-center gap-4 justify-between overflow-x-auto min-h[100px] '>
        
        <div className='flex items-center gap-2 sm:text-[21.04px] text-[19px] font-medium'>
          <p>Main Gate</p> 
          <img src={img} alt="arrow" className='max-w-[18.5px] '/>
          <p>Hostel A</p>
        </div>

        <div>
          <p className='text[21.33px] font-normal text-[#231F20]'>30 Minutes drive</p>
        </div>

        <div>
          <p className='text-[#231F20] sm:text-[20.33px] text-[17px] font-medium'>Fee:₦1,000</p>
        </div>

        <div className="group cursor-pointer ">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="44"
              height="44"
              rx="22"
              fill="#EAEAEA"
              className="transition-colors duration-200 group-hover:fill-[#bdbdbda9]"
            />
            <path d="M31.3113 16.8782L27.1216 12.6895C26.9823 12.5501 26.8169 12.4396 26.6349 12.3642C26.4529 12.2888 26.2578 12.25 26.0608 12.25C25.8638 12.25 25.6687 12.2888 25.4867 12.3642C25.3047 12.4396 25.1393 12.5501 25 12.6895L13.4397 24.2498C13.2998 24.3886 13.1889 24.5538 13.1134 24.7358C13.0379 24.9178 12.9994 25.113 13 25.3101V29.4998C13 29.8976 13.158 30.2791 13.4393 30.5604C13.7207 30.8417 14.1022 30.9998 14.5 30.9998H30.25C30.4489 30.9998 30.6397 30.9208 30.7803 30.7801C30.921 30.6395 31 30.4487 31 30.2498C31 30.0509 30.921 29.8601 30.7803 29.7194C30.6397 29.5788 30.4489 29.4998 30.25 29.4998H20.8113L31.3113 18.9998C31.4506 18.8605 31.5611 18.6951 31.6365 18.5131C31.7119 18.3311 31.7507 18.136 31.7507 17.939C31.7507 17.742 31.7119 17.5469 31.6365 17.3649C31.5611 17.1829 31.4506 17.0175 31.3113 16.8782ZM18.6897 29.4998H14.5V25.3101L22.75 17.0601L26.9397 21.2498L18.6897 29.4998ZM28 20.1895L23.8113 15.9998L26.0613 13.7498L30.25 17.9395L28 20.1895Z" fill="black"/>
          </svg>
        </div>


        <div className='bg-[#EFEFEF] hover:bg-[#c7c7c7a9] transition-colors duration-200 px-2 py-1'>
          <p className='text-[#EE1D52] sm:text-[16px] text-[15px] font-medium cursor-pointer '>Delete Route</p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center pt-5 pb-3'>
        <button className='bg-[#004AAD] text-white text-[18px] font-semibold sm:py-2 py-1 sm:px-10 px-6 rounded-full text border-2 border-[#004AAD] hover:bg-inherit hover:text-[#004AAD] transition-colors duration-500  '>Create Routes</button>
      </div>
      
     </div>
    </div>
  )
}

export default Manage
