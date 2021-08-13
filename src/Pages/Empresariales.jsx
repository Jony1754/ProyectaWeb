import React from "react";
import Program from "../Components/Program";
import { programsList } from "../utils/programsList";
import "../assets/styles/Programs.scss";
export default function Empresariales() {
  return (
    <main className="empresariales">
      <h2 className="BigTitle">
        PROGRAMAS <span> EMPRESARIALES Y PSICOEDUCATIVOS</span>
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
        Son programas que se apoyan en investigaciones científicas para 
        el diseño e intervención en medios empresariales con el fin de fortalecer el <span>crecimiento personal y grupal</span>.
        </p>
      </section>
    </main>
  );
}
