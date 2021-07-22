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
            <span>psicoeducativos</span>
          </h3>
          <p>
            Son <span>procesos</span> donde a través de diversas herramientas
            nos facilitan la elaboración de tratamientos para los
            <span> conflictos </span> emocionales que no permiten que las
            personas gocen de un estado de
            <span> bienestar personal</span>
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
            <span>empresariales</span>
          </h3>
          <p>
            Son programas que se apoyan en investigaciones aplicadas de
            <span> psicología positiva</span> y se aplican para diseñar
            programas de intervención en los medios empresariales ...
          </p>
        </div>
        <Link to="/programas/empresariales" className="secondary-btn">
          Conoce m&aacute;s
        </Link>
      </section>
    </section>
  );
}
