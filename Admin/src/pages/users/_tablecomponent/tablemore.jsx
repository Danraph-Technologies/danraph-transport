import React, { useState, useEffect, useRef } from "react";

function TableMore({ onViewDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Close other dropdowns when this one opens
      const otherDropdowns = document.querySelectorAll(".table-more-dropdown");
      otherDropdowns.forEach((dropdown) => {
        if (dropdown !== dropdownRef.current) {
          const button = dropdown.querySelector("button");
          if (button) {
            button._dropdownState?.setIsOpen(false);
          }
        }
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Store reference to setIsOpen for other dropdowns to access
  useEffect(() => {
    const button = dropdownRef.current?.querySelector("button");
    if (button) {
      button._dropdownState = { setIsOpen };
    }
    return () => {
      if (button) {
        delete button._dropdownState;
      }
    };
  }, []);

  return (
    <div className="relative table-more-dropdown" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 cursor-pointer"
        >
          <path
            d="M10.3422 2.83496C9.47023 2.83496 8.75684 3.54835 8.75684 4.42028C8.75684 5.2922 9.47023 6.0056 10.3422 6.0056C11.2141 6.0056 11.9275 5.2922 11.9275 4.42028C11.9275 3.54835 11.2141 2.83496 10.3422 2.83496ZM10.3422 13.9322C9.47023 13.9322 8.75684 14.6456 8.75684 15.5175C8.75684 16.3894 9.47023 17.1028 10.3422 17.1028C11.2141 17.1028 11.9275 16.3894 11.9275 15.5175C11.9275 14.6456 11.2141 13.9322 10.3422 13.9322ZM10.3422 8.38357C9.47023 8.38357 8.75684 9.09696 8.75684 9.96889C8.75684 10.8408 9.47023 11.5542 10.3422 11.5542C11.2141 11.5542 11.9275 10.8408 11.9275 9.96889C11.9275 9.09696 11.2141 8.38357 10.3422 8.38357Z"
            fill="#5C5F62"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute flex justify-center right-0 mt-1 w-[180px] px-4 bg-white rounded-[5px] shadow-lg z-50 border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full">
            <p
              className="p-2 hover:underline cursor-pointer "
              onClick={() => {
                onViewDetails?.();
                setIsOpen(false);
              }}
            >
              View Details
            </p>
            <p className="p-2 hover:underline cursor-pointer border-t border-gray-100">
              Deactivate user
            </p>
            <p className="p-2 hover:underline cursor-pointer border-t border-gray-100">
              Reactivate user
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableMore;
