import React from "react";
import "../assets/styles/Asesoria.scss";
const Aseroria = () => {
  return (
    <main>
      <h2 className="BigTitle">
        ASESOR&Iacute;A <span>VIRTUAL</span>{" "}
      </h2>
      <section className="main-form">
        <form className="contact" autoComplete="off">
          <div className="contact--group__select">
            <label htmlFor="select">Selecciona un programa de tu interes</label>
            <div className="select">
              <select
                name="select"
                id="select"
                placeholder="Selecciona un programa"
                className="contact--group__select-input"
              >
                <option value="psicoeducativos">psicoeducativos</option>
                <option value="empresariales">empresariales</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
          <div className="contact--group">
            <label htmlFor="name">Tu nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="contact--group-input"
            />
          </div>
          <div className="contact--group">
            <label htmlFor="name">Tu correo</label>
            <input
              type="email"
              id="name"
              name="email"
              required
              className="contact--group-input"
            />
          </div>
          <div className="contact--group">
            <label htmlFor="phone">Tu n&uacute;mero de tel&eacute;fono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="contact--group-input"
            />
          </div>
          <div className="contact--group">
            <label htmlFor="name">D&eacute;janos un mensaje</label>

            <textarea
              name="message"
              rows="10"
              cols="45"
              className="message contact--group-input"
              defaultValue=""
            ></textarea>
          </div>
          <button type="button" className="send">
            Enviar
          </button>
        </form>
        <article className="main-form-description">
          <h2 className="BigTitle">
            Con&eacute;ctate con <span>nosotros</span>
          </h2>

          <p>
            Hoy en día para comunicarse es necesario utilizar las nuevas
            tecnologías y los portales virtuales que nos ofrecen la posibilidad
            de hablar a distancia. Por esta razón,
            <span> PROYECTA Potenciales Humanos </span>
            le proporciona la facilidad de solicitar asesorías virtuales con
            nuestra experta en el tema a través de los canales de comunicación
            tecnológicos como Skype y WhatsApp.
          </p>
          <br />
          <p>
            Para solicitar su primera asesoría virtual personalizada, llene el
            formulario a continuación y de inmdediato será contactado con
            nuestra especialista o comuníquese a través de nuestra línea
            telefónica <span>+57 314 565 7611</span>.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Aseroria;
