import React from "react";
import "../assets/styles/Features.scss";
import psicoImg from "../assets/images/psico.jpg";
import empresa from "../assets/images/empresa.jpg";
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
            <span>psicoterap&eacute;uticos</span>
          </h3>
          <p>
            Son <span>procesos</span> donde a través de diversas herramientas
            nos facilitan la elaboración de
            <span> conflictos </span> emocionales que no permiten que las
            personas lograr gozar de un estado de
            <span> bienestar personal</span>
          </p>
          <a href="#" className="secondary-btn">
            Conoce m&aacute;s
          </a>
        </div>
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
          <a href="#" className="secondary-btn">
            Conoce m&aacute;s
          </a>
        </div>
      </section>
    </section>
  );
}
