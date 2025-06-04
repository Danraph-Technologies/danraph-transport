import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Charterr from "./charterr";

const Charter = () => {
  const [showCharterr, setShowCharterr] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [country, setCountry] = useState("US"); // default to US

  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.country_code) {
          setCountry(data.country_code.toUpperCase());
        }
      })
      .catch(() => {
        setCountry("us"); // fallback
      });
  }, []);

  return (
    <div className="sm:px-4  mb-10">
      <div className="max-w-[990px] w-full p-5 f:p-3  border border-gray-300 rounded-lg">
        <p className="font-semibold text-[26px] pb-5">Charter a Car</p>
        <form action="">
          <div className="flex flex-col ">
            {/* Location Input */}
            <div className="flex f:flex-col mb-4">
              <label className="border border-gray-300 py-[15px] px-3 f:max-w-[100%] m:max-w-[239px] w-full rounded-l-lg f:rounded-t-lg f:rounded-b-none text-[17px] ">
                Input Location
              </label>
              <input
                type="text"
                required
                className="outline-none border border-gray-300 py-[15px] px-3 f:max-w-[full]  m:max-w-[528px] f:rounded-tr-none rounded-tr-lg w-full m:rounded-r-lg f:rounded-b-lg rounded-t-none"
              />
            </div>

            {/* Destination Input */}
            <div className="flex f:flex-col mb-4">
              <label className="border border-gray-300 py-[15px] px-3 f:max-w-[100%] m:max-w-[239px] w-full rounded-l-lg f:rounded-t-lg f:rounded-b-none text-[17px] ">
                Input Destination
              </label>
              <input
                type="text"
                required
                className="outline-none border border-gray-300 py-[15px] px-3 f:max-w-[full]  m:max-w-[528px] f:rounded-tr-none rounded-tr-lg w-full m:rounded-r-lg f:rounded-b-lg rounded-t-none"
              />
            </div>

            {/* Phone Number Input */}
            <div className="flex mm:flex-col  mb-4">
              {/* Label Section */}

              <label className="border border-gray-300 py-[15px] px-3 mm:max-w-[100%]  m:max-w-[239px] w-full rounded-l-lg mm:rounded-t-lg mm:rounded-b-none text-[17px] ">
                Phone number
              </label>

              {/* Input Section */}
              <div className="outline-none border border-gray-300 py-[15px] px-3 mm:max-w-[100%]  m:max-w-[528px] mm:rounded-tr-none rounded-tr-lg w-full m:rounded-r-lg mm:rounded-b-lg rounded-t-none">
                <PhoneInput
                  defaultCountry={country}
                  required
                  value={phoneValue}
                  onChange={setPhoneValue}
                  international
                  withCountryCallingCode
                  countryCallingCodeEditable={false}
                  className="phone-input w-full px-3"
                  countrySelectProps={{
                    style: {
                      padding: "0 10px",
                      display: "flex",
                      alignItems: "center",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={() => setShowCharterr(true)}
              className="mt-2 px-8  text-white rounded-lg py-2  bg-[#F80B0B] border-[#F80B0B] border-2 hover:bg-transparent transition duration-500 hover:text-[#F80B0B] "
            >
              Request for a charter
            </button>
          </div>
        </form>
      </div>

      {/* Modal Overlay for Charterr */}
      {showCharterr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Charterr content with onClose prop */}
          <Charterr onClose={() => setShowCharterr(false)} />
        </div>
      )}
    </div>
  );
};

export default Charter;
