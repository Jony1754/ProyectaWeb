import React from "react";
import FeatureContainer from "../Containers/FeatureContainer.jsx";
import "../assets/styles/Main.scss";
import badge from "../assets/icons/person_badge.svg";
import logo from "../assets/images/logo.svg";
import heroImg from "../assets/images/landing.jpg";

export default function Landing() {
  return (
    <>
      <div className="hero">
        <img src={heroImg} alt="" className="hero--img" />
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
      <main>
        <h2 className="BigTitle">SOBRE NOSOTROS</h2>
        <section className="about" id="about">
          <img src={logo} alt="" className="header--logo" />
          <p className="about__description">
            Somos una empresa que se enfoca en generar y fortalecer la
            <span> salud emocional y cognitiva</span> a través de la
            reestructuración de hábitos. Proporcionamos herramientas que
            permiten a través del autoconocimiento explotar el{" "}
            <span>potencial</span> de cada ser humano, a través del diagnóstico,
            diseño, coordinación y ejecución de programas de intervención.
            Tenemos
            <span> 15 años</span> de experiencia y desde la
            <span> psicología clínica </span>
            hemos aprendido la importancia de la salud emocional y cómo de esta
            depende el comportamiento y desarrollo de
          </p>
          <img src={badge} alt="" className="badge" />
        </section>

        <h2 className="BigTitle">
          <span>SERVICIOS</span> QUE OFRECEMOS
        </h2>
        <FeatureContainer />
      </main>
    </>
  );
}
