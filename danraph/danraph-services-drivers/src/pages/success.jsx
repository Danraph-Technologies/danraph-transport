import React, { useState } from 'react';
import img1 from "../assets/danrapph.png";
import img2 from "../assets/danraph-arrow.png"

const Success = ({ onClose, className = "" }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      if (onClose) onClose();
    }, 400); // Match animation duration (400ms)
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
  className="fixed inset-0 flex items-center justify-center z-50 px-2 bg-black bg-opacity-50"
  onClick={handleOutsideClick}
>
<div className={`bg-[#FFFFFF] max-w-[573px] w-full px-3 rounded-2xl shadow-md transition-transform duration-400
  ${className}
  ${isClosing ? 'slide-out-left' : 'slide-in-right'}
  overflow-y-auto max-h-[95vh]`}
>
        <p
          className='text-gray-700 sm:text-[52px] text-[40px] pb-3 text-right px-3 cursor-pointer'
          onClick={handleClose}
          title='Close'
        >
          &times;
        </p>
        <div className='flex flex-col justify-center items-center -translate-y-8'>
          <img src={img1} alt="" className='max-w-[300px] w-full animated-image' />
          <p className='sm:text-[26px] text-[20px] font-semibold max-w-[489px] w-full text-center'>
          You have successfully accepted to take on this ride
          </p>
          <p className='flex items-center gap-2 py-5 sm:text-[21px] text-[18.5px]'>
            <span className='text-[#004AAD] font-medium '>Main Gate</span>
             <img src={img2} alt="" className='max-w-[16px]'/>
            <span className='text-[#004AAD] font-medium '>Hostel A</span>
          </p>
          <p className='max-w-[489px] w-full text-center sm:text-[18px] text-[15.1px] pb-5'>
          For any issues, <span className='text-[#004AAD]  cursor-pointer hover:text-[#004badd3]  underline'>Contact support.</span> For swift communication, <span className='text-[#004AAD] hover:text-[#004badd3]  cursor-pointer underline'>Contact Customer.</span> 
           
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;