import React from "react";
import programs from "../assets/icons/programs.svg";
import phone from "../assets/icons/phone.svg";
import position from "../assets/icons/Position.svg";
import "../assets/styles/Footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="footer--item">
        <img src={programs} alt="" />
        <h3 className="footer--item-title">Programas</h3>
        <ul>
          <li>Psicoterap&eacute;uticos</li>
          <li>Empresariales</li>
        </ul>
      </div>
      <div className="footer--item">
        <img src={phone} alt="" />
        <h3 className="footer--item-title">Cont&aacute;ctanos</h3>
        <ul>
          <li>(+57) 314 565 7611</li>
          <li>info@proyecta.com</li>
        </ul>
      </div>
      <div className="footer--item">
        <img src={position} alt="" />
        <h3 className="footer--item-title">Encu&eacute;ntranos</h3>
        <ul>
          <li>Cra 54 #132-120</li>
          <li>Barranquilla</li>
        </ul>
      </div>
    </footer>
  );
}
