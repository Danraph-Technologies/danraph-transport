import React from "react";

function Register() {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 pb                                                                                                                                                                                            -5 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5312 18.9698C15.6009 19.0395 15.6562 19.1222 15.6939 19.2132C15.7316 19.3043 15.751 19.4019 15.751 19.5004C15.751 19.599 15.7316 19.6965 15.6939 19.7876C15.6562 19.8786 15.6009 19.9614 15.5312 20.031C15.4615 20.1007 15.3788 20.156 15.2878 20.1937C15.1967 20.2314 15.0991 20.2508 15.0006 20.2508C14.902 20.2508 14.8045 20.2314 14.7134 20.1937C14.6224 20.156 14.5396 20.1007 14.47 20.031L6.96996 12.531C6.90023 12.4614 6.84491 12.3787 6.80717 12.2876C6.76943 12.1966 6.75 12.099 6.75 12.0004C6.75 11.9019 6.76943 11.8043 6.80717 11.7132C6.84491 11.6222 6.90023 11.5394 6.96996 11.4698L14.47 3.96979C14.6107 3.82906 14.8016 3.75 15.0006 3.75C15.1996 3.75 15.3905 3.82906 15.5312 3.96979C15.6719 4.11052 15.751 4.30139 15.751 4.50042C15.751 4.69944 15.6719 4.89031 15.5312 5.03104L8.5609 12.0004L15.5312 18.9698Z"
              fill="black"
            />
          </svg>
          <span className="text-[22px] font-semibold ">Register Driver</span>
        </div>
        <div className="flex items-center gap-3 py-5 ">
          <img src="/vehicle.png" alt="" className="w-93px" />
          <div className="bg-[#F0F0F0] py-2 rounded-lg px-4 flex items-center gap-2 cursor-pointer">
            <img
              src="\UploadSimple.png"
              alt=""
              className="sm:w-[26px] w-[19px]"
            />
            <p className="text-[15px] sm:text-[16px]">Upload Vehicle Image</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[50px] gap-[20px] items-center ">
          <div>
            
            <form action="" className="flex flex-col gap-5 justify-between">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="py-2">
                  Vehicle Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Vehicle 001"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="py-2">
                  Plate Number
                </label>
                <input
                  type="text"
                  name="plate number"
                  id="plate number"
                  placeholder="K43-234-FT5."
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="py-2">
                  Model
                </label>
                <input
                  type="text"
                  name="Model"
                  id="Model"
                  placeholder="Danraph Motors 2012"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="text" className="py-2">
                  Maintenance Issue
                </label>
                <input
                  type="text"
                  name="Maintenance Issue"
                  id="Maintenance Issue"
                  placeholder="None"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" className="py-2">
                  Year manufactured
                </label>
                <div className="relative">
                  <select
                    name="text"
                    id="year"
                    className="border border-[#21212380] w-full rounded-[3px] p-2 py-3 outline-none"
                  >
                    <option value="">Select year</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col py-4">
                <input
                  type="text"
                  name="Color"
                  id="Color"
                  placeholder="None"
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 outline-none"
                />
              </div>
            </form>
          </div>

          <div>
            <h2 className="font-semibold text-[20px]">
              Upload Vehicle Documents
            </h2>
            <p className="italic text-[#212123d3]">
              Vehicle License, Proof of Ownership, Vehicle Registration Paper,
              Roadworthiness Certificate, and Insurance Certificate (typically
              Third-Party Insurance)
            </p>
            <div className=" flex flex-col justify-start items-start py-4 ">
              <div className="bg-[#F0F0F0] py-2 rounded-lg px-4 flex items-center gap-2 cursor-pointer">
                <img
                  src="\UploadSimple.png"
                  alt=""
                  className="sm:w-[26px] w-[19px]"
                />
                <p className="text-[15px] sm:text-[16px]">Upload</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="flex flex-col gap-4 items-center">
                <img src="/lincense.jpg" alt="" className="h-[150px]" />
                <p className="underline cursor-pointer">View Drivers licence</p>
                <div className="bg-[#F0F0F0] py-2 rounded-lg px-3 flex items-center gap-2 cursor-pointer">
                  <img
                    src="\UploadSimple.png"
                    alt=""
                    className="sm:w-[24px] w-[18px]"
                  />
                  <p className="text-[15px] sm:text-[16px]">change</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src="/lincense.jpg" alt="" className="h-[150px]" />
                <p className="underline cursor-pointer">View Drivers licence</p>
                <div className="bg-[#F0F0F0] py-2 rounded-lg px-3 flex items-center gap-2 cursor-pointer">
                  <img
                    src="\UploadSimple.png"
                    alt=""
                    className="sm:w-[24px] w-[18px]"
                  />
                  <p className="text-[15px] sm:text-[16px]">change</p>
                </div>
              </div>
            </div>

            <div className="py-2">
              <div className="py-5">
                <h2 className="text-[19px] font-semibold">Assign Vehicle</h2>
                <p className="text-[#212123] text-[18px] italic">
                  Assign vehicle to driver
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="">Choose Vehicle</label>
                <select
                  name=""
                  id=""
                  className="border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer outline-none"
                >
                  <option value="">Choose Vehicle</option>
                  <option value="">Vehicle 1</option>
                  <option value="">Vehicle 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
