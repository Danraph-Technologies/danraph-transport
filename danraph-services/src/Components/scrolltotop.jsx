// ScrollToTop.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // This effect will run every time the location (route) changes

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;
