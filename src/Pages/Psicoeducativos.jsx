import React from "react";
import { psicoeducativos } from "../utils/programsList";
import Program from "../Components/Program";
import "../assets/styles/Programs.scss";

export default function Psicoeducativos() {
  return (
    <main className="Empresariales">
      <h2 className="BigTitle">
        PROGRAMAS <span> PSICOEDUCATIVOS</span>
      </h2>

      <section className="programs--container">
        {psicoeducativos.map((program) => (
          <Program
            image={program.img}
            name={program.programName}
            description={program.description}
            key={program.id}
          />
        ))}
      </section>
      <section className="programs--description">
        Son procesos donde a través de diversas herramientas terapéuticas nos
        facilitan el tratamiento de conflictos con el objetivo de que personas
        logren gozar de un mayor estado de bienestar emocional. En estos
        procesos también se trabaja la reconstrucción de hábitos que nos llevan
        a identificar el porqué de nuestros comportamientos y reestructurarlos
        por acciones más saludables.
      </section>
    </main>
  );
}
