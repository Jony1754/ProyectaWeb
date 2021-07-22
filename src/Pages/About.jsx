import React from "react";
import "../assets/styles/About.scss";
import "../assets/styles/ImageCard.scss";
import ImageCard from "../Components/ImageCard";
import { gallery } from "../utils/gallery";
export default function About() {
  return (
    <main className="about-us">
      <h2 className="BigTitle">
        SOBRE <span>NOSOTROS</span>
      </h2>
      <p className="aboutus--text">
        Somos una empresa que se enfoca en generar y fortalecer la
        <span> salud emocional</span> y cognitiva a través de la
        <span> reestructuración de hábitos</span>. Proporcionamos herramientas
        que permiten, a través del autoconocimiento, explotar el potencial de cada
        ser humano, mediante el diagnóstico, diseño, coordinación y ejecución
        de programas de intervención. Tenemos <span>15 años</span> de
        experiencia y desde la psicología clínica hemos aprendido la importancia
        de la salud emocional y cómo de esta depende el comportamiento y
        desarrollo de las personas en los diferentes contextos; logramos
        evidenciar como con la aceptación de quienes somos y todo lo que se
        logra en el momento que se aceptan realidades hay tanto crecimiento y
        fortalecimiento de los <span>potenciales</span> logrando así evidenciar
        cambios hacia la mejora de la calidad vida.
      </p>
      <br />
      <div className="Gallery">
        {gallery.map((photo) => {
          return <ImageCard {...photo} />;
        })}
        <br />
      </div>
      <p className="about aboutus--text">
        Contamos con un equipo interdisciplinaria con profesionales
        especializados en diversas disciplinas como{" "}
        <span>
          Piscología clínica, Coachs certificados, especialistas en salud
          ocupacional, psicoterapeutas, ingenieros en diseño
        </span>
        , todos al frente del diseño, el coach, la salud y la ingeniería que se
        necesitan para crear programas con las bases necesarias para
        potencializar las cualidades del individuo en sí mismo y desde la
        organización. Como todo sistema de gestión confiable, nuestros programas
        poseen dentro de sus etapas de planeación y ajuste a las necesidades
        tanto individuales como organizacionales, una etapa de medición y
        control a través de indicadores validables que llevan a los cuantitativo
        los rasgos, atributos y/o variables que se deben tener en cuenta para
        alcanzar los objetivos de un programa que pueden ir desde la mejora de
        hábitos en función de la calidad de vida hasta la exploración y el
        fortalecimiento de equipos exitosos de trabajo.
      </p>
    </main>
  );
}
