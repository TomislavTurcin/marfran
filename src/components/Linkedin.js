import React from "react";
import linkedinImage from "../link.png"; // path slike koja se nalazi u src folderu
import "./Linkedin.css";

const Linkedin = () => {
  return (
    <div className="linkedin-container">
      <a
        href="https://www.linkedin.com/in/martin-frani%C4%87-185b22320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
        target="_blank" //opcija da otvori stranicu na drugom prozoru
        rel="noopener noreferrer" // Security measure for external links
      >
        <img
          src={linkedinImage}
          alt="LinkedIn Profile"
          className="linkedin-image"
        />
      </a>
    </div>
  );
};

export default Linkedin;



