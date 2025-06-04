import React, { useEffect, useState } from "react";
import img1 from "../assets/danraph-arrow.png";

const Confirm = ({ show, onClose, animateOut, onAccept }) => {
  const [vibrate, setVibrate] = useState(false);

  useEffect(() => {
    if (!show) return;

    let timeout1, timeout2, interval;

    // Vibrate immediately for 2s
    setVibrate(true);
    timeout1 = setTimeout(() => {
      setVibrate(false);

      // Start the normal cycle: 3s pause, 2s vibrate
      timeout2 = setTimeout(() => {
        setVibrate(true);
        setTimeout(() => setVibrate(false), 2000);
        interval = setInterval(() => {
          setVibrate(true);
          setTimeout(() => setVibrate(false), 2000);
        }, 5000);
      }, 3000);
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearInterval(interval);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-35 z-50"
      onClick={onClose}
    >
      <div
        className={`max-w-[623px] text-center w-full px-5 mx-2 pt-5 pb-7 bg-[#FFFFFF] rounded-xl ${
          animateOut ? "animate-spinOut" : "animate-spinIn"
        } overflow-y-auto max-h-[95vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className="text-right sm:text-[25px] text-[18px] cursor-pointer"
          onClick={onClose}
        >
          X
        </p>
        <div className="justify-center flex items-center ">
          <p className="max-w-[440px] w-full font-semibold text-[18px] pb-2 sm:text-[26px]">
            Are you sure you want to accept this ride?
          </p>
        </div>
        <div className="flex py-2 justify-center gap-7 w-full text-[#004AAD] items-center sm:text-[18.1px] text-[16px] font-normal ">
          <p>Main gate</p>
          <img src={img1} alt="" className="max-w-[16px]" />
          <p>Hostel A</p>
        </div>
        <p className="text-[#585858] sm:text-[17.1px] py-2 text-[16px]">
          1.2 Miles
        </p>
        <div className="sm:text-[21px] gap-40 text-[17px] flex justify-center">
          <p>Fare</p>
          <p>₦500</p>
        </div>
        <p className="py-4 pb-6 text-[15px] sm:text-[19px] ">
          You have to arrive the location in 5-10 minutes
        </p>
        <button
          className={`bg-[#004AAD] max-w-[508px] w-full border-2 border-[#004AAD] sm:py-2 sm:px-7 px-6 hover:bg-transparent hover:text-[#004AAD] rounded-full text-white transition duration-500 ${
            vibrate ? "vibrate-button" : ""
          }`}
          onClick={onAccept}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default Confirm;
