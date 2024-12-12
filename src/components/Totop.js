import React, { useState, useEffect } from "react";
import "./Totop.css";

const Totop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 400) { // Check if scrolled more than 400px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page with a smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {/* Scroll Up Button */}
      <button
        className={`button-57 ${isVisible ? "visible" : ""}`} // Add visible class when button should be visible
        onClick={scrollToTop}
      >
        <span id='engtext'>To Top</span>
        <span id='hrvtext'>Vrati na vrh</span>
        <span id='engtext'>Scroll Up</span>
      </button>
      
    </div>
  );
};

export default Totop;

