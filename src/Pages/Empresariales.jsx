import React from "react";
import Program from "../Components/Program";
import { programsList } from "../utils/programsList";
import "../assets/styles/Programs.scss";
export default function Empresariales() {
  return (
    <main className="empresariales">
      <h2 className="BigTitle">
        PROGRAMAS <span> EMPRESARIALES</span>
      </h2>
      <section className="programs--container">
        {programsList.map((program) => (
          <Program
            image={program.img}
            name={program.programName}
            description={program.description}
            key={program.id}
          />
        ))}
      </section>

      <section className="programs--description">
        <p>
          Programas empresariales orientados a la salud emocional aplicada
          al área de desarrollo humano tomando como referente investigaciones con
          enfocadas en el constructivismo y la <span>psicología positiva</span>,
          con el objetivo de diseñar programas de <span>intervención</span> en
          los medios empresariales; estas poseen varios objetivos
          en los que se encuentra la reestructuración de hábitos, la mejora del
          comportamiento grupal o individual, el fortalecimiento de competencias que
          apunten al bienestar de los trabajadores y así estos logren percibir mayor sensación de bienestar, placer y
          felicidad en su <span>realización profesional</span> y personal.
        </p>
      </section>
    </main>
  );
}
