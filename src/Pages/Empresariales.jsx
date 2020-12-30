import React from "react";
import Program from "../Components/Program";
import programsList from "../utils/programsList";
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
          Programas empresariales con orientación en la salud emocional aplicada
          al área de desarrollo humano y que se apoyan en investigaciones con
          enfoque en el constructivismo y la <span>psicología positiva</span>,
          con el objetivo de diseñar programas de <span>intervención</span> en
          los medios empresariales; estas intervenciones tienen varios objetivos
          en los que se encuentra reestructurar hábitos, mejorar un
          comportamiento grupal o individual, fortalecer competencias que
          apunten al bienestar de los trabajadores en sus contextos laborales a
          la vez que logren percibir mayor sensación de bienestar, placer y
          felicidad en su <span>realización profesional</span> y personal.
        </p>
      </section>
    </main>
  );
}
