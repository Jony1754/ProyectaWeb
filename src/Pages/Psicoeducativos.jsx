import React from "react";
import { psicoeducativos } from "../utils/programsList";
import Program from "../Components/Program";
import "../assets/styles/Programs.scss";

export default function Psicoeducativos() {
  return (
    <main className="empresariales">
      <h2 className="BigTitle">
        PROGRAMAS <span>PSICOTERAPÉUTICOS</span>
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
        Son procesos donde, a través de diversas herramientas terapéuticas, nos
        facilitan el tratamiento de conflictos con el objetivo de que las personas
        logren gozar de un mayor estado de bienestar emocional. En estos
        procedimientos también se trabaja la reconstrucción de hábitos, la identificación del porqué de nuestros comportamientos y cómo reestructurarlos
        por acciones más saludables que permitan un desarrollo integro de la persona e impulsen el potencial humano. 
      </section>
    </main>
  );
}
