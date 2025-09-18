import React, { useState, useRef, useEffect } from "react";
import TableMore from "./_tablecomponent/tablemore";
import Viewdetailsmodal from "./_tablecomponent/Viewdetailsmodal";

function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  const handleViewDetails = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const handleCloseModal = () => {
    if (isClosing || !isModalOpen) return;

    setIsClosing(true);
    // Wait for the animation to complete before removing the modal from the DOM
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300); // Match this with your animation duration
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isClosing]);

  return (
    <div className="relative">
      <div className="max-w-[1105px] w-full rounded-lg border border-gray-300 py-3 px-4 ">
        <p className="text-[20px] font-semibold py-2">User Management</p>
        <div className=" relative py-3 mb-2">
          <input
            type="name"
            name=""
            id=""
            className="w-full rounded-full border border-gray-300 outline-none px-10 py-[10px]  placeholder:text-[#6264A0]"
            placeholder="Search user"
          />

          <div className="flex items-center gap-2 text-[#6264A0] absolute left-3 top-1/2 -translate-y-1/2">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0269 2.606C7.84116 2.60967 5.74597 3.47958 4.2004 5.02515C2.65483 6.57072 1.78491 8.66591 1.78125 10.8517C1.78308 13.0393 2.65196 15.137 4.19753 16.6851C5.7431 18.2333 7.83932 19.1057 10.0269 19.1112C11.9671 19.1112 13.7548 18.4287 15.1683 17.2992L18.6017 20.7326C18.7757 20.8943 19.0055 20.9824 19.243 20.9782C19.4804 20.9741 19.7071 20.878 19.8752 20.7103C20.0434 20.5426 20.14 20.3162 20.1448 20.0788C20.1496 19.8413 20.0622 19.6112 19.9009 19.4369L16.4675 16C17.6402 14.5416 18.2794 12.7265 18.2795 10.8551C18.2795 6.30963 14.5724 2.606 10.0269 2.606ZM10.0269 4.44222C13.5816 4.44222 16.4433 7.30049 16.4433 10.8517C16.4433 14.4029 13.5816 17.2784 10.0269 17.2784C6.47227 17.2784 3.61401 14.4132 3.61401 10.8586C3.61401 7.30396 6.47227 4.44222 10.0269 4.44222Z"
                fill="#6264A0"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.84375 18.8359H3.75C3.55109 18.8359 3.36032 18.9149 3.21967 19.0556C3.07902 19.1962 3 19.387 3 19.5859C3 19.7848 3.07902 19.9756 3.21967 20.1162C3.36032 20.2569 3.55109 20.3359 3.75 20.3359H9.84375C10.009 20.9812 10.3843 21.5532 10.9105 21.9616C11.4367 22.3701 12.0839 22.5918 12.75 22.5918C13.4161 22.5918 14.0633 22.3701 14.5895 21.9616C15.1157 21.5532 15.491 20.9812 15.6562 20.3359H20.25C20.4489 20.3359 20.6397 20.2569 20.7803 20.1162C20.921 19.9756 21 19.7848 21 19.5859C21 19.387 20.921 19.1962 20.7803 19.0556C20.6397 18.9149 20.4489 18.8359 20.25 18.8359L15.6562 18.8359C15.491 18.1906 15.1157 17.6186 14.5895 17.2102C14.0633 16.8017 13.4161 16.58 12.75 16.58C12.0839 16.58 11.4367 16.8017 10.9105 17.2102C10.3843 17.6186 10.009 18.1906 9.84375 18.8359ZM14.25 19.5859C14.25 19.8826 14.162 20.1726 13.9972 20.4193C13.8324 20.6659 13.5981 20.8582 13.324 20.9717C13.0499 21.0853 12.7483 21.115 12.4574 21.0571C12.1664 20.9992 11.8991 20.8564 11.6893 20.6466C11.4796 20.4368 11.3367 20.1695 11.2788 19.8785C11.2209 19.5876 11.2506 19.286 11.3642 19.0119C11.4777 18.7378 11.67 18.5035 11.9166 18.3387C12.1633 18.1739 12.4533 18.0859 12.75 18.0859C13.1478 18.0859 13.5294 18.244 13.8107 18.5253C14.092 18.8066 14.25 19.1881 14.25 19.5859ZM5.34375 12.0859H3.75C3.55109 12.0859 3.36032 12.1649 3.21967 12.3056C3.07902 12.4462 3 12.637 3 12.8359C3 13.0348 3.07902 13.2256 3.21967 13.3662C3.36032 13.5069 3.55109 13.5859 3.75 13.5859H5.34375C5.50898 14.2312 5.88428 14.8032 6.41048 15.2116C6.93669 15.6201 7.58387 15.8418 8.25 15.8418C8.91613 15.8418 9.56331 15.6201 10.0895 15.2116C10.6157 14.8032 10.991 14.2312 11.1562 13.5859L20.25 13.5859C20.4489 13.5859 20.6397 13.5069 20.7803 13.3662C20.921 13.2256 21 13.0348 21 12.8359C21 12.637 20.921 12.4462 20.7803 12.3056C20.6397 12.1649 20.4489 12.0859 20.25 12.0859L11.1562 12.0859C10.991 11.4406 10.6157 10.8686 10.0895 10.4602C9.56331 10.0517 8.91613 9.83003 8.25 9.83003C7.58387 9.83003 6.93669 10.0517 6.41048 10.4602C5.88428 10.8686 5.50898 11.4406 5.34375 12.0859ZM9.75 12.8359C9.75 13.1326 9.66203 13.4226 9.4972 13.6693C9.33238 13.9159 9.09811 14.1082 8.82403 14.2217C8.54994 14.3353 8.24834 14.365 7.95736 14.3071C7.66639 14.2492 7.39912 14.1064 7.18934 13.8966C6.97956 13.6868 6.8367 13.4195 6.77882 13.1285C6.72094 12.8376 6.75065 12.536 6.86418 12.2619C6.97771 11.9878 7.16997 11.7535 7.41665 11.5887C7.66332 11.4239 7.95333 11.3359 8.25 11.3359C8.64782 11.3359 9.02936 11.4939 9.31066 11.7753C9.59196 12.0566 9.75 12.4381 9.75 12.8359ZM15.75 3.08591C15.0849 3.08654 14.4388 3.30776 13.9129 3.71492C13.387 4.12208 13.011 4.69217 12.8438 5.33591H3.75C3.55109 5.33591 3.36032 5.41493 3.21967 5.55558C3.07902 5.69624 3 5.887 3 6.08591C3 6.28483 3.07902 6.47559 3.21967 6.61625C3.36032 6.7569 3.55109 6.83591 3.75 6.83591H12.8438C13.009 7.48123 13.3843 8.05319 13.9105 8.46164C14.4367 8.8701 15.0839 9.0918 15.75 9.0918C16.4161 9.0918 17.0633 8.8701 17.5895 8.46164C18.1157 8.05319 18.491 7.48123 18.6562 6.83591H20.25C20.4489 6.83591 20.6397 6.7569 20.7803 6.61625C20.921 6.47559 21 6.28483 21 6.08591C21 5.887 20.921 5.69624 20.7803 5.55558C20.6397 5.41493 20.4489 5.33591 20.25 5.33591H18.6562C18.489 4.69217 18.113 4.12208 17.5871 3.71492C17.0612 3.30776 16.4151 3.08654 15.75 3.08591ZM17.25 6.08591C17.25 6.38259 17.162 6.6726 16.9972 6.91927C16.8324 7.16594 16.5981 7.3582 16.324 7.47173C16.0499 7.58527 15.7483 7.61497 15.4574 7.55709C15.1664 7.49922 14.8991 7.35635 14.6893 7.14657C14.4796 6.9368 14.3367 6.66952 14.2788 6.37855C14.2209 6.08758 14.2506 5.78598 14.3642 5.51189C14.4777 5.2378 14.67 5.00353 14.9166 4.83871C15.1633 4.67389 15.4533 4.58591 15.75 4.58591C16.1478 4.58591 16.5294 4.74395 16.8107 5.02526C17.092 5.30656 17.25 5.68809 17.25 6.08591Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-max whitespace-nowrap">
            <thead className="bg-[#004AAD]">
              <tr className="text-white text-left">
                <th className="py-2 pl-3 pr-3 w-[146px] font-normal">
                  Full Name
                </th>
                <th className="py-2 pl-2 pr-3 w-[146px] font-normal">
                  User Type
                </th>
                <th className="py-2 pl-2 pr-3 w-[146px] font-normal">
                  Student/Staff ID
                </th>
                <th className="py-2 pl-2 pr-3 w-[146px] font-normal">
                  Phone Number
                </th>
                <th className="py-2 pl-2 pr-3 w-[146px] font-normal">
                  Email Address
                </th>
                <th className="py-2 pl-2 pr-3 w-[146px] font-normal">Status</th>
                <th className="py-2 pl-2 pr-3 w-[146px] font-normal">
                  Wallet Balance
                </th>
                <th className="py-2 pl-2 pr-4 font-normal">More</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block"></span>{" "}
                  <span>Deactivated</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block"></span>{" "}
                  <span>Deactivated</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#34C759] inline-block"></span>{" "}
                  <span>Active</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>

              <tr className="border-b ">
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Grace Joe
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  Student
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  127663377
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  09168071385
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  gracejoe@email.com
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  <span className="rounded-full w-[12px] h-[12px] bg-[#F80B0B] inline-block"></span>{" "}
                  <span>Deactivated</span>{" "}
                </td>
                <td className="whitespace-nowrap border-r border-[#dbdbdb7e] py-4 pl-3 pr-10">
                  {" "}
                  ₦ 5,000
                </td>
                <td className="whitespace-nowrap  py-4 pl-3">
                  <TableMore onViewDetails={handleViewDetails} />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="w-full flex justify-center my-5">
            <div className="w-full max-w-[500px] border border-gray-300 rounded-md bg-white px-2 py-[2px]">
              <div className="flex flex-wrap justify-center items-center gap-2">
                {/* Previous Button */}
                <button className="font-medium cursor-pointer flex flex-row-reverse items-center gap-2 px-2 py-2">
                  <span>Previous</span>
                  <span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.188 6.37674H1.09082M1.09082 6.37674L6.63943 11.9253M1.09082 6.37674L6.63943 0.828125"
                        stroke="#19211F"
                        strokeWidth="1.58849"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {/* Page Numbers - horizontally scrollable on small screens */}
                <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap px-2">
                  <button className="border-l border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f] bg-[#EAECF0] rounded">
                    1
                  </button>
                  <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">
                    2
                  </button>
                  <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">
                    3
                  </button>
                  <span className="px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">
                    <svg
                      width="11"
                      height="3"
                      viewBox="0 0 11 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.88163 2.46583C1.62311 2.46583 1.40085 2.3744 1.21485 2.19155C1.02884 2.00554 0.93584 1.78171 0.93584 1.52004C0.93584 1.26153 1.02884 1.04084 1.21485 0.85799C1.40085 0.671986 1.62311 0.578983 1.88163 0.578983C2.14014 0.578983 2.3624 0.671986 2.5484 0.85799C2.73441 1.04084 2.82741 1.26153 2.82741 1.52004C2.82741 1.69343 2.78328 1.85264 2.695 1.99766C2.60988 2.13953 2.49639 2.25302 2.35452 2.33815C2.21265 2.42327 2.05502 2.46583 1.88163 2.46583ZM5.65295 2.46583C5.39443 2.46583 5.17217 2.3744 4.98617 2.19155C4.80016 2.00554 4.70716 1.78171 4.70716 1.52004C4.70716 1.26153 4.80016 1.04084 4.98617 0.85799C5.17217 0.671986 5.39443 0.578983 5.65295 0.578983C5.91146 0.578983 6.13372 0.671986 6.31973 0.85799C6.50573 1.04084 6.59873 1.26153 6.59873 1.52004C6.59873 1.69343 6.5546 1.85264 6.46632 1.99766C6.3812 2.13953 6.26771 2.25302 6.12584 2.33815C5.98397 2.42327 5.82634 2.46583 5.65295 2.46583ZM9.42427 2.46583C9.16575 2.46583 8.94349 2.3744 8.75749 2.19155C8.57148 2.00554 8.47848 1.78171 8.47848 1.52004C8.47848 1.26153 8.57148 1.04084 8.75749 0.85799C8.94349 0.671986 9.16575 0.578983 9.42427 0.578983C9.68278 0.578983 9.90504 0.671986 10.091 0.85799C10.2771 1.04084 10.3701 1.26153 10.3701 1.52004C10.3701 1.69343 10.3259 1.85264 10.2376 1.99766C10.1525 2.13953 10.039 2.25302 9.89716 2.33815C9.75529 2.42327 9.59766 2.46583 9.42427 2.46583Z"
                        fill="#19211F"
                      />
                    </svg>
                  </span>
                  <button className="border-l border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">
                    8
                  </button>
                  <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">
                    9
                  </button>
                  <button className="border-r px-3 py-2 cursor-pointer hover:bg-[#eaecf09f]">
                    10
                  </button>
                </div>
                {/* Next Button */}
                <button className="font-medium cursor-pointer flex items-center gap-1 px-2 py-2">
                  <span>Next</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.81201 10.3767H15.9092M15.9092 10.3767L10.3606 4.82812M15.9092 10.3767L10.3606 15.9253"
                        stroke="#19211F"
                        strokeWidth="1.58849"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center py-4 z-50 overflow-y-auto transition-opacity duration-300 ease-in-out ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleCloseModal}
        >
         
         <Viewdetailsmodal onClose={handleCloseModal} isClosing={isClosing} />
       
        </div>
      )}
    </div>
  );
}

export default Users;
