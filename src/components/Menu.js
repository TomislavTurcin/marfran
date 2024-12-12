import React from 'react';
import Linkedin from './Linkedin';
import Hrv from './Hrv';
import "./Menu.css";

function Menu({ onLanguageToggle, isCroatian }) {
  return (
    <ul className="menu">
      <li>
        <a href="#home" >MAR FRAN</a>
      </li>
      <li className="dropdown">
        <a href="#services" id='engtext'>Services</a>
        <a href="#services" id='hrvtext'>Usluge</a>
        <ul className="dropdown-menu">
          <li>
            <a href="#oak" id='engtext'>Oak</a>
            <a href="#oak" id='hrvtext'>Hrast</a>
          </li>
          <li>
            <a href="#ash" id='engtext'>Ash</a>
            <a href="#ash" id='hrvtext'>Jasen</a>
          </li>
          <li>
            <a href="#beech" id='engtext'>Beech</a>
            <a href="#beech" id='hrvtext'>Bukva</a>
          </li>
          <li>
            <a href="#acacia" id='engtext'>Acacia</a>
            <a href="#acacia" id='hrvtext'>Bagrem</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#about" id='engtext'>About Us</a>
        <a href="#about" id='hrvtext'>O nama</a>
      </li>
      <li>
        <a href="#contact" id='engtext'>Contact</a>
        <a href="#contact" id='hrvtext'>Kontakt</a>
      </li>
      <Linkedin />
      {/* Pass onLanguageToggle to Hrv */}
      <Hrv onLanguageToggle={onLanguageToggle} isCroatian={isCroatian} />
    </ul>
  );
}

export default Menu;
