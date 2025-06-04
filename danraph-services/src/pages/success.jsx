import React, { useState } from "react";
import img1 from "../images/danraph-services14.webp";
import img2 from "../images/dan.webp";
import ImageWithSkeleton from "../Components/skeleton";

const Success = ({ onClose, className = "" }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      if (onClose) onClose();
    }, 190); // Match animation duration
  };

  const handleOutsideClick = (e) => {
    // Close the modal only if the overlay (background) is clicked, not the content area
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-2 bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-[#FFFFFF] max-w-[623px] w-full rounded-2xl shadow-md transition-transform duration-400 overflow-y-auto max-h-[90vh] px-2 ${className} ${
          isClosing ? "slide-out-left" : ""
        }`}
      >
        <p
          className="text-gray-700 text-[52px] text-right px-3 cursor-pointer"
          onClick={handleClose}
          title="Close"
        >
          &times;
        </p>
        <div className="flex flex-col justify-center items-center -translate-y-8">
          <ImageWithSkeleton
            src={img1}
            alt=""
            className="max-w-[400px] w-full animated-image"
            skeletonSize={200}
          />

          <p className="sm:text-[26px] text-[20px] font-semibold max-w-[394px] w-full text-center">
            You have successfully booked a ride
          </p>
          <p className="flex items-center gap-2 py-3 sm:text-[21px] text-[18.5px]">
            <span className="text-[#004AAD] font-medium ">Main Gate</span>
            <ImageWithSkeleton
              src={img2}
              alt=""
              className="max-w-[19px] w-full"
              skeletonSize={19}
            />
            <span className="text-[#004AAD] font-medium ">Hostel A</span>
          </p>
          <p className="max-w-[394px] w-full text-center sm:text-[18px] text-[15.1px] pb-5">
            Your ride will arrive in 5-10 minutes. For any issues,
            <span className="underline text-[#004AAD] pl-1 cursor-pointer hover:text-[#004badd3]">
              Contact support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
