import React, { useRef } from "react";
import img from "../assets/danraph-arrow.png";
import ImageWithSkeleton from "../components/skeleton";

const trips = () => {
  const pastTripsRef = useRef(null);
  const scrollToBottom = () => {
    if (pastTripsRef.current) {
      pastTripsRef.current.scrollTo({
        top: pastTripsRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pb-12">
      <div className="max-w-[510px] relative w-full border border-gray-300 rounded-lg px-4 lg:mx-5 py-4">
        <p className="sm:text-[26px] text-[21px] font-semibold pb-2 ">
          Ongoing Trips
        </p>

        <div className="max-h-[80vh] overflow-auto hide-scrollbar-sm">
          <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 my-5">
            <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
              <p>Main Gate</p>
              <ImageWithSkeleton
                src={img}
                alt=""
                className="max-w-[18px] w-full"
              />
              <p>Hostel A</p>
            </div>
            <p className=" text-[#585858] font-light text-[17px] sm:text-[21px] py-3 sm:py-2">
              1.2 miles
            </p>
            <div className="flex justify-between text-[18px] sm:text-[23px]">
              <p>Fare</p>
              <p>₦500</p>
            </div>

            <div className="flex gap-3 items-center cursor-pointer ">
              <p className="sm:text-[20px] text-[18px] text-[#004AAD] hover:text-[#004bada6] transition-all duration-300 font-semibold underline pt-2 sm:pt-5">
                Contact Customer.
              </p>

              <svg
                className="sm:translate-y-3 translate-y-2 sm:max-w-[17px] w-full max-w-[14px]"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5371 0.921604V12.2677C16.5371 12.4992 16.4452 12.7212 16.2815 12.8848C16.1178 13.0485 15.8958 13.1405 15.6643 13.1405C15.4329 13.1405 15.2109 13.0485 15.0472 12.8848C14.8835 12.7212 14.7916 12.4992 14.7916 12.2677V3.02827L2.31741 15.5035C2.15364 15.6673 1.93152 15.7593 1.69992 15.7593C1.46832 15.7593 1.2462 15.6673 1.08243 15.5035C0.918664 15.3397 0.82666 15.1176 0.82666 14.886C0.82666 14.6544 0.918664 14.4323 1.08243 14.2685L13.5577 1.79438H4.31825C4.08677 1.79438 3.86478 1.70243 3.7011 1.53875C3.53743 1.37507 3.44547 1.15308 3.44547 0.921604C3.44547 0.690129 3.53743 0.468136 3.7011 0.304458C3.86478 0.140781 4.08677 0.0488281 4.31825 0.0488281H15.6643C15.8958 0.0488281 16.1178 0.140781 16.2815 0.304458C16.4452 0.468136 16.5371 0.690129 16.5371 0.921604Z"
                  fill="#004AAD"
                />
              </svg>
            </div>
          </div>

          <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 my-5">
            <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
              <p>Main Gate</p>
              <ImageWithSkeleton
                src={img}
                alt=""
                className="max-w-[18px] w-full"
              />
              <p>Hostel A</p>
            </div>
            <p className=" text-[#585858] font-light text-[17px] sm:text-[21px] py-3 sm:py-2">
              1.2 miles
            </p>
            <div className="flex justify-between text-[18px] sm:text-[23px]">
              <p>Fare</p>
              <p>₦500</p>
            </div>

            <div className="flex gap-3 items-center cursor-pointer ">
              <p className="sm:text-[20px] text-[18px] text-[#004AAD] hover:text-[#004bada6] transition-all duration-300 font-semibold underline pt-2 sm:pt-5">
                Contact Customer.
              </p>

              <svg
                className="sm:translate-y-3 translate-y-2 sm:max-w-[17px] w-full max-w-[14px]"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5371 0.921604V12.2677C16.5371 12.4992 16.4452 12.7212 16.2815 12.8848C16.1178 13.0485 15.8958 13.1405 15.6643 13.1405C15.4329 13.1405 15.2109 13.0485 15.0472 12.8848C14.8835 12.7212 14.7916 12.4992 14.7916 12.2677V3.02827L2.31741 15.5035C2.15364 15.6673 1.93152 15.7593 1.69992 15.7593C1.46832 15.7593 1.2462 15.6673 1.08243 15.5035C0.918664 15.3397 0.82666 15.1176 0.82666 14.886C0.82666 14.6544 0.918664 14.4323 1.08243 14.2685L13.5577 1.79438H4.31825C4.08677 1.79438 3.86478 1.70243 3.7011 1.53875C3.53743 1.37507 3.44547 1.15308 3.44547 0.921604C3.44547 0.690129 3.53743 0.468136 3.7011 0.304458C3.86478 0.140781 4.08677 0.0488281 4.31825 0.0488281H15.6643C15.8958 0.0488281 16.1178 0.140781 16.2815 0.304458C16.4452 0.468136 16.5371 0.690129 16.5371 0.921604Z"
                  fill="#004AAD"
                />
              </svg>
            </div>
          </div>

          <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 my-5">
            <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
              <p>Main Gate</p>
              <ImageWithSkeleton
                src={img}
                alt=""
                className="max-w-[18px] w-full"
              />
              <p>Hostel A</p>
            </div>
            <p className=" text-[#585858] font-light text-[17px] sm:text-[21px] py-3 sm:py-2">
              1.2 miles
            </p>
            <div className="flex justify-between text-[18px] sm:text-[23px]">
              <p>Fare</p>
              <p>₦500</p>
            </div>

            <div className="flex gap-3 items-center cursor-pointer ">
              <p className="sm:text-[20px] text-[18px] text-[#004AAD] hover:text-[#004bada6] transition-all duration-300 font-semibold underline pt-2 sm:pt-5">
                Contact Customer.
              </p>

              <svg
                className="sm:translate-y-3 translate-y-2 sm:max-w-[17px] w-full max-w-[14px]"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5371 0.921604V12.2677C16.5371 12.4992 16.4452 12.7212 16.2815 12.8848C16.1178 13.0485 15.8958 13.1405 15.6643 13.1405C15.4329 13.1405 15.2109 13.0485 15.0472 12.8848C14.8835 12.7212 14.7916 12.4992 14.7916 12.2677V3.02827L2.31741 15.5035C2.15364 15.6673 1.93152 15.7593 1.69992 15.7593C1.46832 15.7593 1.2462 15.6673 1.08243 15.5035C0.918664 15.3397 0.82666 15.1176 0.82666 14.886C0.82666 14.6544 0.918664 14.4323 1.08243 14.2685L13.5577 1.79438H4.31825C4.08677 1.79438 3.86478 1.70243 3.7011 1.53875C3.53743 1.37507 3.44547 1.15308 3.44547 0.921604C3.44547 0.690129 3.53743 0.468136 3.7011 0.304458C3.86478 0.140781 4.08677 0.0488281 4.31825 0.0488281H15.6643C15.8958 0.0488281 16.1178 0.140781 16.2815 0.304458C16.4452 0.468136 16.5371 0.690129 16.5371 0.921604Z"
                  fill="#004AAD"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p className="sm:text-[26px] text-[22px] font-semibold py-1 pb-3 pt-3 my-3">
            Past Trips
          </p>

          <div
            ref={pastTripsRef}
            className="max-h-[80vh] overflow-auto hide-scrollbar-sm"
          >
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>
            <div className="max-w-[330px] w-full border border-gray-300 rounded-lg px-4 py-3 pb-8 my-5">
              <div className=" flex justify-between items-center text-[18px] sm:text-[21px]">
                <p>Main Gate</p>
                <ImageWithSkeleton
                  src={img}
                  alt=""
                  className="max-w-[18px] w-full"
                />
                <p>Hostel A</p>
              </div>
              <p className=" text-[#585858] font-light text-[18px] sm:text-[21px] sm:py-2 py-3">
                1.2 miles
              </p>
              <div className="flex justify-between text-[19px] sm:text-[23px]">
                <p>Fare</p>
                <p>₦500</p>
              </div>

              <hr className="border-gray-300 border-[1.2px] my-2" />

              <div className="flex justify-between sm:text-[20px] text-[17px] text-[#585858]">
                <p className="font-normal">Completed</p>
                <p className="font-medium">9:30am</p>
              </div>
            </div>{" "}
          </div>
        </div>

        <div
          className="hidden bottom-44 sm:block absolute right-2 z-50 cursor-pointer"
          onClick={scrollToBottom}
        >
          <svg
            width="42"
            height="33"
            viewBox="0 0 42 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.7408 24.6005L21.9283 36.413C21.8065 36.535 21.6617 36.6318 21.5024 36.6979C21.343 36.7639 21.1722 36.7979 20.9998 36.7979C20.8273 36.7979 20.6565 36.7639 20.4971 36.6979C20.3378 36.6318 20.1931 36.535 20.0712 36.413L8.25866 24.6005C8.01238 24.3542 7.87402 24.0202 7.87402 23.6719C7.87402 23.3236 8.01238 22.9896 8.25866 22.7433C8.50494 22.497 8.83896 22.3586 9.18725 22.3586C9.53554 22.3586 9.86957 22.497 10.1158 22.7433L19.6873 32.3163V6.60938C19.6873 6.26128 19.8255 5.92744 20.0717 5.6813C20.3178 5.43516 20.6517 5.29687 20.9998 5.29688C21.3478 5.29687 21.6817 5.43516 21.9278 5.6813C22.174 5.92744 22.3123 6.26128 22.3123 6.60938V32.3163L31.8837 22.7433C32.1299 22.497 32.464 22.3586 32.8123 22.3586C33.1605 22.3586 33.4946 22.497 33.7408 22.7433C33.9871 22.9896 34.1255 23.3236 34.1255 23.6719C34.1255 24.0202 33.9871 24.3542 33.7408 24.6005Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default trips;
