import React, { useRef, useState } from 'react'
import img1 from "../assets/danraph-arrow.png"
import Confirm from './Confirm';
import Success from './success';
import ImageWithSkeleton from "../components/skeleton";

const Dashboard = () => {
  const scrollRef = useRef(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAcceptClick = () => {
    setShowConfirm(true);
    setAnimateOut(false);
  };

  const handleCloseConfirm = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowConfirm(false);
    }, 500); // match animation duration
  };

  const handleAcceptInConfirm = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowConfirm(false);
      setShowSuccess(true);
    }, 500); // match animation duration
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };


  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
     <div className='sm:px-2  pb-8 flex flex-wrap items-start gap-7'>
      <div className='max-w-[576px] border  border-gray-300 px-4 py-1 rounded-xl '>
        <p className='sm:text-[26px] text-[20px] font-semibold'>Hi, Maduka</p>
        <p className='text-[#8F9DAD] sm:text-[18px] text-[15px]' >You are online</p>

        <div className='border border-gray-300 sm:max-w-[274px] max-w-[175px] w-full rounded-lg sm:pl-5 pl-3 py-2 mt-6 mb-4'>
          <p className='text-[#8F9DAD] sm:text-[18px] text-[15px]'>2 Active rides</p>
          <p className='font-medium sm:text-[29px] text-[24px] '>₦5,000.00</p>
        </div>

        <p className='sm:text-[24px] text-[17px] font-semibold pb-2'>Recent Earnings</p>
        <div className='flex flex-col gap-2'>
          <div className='sm:text-[19px] text-[15px] flex justify-between items-center'> 
            <p className=''>April 12</p>
            <p className='font-semibold'>₦5,000</p>  
          </div>
          <hr className='border-gray-500'/>

          <div className='sm:text-[19px] text-[15px] flex justify-between items-center'> 
            <p className=''>April 11</p>
            <p className='font-semibold'>₦5,000</p>  
          </div>
          <hr className='border-gray-500'/>

          <div className='sm:text-[19px] text-[15px] flex justify-between items-center'> 
            <p className=''>April 10</p>
            <p className='font-semibold'>₦7,000</p>  
          </div>
          <hr className='border-gray-500'/>

          <div className='sm:text-[19px] text-[15px] flex justify-between items-center'> 
            <p className=''>April 9</p>
            <p className='font-semibold'>₦6,000</p>  
          </div>
          <hr className='border-gray-500'/>

          <div className='sm:text-[19px] text-[15px] flex justify-between items-center'> 
            <p className=''>April 8</p>
            <p className='font-semibold'>₦4,800</p>  
          </div>
          <hr className='border-gray-500'/>
        </div>

        <div className='sm:pt-8 pt-6  w-full'>
         <button className='bg-[#004AAD] rounded-full w-full sm:py-2 py-1 text-white font-medium hover:bg-transparent hover:text-[#004AAD]  border-2 border-[#004AAD] transition duration-500'>Go Offline</button>
         <p className='text-center mx-5 text-[12px] sm:text-[15px] py-4'><span className='text-[red]'>Note: </span>Once you go offline, customer cannot see your profile and you would be unavailable</p>
        </div>
        
      </div>

      <div className='max-w-[480px] flex-1 w-full border relative border-gray-300 rounded-xl px-4'>
       <div className="absolute top-0 left-0 right-0 flex justify-between items-center bg-white px-4 py-2 z-10 rounded-t-xl">
        <span className='sm:text-[26px] text-[19px] font-semibold'>Ride Requests</span>
        <span className='text-[#F80B0B] font-semibold'>See all</span>
       </div>
       

        <div className='overflow-y-auto mt-10 max-h-[615px] py-5 pb-6 h-full hide-scrollbar-sm ' ref={scrollRef}>
          <div></div>
          <div className='max-w-[290px] w-full border border-gray-300  px-[17px] leading-loose  rounded-xl'>
            <div className='flex items-center sm:text-[18.1px] text-[15px] font-normal justify-between'>
              <p>Main gate</p>
              <ImageWithSkeleton src={img1} alt="" className='max-w-[16px] rounded-full' skeletonSize={16} />
              <p>Hostel A</p>
              </div>

              <p className='text-[#585858] sm:text-[17.1px] text-[14px]'>1.2 Miles</p>

              <div className='sm:text-[21px] text-[17px] flex ites justify-between'>
                <p>Fare</p>
                <p>₦500</p>
              </div>
            
            <div className='flex justify-between pt-4 pb-3'>
            <button
    className='bg-[#004AAD] border-2 border-[#004AAD] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:text-[#004AAD] rounded-full text-white transition duration-500'
    onClick={handleAcceptClick}
  >
    Accept
  </button>
  <button className='bg-[#EDEDED] border-2 border-[#EDEDED] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:border-black rounded-full text-black transition duration-500'>
    Decline
  </button>
</div>

          </div>


          <div className='max-w-[290px] w-full border mt-5 border-gray-300  px-[17px] leading-loose  rounded-xl'>
            <div className='flex items-center sm:text-[18.1px] text-[15px] font-normal justify-between'>
              <p>Main gate</p>
              <ImageWithSkeleton src={img1} alt="" className='max-w-[16px] rounded-full' skeletonSize={16} />
              <p>Hostel A</p>
              </div>

              <p className='text-[#585858] sm:text-[17.1px] text-[14px]'>1.2 Miles</p>

              <div className='sm:text-[21px] text-[17px] flex ites justify-between'>
                <p>Fare</p>
                <p>₦500</p>
              </div>
            
            <div className='flex justify-between pt-4 pb-3'>
              <button
    className='bg-[#004AAD] border-2 border-[#004AAD] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:text-[#004AAD] rounded-full text-white transition duration-500'
    onClick={handleAcceptClick}
  >
    Accept
  </button>
  <button className='bg-[#EDEDED] border-2 border-[#EDEDED] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:border-black rounded-full text-black transition duration-500'>
    Decline
  </button>
