import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <div className="sm:px-5 px-1 ">
        <div className="flex gap-2 hover:text-[#000000d5] transition-all duration-300 items-center">
          <ArrowLeft 
            className="cursor-pointer" 
            onClick={handleGoBack}
          />
          <p className="font-semibold  ">Register New Driver</p>
        </div>
        <div className="flex items-center gap-3 py-5 ">
          <img src="/danraph-image.png" alt="" />
          <div className="bg-[#F0F0F0] py-2  rounded-lg px-4 flex items-center gap-2 cursor-pointer ">
            <img
              src="\UploadSimple.png"
              alt=""
              className="sm:w-[26px] w-[19px] "
            />
            <p className="text-[15px] sm:text-[16px] ">Upload Passport Image</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          <div>
            <form action="">
              <div className="flex flex-col  ">
                <label htmlFor="fullName" className="py-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className=" border border-[#21212380] rounded-[3px] p-2  py-3 outline-none "
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="phone" className="py-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="080..."
                  className=" border border-[#21212380] rounded-[3px] p-2 py-3  outline-none "
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="email" className="py-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@gmail.com"
                  className=" border border-[#21212380] rounded-[3px] p-2 py-3  outline-none "
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="text" className="py-2">
                  {" "}
                  Residential Address{" "}
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className=" border border-[#21212380] rounded-[3px] p-2 py-3  outline-none "
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="state" className="py-2">
                  {" "}
                  State{" "}
                </label>
                <select
                  name="state"
                  id=""
                  className=" border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer   outline-none "
                >
                  <option value="">Select Your State</option>
                  <option value="">Enugu</option>
                  <option value="">Anambra</option>
                </select>
              </div>
              <div className="flex flex-col  ">
                <label htmlFor="lga" className="py-2">
                  LGA
                </label>
                <select
                  name="LGA"
                  id=""
                  className=" border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer   outline-none "
                >
                  <option value="">Select Your LGA</option>
                  <option value="">Enugu</option>
                  <option value="">Anambra</option>
                </select>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className=" border border-[#21212380] my-5 rounded-[3px] p-2 py-3  outline-none "
                />
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-[#212123] font-semibold text-[18px]">
              Upload Identification ID
            </h2>
            <p className="italic font-[300] text-[18px] py-2">
              NIN, Driver Licence
            </p>

            <div className="bg-[#F0F0F0] my-5 py-2 w-[149px]  rounded-lg px-4 flex items-center gap-2 cursor-pointer ">
              <img src="\UploadSimple.png" alt="" />
              <p>Upload ID</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-6  ">
              <div className="flex flex-col gap-4 items-center">
                <img src="/passport2.png" alt="" />
                <p className="underline cursor-pointer">
                  View Drivers lincence
                </p>
                <div className="bg-[#F0F0F0] py-2   rounded-lg px-3 flex items-center gap-2 cursor-pointer ">
                  <img
                    src="\UploadSimple.png"
                    alt=""
                    className="sm:w-[24px] w-[18px] "
                  />
                  <p className="text-[15px] sm:text-[16px] ">change</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src="/passport2.png" alt="" />
                <p className="underline cursor-pointer">
                  View Drivers lincence
                </p>
                <div className="bg-[#F0F0F0] py-2   rounded-lg px-3 flex items-center gap-2 cursor-pointer ">
                  <img
                    src="\UploadSimple.png"
                    alt=""
                    className="sm:w-[24px] w-[18px]"
                  />
                  <p className="text-[15px] sm:text-[16px] ">change</p>
                </div>
              </div>
            </div>

            <div className="py-8">
              <div className="py-5">
                <h2 className="text-[19px] font-semibold  ">Assign Vehicle</h2>
                <p className="text-[#212123]  text-[18px] italic ">
                  Assign vehicle to driver
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="">Choose Vehicle</label>
                <select
                  name=""
                  id=""
                  className=" border border-[#21212380] rounded-[3px] p-2 py-3 cursor-pointer  outline-none "
                >
                  <option value="">Choose Vehicle</option>
                  <option value="">Vehicle 1</option>
                  <option value="">Vehicle 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-3 ">
          <button className="bg-[#004AAD] hover:bg-[#004bade7] duration-300 transition-all rounded-[10px] px-10 py-2 text-white ">
            {" "}
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
