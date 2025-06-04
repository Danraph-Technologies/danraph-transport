import React from "react";

const support = () => {
  return (
    <div className=" mb-10">
      <div className="max-w-[558px] w-full border border-gray-300 rounded-lg sm:p-5 p-[18px] lg:mx-6 ">
        <p className="sm:text-[26px] text-[21px] font-semibold">Support</p>

        <p className="sm:py-3 py-2 text-[17px] text-left sm:text-left sm:text-[20px]">
          📧 Email: support@danralphecocruise.com
        </p>

        <p className="text-[16px]  sm:text-[21px] text-left sm:text-left sm:py-3 py-2">
          ☎️ Call: +234 XXX XXX XXXX
        </p>

        <div className="flex sm:gap-6 gap-3 flex-wrap  items-center  sm:py-3 py-2">
          <p className="text-[17px]  sm:text-[20px]  ">💬 WhatsApp Support</p>
          <button className="bg-[#F80B0B] rounded-3xl px-5 py-1 hover:bg-transparent border-2 border-[#F80B0B] transition duration-500 hover:text-[#F80B0B]  text-[12px] font-bold text-white">
            Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default support;
