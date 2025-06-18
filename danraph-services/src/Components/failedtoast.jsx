import React, { useEffect, useRef } from "react";

// Sonner-like: show toast immediately, no stacking/queue, just animate in/out, auto-dismiss
const Failedtoast = ({ message, trigger }) => {
  const toastRef = useRef();

  useEffect(() => {
    if (trigger && message) {
      // Show toast
      if (toastRef.current) {
        toastRef.current.classList.remove("opacity-0");
        toastRef.current.classList.add("opacity-100");
        // Hide after 3s
        setTimeout(() => {
          if (toastRef.current) {
            toastRef.current.classList.remove("opacity-100");
            toastRef.current.classList.add("opacity-0");
          }
        }, 3000);
      }
    }
  }, [trigger, message]);

  // Always render, but hidden unless triggered
  return (
    <div
      ref={toastRef}
      className="fixed left-1/2 top-0 z-50 flex flex-col items-center space-y-2 transition-opacity duration-500 opacity-0"
      style={{ minWidth: 300, maxWidth: 400, transform: "translateX(-50%)" }}
    >
      <div className="px-3 py-1 rounded-b-lg bg-red-600 shadow-lg shadow-red-400 transition-transform duration-500 ease-in-out translate-y-0 animate-slideInOut">
        <p className="text-white text-center">{message}</p>
      </div>
    </div>
  );
};

export default Failedtoast;
