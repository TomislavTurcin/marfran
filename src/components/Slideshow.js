import React, { useState, useEffect } from "react";
import "./Slideshow.css";

// Import images directly from src folder
import hrast from "../hrast.jpg";
import jasen from "../jasen.jpg";
import bukva from "../bukva.jpg";
import bagrem from "../bagrem.jpg";

function Slideshow({ isCroatian }) {
  const images = [hrast, jasen, bukva, bagrem]; // Array of images imported from src
  const imageNamesEng = ["Oak", "Ash", "Beech", "Acacia"]; // English names of the images
  const imageNamesHrv = ["Hrast", "Jasen", "Bukva", "Bagrem"]; // Croatian names of the images

  const [currentIndex, setCurrentIndex] = useState(0); // Track current image
  const [isFading, setIsFading] = useState(false); // State for fade-in/fade-out effect

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out effect before image change
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image after fade-out
        setIsFading(false); // Start fade-in effect for new image
      }, 500); // Wait for 500ms (duration of the fade-out)
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="slideshow">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`slideshow-image ${isFading ? "fade-out" : "fade-in"}`}
        />
        <div className="image-name">
          <span
            id="engtext"
            style={{ display: isCroatian ? "none" : "block" }}
          >
            {imageNamesEng[currentIndex]} {/* Display English name */}
          </span>
          <span
            id="hrvtext"
            style={{ display: isCroatian ? "block" : "none" }}
          >
            {imageNamesHrv[currentIndex]} {/* Display Croatian name */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;








