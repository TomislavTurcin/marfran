import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from './texture.jpg';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Slideshow from './components/Slideshow';
import Totop from './components/Totop';  
import Menu from './components/Menu'; 

function App() {
  const [isCroatian, setIsCroatian] = useState(false); // Language state

  // Function to toggle the language
  const handleLanguageToggle = (newLang) => {
    setIsCroatian(newLang);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add class when section is in view
            observer.unobserve(entry.target); // Stop observing this section
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of a section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="App-header">
        <nav>
          {/* Pass language toggle function to Menu */}
          <Menu onLanguageToggle={handleLanguageToggle} isCroatian={isCroatian} />
        </nav>
        <h1 id='home'>MAR FRAN</h1>
      </header>
      
      {/* Pass the language state to Slideshow */}
      <Slideshow isCroatian={isCroatian} />
      <Totop />
      
      <main>
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 MARFRAN. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


