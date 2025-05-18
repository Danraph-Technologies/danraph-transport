import React, { useEffect, useRef, useState } from 'react'
import img1 from "../images/danraph-services16.png"
import ImageWithSkeleton from "../Components/skeleton";

const ANIMATION_DURATION = 500; // ms, must match your CSS

const Charterr = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef();

  // Trigger spinIn animation on mount
  useEffect(() => {
    setIsVisible(true);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Handle close with spinOut animation
  const handleClose = () => {
    setIsVisible(false);
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION);
  };

  const handleOutsideClick = (e) => {
    // Close the modal only if the overlay (background) is clicked, not the content area
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className='fixed inset-0 flex justify-center px-[9px] items-center z-50 bg-black bg-opacity-50'
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-white max-w-[623px] overflow-y-auto max-h-[90vh] w-full rounded-xl ${
          isVisible ? 'animate-spinIn' : 'animate-spinOut'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <p
          onClick={handleClose}
          className="hover:text-red-600 focus:outline-none text-right text-2xl px-8 cursor-pointer py-3"
          aria-label="Close"
        >
          X
        </p>

         <div className='flex flex-col justify-center items-center '>
         <ImageWithSkeleton src={img1} alt="" className='sm:max-w-[255px] max-w-[240px] w-full animated-image' skeletonSize={150} />
            <div className='max-w-[394px] text-center'>
            <p className='sm:text-[26px] text-[20px] font-semibold py-4'>Thanks for your request</p>
            <p className='pb-16 sm:text-[18px]  font-normal'> A customer care will contact you in 5 minutes time or less. Kindly be patient</p>
            </div>
           
        </div>  
      
      </div>
    </div>
  )
}

export default Charterr