</div>

          </div>



          <div className='max-w-[290px] w-full border mt-5 border-gray-300  px-[17px] leading-loose  rounded-xl'>
            <div className='flex items-center sm:text-[18.1px] text-[15px] font-normal justify-between'>
              <p>Main gate</p>
              <ImageWithSkeleton src={img1} alt="" className='max-w-[16px] rounded-full' skeletonSize={16} />
              <p>Hostel A</p>
              </div>

              <p className='text-[#585858] sm:text-[17.1px] text-[14px]'>1.2 Miles</p>

              <div className='sm:text-[21px] text-[17px] flex ites justify-between'>
                <p>Fare</p>
                <p>₦500</p>
              </div>
            
            <div className='flex justify-between pt-4 pb-3'>
              <button
    className='bg-[#004AAD] border-2 border-[#004AAD] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:text-[#004AAD] rounded-full text-white transition duration-500'
    onClick={handleAcceptClick}
  >
    Accept
  </button>
  <button className='bg-[#EDEDED] border-2 border-[#EDEDED] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:border-black rounded-full text-black transition duration-500'>
    Decline
  </button>
</div>

          </div>



          <div className='max-w-[290px] w-full border mt-5 border-gray-300  px-[17px] leading-loose  rounded-xl'>
            <div className='flex items-center sm:text-[18.1px] text-[15px] font-normal justify-between'>
              <p>Main gate</p>
              <img src={img1} alt="" className='max-w-[16px]'/>
              <p>Hostel A</p>
              </div>

              <p className='text-[#585858] sm:text-[17.1px] text-[14px]'>1.2 Miles</p>

              <div className='sm:text-[21px] text-[17px] flex ites justify-between'>
                <p>Fare</p>
                <p>₦500</p>
              </div>
            
            <div className='flex justify-between pt-4 pb-3'>
              <button
    className='bg-[#004AAD] border-2 border-[#004AAD] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:text-[#004AAD] rounded-full text-white transition duration-500'
    onClick={handleAcceptClick}
  >
    Accept
  </button>
  <button className='bg-[#EDEDED] border-2 border-[#EDEDED] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:border-black rounded-full text-black transition duration-500'>
    Decline
  </button>
</div>

          </div>



          <div className='max-w-[290px] w-full border mt-5 border-gray-300  px-[17px] leading-loose  rounded-xl'>
            <div className='flex items-center sm:text-[18.1px] text-[15px] font-normal justify-between'>
              <p>Main gate</p>
              <img src={img1} alt="" className='max-w-[16px]'/>
              <p>Hostel A</p>
              </div>

              <p className='text-[#585858] sm:text-[17.1px] text-[14px]'>1.2 Miles</p>

              <div className='sm:text-[21px] text-[17px] flex ites justify-between'>
                <p>Fare</p>
                <p>₦500</p>
              </div>
            
            <div className='flex justify-between pt-4 pb-3'>
              <button
    className='bg-[#004AAD] border-2 border-[#004AAD] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:text-[#004AAD] rounded-full text-white transition duration-500'
    onClick={handleAcceptClick}
  >
    Accept
  </button>
  <button className='bg-[#EDEDED] border-2 border-[#EDEDED] sm:py-1 sm:px-7 px-6 hover:bg-transparent hover:border-black rounded-full text-black transition duration-500'>
    Decline
  </button>
</div>

          </div>
         
          <div
            className='hidden bottom-44 sm:block absolute  right-2 z-50 cursor-pointer'
            onClick={scrollToBottom}
           >
            <svg width="42" height="33" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M33.7408 24.6005L21.9283 36.413C21.8065 36.535 21.6617 36.6318 21.5024 36.6979C21.343 36.7639 21.1722 36.7979 20.9998 36.7979C20.8273 36.7979 20.6565 36.7639 20.4971 36.6979C20.3378 36.6318 20.1931 36.535 20.0712 36.413L8.25866 24.6005C8.01238 24.3542 7.87402 24.0202 7.87402 23.6719C7.87402 23.3236 8.01238 22.9896 8.25866 22.7433C8.50494 22.497 8.83896 22.3586 9.18725 22.3586C9.53554 22.3586 9.86957 22.497 10.1158 22.7433L19.6873 32.3163V6.60938C19.6873 6.26128 19.8255 5.92744 20.0717 5.6813C20.3178 5.43516 20.6517 5.29687 20.9998 5.29688C21.3478 5.29687 21.6817 5.43516 21.9278 5.6813C22.174 5.92744 22.3123 6.26128 22.3123 6.60938V32.3163L31.8837 22.7433C32.1299 22.497 32.464 22.3586 32.8123 22.3586C33.1605 22.3586 33.4946 22.497 33.7408 22.7433C33.9871 22.9896 34.1255 23.3236 34.1255 23.6719C34.1255 24.0202 33.9871 24.3542 33.7408 24.6005Z" fill="black"/>
            </svg>
          </div>
        </div>

        <Confirm
          show={showConfirm}
          onClose={handleCloseConfirm}
          animateOut={animateOut}
          onAccept={handleAcceptInConfirm}
        />
        {showSuccess && <Success onClose={handleCloseSuccess} />}
      </div>
      
     </div>
    </div>
  )
}

export default Dashboard
