import React from "react";
import "../assets/styles/Asesoria.scss";
const Aseroria = () => {
  return (
    <main>
      <h2>
        ASESOR&Iacute;A <span>VIRTUAL</span>{" "}
      </h2>
      <form className="contact">
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
    </main>
  );
};

export default Aseroria;
