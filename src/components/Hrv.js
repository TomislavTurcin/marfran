import React from "react";
import "./Hrv.css";

const Hrv = ({ onLanguageToggle, isCroatian }) => {
  // Toggle language when button is clicked
  const handleToggleLanguage = () => {
    onLanguageToggle(!isCroatian); // Call the parent function to update the language state
  };

  return (
    <div className="language-switcher">
      <button onClick={handleToggleLanguage}>
        {isCroatian ? "Hrvatski" : "English"}
      </button>
      <style>
        {`
          /* Hide/Show English text */
          #engtext {
            display: ${isCroatian ? "none" : "block"};
          }
          /* Hide/Show Croatian text */
          #hrvtext {
            display: ${isCroatian ? "block" : "none"};
          }
        `}
      </style>
    </div>
  );
};

export default Hrv;

