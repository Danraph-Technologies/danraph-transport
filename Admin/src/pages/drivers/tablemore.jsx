import React, { useState, useRef, useEffect } from "react";

function TableMore({ onOpenDriverProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleViewDetails = () => {
    if (onOpenDriverProfile) {
      onOpenDriverProfile(); // 👈 Trigger modal open
    }
    setIsOpen(false); // 👈 Also close dropdown
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <div
        className="cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
            fill="#5C5F62"
          />
        </svg>
      </div>

      {/* Dropdown Menu - Only shown when isOpen is true */}
      {isOpen && (
        <div className="w-[180px] py-3 px-2 bg-white shadow-2xl border rounded-lg absolute top-6 right-0 z-10">
          <div className="flex flex-col px-2">
            <p className="hover:underline border-b pb-2 cursor-pointer" onClick={handleViewDetails}>
              View details
            </p>
            <p className="hover:underline border-b py-2 cursor-pointer">
              Activate User
            </p>
            <p className="hover:underline border-b py-2 cursor-pointer">
              Deactivate User
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableMore;