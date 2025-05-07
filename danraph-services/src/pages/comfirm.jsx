import React, { useState, useEffect } from 'react';
import img1 from "../images/dan.png"
import img2 from "../images/danraph-services15.jpg"
import { Link } from 'react-router-dom';
import ImageWithSkeleton from "../Components/skeleton";

const Confirm = ({ onClose, onSuccess,  className = "" }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // call parent to hide component after animation
    }, 0); // match animation duration
  };

  const handleBookThisRide = () => {
    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleOutsideClick = (e) => {
    // Close the modal only if the overlay (background) is clicked, not the content area
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const [isBalancing, setIsBalancing] = useState(false);

   const startBalancing = () => {
    setIsBalancing(true);
    // Optional: Stop the balancing effect after a certain time
    setTimeout(() => {
      setIsBalancing(false);
    }, 1000); // Effect lasts for 1 second
  };

  useEffect(() => {
    // Trigger vibration immediately when the component is mounted
    startBalancing();

    // Continue vibrating every 3-5 seconds
    const interval = setInterval(() => {
  startBalancing();
}, 3000); // Interval set to exactly 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []); // Empty dependency array ensures it runs once when the component mounts


  return (
    <div className="fixed inset-0 flex items-center p-2   justify-center  z-50 bg-black bg-opacity-50 " onClick={handleOutsideClick}>
     <div
  className={`bg-white max-w-[623px] w-full rounded-2xl shadow-md transition-transform duration-500 overflow-y-auto max-h-[95vh] sm:px-9 px-4 py-4 ${className} ${
    isClosing ? 'animate-spinOut' : 'animate-spinIn'
  }`}
>
        <div className='flex items-center justify-between gap-3'>
        <p className='font-semibold sm:text-[26px] text-[18px]'>Review Booking</p>
        <p className="text-center cursor-pointer text-[30px]" onClick={handleClose}>
        <svg className=' sm:w-[32px] w-[20px] sm:h-[32px] h-[20px]' width="32" height="32"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.7076 24.2926C25.8005 24.3855 25.8742 24.4958 25.9245 24.6172C25.9747 24.7386 26.0006 24.8687 26.0006 25.0001C26.0006 25.1315 25.9747 25.2616 25.9245 25.383C25.8742 25.5044 25.8005 25.6147 25.7076 25.7076C25.6147 25.8005 25.5044 25.8742 25.383 25.9245C25.2616 25.9747 25.1315 26.0006 25.0001 26.0006C24.8687 26.0006 24.7386 25.9747 24.6172 25.9245C24.4958 25.8742 24.3855 25.8005 24.2926 25.7076L16.0001 17.4138L7.70757 25.7076C7.51993 25.8952 7.26543 26.0006 7.00007 26.0006C6.7347 26.0006 6.48021 25.8952 6.29257 25.7076C6.10493 25.5199 5.99951 25.2654 5.99951 25.0001C5.99951 24.7347 6.10493 24.4802 6.29257 24.2926L14.5863 16.0001L6.29257 7.70757C6.10493 7.51993 5.99951 7.26543 5.99951 7.00007C5.99951 6.7347 6.10493 6.48021 6.29257 6.29257C6.48021 6.10493 6.7347 5.99951 7.00007 5.99951C7.26543 5.99951 7.51993 6.10493 7.70757 6.29257L16.0001 14.5863L24.2926 6.29257C24.4802 6.10493 24.7347 5.99951 25.0001 5.99951C25.2654 5.99951 25.5199 6.10493 25.7076 6.29257C25.8952 6.48021 26.0006 6.7347 26.0006 7.00007C26.0006 7.26543 25.8952 7.51993 25.7076 7.70757L17.4138 16.0001L25.7076 24.2926Z" fill="black"/>
        </svg>

        </p>
        </div>

        <p className='max-w-[394px] text-[14px] sm:text-[17px] py-3'>You are about to book this ride please comfirm before booking</p>

        <p className='flex  items-center gap-2 '><span className='text-[#004AAD] '>Main Gate</span> <ImageWithSkeleton src={img1} alt="" className='max-w-[19px] w-full' skeletonSize={19} /> <span className='text-[#004AAD] '>Hostel A</span></p>

        <div className='flex py-3 gap-3   items-start sm:items-center '>
        <ImageWithSkeleton src={img2} alt="" className='sm:max-w-[60px] max-w-[39px] sm:translate-y-0 translate-y-3 w-full rounded-[100%] object-cover h-[39px] sm:h-[60px]' skeletonSize={60} />
        <div>
             <p className='font-semibold text-[18px] pt-2'>Michael Nguyen</p>
               <div className='flex flex-wrap gap-3 pb-3 leading-relaxed pt-1' >
                <div className=''>
                <p className='flex gap-1 items-center'>
                <svg  className='sm:w-[18px] w-[15px]' viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 5.875H16.1156L14.1609 1.48047C14.0734 1.28133 13.9296 1.11206 13.7473 0.993408C13.5649 0.87476 13.3519 0.81189 13.1344 0.812504H4.86562C4.64808 0.81189 4.43508 0.87476 4.25274 0.993408C4.07039 1.11206 3.92663 1.28133 3.83906 1.48047L1.88437 5.875H1.125C0.975816 5.875 0.832742 5.93427 0.727252 6.03976C0.621763 6.14525 0.5625 6.28832 0.5625 6.4375C0.5625 6.58669 0.621763 6.72976 0.727252 6.83525C0.832742 6.94074 0.975816 7 1.125 7H1.6875V12.625C1.6875 12.9234 1.80603 13.2095 2.017 13.4205C2.22798 13.6315 2.51413 13.75 2.8125 13.75H4.5C4.79837 13.75 5.08452 13.6315 5.2955 13.4205C5.50647 13.2095 5.625 12.9234 5.625 12.625V11.5H12.375V12.625C12.375 12.9234 12.4935 13.2095 12.7045 13.4205C12.9155 13.6315 13.2016 13.75 13.5 13.75H15.1875C15.4859 13.75 15.772 13.6315 15.983 13.4205C16.194 13.2095 16.3125 12.9234 16.3125 12.625V7H16.875C17.0242 7 17.1673 6.94074 17.2727 6.83525C17.3782 6.72976 17.4375 6.58669 17.4375 6.4375C17.4375 6.28832 17.3782 6.14525 17.2727 6.03976C17.1673 5.93427 17.0242 5.875 16.875 5.875ZM5.625 9.25H4.5C4.35082 9.25 4.20774 9.19074 4.10225 9.08525C3.99676 8.97976 3.9375 8.83669 3.9375 8.6875C3.9375 8.53832 3.99676 8.39525 4.10225 8.28976C4.20774 8.18427 4.35082 8.125 4.5 8.125H5.625C5.77418 8.125 5.91726 8.18427 6.02275 8.28976C6.12824 8.39525 6.1875 8.53832 6.1875 8.6875C6.1875 8.83669 6.12824 8.97976 6.02275 9.08525C5.91726 9.19074 5.77418 9.25 5.625 9.25ZM12.375 9.25C12.2258 9.25 12.0827 9.19074 11.9773 9.08525C11.8718 8.97976 11.8125 8.83669 11.8125 8.6875C11.8125 8.53832 11.8718 8.39525 11.9773 8.28976C12.0827 8.18427 12.2258 8.125 12.375 8.125H13.5C13.6492 8.125 13.7923 8.18427 13.8977 8.28976C14.0032 8.39525 14.0625 8.53832 14.0625 8.6875C14.0625 8.83669 14.0032 8.97976 13.8977 9.08525C13.7923 9.19074 13.6492 9.25 13.5 9.25H12.375Z" fill="#585858" fill-opacity="0.7"/>
                </svg>
                <span className=' text-[13px] sm:text-[17px]'>Pontiac - White - 586 5GX</span>
                </p>
                
                <p className='flex gap-1 items-center'>
                <svg  className='sm:w-[18px] w-[15px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6094 11.1374L12.3117 9.7311C12.1416 9.65484 11.9548 9.62321 11.769 9.63921C11.5832 9.6552 11.4046 9.71829 11.25 9.82251L9.48516 10.9967C8.40955 10.4743 7.53868 9.6084 7.01016 8.53579L8.17734 6.74985C8.28087 6.59508 8.3441 6.4169 8.36129 6.23149C8.37848 6.04607 8.34909 5.8593 8.27578 5.68813L6.8625 2.39048C6.76388 2.16781 6.5969 1.98234 6.38577 1.86097C6.17463 1.7396 5.93033 1.68864 5.68828 1.71548C4.73878 1.83986 3.86675 2.30482 3.23432 3.02389C2.6019 3.74297 2.25211 4.66724 2.25 5.62485C2.25 11.2077 6.79219 15.7499 12.375 15.7499C13.3326 15.7477 14.2569 15.398 14.976 14.7655C15.695 14.1331 16.16 13.2611 16.2844 12.3116C16.3112 12.0695 16.2603 11.8252 16.1389 11.6141C16.0175 11.403 15.832 11.236 15.6094 11.1374Z" fill="#585858" fill-opacity="0.7"/>
                </svg>

                <span className=' text-[13px] sm:text-[17px]'>0903001276</span>
                </p>
                </div>

                <div>
                  <p className='flex gap-1 item-center  '>
                  <svg className='sm:w-[18px] w-[15px]'   viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0625 15.75H10.582C11.169 15.2292 11.721 14.6701 12.2344 14.0766C14.168 11.8617 15.1875 9.52031 15.1875 7.3125C15.1875 5.67147 14.5356 4.09766 13.3752 2.93728C12.2148 1.7769 10.641 1.125 9 1.125C7.35897 1.125 5.78516 1.7769 4.62478 2.93728C3.4644 4.09766 2.8125 5.67147 2.8125 7.3125C2.8125 9.52031 3.83203 11.8617 5.76562 14.0766C6.27898 14.6701 6.83096 15.2292 7.41797 15.75H3.9375C3.78832 15.75 3.64524 15.8093 3.53975 15.9148C3.43426 16.0202 3.375 16.1633 3.375 16.3125C3.375 16.4617 3.43426 16.6048 3.53975 16.7102C3.64524 16.8157 3.78832 16.875 3.9375 16.875H14.0625C14.2117 16.875 14.3548 16.8157 14.4602 16.7102C14.5657 16.6048 14.625 16.4617 14.625 16.3125C14.625 16.1633 14.5657 16.0202 14.4602 15.9148C14.3548 15.8093 14.2117 15.75 14.0625 15.75ZM9 5.0625C9.44501 5.0625 9.88002 5.19446 10.25 5.44169C10.62 5.68893 10.9084 6.04033 11.0787 6.45146C11.249 6.8626 11.2936 7.315 11.2068 7.75145C11.12 8.18791 10.9057 8.58882 10.591 8.90349C10.2763 9.21816 9.87541 9.43245 9.43895 9.51927C9.0025 9.60608 8.5501 9.56153 8.13896 9.39123C7.72783 9.22093 7.37643 8.93254 7.12919 8.56253C6.88196 8.19252 6.75 7.75751 6.75 7.3125C6.75 6.71576 6.98705 6.14347 7.40901 5.72151C7.83097 5.29955 8.40326 5.0625 9 5.0625Z" fill="#585858" fill-opacity="0.7"/>
                  </svg>
                  <span className=' text-[13px] sm:text-[17px]'>Main gate, ifite</span>
                  </p>

                  <p className='flex gap-1 items-center'>
                  <svg  className='sm:w-[18px] w-[15px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0934 9.5625H11.25V11.1797L10.0934 9.5625ZM6.75 8.4375H7.90664L6.75 6.82031V8.4375ZM16.3125 9C16.3125 10.4463 15.8836 11.8601 15.0801 13.0626C14.2766 14.2651 13.1346 15.2024 11.7984 15.7559C10.4622 16.3093 8.99189 16.4541 7.57341 16.172C6.15492 15.8898 4.85196 15.1934 3.82928 14.1707C2.80661 13.148 2.11017 11.8451 1.82801 10.4266C1.54586 9.00811 1.69067 7.53781 2.24413 6.20163C2.7976 4.86544 3.73486 3.72339 4.9374 2.91988C6.13993 2.11637 7.55373 1.6875 9 1.6875C10.9388 1.68955 12.7975 2.46063 14.1685 3.83154C15.5394 5.20246 16.3105 7.06123 16.3125 9ZM14.0625 9C14.0625 8.85082 14.0032 8.70774 13.8978 8.60225C13.7923 8.49676 13.6492 8.4375 13.5 8.4375H12.375V5.0625C12.375 4.91332 12.3157 4.77024 12.2103 4.66475C12.1048 4.55926 11.9617 4.5 11.8125 4.5C11.6633 4.5 11.5202 4.55926 11.4148 4.66475C11.3093 4.77024 11.25 4.91332 11.25 5.0625V8.4375H9.28969L6.64524 4.73555C6.57597 4.63856 6.47769 4.56609 6.36457 4.52858C6.25145 4.49106 6.12933 4.49044 6.01584 4.52681C5.90235 4.56319 5.80334 4.63466 5.73309 4.73094C5.66285 4.82722 5.625 4.94332 5.625 5.0625V8.4375H4.5C4.35082 8.4375 4.20775 8.49676 4.10226 8.60225C3.99677 8.70774 3.9375 8.85082 3.9375 9C3.9375 9.14918 3.99677 9.29226 4.10226 9.39775C4.20775 9.50324 4.35082 9.5625 4.5 9.5625H5.625V12.9375C5.625 13.0867 5.68427 13.2298 5.78976 13.3352C5.89525 13.4407 6.03832 13.5 6.1875 13.5C6.33669 13.5 6.47976 13.4407 6.58525 13.3352C6.69074 13.2298 6.75 13.0867 6.75 12.9375V9.5625H8.71032L11.3548 13.2645C11.4068 13.3373 11.4755 13.3967 11.5551 13.4377C11.6347 13.4786 11.723 13.5 11.8125 13.5C11.8707 13.5001 11.9286 13.4911 11.9841 13.4733C12.0976 13.4369 12.1966 13.3654 12.2669 13.2691C12.3372 13.1728 12.375 13.0567 12.375 12.9375V9.5625H13.5C13.6492 9.5625 13.7923 9.50324 13.8978 9.39775C14.0032 9.29226 14.0625 9.14918 14.0625 9Z" fill="#585858" fill-opacity="0.7"/>
                  </svg>
                  <span className='text-[13px] sm:text-[17px]'>₦500</span>

                  </p>
                </div>
             


              </div>
        </div>
       
        </div>
       
        <button
      className={`bg-blue-800 border-2 w-full border-blue-800 sm:my-5 sm:mb-8 mb-3 md:py-2 py-1 sm:text-[20px] hover:bg-transparent hover:text-blue-800 transition duration-500 rounded-full text-white ${
        isBalancing ? 'vibrate-button' : '' // Add vibration class if it's vibrating
      }`}
      onClick={handleBookThisRide}
    >
      Book This Ride
    </button>
      </div>
    </div>
  );
};

export default Confirm;
