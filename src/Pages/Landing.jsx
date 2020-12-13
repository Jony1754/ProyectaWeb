import React from "react";
import FeatureContainer from "../Containers/FeatureContainer.jsx";
import "../assets/styles/Main.scss";
import badge from "../assets/icons/person_badge.svg";
import Hero from "../Components/Hero";
import logo from "../assets/images/logo.svg";
export default function Main() {
  return (
    <>
      <Hero />
      <main>
        <h2>SOBRE NOSOTROS</h2>
        <section className="about" id="about">
          <img src={logo} alt="" className="header--logo" />
          <p>
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
        <h2>
          <span>SERVICIOS</span> QUE OFRECEMOS
        </h2>
        <FeatureContainer />
      </main>
    </>
  );
}
