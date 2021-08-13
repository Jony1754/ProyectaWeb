import React from "react";
import "../assets/styles/Features.scss";
import psicoImg from "../assets/icons/therapy.svg";
import empresa from "../assets/icons/company.svg";
import { Link } from "react-router-dom";
export default function FeatureContainer() {
  return (
    <section className="feature--container">
      <section className="feature">
        <div className="feature--img-container">
          <img src={empresa} alt="" />
        </div>
        <div className="feature--description-container">
          <h3 className="feature--title">
            Programas <br />
            <span>psicoterapéuticos</span>
          </h3>
          <p>
            Son <span>procesos</span> que mediante diversas herramientas,
            nos facilitan la elaboración de tratamientos para los
            <span> conflictos </span> emocionales que no permiten que las
            personas gocen de un estado de
            <span> bienestar personal</span>.
          </p>
        </div>
        <Link to="/programas/psicoeducativos" className="secondary-btn">
          Conoce m&aacute;s
        </Link>
      </section>
      <section className="feature">
        <div className="feature--img-container">
          <img src={psicoImg} alt="" />
        </div>

        <div className="feature--description-container">
          <h3 className="feature--title">
            Programas <br />
            <span>empresariales y psicoeducativos</span>
          </h3>
          <p>
          Son <span>programas</span> psicoeducativos diseñados para la <span>intervención y la mejora</span> de la salud cognitiva 
          y emocional en los ambientes laborales y/o institucionales.
          </p>
        </div>
        <Link to="/programas/empresariales" className="secondary-btn">
          Conoce m&aacute;s
        </Link>
      </section>
    </section>
  );
}
