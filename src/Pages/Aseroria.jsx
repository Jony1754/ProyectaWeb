import React, { useState } from "react";
import "../assets/styles/Asesoria.scss";
import Modal from "../modals/Modal";
const Aseroria = () => {
  const [form, setValues] = useState({});
  const [value, setValue] = useState("Psicoeducativos");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    console.log(value);

    sendFeedback("template_q2piftr", {
      message_html: form.message,
      from_name: form.name,
      reply_to: form.email,
      program: value,
      phone: form.phone,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_wzt51pg", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <main>
      <h2 className="BigTitle">
        ASESOR&Iacute;A <span>VIRTUAL</span>{" "}
      </h2>
      <section className="main-form">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="contact"
          autoComplete="off"
        >
          <div className="contact--group__select">
            <label htmlFor="select">Selecciona un programa de tu interes</label>
            <div className="select">
              <select
                onChange={handleSelect}
                name="programa"
                id="select"
                placeholder="Selecciona un programa"
                className="contact--group__select-input"
                value={value}
              >
                <option value="psicoeducativos">Psicoeducativos</option>
                <option value="empresariales">Empresariales</option>
                <option value="psicoterapeutico">Psicoterapeuticos</option>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="contact--group">
            <label htmlFor="name">D&eacute;janos un mensaje</label>

            <textarea
              onChange={handleChange}
              name="message"
              rows="10"
              cols="45"
              className="message contact--group-input"
              defaultValue=""
            ></textarea>
          </div>
          <button
            type="submit"
            className="send"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Enviar
          </button>
          <Modal show={showModal} onClose={setShowModal}>
            Se ha enviado su petición. Un asesor de Proyecta lo contactará lo
            antes posible.
          </Modal>
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
