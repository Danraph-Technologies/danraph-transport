import React from 'react'
import img1 from "../images/danraph-service18.png"
import img2 from "../images/danraph-services19.png"
import img3 from "../images/danraph-services20.png"
import img4 from "../images/danraph-services21.png"
import img5 from "../images/danraph-services22.png"
import img6 from "../images/danraph-services23.png"
import img7 from "../images/danraph-services24.png"
import img8 from "../images/danraph-services25.png"

const wallet = () => {
  return (
    <div className='flex justify-center lg:justify-start lg:pb-5 pb-14 lg:px-4 lg:pt-4 '>
      <div className='max-w-[389px] w-full border pb-3 border-gray-300 rounded-md '>
        <div className=''>
          <p className='sm:text-[26px] text-[20px] font-semibold px-5 pt-6'>Wallet</p>
          <div className='flex flex-col justify-center items-center'>
            <div className='pt-6'>
            <p className='sm:text-[20px] text-[18px] '>Total Balance</p>
            <p className='sm:text-[32px] text-[27px] font-semibold'><span className='pr-[3px]'>₦</span>22,000</p>
            </div>

            <div className='pt-6 flex gap-4 justify-center'>
              <button className='group py-[6px] sm:px-7 px-5 bg-black text-white rounded-lg text-center flex items-center gap-4 border-2 border-black hover:bg-transparent hover:text-black transition duration-500 '><span className='sm:text-[19px]'>Send</span> 
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7504 1V10.75C13.7504 10.9489 13.6714 11.1397 13.5307 11.2803C13.3901 11.421 13.1993 11.5 13.0004 11.5C12.8015 11.5 12.6107 11.421 12.4701 11.2803C12.3294 11.1397 12.2504 10.9489 12.2504 10.75V2.81031L1.53104 13.5306C1.39031 13.6714 1.19944 13.7504 1.00042 13.7504C0.801394 13.7504 0.610523 13.6714 0.469792 13.5306C0.329062 13.3899 0.25 13.199 0.25 13C0.25 12.801 0.329062 12.6101 0.469792 12.4694L11.1901 1.75H3.25042C3.0515 1.75 2.86074 1.67098 2.72009 1.53033C2.57943 1.38968 2.50042 1.19891 2.50042 1C2.50042 0.801088 2.57943 0.610322 2.72009 0.46967C2.86074 0.329018 3.0515 0.25 3.25042 0.25H13.0004C13.1993 0.25 13.3901 0.329018 13.5307 0.46967C13.6714 0.610322 13.7504 0.801088 13.7504 1Z" fill="white" className="transition-colors duration-500 group-hover:fill-black"/>
              </svg>
              </button>

              <button className='group py-[6px] sm:px-7 px-5 bg-black text-white rounded-lg text-center flex items-center gap-4 border-2 border-black hover:bg-transparent hover:text-black transition duration-500 '><span className='sm:text-[19px]'>Fund</span> 
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5306 6.53055L7.81031 17.2499H15.75C15.9489 17.2499 16.1397 17.3289 16.2803 17.4696C16.421 17.6103 16.5 17.801 16.5 17.9999C16.5 18.1988 16.421 18.3896 16.2803 18.5303C16.1397 18.6709 15.9489 18.7499 15.75 18.7499H6C5.80109 18.7499 5.61032 18.6709 5.46967 18.5303C5.32902 18.3896 5.25 18.1988 5.25 17.9999V8.24993C5.25 8.05102 5.32902 7.86025 5.46967 7.7196C5.61032 7.57895 5.80109 7.49993 6 7.49993C6.19891 7.49993 6.38968 7.57895 6.53033 7.7196C6.67098 7.86025 6.75 8.05102 6.75 8.24993V16.1896L17.4694 5.4693C17.5391 5.39962 17.6218 5.34435 17.7128 5.30663C17.8039 5.26892 17.9015 5.24951 18 5.24951C18.0985 5.24951 18.1961 5.26892 18.2872 5.30663C18.3782 5.34435 18.4609 5.39962 18.5306 5.4693C18.6003" fill="white" className="transition-colors duration-500 group-hover:fill-black 5.53899 18.6556 5.62171 18.6933 5.71276C18.731 5.8038 18.7504 5.90138 18.7504 5.99993C18.7504 6.09847 18.731 6.19606 18.6933 6.2871C18.6556 6.37815 18.6003 6.46087 18.5306 6.53055Z" />
              </svg>

              </button>
            </div>

            <div className='pt-6'>
              <p className='flex gap-2 py-2'><span className='sm:text-[17px] text-[14px]'>User ID: 234467892 </span> 
                <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 3H8.25C8.05109 3 7.86032 3.07902 7.71967 3.21967C7.57902 3.36032 7.5 3.55109 7.5 3.75V7.5H3.75C3.55109 7.5 3.36032 7.57902 3.21967 7.71967C3.07902 7.86032 3 8.05109 3 8.25V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H15.75C15.9489 21 16.1397 20.921 16.2803 20.7803C16.421 20.6397 16.5 20.4489 16.5 20.25V16.5H20.25C20.4489 16.5 20.6397 16.421 20.7803 16.2803C20.921 16.1397 21 15.9489 21 15.75V3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6397 3.07902 20.4489 3 20.25 3ZM15 19.5H4.5V9H15V19.5ZM19.5 15H16.5V8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5H9V4.5H19.5V15Z" fill="black"/>
                </svg>
             </p>

            </div>

            
           
          </div>
          <div className='px-4 '>
              <p className=' py-2 pb-5 sm:text-[16px] text-[13px]'>Quick transfer</p>
              <div className='flex flex-wrap sm:gap-[10px] gap-1 med:gap-2 pb-2 justify-center items-center'>
                <img src={img1} alt="" className='sm:max-w-[42px] med:max-w-[36px] max-w-[32px] w-full cursor-pointer'/>
                <img src={img2} alt="" className='sm:max-w-[42px] med:max-w-[36px] max-w-[32px] w-full cursor-pointer'/>
                <img src={img3} alt="" className='sm:max-w-[42px] med:max-w-[36px] max-w-[32px] w-full cursor-pointer'/>
                <img src={img7} alt="" className='sm:max-w-[42px] med:max-w-[36px] max-w-[32px] w-full cursor-pointer'/>
                <img src={img5} alt="" className='sm:max-w-[42px] med:max-w-[36px] max-w-[32px] w-full cursor-pointer'/>
                <img src={img6} alt="" className='sm:max-w-[42px] med:max-w-[36px] max-w-[32px] w-full cursor-pointer'/>
                <img src={img4} alt="" className='sm:max-w-[42px] med:max-w-[36px] max-w-[32px] w-full cursor-pointer'/>
              </div>

             <p className='flex gap-1 items-center py-3'><span>Notification</span> <img src={img8} alt="" className='max-w-[8px] w-full h-[8px] rounded-full '/></p>
             <div>
              <div className='flex gap-3 pb-3 justify-between items-center'>
               
                <div className='flex gap-2 items-center  '>
                <img src={img1} alt="" className='max-w-[42px] w-full'/>
                  <div>
                  
                  <p className='text-[13px] text-[#231F20]'>Dandave</p>
                  <p className='text-[11px] text-[#585858]'>Just sent you N10,000</p>
                  

                  </div>
                 
               
                </div>
                <div> <p className='text-[11px]'>Just now</p></div>
                
              </div>
              <hr className='py-2'/>

              <div className='flex gap-3 pb-3 justify-between items-center'>
               
               <div className='flex gap-2 items-center  '>
               <img src={img2} alt="" className='max-w-[42px] w-full'/>
                 <div>
                 
                 <p className='text-[13px] text-[#231F20]'>Adaeze Obi</p>
                 <p className='text-[11px] text-[#585858]'>Just sent you N10,000</p>
                 

                 </div>
                
              
               </div>
               <div> <p className='text-[11px]'>Just now</p></div>
               
             </div>
             <hr className='py-2'/>


             <div className='flex gap-3 pb-3 justify-between items-center'>
               
                <div className='flex gap-2 items-center  '>
                <img src={img3} alt="" className='max-w-[42px] w-full'/>
                  <div>
                  
                  <p className='text-[13px] text-[#231F20]'>Oluchi</p>
                  <p className='text-[11px] text-[#585858]'>Just sent you N10,000</p>
                  

                  </div>
                 
               
                </div>
                <div> <p className='text-[11px]'>Just now</p></div>
                
              </div>
              <hr className='py-2'/>


             <div className='flex gap-3 pb-3 justify-between items-center'>
               
                <div className='flex gap-2 items-center  '>
                <img src={img6} alt="" className='max-w-[42px] w-full'/>
                  <div>
                  
                  <p className='text-[13px] text-[#231F20]'>Josep akbar</p>
                  <p className='text-[11px] text-[#585858]'>Just sent you N10,000</p>
                  

                  </div>
                 
               
                </div>
                <div> <p className='text-[11px]'>Just now</p></div>
                
              </div>
              
              
             </div>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default wallet
