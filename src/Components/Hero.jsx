import React from "react";
import "../assets/styles/Hero.scss";
import hero from "../assets/images/landing.jpg";
export default function Hero() {
  return (
    <div className="hero">
      <img src={hero} alt="" className="hero--img" />
      <div className="hero--title-container">
        <h1>
          BUSCANDO EL <span>FORTALECIMIENTO</span> DE LOS
          <span> POTENCIALES</span> HUMANOS
        </h1>
        <a href="#about" className="hero--button">
          Conoce m&aacute;s
        </a>
      </div>
    </div>
  );
}
